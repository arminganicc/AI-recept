export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { ingredients, portions, prefs, conversationHistory, language } = req.body;

  if (!ingredients || !ingredients.length) {
    return res.status(400).json({ error: 'Missing ingredients' });
  }

  const prefText = Array.isArray(prefs) && prefs.length > 0 ? prefs.join(', ') : 'inga';
  const historyText = Array.isArray(conversationHistory) && conversationHistory.length > 0
    ? conversationHistory.map((h, i) => `Omgång ${i + 1}: ${h.feedback}`).join('\n')
    : '';

  const langNames = { sv: 'svenska', en: 'English', es: 'español', bs: 'bosanski' };
  const lang = langNames[language] || 'svenska';
  const langInstruction = language && language !== 'sv'
    ? `\n\nSPRÅK: Svara på ${lang}. Alla receptnamn, beskrivningar, ingredienser, steg, tips och kommentarer ska vara på ${lang}.`
    : '';

  const systemPrompt = `Du är Armin — entusiastisk hemkock med humor. Ge exakt 4 verkliga receptförslag som JSON.

REGLER: Receptnamn max 40 tkn. Beskrivning max 120 tkn. Tag: ett av "Snabbaste"/"Mest ambitiösa"/"Oväntat"/"Minst svinn". Svårighetsgrad: "Lätt"/"Medel"/"Avancerad". Tid: "X min" eller "X–Y min". Ingredienser med mängder. Minst 5 steg med temp/tid. chef_comment: personlig, max 2 meningar.

VARIATION: 1) Snabbaste <30min 2) Mest ambitiösa 45–60min 3) Oväntat kök/kombination 4) Minst svinn.

Svara ENBART med giltig JSON, inga kodblock.${langInstruction}`;

  const userPrompt = `Råvaror: ${ingredients.join(', ')}
Portioner: ${portions || 4}
Pref: ${prefText}
${historyText ? `Feedback: ${historyText}` : ''}
JSON: {"chef_comment":"..","missing_globally":[".."],"suggested_swaps":[".."],"recipes":[{"name":"..","time":"..","difficulty":"..","difficulty_reason":"..","servings":${portions || 4},"tag":"..","description":"..","missing_ingredients":[".."],"substitutions":[".."],"ingredients":[".."],"steps":[{"instruction":"..","duration_minutes":0,"tip":".."}],"leftovers_tip":"..","nutrition_per_serving":{"calories":0,"protein_g":0,"carbs_g":0,"fat_g":0,"highlight":".."},"week_tip":".."}]}`;

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
        max_tokens: 3000,
        system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
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
