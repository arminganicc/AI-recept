export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { ingredients, portions, prefs, conversationHistory, language, mode, query } = req.body;

  const isFreetext = mode === 'freetext' && query;
  if (!isFreetext && (!ingredients || !ingredients.length)) {
    return res.status(400).json({ error: 'Missing ingredients or query' });
  }

  const prefText = Array.isArray(prefs) && prefs.length > 0 ? prefs.join(', ') : 'inga';
  const historyText = Array.isArray(conversationHistory) && conversationHistory.length > 0
    ? conversationHistory.map((h, i) => `Omgång ${i + 1}: ${h.feedback}`).join('\n')
    : '';

  const langNames = { sv: 'svenska', en: 'English', es: 'español', bs: 'bosanski' };
  const lang = langNames[language] || 'svenska';
  const langInstruction = language && language !== 'sv'
    ? `\nSPRÅK: Svara på ${lang}. Alla fält ska vara på ${lang}.`
    : '';

  const prefArray = Array.isArray(prefs) ? prefs : [];
  let prefBoost = '';
  if (prefArray.includes('budgetvänligt')) prefBoost += ' Budget: billiga basvaror, ange ca-pris i description.';
  if (prefArray.includes('barnvänligt')) prefBoost += ' Barn: milda smaker, inga starka kryddor.';

  const systemPrompt = `Du är Armin — hemkock med humor. Ge exakt 4 receptförslag som JSON.
Regler: namn max 40tkn, beskrivning max 100tkn, tag: Snabbaste/Mest ambitiösa/Oväntat/Minst svinn, difficulty: Lätt/Medel/Avancerad, tid: "X min", ingredienser med mängder, 4-6 steg, kort chef_comment, drink_pairing med vin+öl+alkoholfritt.${prefBoost}
Variation: 1)Snabbaste<30min 2)Ambitiösa 45-60min 3)Oväntat 4)Minst svinn.
VIKTIGT: Svara ENBART med giltig JSON. Inga kodblock, inga kommentarer utanför JSON.${langInstruction}`;

  const schema = `{"chef_comment":"","recipes":[{"name":"","time":"","difficulty":"","servings":${portions || 4},"tag":"","description":"","ingredients":[""],"steps":[{"instruction":"","tip":""}],"substitutions":[""],"nutrition_per_serving":{"calories":0,"protein_g":0,"carbs_g":0,"fat_g":0},"drink_pairing":{"wine":"","beer":"","non_alcoholic":""}}]}`;

  let userPrompt;
  if (isFreetext) {
    userPrompt = `Önskemål: "${query}"\nPortioner: ${portions || 4}\nPref: ${prefText}\n${historyText ? `Feedback: ${historyText}\n` : ''}JSON: ${schema}`;
  } else {
    userPrompt = `Råvaror: ${ingredients.join(', ')}\nPortioner: ${portions || 4}\nPref: ${prefText}\n${historyText ? `Feedback: ${historyText}\n` : ''}JSON: ${schema}`;
  }

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
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    return res.status(200).json(data);
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
