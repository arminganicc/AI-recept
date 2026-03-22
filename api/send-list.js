function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, items, recipeName } = req.body;
  if (!email || !items) return res.status(400).json({ error: 'Missing fields' });

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
        subject: `Inköpslista: ${escapeHtml(recipeName || 'Vad ska vi laga?')}`,
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:480px;margin:0 auto;padding:24px;">
            <h2 style="font-size:22px;color:#1A1208;margin-bottom:8px;font-weight:700;">
              ${escapeHtml(recipeName || 'Din inköpslista')}
            </h2>
            <p style="color:#6B5B4E;margin-bottom:20px;font-size:15px;">
              Din inköpslista från Vad ska vi laga?
            </p>
            <ul style="padding:0 0 0 20px;color:#1A1208;line-height:1.7;list-style:disc;">
              ${itemsHTML}
            </ul>
            <hr style="border:none;border-top:1px solid #E8DDD0;margin:24px 0;">
            <p style="font-size:12px;color:#A8957F;">
              Skickat från Vad ska vi laga?
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
