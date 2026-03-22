// Simple in-memory rate limiter (per Vercel instance)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 15; // max requests per window per IP

// Periodic cleanup to prevent memory leaks
const CLEANUP_INTERVAL = 5 * 60000; // 5 minutes
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

// Allowed origins for CORS
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

  const { ingredients, portions, prefs, conversationHistory, language, mode, query } = req.body;

  const isFreetext = mode === 'freetext' && query;
  if (!isFreetext && (!ingredients || !ingredients.length)) {
    return res.status(400).json({ error: 'Missing ingredients or query' });
  }

  // Input validation
  const validLangs = ['sv', 'en', 'es', 'bs'];
  const safeLang = validLangs.includes(language) ? language : 'sv';
  const parsedPortions = parseInt(portions);
  const safePortion = Math.min(Math.max(Number.isNaN(parsedPortions) ? 4 : parsedPortions, 1), 50);
  const safeIngredients = Array.isArray(ingredients)
    ? ingredients.slice(0, 30).filter(i => typeof i === 'string' && i.length > 0 && i.length < 100).map(i => i.trim())
    : [];
  const safeHistory = Array.isArray(conversationHistory) ? conversationHistory.slice(0, 5) : [];
  const safeQuery = typeof query === 'string' ? query.slice(0, 500) : '';
  const safePrefs = Array.isArray(prefs) ? prefs.slice(0, 10) : [];

  const prefText = safePrefs.length > 0 ? safePrefs.join(', ') : 'inga';
  const historyText = safeHistory.length > 0
    ? safeHistory.map((h, i) => `Omgång ${i + 1}: ${h.feedback}`).join('\n')
    : '';

  const langNames = { sv: 'svenska', en: 'English', es: 'español', bs: 'bosanski' };
  const lang = langNames[safeLang] || 'svenska';
  const langInstruction = safeLang !== 'sv'
    ? `\nSPRÅK: Svara på ${lang}. Alla fält ska vara på ${lang}.`
    : '';

  let prefBoost = '';
  if (safePrefs.includes('budgetvänligt')) prefBoost += ' Budget: billiga basvaror, ange ca-pris i description.';
  if (safePrefs.includes('barnvänligt')) prefBoost += ' Barn: milda smaker, inga starka kryddor.';

  const systemPrompt = `Du är Armin — hemkock med humor. Ge exakt 8 receptförslag som JSON.
Regler: namn max 40tkn, beskrivning max 100tkn, tag: Snabbaste/Mest ambitiösa/Oväntat/Minst svinn/Klassiker/Fusionkök/Vegokick/Comfort food, difficulty: Lätt/Medel/Avancerad, tid: "X min", ingredienser med mängder (inkludera ALLA ingredienser receptet behöver, även kryddor, olja och tillbehör — var generös), 4-6 steg, kort chef_comment, drink_pairing med vin+öl+alkoholfritt.${prefBoost}
Variation: 1)Snabbaste<20min 2)Ambitiösa 45-60min 3)Oväntat 4)Minst svinn 5)Klassiker 6)Fusionkök 7)Vegokick 8)Comfort food.
VIKTIGT: Svara ENBART med giltig JSON. Inga kodblock, inga kommentarer utanför JSON.${langInstruction}`;

  const schema = `{"chef_comment":"","recipes":[{"name":"","time":"","difficulty":"","servings":${safePortion},"tag":"","description":"","ingredients":[""],"steps":[{"instruction":"","tip":""}],"substitutions":[""],"nutrition_per_serving":{"calories":0,"protein_g":0,"carbs_g":0,"fat_g":0},"drink_pairing":{"wine":"","beer":"","non_alcoholic":""}}]}`;

  let userPrompt;
  if (isFreetext) {
    userPrompt = `Önskemål: "${safeQuery}"\nPortioner: ${safePortion}\nPref: ${prefText}\n${historyText ? `Feedback: ${historyText}\n` : ''}JSON: ${schema}`;
  } else {
    userPrompt = `Råvaror: ${safeIngredients.join(', ')}\nPortioner: ${safePortion}\nPref: ${prefText}\n${historyText ? `Feedback: ${historyText}\n` : ''}JSON: ${schema}`;
  }

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
        max_tokens: 8000,
        system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
        messages: [{ role: 'user', content: userPrompt }],
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      let data;
      try { data = await response.json(); } catch { data = {}; }
      console.error('Anthropic API error:', response.status, data);

      // Map specific error codes to user-friendly responses
      const status = response.status;
      if (status === 401) {
        return res.status(500).json({ error: 'Tjänsten är tillfälligt otillgänglig.' });
      }
      if (status === 429) {
        res.setHeader('Retry-After', '30');
        return res.status(503).json({ error: 'Recepttjänsten är överbelastad. Försök igen om en stund.' });
      }
      if (status === 529) {
        return res.status(503).json({ error: 'Recepttjänsten är tillfälligt överbelastad. Försök igen om en stund.' });
      }
      return res.status(status >= 500 ? 502 : status).json({ error: 'Receptsökning misslyckades. Försök igen.' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      return res.status(504).json({ error: 'Receptsökning tog för lång tid. Försök igen.' });
    }
    console.error('Chat API error:', error.message || error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
