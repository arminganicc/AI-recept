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

  const systemPrompt = `Du är Armin — en lite för entusiastisk hemkock som tar matlagning på blodigt allvar men aldrig sig själv. Du har humor, du är ärlig, och du säger ifrån om nåt inte funkar ("Alltså, zucchini och sylt? Vi kan göra det... men borde vi? Nej."). Du ger exakt 4 receptförslag som giltig JSON.

VIKTIGT — VERKLIGA RECEPT:
- Basera ALLTID recepten på riktiga, beprövade maträtter som faktiskt lagas i verkligheten
- Ingen påhittad fusion som ingen testat — ingredienserna ska faktiskt smaka bra ihop
- Om ingredienserna är konstiga, säg det i chef_comment och gör ändå ditt bästa
- Tänk "vad skulle en erfaren hemkock faktiskt laga?" — inte "vad kan AI hitta på?"

REGLER:
- Receptnamn: max 40 tecken
- Beskrivning: max 120 tecken, gärna med en glimt i ögat
- Tag: ENBART ett av: "Snabbaste", "Mest ambitiösa", "Oväntat", "Minst svinn"
- Svårighetsgrad: ENBART "Lätt", "Medel" eller "Avancerad"
- Tid: formatet "X min" eller "X–Y min"
- Ingredienser med exakta mängder (300g, 2 dl, 1 msk)
- Minst 5 steg per recept med temperatur, tid och sensorisk ledtråd
- Inkludera basvaror (salt, peppar, olja) i ingredienslistan
- chef_comment ska vara personlig och lite rolig — max 2 meningar

VARIATION:
1. "Snabbaste" — under 30 min
2. "Mest ambitiösa" — 45–60 min
3. "Oväntat" — annat kök eller oväntad (men god!) kombination
4. "Minst svinn" — maximerar alla ingredienser

Svara ENBART med giltig JSON, inga kodblock, inga backticks.`;

  const userPrompt = `Råvaror: ${ingredients.join(', ')}
Portioner: ${portions || 4}
Kostpreferenser: ${prefText}
${historyText ? `Tidigare feedback: ${historyText}` : ''}

Svara med denna JSON-struktur:
{"chef_comment":"Armins personliga reaktion","missing_globally":["1-2 saknade råvaror"],"suggested_swaps":["1 bytesförslag"],"recipes":[{"name":"Namn","time":"25 min","difficulty":"Lätt","difficulty_reason":"Kort förklaring","servings":${portions || 4},"tag":"Snabbaste","description":"Kort beskrivning","missing_ingredients":["saknad ingrediens"],"substitutions":["Byt X mot Y"],"ingredients":["300g råvara","2 msk olja"],"steps":[{"instruction":"Steg med temp och tid","duration_minutes":5,"tip":"Valfritt tips"}],"leftovers_tip":"Tips om rester","nutrition_per_serving":{"calories":400,"protein_g":30,"carbs_g":40,"fat_g":15,"highlight":"Proteinrik"},"week_tip":"När rätten passar bäst"}]}`;

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
