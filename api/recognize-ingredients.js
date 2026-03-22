export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image, mediaType, language } = req.body;
  const lang = language || 'sv';
  if (!image) return res.status(400).json({ error: 'Missing image' });

  const langInstruction = {
    sv: 'Svara på svenska.',
    en: 'Respond in English.',
    es: 'Responde en español.',
    bs: 'Odgovori na bosanskom.',
  }[lang] || 'Svara på svenska.';

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
              media_type: mediaType || 'image/jpeg',
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
  });

  const data = await response.json();
  if (!response.ok) return res.status(response.status).json(data);
  return res.status(200).json(data);
}
