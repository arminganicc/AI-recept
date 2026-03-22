// Simple in-memory rate limiter
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_MAX = 10;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.start > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

const ALLOWED_ORIGINS = [
  'https://vadskavialaga.se',
  'https://www.vadskavialaga.se',
  'https://receptappen.vercel.app',
];

function getCorsHeaders(origin) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (ALLOWED_ORIGINS.includes(origin) || (origin && origin.endsWith('.vercel.app'))) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

const VALID_MEDIA_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB base64

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  const corsHeaders = getCorsHeaders(origin);
  Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Rate limiting
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'För många förfrågningar. Vänta en stund och försök igen.' });
  }

  const { image, mediaType, language } = req.body;
  if (!image) return res.status(400).json({ error: 'Missing image' });

  // Validate image size
  if (image.length > MAX_IMAGE_SIZE) {
    return res.status(413).json({ error: 'Bilden är för stor. Max 10 MB.' });
  }

  // Validate media type
  const safeMediaType = VALID_MEDIA_TYPES.includes(mediaType) ? mediaType : 'image/jpeg';

  const validLangs = ['sv', 'en', 'es', 'bs'];
  const lang = validLangs.includes(language) ? language : 'sv';

  const langInstruction = {
    sv: 'Svara på svenska.',
    en: 'Respond in English.',
    es: 'Responde en español.',
    bs: 'Odgovori na bosanskom.',
  }[lang] || 'Svara på svenska.';

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: safeMediaType,
                data: image,
              },
            },
            {
              type: 'text',
              text: `Identifiera alla matvaror, ingredienser och råvaror du ser i bilden. Det kan vara ett kylskåp, skafferi, matbord, kassar från mataffären eller liknande. Svara ENBART med en JSON-array av ingrediensnamn i gemener, t.ex. ["kyckling","tomat","lök"]. Inga andra ord eller förklaringar. ${langInstruction}`,
            },
          ],
        }],
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const data = await response.json();
    if (!response.ok) {
      console.error('Anthropic Vision API error:', response.status, data);
      return res.status(response.status >= 500 ? 502 : response.status).json({ error: 'Bildanalys misslyckades. Försök igen.' });
    }
    return res.status(200).json(data);
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      return res.status(504).json({ error: 'Bildanalys tog för lång tid. Försök igen.' });
    }
    console.error('Recognize-ingredients API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
