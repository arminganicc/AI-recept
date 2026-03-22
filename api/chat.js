// Simple in-memory rate limiter (per Vercel instance)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 15; // max requests per window per IP

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
  if (ALLOWED_ORIGINS.includes(origin) || (origin && origin.endsWith('.vercel.app'))) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

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

  const systemPrompt = `Du är Armin — hemkock med humor. Ge exakt 4 receptförslag som JSON.
Regler: namn max 40tkn, beskrivning max 100tkn, tag: Snabbaste/Mest ambitiösa/Oväntat/Minst svinn, difficulty: Lätt/Medel/Avancerad, tid: "X min", ingredienser med mängder, 4-6 steg, kort chef_comment, drink_pairing med vin+öl+alkoholfritt.${prefBoost}
Variation: 1)Snabbaste<30min 2)Ambitiösa 45-60min 3)Oväntat 4)Minst svinn.
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
        max_tokens: 4000,
        system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
        messages: [{ role: 'user', content: userPrompt }],
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const data = await response.json();
    if (!response.ok) {
      console.error('Anthropic API error:', response.status, data);
      return res.status(response.status >= 500 ? 502 : response.status).json({ error: 'Receptsökning misslyckades. Försök igen.' });
    }
    return res.status(200).json(data);
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      return res.status(504).json({ error: 'Receptsökning tog för lång tid. Försök igen.' });
    }
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
