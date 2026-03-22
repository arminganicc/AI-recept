export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { ingredients, portions, prefs, conversationHistory } = req.body;

  if (!ingredients || !ingredients.length) {
    return res.status(400).json({ error: 'Missing ingredients' });
  }

  const prefText = Array.isArray(prefs) && prefs.length > 0 ? prefs.join(', ') : 'inga';
  const historyText = Array.isArray(conversationHistory) && conversationHistory.length > 0
    ? conversationHistory.map((h, i) => `Omgång ${i + 1}: ${h.feedback}`).join('\n')
    : '';

  const systemPrompt = `Du är Magnus — en erfaren svensk hemkock. Du ger exakt 4 receptförslag som giltig JSON. Svara ENBART med JSON, inga kodblock, inga backticks, ingen annan text.

REGLER:
- Receptnamn: max 40 tecken
- Beskrivning: max 120 tecken
- Tag: ENBART ett av: "Snabbaste", "Mest ambitiösa", "Oväntat", "Minst svinn"
- Svårighetsgrad: ENBART "Lätt", "Medel" eller "Avancerad"
- Tid: formatet "X min" eller "X–Y min"
- Ingredienser med exakta mängder (300g, 2 dl, 1 msk)
- Minst 5 steg per recept med temperatur, tid och sensorisk ledtråd
- Inkludera basvaror (salt, peppar, olja) i ingredienslistan

VARIATION:
1. "Snabbaste" — under 30 min
2. "Mest ambitiösa" — 45–60 min
3. "Oväntat" — annat kök eller oväntad kombination
4. "Minst svinn" — maximerar alla ingredienser`;

  const userPrompt = `Råvaror: ${ingredients.join(', ')}
Portioner: ${portions || 4}
Kostpreferenser: ${prefText}
${historyText ? `Tidigare feedback: ${historyText}` : ''}

Svara med denna exakta JSON-struktur:
{"chef_comment":"Kort personlig kommentar om råvarorna","missing_globally":["1-2 råvaror som saknas"],"suggested_swaps":["1 bytesförslag"],"recipes":[{"name":"Namn","time":"25 min","difficulty":"Lätt","difficulty_reason":"Kort förklaring","servings":${portions || 4},"tag":"Snabbaste","description":"Kort beskrivning","missing_ingredients":["saknad ingrediens"],"substitutions":["Byt X mot Y"],"ingredients":["300g råvara","2 msk olja"],"steps":[{"instruction":"Steg med temp och tid","duration_minutes":5,"tip":"Valfritt tips"}],"leftovers_tip":"Tips om rester","nutrition_per_serving":{"calories":400,"protein_g":30,"carbs_g":40,"fat_g":15,"highlight":"Proteinrik"},"week_tip":"När rätten passar bäst"}]}`;

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
        max_tokens: 6000,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    return res.status(200).json(data);
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
