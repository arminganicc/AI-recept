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

  function loadStorage(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback; }
    catch { return fallback; }
  }

  let favorites     = loadStorage('fav_recipes', []);
  let searchHistory  = loadStorage('search_history', []);
  let shoppingList   = loadStorage('shopping_list', []);
  let ratings        = loadStorage('recipe_ratings', {});

  const quickItems = [
    'kyckling', 'lax', 'pasta', 'ris', 'lök',
    'vitlök', 'grädde', 'tomat', 'potatis', 'ägg',
    'ost', 'bacon', 'paprika', 'morötter', 'spenat'
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

  // ─── Toast messages ───
  const toastMessages = {
    copied: 'Kopierat till urklipp',
    favAdded: 'Sparat som favorit ❤️',
    favRemoved: 'Borttaget från favoriter',
    listSent: 'Inköpslistan är på väg till din mejl',
    listAdded: 'Lagt till i inköpslistan',
    emptyList: 'Inga varor kvar att skicka',
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
    if (name === 'inspiration') renderWorldCuisines();
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
    const text = toastMessages[msg] || msg;
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
    const tooltip = document.getElementById('onboardingTooltip');
    if (tooltip) {
      tooltip.hidden = false;
      document.getElementById('onboardingClose')?.addEventListener('click', () => {
        tooltip.hidden = true;
        localStorage.setItem('onboarding_seen', 'true');
      });
    }
  }

  // ─── Auth UI ───
  function updateAuthUI() {
    if (!accountBtn) return;
    accountBtn.classList.toggle('logged-in', !!currentUser);

    const signInEl = document.getElementById('authSignIn');
    const sentEl = document.getElementById('authSent');
    const loggedInEl = document.getElementById('authLoggedIn');

    if (currentUser) {
      if (signInEl) signInEl.hidden = true;
      if (sentEl) sentEl.hidden = true;
      if (loggedInEl) {
        loggedInEl.hidden = false;
        const emailEl = document.getElementById('authUserEmail');
        const avatarEl = document.getElementById('authAvatar');
        if (emailEl) emailEl.textContent = currentUser.email;
        if (avatarEl) avatarEl.textContent = (currentUser.email || '?')[0].toUpperCase();
      }
    } else {
      if (signInEl) signInEl.hidden = false;
      if (sentEl) sentEl.hidden = true;
      if (loggedInEl) loggedInEl.hidden = true;
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

  // Magic link send
  document.getElementById('authSubmit')?.addEventListener('click', async () => {
    const emailInput = document.getElementById('authEmail');
    const email = emailInput?.value?.trim();
    if (!email) return;

    const submitBtn = document.getElementById('authSubmit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Skickar...';

    try {
      if (!supabaseClient) throw new Error('Supabase ej konfigurerat');
      const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: window.location.origin }
      });
      if (error) throw error;

      // Show "sent" state
      document.getElementById('authSignIn').hidden = true;
      document.getElementById('authSent').hidden = false;
      document.getElementById('authSentEmail').textContent = email;
      showToast('magicSent');
    } catch (e) {
      showToast('error');
      console.error('Auth error:', e);
    }
    submitBtn.disabled = false;
    submitBtn.textContent = 'Skicka inloggningslänk';
  });

  // Resend magic link
  document.getElementById('authResend')?.addEventListener('click', async () => {
    const email = document.getElementById('authSentEmail')?.textContent;
    if (!email || !supabaseClient) return;
    try {
      await supabaseClient.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: window.location.origin }
      });
      showToast('magicSent');
    } catch (e) {
      showToast('error');
    }
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
    quickPicks.innerHTML = quickItems.map(item => {
      const used = ingredients.includes(item) ? ' used' : '';
      return `<button class="quick-chip${used}" data-ing="${esc(item)}">${esc(item)}</button>`;
    }).join('');
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

  // Send list by email
  document.getElementById('sendList')?.addEventListener('click', () => sendShoppingList());

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

  function sendViaGmail(body, subject) {
    const email = currentUser?.email || '';
    window.open(`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  }

  function sendViaOutlook(body, subject) {
    const email = currentUser?.email || '';
    window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  }

  function sendViaMailto(body, subject) {
    const email = currentUser?.email || '';
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }

  function showEmailPicker() {
    const unchecked = shoppingList.filter(i => !i.checked);
    if (!unchecked.length) { showToast('emptyList'); return; }

    const body = getListText();
    const subject = 'Inköpslista från Vad ska vi laga?';

    // Create picker overlay
    const picker = document.createElement('div');
    picker.className = 'email-picker-overlay';
    picker.innerHTML = `
      <div class="email-picker">
        <div class="email-picker-title">Skicka via</div>
        <button class="email-picker-option" data-method="gmail">
          <span class="email-picker-icon">📧</span>
          <span>Gmail</span>
        </button>
        <button class="email-picker-option" data-method="outlook">
          <span class="email-picker-icon">📬</span>
          <span>Outlook</span>
        </button>
        <button class="email-picker-option" data-method="mailto">
          <span class="email-picker-icon">✉️</span>
          <span>Standard e-post</span>
        </button>
        <button class="email-picker-option" data-method="copy">
          <span class="email-picker-icon">📋</span>
          <span>Kopiera listan</span>
        </button>
        <button class="email-picker-cancel">Avbryt</button>
      </div>
    `;

    picker.addEventListener('click', async (e) => {
      const option = e.target.closest('.email-picker-option');
      const cancel = e.target.closest('.email-picker-cancel');

      if (cancel || e.target === picker) {
        picker.remove();
        return;
      }

      if (!option) return;
      const method = option.dataset.method;

      if (method === 'gmail') sendViaGmail(body, subject);
      else if (method === 'outlook') sendViaOutlook(body, subject);
      else if (method === 'mailto') sendViaMailto(body, subject);
      else if (method === 'copy') {
        try {
          await navigator.clipboard.writeText(body);
          showToast('copied');
        } catch { showToast('Kunde inte kopiera'); }
      }

      haptic('medium');
      picker.remove();
    });

    document.body.appendChild(picker);
  }

  async function sendShoppingList() {
    showEmailPicker();
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
    if (!ingredients.length) return;

    const cacheKey = getCacheKey();
    if (recipeCache.has(cacheKey)) {
      recipes = recipeCache.get(cacheKey);
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
      <div class="loading-label">Kokar ihop förslag<span class="loading-dots"></span></div>
    `;
    recipeList.innerHTML = '';
    errBox.style.display = 'none';
    searchBtn.disabled = true;

    let prefText = '';
    if (prefs.size > 0) {
      const labels = [];
      if (prefs.has('vegetariskt')) labels.push('vegetariska');
      if (prefs.has('veganskt'))    labels.push('veganska');
      if (prefs.has('glutenfritt')) labels.push('glutenfria');
      if (prefs.has('snabbt'))      labels.push('snabba (under 30 minuter)');
      prefText = `\nRecepten MÅSTE vara ${labels.join(' och ')}.`;
    }

    const prompt = `Du är en erfaren svensk receptskribent. Ge mig exakt 4 OLIKA receptförslag baserade på dessa ingredienser: ${ingredients.join(', ')}.

Regler:
- Basvaror som salt, peppar, olja, smör, vatten är ok att använda
- Recepten ska vara för ${searchPortions} portioner
- Ange exakta mängder i ingredienslistan (t.ex. "300g kycklingfilé", "2 dl vispgrädde", "1 stor lök")
- Stegen ska vara detaljerade med minst 4-6 steg per recept
- Svårighetsgrad: ENBART "Lätt", "Medel" eller "Avancerad"
- Ge varierade förslag — olika kök och tillagningssätt${prefText}

Svara ENBART med giltig JSON (inga kodblock, inga backticks, ingen annan text):
{"recipes":[{"name":"Receptnamn","time":"30 min","difficulty":"Lätt","servings":${searchPortions},"description":"En lockande beskrivning.","ingredients":["300g kyckling","2 dl grädde"],"steps":["Detaljerat steg 1.","Detaljerat steg 2."]}]}`;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!res.ok) {
        if (res.status === 429) throw new Error('Lite för snabbt — vänta en stund och försök igen.');
        if (res.status === 401 || res.status === 403) throw new Error('Något gick snett med autentiseringen.');
        if (res.status >= 500) throw new Error('Något gick snett — försök igen om en stund.');
        throw new Error('Något gick snett — kontrollera anslutningen och försök igen.');
      }

      const data = await res.json();
      if (data.error) throw new Error(data.error.message || 'API-fel inträffade.');

      const text = (data.content || []).map(b => b.text || '').join('');
      const clean = text.replace(/```json|```/g, '').trim();

      let parsed;
      try { parsed = JSON.parse(clean); }
      catch { throw new Error('Kunde inte tolka svaret från AI — försök igen.'); }

      recipes = parsed.recipes || [];
      if (!recipes.length) throw new Error('Inga recept returnerades — försök med andra ingredienser.');

      recipeCache.set(cacheKey, recipes);
      renderRecipes();
      initTilt(recipeList);
      saveToHistory(ingredients, recipes);

      setTimeout(() => recipeList.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);

    } catch (e) {
      errBox.textContent = e.message || 'Något gick fel — kontrollera anslutningen och försök igen.';
      errBox.style.display = 'block';
      console.error('Recipe fetch error:', e);
    }

    loadingEl.style.display = 'none';
    searchBtn.disabled = false;
  }

  searchBtn.addEventListener('click', () => { haptic('medium'); findRecipes(); });

  // ─── Render Recipes ───
  function renderRecipes() {
    if (!recipes.length) { recipeList.innerHTML = ''; return; }
    recipeList.innerHTML = `
      <div class="recipes-header">
        <div class="recipes-title">Här är ${recipes.length} förslag</div>
        <div class="recipes-subtitle">Öppna för fullständigt recept</div>
      </div>
    ` + recipes.map((r, i) => {
      const rating = ratings[r.name] || 0;
      return `
        <div class="recipe-card" data-idx="${i}">
          <div class="recipe-top">
            <div class="recipe-name">${esc(r.name)}</div>
            <button class="fav-btn${isFav(r.name) ? ' active' : ''}" data-fav="${i}" aria-label="Spara favorit">${iconHeart(isFav(r.name))}</button>
          </div>
          <div class="badges">
            <span class="badge">${iconClock} ${esc(r.time)}</span>
            <span class="badge ${difficultyClass(r.difficulty)}">${esc(r.difficulty)}</span>
            <span class="badge">${(r.ingredients || []).length} ingredienser</span>
            ${rating > 0 ? `<span class="badge rated">${'★'.repeat(rating)}</span>` : ''}
          </div>
          <div class="recipe-desc">${esc(r.description)}</div>
          <div class="see-more">Visa recept &rarr;</div>
        </div>
      `;
    }).join('');
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

      <div class="badges modal-badges">
        <span class="badge">${iconClock} ${esc(r.time)}</span>
        <span class="badge ${difficultyClass(r.difficulty)}">${esc(r.difficulty)}</span>
      </div>
      <div class="recipe-desc">${esc(r.description)}</div>

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

      <div class="section-lbl">Gör så här</div>
      ${(r.steps || []).map((s, i) => `
        <div class="step-row">
          <div class="step-num">${i + 1}</div>
          <div class="step-text">${esc(s)}</div>
        </div>
      `).join('')}

      <button class="add-to-shop-btn" id="addToShopBtn">
        ${iconShop} Lägg till i inköpslistan
      </button>

      <button class="cook-mode-start-btn" id="startCookMode">
        🍳 Starta kokläge
      </button>

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

    body.innerHTML = `
      <div class="step-number">${cookModeStep + 1}</div>
      <div class="step-content">${esc(steps[cookModeStep] || '')}</div>
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
    ]},
    { flag: '🇧🇦', country: 'Bosnien & Hercegovina', dishes: [
      { name: 'Ćevapi', ings: ['köttfärs', 'lök', 'vitlök', 'pitabröd', 'paprika'] },
      { name: 'Burek', ings: ['filodeg', 'köttfärs', 'lök', 'ägg', 'yoghurt'] },
      { name: 'Begova čorba', ings: ['kyckling', 'okra', 'morot', 'grädde', 'citron'] },
    ]},
    { flag: '🇷🇸', country: 'Serbien', dishes: [
      { name: 'Pljeskavica', ings: ['köttfärs', 'lök', 'paprika', 'vitlök', 'pitabröd'] },
      { name: 'Sarma', ings: ['kål', 'köttfärs', 'ris', 'lök', 'paprika'] },
      { name: 'Ćevapčići', ings: ['köttfärs', 'lök', 'vitlök', 'kajmak', 'bröd'] },
    ]},
    { flag: '🇬🇷', country: 'Grekland', dishes: [
      { name: 'Moussaka', ings: ['aubergine', 'köttfärs', 'tomat', 'ost', 'potatis'] },
      { name: 'Souvlaki', ings: ['kyckling', 'citron', 'vitlök', 'pitabröd', 'yoghurt'] },
      { name: 'Tzatziki', ings: ['yoghurt', 'gurka', 'vitlök', 'dill', 'citron'] },
    ]},
    { flag: '🇹🇷', country: 'Turkiet', dishes: [
      { name: 'Adana kebab', ings: ['lammfärs', 'paprika', 'lök', 'vitlök', 'tomat'] },
      { name: 'Lahmacun', ings: ['köttfärs', 'tomat', 'lök', 'paprika', 'persilja'] },
      { name: 'Menemen', ings: ['ägg', 'tomat', 'paprika', 'lök', 'vitlök'] },
    ]},
    { flag: '🇱🇧', country: 'Libanon', dishes: [
      { name: 'Falafel', ings: ['kikärtor', 'lök', 'vitlök', 'koriander', 'pitabröd'] },
      { name: 'Shawarma', ings: ['kyckling', 'vitlök', 'yoghurt', 'pitabröd', 'tomat'] },
      { name: 'Tabbouleh', ings: ['bulgur', 'persilja', 'tomat', 'lök', 'citron'] },
    ]},
    { flag: '🇹🇭', country: 'Thailand', dishes: [
      { name: 'Pad thai', ings: ['risnudlar', 'ägg', 'tofu', 'lime', 'jordnötter'] },
      { name: 'Gaeng khiao wan', ings: ['kyckling', 'kokosmjölk', 'curry', 'paprika', 'ris'] },
      { name: 'Tom kha gai', ings: ['kyckling', 'kokosmjölk', 'galangal', 'lime', 'citrongräs'] },
    ]},
    { flag: '🇯🇵', country: 'Japan', dishes: [
      { name: 'Tonkotsu ramen', ings: ['nudlar', 'ägg', 'soja', 'vitlök', 'ingefära'] },
      { name: 'Teriyaki-lax', ings: ['lax', 'soja', 'ris', 'sesam', 'ingefära'] },
      { name: 'Gyoza', ings: ['köttfärs', 'kål', 'vitlök', 'ingefära', 'soja'] },
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
    ]},
    { flag: '🇮🇳', country: 'Indien', dishes: [
      { name: 'Murgh makhani', ings: ['kyckling', 'tomat', 'grädde', 'vitlök', 'ris'] },
      { name: 'Dal tadka', ings: ['linser', 'tomat', 'lök', 'vitlök', 'ingefära'] },
      { name: 'Palak paneer', ings: ['spenat', 'paneer', 'lök', 'vitlök', 'grädde'] },
    ]},
    { flag: '🇲🇽', country: 'Mexiko', dishes: [
      { name: 'Tacos al pastor', ings: ['tortilla', 'fläskfilé', 'ananas', 'lök', 'koriander'] },
      { name: 'Burrito bowl', ings: ['ris', 'bönor', 'avokado', 'tomat', 'ost'] },
      { name: 'Enchiladas verdes', ings: ['tortilla', 'kyckling', 'ost', 'tomatillo', 'grädde'] },
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
    ]},
    { flag: '🇲🇦', country: 'Marocko', dishes: [
      { name: 'Tagine bil djaj', ings: ['kyckling', 'morötter', 'lök', 'citron', 'oliver'] },
      { name: 'Couscous-sallad', ings: ['couscous', 'morötter', 'paprika', 'lök', 'kikärtor'] },
      { name: 'Harira', ings: ['linser', 'tomat', 'lök', 'koriander', 'kikärtor'] },
    ]},
    { flag: '🇺🇸', country: 'USA', dishes: [
      { name: 'Mac & cheese', ings: ['pasta', 'cheddar', 'mjölk', 'smör', 'ströbröd'] },
      { name: 'Pulled pork', ings: ['fläskkarré', 'lök', 'vitlök', 'BBQ-sås', 'bröd'] },
      { name: 'Clam chowder', ings: ['musslor', 'potatis', 'bacon', 'lök', 'grädde'] },
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
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.world-card, .fav-card, .list-group').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      observer.observe(el);
    });
  }

  // ─── Service Worker ───
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  // ─── Init ───
  updateListBadge();
  updateFavBadge();
  renderQuickPicks();
  renderHistory();
  showOnboarding();

  // Handle initial hash
  const initView = location.hash.replace('#', '') || 'search';
  if (views[initView]) switchView(initView);
  ingInput.focus();

  // Scroll animations after initial render
  setTimeout(initScrollAnimations, 300);
})();
