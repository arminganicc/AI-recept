function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Rate limiter for email sending (stricter: 5 per minute)
const emailRateMap = new Map();
function isEmailRateLimited(ip) {
  const now = Date.now();
  const entry = emailRateMap.get(ip);
  if (!entry || now - entry.start > 60000) {
    emailRateMap.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count++;
  return entry.count > 5;
}

const ALLOWED_ORIGINS = [
  'https://vadskavialaga.se',
  'https://www.vadskavialaga.se',
  'https://receptappen.vercel.app',
];

// Simple email format validation
function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export default async function handler(req, res) {
  // CORS
  const origin = req.headers.origin || '';
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  // Rate limiting
  const ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isEmailRateLimited(ip)) {
    return res.status(429).json({ error: 'För många förfrågningar. Vänta en stund.' });
  }

  const { email, items, recipeName } = req.body;
  if (!email || !items) return res.status(400).json({ error: 'Missing fields' });

  // Validate email format
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Ogiltig e-postadress.' });
  }

  // Validate items array
  if (!Array.isArray(items) || items.length === 0 || items.length > 200) {
    return res.status(400).json({ error: 'Ogiltig inköpslista.' });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return res.status(501).json({ error: 'Email service not configured' });
  }

  const itemsHTML = items
    .map(i => `<li style="padding:6px 0;font-size:15px;color:#1A1208;">${escapeHtml(i.name || i.text || i)}</li>`)
    .join('');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: email,
        subject: `Inköpslista: ${escapeHtml(recipeName || 'Amkos AI-Recept')}`,
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:480px;margin:0 auto;padding:24px;">
            <h2 style="font-size:22px;color:#1A1208;margin-bottom:8px;font-weight:700;">
              ${escapeHtml(recipeName || 'Din inköpslista')}
            </h2>
            <p style="color:#6B5B4E;margin-bottom:20px;font-size:15px;">
              Din inköpslista från Amkos AI-Recept
            </p>
            <ul style="padding:0 0 0 20px;color:#1A1208;line-height:1.7;list-style:disc;">
              ${itemsHTML}
            </ul>
            <hr style="border:none;border-top:1px solid #E8DDD0;margin:24px 0;">
            <p style="font-size:12px;color:#A8957F;">
              Skickat från Amkos AI-Recept
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Resend error:', errorData);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Send list error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
