export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { ingredients, portions, prefs, conversationHistory, language, mode, query } = req.body;

  // Support both ingredient mode and free-text mode
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
    ? `\nSPRÅK: Svara på ${lang}. Alla receptnamn, beskrivningar, ingredienser, steg, tips och kommentarer ska vara på ${lang}.`
    : '';

  // Budget/family-specific prompt additions
  const prefArray = Array.isArray(prefs) ? prefs : [];
  let prefBoost = '';
  if (prefArray.includes('budgetvänligt')) prefBoost += '\nBUDGET: Håll recepten billiga med basvaror. Ange ca-pris per portion i description (t.ex. "~35 kr/portion").';
  if (prefArray.includes('barnvänligt')) prefBoost += '\nBARN: Milda smaker, inga starka kryddor, barnanpassade portioner.';

  const systemPrompt = `Du är Armin — jordnära hemkock med humor och värme. Ge exakt 4 riktiga receptförslag som JSON.

REGLER: Receptnamn max 40 tkn. Beskrivning max 120 tkn. Tag: "Snabbaste"/"Mest ambitiösa"/"Oväntat"/"Minst svinn". Svårighetsgrad: "Lätt"/"Medel"/"Avancerad". Tid: "X min"/"X–Y min". Ingredienser med mängder. Minst 5 steg. chef_comment: personlig kort kommentar.
drink_pairing: rekommendera vin, öl och alkoholfritt som passar till rätten.

VARIATION: 1) Snabbaste <30min 2) Mest ambitiösa 45–60min 3) Oväntat kök 4) Minst svinn.

Svara ENBART med giltig JSON, inga kodblock.${prefBoost}${langInstruction}`;

  let userPrompt;
  if (isFreetext) {
    userPrompt = `Användaren beskriver vad de är sugna på: "${query}"
Portioner: ${portions || 4}
Pref: ${prefText}
${historyText ? `Feedback: ${historyText}` : ''}
Ge 4 recept som matchar. JSON: {"chef_comment":"..","missing_globally":[],"suggested_swaps":[],"recipes":[{"name":"..","time":"..","difficulty":"..","difficulty_reason":"..","servings":${portions || 4},"tag":"..","description":"..","missing_ingredients":[],"substitutions":[],"ingredients":[".."],"steps":[{"instruction":"..","duration_minutes":0,"tip":".."}],"leftovers_tip":"..","nutrition_per_serving":{"calories":0,"protein_g":0,"carbs_g":0,"fat_g":0,"highlight":".."},"week_tip":"..","drink_pairing":{"wine":"..","beer":"..","non_alcoholic":".."}}]}`;
  } else {
    userPrompt = `Råvaror: ${ingredients.join(', ')}
Portioner: ${portions || 4}
Pref: ${prefText}
${historyText ? `Feedback: ${historyText}` : ''}
JSON: {"chef_comment":"..","missing_globally":[],"suggested_swaps":[],"recipes":[{"name":"..","time":"..","difficulty":"..","difficulty_reason":"..","servings":${portions || 4},"tag":"..","description":"..","missing_ingredients":[],"substitutions":[],"ingredients":[".."],"steps":[{"instruction":"..","duration_minutes":0,"tip":".."}],"leftovers_tip":"..","nutrition_per_serving":{"calories":0,"protein_g":0,"carbs_g":0,"fat_g":0,"highlight":".."},"week_tip":"..","drink_pairing":{"wine":"..","beer":"..","non_alcoholic":".."}}]}`;
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
        max_tokens: 2500,
        temperature: 0.7,
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
