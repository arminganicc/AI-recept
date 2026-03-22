(() => {
  'use strict';

  // ─── SVG Icons ───
  const iconHeart = (filled) => filled
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

  const iconClock = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;

  const iconMoon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  const iconSun = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

  const iconShare = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`;

  const iconShop = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;

  const iconClose = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

  const iconArrow = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;

  // ─── App Logo ───
  function appLogoSVG(size = 40) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Steam wisps -->
      <path d="M22 18c0-4 3-7 3-10" stroke="#C05A1F" stroke-width="2" stroke-linecap="round" opacity="0.5">
        <animate attributeName="d" values="M22 18c0-4 3-7 3-10;M22 18c0-4-2-7-1-10;M22 18c0-4 3-7 3-10" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M32 16c0-4 2-6 2-9" stroke="#C05A1F" stroke-width="2" stroke-linecap="round" opacity="0.4">
        <animate attributeName="d" values="M32 16c0-4 2-6 2-9;M32 16c0-4-1-6 0-9;M32 16c0-4 2-6 2-9" dur="2.4s" repeatCount="indefinite"/>
      </path>
      <path d="M42 18c0-4-2-7-2-10" stroke="#C05A1F" stroke-width="2" stroke-linecap="round" opacity="0.3">
        <animate attributeName="d" values="M42 18c0-4-2-7-2-10;M42 18c0-4 2-7 1-10;M42 18c0-4-2-7-2-10" dur="1.8s" repeatCount="indefinite"/>
      </path>
      <!-- Pot lid -->
      <ellipse cx="32" cy="22" rx="18" ry="3" fill="#C05A1F" opacity="0.15"/>
      <path d="M14 22h36" stroke="#C05A1F" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="32" cy="20" r="2.5" fill="#C05A1F"/>
      <!-- Pot body -->
      <path d="M16 24c0 0 0 18 2 22a4 4 0 0 0 4 3h20a4 4 0 0 0 4-3c2-4 2-22 2-22" fill="#FAF0E8" stroke="#C05A1F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Pot handles -->
      <path d="M16 30c-4 0-6 2-6 4s2 4 6 4" stroke="#C05A1F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M48 30c4 0 6 2 6 4s-2 4-6 4" stroke="#C05A1F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Heart inside pot -->
      <path d="M32 36c-1.5-2.5-5-3-6-1s0 4 6 8c6-4 7-6 6-8s-4.5-1.5-6 1z" fill="#C05A1F" opacity="0.6"/>
    </svg>`;
  }

  // ─── i18n Translations ───
  let currentLang = (() => { try { return localStorage.getItem('app_language') || 'sv'; } catch { return 'sv'; } })();

  const translations = {
    sv: {
      heroEyebrow: 'Kvällens eviga dilemma', heroTitle: 'Vad ska vi laga?',
      yourIngredients: 'Dina råvaror', scanFood: '📸 Fota dina råvaror',
      orManual: 'eller skriv manuellt', inputHint: 'Enter lägger till. Komma separerar.',
      whatDoYouHave: 'Vad har du hemma?', howPicky: 'Hur kräsen är du?',
      portions: 'Portioner', showRecipes: 'Visa recept',
      savedRecipes: 'Sparade recept', noSavedRecipes: 'Inga sparade recept ännu',
      noSavedDesc: 'Tryck på hjärtat på ett recept för att spara det här.',
      findRecipes: 'Hitta recept →', shoppingList: 'Inköpslista',
      clear: 'Rensa', shareList: 'Dela lista 📤',
      navSearch: 'Sök', navInspiration: 'Inspiration', navFavorites: 'Favoriter', navList: 'Lista',
      vegetariskt: 'Vegetariskt', veganskt: 'Veganskt', glutenfritt: 'Glutenfritt',
      snabbt: 'Under 30 min', laktosfritt: 'Laktosfritt', nötfritt: 'Nötfritt',
      barnvänligt: 'Barnvänligt', budgetvänligt: 'Budgetvänligt',
      ingredients: 'Ingredienser', steps: 'Gör så här',
      arminTitle: 'Armin rekommenderar', worldKitchens: 'Världens kök',
      surpriseMe: '🎲 Överraska mig', inspiration: 'Inspiration',
    },
    en: {
      heroEyebrow: "Tonight's eternal dilemma", heroTitle: 'What should we cook?',
      yourIngredients: 'Your ingredients', scanFood: '📸 Snap your ingredients',
      orManual: 'or type manually', inputHint: 'Enter to add. Comma separates.',
      whatDoYouHave: 'What do you have at home?', howPicky: 'How picky are you?',
      portions: 'Servings', showRecipes: 'Show recipes',
      savedRecipes: 'Saved recipes', noSavedRecipes: 'No saved recipes yet',
      noSavedDesc: 'Tap the heart on a recipe to save it here.',
      findRecipes: 'Find recipes →', shoppingList: 'Shopping list',
      clear: 'Clear', shareList: 'Share list 📤',
      navSearch: 'Search', navInspiration: 'Inspiration', navFavorites: 'Favorites', navList: 'List',
      vegetariskt: 'Vegetarian', veganskt: 'Vegan', glutenfritt: 'Gluten-free',
      snabbt: 'Under 30 min', laktosfritt: 'Lactose-free', nötfritt: 'Nut-free',
      barnvänligt: 'Kid-friendly', budgetvänligt: 'Budget-friendly',
      ingredients: 'Ingredients', steps: 'Instructions',
      arminTitle: 'Armin recommends', worldKitchens: 'World cuisines',
      surpriseMe: '🎲 Surprise me', inspiration: 'Inspiration',
    },
    es: {
      heroEyebrow: 'El eterno dilema de la cena', heroTitle: '¿Qué cocinamos?',
      yourIngredients: 'Tus ingredientes', scanFood: '📸 Fotografía tus ingredientes',
      orManual: 'o escribe manualmente', inputHint: 'Enter para añadir. Coma separa.',
      whatDoYouHave: '¿Qué tienes en casa?', howPicky: '¿Qué tan exigente eres?',
      portions: 'Porciones', showRecipes: 'Mostrar recetas',
      savedRecipes: 'Recetas guardadas', noSavedRecipes: 'No hay recetas guardadas',
      noSavedDesc: 'Toca el corazón en una receta para guardarla aquí.',
      findRecipes: 'Buscar recetas →', shoppingList: 'Lista de compras',
      clear: 'Borrar', shareList: 'Compartir lista 📤',
      navSearch: 'Buscar', navInspiration: 'Inspiración', navFavorites: 'Favoritos', navList: 'Lista',
      vegetariskt: 'Vegetariano', veganskt: 'Vegano', glutenfritt: 'Sin gluten',
      snabbt: 'Menos de 30 min', laktosfritt: 'Sin lactosa', nötfritt: 'Sin frutos secos',
      barnvänligt: 'Para niños', budgetvänligt: 'Económico',
      ingredients: 'Ingredientes', steps: 'Preparación',
      arminTitle: 'Armin recomienda', worldKitchens: 'Cocinas del mundo',
      surpriseMe: '🎲 Sorpréndeme', inspiration: 'Inspiración',
    },
    bs: {
      heroEyebrow: 'Vječna dilema večere', heroTitle: 'Šta da kuhamo?',
      yourIngredients: 'Tvoji sastojci', scanFood: '📸 Slikaj svoje namirnice',
      orManual: 'ili piši ručno', inputHint: 'Enter za dodavanje. Zarez odvaja.',
      whatDoYouHave: 'Šta imaš kod kuće?', howPicky: 'Koliko si izbirljiv/a?',
      portions: 'Porcije', showRecipes: 'Prikaži recepte',
      savedRecipes: 'Sačuvani recepti', noSavedRecipes: 'Nema sačuvanih recepata',
      noSavedDesc: 'Pritisni srce na receptu da ga sačuvaš ovdje.',
      findRecipes: 'Pronađi recepte →', shoppingList: 'Lista za kupovinu',
      clear: 'Obriši', shareList: 'Podijeli listu 📤',
      navSearch: 'Traži', navInspiration: 'Inspiracija', navFavorites: 'Favoriti', navList: 'Lista',
      vegetariskt: 'Vegetarijansko', veganskt: 'Vegansko', glutenfritt: 'Bez glutena',
      snabbt: 'Ispod 30 min', laktosfritt: 'Bez laktoze', nötfritt: 'Bez orašastih',
      barnvänligt: 'Za djecu', budgetvänligt: 'Povoljno',
      ingredients: 'Sastojci', steps: 'Priprema',
      arminTitle: 'Armin preporučuje', worldKitchens: 'Kuhinje svijeta',
      surpriseMe: '🎲 Iznenadi me', inspiration: 'Inspiracija',
    },
  };

  const changelog = [
    { version: '6.2', date: '2026-03-22', title: 'Fri-text-sökning & dryckestips', items: [
      'Skriv fritt vad du är sugen på — inte bara ingredienser!',
      'Dryckesrekommendationer till varje rätt (vin, öl, alkoholfritt)',
      'Högtidsrecept som dyker upp inför jul, midsommar och påsk',
      'Vardagligare humor — mindre krångliga ord, mer skratt',
      '4 nya preferenser: Laktosfritt, Nötfritt, Barnvänligt, Budgetvänligt',
    ]},
    { version: '6.1', date: '2026-03-22', title: 'Språkstöd & mer inspiration', items: [
      'Välj språk: Svenska, Engelska, Spanska eller Bosniska',
      '20 Armin-rekommendationer som roterar varje vecka',
      '74 världsrätter från 19 länder (inkl. Vietnam & Peru)',
    ]},
    { version: '6.0', date: '2026-03-22', title: 'Ny design & funktioner', items: [
      'Google & Apple-inloggning',
      'Custom logga med animerad ånga',
      'Professionell välkomstguide',
      'Hantera konto-sektion',
      'Stripe-inspirerade animationer',
    ]},
  ];

  function t(key) {
    return (translations[currentLang] || translations.sv)[key] || translations.sv[key] || key;
  }

  function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (val) el.textContent = val;
    });
    // Translate pref chip labels
    document.querySelectorAll('.pref-chip[data-pref]').forEach(chip => {
      const key = chip.dataset.pref;
      const val = t(key);
      if (val) chip.textContent = val;
    });
    // Update placeholder
    const ingInput = document.getElementById('ingInput');
    if (ingInput) {
      const placeholders = { sv: 'kyckling, tomat, grädde...', en: 'chicken, tomato, cream...', es: 'pollo, tomate, nata...', bs: 'piletina, paradajz, pavlaka...' };
      ingInput.placeholder = placeholders[currentLang] || placeholders.sv;
    }
    document.documentElement.lang = currentLang;
  }

  // ─── Supabase Setup ───
  let supabaseClient = null;
  let currentUser = null;

  async function initSupabase() {
    if (!window.supabase) return;
    try {
      const res = await fetch('/api/config');
      if (!res.ok) return;
      const { supabaseUrl, supabaseAnonKey } = await res.json();
      if (!supabaseUrl || !supabaseAnonKey) return;

      supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          detectSessionInUrl: true,
          flowType: 'pkce',
        }
      });

      supabaseClient.auth.onAuthStateChange((event, session) => {
        currentUser = session?.user || null;
        updateAuthUI();
        if (currentUser) {
          syncFavoritesFromCloud();
          if (event === 'SIGNED_IN') showToast('loggedIn');
        }
      });

      // Handle magic link callback — check URL for auth tokens
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const queryParams = new URLSearchParams(window.location.search);
      if (hashParams.get('access_token') || queryParams.get('code')) {
        // Supabase will auto-detect and exchange tokens
        const { data, error } = await supabaseClient.auth.getSession();
        if (data?.session) {
          currentUser = data.session.user;
          updateAuthUI();
          // Clean URL
          history.replaceState(null, '', window.location.pathname);
        }
      } else {
        const { data } = await supabaseClient.auth.getSession();
        currentUser = data?.session?.user || null;
        updateAuthUI();
      }
    } catch (e) { console.error('Supabase init error:', e); }
  }
  initSupabase();

  // ─── State ───
  let ingredients = [];
  let recipes = [];
  let portions = 4;
  let searchPortions = 4;
  let prefs = new Set();
  const recipeCache = new Map();
  let conversationHistory = [];
  let lastChefComment = '';
  let lastMissingGlobally = [];
  let lastSuggestedSwaps = [];

  function loadStorage(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback; }
    catch { return fallback; }
  }

  let favorites     = loadStorage('fav_recipes', []);
  let searchHistory  = loadStorage('search_history', []);
  let shoppingList   = loadStorage('shopping_list', []);
  let ratings        = loadStorage('recipe_ratings', {});

  const quickCategories = [
    { label: '🥩 Sugen på kött', items: ['kyckling', 'köttfärs', 'bacon', 'fläsk', 'lamm'] },
    { label: '🐟 Fisk & skaldjur', items: ['lax', 'räkor', 'torsk', 'tonfisk'] },
    { label: '🥬 Grönsakslådan', items: ['tomat', 'paprika', 'spenat', 'broccoli', 'morötter', 'potatis'] },
    { label: '🧀 Basics', items: ['pasta', 'ris', 'ägg', 'ost', 'grädde', 'lök', 'vitlök'] },
  ];

  // ─── Autocomplete ingredients list ───
  const allIngredients = [
    'kyckling', 'lax', 'lax filé', 'pasta', 'spaghetti', 'tagliatelle',
    'ris', 'basmatiris', 'lök', 'rödlök', 'vitlök', 'grädde', 'vispgrädde',
    'tomat', 'krossade tomater', 'potatis', 'sötpotatis', 'ägg', 'ost',
    'parmesan', 'mozzarella', 'bacon', 'pancetta', 'paprika', 'röd paprika',
    'morötter', 'spenat', 'broccoli', 'zucchini', 'aubergine', 'svamp',
    'champinjoner', 'kantareller', 'köttfärs', 'nötfärs', 'lamm', 'fläsk',
    'räkor', 'bläckfisk', 'kokosmjölk', 'soja', 'ingefära', 'lime',
    'citron', 'koriander', 'persilja', 'timjan', 'rosmarin', 'basilika',
    'linser', 'kikärtor', 'bönor', 'quinoa', 'bulgur', 'couscous',
    'mjölk', 'smör', 'olivolja', 'mjöl', 'socker', 'honung', 'senap',
    'tofu', 'tempeh', 'halloumi', 'fetaost', 'gruyère', 'cheddar'
  ];

  // ─── Rotating humor ───
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  const heroSubtitles = {
    sv: [
      'Släng in vad du har. Armin fixar resten.',
      'Du har grejer hemma. Du vet bara inte vad du ska göra med dem.',
      'Från "vi har ju ingenting" till middag på 30 min.',
      'Kylskåpskaos → Middagsmagi.',
      'Armin dömer inte ditt kylskåp. (Nåja, lite.)',
      'Svaret på frågan ingen orkar ställa.',
      'Tre grejer. Noll ursäkter. En middag.',
      'Studenter, föräldrar, alla — Armin fixar.',
      'Billigt, snabbt, gott. Välj alla tre.',
      'Din mamma hade godkänt det här. Typ.',
    ],
    en: [
      'Throw in what you have. Armin handles dinner.',
      'You have food at home. You just don\'t know what to do with it.',
      'From "we have nothing" to dinner in 30 min.',
      'Fridge chaos → Culinary genius.',
      'Armin doesn\'t judge your fridge. (Okay, a little.)',
      'The answer to the question no one wants to ask.',
      'Three ingredients. Zero excuses.',
    ],
    es: [
      'Pon lo que tengas. Armin se encarga de la cena.',
      'Tienes comida en casa. Solo no sabes qué hacer con ella.',
      'De "no tenemos nada" a cena en 30 min.',
      'Caos en la nevera → Genialidad culinaria.',
      'Armin no juzga tu nevera. (Bueno, un poco.)',
    ],
    bs: [
      'Ubaci šta imaš. Armin rješava večeru.',
      'Imaš hranu kod kuće. Samo ne znaš šta da radiš s njom.',
      'Od "nemamo ništa" do večere za 30 min.',
      'Kaos u frižideru → Kulinarska genijalnost.',
      'Armin ne osuđuje tvoj frižider. (Dobro, malo.)',
    ],
  };

  const footerTaglines = {
    sv: ['Lagad med kärlek, kaos och alldeles för mycket vitlök.', 'Inga kockar skadades. Några ägg, dock.', 'Kodad med kaffe. Testad med hunger.', 'Byggt av en kille som googlar "hur kokar man ris" ibland.', 'Made in Sweden. Drivs av panik och pasta.', 'Funkar bäst typ kl 17 när stressen slår till.', 'Testad av studenter. Godkänd av mammor.', 'Recept utan krusiduller. Middag utan drama.'],
    en: ['Made with love, chaos, and way too much garlic.', 'No chefs were harmed. A few eggs, though.', 'Coded with coffee. Tested with hunger.', 'Built by someone who googles "how to boil rice" sometimes.', 'Works best at 4:55 PM when panic kicks in.'],
    es: ['Hecho con amor, caos y demasiado ajo.', 'Ningún chef fue lastimado. Algunos huevos sí.', 'Programado con café. Probado con hambre.', 'Funciona mejor a las 16:55 cuando entra el pánico.'],
    bs: ['Napravljeno s ljubavlju, haosom i previše bijelog luka.', 'Nijedan kuhar nije povrijeđen. Nekoliko jaja jeste.', 'Kodirano uz kafu. Testirano glađu.', 'Najbolje radi u 16:55 kad udari panika.'],
  };

  const footerIronies = {
    sv: ['Ingen mat skadades. Utvecklaren däremot — den vet vi inte.', 'Om appen krånglar — skylla på vitlöken.', 'Vi tar noll ansvar för matlagningsambitioner kl 23.', 'Den här appen fixar inte disken. Men maten, det kan vi.', 'AI-recept. Mänsklig panik. Riktig hunger.', 'Likheter med riktiga kockar är helt och hållet en slump.', 'Ditt kylskåp dömer dig inte. Det gör vi inte heller.', 'Bättre än att googla "vad ska jag laga" för 45:e gången.'],
    en: ['No food was harmed during development. The developer, however...', 'If the app crashes — blame the garlic.', 'Disclaimer: We take no responsibility for cooking ambitions at 11 PM.', 'This app doesn\'t replace a grandma. But it tries.', 'AI-generated recipes. Human panic. Real hunger.'],
    es: ['Ningún alimento fue dañado. El desarrollador, sin embargo...', 'Si la app falla — culpa al ajo.', 'Esta app no reemplaza a una abuela. Pero lo intenta.', 'Recetas de IA. Pánico humano. Hambre real.'],
    bs: ['Nijedna hrana nije oštećena. Programer, međutim...', 'Ako app padne — kriv je bijeli luk.', 'Ova aplikacija ne zamjenjuje nanu. Ali pokušava.', 'AI recepti. Ljudska panika. Prava glad.'],
  };

  const loadingMessages = {
    sv: ['Armin tänker på vad du ska käka...', 'Frågar AI-kocken om råd...', 'Mixar dina grejer i molnet...', 'Bläddrar receptböcker i ljusets hastighet...', 'Letar efter recept som funkar med det du har...', 'Räknar vitlöksklyftor (det räcker aldrig)...', 'Kollar vad man kan trolla fram...', 'Typ som att googla, fast smartare...', 'Hoppas du är hungrig...'],
    en: ['Armin is thinking about what you should eat', 'Consulting the culinary oracle', 'Mixing ingredients in the cloud', 'Not googling — trusting the AI instead', 'Looking for recipes that don\'t require talent', 'Counting garlic cloves (never enough)'],
    es: ['Armin está pensando qué deberías comer', 'Consultando el oráculo culinario', 'Mezclando ingredientes en la nube', 'Buscando recetas que no requieran talento'],
    bs: ['Armin razmišlja šta da jedeš', 'Konsultuje kulinarski orakul', 'Miješa sastojke u oblaku', 'Traži recepte koji ne zahtijevaju talenat'],
  };

  // ─── Toast messages (with variation) ───
  const toastVariations = {
    favAdded: [
      'Sparad! Den där är en keeper ❤️',
      'In i favoriter-skåpet! 🏆',
      'Noterat. Du har bra smak.',
      'Sparad — Armin godkänner 👨‍🍳',
    ],
    favRemoved: [
      'Borttagen. Vi pratar aldrig om det igen.',
      'Bort med den. Ingen dömer.',
      'Raderad. Som om det aldrig hände.',
      'Favorit-dumpad. Inga hårda känslor.',
    ],
  };

  const toastMessages = {
    copied: 'Kopierat! Dela på hälsa.',
    favAdded: () => pick(toastVariations.favAdded),
    favRemoved: () => pick(toastVariations.favRemoved),
    listSent: 'Inköpslistan flyger iväg till din mejl ✈️',
    listAdded: 'Lagt till! Dags att handla snart.',
    emptyList: 'Listan är tom — inget att skicka!',
    loggedIn: 'Välkommen tillbaka!',
    loggedOut: 'Du är nu utloggad',
    magicSent: 'Kolla din mejl — vi har skickat en länk',
    error: 'Något gick snett — försök igen om en stund'
  };

  // ─── DOM refs ───
  const ingInput       = document.getElementById('ingInput');
  const addBtn         = document.getElementById('addBtn');
  const tagsEl         = document.getElementById('tags');
  const searchBtn      = document.getElementById('searchBtn');
  const errBox         = document.getElementById('errBox');
  const loadingEl      = document.getElementById('loadingEl');
  const recipeList     = document.getElementById('recipeList');
  const quickPicks     = document.getElementById('quickPicks');
  const overlay        = document.getElementById('overlay');
  const modal          = document.getElementById('modal');
  const settingsToggle = document.getElementById('settingsToggle');
  const prefChips      = document.getElementById('prefChips');
  const copyToast      = document.getElementById('copyToast');
  const worldGrid      = document.getElementById('worldGrid');
  const historySection = document.getElementById('historySection');
  const filterTabs     = document.getElementById('filterTabs');
  const favGrid        = document.getElementById('favGrid');
  const favsEmpty      = document.getElementById('favsEmpty');
  const favCountEl     = document.getElementById('favCount');
  const favBadge       = document.getElementById('favBadge');
  const listBadge      = document.getElementById('listBadge');
  const ingSuggestions  = document.getElementById('ingSuggestions');
  const accountBtn     = document.getElementById('accountBtn');
  const authOverlay    = document.getElementById('authOverlay');

  // ─── View System ───
  const views = {
    search: document.getElementById('viewSearch'),
    inspiration: document.getElementById('viewInspiration'),
    favorites: document.getElementById('viewFavorites'),
    shopping: document.getElementById('viewShopping'),
  };

  function switchView(name) {
    Object.entries(views).forEach(([key, el]) => { el.hidden = key !== name; });
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === name);
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
    history.pushState({ view: name }, '', `#${name}`);
    if (name === 'favorites') renderFavView();
    if (name === 'inspiration') { renderArminPicks(); renderWorldCuisines(); }
    if (name === 'shopping') renderShoppingView();
  }
  // Expose for inline onclick in HTML
  window.__switchView = switchView;

  document.querySelector('.bottom-nav').addEventListener('click', e => {
    const btn = e.target.closest('.nav-item');
    if (btn) { haptic(); switchView(btn.dataset.view); }
  });

  window.addEventListener('popstate', e => {
    switchView(e.state?.view || 'search');
  });

  document.getElementById('emptyCtaBtn')?.addEventListener('click', () => switchView('search'));

  // ─── Fridge Photo refs ───
  const fridgeBtn      = document.getElementById('fridgeBtn');
  const fridgeInput    = document.getElementById('fridgeInput');
  const fridgePreview  = document.getElementById('fridgePreview');
  const fridgeImg      = document.getElementById('fridgeImg');
  const fridgeScanning = document.getElementById('fridgeScanning');
  const fridgeRemove   = document.getElementById('fridgeRemove');

  // ─── Helpers ───
  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function saveFavorites() { localStorage.setItem('fav_recipes', JSON.stringify(favorites)); }
  function isFav(name) { return favorites.some(f => f.name === name); }

  function showToast(msg) {
    const raw = toastMessages[msg] || msg;
    const text = typeof raw === 'function' ? raw() : raw;
    copyToast.textContent = text;
    copyToast.classList.add('show');
    clearTimeout(copyToast._t);
    copyToast._t = setTimeout(() => copyToast.classList.remove('show'), 2200);
  }

  function formatTimeAgo(isoString) {
    const diff = Date.now() - new Date(isoString).getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (mins < 1) return 'Nyss';
    if (mins < 60) return `${mins} min`;
    if (hours < 24) return `${hours} tim`;
    return `${days}d`;
  }

  // ─── Haptic Feedback ───
  function haptic(style = 'light') {
    if (navigator.vibrate) {
      const patterns = { light: 10, medium: 20, heavy: 30 };
      navigator.vibrate(patterns[style] || 10);
    }
  }

  // ─── Confetti ───
  function fireConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#C05A1F', '#E07438', '#F5A623', '#FF6B6B', '#4ECDC4', '#45B7D1'];
    const particles = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 15 - 5,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        life: 1,
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        if (p.life <= 0) return;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4;
        p.rotation += p.rotSpeed;
        p.life -= 0.015;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      frame++;
      if (alive && frame < 120) requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(animate);
  }

  // ─── Dark Mode ───
  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  function updateDarkModeIcon() {
    settingsToggle.innerHTML = isDark() ? iconSun : iconMoon;
    settingsToggle.title = isDark() ? 'Ljust läge' : 'Mörkt läge';
    settingsToggle.classList.toggle('dark-active', isDark());
  }

  function toggleDarkMode() {
    haptic();
    if (isDark()) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('dark_mode', 'false');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('dark_mode', 'true');
    }
    updateDarkModeIcon();
  }

  settingsToggle.addEventListener('click', toggleDarkMode);
  updateDarkModeIcon();

  // ─── Onboarding ───
  function showOnboarding() {
    if (localStorage.getItem('onboarding_seen')) return;
    const overlay = document.getElementById('onboardingOverlay');
    if (overlay) {
      overlay.hidden = false;
      document.body.style.overflow = 'hidden';

      // Inject the logo SVG
      const logoContainer = document.getElementById('onboardingLogo');
      if (logoContainer) logoContainer.innerHTML = appLogoSVG(64);

      document.getElementById('onboardingClose')?.addEventListener('click', () => {
        overlay.hidden = true;
        document.body.style.overflow = '';
        localStorage.setItem('onboarding_seen', 'true');
      });
    }
  }

  // ─── Auth UI ───
  let authIsSignUp = false;

  function updateAuthUI() {
    if (!accountBtn) return;
    accountBtn.classList.toggle('logged-in', !!currentUser);

    const signInEl = document.getElementById('authSignIn');
    const loggedInEl = document.getElementById('authLoggedIn');

    if (currentUser) {
      if (signInEl) signInEl.hidden = true;
      if (loggedInEl) {
        loggedInEl.hidden = false;
        const emailEl = document.getElementById('authUserEmail');
        const avatarEl = document.getElementById('authAvatar');
        if (emailEl) emailEl.textContent = currentUser.email;
        if (avatarEl) avatarEl.textContent = (currentUser.email || '?')[0].toUpperCase();

        // Update account management info
        const providerEl = document.getElementById('authProvider');
        const favCountEl2 = document.getElementById('authFavCount');
        if (providerEl) {
          const provider = currentUser.app_metadata?.provider || 'email';
          const labels = { google: 'Google', apple: 'Apple', email: 'E-post' };
          providerEl.textContent = labels[provider] || provider;
        }
        if (favCountEl2) favCountEl2.textContent = `${favorites.length} recept`;
      }
    } else {
      if (signInEl) signInEl.hidden = false;
      if (loggedInEl) loggedInEl.hidden = true;
    }
  }

  function showChangelog() {
    const lastSeen = loadStorage('changelog_seen', '0');
    const latest = changelog[0];

    modal.innerHTML = `
      <div class="modal-top" style="position:sticky;top:0;background:var(--bg-surface);z-index:2;padding-top:8px;">
        <div class="modal-title">🆕 Nyheter</div>
        <div class="modal-actions">
          <button class="modal-action-btn close-btn" id="closeBtn" aria-label="Stäng">${iconClose}</button>
        </div>
      </div>
      <div class="changelog-list">
        ${changelog.map(entry => `
          <div class="changelog-entry${entry.version === latest.version ? ' latest' : ''}">
            <div class="changelog-header">
              <span class="changelog-version">v${esc(entry.version)}</span>
              <span class="changelog-date">${esc(entry.date)}</span>
            </div>
            <div class="changelog-title">${esc(entry.title)}</div>
            <ul class="changelog-items">
              ${entry.items.map(item => `<li>${esc(item)}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      <button class="changelog-close-bottom" id="closeChangelogBtn">Uppfattat!</button>
    `;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('closeBtn').addEventListener('click', closeModal);
    document.getElementById('closeChangelogBtn').addEventListener('click', closeModal);
    localStorage.setItem('changelog_seen', latest.version);
    updateNewsBadge();
  }

  function updateNewsBadge() {
    const lastSeen = loadStorage('changelog_seen', '0');
    const latest = changelog[0];
    const badge = document.getElementById('newsBadge');
    if (badge) {
      badge.style.display = lastSeen !== latest.version ? 'block' : 'none';
    }
  }

  function openAuthModal() {
    haptic();
    updateAuthUI();
    authOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAuthModal() {
    authOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  accountBtn?.addEventListener('click', openAuthModal);
  document.getElementById('closeAuth')?.addEventListener('click', closeAuthModal);
  authOverlay?.addEventListener('click', e => { if (e.target === authOverlay) closeAuthModal(); });

  // Toggle sign-in / sign-up mode
  document.getElementById('authToggleMode')?.addEventListener('click', () => {
    authIsSignUp = !authIsSignUp;
    const submitBtn = document.getElementById('authSubmit');
    const toggleBtn = document.getElementById('authToggleMode');
    if (authIsSignUp) {
      submitBtn.textContent = 'Skapa konto';
      toggleBtn.innerHTML = 'Har redan ett konto? <strong>Logga in här</strong>';
    } else {
      submitBtn.textContent = 'Logga in';
      toggleBtn.innerHTML = 'Har inget konto? <strong>Skapa ett här</strong>';
    }
  });

  // Email + Password sign in / sign up
  document.getElementById('authSubmit')?.addEventListener('click', async () => {
    const emailInput = document.getElementById('authEmail');
    const passwordInput = document.getElementById('authPassword');
    const email = emailInput?.value?.trim();
    const password = passwordInput?.value;
    if (!email || !password) {
      showToast('error');
      return;
    }
    if (password.length < 6) {
      showToast('error');
      return;
    }

    const submitBtn = document.getElementById('authSubmit');
    submitBtn.disabled = true;
    submitBtn.textContent = authIsSignUp ? 'Skapar konto...' : 'Loggar in...';

    try {
      if (!supabaseClient) throw new Error('Supabase ej konfigurerat');

      let result;
      if (authIsSignUp) {
        result = await supabaseClient.auth.signUp({ email, password });
      } else {
        result = await supabaseClient.auth.signInWithPassword({ email, password });
      }

      if (result.error) throw result.error;

      if (authIsSignUp && result.data?.user && !result.data?.session) {
        // Email confirmation required
        showToast('magicSent');
      } else {
        closeAuthModal();
      }
    } catch (e) {
      showToast('error');
      console.error('Auth error:', e);
    }
    submitBtn.disabled = false;
    submitBtn.textContent = authIsSignUp ? 'Skapa konto' : 'Logga in';
  });

  // Google OAuth
  document.getElementById('authGoogle')?.addEventListener('click', async () => {
    if (!supabaseClient) { showToast('error'); return; }
    try {
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin }
      });
      if (error) throw error;
    } catch (e) {
      showToast('error');
      console.error('Google auth error:', e);
    }
  });

  // Apple OAuth
  document.getElementById('authApple')?.addEventListener('click', async () => {
    if (!supabaseClient) { showToast('error'); return; }
    try {
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'apple',
        options: { redirectTo: window.location.origin }
      });
      if (error) throw error;
    } catch (e) {
      showToast('error');
      console.error('Apple auth error:', e);
    }
  });

  // Change password
  document.getElementById('authChangePassword')?.addEventListener('click', async () => {
    if (!supabaseClient || !currentUser?.email) { showToast('error'); return; }
    try {
      const { error } = await supabaseClient.auth.resetPasswordForEmail(currentUser.email, {
        redirectTo: window.location.origin
      });
      if (error) throw error;
      showToast('magicSent');
    } catch (e) {
      showToast('error');
      console.error('Password reset error:', e);
    }
  });

  // Delete account
  document.getElementById('authDeleteAccount')?.addEventListener('click', async () => {
    if (!confirm('Är du säker på att du vill radera ditt konto? Alla sparade favoriter försvinner permanent.')) return;
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }
    currentUser = null;
    favorites = [];
    saveFavorites();
    updateAuthUI();
    showToast('loggedOut');
    closeAuthModal();
  });

  // Sign out
  document.getElementById('authSignOut')?.addEventListener('click', async () => {
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }
    currentUser = null;
    updateAuthUI();
    showToast('loggedOut');
    closeAuthModal();
  });

  // ─── Cloud Sync — Favorites ───
  async function saveFavoriteToCloud(recipe) {
    if (!currentUser || !supabaseClient) return;
    try {
      await supabaseClient.from('favorites').upsert({
        user_id: currentUser.id,
        recipe_name: recipe.name,
        recipe_data: recipe
      }, { onConflict: 'user_id,recipe_name' });
    } catch (e) { console.error('Cloud save error:', e); }
  }

  async function syncFavoritesFromCloud() {
    if (!currentUser || !supabaseClient) return;
    try {
      const { data } = await supabaseClient
        .from('favorites')
        .select('recipe_data')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false });
      if (data && data.length) {
        // Merge: cloud wins for duplicates, keep local-only ones
        const cloudNames = new Set(data.map(r => r.recipe_data.name));
        const localOnly = favorites.filter(f => !cloudNames.has(f.name));
        favorites = [...data.map(r => r.recipe_data), ...localOnly];
        saveFavorites();
        renderFavView();
      }
    } catch (e) { console.error('Cloud sync error:', e); }
  }

  async function removeFavoriteFromCloud(recipeName) {
    if (!currentUser || !supabaseClient) return;
    try {
      await supabaseClient.from('favorites')
        .delete()
        .eq('user_id', currentUser.id)
        .eq('recipe_name', recipeName);
    } catch (e) { console.error('Cloud remove error:', e); }
  }

  // ─── Preferences ───
  prefChips.addEventListener('click', e => {
    const chip = e.target.closest('.pref-chip');
    if (!chip) return;
    haptic();
    const pref = chip.dataset.pref;
    if (prefs.has(pref)) { prefs.delete(pref); chip.classList.remove('active'); }
    else { prefs.add(pref); chip.classList.add('active'); }
  });

  // ─── Search Portions ───
  document.getElementById('spMinus').addEventListener('click', () => {
    if (searchPortions > 1) { searchPortions--; document.getElementById('spNum').textContent = searchPortions; haptic(); }
  });
  document.getElementById('spPlus').addEventListener('click', () => {
    if (searchPortions < 20) { searchPortions++; document.getElementById('spNum').textContent = searchPortions; haptic(); }
  });

  // ─── Quick picks ───
  function renderQuickPicks() {
    quickPicks.innerHTML = quickCategories.map(cat => `
      <div class="quick-category">
        <div class="quick-category-label">${cat.label}</div>
        <div class="quick-category-chips">
          ${cat.items.map(item => {
            const used = ingredients.includes(item) ? ' used' : '';
            return `<button class="quick-chip${used}" data-ing="${esc(item)}">${esc(item)}</button>`;
          }).join('')}
        </div>
      </div>
    `).join('');
  }

  quickPicks.addEventListener('click', e => {
    const chip = e.target.closest('.quick-chip');
    if (!chip || chip.classList.contains('used')) return;
    haptic();
    const ing = chip.dataset.ing;
    if (!ingredients.includes(ing)) { ingredients.push(ing); render(); }
  });

  // ─── Ingredients ───
  function addIng() {
    const val = ingInput.value.trim();
    if (!val) return;
    val.split(',').map(s => s.trim().toLowerCase()).filter(Boolean).forEach(p => {
      if (!ingredients.includes(p)) ingredients.push(p);
    });
    ingInput.value = '';
    clearSuggestions();
    render();
    ingInput.focus();
  }

  function removeIng(idx) { ingredients.splice(idx, 1); render(); }

  function render() {
    tagsEl.innerHTML = ingredients.map((ing, i) =>
      `<span class="tag">${esc(ing)}<button aria-label="Ta bort ${esc(ing)}" data-idx="${i}">×</button></span>`
    ).join('');
    searchBtn.disabled = ingredients.length === 0;
    renderQuickPicks();
    updateFavBadge();
    updateListBadge();
  }

  function updateFavBadge() {
    const count = favorites.length;
    if (favBadge) favBadge.textContent = count > 0 ? count : '';
    if (favCountEl) favCountEl.textContent = `${count} recept ${count === 1 ? 'sparat' : 'sparade'}`;
  }

  function updateListBadge() {
    const unchecked = shoppingList.filter(i => !i.checked).length;
    if (listBadge) listBadge.textContent = unchecked > 0 ? unchecked : '';
  }

  tagsEl.addEventListener('click', e => {
    const btn = e.target.closest('.tag button');
    if (btn) removeIng(Number(btn.dataset.idx));
  });
  ingInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); addIng(); } });
  addBtn.addEventListener('click', addIng);

  // ─── Autocomplete ───
  function showSuggestions(value) {
    if (!value || value.length < 2) { clearSuggestions(); return; }
    const matches = allIngredients
      .filter(i => i.startsWith(value.toLowerCase()) && !ingredients.includes(i))
      .slice(0, 5);

    if (!matches.length) { clearSuggestions(); return; }

    ingSuggestions.innerHTML = matches.map(m =>
      `<button class="suggestion-item" data-val="${esc(m)}">${esc(m)}</button>`
    ).join('');
    ingSuggestions.hidden = false;
  }

  function clearSuggestions() {
    if (ingSuggestions) { ingSuggestions.innerHTML = ''; ingSuggestions.hidden = true; }
  }

  ingInput.addEventListener('input', () => showSuggestions(ingInput.value.trim()));
  ingInput.addEventListener('blur', () => setTimeout(clearSuggestions, 150));

  if (ingSuggestions) {
    ingSuggestions.addEventListener('click', e => {
      const item = e.target.closest('.suggestion-item');
      if (!item) return;
      const val = item.dataset.val;
      if (val && !ingredients.includes(val)) {
        ingredients.push(val);
        ingInput.value = '';
        clearSuggestions();
        render();
        ingInput.focus();
      }
    });
  }

  // ─── History ───
  function saveToHistory(ings, recipeData) {
    const entry = {
      id: Date.now(),
      ingredients: [...ings],
      portions: searchPortions,
      prefs: [...prefs],
      recipes: recipeData,
      timestamp: new Date().toISOString()
    };
    searchHistory.unshift(entry);
    if (searchHistory.length > 10) searchHistory = searchHistory.slice(0, 10);
    localStorage.setItem('search_history', JSON.stringify(searchHistory));
    renderHistory();
  }

  function renderHistory() {
    if (!searchHistory.length) { historySection.innerHTML = ''; return; }
    historySection.innerHTML = `
      <div class="history-section">
        <div class="history-header">
          <div class="history-title">${iconClock} Senaste sökningar</div>
          <button class="history-clear-btn" id="historyClearBtn">Rensa</button>
        </div>
        ${searchHistory.slice(0, 5).map(entry => `
          <div class="history-item" data-hid="${entry.id}">
            <div class="history-ings">${entry.ingredients.map(esc).join(', ')}</div>
            <div class="history-time">${formatTimeAgo(entry.timestamp)} ${iconArrow}</div>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('historyClearBtn').addEventListener('click', () => {
      searchHistory = [];
      localStorage.removeItem('search_history');
      renderHistory();
    });

    historySection.querySelectorAll('.history-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = Number(item.dataset.hid);
        const entry = searchHistory.find(e => e.id === id);
        if (!entry) return;
        ingredients = [...entry.ingredients];
        searchPortions = entry.portions;
        document.getElementById('spNum').textContent = searchPortions;
        prefs = new Set(entry.prefs || []);
        document.querySelectorAll('.pref-chip').forEach(chip => {
          chip.classList.toggle('active', prefs.has(chip.dataset.pref));
        });
        render();
        if (entry.recipes && entry.recipes.length) {
          recipes = entry.recipes;
          renderRecipes();
          setTimeout(() => recipeList.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
      });
    });
  }

  // ─── Shopping List ───
  function saveShoppingList() {
    localStorage.setItem('shopping_list', JSON.stringify(shoppingList));
    updateListBadge();
  }

  function addToShoppingList(ingredientList, recipeName) {
    let added = 0;
    ingredientList.forEach(ing => {
      const name = ing.trim();
      if (name && !shoppingList.some(item => item.name.toLowerCase() === name.toLowerCase())) {
        shoppingList.push({ id: Date.now() + Math.random(), name, checked: false, recipe: recipeName || '' });
        added++;
      }
    });
    saveShoppingList();
    if (added > 0) {
      showToast('listAdded');
      haptic('medium');
    } else {
      showToast('Ingredienserna finns redan i listan');
    }
  }

  // ─── Shopping List View ───
  function renderShoppingView() {
    const content = document.getElementById('shoppingListContent');
    const empty = document.getElementById('listEmpty');
    const subtitle = document.getElementById('listSubtitle');

    updateListBadge();

    const uncheckedCount = shoppingList.filter(i => !i.checked).length;
    if (subtitle) {
      subtitle.textContent = shoppingList.length > 0
        ? `${uncheckedCount} av ${shoppingList.length} kvar`
        : '';
    }

    if (!shoppingList.length) {
      if (content) content.innerHTML = '';
      if (empty) empty.style.display = '';
      return;
    }
    if (empty) empty.style.display = 'none';

    // Group by recipe
    const byRecipe = {};
    shoppingList.forEach((item, i) => {
      const key = item.recipe || 'Övrigt';
      if (!byRecipe[key]) byRecipe[key] = [];
      byRecipe[key].push({ ...item, index: i });
    });

    if (content) {
      content.innerHTML = Object.entries(byRecipe).map(([recipe, items]) => `
        <div class="list-group">
          <div class="list-group-title">${esc(recipe)}</div>
          ${items.map(item => `
            <label class="list-item${item.checked ? ' checked' : ''}">
              <input type="checkbox" ${item.checked ? 'checked' : ''}
                data-idx="${item.index}" class="list-checkbox">
              <span class="list-text">${esc(item.name)}</span>
              <button class="list-item-remove" data-rm="${item.index}" aria-label="Ta bort">×</button>
            </label>
          `).join('')}
        </div>
      `).join('');

      // Event listeners
      content.querySelectorAll('.list-checkbox').forEach(cb => {
        cb.addEventListener('change', () => {
          const idx = Number(cb.dataset.idx);
          if (shoppingList[idx]) {
            shoppingList[idx].checked = cb.checked;
            saveShoppingList();
            haptic();
            renderShoppingView();
          }
        });
      });

      content.querySelectorAll('.list-item-remove').forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault();
          e.stopPropagation();
          shoppingList.splice(Number(btn.dataset.rm), 1);
          saveShoppingList();
          renderShoppingView();
        });
      });
    }
  }

  // Clear list button
  document.getElementById('clearList')?.addEventListener('click', () => {
    if (!shoppingList.length) return;
    shoppingList = [];
    saveShoppingList();
    renderShoppingView();
    showToast('Inköpslistan rensad');
  });

  // Share shopping list
  document.getElementById('sendList')?.addEventListener('click', () => shareShoppingList());

  function getListText() {
    const unchecked = shoppingList.filter(i => !i.checked);
    const byRecipe = {};
    unchecked.forEach(item => {
      const key = item.recipe || 'Övrigt';
      if (!byRecipe[key]) byRecipe[key] = [];
      byRecipe[key].push(item);
    });
    return Object.entries(byRecipe).map(([recipe, items]) =>
      `${recipe}:\n${items.map(i => `• ${i.name}`).join('\n')}`
    ).join('\n\n');
  }

  async function shareShoppingList() {
    const unchecked = shoppingList.filter(i => !i.checked);
    if (!unchecked.length) { showToast('emptyList'); return; }

    const text = getListText();
    haptic('medium');

    try {
      if (navigator.share) {
        await navigator.share({ title: 'Inköpslista', text });
        return;
      }
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
    try {
      await navigator.clipboard.writeText(text);
      showToast('copied');
    } catch { showToast('Kunde inte dela'); }
  }

  // ─── Find Recipes ───
  function getCacheKey() {
    return JSON.stringify({
      ings: [...ingredients].sort().join(','),
      portions: searchPortions,
      prefs: [...prefs].sort().join(',')
    });
  }

  async function findRecipes() {
    const isFreetext = searchMode === 'freetext' && freetextInput?.value.trim();
    if (!isFreetext && !ingredients.length) return;

    const cacheKey = isFreetext ? `freetext:${freetextInput.value.trim()}:${searchPortions}:${[...prefs].sort().join(',')}` : getCacheKey();
    if (recipeCache.has(cacheKey)) {
      const cached = recipeCache.get(cacheKey);
      recipes = sortRecipesByDifficulty(cached.recipes || cached);
      lastChefComment = cached.chef_comment || '';
      lastMissingGlobally = cached.missing_globally || [];
      lastSuggestedSwaps = cached.suggested_swaps || [];
      renderRecipes();
      showToast('Hämtat från cache');
      setTimeout(() => recipeList.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      return;
    }

    loadingEl.style.display = 'block';
    loadingEl.innerHTML = `
      <div class="skeleton-list">
        ${[1,2,3].map(() => `
          <div class="skeleton-card">
            <div class="skel skel-title"></div>
            <div class="skel-badges"><div class="skel skel-badge"></div><div class="skel skel-badge"></div></div>
            <div class="skel skel-line w80"></div>
            <div class="skel skel-line w60"></div>
          </div>
        `).join('')}
      </div>
      <div class="loading-label">${pick(loadingMessages[currentLang] || loadingMessages.sv)}<span class="loading-dots"></span></div>
    `;
    recipeList.innerHTML = '';
    errBox.style.display = 'none';
    searchBtn.disabled = true;

    const maxRetries = 2;
    let lastError = null;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        if (attempt > 0) {
          loadingEl.querySelector('.loading-label').innerHTML =
            `Försöker igen (${attempt + 1}/${maxRetries + 1})<span class="loading-dots"></span>`;
        }

        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(isFreetext ? {
            mode: 'freetext',
            query: freetextInput.value.trim(),
            portions: searchPortions,
            prefs: [...prefs],
            conversationHistory,
            language: currentLang
          } : {
            ingredients: [...ingredients],
            portions: searchPortions,
            prefs: [...prefs],
            conversationHistory,
            language: currentLang
          })
        });

        if (!res.ok) {
          if (res.status === 429) throw new Error('Lite för snabbt — vänta en stund och försök igen.');
          if (res.status === 401 || res.status === 403) throw new Error('Något gick snett med autentiseringen.');
          if (res.status >= 500) throw new Error('server');
          throw new Error('Något gick snett — kontrollera anslutningen och försök igen.');
        }

        const data = await res.json();
        if (data.error) throw new Error(data.error.message || 'API-fel inträffade.');

        const text = (data.content || []).map(b => b.text || '').join('');
        let clean = text.replace(/```json|```/g, '').trim();
        // Remove any text before first { or [
        const jsonStart = clean.search(/[\[{]/);
        if (jsonStart > 0) clean = clean.substring(jsonStart);

        // Try to fix truncated JSON by closing brackets
        let parsed;
        try {
          parsed = JSON.parse(clean);
        } catch {
          let fixed = clean;
          // Remove trailing incomplete strings (truncated mid-value)
          fixed = fixed.replace(/,\s*"[^"]*$/, '');
          fixed = fixed.replace(/,\s*$/, '');
          // Count and close open brackets/braces
          const openBraces = (fixed.match(/\{/g) || []).length;
          const closeBraces = (fixed.match(/\}/g) || []).length;
          const openBrackets = (fixed.match(/\[/g) || []).length;
          const closeBrackets = (fixed.match(/\]/g) || []).length;
          for (let b = 0; b < openBrackets - closeBrackets; b++) fixed += ']';
          for (let b = 0; b < openBraces - closeBraces; b++) fixed += '}';

          try {
            parsed = JSON.parse(fixed);
          } catch {
            throw new Error('parse_error');
          }
        }

        recipes = sortRecipesByDifficulty(parsed.recipes || []);
        if (!recipes.length) throw new Error('Inga recept returnerades — försök med andra ingredienser.');

        lastChefComment = parsed.chef_comment || '';
        lastMissingGlobally = parsed.missing_globally || [];
        lastSuggestedSwaps = parsed.suggested_swaps || [];

        recipeCache.set(cacheKey, parsed);
        renderRecipes();
        initTilt(recipeList);
        saveToHistory(ingredients, recipes);

        setTimeout(() => recipeList.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        lastError = null;
        break;

      } catch (e) {
        lastError = e;
        console.error(`Recipe fetch attempt ${attempt + 1} error:`, e);
        // Only retry on parse errors or server errors
        if (e.message !== 'parse_error' && e.message !== 'server') break;
        if (attempt >= maxRetries) break;
      }
    }

    if (lastError) {
      const msg = lastError.message === 'parse_error'
        ? 'AI:n gav ett ofullständigt svar — försök igen.'
        : lastError.message === 'server'
        ? 'Servern svarar inte just nu — försök igen om en stund.'
        : lastError.message;
      errBox.textContent = msg;
      errBox.style.display = 'block';
    }

    loadingEl.style.display = 'none';
    searchBtn.disabled = false;
  }

  searchBtn.addEventListener('click', () => { haptic('medium'); findRecipes(); });

  // ─── Search Mode Tabs (Ingredients vs Free-text) ───
  let searchMode = 'ingredients';
  const searchModeTabs = document.getElementById('searchModeTabs');
  const ingredientMode = document.getElementById('ingredientMode');
  const freetextMode = document.getElementById('freetextMode');
  const freetextInput = document.getElementById('freetextInput');

  if (searchModeTabs) {
    searchModeTabs.addEventListener('click', e => {
      const tab = e.target.closest('.search-mode-tab');
      if (!tab) return;
      haptic();
      searchMode = tab.dataset.mode;
      searchModeTabs.querySelectorAll('.search-mode-tab').forEach(t => t.classList.toggle('active', t === tab));
      if (ingredientMode) ingredientMode.hidden = searchMode !== 'ingredients';
      if (freetextMode) freetextMode.hidden = searchMode !== 'freetext';
      // Enable search button based on mode
      if (searchMode === 'freetext') {
        searchBtn.disabled = !freetextInput?.value.trim();
      } else {
        searchBtn.disabled = ingredients.length === 0;
      }
    });
  }
  if (freetextInput) {
    freetextInput.addEventListener('input', () => {
      if (searchMode === 'freetext') searchBtn.disabled = !freetextInput.value.trim();
    });
    freetextInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (freetextInput.value.trim()) findRecipes(); }
    });
  }

  // ─── Tag helpers ───
  function tagClass(tag) {
    const t = (tag || '').toLowerCase();
    if (t.includes('snabbaste')) return 'tag-fast';
    if (t.includes('ambitiösa')) return 'tag-ambitious';
    if (t.includes('oväntat')) return 'tag-unexpected';
    if (t.includes('svinn')) return 'tag-zerowaste';
    return 'tag-fast';
  }

  // ─── Render Recipes ───
  function renderRecipes() {
    if (!recipes.length) { recipeList.innerHTML = ''; return; }

    let headerHTML = '';

    // Chef comment
    if (lastChefComment) {
      headerHTML += `
        <div class="chef-comment">
          <span class="chef-icon">👨‍🍳</span>
          <p>${esc(lastChefComment)}</p>
        </div>
      `;
    }

    // Missing globally + suggested swaps combined tips banner
    if (lastMissingGlobally.length || lastSuggestedSwaps.length) {
      headerHTML += `<div class="tips-banner">`;
      headerHTML += `<div class="tips-banner-title">🛒 Tips innan du lagar</div>`;
      if (lastMissingGlobally.length) {
        headerHTML += `
          <div class="missing-globally">
            <span class="missing-icon">${iconShop}</span>
            <span class="missing-label">Köp även:</span>
            ${lastMissingGlobally.map(m => `<span class="missing-chip">${esc(m)}</span>`).join('')}
          </div>
        `;
      }
      if (lastSuggestedSwaps.length) {
        headerHTML += `
          <div class="suggested-swaps">
            ${lastSuggestedSwaps.map(s => `<span class="swap-chip">💡 ${esc(s)}</span>`).join('')}
          </div>
        `;
      }
      headerHTML += `</div>`;
    }

    recipeList.innerHTML = `
      <div class="recipes-container">
      <div class="recipes-header">
        <div class="recipes-title">🍽️ Armin hittade ${recipes.length} recept åt dig</div>
        <div class="recipes-subtitle">Tryck på ett recept för att se allt</div>
      </div>
      ${headerHTML}
    ` + recipes.map((r, i) => {
      const rating = ratings[r.name] || 0;
      const tag = r.tag || '';
      return `
        <div class="recipe-card" data-idx="${i}">
          ${tag ? `<span class="recipe-tag ${tagClass(tag)}">${esc(tag)}</span>` : ''}
          <div class="recipe-top">
            <div class="recipe-name">${esc(r.name)}</div>
            <button class="fav-btn${isFav(r.name) ? ' active' : ''}" data-fav="${i}" aria-label="Spara favorit">${iconHeart(isFav(r.name))}</button>
          </div>
          <div class="badges">
            <span class="badge">${iconClock} ${esc(r.time)}</span>
            <span class="badge ${difficultyClass(r.difficulty)}">${esc(r.difficulty)}</span>
            <span class="badge">${(r.ingredients || []).length} ingredienser</span>
            ${r.nutrition_per_serving?.highlight ? `<span class="badge nutrition-hl">${esc(r.nutrition_per_serving.highlight)}</span>` : ''}
            ${rating > 0 ? `<span class="badge rated">${'★'.repeat(rating)}</span>` : ''}
          </div>
          <div class="recipe-desc">${esc(r.description)}</div>
          ${r.week_tip ? `<div class="recipe-week-tip">${esc(r.week_tip)}</div>` : ''}
          <div class="see-more">Visa recept &rarr;</div>
        </div>
      `;
    }).join('') + '</div>'; // close recipes-container
  }

  recipeList.addEventListener('click', e => {
    const favBtn = e.target.closest('.fav-btn');
    if (favBtn) {
      e.stopPropagation();
      toggleFavorite(recipes[Number(favBtn.dataset.fav)]);
      renderRecipes(); renderFavView(); return;
    }
    const card = e.target.closest('.recipe-card');
    if (card) openRecipe(Number(card.dataset.idx));
  });

  // ─── Favorites ───
  function toggleFavorite(recipe) {
    const idx = favorites.findIndex(f => f.name === recipe.name);
    if (idx > -1) {
      favorites.splice(idx, 1);
      removeFavoriteFromCloud(recipe.name);
      showToast('favRemoved');
    } else {
      favorites.push(recipe);
      saveFavoriteToCloud(recipe);
      showToast('favAdded');
      haptic('medium');
      fireConfetti();
    }
    saveFavorites();
    updateFavBadge();
  }

  function renderFavView() {
    if (!favGrid || !favsEmpty) return;
    updateFavBadge();
    if (!favorites.length) {
      favsEmpty.style.display = '';
      favGrid.innerHTML = '';
      return;
    }
    favsEmpty.style.display = 'none';
    favGrid.innerHTML = favorites.map((f, i) => `
      <div class="fav-card" data-fav-open="${i}">
        <div class="fav-card-info">
          <div class="fav-card-name">${esc(f.name)}</div>
          <div class="fav-card-meta">${esc(f.time || '')} · ${esc(f.difficulty || '')}</div>
        </div>
        <div class="fav-card-actions">
          <button class="fav-action-btn delete" data-fav-rm="${i}" aria-label="Ta bort">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    `).join('');
  }

  if (favGrid) {
    favGrid.addEventListener('click', e => {
      const rmBtn = e.target.closest('.fav-action-btn.delete');
      if (rmBtn) {
        e.stopPropagation();
        const idx = Number(rmBtn.dataset.favRm);
        const removed = favorites[idx];
        favorites.splice(idx, 1);
        if (removed) removeFavoriteFromCloud(removed.name);
        saveFavorites(); renderFavView(); renderRecipes(); return;
      }
      const card = e.target.closest('.fav-card');
      if (card) { recipes = [...favorites]; openRecipe(Number(card.dataset.favOpen)); }
    });
  }

  // ─── Modal ───
  // Scale ingredient amounts based on portion change
  function scaleIngredient(ingStr, originalServings, newServings) {
    if (originalServings === newServings) return ingStr;
    const ratio = newServings / originalServings;
    // Match patterns like "500g", "2 dl", "1.5 msk", "2-3 st" etc.
    return ingStr.replace(/(\d+([.,]\d+)?)\s*(-\s*\d+([.,]\d+)?)?\s*(g|kg|dl|cl|ml|l|msk|tsk|st|krm)\b/gi, (match, num, dec, rangeEnd, rangeDec, unit) => {
      const scaled = Math.round(parseFloat(num.replace(',', '.')) * ratio * 10) / 10;
      const nice = scaled % 1 === 0 ? String(Math.round(scaled)) : String(scaled).replace('.', ',');
      if (rangeEnd) {
        const rangeNum = parseFloat(rangeEnd.replace('-', '').replace(',', '.').trim());
        const scaledRange = Math.round(rangeNum * ratio * 10) / 10;
        const niceRange = scaledRange % 1 === 0 ? String(Math.round(scaledRange)) : String(scaledRange).replace('.', ',');
        return `${nice}-${niceRange} ${unit}`;
      }
      return `${nice} ${unit}`;
    }).replace(/^(\d+([.,]\d+)?)\s+(?!g|kg|dl|cl|ml|l|msk|tsk|st|krm)/i, (match, num) => {
      const scaled = Math.round(parseFloat(num.replace(',', '.')) * ratio * 10) / 10;
      const nice = scaled % 1 === 0 ? String(Math.round(scaled)) : String(scaled).replace('.', ',');
      return `${nice} `;
    });
  }

  function difficultyClass(diff) {
    const d = (diff || '').toLowerCase();
    if (d === 'lätt') return 'diff-easy';
    if (d === 'medel') return 'diff-medium';
    if (d === 'avancerad') return 'diff-hard';
    return 'diff-easy';
  }

  function difficultyOrder(diff) {
    const d = (diff || '').toLowerCase();
    if (d === 'lätt') return 1;
    if (d === 'medel') return 2;
    if (d === 'avancerad') return 3;
    return 0;
  }

  function sortRecipesByDifficulty(recipeList) {
    return recipeList.sort((a, b) => difficultyOrder(a.difficulty) - difficultyOrder(b.difficulty));
  }

  function openRecipe(idx) {
    const r = recipes[idx];
    if (!r) return;
    const originalServings = r.servings || 4;
    portions = originalServings;

    const currentRating = ratings[r.name] || 0;

    function renderModalIngredients() {
      const ingContainer = document.getElementById('modalIngredients');
      if (!ingContainer) return;
      ingContainer.innerHTML = (r.ingredients || []).map(ing =>
        `<div class="ing-item"><span class="dot"></span>${esc(scaleIngredient(ing, originalServings, portions))}</div>`
      ).join('');
    }

    // Handle both old format (string steps) and new format (object steps)
    const steps = (r.steps || []).map(s => typeof s === 'string' ? { instruction: s } : s);

    // Nutrition pills
    const nutrition = r.nutrition_per_serving;
    const nutritionHTML = nutrition ? `
      <div class="nutrition-pills">
        <span class="nutrition-pill">${nutrition.calories || '—'} kcal</span>
        <span class="nutrition-pill">P: ${nutrition.protein_g || '—'}g</span>
        <span class="nutrition-pill">K: ${nutrition.carbs_g || '—'}g</span>
        <span class="nutrition-pill">F: ${nutrition.fat_g || '—'}g</span>
        ${nutrition.highlight ? `<span class="nutrition-pill highlight">${esc(nutrition.highlight)}</span>` : ''}
      </div>
    ` : '';

    // Substitutions
    const subsHTML = (r.substitutions && r.substitutions.length) ? `
      <details class="substitutions-section" open>
        <summary class="substitutions-toggle">💡 Saknar du något?</summary>
        <div class="substitutions-list">
          ${r.substitutions.map(s => `<p class="substitution-item">${esc(s)}</p>`).join('')}
        </div>
      </details>
    ` : '';

    // Missing ingredients
    const missingHTML = (r.missing_ingredients && r.missing_ingredients.length && r.missing_ingredients[0] !== 'Du har allt!') ? `
      <div class="missing-ing-row">
        <span class="missing-ing-label">Saknas:</span>
        ${r.missing_ingredients.map(m => `<span class="missing-ing-chip">${esc(m)}</span>`).join('')}
      </div>
    ` : '';

    modal.innerHTML = `
      <div class="modal-top">
        <div class="modal-title">${esc(r.name)}</div>
        <div class="modal-actions">
          <button class="modal-action-btn" id="copyBtn" aria-label="Kopiera recept" title="Kopiera">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </button>
          <button class="modal-action-btn" id="shareBtn" aria-label="Dela recept" title="Dela">${iconShare}</button>
          <button class="modal-action-btn" id="printBtn" aria-label="Skriv ut recept" title="Skriv ut">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
            </svg>
          </button>
          <button class="modal-action-btn close-btn" id="closeBtn" aria-label="Stäng">${iconClose}</button>
        </div>
      </div>

      ${r.tag ? `<span class="recipe-tag modal-tag ${tagClass(r.tag)}">${esc(r.tag)}</span>` : ''}

      <div class="badges modal-badges">
        <span class="badge">${iconClock} ${esc(r.time)}</span>
        <span class="badge ${difficultyClass(r.difficulty)}">${esc(r.difficulty)}</span>
      </div>
      ${r.difficulty_reason ? `<div class="difficulty-reason">${esc(r.difficulty_reason)}</div>` : ''}
      <div class="recipe-desc">${esc(r.description)}</div>

      ${missingHTML}

      <div class="portions-row">
        <span class="portions-label">Portioner</span>
        <div class="portions-ctrl">
          <button id="portMinus" aria-label="Färre portioner">-</button>
          <span class="portions-num" id="portNum">${portions}</span>
          <button id="portPlus" aria-label="Fler portioner">+</button>
        </div>
      </div>

      <div class="section-lbl">Ingredienser</div>
      <div id="modalIngredients">
        ${(r.ingredients || []).map(ing => `<div class="ing-item"><span class="dot"></span>${esc(ing)}</div>`).join('')}
      </div>

      ${nutritionHTML}
      ${subsHTML}

      <div class="section-lbl">Gör så här</div>
      ${steps.map((s, i) => `
        <div class="step-row">
          <div class="step-num">${i + 1}</div>
          <div class="step-text">
            ${esc(s.instruction || s)}
            ${s.duration_minutes ? `<span class="step-duration">⏱ ${s.duration_minutes} min</span>` : ''}
          </div>
        </div>
        ${s.tip ? `<div class="step-tip">💡 ${esc(s.tip)}</div>` : ''}
      `).join('')}

      <button class="add-to-shop-btn" id="addToShopBtn">
        ${iconShop} Lägg till i inköpslistan
      </button>

      <button class="cook-mode-start-btn" id="startCookMode">
        🍳 Starta kokläge
      </button>

      ${r.leftovers_tip ? `<div class="leftovers-banner">♻️ ${esc(r.leftovers_tip)}</div>` : ''}

      ${r.drink_pairing ? `
      <div class="drink-pairing">
        <div class="drink-pairing-title">🍷 Armins dryckestips</div>
        <div class="drink-pairing-items">
          ${r.drink_pairing.wine ? `<div class="drink-pairing-item"><span class="drink-pairing-icon">🍷</span> ${esc(r.drink_pairing.wine)}</div>` : ''}
          ${r.drink_pairing.beer ? `<div class="drink-pairing-item"><span class="drink-pairing-icon">🍺</span> ${esc(r.drink_pairing.beer)}</div>` : ''}
          ${r.drink_pairing.non_alcoholic ? `<div class="drink-pairing-item"><span class="drink-pairing-icon">🥤</span> ${esc(r.drink_pairing.non_alcoholic)}</div>` : ''}
        </div>
      </div>
      ` : ''}

      <div class="rating-row">
        <span class="rating-label">Betygsätt receptet</span>
        <div class="stars" id="stars">
          ${[1,2,3,4,5].map(n => `
            <button class="star-btn${n <= currentRating ? ' active' : ''}" data-star="${n}" aria-label="${n} stjärnor">★</button>
          `).join('')}
        </div>
      </div>
    `;

    // Close
    document.getElementById('closeBtn').addEventListener('click', closeModal);

    // Portions — now scales ingredients
    document.getElementById('portMinus').addEventListener('click', () => {
      if (portions > 1) { portions--; document.getElementById('portNum').textContent = portions; renderModalIngredients(); haptic(); }
    });
    document.getElementById('portPlus').addEventListener('click', () => {
      if (portions < 20) { portions++; document.getElementById('portNum').textContent = portions; renderModalIngredients(); haptic(); }
    });

    // Copy
    document.getElementById('copyBtn').addEventListener('click', async () => {
      const text = recipeToText(r);
      try { await navigator.clipboard.writeText(text); showToast('copied'); }
      catch { showToast('Kunde inte kopiera'); }
    });

    // Share
    document.getElementById('shareBtn').addEventListener('click', async () => {
      const text = recipeToText(r);
      try {
        if (navigator.share) { await navigator.share({ title: r.name, text }); return; }
      } catch (e) {
        if (e.name === 'AbortError') return;
      }
      try { await navigator.clipboard.writeText(text); showToast('copied'); }
      catch { showToast('Dela ej tillgängligt'); }
    });

    // Print
    document.getElementById('printBtn').addEventListener('click', () => window.print());

    // Add to shopping list
    document.getElementById('addToShopBtn').addEventListener('click', () => {
      addToShoppingList(r.ingredients || [], r.name);
    });

    // Cook mode
    document.getElementById('startCookMode').addEventListener('click', () => {
      closeModal();
      startCookMode(r);
    });

    // Rating
    const starsEl = document.getElementById('stars');
    starsEl.addEventListener('click', e => {
      const btn = e.target.closest('.star-btn');
      if (!btn) return;
      haptic();
      const star = Number(btn.dataset.star);
      ratings[r.name] = star;
      localStorage.setItem('recipe_ratings', JSON.stringify(ratings));
      starsEl.querySelectorAll('.star-btn').forEach((s, i) => s.classList.toggle('active', i < star));
      showToast(star === 5 ? '⭐ Toppen!' : `Betyg: ${star}/5 stjärnor`);
      renderRecipes();
    });

    // Star hover effect
    starsEl.querySelectorAll('.star-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const n = Number(btn.dataset.star);
        starsEl.querySelectorAll('.star-btn').forEach((s, i) => { s.style.color = i < n ? '#f5a623' : ''; });
      });
      btn.addEventListener('mouseleave', () => {
        const cur = ratings[r.name] || 0;
        starsEl.querySelectorAll('.star-btn').forEach((s, i) => {
          s.style.color = '';
          s.classList.toggle('active', i < cur);
        });
      });
    });

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function recipeToText(r) {
    const ingText  = (r.ingredients || []).map(x => `  - ${x}`).join('\n');
    const stepText = (r.steps || []).map((s, i) => `  ${i + 1}. ${s}`).join('\n');
    return `${r.name}\n${r.time} | ${r.difficulty} | ${r.servings || 4} portioner\n\n${r.description}\n\nIngredienser:\n${ingText}\n\nGör så här:\n${stepText}`;
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeAuthModal(); closeCookMode(); }
  });

  // ─── Cook Mode ───
  let cookModeRecipe = null;
  let cookModeStep = 0;
  let cookModeTimer = null;
  let cookModeSeconds = 0;
  let wakeLock = null;

  function startCookMode(recipe) {
    cookModeRecipe = recipe;
    cookModeStep = 0;
    const overlayEl = document.getElementById('cookModeOverlay');
    if (!overlayEl) return;

    overlayEl.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('cookModeTitle').textContent = recipe.name;

    // Request Wake Lock
    requestWakeLock();

    renderCookModeStep();
  }

  function renderCookModeStep() {
    if (!cookModeRecipe) return;
    const steps = cookModeRecipe.steps || [];
    const body = document.getElementById('cookModeBody');
    const indicator = document.getElementById('cookModeStepIndicator');
    const prevBtn = document.getElementById('cookModePrev');
    const nextBtn = document.getElementById('cookModeNext');

    indicator.textContent = `Steg ${cookModeStep + 1} av ${steps.length}`;

    const step = steps[cookModeStep];
    const stepText = typeof step === 'string' ? step : (step?.instruction || '');
    const stepTip = typeof step === 'object' ? step?.tip : '';

    body.innerHTML = `
      <div class="step-number">${cookModeStep + 1}</div>
      <div class="step-content">${esc(stepText)}</div>
      ${stepTip ? `<div class="cook-mode-tip">💡 ${esc(stepTip)}</div>` : ''}
    `;

    prevBtn.disabled = cookModeStep === 0;
    if (cookModeStep >= steps.length - 1) {
      nextBtn.textContent = '✓ Klar!';
    } else {
      nextBtn.textContent = 'Nästa →';
    }
  }

  document.getElementById('cookModePrev')?.addEventListener('click', () => {
    if (cookModeStep > 0) { cookModeStep--; haptic(); renderCookModeStep(); }
  });

  document.getElementById('cookModeNext')?.addEventListener('click', () => {
    const steps = cookModeRecipe?.steps || [];
    if (cookModeStep < steps.length - 1) {
      cookModeStep++;
      haptic();
      renderCookModeStep();
    } else {
      closeCookMode();
      showToast('Smaklig måltid! 🍽️');
    }
  });

  document.getElementById('cookModeClose')?.addEventListener('click', closeCookMode);

  // Swipe navigation in cook mode
  let touchStartX = 0;
  const cookOverlay = document.getElementById('cookModeOverlay');
  if (cookOverlay) {
    cookOverlay.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    cookOverlay.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 60) {
        if (diff > 0 && cookModeStep > 0) { cookModeStep--; haptic(); renderCookModeStep(); }
        else if (diff < 0) {
          const steps = cookModeRecipe?.steps || [];
          if (cookModeStep < steps.length - 1) { cookModeStep++; haptic(); renderCookModeStep(); }
        }
      }
    }, { passive: true });
  }

  // Timer
  document.getElementById('cookModeTimerBtn')?.addEventListener('click', () => {
    const display = document.getElementById('cookModeTimerDisplay');
    if (cookModeTimer) {
      clearInterval(cookModeTimer);
      cookModeTimer = null;
      cookModeSeconds = 0;
      if (display) { display.hidden = true; display.textContent = '00:00'; }
      document.getElementById('cookModeTimerBtn').textContent = '⏱ Starta timer';
    } else {
      cookModeSeconds = 0;
      if (display) display.hidden = false;
      document.getElementById('cookModeTimerBtn').textContent = '⏹ Stoppa timer';
      cookModeTimer = setInterval(() => {
        cookModeSeconds++;
        const m = String(Math.floor(cookModeSeconds / 60)).padStart(2, '0');
        const s = String(cookModeSeconds % 60).padStart(2, '0');
        if (display) display.textContent = `${m}:${s}`;
      }, 1000);
    }
  });

  function closeCookMode() {
    const overlayEl = document.getElementById('cookModeOverlay');
    if (overlayEl) overlayEl.hidden = true;
    document.body.style.overflow = '';
    cookModeRecipe = null;
    if (cookModeTimer) { clearInterval(cookModeTimer); cookModeTimer = null; }
    releaseWakeLock();
  }

  async function requestWakeLock() {
    try {
      if ('wakeLock' in navigator) {
        wakeLock = await navigator.wakeLock.request('screen');
      }
    } catch (e) { /* Wake Lock not available */ }
  }

  function releaseWakeLock() {
    if (wakeLock) {
      wakeLock.release().catch(() => {});
      wakeLock = null;
    }
  }

  // ─── Armin rekommenderar ───
  const arminPicks = [
    {
      badge: '🔥 Veckans val',
      name: 'Ćevapi med kajmak',
      desc: 'Armins barndomsrätt. Om du inte har provat kajmak så har du inte levt. Sorry, jag gör inte reglerna.',
      ings: ['köttfärs', 'lök', 'vitlök', 'kajmak', 'pitabröd'],
    },
    {
      badge: '⚡ Snabbast i stan',
      name: 'Pasta aglio e olio',
      desc: 'Tre ingredienser, tio minuter, noll ursäkter. Den ultimata "jag-orkade-inte-handla"-middagen.',
      ings: ['pasta', 'vitlök', 'olivolja', 'chili', 'persilja'],
    },
    {
      badge: '🥇 Klassiker',
      name: 'Köttbullar med gräddsås',
      desc: 'Sveriges nationalrätt. Fast bättre än IKEAs, för den här har kärlek i receptet. Och vitlök.',
      ings: ['köttfärs', 'lök', 'grädde', 'potatis', 'lingon'],
    },
    {
      badge: '🌶️ För de modiga',
      name: 'Kimchi jjigae',
      desc: 'Koreansk comfort food som biter tillbaka. Perfekt för dagar när du vill att maten ska ha mer personlighet än du.',
      ings: ['kimchi', 'tofu', 'lök', 'vitlök', 'ris'],
    },
    {
      badge: '🌿 Grön favorit',
      name: 'Falafel med tabbouleh',
      desc: 'Vegetariskt men ingen klagar. Inte ens köttätarna. Testat och verifierat av Armin själv.',
      ings: ['kikärtor', 'lök', 'vitlök', 'koriander', 'pitabröd'],
    },
    {
      badge: '🍝 Italiensk dröm',
      name: 'Risotto ai funghi',
      desc: 'Långsamt, meditativt, och totalt värt armträningen. Rör. Rör. Rör lite till.',
      ings: ['ris', 'svamp', 'lök', 'vitlök', 'parmesan'],
    },
    {
      badge: '🌮 Fredagsfavorit',
      name: 'Tacos al pastor',
      desc: 'Fredagsmys utan halvfabrikat. Ja, det kräver lite mer — men din familj förtjänar det.',
      ings: ['tortilla', 'fläskfilé', 'ananas', 'lök', 'koriander'],
    },
    {
      badge: '🥗 Hälsosamt (typ)',
      name: 'Buddha bowl',
      desc: 'Ser hälsosamt ut på Instagram. Smakar faktiskt bra på riktigt. Win-win.',
      ings: ['quinoa', 'avokado', 'kikärtor', 'spenat', 'tomat'],
    },
    {
      badge: '🍜 Asiatisk tröst',
      name: 'Tonkotsu ramen',
      desc: 'Japansk penicillin. Botar allt utom dålig smak i musik.',
      ings: ['nudlar', 'ägg', 'soja', 'vitlök', 'ingefära'],
    },
    {
      badge: '🔥 Balkanskt arv',
      name: 'Burek',
      desc: 'Om du inte har ätit burek med yoghurt har du missat livets mening. Ingen diskussion.',
      ings: ['filodeg', 'köttfärs', 'lök', 'ägg', 'yoghurt'],
    },
    {
      badge: '🧈 Comfort food',
      name: 'Mac & cheese',
      desc: 'Vuxna äter också barnmat. Vi bara kallar det comfort food för att det ska låta fint.',
      ings: ['pasta', 'cheddar', 'mjölk', 'smör', 'ströbröd'],
    },
    {
      badge: '🥘 Helgprojekt',
      name: 'Tagine med kyckling',
      desc: 'Marocko i en gryta. Sätter du på den kl 14 är du en hjälte till middag.',
      ings: ['kyckling', 'morötter', 'lök', 'citron', 'oliver'],
    },
    {
      badge: '🍣 Imponera-level',
      name: 'Sushi bowls',
      desc: 'All smak från sushi men utan origami-kunskaperna. Du behöver inte kunna rulla.',
      ings: ['ris', 'lax', 'avokado', 'gurka', 'soja'],
    },
    {
      badge: '🌿 Helt veganskt',
      name: 'Dal tadka',
      desc: 'Indisk linssoppa som bevisar att kött är överkurs. Linser + kryddor = magi.',
      ings: ['linser', 'tomat', 'lök', 'vitlök', 'ingefära'],
    },
    {
      badge: '⏰ 15-minutare',
      name: 'Quesadillas',
      desc: 'När du har 15 minuter och noll ambition. Ost fixar allt.',
      ings: ['tortilla', 'ost', 'kyckling', 'paprika', 'gräddfil'],
    },
    {
      badge: '🇬🇷 Medelhavsdröm',
      name: 'Grekisk sallad med halloumi',
      desc: 'Grilla halloumin. Släng på tomat och gurka. Känn dig som en gudinna.',
      ings: ['halloumi', 'tomat', 'gurka', 'lök', 'olivolja'],
    },
    {
      badge: '🥟 Handgjort',
      name: 'Gyoza',
      desc: 'Terapi i köket. Varje veckning är ett steg mot inre frid. Eller bara god mat.',
      ings: ['köttfärs', 'kål', 'vitlök', 'ingefära', 'soja'],
    },
    {
      badge: '🌶️ Mexikansk klassiker',
      name: 'Enchiladas',
      desc: 'Tortilla + fyllning + sås + ost = problemlösning på hög nivå.',
      ings: ['tortilla', 'kyckling', 'ost', 'tomat', 'grädde'],
    },
    {
      badge: '🍲 Vintervärme',
      name: 'Tom kha gai',
      desc: 'Thailändsk kokossoppa som gör vintern uthärdlig. Tack, Thailand.',
      ings: ['kyckling', 'kokosmjölk', 'galangal', 'lime', 'citrongräs'],
    },
    {
      badge: '🥩 Steakhouse hemma',
      name: 'Grillad entrecôte',
      desc: 'Stek. Smör. Vitlök. Rosmarin. Mer behövs inte. Sluta övertänka.',
      ings: ['entrecôte', 'smör', 'vitlök', 'rosmarin', 'potatis'],
    },
  ];

  function getWeeklyPicks(allPicks, count = 5) {
    const weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
    const start = (weekNum * count) % allPicks.length;
    const picks = [];
    for (let i = 0; i < count; i++) {
      picks.push(allPicks[(start + i) % allPicks.length]);
    }
    return picks;
  }

  function renderArminPicks() {
    const container = document.getElementById('arminPicks');
    if (!container) return;
    container.innerHTML = getWeeklyPicks(arminPicks).map(p => `
      <div class="armin-pick-card" data-ings='${JSON.stringify(p.ings)}'>
        <span class="armin-pick-badge">${p.badge}</span>
        <div class="armin-pick-name">${esc(p.name)}</div>
        <div class="armin-pick-desc">${esc(p.desc)}</div>
        <div class="armin-pick-ings">
          ${p.ings.map(i => `<span class="armin-pick-ing">${esc(i)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  document.getElementById('arminPicks')?.addEventListener('click', e => {
    const card = e.target.closest('.armin-pick-card');
    if (!card) return;
    haptic();
    const ings = JSON.parse(card.dataset.ings);
    ingredients = [];
    ings.forEach(ing => { if (!ingredients.includes(ing)) ingredients.push(ing); });
    switchView('search');
    render();
    ingInput.focus();
  });

  // ─── World Cuisine Catalog — with Balkans split ───
  const worldCuisines = [
    { flag: '🇸🇪', country: 'Sverige', dishes: [
      { name: 'Köttbullar med gräddsås', ings: ['köttfärs', 'lök', 'grädde', 'potatis', 'lingon'] },
      { name: 'Janssons frestelse', ings: ['potatis', 'lök', 'ansjovis', 'grädde', 'ströbröd'] },
      { name: 'Toast Skagen', ings: ['räkor', 'majonnäs', 'dill', 'citron', 'bröd'] },
      { name: 'Gravlax', ings: ['lax', 'dill', 'socker', 'salt', 'citron'] },
    ]},
    { flag: '🇮🇹', country: 'Italien', dishes: [
      { name: 'Pasta alla carbonara', ings: ['pasta', 'ägg', 'guanciale', 'pecorino', 'svartpeppar'] },
      { name: 'Risotto ai funghi porcini', ings: ['ris', 'svamp', 'lök', 'vitlök', 'parmesan'] },
      { name: 'Ossobuco alla milanese', ings: ['kalvlägg', 'tomat', 'lök', 'vitlök', 'morot'] },
      { name: 'Bruschetta al pomodoro', ings: ['bröd', 'tomat', 'vitlök', 'basilika', 'olivolja'] },
    ]},
    { flag: '🇧🇦', country: 'Bosnien & Hercegovina', dishes: [
      { name: 'Ćevapi', ings: ['köttfärs', 'lök', 'vitlök', 'pitabröd', 'paprika'] },
      { name: 'Burek', ings: ['filodeg', 'köttfärs', 'lök', 'ägg', 'yoghurt'] },
      { name: 'Begova čorba', ings: ['kyckling', 'okra', 'morot', 'grädde', 'citron'] },
      { name: 'Dolma', ings: ['paprika', 'köttfärs', 'ris', 'tomat', 'lök'] },
    ]},
    { flag: '🇷🇸', country: 'Serbien', dishes: [
      { name: 'Pljeskavica', ings: ['köttfärs', 'lök', 'paprika', 'vitlök', 'pitabröd'] },
      { name: 'Sarma', ings: ['kål', 'köttfärs', 'ris', 'lök', 'paprika'] },
      { name: 'Ćevapčići', ings: ['köttfärs', 'lök', 'vitlök', 'kajmak', 'bröd'] },
      { name: 'Ajvar-grillad kyckling', ings: ['kyckling', 'paprika', 'aubergine', 'vitlök', 'olivolja'] },
    ]},
    { flag: '🇬🇷', country: 'Grekland', dishes: [
      { name: 'Moussaka', ings: ['aubergine', 'köttfärs', 'tomat', 'ost', 'potatis'] },
      { name: 'Souvlaki', ings: ['kyckling', 'citron', 'vitlök', 'pitabröd', 'yoghurt'] },
      { name: 'Tzatziki', ings: ['yoghurt', 'gurka', 'vitlök', 'dill', 'citron'] },
      { name: 'Spanakopita', ings: ['spenat', 'fetaost', 'filodeg', 'lök', 'ägg'] },
    ]},
    { flag: '🇹🇷', country: 'Turkiet', dishes: [
      { name: 'Adana kebab', ings: ['lammfärs', 'paprika', 'lök', 'vitlök', 'tomat'] },
      { name: 'Lahmacun', ings: ['köttfärs', 'tomat', 'lök', 'paprika', 'persilja'] },
      { name: 'Menemen', ings: ['ägg', 'tomat', 'paprika', 'lök', 'vitlök'] },
      { name: 'Iskender kebab', ings: ['lamm', 'pitabröd', 'tomat', 'yoghurt', 'smör'] },
    ]},
    { flag: '🇱🇧', country: 'Libanon', dishes: [
      { name: 'Falafel', ings: ['kikärtor', 'lök', 'vitlök', 'koriander', 'pitabröd'] },
      { name: 'Shawarma', ings: ['kyckling', 'vitlök', 'yoghurt', 'pitabröd', 'tomat'] },
      { name: 'Tabbouleh', ings: ['bulgur', 'persilja', 'tomat', 'lök', 'citron'] },
      { name: 'Fattoush', ings: ['sallad', 'tomat', 'gurka', 'pitabröd', 'citron'] },
    ]},
    { flag: '🇹🇭', country: 'Thailand', dishes: [
      { name: 'Pad thai', ings: ['risnudlar', 'ägg', 'tofu', 'lime', 'jordnötter'] },
      { name: 'Gaeng khiao wan', ings: ['kyckling', 'kokosmjölk', 'curry', 'paprika', 'ris'] },
      { name: 'Tom kha gai', ings: ['kyckling', 'kokosmjölk', 'galangal', 'lime', 'citrongräs'] },
      { name: 'Som tam', ings: ['papaya', 'lime', 'jordnötter', 'chili', 'fisksås'] },
    ]},
    { flag: '🇯🇵', country: 'Japan', dishes: [
      { name: 'Tonkotsu ramen', ings: ['nudlar', 'ägg', 'soja', 'vitlök', 'ingefära'] },
      { name: 'Teriyaki-lax', ings: ['lax', 'soja', 'ris', 'sesam', 'ingefära'] },
      { name: 'Gyoza', ings: ['köttfärs', 'kål', 'vitlök', 'ingefära', 'soja'] },
      { name: 'Katsu curry', ings: ['kyckling', 'panko', 'ris', 'curry', 'lök'] },
    ]},
    { flag: '🇰🇷', country: 'Korea', dishes: [
      { name: 'Bibimbap', ings: ['ris', 'ägg', 'morötter', 'spenat', 'köttfärs'] },
      { name: 'Bulgogi', ings: ['nötfärs', 'soja', 'sesam', 'vitlök', 'päron'] },
      { name: 'Kimchi jjigae', ings: ['kimchi', 'tofu', 'lök', 'vitlök', 'ris'] },
      { name: 'Japchae', ings: ['glasnudlar', 'morötter', 'spenat', 'soja', 'sesam'] },
    ]},
    { flag: '🇨🇳', country: 'Kina', dishes: [
      { name: 'Gong bao ji ding', ings: ['kyckling', 'jordnötter', 'paprika', 'soja', 'vitlök'] },
      { name: 'Chow mein', ings: ['nudlar', 'kyckling', 'paprika', 'morötter', 'soja'] },
      { name: 'Mapo doufu', ings: ['tofu', 'köttfärs', 'vitlök', 'ingefära', 'soja'] },
      { name: 'Dan dan-nudlar', ings: ['nudlar', 'köttfärs', 'soja', 'sesam', 'chili'] },
    ]},
    { flag: '🇮🇳', country: 'Indien', dishes: [
      { name: 'Murgh makhani', ings: ['kyckling', 'tomat', 'grädde', 'vitlök', 'ris'] },
      { name: 'Dal tadka', ings: ['linser', 'tomat', 'lök', 'vitlök', 'ingefära'] },
      { name: 'Palak paneer', ings: ['spenat', 'paneer', 'lök', 'vitlök', 'grädde'] },
      { name: 'Aloo gobi', ings: ['potatis', 'blomkål', 'lök', 'tomat', 'gurkmeja'] },
    ]},
    { flag: '🇲🇽', country: 'Mexiko', dishes: [
      { name: 'Tacos al pastor', ings: ['tortilla', 'fläskfilé', 'ananas', 'lök', 'koriander'] },
      { name: 'Burrito bowl', ings: ['ris', 'bönor', 'avokado', 'tomat', 'ost'] },
      { name: 'Enchiladas verdes', ings: ['tortilla', 'kyckling', 'ost', 'tomatillo', 'grädde'] },
      { name: 'Chilaquiles', ings: ['tortilla', 'tomat', 'ost', 'ägg', 'gräddfil'] },
    ]},
    { flag: '🇫🇷', country: 'Frankrike', dishes: [
      { name: 'Ratatouille', ings: ['aubergine', 'zucchini', 'paprika', 'tomat', 'vitlök'] },
      { name: 'Coq au vin', ings: ['kyckling', 'bacon', 'svamp', 'lök', 'morötter'] },
      { name: 'Croque monsieur', ings: ['bröd', 'skinka', 'gruyère', 'smör', 'béchamel'] },
      { name: 'Bouillabaisse', ings: ['fisk', 'räkor', 'tomat', 'vitlök', 'saffran'] },
    ]},
    { flag: '🇪🇸', country: 'Spanien', dishes: [
      { name: 'Paella valenciana', ings: ['ris', 'kyckling', 'räkor', 'paprika', 'saffran'] },
      { name: 'Patatas bravas', ings: ['potatis', 'tomat', 'vitlök', 'paprika', 'majonnäs'] },
      { name: 'Gazpacho andaluz', ings: ['tomat', 'gurka', 'paprika', 'vitlök', 'olivolja'] },
      { name: 'Tortilla española', ings: ['ägg', 'potatis', 'lök', 'olivolja', 'salt'] },
    ]},
    { flag: '🇲🇦', country: 'Marocko', dishes: [
      { name: 'Tagine bil djaj', ings: ['kyckling', 'morötter', 'lök', 'citron', 'oliver'] },
      { name: 'Couscous-sallad', ings: ['couscous', 'morötter', 'paprika', 'lök', 'kikärtor'] },
      { name: 'Harira', ings: ['linser', 'tomat', 'lök', 'koriander', 'kikärtor'] },
      { name: 'Shakshuka', ings: ['ägg', 'tomat', 'paprika', 'lök', 'vitlök'] },
    ]},
    { flag: '🇺🇸', country: 'USA', dishes: [
      { name: 'Mac & cheese', ings: ['pasta', 'cheddar', 'mjölk', 'smör', 'ströbröd'] },
      { name: 'Pulled pork', ings: ['fläskkarré', 'lök', 'vitlök', 'BBQ-sås', 'bröd'] },
      { name: 'Clam chowder', ings: ['musslor', 'potatis', 'bacon', 'lök', 'grädde'] },
      { name: 'Jambalaya', ings: ['ris', 'räkor', 'korv', 'paprika', 'lök'] },
    ]},
    { flag: '🇻🇳', country: 'Vietnam', dishes: [
      { name: 'Phở bò', ings: ['risnudlar', 'nötfärs', 'lök', 'ingefära', 'koriander'] },
      { name: 'Bánh mì', ings: ['baguette', 'fläsk', 'morötter', 'gurka', 'koriander'] },
      { name: 'Bún chả', ings: ['fläsk', 'risnudlar', 'sallad', 'lime', 'fisksås'] },
    ]},
    { flag: '🇵🇪', country: 'Peru', dishes: [
      { name: 'Ceviche', ings: ['fisk', 'lime', 'lök', 'koriander', 'chili'] },
      { name: 'Lomo saltado', ings: ['nötfärs', 'tomat', 'lök', 'soja', 'potatis'] },
      { name: 'Ají de gallina', ings: ['kyckling', 'bröd', 'ost', 'nötter', 'ris'] },
    ]},
  ];

  let catalogFilter = 'all';

  function renderWorldCuisines() {
    const filtered = catalogFilter === 'all'
      ? worldCuisines
      : worldCuisines.filter(c => c.country === catalogFilter);

    if (filterTabs) {
      filterTabs.innerHTML = `
        <button class="filter-tab${catalogFilter === 'all' ? ' active' : ''}" data-filter="all">Alla</button>
        ${worldCuisines.map(c => `
          <button class="filter-tab${catalogFilter === c.country ? ' active' : ''}" data-filter="${esc(c.country)}">${c.flag} ${esc(c.country)}</button>
        `).join('')}
      `;
    }

    worldGrid.innerHTML = filtered.map(c => `
      <div class="world-card">
        <div class="world-card-top">
          <span class="world-flag">${c.flag}</span>
          <span class="world-country">${esc(c.country)}</span>
        </div>
        <div class="world-dishes">
          ${c.dishes.map(d => `
            <button class="dish-btn" data-ings='${JSON.stringify(d.ings)}'>${esc(d.name)}</button>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  if (filterTabs) {
    filterTabs.addEventListener('click', e => {
      const tab = e.target.closest('.filter-tab');
      if (!tab) return;
      catalogFilter = tab.dataset.filter;
      renderWorldCuisines();
    });
  }

  worldGrid.addEventListener('click', e => {
    const dish = e.target.closest('.dish-btn');
    if (!dish) return;
    haptic();
    const ings = JSON.parse(dish.dataset.ings);
    ingredients = [];
    ings.forEach(ing => { if (!ingredients.includes(ing)) ingredients.push(ing); });
    switchView('search');
    render();
    ingInput.focus();
  });

  document.getElementById('surpriseBtn')?.addEventListener('click', () => {
    haptic('medium');
    const c = worldCuisines[Math.floor(Math.random() * worldCuisines.length)];
    const d = c.dishes[Math.floor(Math.random() * c.dishes.length)];
    ingredients = [];
    d.ings.forEach(ing => { if (!ingredients.includes(ing)) ingredients.push(ing); });
    switchView('search');
    render();
    showToast(`${c.flag} ${d.name}`);
    ingInput.focus();
  });

  // ─── Fridge Photo to Recipe ───
  if (fridgeBtn && fridgeInput) {
    fridgeBtn.addEventListener('click', () => fridgeInput.click());

    fridgeInput.addEventListener('change', async () => {
      const file = fridgeInput.files[0];
      if (!file) return;

      const url = URL.createObjectURL(file);
      fridgeImg.src = url;
      fridgePreview.style.display = 'block';
      fridgeScanning.style.display = 'flex';
      fridgeBtn.parentElement.querySelector('.fridge-btn').style.display = 'none';

      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result.split(',')[1];
        const mediaType = file.type || 'image/jpeg';

        try {
          const res = await fetch('/api/recognize-ingredients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: base64, mediaType })
          });

          if (!res.ok) throw new Error('Kunde inte analysera bilden');

          const data = await res.json();
          const text = (data.content || []).map(b => b.text || '').join('');
          const clean = text.replace(/```json|```/g, '').trim();

          let found;
          try { found = JSON.parse(clean); }
          catch { throw new Error('Kunde inte tolka svaret'); }

          if (Array.isArray(found) && found.length > 0) {
            ingredients = [];
            for (let k = 0; k < found.length; k++) {
              const ing = found[k].trim().toLowerCase();
              if (ing && !ingredients.includes(ing)) ingredients.push(ing);
            }
            render();
            showToast(`Vi hittade ${ingredients.length} råvaror`);

            if (ingredients.length > 0) {
              setTimeout(() => findRecipes(), 600);
            }
          } else {
            showToast('Hittade inga ingredienser');
          }
        } catch (e) {
          showToast(e.message || 'Något gick fel');
          console.error('Fridge scan error:', e);
        }

        fridgeScanning.style.display = 'none';
      };
      reader.readAsDataURL(file);
    });

    if (fridgeRemove) {
      fridgeRemove.addEventListener('click', () => {
        fridgePreview.style.display = 'none';
        fridgeInput.value = '';
        fridgeBtn.parentElement.querySelector('.fridge-btn').style.display = 'flex';
      });
    }
  }

  // ─── Tilt effect on recipe cards ───
  function initTilt(container) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    container.querySelectorAll('.recipe-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 3.5}deg) rotateX(${-y * 3.5}deg) translateY(-3px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(() => { card.style.transition = ''; }, 400);
      });
    });
  }

  // ─── Scroll animations via IntersectionObserver ───
  function initScrollAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger children if it's a container
          const delay = entry.target.dataset.delay || '0';
          entry.target.style.transitionDelay = delay + 'ms';
          entry.target.classList.add('scroll-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    const selectors = '.world-card, .fav-card, .list-group, .armin-pick-card, .quick-category-label, .armin-header, .section-divider, .filter-tab';
    document.querySelectorAll(selectors).forEach((el, i) => {
      el.classList.add('scroll-animate');
      el.dataset.delay = String((i % 6) * 60);
      observer.observe(el);
    });
  }

  // ─── Service Worker ───
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  // ─── Holiday Recipes Banner ───
  const holidays = [
    { name: 'Jul', emoji: '🎄', month: 12, dayStart: 1, dayEnd: 25, query: 'Klassisk svensk julmat med köttbullar, janssons och julskinka', desc: 'Prova klassisk julmat!' },
    { name: 'Påsk', emoji: '🐣', month: 4, dayStart: 1, dayEnd: 20, query: 'Traditionell svensk påskmat med ägg, sill och lax', desc: 'Dags för påskmat!' },
    { name: 'Midsommar', emoji: '🌸', month: 6, dayStart: 1, dayEnd: 25, query: 'Svensk midsommarmat med sill, jordgubbar och nubbe', desc: 'Fira midsommar med god mat!' },
    { name: 'Kräftskiva', emoji: '🦞', month: 8, dayStart: 1, dayEnd: 31, query: 'Kräftskiva med kräftor, västerbottenost och bröd', desc: 'Dags för kräftskiva!' },
    { name: 'Alla hjärtans dag', emoji: '❤️', month: 2, dayStart: 1, dayEnd: 14, query: 'Romantisk middag för två med fint kött eller fisk', desc: 'Laga romantisk middag!' },
  ];

  function showHolidayBanner() {
    const banner = document.getElementById('holidayBanner');
    if (!banner) return;
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const holiday = holidays.find(h => h.month === month && day >= h.dayStart && day <= h.dayEnd);
    if (!holiday) { banner.hidden = true; return; }

    banner.hidden = false;
    banner.innerHTML = `
      <span class="holiday-emoji">${holiday.emoji}</span>
      <div class="holiday-text">
        <div class="holiday-title">${holiday.name} närmar sig!</div>
        <div class="holiday-desc">${holiday.desc}</div>
      </div>
    `;
    banner.onclick = () => {
      // Switch to freetext mode and fill query
      searchMode = 'freetext';
      if (searchModeTabs) searchModeTabs.querySelectorAll('.search-mode-tab').forEach(t => t.classList.toggle('active', t.dataset.mode === 'freetext'));
      if (ingredientMode) ingredientMode.hidden = true;
      if (freetextMode) freetextMode.hidden = false;
      if (freetextInput) { freetextInput.value = holiday.query; searchBtn.disabled = false; }
      haptic('medium');
    };
  }

  // ─── Init ───
  updateListBadge();
  updateFavBadge();
  renderQuickPicks();
  renderHistory();
  showOnboarding();
  showHolidayBanner();

  // Inject logo into hero
  const heroLogo = document.getElementById('heroLogo');
  if (heroLogo) heroLogo.innerHTML = appLogoSVG(52);

  // Language selector
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', () => {
      currentLang = langSelect.value;
      try { localStorage.setItem('app_language', currentLang); } catch {}
      translatePage();
      renderQuickPicks();
      renderHistory();
      updateFavBadge();
    });
  }
  translatePage();

  // Rotate hero subtitle
  const heroSubEl = document.querySelector('.hero-sub');
  if (heroSubEl) heroSubEl.textContent = pick(heroSubtitles[currentLang] || heroSubtitles.sv);

  // Rotate footer texts
  const ftTagline = document.querySelector('.footer-tagline:not(.footer-irony)');
  const ftIrony = document.querySelector('.footer-irony');
  if (ftTagline) ftTagline.textContent = pick(footerTaglines[currentLang] || footerTaglines.sv);
  if (ftIrony) ftIrony.textContent = pick(footerIronies[currentLang] || footerIronies.sv);

  // Handle initial hash
  const initView = location.hash.replace('#', '') || 'search';
  if (views[initView]) switchView(initView);
  ingInput.focus();

  // Share app button
  document.getElementById('shareAppBtn')?.addEventListener('click', async () => {
    haptic('medium');
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Vad ska vi laga?', text: 'Kolla in den här receptappen — AI som fixar middagen åt dig!', url: window.location.origin });
        return;
      }
    } catch (e) { if (e.name === 'AbortError') return; }
    try {
      await navigator.clipboard.writeText(window.location.origin);
      showToast('copied');
    } catch { showToast('error'); }
  });

  // Show changelog if new version
  const lastSeenVersion = loadStorage('changelog_seen', '0');
  if (changelog.length && lastSeenVersion !== changelog[0].version) {
    setTimeout(() => showChangelog(), 1500);
  }

  // Scroll animations after initial render
  setTimeout(initScrollAnimations, 300);
})();
