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
      yourIngredients: 'Dina råvaror', scanFood: 'Fota dina råvaror',
      orManual: 'eller skriv manuellt', inputHint: 'Enter lägger till. Komma separerar. Lägg till minst 2-3 ingredienser för bäst resultat.',
      whatDoYouHave: 'Vad har du hemma?', howPicky: 'Hur kräsen är du?',
      portions: 'Portioner', showRecipes: 'Visa recept',
      savedRecipes: 'Sparade recept', noSavedRecipes: 'Din receptsamling väntar',
      noSavedDesc: 'Hitta ett recept du gillar och tryck på hjärtat. Nästa gång slipper du fundera — dina favoriter finns här, redo att lagas.',
      findRecipes: 'Hitta ditt första favoritrecept →', shoppingList: 'Inköpslista',
      clear: 'Rensa', shareList: 'Dela lista 📤',
      navSearch: 'Sök', navInspiration: 'Inspiration', navFavorites: 'Favoriter', navList: 'Lista',
      vegetariskt: 'Vegetariskt', veganskt: 'Veganskt', glutenfritt: 'Glutenfritt',
      snabbt: 'Under 30 min', laktosfritt: 'Laktosfritt', nötfritt: 'Nötfritt',
      barnvänligt: 'Barnvänligt', budgetvänligt: 'Budgetvänligt',
      ingredients: 'Ingredienser', steps: 'Gör så här',
      arminTitle: 'Amko rekommenderar', worldKitchens: 'Världens kök',
      surpriseMe: '🎲 Överraska mig', inspiration: 'Inspiration',
      // Sökläge
      modeIngredients: '🥕 Ingredienser', modeFreetext: '💬 Berätta fritt',
      freetextLabel: 'Berätta vad du är sugen på',
      freetextHint: 'Skriv fritt — Amko fattar vad du menar.',
      searchBtnHint: 'Lägg till minst en ingrediens för att söka',
      // Inspiration
      inspirationTitle: 'Inspiration',
      inspirationSub: 'Vet inte vad du vill laga? Bläddra bland Amkos favoriter och världens kök. Tryck, och receptet genereras direkt.',
      arminSub: 'Handplockade favoriter. Ingen jäv, bara bra mat. (Okej, lite jäv.)',
      // Inköpslista
      listEmpty: 'Handla smartare, inte mer',
      listEmptyDesc: 'Välj ett recept, tryck "Lägg till i inköpslistan" — och allt du behöver handla samlas här. Dela listan med dig själv eller familjen.',
      listEmptyCta: 'Hitta recept och bygg din lista →',
      // Auth
      authTitle: 'Logga in eller skapa konto',
      authDesc: 'Logga in för att spara dina favoritrecept och synka dem överallt. Välj ditt sätt.',
      authGoogle: 'Fortsätt med Google', authApple: 'Fortsätt med Apple',
      authOrEmail: 'eller med e-post', authLogin: 'Logga in',
      authNoAccount: 'Har inget konto?', authCreateHere: 'Skapa ett här',
      authPrivacy: 'Vi lagrar bara din e-postadress. Ingen spam, inga nyhetsbrev, bara recept.',
      authBenefitSync: 'Favoriter synkas på alla enheter',
      authBenefitShop: 'Skicka inköpslistan till din mejl',
      authBenefitReturn: 'Kom tillbaka till dina recept var som helst',
      authMyAccount: 'Mitt konto', authManage: 'Hantera konto',
      authMethod: 'Inloggningsmetod', authEmail: 'E-post',
      authSavedFavs: 'Sparade favoriter', authChangePassword: 'Ändra lösenord',
      authDeleteAccount: 'Radera konto', authSignOut: 'Logga ut',
      authCreateAccount: 'Skapa konto', authCreating: 'Skapar konto...',
      authLoggingIn: 'Loggar in...',
      // Onboarding
      onboardingTitle: 'Välkommen! Middagsstressen slutar här.',
      onboardingSub: 'Tre steg. Ingen kokskola krävs. Så här funkar det:',
      onboardingStep1Title: 'Berätta vad du har hemma',
      onboardingStep1Desc: 'Skriv in dina ingredienser eller fota kylskåpet — vi identifierar råvarorna. Ja, även den där ensamma paprikans i bakre hörnet.',
      onboardingStep2Title: 'Få 8 recept direkt',
      onboardingStep2Desc: 'Amko föreslår allt från "klart på 15 min" till "imponera på middagsgästerna". Du väljer ambitionsnivå.',
      onboardingStep3Title: 'Laga, spara, handla',
      onboardingStep3Desc: 'Följ receptet steg-för-steg i kokläge, spara favoriter, och skicka inköpslistan till dig själv. Resten sköter du.',
      onboardingCta: 'Okej, jag är hungrig — kör!',
      onboardingHint: 'Gratis att börja. Inget konto krävs. Över 2 400 recept skapade av matlagare som du.',
      // Toast
      toastCopied: 'Kopierat! Sprid receptkärleken.',
      toastListSent: 'Inköpslistan flyger iväg till din mejl ✈️',
      toastListAdded: 'In i korgen! Dags att handla snart.',
      toastEmptyList: 'Listan är tom — inget att skicka! Tomt som ditt kylskåp.',
      toastLoggedIn: 'Välkommen tillbaka, mästerkock!',
      toastLoggedOut: 'Hej då! Kylskåpet väntar på dig.',
      toastMagicSent: 'Kolla din mejl — vi har skickat en magisk länk',
      toastError: 'Oops! Något gick snett — men din hunger är fortfarande giltig.',
      toastListCleared: 'Inköpslistan rensad. Tabula rasa!',
      toastAlreadyInList: 'Den varan sitter redan i korgen!',
      toastCantShare: 'Delning strulade — berätta muntligt istället?',
      toastCantCopy: 'Kopiering misslyckades — gammal hederlig penna kanske?',
      toastShareNA: 'Dela funkar inte här — men kärleken till mat kan du sprida ändå',
      toastNoIngs: 'Hittade inga ingredienser — fotografera lite närmare?',
      toastBonAppetit: 'Smaklig måltid! Du har förtjänat det. 🍽️',
      toastFromCache: 'Amko mindes! Hämtat från senast.',
      toastAuthEmail: 'Ange e-post och lösenord',
      toastAuthShort: 'Lösenordet måste vara minst 6 tecken',
      toastAuthWrong: 'Fel e-post eller lösenord',
      toastAuthExists: 'Det finns redan ett konto med den e-posten',
      toastAuthConfirm: 'Kontrollera din e-post för verifieringslänk',
      toastAuthRate: 'För många försök — vänta en stund',
      // Footer
      footerPanic: '🍝 Drivs av panik kl 17:00',
      footerAI: '🤖 AI som faktiskt lagar mat (nåja)',
      footerHelp: '❓ Hur funkar det?',
      footerShare: 'Dela med en vän 📤',
      // Kokläge
      cookModePrev: '← Föregående',
      cookModeNext: 'Nästa →',
      cookModeTimer: '⏱ Starta timer',
      // Quick categories
      quickMeat: '🥩 Sugen på kött', quickFish: '🐟 Fisk & skaldjur',
      quickVeg: '🥬 Grönsakslådan', quickBasics: '🧀 Basics',
      // Recept
      recipeDrinks: 'Dryckestips', recipeNutrition: 'Näring per portion',
      recipeSubstitutions: 'Alternativ', recipeFav: 'Spara favorit',
      recipeUnfav: 'Ta bort favorit', recipeCopy: 'Kopiera', recipeShare: 'Dela',
      recipePrint: 'Skriv ut', recipeAddToList: '🛒 Lägg till i inköpslistan',
      recipeCookMode: '👨‍🍳 Starta kokläge',
      // Historik
      historyTitle: 'Sökhistorik', historyClear: 'Rensa',
      // Favoriter
      favRecipeCount: 'recept sparade',
      filterAll: 'Alla',
      // Recipe results
      recipesFound: 'Amko hittade {count} recept åt dig',
      recipesHint: 'Tryck på ett recept för att se allt',
      sortLabel: 'Sortera:',
      sortDifficulty: 'Svårighet',
      sortTime: 'Tid',
      sortName: 'Namn',
      ingredientCount: 'ingredienser',
      seeRecipe: 'Visa recept →',
      // Recipe modal
      copyIngList: 'Kopiera ingredienslista',
      rateRecipe: 'Betygsätt receptet',
      missingLabel: 'Saknas:',
      missingSomething: 'Saknar du något?',
      // Tips banner
      tipsBefore: 'Tips innan du lagar',
      buyAlso: 'Köp även:',
      // Shopping list
      listRemaining: '{unchecked} av {total} kvar',
      otherItems: 'Övrigt',
      removeItem: 'Ta bort',
      clearAllIngs: 'Rensa alla',
      // Error messages
      errorTimeout: 'Amko somnade visst till — peta på hen och försök igen.',
      retryBtn: 'Försök igen',
      errorNewVersion: 'Ny version! Vi har blivit ännu bättre (tror vi) — ladda om sidan.',
      errorParseError: 'Amko tappade tråden mitt i receptet — ge hen en chans till.',
      errorServer: 'Servern tar en fika — försök igen om en liten stund.',
      errorRateLimit: 'Lugna dig, mästerkock! Vänta en minut så hinner Amko ifatt.',
      errorNoRecipes: 'Amko kliade sig i huvudet och hittade inget — prova andra ingredienser?',
      errorNetwork: 'Inget internet? Prova att öppna kylskåpet och improvisera.',
      errorReload: 'Något krånglade — ladda om sidan så fixar vi det.',
      errorApiError: 'Tekniskt strul — men din hunger är fortfarande giltig.',
      searchingText: 'Söker...',
      retryingText: 'Försöker igen ({attempt}/{total})',
      historyCleared: 'Sökhistorik rensad',
      // Auth form
      authHasAccount: 'Har redan ett konto?',
      authLoginHere: 'Logga in här',
      authDeleteConfirm: 'Är du säker på att du vill radera ditt konto? Alla sparade favoriter försvinner permanent.',
      // Fridge scanning
      fridgeFound: 'Vi hittade {count} råvaror',
      fridgeAnalysisTimeout: 'Bildanalysen tog för lång tid — försök igen',
      fridgeAnalysisFail: 'Kunde inte analysera bilden',
      fridgeParseFail: 'Kunde inte tolka svaret',
      fridgeImageLoadTimeout: 'Bildladdning tog för lång tid',
      fridgeImageLoadFail: 'Kunde inte ladda bilden',
      // Cook mode
      cookModeStepOf: 'Steg {current} av {total}',
      cookModeDone: '✓ Klar!',
      cookModeStartTimer: '⏱ Starta timer',
      cookModeStopTimer: '⏹ Stoppa timer',
      // Rating
      ratingTopScore: '⭐ Toppen!',
      ratingScore: 'Betyg: {score}/5 stjärnor',
      // Share
      shareTitle: 'Inköpslista',
      shareAppText: 'Kolla in den här receptappen — AI som fixar middagen åt dig!',
      // Misc
      timeAgoNow: 'Nyss',
      timeAgoMin: 'min',
      timeAgoHour: 'tim',
      timeAgoDay: 'd',
      darkModeLight: 'Ljust läge',
      darkModeDark: 'Mörkt läge',
      recipeCountSingular: 'recept sparat',
      recipeCountPlural: 'recept sparade',
      changelogTitle: 'Nyheter',
      changelogClose: 'Uppfattat!',
      holidayApproaching: 'närmar sig!',
      portionLabel: 'portioner',
      addToShopBtn: 'Lägg till i inköpslistan',
      drinkPairingTitle: 'Amkos dryckestips',
      // Aria-labels
      ariaMyAccount: 'Mitt konto', ariaSelectLang: 'Välj språk', ariaToggleTheme: 'Växla tema',
      ariaOnboarding: 'Välkomstguide', ariaScanFood: 'Fota dina råvaror', ariaRemove: 'Ta bort',
      ariaAdd: 'Lägg till', ariaDecrease: 'Minska portioner', ariaIncrease: 'Öka portioner',
      ariaInspiration: 'Inspiration', ariaSavedRecipes: 'Sparade recept',
      ariaShoppingList: 'Inköpslista', ariaMainNav: 'Huvudnavigation',
      ariaSearchRecipes: 'Sök recept', ariaFavorites: 'Favoriter',
      ariaRecipeDetails: 'Receptdetaljer', ariaLogin: 'Inloggning',
      ariaClose: 'Stäng', ariaRecipeResults: 'Receptresultat', ariaCloseResults: 'Stäng resultat',
      ariaCookMode: 'Kokläge', ariaCloseCookMode: 'Stäng kokläge',
      ariaPrevStep: 'Föregående steg', ariaNextStep: 'Nästa steg',
      ariaFridgeScanning: 'Identifierar råvaror',
      ariaFavSearch: 'Sök bland favoriter...',
      ariaManualListAdd: 'Lägg till vara i inköpslistan',
      offlineMessage: 'Du verkar vara offline. Kolla dina sparade favoriter medan du väntar på nätet!',
    },
    en: {
      heroEyebrow: "Tonight's eternal dilemma", heroTitle: 'What should we cook?',
      yourIngredients: 'Your ingredients', scanFood: 'Snap your ingredients',
      orManual: 'or type manually', inputHint: 'Enter to add. Comma separates.',
      whatDoYouHave: 'What do you have at home?', howPicky: 'How picky are you?',
      portions: 'Servings', showRecipes: 'Show recipes',
      savedRecipes: 'Saved recipes', noSavedRecipes: 'Your recipe collection awaits',
      noSavedDesc: 'Find a recipe you love and tap the heart. Next time, no more guessing — your favorites will be right here.',
      findRecipes: 'Find your first favorite →', shoppingList: 'Shopping list',
      clear: 'Clear', shareList: 'Share list 📤',
      navSearch: 'Search', navInspiration: 'Inspiration', navFavorites: 'Favorites', navList: 'List',
      vegetariskt: 'Vegetarian', veganskt: 'Vegan', glutenfritt: 'Gluten-free',
      snabbt: 'Under 30 min', laktosfritt: 'Lactose-free', nötfritt: 'Nut-free',
      barnvänligt: 'Kid-friendly', budgetvänligt: 'Budget-friendly',
      ingredients: 'Ingredients', steps: 'Instructions',
      arminTitle: 'Amko recommends', worldKitchens: 'World cuisines',
      surpriseMe: '🎲 Surprise me', inspiration: 'Inspiration',
      modeIngredients: '🥕 Ingredients', modeFreetext: '💬 Tell me freely',
      freetextLabel: 'Tell me what you\'re craving',
      freetextHint: 'Write freely — Amko gets it.',
      searchBtnHint: 'Add at least one ingredient to search',
      inspirationTitle: 'Inspiration',
      inspirationSub: 'Not sure what to cook? Browse Amko\'s picks and world cuisines. Tap any dish and get the recipe instantly.',
      arminSub: 'Hand-picked favorites. No bias, just good food. (Okay, some bias.)',
      listEmpty: 'Shop smarter, not more',
      listEmptyDesc: 'Pick a recipe, tap "Add to shopping list" — and everything you need is collected here. Share with yourself or the family.',
      listEmptyCta: 'Find recipes and build your list →',
      authTitle: 'Sign in or create account',
      authDesc: 'Sign in to save your favorite recipes and sync them everywhere.',
      authGoogle: 'Continue with Google', authApple: 'Continue with Apple',
      authOrEmail: 'or with email', authLogin: 'Sign in',
      authNoAccount: 'No account?', authCreateHere: 'Create one here',
      authPrivacy: 'We only store your email. No spam, no newsletters, just recipes.',
      authBenefitSync: 'Favorites sync across all devices',
      authBenefitShop: 'Send shopping list to your email',
      authBenefitReturn: 'Access your recipes from anywhere',
      authMyAccount: 'My account', authManage: 'Manage account',
      authMethod: 'Sign-in method', authEmail: 'Email',
      authSavedFavs: 'Saved favorites', authChangePassword: 'Change password',
      authDeleteAccount: 'Delete account', authSignOut: 'Sign out',
      authCreateAccount: 'Create account', authCreating: 'Creating account...',
      authLoggingIn: 'Signing in...',
      onboardingTitle: 'Welcome to What should we cook?',
      onboardingSub: 'Your AI-powered recipe helper. Here\'s how it works:',
      onboardingStep1Title: 'Add ingredients',
      onboardingStep1Desc: 'Type what you have at home, or snap your fridge — AI identifies the ingredients for you.',
      onboardingStep2Title: 'Get tailored recipes',
      onboardingStep2Desc: 'Amko suggests 4 recipes based on your ingredients, from quick weeknight meals to ambitious projects.',
      onboardingStep3Title: 'Save, cook & shop',
      onboardingStep3Desc: 'Save favorites, follow step-by-step in cook mode, and send the shopping list to your email.',
      onboardingCta: 'Let\'s go!',
      onboardingHint: 'Free to start. No account needed. Over 2,400 recipes created by cooks like you.',
      toastCopied: 'Copied! Share away.',
      toastListSent: 'Shopping list sent to your email ✈️',
      toastListAdded: 'Added! Time to shop soon.',
      toastEmptyList: 'List is empty — nothing to send!',
      toastLoggedIn: 'Welcome back!',
      toastLoggedOut: 'You\'re now signed out',
      toastMagicSent: 'Check your email — we sent a link',
      toastError: 'Something went wrong — try again in a moment',
      toastListCleared: 'Shopping list cleared',
      toastAlreadyInList: 'Ingredients already in the list',
      toastCantShare: 'Could not share',
      toastCantCopy: 'Could not copy',
      toastShareNA: 'Sharing not available',
      toastNoIngs: 'No ingredients found',
      toastBonAppetit: 'Bon appétit! 🍽️',
      toastFromCache: 'Loaded from cache',
      toastAuthEmail: 'Enter email and password',
      toastAuthShort: 'Password must be at least 6 characters',
      toastAuthWrong: 'Wrong email or password',
      toastAuthExists: 'An account with that email already exists',
      toastAuthConfirm: 'Check your email for the verification link',
      toastAuthRate: 'Too many attempts — wait a moment',
      footerPanic: '🍝 Powered by 5 PM panic',
      footerAI: '🤖 AI that actually cooks (sort of)',
      footerHelp: '❓ How does it work?',
      footerShare: 'Share with a friend 📤',
      cookModePrev: '← Previous',
      cookModeNext: 'Next →',
      cookModeTimer: '⏱ Start timer',
      quickMeat: '🥩 Craving meat', quickFish: '🐟 Fish & seafood',
      quickVeg: '🥬 Veggie drawer', quickBasics: '🧀 Basics',
      recipeDrinks: 'Drink pairing', recipeNutrition: 'Nutrition per serving',
      recipeSubstitutions: 'Substitutions', recipeFav: 'Save favorite',
      recipeUnfav: 'Remove favorite', recipeCopy: 'Copy', recipeShare: 'Share',
      recipePrint: 'Print', recipeAddToList: '🛒 Add to shopping list',
      recipeCookMode: '👨‍🍳 Start cook mode',
      historyTitle: 'Search history', historyClear: 'Clear',
      favRecipeCount: 'recipes saved',
      filterAll: 'All',
      recipesFound: 'Amko found {count} recipes for you',
      recipesHint: 'Tap a recipe to see everything',
      sortLabel: 'Sort:',
      sortDifficulty: 'Difficulty',
      sortTime: 'Time',
      sortName: 'Name',
      ingredientCount: 'ingredients',
      seeRecipe: 'See recipe →',
      copyIngList: 'Copy ingredient list',
      rateRecipe: 'Rate this recipe',
      missingLabel: 'Missing:',
      missingSomething: 'Missing something?',
      tipsBefore: 'Tips before cooking',
      buyAlso: 'Also buy:',
      listRemaining: '{unchecked} of {total} left',
      otherItems: 'Other',
      removeItem: 'Remove',
      clearAllIngs: 'Clear all',
      errorTimeout: 'Search took too long — try again.',
      retryBtn: 'Try again',
      errorNewVersion: 'New version available — reload to update',
      errorParseError: 'AI gave an incomplete response — try again.',
      errorServer: 'Server not responding — try again shortly.',
      errorRateLimit: 'Too many searches — wait a minute and try again.',
      errorNoRecipes: 'No recipes returned — try different ingredients.',
      errorNetwork: 'Network error — check your connection and try again.',
      errorReload: 'Something went wrong — try reloading the page.',
      errorApiError: 'API error occurred.',
      searchingText: 'Searching...',
      retryingText: 'Retrying ({attempt}/{total})',
      historyCleared: 'Search history cleared',
      authHasAccount: 'Already have an account?',
      authLoginHere: 'Sign in here',
      authDeleteConfirm: 'Are you sure you want to delete your account? All saved favorites will be lost permanently.',
      fridgeFound: 'We found {count} ingredients',
      fridgeAnalysisTimeout: 'Image analysis took too long — try again',
      fridgeAnalysisFail: 'Could not analyze the image',
      fridgeParseFail: 'Could not parse the response',
      fridgeImageLoadTimeout: 'Image loading timed out',
      fridgeImageLoadFail: 'Could not load the image',
      cookModeStepOf: 'Step {current} of {total}',
      cookModeDone: '✓ Done!',
      cookModeStartTimer: '⏱ Start timer',
      cookModeStopTimer: '⏹ Stop timer',
      ratingTopScore: '⭐ Amazing!',
      ratingScore: 'Rating: {score}/5 stars',
      shareTitle: 'Shopping list',
      shareAppText: 'Check out this recipe app — AI that sorts out dinner for you!',
      timeAgoNow: 'Just now',
      timeAgoMin: 'min',
      timeAgoHour: 'hr',
      timeAgoDay: 'd',
      darkModeLight: 'Light mode',
      darkModeDark: 'Dark mode',
      recipeCountSingular: 'recipe saved',
      recipeCountPlural: 'recipes saved',
      changelogTitle: 'What\'s new',
      changelogClose: 'Got it!',
      holidayApproaching: 'is coming!',
      portionLabel: 'servings',
      addToShopBtn: 'Add to shopping list',
      drinkPairingTitle: 'Amko\'s drink picks',
      // Aria-labels
      ariaMyAccount: 'My account', ariaSelectLang: 'Select language', ariaToggleTheme: 'Toggle theme',
      ariaOnboarding: 'Welcome guide', ariaScanFood: 'Snap your ingredients', ariaRemove: 'Remove',
      ariaAdd: 'Add', ariaDecrease: 'Decrease servings', ariaIncrease: 'Increase servings',
      ariaInspiration: 'Inspiration', ariaSavedRecipes: 'Saved recipes',
      ariaShoppingList: 'Shopping list', ariaMainNav: 'Main navigation',
      ariaSearchRecipes: 'Search recipes', ariaFavorites: 'Favorites',
      ariaRecipeDetails: 'Recipe details', ariaLogin: 'Login',
      ariaClose: 'Close', ariaRecipeResults: 'Recipe results', ariaCloseResults: 'Close results',
      ariaCookMode: 'Cooking mode', ariaCloseCookMode: 'Close cooking mode',
      ariaPrevStep: 'Previous step', ariaNextStep: 'Next step',
      ariaFridgeScanning: 'Identifying ingredients',
      ariaFavSearch: 'Search favorites...',
      ariaManualListAdd: 'Add item to shopping list',
      offlineMessage: 'You seem to be offline. Check your saved favorites while you wait!',
    },
    es: {
      heroEyebrow: 'El eterno dilema de la cena', heroTitle: '¿Qué cocinamos?',
      yourIngredients: 'Tus ingredientes', scanFood: 'Fotografía tus ingredientes',
      orManual: 'o escribe manualmente', inputHint: 'Enter para añadir. Coma separa.',
      whatDoYouHave: '¿Qué tienes en casa?', howPicky: '¿Qué tan exigente eres?',
      portions: 'Porciones', showRecipes: 'Mostrar recetas',
      savedRecipes: 'Recetas guardadas', noSavedRecipes: 'Tu colección de recetas te espera',
      noSavedDesc: 'Encuentra una receta que te guste y toca el corazón. La próxima vez, tus favoritas estarán aquí.',
      findRecipes: 'Encuentra tu primera favorita →', shoppingList: 'Lista de compras',
      clear: 'Borrar', shareList: 'Compartir lista 📤',
      navSearch: 'Buscar', navInspiration: 'Inspiración', navFavorites: 'Favoritos', navList: 'Lista',
      vegetariskt: 'Vegetariano', veganskt: 'Vegano', glutenfritt: 'Sin gluten',
      snabbt: 'Menos de 30 min', laktosfritt: 'Sin lactosa', nötfritt: 'Sin frutos secos',
      barnvänligt: 'Para niños', budgetvänligt: 'Económico',
      ingredients: 'Ingredientes', steps: 'Preparación',
      arminTitle: 'Amko recomienda', worldKitchens: 'Cocinas del mundo',
      surpriseMe: '🎲 Sorpréndeme', inspiration: 'Inspiración',
      modeIngredients: '🥕 Ingredientes', modeFreetext: '💬 Cuéntame',
      freetextLabel: 'Cuéntame qué se te antoja',
      freetextHint: 'Escribe libremente — Amko entiende.',
      searchBtnHint: 'Añade al menos un ingrediente para buscar',
      inspirationTitle: 'Inspiración',
      inspirationSub: '¿No sabes qué cocinar? Explora las recomendaciones de Amko y cocinas del mundo. Toca cualquier plato y obtén la receta al instante.',
      arminSub: 'Favoritos seleccionados. Sin sesgo, solo buena comida. (Bueno, un poco.)',
      listEmpty: 'Compra inteligente',
      listEmptyDesc: 'Elige una receta, toca "Añadir a la lista" — y todo lo que necesitas se reúne aquí. Comparte con tu familia.',
      listEmptyCta: 'Buscar recetas y armar tu lista →',
      authTitle: 'Inicia sesión o crea una cuenta',
      authDesc: 'Inicia sesión para guardar tus recetas favoritas y sincronizarlas.',
      authGoogle: 'Continuar con Google', authApple: 'Continuar con Apple',
      authOrEmail: 'o con correo', authLogin: 'Iniciar sesión',
      authNoAccount: '¿Sin cuenta?', authCreateHere: 'Crea una aquí',
      authPrivacy: 'Solo almacenamos tu correo. Sin spam, sin newsletters, solo recetas.',
      authBenefitSync: 'Favoritos sincronizados en todos los dispositivos',
      authBenefitShop: 'Envía la lista de compras a tu correo',
      authBenefitReturn: 'Accede a tus recetas desde cualquier lugar',
      authMyAccount: 'Mi cuenta', authManage: 'Gestionar cuenta',
      authMethod: 'Método de inicio', authEmail: 'Correo',
      authSavedFavs: 'Favoritos guardados', authChangePassword: 'Cambiar contraseña',
      authDeleteAccount: 'Eliminar cuenta', authSignOut: 'Cerrar sesión',
      authCreateAccount: 'Crear cuenta', authCreating: 'Creando cuenta...',
      authLoggingIn: 'Iniciando sesión...',
      onboardingTitle: '¡Bienvenido a ¿Qué cocinamos?',
      onboardingSub: 'Tu asistente de recetas con IA. Así funciona:',
      onboardingStep1Title: 'Añade ingredientes',
      onboardingStep1Desc: 'Escribe lo que tienes o fotografía tu nevera — la IA identifica los ingredientes.',
      onboardingStep2Title: 'Recibe recetas personalizadas',
      onboardingStep2Desc: 'Amko sugiere 4 recetas basadas en tus ingredientes.',
      onboardingStep3Title: 'Guarda, cocina y compra',
      onboardingStep3Desc: 'Guarda favoritos, sigue paso a paso y envía la lista de compras.',
      onboardingCta: '¡Vamos!',
      onboardingHint: 'Gratis para empezar. Sin cuenta necesaria. Más de 2.400 recetas creadas por cocineros como tú.',
      toastCopied: '¡Copiado! Compártelo.',
      toastListSent: 'Lista de compras enviada ✈️',
      toastListAdded: '¡Añadido! Hora de comprar.',
      toastEmptyList: 'Lista vacía — ¡nada que enviar!',
      toastLoggedIn: '¡Bienvenido de vuelta!',
      toastLoggedOut: 'Sesión cerrada',
      toastMagicSent: 'Revisa tu correo — te enviamos un enlace',
      toastError: 'Algo salió mal — inténtalo de nuevo',
      toastListCleared: 'Lista borrada',
      toastAlreadyInList: 'Los ingredientes ya están en la lista',
      toastCantShare: 'No se pudo compartir',
      toastCantCopy: 'No se pudo copiar',
      toastShareNA: 'Compartir no disponible',
      toastNoIngs: 'No se encontraron ingredientes',
      toastBonAppetit: '¡Buen provecho! 🍽️',
      toastFromCache: 'Cargado desde caché',
      toastAuthEmail: 'Ingresa correo y contraseña',
      toastAuthShort: 'La contraseña debe tener al menos 6 caracteres',
      toastAuthWrong: 'Correo o contraseña incorrectos',
      toastAuthExists: 'Ya existe una cuenta con ese correo',
      toastAuthConfirm: 'Revisa tu correo para el enlace de verificación',
      toastAuthRate: 'Demasiados intentos — espera un momento',
      footerPanic: '🍝 Impulsado por el pánico de las 17:00',
      footerAI: '🤖 IA que cocina (más o menos)',
      footerHelp: '❓ ¿Cómo funciona?',
      footerShare: 'Comparte con un amigo 📤',
      cookModePrev: '← Anterior',
      cookModeNext: 'Siguiente →',
      cookModeTimer: '⏱ Iniciar temporizador',
      quickMeat: '🥩 Antojo de carne', quickFish: '🐟 Pescado y mariscos',
      quickVeg: '🥬 Cajón de verduras', quickBasics: '🧀 Básicos',
      recipeDrinks: 'Maridaje', recipeNutrition: 'Nutrición por porción',
      recipeSubstitutions: 'Sustituciones', recipeFav: 'Guardar favorito',
      recipeUnfav: 'Quitar favorito', recipeCopy: 'Copiar', recipeShare: 'Compartir',
      recipePrint: 'Imprimir', recipeAddToList: '🛒 Añadir a la lista',
      recipeCookMode: '👨‍🍳 Modo cocina',
      historyTitle: 'Historial', historyClear: 'Borrar',
      favRecipeCount: 'recetas guardadas',
      filterAll: 'Todos',
      recipesFound: 'Amko encontró {count} recetas para ti',
      recipesHint: 'Toca una receta para verla completa',
      sortLabel: 'Ordenar:',
      sortDifficulty: 'Dificultad',
      sortTime: 'Tiempo',
      sortName: 'Nombre',
      ingredientCount: 'ingredientes',
      seeRecipe: 'Ver receta →',
      copyIngList: 'Copiar lista de ingredientes',
      rateRecipe: 'Califica esta receta',
      missingLabel: 'Falta:',
      missingSomething: '¿Te falta algo?',
      tipsBefore: 'Consejos antes de cocinar',
      buyAlso: 'Compra también:',
      listRemaining: '{unchecked} de {total} pendientes',
      otherItems: 'Otros',
      removeItem: 'Quitar',
      clearAllIngs: 'Borrar todo',
      errorTimeout: 'La búsqueda tardó demasiado — inténtalo de nuevo.',
      retryBtn: 'Intentar de nuevo',
      errorNewVersion: 'Nueva versión disponible — recarga para actualizar',
      errorParseError: 'La IA dio una respuesta incompleta — inténtalo de nuevo.',
      errorServer: 'El servidor no responde — inténtalo en un momento.',
      errorRateLimit: 'Demasiadas búsquedas — espera un minuto e inténtalo de nuevo.',
      errorNoRecipes: 'No se encontraron recetas — prueba con otros ingredientes.',
      errorNetwork: 'Error de red — verifica tu conexión e inténtalo de nuevo.',
      errorReload: 'Algo salió mal — intenta recargar la página.',
      errorApiError: 'Error de API.',
      searchingText: 'Buscando...',
      retryingText: 'Reintentando ({attempt}/{total})',
      historyCleared: 'Historial borrado',
      authHasAccount: '¿Ya tienes cuenta?',
      authLoginHere: 'Inicia sesión aquí',
      authDeleteConfirm: '¿Estás seguro de que quieres eliminar tu cuenta? Todos los favoritos se perderán permanentemente.',
      fridgeFound: 'Encontramos {count} ingredientes',
      fridgeAnalysisTimeout: 'El análisis tardó demasiado — inténtalo de nuevo',
      fridgeAnalysisFail: 'No se pudo analizar la imagen',
      fridgeParseFail: 'No se pudo interpretar la respuesta',
      fridgeImageLoadTimeout: 'La carga de la imagen tardó demasiado',
      fridgeImageLoadFail: 'No se pudo cargar la imagen',
      cookModeStepOf: 'Paso {current} de {total}',
      cookModeDone: '✓ ¡Listo!',
      cookModeStartTimer: '⏱ Iniciar temporizador',
      cookModeStopTimer: '⏹ Detener temporizador',
      ratingTopScore: '⭐ ¡Excelente!',
      ratingScore: 'Puntuación: {score}/5 estrellas',
      shareTitle: 'Lista de compras',
      shareAppText: '¡Mira esta app de recetas — IA que resuelve la cena!',
      timeAgoNow: 'Ahora',
      timeAgoMin: 'min',
      timeAgoHour: 'h',
      timeAgoDay: 'd',
      darkModeLight: 'Modo claro',
      darkModeDark: 'Modo oscuro',
      recipeCountSingular: 'receta guardada',
      recipeCountPlural: 'recetas guardadas',
      changelogTitle: 'Novedades',
      changelogClose: '¡Entendido!',
      holidayApproaching: '¡se acerca!',
      portionLabel: 'porciones',
      addToShopBtn: 'Añadir a la lista',
      drinkPairingTitle: 'Sugerencias de Amko',
      // Aria-labels
      ariaMyAccount: 'Mi cuenta', ariaSelectLang: 'Seleccionar idioma', ariaToggleTheme: 'Cambiar tema',
      ariaOnboarding: 'Guía de bienvenida', ariaScanFood: 'Fotografía tus ingredientes', ariaRemove: 'Eliminar',
      ariaAdd: 'Añadir', ariaDecrease: 'Reducir porciones', ariaIncrease: 'Aumentar porciones',
      ariaInspiration: 'Inspiración', ariaSavedRecipes: 'Recetas guardadas',
      ariaShoppingList: 'Lista de compras', ariaMainNav: 'Navegación principal',
      ariaSearchRecipes: 'Buscar recetas', ariaFavorites: 'Favoritos',
      ariaRecipeDetails: 'Detalles de receta', ariaLogin: 'Iniciar sesión',
      ariaClose: 'Cerrar', ariaRecipeResults: 'Resultados de recetas', ariaCloseResults: 'Cerrar resultados',
      ariaCookMode: 'Modo cocina', ariaCloseCookMode: 'Cerrar modo cocina',
      ariaPrevStep: 'Paso anterior', ariaNextStep: 'Paso siguiente',
      ariaFridgeScanning: 'Identificando ingredientes',
      ariaFavSearch: 'Buscar en favoritos...',
      ariaManualListAdd: 'Añadir artículo a la lista',
      offlineMessage: 'Parece que estás sin conexión. ¡Revisa tus recetas guardadas mientras esperas!',
    },
    bs: {
      heroEyebrow: 'Vječna dilema večere', heroTitle: 'Šta da kuhamo?',
      yourIngredients: 'Tvoji sastojci', scanFood: 'Slikaj svoje namirnice',
      orManual: 'ili piši ručno', inputHint: 'Enter za dodavanje. Zarez odvaja.',
      whatDoYouHave: 'Šta imaš kod kuće?', howPicky: 'Koliko si izbirljiv/a?',
      portions: 'Porcije', showRecipes: 'Prikaži recepte',
      savedRecipes: 'Sačuvani recepti', noSavedRecipes: 'Tvoja kolekcija recepata čeka',
      noSavedDesc: 'Pronađi recept koji ti se sviđa i pritisni srce. Sljedeći put, tvoji favoriti su ovdje.',
      findRecipes: 'Pronađi prvi favorit →', shoppingList: 'Lista za kupovinu',
      clear: 'Obriši', shareList: 'Podijeli listu 📤',
      navSearch: 'Traži', navInspiration: 'Inspiracija', navFavorites: 'Favoriti', navList: 'Lista',
      vegetariskt: 'Vegetarijansko', veganskt: 'Vegansko', glutenfritt: 'Bez glutena',
      snabbt: 'Ispod 30 min', laktosfritt: 'Bez laktoze', nötfritt: 'Bez orašastih',
      barnvänligt: 'Za djecu', budgetvänligt: 'Povoljno',
      ingredients: 'Sastojci', steps: 'Priprema',
      arminTitle: 'Amko preporučuje', worldKitchens: 'Kuhinje svijeta',
      surpriseMe: '🎲 Iznenadi me', inspiration: 'Inspiracija',
      modeIngredients: '🥕 Sastojci', modeFreetext: '💬 Reci slobodno',
      freetextLabel: 'Reci šta želiš jesti',
      freetextHint: 'Piši slobodno — Amko razumije.',
      searchBtnHint: 'Dodaj barem jedan sastojak za pretragu',
      inspirationTitle: 'Inspiracija',
      inspirationSub: 'Ne znaš šta da kuhaš? Pregledaj Amkove preporuke i kuhinje svijeta. Pritisni jelo i dobij recept odmah.',
      arminSub: 'Ručno odabrani favoriti. Bez pristrasnosti, samo dobra hrana. (Dobro, malo.)',
      listEmpty: 'Kupuj pametnije',
      listEmptyDesc: 'Odaberi recept, pritisni "Dodaj na listu" — i sve što trebaš kupiti se sakupi ovdje. Podijeli s porodicom.',
      listEmptyCta: 'Pronađi recepte i napravi listu →',
      authTitle: 'Prijavi se ili kreiraj račun',
      authDesc: 'Prijavi se da sačuvaš favorite i sinhronizuješ ih svuda.',
      authGoogle: 'Nastavi s Googleom', authApple: 'Nastavi s Appleom',
      authOrEmail: 'ili s emailom', authLogin: 'Prijavi se',
      authNoAccount: 'Nemaš račun?', authCreateHere: 'Kreiraj ovdje',
      authPrivacy: 'Čuvamo samo tvoj email. Bez spama, bez newslettera, samo recepti.',
      authBenefitSync: 'Favoriti sinhronizovani na svim uređajima',
      authBenefitShop: 'Pošalji listu za kupovinu na email',
      authBenefitReturn: 'Pristupi receptima s bilo kojeg mjesta',
      authMyAccount: 'Moj račun', authManage: 'Upravljaj računom',
      authMethod: 'Metoda prijave', authEmail: 'Email',
      authSavedFavs: 'Sačuvani favoriti', authChangePassword: 'Promijeni lozinku',
      authDeleteAccount: 'Obriši račun', authSignOut: 'Odjavi se',
      authCreateAccount: 'Kreiraj račun', authCreating: 'Kreiranje računa...',
      authLoggingIn: 'Prijava...',
      onboardingTitle: 'Dobrodošli u Šta da kuhamo?',
      onboardingSub: 'Tvoj AI pomoćnik za recepte. Evo kako radi:',
      onboardingStep1Title: 'Dodaj sastojke',
      onboardingStep1Desc: 'Piši šta imaš ili slikaj frižider — AI prepoznaje namirnice.',
      onboardingStep2Title: 'Dobij prilagođene recepte',
      onboardingStep2Desc: 'Amko predlaže 8 recepata na osnovu tvojih sastojaka.',
      onboardingStep3Title: 'Sačuvaj, kuhaj i kupuj',
      onboardingStep3Desc: 'Sačuvaj favorite, prati korak po korak i pošalji listu za kupovinu.',
      onboardingCta: 'Idemo!',
      onboardingHint: 'Besplatno za početak. Bez računa. Preko 2.400 recepata kreiranih od kuhara poput tebe.',
      toastCopied: 'Kopirano! Podijeli.',
      toastListSent: 'Lista poslana na email ✈️',
      toastListAdded: 'Dodano! Vrijeme za kupovinu.',
      toastEmptyList: 'Lista prazna — nema šta slati!',
      toastLoggedIn: 'Dobrodošli nazad!',
      toastLoggedOut: 'Odjavljen/a si',
      toastMagicSent: 'Provjeri email — poslali smo link',
      toastError: 'Nešto je pošlo po zlu — pokušaj ponovo',
      toastListCleared: 'Lista obrisana',
      toastAlreadyInList: 'Sastojci su već na listi',
      toastCantShare: 'Dijeljenje nije uspjelo',
      toastCantCopy: 'Kopiranje nije uspjelo',
      toastShareNA: 'Dijeljenje nije dostupno',
      toastNoIngs: 'Nisu pronađeni sastojci',
      toastBonAppetit: 'Prijatno! 🍽️',
      toastFromCache: 'Učitano iz keša',
      toastAuthEmail: 'Unesi email i lozinku',
      toastAuthShort: 'Lozinka mora imati najmanje 6 znakova',
      toastAuthWrong: 'Pogrešan email ili lozinka',
      toastAuthExists: 'Račun s tim emailom već postoji',
      toastAuthConfirm: 'Provjeri email za verifikacijski link',
      toastAuthRate: 'Previše pokušaja — pričekaj malo',
      footerPanic: '🍝 Pokretano panikom u 17:00',
      footerAI: '🤖 AI koji kuha (nekako)',
      footerHelp: '❓ Kako radi?',
      footerShare: 'Podijeli s prijateljem 📤',
      cookModePrev: '← Prethodno',
      cookModeNext: 'Sljedeće →',
      cookModeTimer: '⏱ Pokreni tajmer',
      quickMeat: '🥩 Želja za mesom', quickFish: '🐟 Riba i plodovi mora',
      quickVeg: '🥬 Ladica s povrćem', quickBasics: '🧀 Osnovno',
      recipeDrinks: 'Preporuka pića', recipeNutrition: 'Nutritivna vrijednost',
      recipeSubstitutions: 'Zamjene', recipeFav: 'Sačuvaj favorit',
      recipeUnfav: 'Ukloni favorit', recipeCopy: 'Kopiraj', recipeShare: 'Podijeli',
      recipePrint: 'Štampaj', recipeAddToList: '🛒 Dodaj na listu',
      recipeCookMode: '👨‍🍳 Pokreni kuhanje',
      historyTitle: 'Historija pretraga', historyClear: 'Obriši',
      favRecipeCount: 'recepata sačuvano',
      filterAll: 'Svi',
      recipesFound: 'Amko je pronašao {count} recepata za tebe', recipesHint: 'Pritisni recept da vidiš sve',
      sortLabel: 'Sortiraj:', sortDifficulty: 'Težina', sortTime: 'Vrijeme', sortName: 'Naziv',
      ingredientCount: 'sastojaka', seeRecipe: 'Pogledaj recept →',
      copyIngList: 'Kopiraj listu sastojaka', rateRecipe: 'Ocijeni recept',
      missingLabel: 'Nedostaje:', missingSomething: 'Nedostaje ti nešto?',
      tipsBefore: 'Savjeti prije kuhanja', buyAlso: 'Kupi i:',
      listRemaining: '{unchecked} od {total} preostalo', otherItems: 'Ostalo',
      removeItem: 'Ukloni', clearAllIngs: 'Obriši sve',
      errorTimeout: 'Pretraga je trajala predugo — pokušaj ponovo.', retryBtn: 'Pokušaj ponovo',
      errorNewVersion: 'Nova verzija dostupna — učitaj ponovo za ažuriranje',
      errorParseError: 'AI je dao nepotpun odgovor — pokušaj ponovo.',
      errorServer: 'Server ne odgovara — pokušaj ponovo za koji trenutak.',
      errorRateLimit: 'Previše pretraga — pričekaj minutu i pokušaj ponovo.',
      errorNoRecipes: 'Nisu vraćeni recepti — probaj s drugim sastojcima.',
      errorNetwork: 'Greška mreže — provjeri konekciju i pokušaj ponovo.',
      errorReload: 'Nešto je pošlo po zlu — pokušaj učitati stranicu ponovo.',
      errorApiError: 'Greška API-ja.',
      searchingText: 'Tražim...', retryingText: 'Pokušavam ponovo ({attempt}/{total})',
      historyCleared: 'Historija pretraga obrisana',
      authHasAccount: 'Već imaš račun?', authLoginHere: 'Prijavi se ovdje',
      authDeleteConfirm: 'Jesi li siguran/na da želiš obrisati račun? Svi sačuvani favoriti će biti trajno izgubljeni.',
      fridgeFound: 'Pronašli smo {count} namirnica',
      fridgeAnalysisTimeout: 'Analiza slike je trajala predugo — pokušaj ponovo',
      fridgeAnalysisFail: 'Nije moguće analizirati sliku',
      fridgeParseFail: 'Nije moguće protumačiti odgovor',
      fridgeImageLoadTimeout: 'Učitavanje slike je trajalo predugo',
      fridgeImageLoadFail: 'Nije moguće učitati sliku',
      cookModeStepOf: 'Korak {current} od {total}', cookModeDone: '✓ Gotovo!',
      cookModeStartTimer: '⏱ Pokreni tajmer', cookModeStopTimer: '⏹ Zaustavi tajmer',
      ratingTopScore: '⭐ Odlično!', ratingScore: 'Ocjena: {score}/5 zvjezdica',
      shareTitle: 'Lista za kupovinu',
      shareAppText: 'Pogledaj ovu aplikaciju za recepte — AI koji rješava večeru!',
      timeAgoNow: 'Upravo', timeAgoMin: 'min', timeAgoHour: 'h', timeAgoDay: 'd',
      darkModeLight: 'Svijetli način', darkModeDark: 'Tamni način',
      recipeCountSingular: 'recept sačuvan', recipeCountPlural: 'recepata sačuvano',
      changelogTitle: 'Novosti', changelogClose: 'Shvaćeno!',
      holidayApproaching: 'se približava!', portionLabel: 'porcija',
      addToShopBtn: 'Dodaj na listu', drinkPairingTitle: 'Amkove preporuke pića',
      // Aria-labels
      ariaMyAccount: 'Moj račun', ariaSelectLang: 'Odaberi jezik', ariaToggleTheme: 'Promijeni temu',
      ariaOnboarding: 'Vodič dobrodošlice', ariaScanFood: 'Slikaj svoje namirnice', ariaRemove: 'Ukloni',
      ariaAdd: 'Dodaj', ariaDecrease: 'Smanji porcije', ariaIncrease: 'Povećaj porcije',
      ariaInspiration: 'Inspiracija', ariaSavedRecipes: 'Sačuvani recepti',
      ariaShoppingList: 'Lista za kupovinu', ariaMainNav: 'Glavna navigacija',
      ariaSearchRecipes: 'Traži recepte', ariaFavorites: 'Favoriti',
      ariaRecipeDetails: 'Detalji recepta', ariaLogin: 'Prijava',
      ariaClose: 'Zatvori', ariaRecipeResults: 'Rezultati recepata', ariaCloseResults: 'Zatvori rezultate',
      ariaCookMode: 'Način kuhanja', ariaCloseCookMode: 'Zatvori način kuhanja',
      ariaPrevStep: 'Prethodni korak', ariaNextStep: 'Sljedeći korak',
      ariaFridgeScanning: 'Identifikacija namirnica',
      ariaFavSearch: 'Pretraži favorite...',
      ariaManualListAdd: 'Dodaj artikal na listu',
      offlineMessage: 'Izgleda da si offline. Provjeri sačuvane favorite dok čekaš mrežu!',
    },
  };

  const changelog = [
    { version: '7.3', date: '2026-03-22', title: 'Säkerhet, tillgänglighet & nya funktioner', items: [
      'Ingredienslista i kokläge — se vad du behöver medan du lagar',
      'Auto-sök när du väljer inspiration från världens kök',
      'Sök bland dina sparade favoriter',
      '"Inget passade? Sök igen"-knapp i resultatvyn',
      'Offline-meddelande istället för tyst fel',
      'Bättre tillgänglighet: fokushantering, kontrast & skärmläsare',
    ]},
    { version: '6.2', date: '2026-03-22', title: 'Fri-text-sökning & dryckestips', items: [
      'Skriv fritt vad du är sugen på — inte bara ingredienser!',
      'Dryckesrekommendationer till varje rätt (vin, öl, alkoholfritt)',
      'Högtidsrecept som dyker upp inför jul, midsommar och påsk',
      'Vardagligare humor — mindre krångliga ord, mer skratt',
      '4 nya preferenser: Laktosfritt, Nötfritt, Barnvänligt, Budgetvänligt',
    ]},
    { version: '6.1', date: '2026-03-22', title: 'Språkstöd & mer inspiration', items: [
      'Välj språk: Svenska, Engelska, Spanska eller Bosniska',
      '20 Amko-rekommendationer som roterar varje vecka',
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
    // Search mode tabs
    const modeTabIngs = document.querySelector('.search-mode-tab[data-mode="ingredients"]');
    const modeTabFree = document.querySelector('.search-mode-tab[data-mode="freetext"]');
    if (modeTabIngs) modeTabIngs.textContent = t('modeIngredients');
    if (modeTabFree) modeTabFree.textContent = t('modeFreetext');
    // Freetext
    const ftLabel = document.querySelector('#freetextMode .card-label');
    if (ftLabel) ftLabel.textContent = t('freetextLabel');
    const ftHint = document.querySelector('#freetextMode .hint');
    if (ftHint) ftHint.textContent = t('freetextHint');
    const ftInput = document.getElementById('freetextInput');
    if (ftInput) {
      const ftPlaceholders = {
        sv: "T.ex. 'Planera 5 middagar för en student under 200 kr', 'Sugen på Balkan', 'Barnvänlig veckomeny'...",
        en: "E.g. 'Plan 5 student dinners under $20', 'Craving Balkan food', 'Kid-friendly weekly menu'...",
        es: "Ej. 'Planifica 5 cenas de estudiante', 'Antojo de comida balcánica', 'Menú semanal para niños'...",
        bs: "Npr. 'Planiraj 5 studentskih večera', 'Želja za balkanskom hranom', 'Sedmični meni za djecu'...",
      };
      ftInput.placeholder = ftPlaceholders[currentLang] || ftPlaceholders.sv;
    }
    // Search btn hint
    const sbHint = document.getElementById('searchBtnHint');
    if (sbHint) sbHint.textContent = t('searchBtnHint');
    // Inspiration section
    const inspTitle = document.querySelector('#viewInspiration .view-title');
    if (inspTitle) inspTitle.textContent = t('inspirationTitle');
    const inspSub = document.querySelector('#viewInspiration .view-sub');
    if (inspSub) inspSub.textContent = t('inspirationSub');
    const arminTitleEl = document.querySelector('.armin-title');
    if (arminTitleEl) arminTitleEl.textContent = t('arminTitle');
    const arminSubEl = document.querySelector('.armin-sub');
    if (arminSubEl) arminSubEl.textContent = t('arminSub');
    const sectionDiv = document.querySelector('.section-divider span');
    if (sectionDiv) sectionDiv.textContent = t('worldKitchens');
    const surpriseBtn = document.getElementById('surpriseBtn');
    if (surpriseBtn) surpriseBtn.innerHTML = `<span class="dice">🎲</span> ${t('surpriseMe').replace('🎲 ', '')}`;
    // Shopping list empty state
    const listEmptyTitle = document.querySelector('#viewShopping .empty-title');
    if (listEmptyTitle) listEmptyTitle.textContent = t('listEmpty');
    const listEmptyDesc = document.querySelector('#viewShopping .empty-desc');
    if (listEmptyDesc) listEmptyDesc.textContent = t('listEmptyDesc');
    const listEmptyCta = document.querySelector('#viewShopping .empty-cta');
    if (listEmptyCta) listEmptyCta.innerHTML = t('listEmptyCta');
    // Footer
    const footerLinks = document.querySelectorAll('.footer-link');
    if (footerLinks[0]) footerLinks[0].textContent = t('footerPanic');
    if (footerLinks[1]) footerLinks[1].textContent = t('footerAI');
    const helpBtn = document.getElementById('helpBtn');
    if (helpBtn) helpBtn.textContent = t('footerHelp');
    const shareAppBtn = document.getElementById('shareAppBtn');
    if (shareAppBtn) shareAppBtn.textContent = t('footerShare');
    // Auth modal
    const authTitleEl = document.querySelector('#authSignIn .auth-title');
    if (authTitleEl) authTitleEl.textContent = t('authTitle');
    const authDescEl = document.querySelector('#authSignIn .auth-desc');
    if (authDescEl) authDescEl.textContent = t('authDesc');
    const authGoogleBtn = document.getElementById('authGoogle');
    if (authGoogleBtn) { const svg = authGoogleBtn.querySelector('svg')?.outerHTML || ''; authGoogleBtn.innerHTML = svg + ' ' + t('authGoogle'); }
    const authAppleBtn = document.getElementById('authApple');
    if (authAppleBtn) { const svg = authAppleBtn.querySelector('svg')?.outerHTML || ''; authAppleBtn.innerHTML = svg + ' ' + t('authApple'); }
    const authDivider = document.querySelector('.auth-divider span');
    if (authDivider) authDivider.textContent = t('authOrEmail');
    const authPrivacy = document.querySelector('.auth-privacy');
    if (authPrivacy) authPrivacy.textContent = t('authPrivacy');
    const authToggle = document.getElementById('authToggleMode');
    if (authToggle) authToggle.innerHTML = t('authNoAccount') + ' <strong>' + t('authCreateHere') + '</strong>';
    // Benefit items
    const benefits = document.querySelectorAll('.benefit-item span:not(.benefit-icon)');
    if (benefits[0]) benefits[0].textContent = t('authBenefitSync');
    if (benefits[1]) benefits[1].textContent = t('authBenefitShop');
    if (benefits[2]) benefits[2].textContent = t('authBenefitReturn');
    // Onboarding
    const obTitle = document.querySelector('.onboarding-title');
    if (obTitle) obTitle.textContent = t('onboardingTitle');
    const obSub = document.querySelector('.onboarding-subtitle');
    if (obSub) obSub.textContent = t('onboardingSub');
    const obSteps = document.querySelectorAll('.onboarding-step-text');
    if (obSteps[0]) { obSteps[0].querySelector('strong').textContent = t('onboardingStep1Title'); obSteps[0].querySelector('span').textContent = t('onboardingStep1Desc'); }
    if (obSteps[1]) { obSteps[1].querySelector('strong').textContent = t('onboardingStep2Title'); obSteps[1].querySelector('span').textContent = t('onboardingStep2Desc'); }
    if (obSteps[2]) { obSteps[2].querySelector('strong').textContent = t('onboardingStep3Title'); obSteps[2].querySelector('span').textContent = t('onboardingStep3Desc'); }
    const obCta = document.querySelector('.onboarding-cta');
    if (obCta) obCta.textContent = t('onboardingCta');
    const obHint = document.querySelector('.onboarding-hint');
    if (obHint) obHint.textContent = t('onboardingHint');
    // Cook mode
    const cmPrev = document.getElementById('cookModePrev');
    if (cmPrev) cmPrev.textContent = t('cookModePrev');
    const cmNext = document.getElementById('cookModeNext');
    if (cmNext) cmNext.textContent = t('cookModeNext');
    const cmTimer = document.getElementById('cookModeTimerBtn');
    if (cmTimer) cmTimer.textContent = t('cookModeTimer');
    // Re-render quick picks with translated labels
    renderQuickPicks();
    // Rotate hero subtitle and footer in correct language (respects late-night easter egg)
    const heroSubEl = document.querySelector('.hero-sub');
    const h = new Date().getHours();
    if (h >= 23 || h < 5) {
      const lns = ['Midnattshunger? Vi dömer inte.', 'Klockan är mycket. Men hungern sover aldrig.', 'Sen middag > ingen middag.'];
      if (heroSubEl) heroSubEl.textContent = pick(lns);
    } else {
      if (heroSubEl) heroSubEl.textContent = pick(heroSubtitles[currentLang] || heroSubtitles.sv);
    }
    const ftTagline = document.querySelector('.footer-tagline:not(.footer-irony)');
    const ftIrony = document.querySelector('.footer-irony');
    if (ftTagline) ftTagline.textContent = pick(footerTaglines[currentLang] || footerTaglines.sv);
    if (ftIrony) ftIrony.textContent = pick(footerIronies[currentLang] || footerIronies.sv);

    // Aria-labels
    const ariaMap = [
      ['#accountBtn', 'ariaMyAccount'], ['#langSelect', 'ariaSelectLang'],
      ['#settingsToggle', 'ariaToggleTheme'], ['#onboardingOverlay', 'ariaOnboarding'],
      ['#fridgeBtn', 'ariaScanFood'], ['#fridgeRemove', 'ariaRemove'],
      ['#addBtn', 'ariaAdd'], ['#spMinus', 'ariaDecrease'], ['#spPlus', 'ariaIncrease'],
      ['#viewInspiration', 'ariaInspiration'], ['#viewFavorites', 'ariaSavedRecipes'],
      ['#viewShopping', 'ariaShoppingList'], ['#manualListAddBtn', 'ariaAdd'],
      ['nav.bottom-nav', 'ariaMainNav'],
      ['.nav-item[data-view="search"]', 'ariaSearchRecipes'],
      ['.nav-item[data-view="inspiration"]', 'ariaInspiration'],
      ['.nav-item[data-view="favorites"]', 'ariaFavorites'],
      ['.nav-item[data-view="shopping"]', 'ariaShoppingList'],
      ['#overlay', 'ariaRecipeDetails'], ['#authOverlay', 'ariaLogin'],
      ['#closeAuth', 'ariaClose'], ['#resultsOverlay', 'ariaRecipeResults'],
      ['#resultsClose', 'ariaCloseResults'], ['#cookModeOverlay', 'ariaCookMode'],
      ['#cookModeClose', 'ariaCloseCookMode'],
      ['#cookModePrev', 'ariaPrevStep'], ['#cookModeNext', 'ariaNextStep'],
      ['#viewSearch', 'ariaSearchRecipes'],
    ];
    ariaMap.forEach(([sel, key]) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute('aria-label', t(key));
    });
    // Fridge scanning text
    const fridgeScanText = document.querySelector('#fridgeScanning span');
    if (fridgeScanText) fridgeScanText.innerHTML = t('ariaFridgeScanning') + '<span class="loading-dots"></span>';
    // Fav search placeholder
    const favSearchInput = document.getElementById('favSearchInput');
    if (favSearchInput) favSearchInput.placeholder = t('ariaFavSearch');
    // Manual list input label
    const manualListLabel = document.querySelector('label[for="manualListInput"]');
    if (manualListLabel) manualListLabel.textContent = t('ariaManualListAdd');
    // Auth account manage section
    const authManageLabel = document.querySelector('.account-manage-label');
    if (authManageLabel) authManageLabel.textContent = t('authManage');
    const authInfoLabels = document.querySelectorAll('.account-manage-info-label');
    if (authInfoLabels[0]) authInfoLabels[0].textContent = t('authMethod');
    if (authInfoLabels[1]) authInfoLabels[1].textContent = t('authSavedFavs');
    // Auth manage buttons
    const authChangePw = document.querySelector('#authChangePassword span');
    if (authChangePw) authChangePw.textContent = t('authChangePassword');
    const authDeleteAcc = document.querySelector('#authDeleteAccount span');
    if (authDeleteAcc) authDeleteAcc.textContent = t('authDeleteAccount');
    const authSignOutBtn = document.getElementById('authSignOut');
    if (authSignOutBtn) authSignOutBtn.textContent = t('authSignOut');
    // Login form labels
    const authEmailLabel = document.querySelector('label[for="authEmail"]');
    if (authEmailLabel) authEmailLabel.textContent = t('authEmail');
    const authPwLabel = document.querySelector('label[for="authPassword"]');
    if (authPwLabel) authPwLabel.textContent = t('authChangePassword').replace('Ändra ', '').replace('Change ', '').replace('Cambiar ', '').replace('Promijeni ', '');
    // Auth login btn
    const authLoginBtn = document.getElementById('authLoginBtn');
    if (authLoginBtn) authLoginBtn.textContent = t('authLogin');
    // Manual list input placeholder
    const manualListInput = document.getElementById('manualListInput');
    if (manualListInput) {
      const mlPlaceholders = { sv: 'Lägg till vara...', en: 'Add item...', es: 'Añadir artículo...', bs: 'Dodaj artikal...' };
      manualListInput.placeholder = mlPlaceholders[currentLang] || mlPlaceholders.sv;
    }
    // Auth password placeholder
    const authPwInput = document.getElementById('authPassword');
    if (authPwInput) {
      const pwPlaceholders = { sv: 'Lösenord (minst 6 tecken)', en: 'Password (min 6 characters)', es: 'Contraseña (mín. 6 caracteres)', bs: 'Lozinka (najmanje 6 znakova)' };
      authPwInput.placeholder = pwPlaceholders[currentLang] || pwPlaceholders.sv;
    }
    // Skip link
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) skipLink.textContent = currentLang === 'sv' ? 'Hoppa till innehåll' : currentLang === 'en' ? 'Skip to content' : currentLang === 'es' ? 'Saltar al contenido' : 'Preskoči na sadržaj';

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
  const CACHE_MAX = 20;
  const CACHE_STORAGE_KEY = 'recipe_cache';
  // Restore cache from localStorage
  const recipeCache = (() => {
    try {
      const stored = JSON.parse(localStorage.getItem(CACHE_STORAGE_KEY) || '[]');
      return new Map(stored.slice(-CACHE_MAX));
    } catch { return new Map(); }
  })();
  function cacheSet(key, value) {
    if (recipeCache.size >= CACHE_MAX) {
      const oldest = recipeCache.keys().next().value;
      recipeCache.delete(oldest);
    }
    recipeCache.set(key, value);
    // Persist to localStorage with quota handling
    try {
      const entries = [...recipeCache.entries()].slice(-CACHE_MAX);
      localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      // If quota exceeded, halve the cache and retry
      if (e instanceof DOMException && (e.code === 22 || e.name === 'QuotaExceededError')) {
        try {
          const halfEntries = [...recipeCache.entries()].slice(-Math.floor(CACHE_MAX / 2));
          recipeCache.clear();
          halfEntries.forEach(([k, v]) => recipeCache.set(k, v));
          localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(halfEntries));
        } catch { /* give up silently */ }
      }
    }
  }
  let conversationHistory = [];
  let lastChefComment = '';
  let lastMissingGlobally = [];
  let lastSuggestedSwaps = [];

  function loadStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      const parsed = JSON.parse(raw);
      // Validate that the parsed type matches the fallback type
      if (Array.isArray(fallback) && !Array.isArray(parsed)) return fallback;
      if (typeof fallback === 'object' && fallback !== null && !Array.isArray(fallback) && (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed))) return fallback;
      return parsed ?? fallback;
    } catch {
      // Corrupted data — remove it and return fallback
      try { localStorage.removeItem(key); } catch {}
      return fallback;
    }
  }

  function saveStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // Handle quota exceeded — try to free space by removing least important data
      if (e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
        try {
          // Try clearing recipe cache first (least important)
          localStorage.removeItem(CACHE_STORAGE_KEY);
          recipeCache.clear();
          // Try again
          localStorage.setItem(key, JSON.stringify(value));
        } catch {
          console.warn('localStorage full even after cleanup:', e);
        }
      } else {
        console.warn('localStorage save error:', e);
      }
    }
  }

  let favorites     = loadStorage('fav_recipes', []);
  let searchHistory  = loadStorage('search_history', []);
  let shoppingList   = loadStorage('shopping_list', []);
  let sessionConfettiFired = false;
  let ratings        = loadStorage('recipe_ratings', {});

  // ─── Ingredient display names (i18n) ───
  const ingTranslations = {
    en: { kyckling:'chicken', köttfärs:'ground beef', bacon:'bacon', fläsk:'pork', lamm:'lamb', lax:'salmon', räkor:'shrimp', torsk:'cod', tonfisk:'tuna', tomat:'tomato', paprika:'bell pepper', spenat:'spinach', broccoli:'broccoli', morötter:'carrots', potatis:'potato', pasta:'pasta', ris:'rice', ägg:'eggs', ost:'cheese', grädde:'cream', lök:'onion', vitlök:'garlic', sötpotatis:'sweet potato', svamp:'mushroom', zucchini:'zucchini', aubergine:'eggplant', kokosmjölk:'coconut milk', soja:'soy sauce', ingefära:'ginger', lime:'lime', citron:'lemon', koriander:'cilantro', persilja:'parsley', linser:'lentils', kikärtor:'chickpeas', bönor:'beans', quinoa:'quinoa', bulgur:'bulgur', couscous:'couscous', mjölk:'milk', smör:'butter', olivolja:'olive oil', mjöl:'flour', socker:'sugar', honung:'honey', senap:'mustard', tofu:'tofu', halloumi:'halloumi', fetaost:'feta', cheddar:'cheddar', parmesan:'parmesan', mozzarella:'mozzarella', tortilla:'tortilla', fläskfilé:'pork tenderloin', ananas:'pineapple', avokado:'avocado', kajmak:'kajmak', pitabröd:'pita bread', chili:'chili', filodeg:'phyllo dough', yoghurt:'yogurt', nudlar:'noodles', kål:'cabbage', ströbröd:'breadcrumbs', gurka:'cucumber', sallad:'lettuce', jordnötter:'peanuts' },
    es: { kyckling:'pollo', köttfärs:'carne molida', bacon:'tocino', fläsk:'cerdo', lamm:'cordero', lax:'salmón', räkor:'camarones', torsk:'bacalao', tonfisk:'atún', tomat:'tomate', paprika:'pimiento', spenat:'espinaca', broccoli:'brócoli', morötter:'zanahorias', potatis:'patata', pasta:'pasta', ris:'arroz', ägg:'huevos', ost:'queso', grädde:'nata', lök:'cebolla', vitlök:'ajo', kokosmjölk:'leche de coco', soja:'salsa de soja', ingefära:'jengibre', lime:'lima', citron:'limón', koriander:'cilantro', linser:'lentejas', kikärtor:'garbanzos', smör:'mantequilla', olivolja:'aceite de oliva', mjölk:'leche', socker:'azúcar', honung:'miel', tofu:'tofu', halloumi:'halloumi', tortilla:'tortilla', fläskfilé:'lomo de cerdo', ananas:'piña', avokado:'aguacate', kajmak:'kajmak', pitabröd:'pan pita', chili:'chile', filodeg:'masa filo', yoghurt:'yogur', nudlar:'fideos', kål:'repollo', ströbröd:'pan rallado', gurka:'pepino', sallad:'lechuga', jordnötter:'cacahuetes' },
    bs: { kyckling:'piletina', köttfärs:'mljeveno meso', bacon:'slanina', fläsk:'svinjetina', lamm:'janjetina', lax:'losos', räkor:'škampi', torsk:'bakalar', tonfisk:'tuna', tomat:'paradajz', paprika:'paprika', spenat:'špinat', broccoli:'brokula', morötter:'mrkva', potatis:'krompir', pasta:'tjestenina', ris:'riža', ägg:'jaja', ost:'sir', grädde:'vrhnje', lök:'luk', vitlök:'bijeli luk', sötpotatis:'batat', svamp:'gljive', kokosmjölk:'kokosovo mlijeko', soja:'soja sos', ingefära:'đumbir', lime:'limeta', citron:'limun', koriander:'korijander', persilja:'peršin', linser:'leća', kikärtor:'slanutak', bönor:'grah', quinoa:'kvinoja', smör:'maslac', olivolja:'maslinovo ulje', mjölk:'mlijeko', socker:'šećer', honung:'med', tofu:'tofu', halloumi:'halloumi', fetaost:'feta sir', tortilla:'tortilla', fläskfilé:'svinjska fileta', ananas:'ananas', avokado:'avokado', kajmak:'kajmak', pitabröd:'pita', chili:'čili', filodeg:'filo tijesto', yoghurt:'jogurt', nudlar:'rezanci', kål:'kupus', ströbröd:'prezle', gurka:'krastavac', sallad:'salata', jordnötter:'kikiriki' },
  };

  function translateIng(svName) {
    if (currentLang === 'sv') return svName;
    return (ingTranslations[currentLang] || {})[svName] || svName;
  }

  function getQuickCategories() {
    return [
      { label: t('quickMeat'), items: ['kyckling', 'köttfärs', 'bacon', 'fläsk', 'lamm'] },
      { label: t('quickFish'), items: ['lax', 'räkor', 'torsk', 'tonfisk'] },
      { label: t('quickVeg'), items: ['tomat', 'paprika', 'spenat', 'broccoli', 'morötter', 'potatis'] },
      { label: t('quickBasics'), items: ['pasta', 'ris', 'ägg', 'ost', 'grädde', 'lök', 'vitlök'] },
    ];
  }

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
      'Släng in vad du har. Amko fixar resten. (Nästan alltid.)',
      'Du har grejer hemma. Du vet bara inte vad du ska göra med dem.',
      'Från "vi har ju ingenting" till middag på 30 min.',
      'Kylskåpskaos → Middagsmagi.',
      'Amko dömer inte ditt kylskåp. (Okej, lite.)',
      'Billigt, snabbt, gott. Välj alla tre.',
      'Din mamma hade godkänt det här. Typ.',
      'CSN-middag med Michelin-vibbar.',
      'Bättre än att stirra in i kylskåpet i 20 min.',
      'Svaret på frågan du ställer varje dag kl 17.',
      'Du öppnade kylskåpet tre gånger. Det hjälpte inte. Prova det här istället.',
      'Den enda appen som förstår att du har "typ ingenting hemma".',
      'Ja, du kan laga mat. Nej, du behöver inte vara bra på det.',
      'Middag ska inte kräva en existentiell kris.',
      'Häll inte ut pastan igen. Vi har bättre idéer.',
      'Det värsta som kan hända är att det blir gott.',
      'Ingen dömer dig för att äta middag kl 21. Vi hjälper dig ändå.',
      'Dina ingredienser har potential. Du också, förmodligen.',
      'För alla som står i köket och tänker "varför gjorde jag inte detta enklare".',
      'Laga mat som om ingen tittar. För det gör ingen.',
      'Din kylskåpsterapeut sedan 2024.',
      'Räknar kalorier... skoja, det gör vi aldrig.',
      'Det du kallar "tomma skåp" kallar vi en utmaning.',
      'Foodora har semester. Vi har inte det.',
      'Halvt förvuxen zucchini? Vi har recept för det.',
      'Vi dömer inte dina ingredienser. Okej, vi dömer lite.',
      'Panik + pasta = perfektion.',
      'Du förtjänar bättre än fryspizza. (Men ibland är fryspizza okej.)',
      'Tre ingredienser och lite tur — mer behövs inte.',
      'Matlagningstips: börja med att inte panika.',
      'Bättre matlagning genom lägre ambitioner.',
      'Amko ersätter inte din farmor. Men vi försöker.',
      'Ketchup är ingen ingrediens. (Eller?)',
    ],
    en: [
      'Throw in what you have. Amko handles dinner.',
      'You have food at home. You just don\'t know what to do with it.',
      'From "we have nothing" to dinner in 30 min.',
      'Fridge chaos → Culinary genius.',
      'Amko doesn\'t judge your fridge. (Okay, a little.)',
      'Three ingredients. Zero excuses.',
      'Uber Eats closed? We\'re open.',
      'Student budget. Michelin vibes.',
      'Better than staring into your fridge for 20 min.',
      'Skip the ramen. You deserve better. (Sometimes.)',
      'The dinner therapy nobody knew they needed.',
    ],
    es: [
      'Pon lo que tengas. Amko se encarga de la cena.',
      'Tienes comida en casa. Solo no sabes qué hacer con ella.',
      'De "no tenemos nada" a cena en 30 min.',
      'Caos en la nevera → Genialidad culinaria.',
      'Amko no juzga tu nevera. (Bueno, un poco.)',
      'Mejor que mirar la nevera 20 minutos.',
      'Presupuesto de estudiante. Vibras Michelin.',
      'La terapia culinaria que nadie sabía que necesitaba.',
    ],
    bs: [
      'Ubaci šta imaš. Amko rješava večeru.',
      'Imaš hranu kod kuće. Samo ne znaš šta da radiš s njom.',
      'Od "nemamo ništa" do večere za 30 min.',
      'Kaos u frižideru → Kulinarska genijalnost.',
      'Amko ne osuđuje tvoj frižider. (Dobro, malo.)',
      'Bolje nego zuriti u frižider 20 minuta.',
      'Studentski budžet. Michelin vibracije.',
      'Kulinarska terapija koju niko nije znao da treba.',
    ],
  };

  const footerTaglines = {
    sv: ['Lagad med kärlek, kaos och alldeles för mycket vitlök.', 'Inga kockar skadades. Några ägg, dock.', 'Kodad med kaffe. Testad med hunger.', 'Byggt av någon som googlar "hur kokar man ris" ibland.', 'Made in Sweden. Drivs av panik och pasta.', 'Funkar bäst typ kl 17 när stressen slår till.', 'Testad av studenter. Godkänd av mammor. Ifrågasatt av mormödrar.', 'Vi ersätter inte din farmor. Men vi försöker.', 'Amko gör grovjobbet. Du tar åt dig äran.', 'Om det smakar konstigt så följde du inte receptet. Bara så du vet.', 'Gjord av en människa som äter frukost till middag ibland.', 'Inget nyhetsbrev. Ingen premium-version. Bara mat.', 'Du googlade "enkel middag". Vi tog det personligt.', 'Appen som gör att du slipper svara "vet inte" på frågan "vad vill du äta?"', 'Drivs av panik kl 17:00 och koffein kl 08:00.', 'Vi lovar ingenting. Förutom att det blir ätbart. Förmodligen.', 'Sponsrad av alla ensamma morötter i världens kylskåp.', 'Ingen mat skadades. Utvecklarens stolthet, däremot.', 'Gjord av en utvecklare som äter nudlar oftare än hen borde.'],
    en: ['Made with love, chaos, and way too much garlic.', 'No chefs were harmed. A few eggs, though.', 'Coded with coffee. Tested with hunger.', 'Built by someone who googles "how to boil rice" sometimes.', 'Works best at 4:55 PM when panic kicks in.', 'We don\'t replace your grandma. But we try.', 'Like Tinder for food. And you always match.', 'Amko does the heavy lifting. You take the credit.'],
    es: ['Hecho con amor, caos y demasiado ajo.', 'Ningún chef fue lastimado. Algunos huevos sí.', 'Programado con café. Probado con hambre.', 'Funciona mejor a las 16:55 cuando entra el pánico.', 'No reemplazamos a tu abuela. Pero lo intentamos.', 'Como Tinder para comida. Y siempre haces match.'],
    bs: ['Napravljeno s ljubavlju, haosom i previše bijelog luka.', 'Nijedan kuhar nije povrijeđen. Nekoliko jaja jeste.', 'Kodirano uz kafu. Testirano glađu.', 'Najbolje radi u 16:55 kad udari panika.', 'Ne zamjenjujemo tvoju nanu. Ali pokušavamo.', 'Kao Tinder za hranu. I uvijek se matchaš.'],
  };

  const footerIronies = {
    sv: ['Ingen mat skadades. Utvecklaren däremot — den vet vi inte.', 'Om appen krånglar — skylla på vitlöken.', 'Vi tar noll ansvar för matlagningsambitioner kl 23.', 'Den här appen fixar inte disken. Men maten, det kan vi.', 'Ditt kylskåp dömer dig inte. Det gör vi inte heller.', 'Bättre än att googla "vad ska jag laga" för 45:e gången.', 'Disclaimer: Vi tar inget ansvar om du blir bra på att laga mat.', 'Fungerar bäst med låga förväntningar och hög hunger.', 'Ja, du kan frysa in rester. Nej, du kommer inte äta dem.', 'Det är okej att laga samma rätt tre gånger i veckan. Vi berättar inte.', 'Ingen AI ersätter känslan av att bränna vitlöken och börja om.', 'Innehåller spår av ambition och orealistiska portionsberäkningar.', 'Du kommer säga "nästa gång gör jag det från scratch". Du kommer inte göra det.', 'Bieffekter: plötslig matlagningsförmåga och lägre Foodora-räkning.', 'Om du följer receptet och det ändå smakar konstigt — det är karaktär.', 'Garanterat fri från transfetter, men inte från dåliga ordvitsar.', 'Vi vet att du bara läser ingredienslistan och sedan improviserar.', 'Steg 1: Öppna kylskåpet. Steg 2: Stäng kylskåpet. Steg 3: Öppna den här appen.', 'Varning: Kan leda till att vänner börjar fråga dig om middagstips.'],
    en: ['No food was harmed during development. The developer, however...', 'If the app crashes — blame the garlic.', 'Disclaimer: We take no responsibility for cooking ambitions at 11 PM.', 'This app doesn\'t replace a grandma. But it tries.', 'AI-generated recipes. Human panic. Real hunger.', 'Better than googling "what should I cook" for the 45th time.', 'Side effects: sudden cooking skills, boosted confidence, lower Uber Eats bill.', 'Works best with low expectations and high hunger.'],
    es: ['Ningún alimento fue dañado. El desarrollador, sin embargo...', 'Si la app falla — culpa al ajo.', 'Esta app no reemplaza a una abuela. Pero lo intenta.', 'Recetas de IA. Pánico humano. Hambre real.', 'Efectos secundarios: habilidades culinarias repentinas, confianza elevada.', 'Funciona mejor con expectativas bajas y mucha hambre.'],
    bs: ['Nijedna hrana nije oštećena. Programer, međutim...', 'Ako app padne — kriv je bijeli luk.', 'Ova aplikacija ne zamjenjuje nanu. Ali pokušava.', 'AI recepti. Ljudska panika. Prava glad.', 'Nuspojave: iznenadne kulinarske vještine, povećano samopouzdanje.', 'Najbolje radi uz niska očekivanja i veliku glad.'],
  };

  const loadingMessages = {
    sv: ['Amko tänker på vad du ska käka...', 'Mixar dina grejer i molnet...', 'Letar efter recept som funkar med det du har...', 'Räknar vitlöksklyftor (det räcker aldrig)...', 'Kollar vad man kan trolla fram...', 'Hoppas du är hungrig...', 'Konsulterar kökets högre makter...', 'Testar kombinationer som din farmor aldrig hade godkänt...', 'Gör det jobb du borde ha gjort kl 15...', 'Garanterar ingenting men gör sitt bästa...', 'Letar bland tusentals recept efter fyra du faktiskt orkar laga...', 'Amko bläddrar i sin kokbok... (den är digital, lugn)', 'Räknar kalorier... skoja bara, det gör vi aldrig', 'Luktar i ditt kylskåp... digitalt alltså', 'Överväger om pasta räknas som svar på allt...', 'Frågar Gordon Ramsay... nej, vi frågar Amko istället', 'Letar bland recept som inte kräver att du är kock...', 'Sorterar bort allt som tar mer än 45 min... du har ju inte hela dan', 'Funderar på hur man gör guld av dina rester...', 'Dubbelkollar att vitlöken verkligen räcker...'],
    en: ['Amko is thinking about what you should eat', 'Consulting the culinary oracle', 'Mixing ingredients in the cloud', 'Not googling — trusting the AI instead', 'Looking for recipes that don\'t require talent', 'Counting garlic cloves (never enough)'],
    es: ['Amko está pensando qué deberías comer', 'Consultando el oráculo culinario', 'Mezclando ingredientes en la nube', 'Buscando recetas que no requieran talento'],
    bs: ['Amko razmišlja šta da jedeš', 'Konsultuje kulinarski orakul', 'Miješa sastojke u oblaku', 'Traži recepte koji ne zahtijevaju talenat'],
  };

  // ─── Toast messages (with variation) ───
  const toastVariations = {
    favAdded: {
      sv: ['Sparad! Den där är en keeper.', 'In bland favoriterna!', 'Noterat. Du har bra smak.', 'Sparad — bra val.', 'Den håller vi koll på åt dig.', 'Bra val. Den förtjänade det.', 'Sparad. Du kommer tacka dig själv senare.', 'In i hjärtat med den!', 'Den rätten förtjänar kärlek. Och smör.', 'Amko godkänner ditt val.', 'Sparad för framtida "vad ska vi äta"-panik.'],
      en: ['Saved! That one\'s a keeper ❤️', 'Into the favorites vault! 🏆', 'Noted. You have great taste.', 'Saved — Amko approves 👨‍🍳', 'Nice pick. Amko would\'ve done the same.'],
      es: ['¡Guardada! Esa es imperdible ❤️', '¡Al estante de favoritos! 🏆', 'Anotado. Buen gusto.', 'Guardada — Amko aprueba 👨‍🍳'],
      bs: ['Sačuvano! Ta je za čuvanje ❤️', 'U ormar favorita! 🏆', 'Primljeno. Imaš dobar ukus.', 'Sačuvano — Amko odobrava 👨‍🍳'],
    },
    favRemoved: {
      sv: ['Borttagen. Vi pratar aldrig om det igen.', 'Bort med den. Ingen dömer.', 'Raderad. Som om det aldrig hände.', 'Okej, den var kanske inte så bra ändå.', 'Borta. Ibland får man gå vidare.', 'Det är okej att ångra sig. Vi har alla varit där.', 'Avsparkat från favoritlaget.', 'Borta med vinden. Och receptet.', 'Relationen tog slut. Vi önskar er båda lycka till.'],
      en: ['Gone. We don\'t talk about it.', 'Removed. No judgment.', 'Deleted. Like it never happened.', 'Unfavorited. No hard feelings.'],
      es: ['Eliminada. No hablaremos de eso.', 'Quitada. Sin juicio.', 'Borrada. Como si nunca existió.'],
      bs: ['Obrisano. Ne pričamo o tome.', 'Uklonjeno. Bez osude.', 'Izbrisano. Kao da se nije desilo.'],
    },
  };

  // Dynamic toast using translations
  function getToast(key) {
    return t('toast' + key.charAt(0).toUpperCase() + key.slice(1));
  }

  const toastMessages = {
    copied: () => t('toastCopied'),
    favAdded: () => pick(toastVariations.favAdded[currentLang] || toastVariations.favAdded.sv),
    favRemoved: () => pick(toastVariations.favRemoved[currentLang] || toastVariations.favRemoved.sv),
    listSent: () => t('toastListSent'),
    listAdded: () => t('toastListAdded'),
    emptyList: () => t('toastEmptyList'),
    loggedIn: () => t('toastLoggedIn'),
    loggedOut: () => t('toastLoggedOut'),
    magicSent: () => t('toastMagicSent'),
    error: () => t('toastError'),
    pizzaEgg: () => 'Pizza som ingrediens? Beställ istället. Eller... skriv vad du har PÅ pizzan!',
    icaEgg: () => 'Du har hela Ica hemma eller? Vi hittade recept ändå!',
    milestone100: () => 'Sökning nummer 100! Du borde starta en foodblogg vid det här laget.',
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
    if (name === 'inspiration') { renderAmkoPicks(); renderWorldCuisines(); }
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
  function escAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function saveFavorites() { saveStorage('fav_recipes', favorites); }
  function isFav(name) { return favorites.some(f => f.name === name); }

  function showToast(msg) {
    const raw = toastMessages[msg] || msg;
    const text = typeof raw === 'function' ? raw() : raw;
    copyToast.textContent = text;
    copyToast.classList.add('show');
    clearTimeout(copyToast._t);
    const isError = msg === 'error' || String(text).includes('fel') || String(text).includes('wrong') || String(text).includes('error');
    copyToast._t = setTimeout(() => copyToast.classList.remove('show'), isError ? 4000 : 2200);
  }

  function formatTimeAgo(isoString) {
    const diff = Date.now() - new Date(isoString).getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (mins < 1) return t('timeAgoNow');
    if (mins < 60) return `${mins} ${t('timeAgoMin')}`;
    if (hours < 24) return `${hours} ${t('timeAgoHour')}`;
    return `${days}${t('timeAgoDay')}`;
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
    settingsToggle.title = isDark() ? t('darkModeLight') : t('darkModeDark');
    settingsToggle.classList.toggle('dark-active', isDark());
  }

  function updateThemeColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = isDark() ? '#0E0C0A' : '#F7F4EF';
  }

  function toggleDarkMode() {
    haptic();
    if (isDark()) {
      document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem('dark_mode', 'false'); } catch {}
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('dark_mode', 'true'); } catch {}
    }
    updateDarkModeIcon();
    updateThemeColor();
  }

  settingsToggle.addEventListener('click', toggleDarkMode);
  updateDarkModeIcon();
  updateThemeColor();

  // ─── Onboarding ───
  const onboardingOverlay = document.getElementById('onboardingOverlay');

  function closeOnboarding() {
    if (onboardingOverlay) {
      onboardingOverlay.hidden = true;
      document.body.style.overflow = '';
      try { localStorage.setItem('onboarding_seen', 'true'); } catch {}
    }
  }

  // Always register close button listener
  document.getElementById('onboardingClose')?.addEventListener('click', closeOnboarding);

  function showOnboarding() {
    if (localStorage.getItem('onboarding_seen')) return;
    if (onboardingOverlay) {
      onboardingOverlay.hidden = false;
      document.body.style.overflow = 'hidden';
      const logoContainer = document.getElementById('onboardingLogo');
      if (logoContainer) logoContainer.innerHTML = appLogoSVG(64);
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
          const labels = { google: 'Google', apple: 'Apple', email: t('authEmail') };
          providerEl.textContent = labels[provider] || provider;
        }
        if (favCountEl2) favCountEl2.textContent = `${favorites.length} ${t('recipeCountPlural')}`;
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
          <button class="modal-action-btn close-btn" id="closeBtn" aria-label="${t('ariaClose')}">${iconClose}</button>
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
    try { localStorage.setItem('changelog_seen', latest.version); } catch {}
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
      submitBtn.textContent = t('authCreateAccount');
      toggleBtn.innerHTML = t('authHasAccount') + ' <strong>' + t('authLoginHere') + '</strong>';
    } else {
      submitBtn.textContent = t('authLogin');
      toggleBtn.innerHTML = t('authNoAccount') + ' <strong>' + t('authCreateHere') + '</strong>';
    }
  });

  // Email + Password sign in / sign up
  document.getElementById('authSubmit')?.addEventListener('click', async () => {
    const emailInput = document.getElementById('authEmail');
    const passwordInput = document.getElementById('authPassword');
    const email = emailInput?.value?.trim();
    const password = passwordInput?.value;
    if (!email || !password) {
      showToast(t('toastAuthEmail'));
      return;
    }
    if (password.length < 6) {
      showToast(t('toastAuthShort'));
      return;
    }

    const submitBtn = document.getElementById('authSubmit');
    submitBtn.disabled = true;
    submitBtn.textContent = authIsSignUp ? t('authCreating') : t('authLoggingIn');

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
      const msg = e?.message || '';
      if (msg.includes('Invalid login credentials')) showToast(t('toastAuthWrong'));
      else if (msg.includes('already registered') || msg.includes('already exists')) showToast(t('toastAuthExists'));
      else if (msg.includes('Email not confirmed')) showToast(t('toastAuthConfirm'));
      else if (msg.includes('rate limit') || msg.includes('too many')) showToast(t('toastAuthRate'));
      else showToast('error');
      console.error('Auth error:', e);
    }
    submitBtn.disabled = false;
    submitBtn.textContent = authIsSignUp ? t('authCreateAccount') : t('authLogin');
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
    if (!confirm(t('authDeleteConfirm'))) return;
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
    if (prefs.has(pref)) { prefs.delete(pref); chip.classList.remove('active'); chip.setAttribute('aria-pressed', 'false'); }
    else { prefs.add(pref); chip.classList.add('active'); chip.setAttribute('aria-pressed', 'true'); }
  });
  // Init aria-pressed on pref chips
  document.querySelectorAll('.pref-chip').forEach(c => c.setAttribute('aria-pressed', 'false'));

  // ─── Search Portions ───
  const spMinus = document.getElementById('spMinus');
  const spPlus = document.getElementById('spPlus');
  function updatePortionBtns() {
    if (spMinus) spMinus.disabled = searchPortions <= 1;
    if (spPlus) spPlus.disabled = searchPortions >= 20;
    document.getElementById('spNum').textContent = searchPortions;
  }
  spMinus?.addEventListener('click', () => {
    if (searchPortions > 1) { searchPortions--; updatePortionBtns(); haptic(); }
  });
  spPlus?.addEventListener('click', () => {
    if (searchPortions < 20) { searchPortions++; updatePortionBtns(); haptic(); }
  });
  updatePortionBtns();

  // ─── Quick picks ───
  function renderQuickPicks() {
    quickPicks.innerHTML = getQuickCategories().map(cat => `
      <div class="quick-category">
        <div class="quick-category-label">${cat.label}</div>
        <div class="quick-category-chips">
          ${cat.items.map(item => {
            const used = ingredients.includes(item) ? ' used' : '';
            return `<button class="quick-chip${used}" data-ing="${esc(item)}">${esc(translateIng(item))}</button>`;
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
      // Input validation: max 50 chars per ingredient, max 30 ingredients, only text chars
      const sanitized = p.replace(/[<>"'&]/g, '').slice(0, 50);
      if (sanitized && !ingredients.includes(sanitized) && ingredients.length < 30) {
        ingredients.push(sanitized);
      }
    });
    ingInput.value = '';
    clearSuggestions();
    render();
    ingInput.focus();

    // Easter egg: pizza as only ingredient
    if (ingredients.length === 1 && ingredients[0] === 'pizza') {
      showToast('pizzaEgg');
    }
    // Easter egg: >10 ingredients
    if (ingredients.length > 10 && !window.__icaEggShown) {
      window.__icaEggShown = true;
      showToast('icaEgg');
    }
  }

  function removeIng(idx) { ingredients.splice(idx, 1); render(); }

  function render() {
    tagsEl.innerHTML = ingredients.map((ing, i) =>
      `<span class="tag">${esc(translateIng(ing))}<button aria-label="${t('removeItem')} ${esc(translateIng(ing))}" data-idx="${i}">×</button></span>`
    ).join('');
    // Add clear-all button when 3+ ingredients
    const clearAllBtn = tagsEl.querySelector('.clear-all-ings');
    if (ingredients.length >= 3 && !clearAllBtn) {
      const btn = document.createElement('button');
      btn.className = 'clear-all-ings';
      btn.textContent = t('clearAllIngs');
      btn.addEventListener('click', () => { ingredients = []; render(); });
      tagsEl.appendChild(btn);
    }
    searchBtn.disabled = ingredients.length === 0;
    const hint = document.getElementById('searchBtnHint');
    if (hint) hint.style.display = ingredients.length === 0 ? '' : 'none';
    renderQuickPicks();
    updateFavBadge();
    updateListBadge();
  }

  function updateFavBadge() {
    const count = favorites.length;
    if (favBadge) favBadge.textContent = count > 0 ? count : '';
    if (favCountEl) favCountEl.textContent = `${count} ${count === 1 ? t('recipeCountSingular') : t('recipeCountPlural')}`;
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

  let suggestionIdx = -1;
  ingInput.addEventListener('input', () => { suggestionIdx = -1; showSuggestions(ingInput.value.trim()); });
  ingInput.addEventListener('blur', () => setTimeout(clearSuggestions, 150));
  ingInput.addEventListener('keydown', e => {
    if (!ingSuggestions || ingSuggestions.hidden) return;
    const items = ingSuggestions.querySelectorAll('.suggestion-item');
    if (!items.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      suggestionIdx = Math.min(suggestionIdx + 1, items.length - 1);
      items.forEach((it, i) => { it.classList.toggle('active', i === suggestionIdx); it.setAttribute('aria-selected', i === suggestionIdx); });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      suggestionIdx = Math.max(suggestionIdx - 1, 0);
      items.forEach((it, i) => { it.classList.toggle('active', i === suggestionIdx); it.setAttribute('aria-selected', i === suggestionIdx); });
    } else if (e.key === 'Enter' && suggestionIdx >= 0) {
      e.preventDefault();
      const val = items[suggestionIdx]?.dataset.val;
      if (val && !ingredients.includes(val)) { ingredients.push(val); ingInput.value = ''; clearSuggestions(); render(); ingInput.focus(); }
      suggestionIdx = -1;
    }
  });

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
    saveStorage('search_history', searchHistory);
    renderHistory();
  }

  function renderHistory() {
    if (!searchHistory.length) { historySection.innerHTML = ''; return; }
    const count = searchHistory.length;
    const historyLabel = count === 1
      ? 'Du har sökt 1 gång — tryck för att återskapa ditt recept'
      : `Du har sökt ${count} gånger — Amko minns allt`;
    historySection.innerHTML = `
      <div class="history-section">
        <div class="history-header">
          <div class="history-title">${iconClock} ${t('historyTitle')}</div>
          <button class="history-clear-btn" id="historyClearBtn">${t('historyClear')}</button>
        </div>
        <p class="history-section-label">${historyLabel}</p>
        ${searchHistory.slice(0, 5).map(entry => `
          <div class="history-item" data-hid="${entry.id}">
            <div class="history-ings">${entry.ingredients.map(i => esc(translateIng(i))).join(', ')}</div>
            <div class="history-time">${formatTimeAgo(entry.timestamp)} ${iconArrow}</div>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('historyClearBtn').addEventListener('click', () => {
      searchHistory = [];
      localStorage.removeItem('search_history');
      renderHistory();
      showToast(t('historyCleared'));
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
          // Results shown in overlay — no scroll needed
        }
      });
    });
  }

  // ─── Shopping List ───
  function saveShoppingList() {
    saveStorage('shopping_list', shoppingList);
    updateListBadge();
  }

  function parseQuantity(str) {
    const m = str.match(/^(\d+(?:[.,]\d+)?)\s*(g|kg|dl|cl|ml|l|st|msk|tsk|krm)\b\s+(.+)$/i);
    if (m) return { qty: parseFloat(m[1].replace(',', '.')), unit: m[2].toLowerCase(), ingredient: m[3].trim().toLowerCase() };
    return null;
  }

  function addToShoppingList(ingredientList, recipeName) {
    let added = 0;
    let merged = 0;
    ingredientList.forEach(ing => {
      const name = ing.trim();
      if (!name) return;
      const parsed = parseQuantity(name);
      if (parsed) {
        const existing = shoppingList.find(item => {
          const ep = parseQuantity(item.name);
          return ep && ep.unit === parsed.unit && ep.ingredient === parsed.ingredient;
        });
        if (existing) {
          const ep = parseQuantity(existing.name);
          const newQty = ep.qty + parsed.qty;
          const fmtQty = newQty % 1 === 0 ? String(newQty) : newQty.toFixed(1);
          existing.name = `${fmtQty} ${ep.unit} ${parsed.ingredient}`;
          if (recipeName && existing.recipe && !existing.recipe.includes(recipeName)) {
            existing.recipe += `, ${recipeName}`;
          }
          merged++;
          return;
        }
      }
      if (!shoppingList.some(item => item.name.toLowerCase() === name.toLowerCase())) {
        shoppingList.push({ id: Date.now() + Math.random(), name, checked: false, recipe: recipeName || '' });
        added++;
      }
    });
    saveShoppingList();
    if (added > 0 || merged > 0) {
      showToast('listAdded');
      haptic('medium');
    } else {
      showToast(t('toastAlreadyInList'));
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
        ? t('listRemaining').replace('{unchecked}', uncheckedCount).replace('{total}', shoppingList.length)
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
      const key = item.recipe || t('otherItems');
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
              <button class="list-item-remove" data-rm="${item.index}" aria-label="${t('removeItem')}">×</button>
            </label>
          `).join('')}
        </div>
      `).join('');
      // Event delegation is set up once below via _shoppingDelegated
    }
  }

  // Shopping list event delegation (set up once, avoids memory leak from per-render listeners)
  const shoppingListContent = document.getElementById('shoppingListContent');
  if (shoppingListContent) {
    shoppingListContent.addEventListener('change', e => {
      const cb = e.target.closest('.list-checkbox');
      if (!cb) return;
      const idx = Number(cb.dataset.idx);
      if (shoppingList[idx]) {
        shoppingList[idx].checked = cb.checked;
        saveShoppingList();
        haptic();
        const scrollY = shoppingListContent.parentElement?.scrollTop || window.scrollY;
        renderShoppingView();
        requestAnimationFrame(() => {
          if (shoppingListContent.parentElement?.scrollTop !== undefined) shoppingListContent.parentElement.scrollTop = scrollY;
          else window.scrollTo(0, scrollY);
        });
      }
    });
    shoppingListContent.addEventListener('click', e => {
      const btn = e.target.closest('.list-item-remove');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      const idx = Number(btn.dataset.rm);
      if (idx >= 0 && idx < shoppingList.length) {
        shoppingList.splice(idx, 1);
        saveShoppingList();
        renderShoppingView();
      }
    });
  }

  // Clear list button
  document.getElementById('clearList')?.addEventListener('click', () => {
    if (!shoppingList.length) return;
    shoppingList = [];
    saveShoppingList();
    renderShoppingView();
    showToast(t('toastListCleared'));
  });

  // Share shopping list
  // Manual add to shopping list
  const manualListInput = document.getElementById('manualListInput');
  const manualListAddBtn = document.getElementById('manualListAddBtn');
  function addManualListItem() {
    const val = manualListInput?.value.trim();
    if (!val) return;
    val.split(',').forEach(part => {
      const name = part.trim().replace(/[<>"'&]/g, '').slice(0, 100);
      if (name && !shoppingList.some(item => item.name.toLowerCase() === name.toLowerCase())) {
        shoppingList.push({ id: Date.now() + Math.random(), name, checked: false, recipe: t('otherItems') });
      }
    });
    manualListInput.value = '';
    saveShoppingList();
    renderShoppingView();
    haptic();
  }
  manualListAddBtn?.addEventListener('click', addManualListItem);
  manualListInput?.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); addManualListItem(); } });

  document.getElementById('sendList')?.addEventListener('click', () => shareShoppingList());

  function getListText() {
    const unchecked = shoppingList.filter(i => !i.checked);
    const byRecipe = {};
    unchecked.forEach(item => {
      const key = item.recipe || t('otherItems');
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
        await navigator.share({ title: t('shareTitle'), text });
        return;
      }
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
    try {
      await navigator.clipboard.writeText(text);
      showToast('copied');
    } catch { showToast(t('toastCantShare')); }
  }

  // ─── Find Recipes ───
  function getCacheKey() {
    return JSON.stringify({
      ings: [...ingredients].sort().join(','),
      portions: searchPortions,
      prefs: [...prefs].sort().join(',')
    });
  }

  let isFetching = false;
  async function findRecipes() {
    if (isFetching) return;
    const isFreetext = searchMode === 'freetext' && freetextInput?.value.trim();
    if (!isFreetext && !ingredients.length) return;
    if (isFreetext && !freetextInput.value.trim()) return;

    // Skip early offline block — let the fetch attempt proceed and handle network errors gracefully.
    // navigator.onLine is unreliable on mobile (false positives after sleep/network switch).

    const cacheKey = isFreetext ? `freetext:${freetextInput.value.trim()}:${searchPortions}:${[...prefs].sort().join(',')}` : getCacheKey();
    if (recipeCache.has(cacheKey)) {
      const cached = recipeCache.get(cacheKey);
      recipes = sortRecipesByDifficulty(cached.recipes || cached);
      lastChefComment = cached.chef_comment || '';
      lastMissingGlobally = cached.missing_globally || [];
      lastSuggestedSwaps = cached.suggested_swaps || [];
      renderRecipes();
      showToast(t('toastFromCache'));
      // Results shown in overlay — no scroll needed
      return;
    }

    // Update button to loading state
    const originalBtnText = searchBtn.textContent;
    isFetching = true;
    searchBtn.disabled = true;
    searchBtn.innerHTML = `<span class="search-btn-spinner"></span> ${t('searchingText')}`;
    searchBtn.setAttribute('aria-busy', 'true');

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

    const maxRetries = 2;
    let lastError = null;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        if (attempt > 0) {
          const delay = Math.min(1000 * Math.pow(2, attempt), 10000);
          await new Promise(r => setTimeout(r, delay));
          loadingEl.querySelector('.loading-label').innerHTML =
            `${t('retryingText').replace('{attempt}', attempt + 1).replace('{total}', maxRetries + 1)}<span class="loading-dots"></span>`;
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000);

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
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!res.ok) {
          if (res.status === 429) throw new Error('rate_limit');
          if (res.status === 401 || res.status === 403) throw new Error(t('errorReload'));
          if (res.status >= 500) throw new Error('server');
          throw new Error(t('errorNetwork'));
        }

        const data = await res.json();
        if (data.error) throw new Error(data.error?.message || data.error || t('errorApiError'));

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
          // Remove trailing incomplete strings/keys (truncated mid-value)
          fixed = fixed.replace(/,\s*"[^"]*$/, '');
          fixed = fixed.replace(/,\s*$/, '');
          // Remove incomplete key-value pairs
          fixed = fixed.replace(/,\s*"[^"]*"\s*:\s*("[^"]*)?$/, '');

          // Smart bracket closing — iterate and try parsing
          const closers = [']', '}'];
          for (let attempts = 0; attempts < 10; attempts++) {
            try {
              parsed = JSON.parse(fixed);
              break;
            } catch (parseErr) {
              // Analyze error to determine what's missing
              const errMsg = parseErr.message || '';
              if (errMsg.includes('Expected')) {
                // Try closing the most likely bracket
                const openBraces = (fixed.match(/\{/g) || []).length - (fixed.match(/\}/g) || []).length;
                const openBrackets = (fixed.match(/\[/g) || []).length - (fixed.match(/\]/g) || []).length;
                if (openBrackets > 0) fixed += ']';
                else if (openBraces > 0) fixed += '}';
                else break;
              } else break;
            }
          }

          if (!parsed) {
            throw new Error('parse_error');
          }
        }

        recipes = sortRecipesByDifficulty(parsed.recipes || []);
        if (!recipes.length) throw new Error(t('errorNoRecipes'));

        lastChefComment = parsed.chef_comment || '';
        lastMissingGlobally = parsed.missing_globally || [];
        lastSuggestedSwaps = parsed.suggested_swaps || [];

        cacheSet(cacheKey, parsed);
        renderRecipes();
        initTilt(recipeList);
        saveToHistory(ingredients, recipes);

        // Easter egg: 100th search milestone
        let searchCount = parseInt(localStorage.getItem('total_search_count') || '0', 10) + 1;
        localStorage.setItem('total_search_count', String(searchCount));
        if (searchCount === 100) {
          showToast('milestone100');
        }

        // Update URL with shareable search params
        if (!isFreetext && ingredients.length) {
          const params = new URLSearchParams();
          params.set('ings', ingredients.join(','));
          if (prefs.size) params.set('prefs', [...prefs].join(','));
          if (searchPortions !== 4) params.set('portions', searchPortions);
          history.replaceState(null, '', `?${params.toString()}#search`);
        }

        // Results shown in overlay — no scroll needed
        lastError = null;
        break;

      } catch (e) {
        lastError = e;
        console.error(`Recipe fetch attempt ${attempt + 1} error:`, e);
        // Detect network errors (TypeError from fetch when offline)
        if (e instanceof TypeError && !navigator.onLine) {
          lastError = new Error('network');
          break;
        }
        // Only retry on parse errors, server errors, or timeouts
        if (e.message !== 'parse_error' && e.message !== 'server' && e.name !== 'AbortError') break;
        if (attempt >= maxRetries) break;
      }
    }

    if (lastError) {
      const errorMessages = {
        parse_error: t('errorParseError'),
        server: t('errorServer'),
        rate_limit: t('errorRateLimit'),
        network: t('errorNetwork'),
      };
      const msg = lastError.name === 'AbortError'
        ? t('errorTimeout')
        : errorMessages[lastError.message] || lastError.message;
      errBox.innerHTML = `${esc(msg)} <button class="retry-btn" id="retryBtn">${t('retryBtn')}</button>`;
      errBox.style.display = 'block';
      document.getElementById('retryBtn')?.addEventListener('click', () => { errBox.style.display = 'none'; findRecipes(); });
    }

    loadingEl.style.display = 'none';
    // Restore button state
    if (searchMode === 'freetext') {
      searchBtn.disabled = !freetextInput?.value.trim();
    } else {
      searchBtn.disabled = ingredients.length === 0;
    }
    searchBtn.textContent = originalBtnText;
    searchBtn.removeAttribute('aria-busy');
    isFetching = false;
  }

  searchBtn.addEventListener('click', () => { haptic('medium'); findRecipes(); });

  // ─── SW Update Notification ───
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', event => {
      if (event.data && event.data.type === 'SW_UPDATED') {
        showToast(t('errorNewVersion'));
      }
    });
  }

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
      searchModeTabs.querySelectorAll('.search-mode-tab').forEach(t => { t.classList.toggle('active', t === tab); t.setAttribute('aria-selected', t === tab); });
      if (ingredientMode) ingredientMode.hidden = searchMode !== 'ingredients';
      if (freetextMode) freetextMode.hidden = searchMode !== 'freetext';
      // Focus the newly visible input
      if (searchMode === 'freetext') {
        searchBtn.disabled = !freetextInput?.value.trim();
        setTimeout(() => freetextInput?.focus(), 100);
      } else {
        searchBtn.disabled = ingredients.length === 0;
        setTimeout(() => ingInput?.focus(), 100);
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

  // ─── Results Overlay ───
  const resultsOverlay = document.getElementById('resultsOverlay');
  const resultsBody = document.getElementById('resultsBody');
  const resultsTitle = document.getElementById('resultsTitle');

  function openResultsOverlay() {
    if (resultsOverlay) {
      resultsOverlay.hidden = false;
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResultsOverlay() {
    if (resultsOverlay) {
      resultsOverlay.hidden = true;
      document.body.style.overflow = '';
    }
  }

  document.getElementById('resultsClose')?.addEventListener('click', closeResultsOverlay);

  // ─── Render Recipes ───
  let lastSortedRecipes = [];
  function renderRecipes() {
    if (!recipes.length) { if (resultsBody) resultsBody.innerHTML = ''; recipeList.innerHTML = ''; return; }

    const sorted = sortRecipesList(recipes, recipeSort);
    lastSortedRecipes = sorted;

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
      headerHTML += `<div class="tips-banner-title">🛒 ${t('tipsBefore')}</div>`;
      if (lastMissingGlobally.length) {
        headerHTML += `
          <div class="missing-globally">
            <span class="missing-icon">${iconShop}</span>
            <span class="missing-label">${t('buyAlso')}</span>
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

    const resultsHTML = `
      <div class="recipes-container">
      <div class="recipes-header">
        <div class="recipes-title">🍽️ ${t('recipesFound').replace('{count}', recipes.length)}</div>
        <div class="recipes-subtitle">${t('recipesHint')}</div>
      </div>
      <div class="recipe-sort-bar">
        <span class="recipe-sort-label">${t('sortLabel')}</span>
        <button class="recipe-sort-btn${recipeSort === 'difficulty' ? ' active' : ''}" data-sort="difficulty">${t('sortDifficulty')}</button>
        <button class="recipe-sort-btn${recipeSort === 'time' ? ' active' : ''}" data-sort="time">${t('sortTime')}</button>
        <button class="recipe-sort-btn${recipeSort === 'name' ? ' active' : ''}" data-sort="name">${t('sortName')}</button>
      </div>
      ${headerHTML}
    ` + sorted.map((r, i) => {
      const rating = ratings[r.name] || 0;
      const tag = r.tag || '';
      return `
        <div class="recipe-card" data-idx="${i}" role="button" tabindex="0" aria-label="${esc(r.name)} — ${esc(r.difficulty)}, ${esc(r.time)}">
          ${tag ? `<span class="recipe-tag ${tagClass(tag)}">${esc(tag)}</span>` : ''}
          <div class="recipe-top">
            <div class="recipe-name">${esc(r.name)}</div>
            <button class="fav-btn${isFav(r.name) ? ' active' : ''}" data-fav="${i}" aria-label="${t('recipeFav')}">${iconHeart(isFav(r.name))}</button>
          </div>
          <div class="badges">
            <span class="badge">${iconClock} ${esc(r.time)}</span>
            <span class="badge ${difficultyClass(r.difficulty)}">${esc(r.difficulty)}</span>
            <span class="badge">${(r.ingredients || []).length} ${t('ingredientCount')}</span>
            ${r.nutrition_per_serving?.highlight ? `<span class="badge nutrition-hl">${esc(r.nutrition_per_serving.highlight)}</span>` : ''}
            ${rating > 0 ? `<span class="badge rated">${'★'.repeat(rating)}</span>` : ''}
          </div>
          <div class="recipe-desc">${esc(r.description)}</div>
          ${r.week_tip ? `<div class="recipe-week-tip">${esc(r.week_tip)}</div>` : ''}
          <div class="see-more">${t('seeRecipe')}</div>
        </div>
      `;
    }).join('') + '</div>' + `
      <div class="results-retry-row">
        <button class="results-retry-btn" id="retrySearchBtn">${t('retrySearch') || 'Inget passade? Sök igen'}</button>
      </div>
    `; // close recipes-container

    // Render in results overlay
    if (resultsBody) {
      resultsBody.innerHTML = resultsHTML;
      document.getElementById('retrySearchBtn')?.addEventListener('click', () => {
        closeResultsOverlay();
        document.getElementById('ingInput')?.focus();
      });
      if (resultsTitle) resultsTitle.textContent = `${recipes.length} ${t('recipeCountPlural')}`;
      openResultsOverlay();
    } else {
      recipeList.innerHTML = resultsHTML;
    }
  }

  // Click handler for results (works for both overlay and inline)
  function handleRecipeListClick(e) {
    // Sort buttons
    const sortBtn = e.target.closest('.recipe-sort-btn');
    if (sortBtn) {
      recipeSort = sortBtn.dataset.sort;
      haptic();
      renderRecipes();
      return;
    }
    const favBtn = e.target.closest('.fav-btn');
    if (favBtn) {
      e.stopPropagation();
      const fi = Number(favBtn.dataset.fav);
      const sortedR = lastSortedRecipes[fi];
      toggleFavorite(sortedR || recipes[fi]);
      renderRecipes(); renderFavView(); return;
    }
    const card = e.target.closest('.recipe-card');
    if (card) {
      const idx = Number(card.dataset.idx);
      // Map sorted index back to original recipes array
      const sortedRecipe = lastSortedRecipes[idx];
      if (sortedRecipe) {
        const realIdx = recipes.findIndex(r => r.name === sortedRecipe.name);
        openRecipe(realIdx >= 0 ? realIdx : idx);
      } else {
        openRecipe(idx);
      }
    }
  }

  recipeList.addEventListener('click', handleRecipeListClick);
  if (resultsBody) resultsBody.addEventListener('click', handleRecipeListClick);

  // Keyboard support for recipe cards (Enter/Space)
  function handleRecipeListKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.recipe-card');
      if (card && e.target === card) {
        e.preventDefault();
        card.click();
      }
    }
  }
  recipeList.addEventListener('keydown', handleRecipeListKeydown);
  if (resultsBody) resultsBody.addEventListener('keydown', handleRecipeListKeydown);

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
      if (!sessionConfettiFired) { fireConfetti(); sessionConfettiFired = true; }
    }
    saveFavorites();
    updateFavBadge();
  }

  let favFilter = 'all';

  let favSearchQuery = '';
  const favSearchInput = document.getElementById('favSearchInput');
  const favSearchWrapper = document.getElementById('favSearchWrapper');
  if (favSearchInput) {
    favSearchInput.addEventListener('input', () => {
      favSearchQuery = favSearchInput.value.trim().toLowerCase();
      renderFavView();
    });
  }

  function renderFavView() {
    if (!favGrid || !favsEmpty) return;
    updateFavBadge();
    const favFilterEl = document.getElementById('favFilterChips');
    if (!favorites.length) {
      favsEmpty.style.display = '';
      favGrid.innerHTML = '';
      if (favFilterEl) favFilterEl.innerHTML = '';
      if (favSearchWrapper) favSearchWrapper.style.display = 'none';
      return;
    }
    favsEmpty.style.display = 'none';
    if (favSearchWrapper) favSearchWrapper.style.display = favorites.length >= 3 ? '' : 'none';

    // Render filter chips
    if (favFilterEl && favorites.length) {
      const tags = [...new Set(favorites.map(f => f.difficulty).filter(Boolean))];
      favFilterEl.innerHTML = `
        <button class="fav-filter-chip${favFilter === 'all' ? ' active' : ''}" data-filter="all">${t('filterAll')} (${favorites.length})</button>
        ${tags.map(tag => {
          const count = favorites.filter(f => f.difficulty === tag).length;
          return `<button class="fav-filter-chip${favFilter === tag ? ' active' : ''}" data-filter="${esc(tag)}">${esc(tag)} (${count})</button>`;
        }).join('')}
      `;
    } else if (favFilterEl) {
      favFilterEl.innerHTML = '';
    }

    let filteredFavs = favFilter === 'all' ? favorites : favorites.filter(f => f.difficulty === favFilter);
    if (favSearchQuery) filteredFavs = filteredFavs.filter(f => f.name.toLowerCase().includes(favSearchQuery));
    favGrid.innerHTML = filteredFavs.map((f, i) => {
      const realIdx = favorites.indexOf(f);
      return `
      <div class="fav-card" data-fav-open="${realIdx}">
        <div class="fav-card-info">
          <div class="fav-card-name">${esc(f.name)}</div>
          <div class="fav-card-meta">${esc(f.time || '')} · ${esc(f.difficulty || '')}</div>
        </div>
        <div class="fav-card-actions">
          <button class="fav-action-btn delete" data-fav-rm="${realIdx}" aria-label="${t('removeItem')}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    `}).join('');
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
      if (card) {
        const favIdx = Number(card.dataset.favOpen);
        const favRecipe = favorites[favIdx];
        if (favRecipe) {
          const savedRecipes = recipes;
          try {
            recipes = [...favorites];
            openRecipe(favIdx);
          } finally {
            recipes = savedRecipes;
          }
        }
      }
    });
  }

  document.getElementById('favFilterChips')?.addEventListener('click', e => {
    const chip = e.target.closest('.fav-filter-chip');
    if (!chip) return;
    favFilter = chip.dataset.filter;
    renderFavView();
  });

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

  let recipeSort = 'difficulty'; // 'difficulty' | 'time' | 'name'

  function parseTime(timeStr) {
    const m = (timeStr || '').match(/(\d+)/);
    return m ? parseInt(m[1]) : 999;
  }

  function sortRecipesByDifficulty(recipeList) {
    return [...recipeList].sort((a, b) => difficultyOrder(a.difficulty) - difficultyOrder(b.difficulty));
  }

  function sortRecipesList(list, by) {
    if (by === 'time') return [...list].sort((a, b) => parseTime(a.time) - parseTime(b.time));
    if (by === 'name') return [...list].sort((a, b) => (a.name || '').localeCompare(b.name || '', 'sv'));
    return sortRecipesByDifficulty(list);
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
        <summary class="substitutions-toggle">💡 ${t('missingSomething')}</summary>
        <div class="substitutions-list">
          ${r.substitutions.map(s => `<p class="substitution-item">${esc(s)}</p>`).join('')}
        </div>
      </details>
    ` : '';

    // Missing ingredients
    const missingHTML = (r.missing_ingredients && r.missing_ingredients.length && r.missing_ingredients[0] !== 'Du har allt!') ? `
      <div class="missing-ing-row">
        <span class="missing-ing-label">${t('missingLabel')}</span>
        ${r.missing_ingredients.map(m => `<span class="missing-ing-chip">${esc(m)}</span>`).join('')}
      </div>
    ` : '';

    modal.innerHTML = `
      <div class="modal-top">
        <div class="modal-title">${esc(r.name)}</div>
        <div class="modal-actions">
          <button class="modal-action-btn" id="copyBtn" aria-label="${t('recipeCopy')}" title="${t('recipeCopy')}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </button>
          <button class="modal-action-btn" id="shareBtn" aria-label="${t('recipeShare')}" title="${t('recipeShare')}">${iconShare}</button>
          <button class="modal-action-btn" id="printBtn" aria-label="${t('recipePrint')}" title="${t('recipePrint')}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
            </svg>
          </button>
          <button class="modal-action-btn close-btn" id="closeBtn" aria-label="${t('ariaClose')}">${iconClose}</button>
        </div>
      </div>

      ${r.tag ? `<span class="recipe-tag modal-tag ${tagClass(r.tag)}">${esc(r.tag)}</span>` : ''}

      <div class="badges modal-badges">
        <span class="badge">${iconClock} ${esc(r.time)}</span>
        <span class="badge ${difficultyClass(r.difficulty)}">${esc(r.difficulty)}</span>
      </div>
      ${r.difficulty_reason ? `<div class="difficulty-reason">${esc(r.difficulty_reason)}</div>` : ''}
      <div class="recipe-desc">${esc(r.description)}</div>

      <button class="cook-mode-start-btn" id="startCookMode">
        ${t('recipeCookMode')}
      </button>

      ${missingHTML}

      <div class="portions-row">
        <span class="portions-label">${t('portions')}</span>
        <div class="portions-ctrl">
          <button id="portMinus" aria-label="${t('ariaDecrease')}">-</button>
          <span class="portions-num" id="portNum">${portions}</span>
          <button id="portPlus" aria-label="${t('ariaIncrease')}">+</button>
        </div>
      </div>

      <div class="section-lbl">${t('ingredients')} <button class="copy-ings-btn" id="copyIngsBtn" title="${t('copyIngList')}">📋</button></div>
      <div id="modalIngredients">
        ${(r.ingredients || []).map(ing => `<div class="ing-item"><span class="dot"></span>${esc(ing)}</div>`).join('')}
      </div>

      ${nutritionHTML}
      ${subsHTML}

      <div class="section-lbl">${t('steps')}</div>
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
        ${iconShop} ${t('addToShopBtn')}
      </button>

      ${r.leftovers_tip ? `<div class="leftovers-banner">♻️ ${esc(r.leftovers_tip)}</div>` : ''}

      ${r.drink_pairing ? `
      <div class="drink-pairing">
        <div class="drink-pairing-title">🍷 ${t('drinkPairingTitle')}</div>
        <div class="drink-pairing-items">
          ${r.drink_pairing.wine ? `<div class="drink-pairing-item"><span class="drink-pairing-icon">🍷</span> ${esc(r.drink_pairing.wine)}</div>` : ''}
          ${r.drink_pairing.beer ? `<div class="drink-pairing-item"><span class="drink-pairing-icon">🍺</span> ${esc(r.drink_pairing.beer)}</div>` : ''}
          ${r.drink_pairing.non_alcoholic ? `<div class="drink-pairing-item"><span class="drink-pairing-icon">🥤</span> ${esc(r.drink_pairing.non_alcoholic)}</div>` : ''}
        </div>
      </div>
      ` : ''}

      <div class="rating-row">
        <span class="rating-label">${t('rateRecipe')}</span>
        <div class="stars" id="stars" role="group" aria-label="${t('rateRecipe')}">
          ${[1,2,3,4,5].map(n => `
            <button class="star-btn${n <= currentRating ? ' active' : ''}" data-star="${n}" role="radio" aria-checked="${n <= currentRating}" aria-label="${t('ratingScore').replace('{score}', n)}" title="${t('ratingScore').replace('{score}', n)}">★</button>
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
      catch { showToast(t('toastCantCopy')); }
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
      catch { showToast(t('toastShareNA')); }
    });

    // Print
    document.getElementById('printBtn').addEventListener('click', () => window.print());

    // Copy ingredients list
    document.getElementById('copyIngsBtn')?.addEventListener('click', async () => {
      const text = (r.ingredients || []).map(ing => scaleIngredient(ing, originalServings, portions)).join('\n');
      try { await navigator.clipboard.writeText(text); showToast('copied'); }
      catch { showToast(t('toastCantCopy')); }
    });

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
      saveStorage('recipe_ratings', ratings);
      starsEl.querySelectorAll('.star-btn').forEach((s, i) => s.classList.toggle('active', i < star));
      showToast(star === 5 ? t('ratingTopScore') : t('ratingScore').replace('{score}', star));
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

    // Focus trap
    trapFocus(modal);
  }

  let previouslyFocused = null;
  function trapFocus(container) {
    previouslyFocused = document.activeElement;
    // Query focusable elements dynamically each time Tab is pressed
    // to handle dynamic content changes inside the modal
    function getFocusable() {
      return container.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
    }
    const initial = getFocusable();
    if (initial.length) initial[0].focus();
    container._trapHandler = (e) => {
      if (e.key !== 'Tab') return;
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    container.addEventListener('keydown', container._trapHandler);
  }
  function releaseFocus(container) {
    if (container._trapHandler) { container.removeEventListener('keydown', container._trapHandler); delete container._trapHandler; }
    if (previouslyFocused && previouslyFocused.focus) {
      try { previouslyFocused.focus(); } catch {}
      previouslyFocused = null;
    }
  }

  function recipeToText(r) {
    const ingText  = (r.ingredients || []).map(x => `  - ${x}`).join('\n');
    const stepText = (r.steps || []).map((s, i) => `  ${i + 1}. ${typeof s === 'string' ? s : (s.instruction || '')}`).join('\n');
    return `${r.name}\n${r.time} | ${r.difficulty} | ${r.servings || 4} ${t('portionLabel')}\n\n${r.description}\n\n${t('ingredients')}:\n${ingText}\n\n${t('steps')}:\n${stepText}`;
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    releaseFocus(modal);
  }

  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeAuthModal(); closeCookMode(); closeResultsOverlay(); }
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
    if (!steps.length) return;
    const body = document.getElementById('cookModeBody');
    const indicator = document.getElementById('cookModeStepIndicator');
    const prevBtn = document.getElementById('cookModePrev');
    const nextBtn = document.getElementById('cookModeNext');
    if (!body || !indicator || !prevBtn || !nextBtn) return;

    indicator.textContent = t('cookModeStepOf').replace('{current}', cookModeStep + 1).replace('{total}', steps.length);

    const step = steps[cookModeStep];
    const stepText = typeof step === 'string' ? step : (step?.instruction || '');
    const stepTip = typeof step === 'object' ? step?.tip : '';

    const ingsHTML = (cookModeRecipe.ingredients || []).map(ing => `<div class="cook-mode-ing-item">${esc(ing)}</div>`).join('');
    body.innerHTML = `
      <details class="cook-mode-ingredients">
        <summary class="cook-mode-ingredients-toggle">${t('ingredients')} (${(cookModeRecipe.ingredients || []).length})</summary>
        <div class="cook-mode-ingredients-list">${ingsHTML}</div>
      </details>
      <div class="step-number">${cookModeStep + 1}</div>
      <div class="step-content">${esc(stepText)}</div>
      ${stepTip ? `<div class="cook-mode-tip">💡 ${esc(stepTip)}</div>` : ''}
    `;

    prevBtn.disabled = cookModeStep === 0;
    if (cookModeStep >= steps.length - 1) {
      nextBtn.textContent = t('cookModeDone');
    } else {
      nextBtn.textContent = t('cookModeNext');
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
      showToast(t('toastBonAppetit'));
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
      document.getElementById('cookModeTimerBtn').textContent = t('cookModeStartTimer');
    } else {
      cookModeSeconds = 0;
      if (display) display.hidden = false;
      document.getElementById('cookModeTimerBtn').textContent = t('cookModeStopTimer');
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
    cookModeStep = 0;
    cookModeSeconds = 0;
    if (cookModeTimer) { clearInterval(cookModeTimer); cookModeTimer = null; }
    // Reset timer display for next use
    const display = document.getElementById('cookModeTimerDisplay');
    if (display) { display.hidden = true; display.textContent = '00:00'; }
    const timerBtn = document.getElementById('cookModeTimerBtn');
    if (timerBtn) timerBtn.textContent = t('cookModeStartTimer');
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

  // ─── Amko rekommenderar (i18n-aware) ───
  const arminPicksI18n = {
    badges: {
      weekPick: { sv: '🔥 Veckans val', en: '🔥 Pick of the week', es: '🔥 Elección semanal', bs: '🔥 Izbor sedmice' },
      fastest: { sv: '⚡ Snabbast i stan', en: '⚡ Fastest in town', es: '⚡ El más rápido', bs: '⚡ Najbrži u gradu' },
      classic: { sv: '🥇 Klassiker', en: '🥇 Classic', es: '🥇 Clásico', bs: '🥇 Klasik' },
      spicy: { sv: '🌶️ För de modiga', en: '🌶️ For the brave', es: '🌶️ Para valientes', bs: '🌶️ Za hrabre' },
      green: { sv: '🌿 Grön favorit', en: '🌿 Green favorite', es: '🌿 Favorito verde', bs: '🌿 Zeleni favorit' },
      italian: { sv: '🍝 Italiensk dröm', en: '🍝 Italian dream', es: '🍝 Sueño italiano', bs: '🍝 Italijanski san' },
      friday: { sv: '🌮 Fredagsfavorit', en: '🌮 Friday favorite', es: '🌮 Favorito del viernes', bs: '🌮 Petak favorit' },
      healthy: { sv: '🥗 Hälsosamt (typ)', en: '🥗 Healthy (ish)', es: '🥗 Saludable (más o menos)', bs: '🥗 Zdravo (nekako)' },
      asian: { sv: '🍜 Asiatisk tröst', en: '🍜 Asian comfort', es: '🍜 Consuelo asiático', bs: '🍜 Azijska utjeha' },
      balkan: { sv: '🔥 Balkanskt arv', en: '🔥 Balkan heritage', es: '🔥 Herencia balcánica', bs: '🔥 Balkanski ponos' },
      comfort: { sv: '🧈 Comfort food', en: '🧈 Comfort food', es: '🧈 Comfort food', bs: '🧈 Comfort food' },
      weekend: { sv: '🥘 Helgprojekt', en: '🥘 Weekend project', es: '🥘 Proyecto de fin de semana', bs: '🥘 Vikend projekat' },
      impress: { sv: '🍣 Imponera-level', en: '🍣 Impress level', es: '🍣 Nivel impresionante', bs: '🍣 Nivo za impresionirati' },
      vegan: { sv: '🌿 Helt veganskt', en: '🌿 Fully vegan', es: '🌿 100% vegano', bs: '🌿 Potpuno vegansko' },
      quick15: { sv: '⏰ 15-minutare', en: '⏰ 15-minuter', es: '⏰ 15 minutos', bs: '⏰ 15 minuta' },
      greek: { sv: '🇬🇷 Medelhavsdröm', en: '🇬🇷 Mediterranean dream', es: '🇬🇷 Sueño mediterráneo', bs: '🇬🇷 Mediteranski san' },
      handmade: { sv: '🥟 Handgjort', en: '🥟 Handmade', es: '🥟 Hecho a mano', bs: '🥟 Ručni rad' },
      mexican: { sv: '🌶️ Mexikansk klassiker', en: '🌶️ Mexican classic', es: '🌶️ Clásico mexicano', bs: '🌶️ Meksički klasik' },
      winter: { sv: '🍲 Vintervärme', en: '🍲 Winter warmer', es: '🍲 Calor invernal', bs: '🍲 Zimska toplina' },
      steak: { sv: '🥩 Steakhouse hemma', en: '🥩 Steakhouse at home', es: '🥩 Steakhouse en casa', bs: '🥩 Steakhouse kod kuće' },
    },
  };

  function getBadge(key) {
    return (arminPicksI18n.badges[key] || {})[currentLang] || arminPicksI18n.badges[key]?.sv || '';
  }

  const arminPicks = [
    {
      badgeKey: 'weekPick',
      name: 'Ćevapi med kajmak',
      desc: 'Amkos barndomsrätt. Har du inte testat kajmak har du missat något. Jag kan inte förklara det, du måste bara prova.',
      i18nDesc: { sv: 'Amkos barndomsrätt. Har du inte testat kajmak har du missat något. Jag kan inte förklara det, du måste bara prova.', en: 'Amko\'s childhood dish. If you haven\'t tried kajmak, you\'re missing out. Can\'t explain it — just taste it.', es: 'El plato de la infancia de Amko. Si no has probado el kajmak, te estás perdiendo algo. No se puede explicar, hay que probarlo.', bs: 'Amkovo jelo iz djetinjstva. Ako nisi probao kajmak, propuštaš nešto. Ne mogu objasniti, moraš samo probati.' },
      ings: ['köttfärs', 'lök', 'vitlök', 'kajmak', 'pitabröd'],
    },
    {
      badgeKey: 'fastest',
      name: 'Pasta aglio e olio',
      desc: 'Tre ingredienser, tio minuter. Den där middagen du lagar när du egentligen inte orkar laga mat.',
      i18nDesc: { sv: 'Tre ingredienser, tio minuter. Den där middagen du lagar när du egentligen inte orkar laga mat.', en: 'Three ingredients, ten minutes. The dinner you make when you can\'t be bothered to cook.', es: 'Tres ingredientes, diez minutos. La cena que preparas cuando no tienes ganas de cocinar.', bs: 'Tri sastojka, deset minuta. Večera koju praviš kad ti se zapravo ne kuha.' },
      ings: ['pasta', 'vitlök', 'olivolja', 'chili', 'persilja'],
    },
    {
      badgeKey: 'classic',
      name: 'Köttbullar med gräddsås',
      desc: 'Sveriges nationalrätt, fast hemlagad. Spoiler: hemligheten är att inte snåla på grädden.',
      i18nDesc: { sv: 'Sveriges nationalrätt, fast hemlagad. Spoiler: hemligheten är att inte snåla på grädden.', en: 'Sweden\'s national dish, homemade. Spoiler: the secret is not skimping on the cream.', es: 'El plato nacional de Suecia, hecho en casa. Spoiler: el secreto es no escatimar en la nata.', bs: 'Nacionalno jelo Švedske, domaće. Spoiler: tajna je ne štediti na vrhnju.' },
      ings: ['köttfärs', 'lök', 'grädde', 'potatis', 'lingon'],
    },
    {
      badgeKey: 'spicy',
      name: 'Kimchi jjigae',
      desc: 'Koreansk comfort food som värmer inifrån. Perfekt för dagar när du behöver att maten tar hand om dig.',
      i18nDesc: { sv: 'Koreansk comfort food som värmer inifrån. Perfekt för dagar när du behöver att maten tar hand om dig.', en: 'Korean comfort food that warms you from the inside. Perfect for days when you need food to take care of you.', es: 'Comida reconfortante coreana que calienta por dentro. Perfecta para días en los que necesitas que la comida te cuide.', bs: 'Korejski comfort food koji grije iznutra. Savršeno za dane kad ti treba da se hrana brine o tebi.' },
      ings: ['kimchi', 'tofu', 'lök', 'vitlök', 'ris'],
    },
    {
      badgeKey: 'green',
      name: 'Falafel med tabbouleh',
      desc: 'Vegetariskt utan att det känns som ett straff. Till och med köttälskare brukar hålla tyst om den här.',
      i18nDesc: { sv: 'Vegetariskt utan att det känns som ett straff. Till och med köttälskare brukar hålla tyst om den här.', en: 'Vegetarian without feeling like punishment. Even meat lovers tend to keep quiet about this one.', es: 'Vegetariano sin sentirse como castigo. Hasta los carnívoros se callan con esta receta.', bs: 'Vegetarijansko bez osjećaja kazne. Čak i mesojedi šute kad probaju ovo.' },
      ings: ['kikärtor', 'lök', 'vitlök', 'koriander', 'pitabröd'],
    },
    {
      badgeKey: 'italian',
      name: 'Risotto ai funghi',
      desc: 'Tar sin tid, men det är typ terapi. Du står där och rör, och plötsligt är allt lugnt.',
      i18nDesc: { sv: 'Tar sin tid, men det är typ terapi. Du står där och rör, och plötsligt är allt lugnt.', en: 'Takes its time, but it\'s basically therapy. You stand there stirring, and suddenly everything\'s fine.', es: 'Lleva su tiempo, pero es como terapia. Ahí estás removiendo, y de repente todo está bien.', bs: 'Treba vremena, ali to je praktično terapija. Stojiš i miješaš, i odjednom je sve okej.' },
      ings: ['ris', 'svamp', 'lök', 'vitlök', 'parmesan'],
    },
    {
      badgeKey: 'friday',
      name: 'Tacos al pastor',
      desc: 'Fredagsmys utan halvfabrikat. Lite mer jobb, men den där känslan när alla tar en till — den är värd det.',
      i18nDesc: { sv: 'Fredagsmys utan halvfabrikat. Lite mer jobb, men den där känslan när alla tar en till — den är värd det.', en: 'Friday feast without the ready-meals. A bit more effort, but that feeling when everyone grabs seconds — worth it.', es: 'Viernes sin comida prefabricada. Un poco más de trabajo, pero esa sensación cuando todos repiten — vale la pena.', bs: 'Petak meze bez poluproizvoda. Malo više posla, ali onaj osjećaj kad svi uzmu još — vrijedi toga.' },
      ings: ['tortilla', 'fläskfilé', 'ananas', 'lök', 'koriander'],
    },
    {
      badgeKey: 'healthy',
      name: 'Buddha bowl',
      desc: 'Ser hälsosamt ut och smakar faktiskt bra. Du behöver inte posta den på Instagram, men du kommer vilja.',
      i18nDesc: { sv: 'Ser hälsosamt ut och smakar faktiskt bra. Du behöver inte posta den på Instagram, men du kommer vilja.', en: 'Looks healthy and actually tastes good. You don\'t have to post it on Instagram, but you\'ll want to.', es: 'Se ve saludable y sabe bien de verdad. No tienes que subirla a Instagram, pero vas a querer.', bs: 'Izgleda zdravo i zapravo ima dobar okus. Ne moraš to staviti na Instagram, ali ćeš htjeti.' },
      ings: ['quinoa', 'avokado', 'kikärtor', 'spenat', 'tomat'],
    },
    {
      badgeKey: 'asian',
      name: 'Tonkotsu ramen',
      desc: 'Japansk penicillin. Funkar mot förkylning, dåliga dagar och existentiell trötthet.',
      i18nDesc: { sv: 'Japansk penicillin. Funkar mot förkylning, dåliga dagar och existentiell trötthet.', en: 'Japanese penicillin. Works against colds, bad days, and existential fatigue.', es: 'Penicilina japonesa. Funciona contra resfriados, días malos y cansancio existencial.', bs: 'Japanski penicilin. Pomaže protiv prehlade, loših dana i egzistencijalnog umora.' },
      ings: ['nudlar', 'ägg', 'soja', 'vitlök', 'ingefära'],
    },
    {
      badgeKey: 'balkan',
      name: 'Burek',
      desc: 'Burek med yoghurt är inte en måltid, det är en upplevelse. Går inte att förklara, bara att äta.',
      i18nDesc: { sv: 'Burek med yoghurt är inte en måltid, det är en upplevelse. Går inte att förklara, bara att äta.', en: 'Burek with yogurt isn\'t a meal, it\'s an experience. Can\'t explain it — just eat it.', es: 'Burek con yogur no es una comida, es una experiencia. No se puede explicar, solo comer.', bs: 'Burek sa jogurtom nije obrok, to je doživljaj. Ne može se objasniti, samo jedi.' },
      ings: ['filodeg', 'köttfärs', 'lök', 'ägg', 'yoghurt'],
    },
    {
      badgeKey: 'comfort',
      name: 'Mac & cheese',
      desc: 'Vuxna äter också barnmat, vi kallar det bara comfort food. Ingen frågar varför, alla förstår.',
      i18nDesc: { sv: 'Vuxna äter också barnmat, vi kallar det bara comfort food. Ingen frågar varför, alla förstår.', en: 'Adults eat kid food too — we just call it comfort food. Nobody asks why, everyone gets it.', es: 'Los adultos también comen comida de niños, solo lo llamamos comfort food. Nadie pregunta por qué.', bs: 'Odrasli također jedu dječju hranu, samo to zovemo comfort food. Niko ne pita zašto, svi razumiju.' },
      ings: ['pasta', 'cheddar', 'mjölk', 'smör', 'ströbröd'],
    },
    {
      badgeKey: 'weekend',
      name: 'Tagine med kyckling',
      desc: 'Marocko i en gryta. Sätter du på den kl 14 är du en hjälte till middag.',
      i18nDesc: { sv: 'Marocko i en gryta. Sätter du på den kl 14 är du en hjälte till middag.', en: 'Morocco in a pot. Start it at 2 PM and you\'re a hero by dinner.', es: 'Marruecos en una olla. Ponla a las 14:00 y serás un héroe para la cena.', bs: 'Maroko u loncu. Stavi u 14h i heroj si do večere.' },
      ings: ['kyckling', 'morötter', 'lök', 'citron', 'oliver'],
    },
    {
      badgeKey: 'impress',
      name: 'Sushi bowls',
      desc: 'All smak från sushi men utan origami-kunskaperna. Du behöver inte kunna rulla.',
      i18nDesc: { sv: 'All smak från sushi men utan origami-kunskaperna. Du behöver inte kunna rulla.', en: 'All the sushi flavor without the origami skills. No rolling required.', es: 'Todo el sabor del sushi sin necesidad de hacer origami. No hay que enrollar nada.', bs: 'Sav okus sushija bez origami vještina. Ne treba znati rolati.' },
      ings: ['ris', 'lax', 'avokado', 'gurka', 'soja'],
    },
    {
      badgeKey: 'vegan',
      name: 'Dal tadka',
      desc: 'Indisk linssoppa som bevisar att kött är överkurs. Linser + kryddor = magi.',
      i18nDesc: { sv: 'Indisk linssoppa som bevisar att kött är överkurs. Linser + kryddor = magi.', en: 'Indian lentil soup that proves meat is optional. Lentils + spices = magic.', es: 'Sopa india de lentejas que demuestra que la carne es opcional. Lentejas + especias = magia.', bs: 'Indijska supa od leće koja dokazuje da je meso opcija. Leća + začini = magija.' },
      ings: ['linser', 'tomat', 'lök', 'vitlök', 'ingefära'],
    },
    {
      badgeKey: 'quick15',
      name: 'Quesadillas',
      desc: 'När du har 15 minuter och noll ambition. Ost fixar allt.',
      i18nDesc: { sv: 'När du har 15 minuter och noll ambition. Ost fixar allt.', en: 'When you have 15 minutes and zero ambition. Cheese fixes everything.', es: 'Cuando tienes 15 minutos y cero ambición. El queso lo arregla todo.', bs: 'Kad imaš 15 minuta i nula ambicije. Sir rješava sve.' },
      ings: ['tortilla', 'ost', 'kyckling', 'paprika', 'gräddfil'],
    },
    {
      badgeKey: 'greek',
      name: 'Grekisk sallad med halloumi',
      desc: 'Grilla halloumin. Släng på tomat och gurka. Känn dig som en gudinna.',
      i18nDesc: { sv: 'Grilla halloumin. Släng på tomat och gurka. Känn dig som en gudinna.', en: 'Grill the halloumi. Toss on tomato and cucumber. Feel like a goddess.', es: 'Asa el halloumi. Pon tomate y pepino. Siéntete como una diosa.', bs: 'Ispeci halloumi. Baci paradajz i krastavac. Osjećaj se kao božica.' },
      ings: ['halloumi', 'tomat', 'gurka', 'lök', 'olivolja'],
    },
    {
      badgeKey: 'handmade',
      name: 'Gyoza',
      desc: 'Terapi i köket. Varje veckning är ett steg mot inre frid. Eller bara god mat.',
      i18nDesc: { sv: 'Terapi i köket. Varje veckning är ett steg mot inre frid. Eller bara god mat.', en: 'Kitchen therapy. Every fold is a step toward inner peace. Or just good food.', es: 'Terapia en la cocina. Cada pliegue es un paso hacia la paz interior. O solo buena comida.', bs: 'Terapija u kuhinji. Svaki nabor je korak ka unutrašnjem miru. Ili samo dobra hrana.' },
      ings: ['köttfärs', 'kål', 'vitlök', 'ingefära', 'soja'],
    },
    {
      badgeKey: 'mexican',
      name: 'Enchiladas',
      desc: 'Tortilla + fyllning + sås + ost = problemlösning på hög nivå.',
      i18nDesc: { sv: 'Tortilla + fyllning + sås + ost = problemlösning på hög nivå.', en: 'Tortilla + filling + sauce + cheese = problem-solving at its finest.', es: 'Tortilla + relleno + salsa + queso = resolución de problemas de alto nivel.', bs: 'Tortilla + fil + sos + sir = rješavanje problema na visokom nivou.' },
      ings: ['tortilla', 'kyckling', 'ost', 'tomat', 'grädde'],
    },
    {
      badgeKey: 'winter',
      name: 'Tom kha gai',
      desc: 'Thailändsk kokossoppa som gör vintern uthärdlig. Tack, Thailand.',
      i18nDesc: { sv: 'Thailändsk kokossoppa som gör vintern uthärdlig. Tack, Thailand.', en: 'Thai coconut soup that makes winter bearable. Thanks, Thailand.', es: 'Sopa tailandesa de coco que hace el invierno soportable. Gracias, Tailandia.', bs: 'Tajlandska kokosova supa koja čini zimu podnošljivom. Hvala, Tajland.' },
      ings: ['kyckling', 'kokosmjölk', 'galangal', 'lime', 'citrongräs'],
    },
    {
      badgeKey: 'steak',
      name: 'Grillad entrecôte',
      desc: 'Stek. Smör. Vitlök. Rosmarin. Mer behövs inte. Sluta övertänka.',
      i18nDesc: { sv: 'Stek. Smör. Vitlök. Rosmarin. Mer behövs inte. Sluta övertänka.', en: 'Steak. Butter. Garlic. Rosemary. Nothing more needed. Stop overthinking.', es: 'Filete. Mantequilla. Ajo. Romero. No se necesita más. Deja de pensar tanto.', bs: 'Biftek. Maslac. Bijeli luk. Ruzmarin. Više ne treba. Prestani previše razmišljati.' },
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

  // Map badge keys to large display emojis for Amko cards
  const amkoCardEmojis = {
    weekPick: '🍖', fastest: '⚡', classic: '🧆', spicy: '🌶️', green: '🥙',
    italian: '🍝', friday: '🌮', healthy: '🥗', asian: '🍜', balkan: '🥟',
    comfort: '🧀', weekend: '🍲', impress: '🍣', vegan: '🌱', quick15: '⏰',
    greek: '🫒', handmade: '🥟', mexican: '🌯', winter: '🍜', steak: '🥩',
  };

  function renderAmkoPicks() {
    const container = document.getElementById('arminPicks');
    if (!container) return;
    container.innerHTML = getWeeklyPicks(arminPicks).map(p => `
      <div class="armin-pick-card" data-ings="${escAttr(JSON.stringify(p.ings))}">
        <span class="armin-pick-emoji">${amkoCardEmojis[p.badgeKey] || '🍽️'}</span>
        <span class="armin-pick-badge">${getBadge(p.badgeKey)}</span>
        <div class="armin-pick-name">${esc(p.name)}</div>
        <div class="armin-pick-desc">${esc(p.i18nDesc?.[currentLang] || p.i18nDesc?.sv || p.desc)}</div>
        <div class="armin-pick-ings">
          ${p.ings.map(i => `<span class="armin-pick-ing">${esc(translateIng(i))}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  document.getElementById('arminPicks')?.addEventListener('click', e => {
    const card = e.target.closest('.armin-pick-card');
    if (!card) return;
    haptic();
    let ings;
    try { ings = JSON.parse(card.dataset.ings); } catch { return; }
    ingredients = [];
    ings.forEach(ing => { if (!ingredients.includes(ing)) ingredients.push(ing); });
    switchView('search');
    render();
    setTimeout(() => findRecipes(), 400);
  });

  // ─── Country name translations ───
  const countryTranslations = {
    en: { 'Sverige':'Sweden', 'Italien':'Italy', 'Bosnien & Hercegovina':'Bosnia & Herzegovina', 'Serbien':'Serbia', 'Grekland':'Greece', 'Turkiet':'Turkey', 'Libanon':'Lebanon', 'Thailand':'Thailand', 'Japan':'Japan', 'Korea':'Korea', 'Kina':'China', 'Indien':'India', 'Mexiko':'Mexico', 'Frankrike':'France', 'Spanien':'Spain', 'Marocko':'Morocco', 'USA':'USA', 'Vietnam':'Vietnam', 'Peru':'Peru' },
    es: { 'Sverige':'Suecia', 'Italien':'Italia', 'Bosnien & Hercegovina':'Bosnia y Herzegovina', 'Serbien':'Serbia', 'Grekland':'Grecia', 'Turkiet':'Turquía', 'Libanon':'Líbano', 'Thailand':'Tailandia', 'Japan':'Japón', 'Korea':'Corea', 'Kina':'China', 'Indien':'India', 'Mexiko':'México', 'Frankrike':'Francia', 'Spanien':'España', 'Marocko':'Marruecos', 'USA':'EE.UU.', 'Vietnam':'Vietnam', 'Peru':'Perú' },
    bs: { 'Sverige':'Švedska', 'Italien':'Italija', 'Bosnien & Hercegovina':'Bosna i Hercegovina', 'Serbien':'Srbija', 'Grekland':'Grčka', 'Turkiet':'Turska', 'Libanon':'Liban', 'Thailand':'Tajland', 'Japan':'Japan', 'Korea':'Koreja', 'Kina':'Kina', 'Indien':'Indija', 'Mexiko':'Meksiko', 'Frankrike':'Francuska', 'Spanien':'Španija', 'Marocko':'Maroko', 'USA':'SAD', 'Vietnam':'Vijetnam', 'Peru':'Peru' },
  };
  function translateCountry(svName) {
    if (currentLang === 'sv') return svName;
    return (countryTranslations[currentLang] || {})[svName] || svName;
  }

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
        <button class="filter-tab${catalogFilter === 'all' ? ' active' : ''}" data-filter="all">${t('filterAll')}</button>
        ${worldCuisines.map(c => `
          <button class="filter-tab${catalogFilter === c.country ? ' active' : ''}" data-filter="${esc(c.country)}">${c.flag} ${esc(translateCountry(c.country))}</button>
        `).join('')}
      `;
    }

    worldGrid.innerHTML = filtered.map(c => `
      <div class="world-card">
        <div class="world-card-top">
          <span class="world-flag">${c.flag}</span>
          <span class="world-country">${esc(translateCountry(c.country))}</span>
        </div>
        <div class="world-dishes">
          ${c.dishes.map(d => `
            <button class="dish-btn" data-ings="${escAttr(JSON.stringify(d.ings))}">${esc(d.name)}</button>
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
    let ings;
    try { ings = JSON.parse(dish.dataset.ings); } catch { return; }
    ingredients = [];
    ings.forEach(ing => { if (!ingredients.includes(ing)) ingredients.push(ing); });
    switchView('search');
    render();
    setTimeout(() => findRecipes(), 400);
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
    setTimeout(() => findRecipes(), 400);
  });

  // ─── Image compression for fridge photos ───
  function compressImage(base64Full, maxWidth = 800, quality = 0.7) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const timeout = setTimeout(() => reject(new Error(t('fridgeImageLoadTimeout'))), 15000);
      img.onload = () => {
        clearTimeout(timeout);
        const canvas = document.createElement('canvas');
        let w = img.width, h = img.height;
        if (w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth; }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        const compressed = canvas.toDataURL('image/jpeg', quality);
        resolve(compressed.split(',')[1]);
      };
      img.onerror = () => { clearTimeout(timeout); reject(new Error(t('fridgeImageLoadFail'))); };
      img.src = base64Full;
    });
  }

  // ─── Fridge Photo to Recipe ───
  let isFridgeScanning = false;
  let lastObjectURL = null;

  if (fridgeBtn && fridgeInput) {
    fridgeBtn.addEventListener('click', () => fridgeInput.click());

    fridgeInput.addEventListener('change', async () => {
      const file = fridgeInput.files[0];
      if (!file || isFridgeScanning) return;

      // Validate file type and size (max 10MB)
      if (!file.type.startsWith('image/')) {
        showToast(t('fridgeAnalysisFail'));
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        showToast(t('fridgeAnalysisFail'));
        return;
      }

      isFridgeScanning = true;

      // Properly revoke previous object URL
      if (lastObjectURL) {
        URL.revokeObjectURL(lastObjectURL);
        lastObjectURL = null;
      }
      const url = URL.createObjectURL(file);
      lastObjectURL = url;
      fridgeImg.src = url;
      fridgePreview.style.display = 'block';
      fridgeScanning.style.display = 'flex';
      fridgeBtn.parentElement.querySelector('.fridge-btn').style.display = 'none';

      const reader = new FileReader();
      reader.onerror = () => {
        showToast(t('fridgeImageLoadFail'));
        fridgeScanning.style.display = 'none';
        isFridgeScanning = false;
      };
      reader.onload = async () => {
        try {
          const base64 = await compressImage(reader.result);
          const mediaType = 'image/jpeg';

          const imgController = new AbortController();
          const imgTimeout = setTimeout(() => imgController.abort(), 30000);

          const res = await fetch('/api/recognize-ingredients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: base64, mediaType }),
            signal: imgController.signal
          });
          clearTimeout(imgTimeout);

          if (!res.ok) throw new Error(t('fridgeAnalysisFail'));

          const data = await res.json();
          const text = (data.content || []).map(b => b.text || '').join('');
          const clean = text.replace(/```json|```/g, '').trim();

          let found;
          try { found = JSON.parse(clean); }
          catch { throw new Error(t('fridgeParseFail')); }

          if (Array.isArray(found) && found.length > 0) {
            ingredients = [];
            for (let k = 0; k < found.length; k++) {
              const raw = String(found[k] || '').trim().toLowerCase().replace(/[<>"'&]/g, '').slice(0, 50);
              if (raw && !ingredients.includes(raw) && ingredients.length < 30) ingredients.push(raw);
            }
            render();
            showToast(t('fridgeFound').replace('{count}', ingredients.length));

            if (ingredients.length > 0) {
              setTimeout(() => findRecipes(), 600);
            }
          } else {
            showToast(t('toastNoIngs'));
          }
        } catch (e) {
          const errorMsg = e.name === 'AbortError'
            ? t('fridgeAnalysisTimeout')
            : (e.message || t('toastError'));
          showToast(errorMsg);
          console.error('Fridge scan error:', e);
        }

        fridgeScanning.style.display = 'none';
        isFridgeScanning = false;
      };
      reader.readAsDataURL(file);
    });

    if (fridgeRemove) {
      fridgeRemove.addEventListener('click', () => {
        if (lastObjectURL) {
          URL.revokeObjectURL(lastObjectURL);
          lastObjectURL = null;
        }
        fridgeImg.src = '';
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
      let tiltRAF;
      card.addEventListener('mousemove', e => {
        if (tiltRAF) return;
        tiltRAF = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(800px) rotateY(${x * 3.5}deg) rotateX(${-y * 3.5}deg) translateY(-3px)`;
          tiltRAF = null;
        });
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

  // ─── Online/Offline detection ───
  window.addEventListener('offline', () => {
    showToast(t('offlineMessage'));
  });
  window.addEventListener('online', () => {
    showToast('Anslutningen är tillbaka!');
  });

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
        <div class="holiday-title">${holiday.name} ${t('holidayApproaching')}</div>
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

  // Pulse ingredient input for first-time users
  if (!localStorage.getItem('onboarding_seen')) {
    setTimeout(() => {
      ingInput?.classList.add('guide-pulse');
      setTimeout(() => ingInput?.classList.remove('guide-pulse'), 6500);
    }, 2000);
  }

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

  // Rotate hero subtitle — with late-night easter egg
  const heroSubEl = document.querySelector('.hero-sub');
  const heroEyebrowEl = document.getElementById('heroEyebrow');
  const currentHour = new Date().getHours();
  if (currentHour >= 23 || currentHour < 5) {
    // Late night mode
    const lateNightSubs = [
      'Midnattshunger? Vi dömer inte.',
      'Klockan är mycket. Men hungern sover aldrig.',
      'Sen middag > ingen middag.',
      'Nattmacka-nivå eller lite mer ambitiöst?',
      'Kylskåpet väntar. Precis som vi.',
    ];
    if (heroSubEl) heroSubEl.textContent = pick(lateNightSubs);
    if (heroEyebrowEl) heroEyebrowEl.textContent = 'Uppe och snackar med kylskåpet?';
  } else {
    if (heroSubEl) heroSubEl.textContent = pick(heroSubtitles[currentLang] || heroSubtitles.sv);
  }

  // Rotate footer texts
  const ftTagline = document.querySelector('.footer-tagline:not(.footer-irony)');
  const ftIrony = document.querySelector('.footer-irony');
  if (ftTagline) ftTagline.textContent = pick(footerTaglines[currentLang] || footerTaglines.sv);
  if (ftIrony) ftIrony.textContent = pick(footerIronies[currentLang] || footerIronies.sv);

  // Rotate footer links with fun phrases
  const footerLinkPairs = [
    ['🍝 Drivs av panik kl 17:00', '🤖 AI som faktiskt lagar mat (nåja)'],
    ['🧄 Sponsrad av vitlök', '🍳 Testad av hungriga studenter'],
    ['🥕 Ingen morot skadades', '👨‍🍳 Amko godkänner detta meddelande'],
    ['🔥 Kokplattan är på', '🛒 Kylskåpet är... halvfullt?'],
    ['🍕 Pizza är alltid plan B', '⏰ Bäst före: nu'],
    ['🧑‍🍳 Lagat med kärlek (och panik)', '📱 Matlagning i fickan'],
  ];
  const footerLink1 = document.getElementById('footerLink1');
  const footerLink2 = document.getElementById('footerLink2');
  if (footerLink1 && footerLink2) {
    const pair = pick(footerLinkPairs);
    footerLink1.textContent = pair[0];
    footerLink2.textContent = pair[1];
  }

  // Handle initial hash
  const initView = location.hash.replace('#', '') || 'search';
  if (views[initView]) switchView(initView);
  ingInput.focus();

  // Share app button
  document.getElementById('shareAppBtn')?.addEventListener('click', async () => {
    haptic('medium');
    try {
      if (navigator.share) {
        await navigator.share({ title: t('heroTitle'), text: t('shareAppText'), url: window.location.origin });
        return;
      }
    } catch (e) { if (e.name === 'AbortError') return; }
    try {
      await navigator.clipboard.writeText(window.location.origin);
      showToast('copied');
    } catch { showToast('error'); }
  });

  // Help button - re-show onboarding
  document.getElementById('helpBtn')?.addEventListener('click', () => {
    haptic();
    const overlay = document.getElementById('onboardingOverlay');
    if (overlay) {
      overlay.hidden = false;
      document.body.style.overflow = 'hidden';
      const logoContainer = document.getElementById('onboardingLogo');
      if (logoContainer) logoContainer.innerHTML = appLogoSVG(64);
    }
  });

  // Premium info toggle in footer
  const premiumToggle = document.getElementById('premiumInfoToggle');
  const premiumDetails = document.getElementById('premiumDetails');
  if (premiumToggle && premiumDetails) {
    premiumToggle.addEventListener('click', () => {
      const isOpen = !premiumDetails.hidden;
      premiumDetails.hidden = isOpen;
      premiumToggle.classList.toggle('open', !isOpen);
    });
  }

  // First-time user hint (shown once after onboarding is dismissed)
  if (!localStorage.getItem('first_hint_seen') && localStorage.getItem('onboarding_seen')) {
    const card = document.querySelector('#viewSearch .card');
    if (card) {
      const hint = document.createElement('div');
      hint.className = 'first-time-hint';
      hint.innerHTML = `
        <span class="first-time-hint-icon">💡</span>
        <span class="first-time-hint-text">Tips: Lägg till 2-3 ingredienser du har hemma, välj en preferens, och tryck "Visa recept". Amko gör resten!</span>
        <button class="first-time-hint-close" aria-label="Stäng tips">&times;</button>
      `;
      card.insertBefore(hint, card.firstChild);
      hint.querySelector('.first-time-hint-close').addEventListener('click', () => {
        hint.remove();
        try { localStorage.setItem('first_hint_seen', 'true'); } catch {}
      });
    }
  }

  // Show changelog if new version
  const lastSeenVersion = loadStorage('changelog_seen', '0');
  if (changelog.length && lastSeenVersion !== changelog[0].version) {
    setTimeout(() => showChangelog(), 1500);
  }

  // Load shared search from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const sharedIngs = urlParams.get('ings');
  if (sharedIngs) {
    ingredients = sharedIngs.split(',').map(s => s.trim()).filter(Boolean);
    const sharedPrefs = urlParams.get('prefs');
    if (sharedPrefs) sharedPrefs.split(',').forEach(p => prefs.add(p));
    const sharedPortions = urlParams.get('portions');
    if (sharedPortions) searchPortions = parseInt(sharedPortions) || 4;
    render();
    setTimeout(() => findRecipes(), 500);
  }

  // Scroll animations after initial render
  setTimeout(initScrollAnimations, 300);

  // ═══ PWA: Install banner ═══
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const dismissed = localStorage.getItem('install_dismissed');
    if (dismissed) return;
    const banner = document.getElementById('installBanner');
    if (banner) banner.hidden = false;
  });
  const installBtn = document.getElementById('installBtn');
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      deferredPrompt = null;
      const banner = document.getElementById('installBanner');
      if (banner) banner.hidden = true;
    });
  }
  const installDismiss = document.getElementById('installDismiss');
  if (installDismiss) {
    installDismiss.addEventListener('click', () => {
      const banner = document.getElementById('installBanner');
      if (banner) banner.hidden = true;
      localStorage.setItem('install_dismissed', 'true');
    });
  }

  // ═══ PWA: Offline banner (with active network check to avoid false positives on mobile) ═══
  function setOfflineBanner(offline) {
    const banner = document.getElementById('offlineBanner');
    if (banner) banner.hidden = !offline;
  }
  async function checkRealConnectivity() {
    if (navigator.onLine) {
      setOfflineBanner(false);
      return;
    }
    // navigator.onLine is false — verify with a real fetch (HEAD to own origin)
    try {
      const ac = new AbortController();
      const tid = setTimeout(() => ac.abort(), 3000);
      const resp = await fetch('/?_ping=' + Date.now(), { method: 'HEAD', cache: 'no-store', signal: ac.signal });
      clearTimeout(tid);
      setOfflineBanner(!resp.ok);
    } catch {
      setOfflineBanner(true);
    }
  }
  window.addEventListener('online', () => setOfflineBanner(false));
  window.addEventListener('offline', () => checkRealConnectivity());
  if (!navigator.onLine) checkRealConnectivity();

  // ═══ Legal pages navigation ═══
  // Extend switchView to handle legal pages
  const origSwitchView = window.__switchView;
  window.__switchView = function(view) {
    const legalViews = ['privacy', 'terms', 'cookies'];
    if (legalViews.includes(view)) {
      // Hide all views
      document.querySelectorAll('.view').forEach(v => v.hidden = true);
      const target = document.getElementById('view' + view.charAt(0).toUpperCase() + view.slice(1));
      if (target) {
        target.hidden = false;
        target.scrollTo(0, 0);
        window.scrollTo(0, 0);
      }
      // Deactivate nav items
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      return;
    }
    if (origSwitchView) origSwitchView(view);
  };
})();
