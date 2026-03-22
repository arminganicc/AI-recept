// Simple in-memory rate limiter
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_MAX = 10;

// Periodic cleanup to prevent memory leaks
const CLEANUP_INTERVAL = 5 * 60000;
let lastCleanup = Date.now();

function cleanupRateLimitMap() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  for (const [ip, entry] of rateLimitMap) {
    if (now - entry.start > RATE_LIMIT_WINDOW) rateLimitMap.delete(ip);
  }
}

function getRateLimitInfo(ip) {
  cleanupRateLimitMap();
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.start > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { start: now, count: 1 });
    return { limited: false, remaining: RATE_LIMIT_MAX - 1, resetMs: RATE_LIMIT_WINDOW };
  }
  entry.count++;
  const remaining = Math.max(0, RATE_LIMIT_MAX - entry.count);
  const resetMs = Math.max(0, RATE_LIMIT_WINDOW - (now - entry.start));
  if (entry.count > RATE_LIMIT_MAX) return { limited: true, remaining: 0, resetMs };
  return { limited: false, remaining, resetMs };
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
  if (ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function setRateLimitHeaders(res, info) {
  res.setHeader('X-RateLimit-Limit', RATE_LIMIT_MAX);
  res.setHeader('X-RateLimit-Remaining', info.remaining);
  res.setHeader('X-RateLimit-Reset', Math.ceil(info.resetMs / 1000));
}

const VALID_MEDIA_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB base64

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  const corsHeaders = getCorsHeaders(origin);
  Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));

  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Validate API key is configured
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY is not configured');
    return res.status(500).json({ error: 'Tjänsten är tillfälligt otillgänglig.' });
  }

  // Rate limiting with headers
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  const rateLimitInfo = getRateLimitInfo(ip);
  setRateLimitHeaders(res, rateLimitInfo);

  if (rateLimitInfo.limited) {
    res.setHeader('Retry-After', Math.ceil(rateLimitInfo.resetMs / 1000));
    return res.status(429).json({ error: 'För många förfrågningar. Vänta en stund och försök igen.' });
  }

  // Validate request body exists
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({ error: 'Ogiltig förfrågan.' });
  }

  const { image, mediaType, language } = req.body;
  if (!image) return res.status(400).json({ error: 'Missing image' });

  // Validate image is a string
  if (typeof image !== 'string') {
    return res.status(400).json({ error: 'Ogiltigt bildformat.' });
  }

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
        max_tokens: 1024,
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
              text: `Du är en expert på att identifiera matvaror i bilder. Titta noggrant på bilden och identifiera ALLA matvaror, ingredienser och råvaror du kan se. Det kan vara:
- Ett kylskåp (öppet eller stängt med synligt innehåll)
- Ett skafferi eller köksskåp
- Matvaror på ett bord, bänk eller i kassar från mataffären
- Enskilda produkter eller ingredienser
- Förpackningar med synliga etiketter (läs texten på förpackningarna!)

Var extra noggrann med:
- Läs text på förpackningar, etiketter och varumärken för att identifiera produkten korrekt
- Skilj på liknande produkter (t.ex. gräddfil vs grädde, kycklingfilé vs kycklingklubba)
- Inkludera kryddor, såser och andra mindre ingredienser du ser
- Om du ser grönsaker, var specifik (t.ex. "rödlök" istället för bara "lök" om det syns)

Svara ENBART med en JSON-array av ingrediensnamn i gemener. Använd vanliga svenska matlagningsnamn.
Exempel: ["kycklingfilé","tomat","rödlök","vitlök","grädde","pasta"]
Inga andra ord, förklaringar eller kommentarer — bara JSON-arrayen. ${langInstruction}`,
            },
          ],
        }],
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      let data;
      try { data = await response.json(); } catch { data = {}; }
      console.error('Anthropic Vision API error:', response.status, data);

      const status = response.status;
      if (status === 401) {
        return res.status(500).json({ error: 'Tjänsten är tillfälligt otillgänglig.' });
      }
      if (status === 429 || status === 529) {
        res.setHeader('Retry-After', '30');
        return res.status(503).json({ error: 'Bildanalystjänsten är överbelastad. Försök igen om en stund.' });
      }
      return res.status(status >= 500 ? 502 : status).json({ error: 'Bildanalys misslyckades. Försök igen.' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      return res.status(504).json({ error: 'Bildanalys tog för lång tid. Försök igen.' });
    }
    console.error('Recognize-ingredients API error:', error.message || error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
