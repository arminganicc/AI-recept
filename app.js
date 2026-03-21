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

  let favorites    = loadStorage('fav_recipes', []);
  let searchHistory = loadStorage('search_history', []);
  let shoppingList  = loadStorage('shopping_list', []);
  let ratings       = loadStorage('recipe_ratings', {});

  const quickItems = [
    'kyckling', 'lax', 'pasta', 'ris', 'lök',
    'vitlök', 'grädde', 'tomat', 'potatis', 'ägg',
    'ost', 'bacon', 'paprika', 'morötter', 'spenat'
  ];

  // ─── DOM refs ───
  const ingInput       = document.getElementById('ingInput');
  const addBtn         = document.getElementById('addBtn');
  const tagsEl         = document.getElementById('tags');
  const searchBtn      = document.getElementById('searchBtn');
  const errBox         = document.getElementById('errBox');
  const loadingEl      = document.getElementById('loadingEl');
  const recipeList     = document.getElementById('recipeList');
  // favSection removed — favorites now in own view
  const quickPicks     = document.getElementById('quickPicks');
  const overlay        = document.getElementById('overlay');
  const modal          = document.getElementById('modal');
  const settingsToggle = document.getElementById('settingsToggle');
  const prefChips      = document.getElementById('prefChips');
  const copyToast      = document.getElementById('copyToast');
  const worldGrid      = document.getElementById('worldGrid');
  const historySection = document.getElementById('historySection');
  const shopFab        = document.getElementById('shopFab');
  const shopCount      = document.getElementById('shopCount');
  const shopOverlay    = document.getElementById('shopOverlay');
  const shopModal      = document.getElementById('shopModal');
  const filterTabs     = document.getElementById('filterTabs');
  const favGrid        = document.getElementById('favGrid');
  const favsEmpty      = document.getElementById('favsEmpty');
  const favCountEl     = document.getElementById('favCount');
  const favBadge       = document.getElementById('favBadge');

  // ─── View System ───
  const views = {
    search: document.getElementById('viewSearch'),
    inspiration: document.getElementById('viewInspiration'),
    favorites: document.getElementById('viewFavorites'),
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
  }

  document.querySelector('.bottom-nav').addEventListener('click', e => {
    const btn = e.target.closest('.nav-item');
    if (btn) switchView(btn.dataset.view);
  });

  window.addEventListener('popstate', e => {
    switchView(e.state?.view || 'search');
  });

  document.getElementById('emptyCtaBtn')?.addEventListener('click', () => switchView('search'));

  // ─── Fridge Photo refs ───
  const fridgeBtn     = document.getElementById('fridgeBtn');
  const fridgeInput   = document.getElementById('fridgeInput');
  const fridgePreview = document.getElementById('fridgePreview');
  const fridgeImg     = document.getElementById('fridgeImg');
  const fridgeScanning = document.getElementById('fridgeScanning');
  const fridgeRemove  = document.getElementById('fridgeRemove');

  // ─── Helpers ───
  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function saveFavorites() { localStorage.setItem('fav_recipes', JSON.stringify(favorites)); }
  function isFav(name) { return favorites.some(f => f.name === name); }

  function showToast(msg) {
    copyToast.textContent = msg;
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

  // ─── Preferences ───
  prefChips.addEventListener('click', e => {
    const chip = e.target.closest('.pref-chip');
    if (!chip) return;
    const pref = chip.dataset.pref;
    if (prefs.has(pref)) { prefs.delete(pref); chip.classList.remove('active'); }
    else { prefs.add(pref); chip.classList.add('active'); }
  });

  // ─── Search Portions ───
  document.getElementById('spMinus').addEventListener('click', () => {
    if (searchPortions > 1) { searchPortions--; document.getElementById('spNum').textContent = searchPortions; }
  });
  document.getElementById('spPlus').addEventListener('click', () => {
    if (searchPortions < 20) { searchPortions++; document.getElementById('spNum').textContent = searchPortions; }
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
  }

  function updateFavBadge() {
    const count = favorites.length;
    if (favBadge) favBadge.textContent = count > 0 ? count : '';
    if (favCountEl) favCountEl.textContent = `${count} recept ${count === 1 ? 'sparat' : 'sparade'}`;
  }

  tagsEl.addEventListener('click', e => {
    const btn = e.target.closest('.tag button');
    if (btn) removeIng(Number(btn.dataset.idx));
  });
  ingInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); addIng(); } });
  addBtn.addEventListener('click', addIng);

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
  }

  function updateShopFab() {
    shopCount.textContent = shoppingList.length;
    shopFab.classList.toggle('visible', shoppingList.length > 0);
  }

  function addToShoppingList(ingredientList) {
    let added = 0;
    ingredientList.forEach(ing => {
      const name = ing.trim();
      if (name && !shoppingList.some(item => item.name.toLowerCase() === name.toLowerCase())) {
        shoppingList.push({ name, checked: false });
        added++;
      }
    });
    saveShoppingList();
    updateShopFab();
    if (added > 0) {
      showToast(`${added} ingrediens${added !== 1 ? 'er' : ''} tillagd${added !== 1 ? 'a' : ''}`);
    } else {
      showToast('Ingredienserna finns redan i listan');
    }
  }

  function renderShopModalContent() {
    const unchecked = shoppingList.map((item, i) => ({ item, i })).filter(({ item }) => !item.checked);
    const checked   = shoppingList.map((item, i) => ({ item, i })).filter(({ item }) => item.checked);

    shopModal.innerHTML = `
      <div class="modal-top">
        <div class="modal-title">${iconShop} &nbsp;Inköpslista</div>
        <div class="modal-actions">
          <button class="modal-action-btn close-btn" id="shopCloseBtn" aria-label="Stäng">${iconClose}</button>
        </div>
      </div>

      ${shoppingList.length === 0 ? `
        <div class="shop-empty">
          <div class="shop-empty-icon">🛒</div>
          Listan är tom.<br>Öppna ett recept och tryck på<br><em>"Lägg till i inköpslistan"</em>.
        </div>
      ` : ''}

      ${unchecked.map(({ item, i }) => `
        <div class="shop-item">
          <input type="checkbox" class="shop-check" data-idx="${i}">
          <span class="shop-item-name">${esc(item.name)}</span>
          <button class="shop-item-rm" data-rm="${i}" aria-label="Ta bort">×</button>
        </div>
      `).join('')}

      ${checked.length > 0 ? `
        <div class="section-lbl" style="margin-top:20px;">Klara</div>
        ${checked.map(({ item, i }) => `
          <div class="shop-item checked">
            <input type="checkbox" class="shop-check" data-idx="${i}" checked>
            <span class="shop-item-name">${esc(item.name)}</span>
            <button class="shop-item-rm" data-rm="${i}" aria-label="Ta bort">×</button>
          </div>
        `).join('')}
      ` : ''}

      ${shoppingList.length > 0 ? `
        <div class="shop-actions">
          ${checked.length > 0 ? '<button class="shop-clear-btn" id="clearChecked">Rensa klara</button>' : ''}
          <button class="shop-clear-btn" id="clearAll">Rensa alla</button>
        </div>
      ` : ''}
    `;

    document.getElementById('shopCloseBtn').addEventListener('click', closeShopModal);

    shopModal.querySelectorAll('.shop-check').forEach(cb => {
      cb.addEventListener('change', () => {
        const idx = Number(cb.dataset.idx);
        if (shoppingList[idx]) shoppingList[idx].checked = cb.checked;
        saveShoppingList();
        updateShopFab();
        renderShopModalContent();
      });
    });

    shopModal.querySelectorAll('.shop-item-rm').forEach(btn => {
      btn.addEventListener('click', () => {
        shoppingList.splice(Number(btn.dataset.rm), 1);
        saveShoppingList();
        updateShopFab();
        renderShopModalContent();
      });
    });

    const clearCheckedBtn = document.getElementById('clearChecked');
    if (clearCheckedBtn) {
      clearCheckedBtn.addEventListener('click', () => {
        shoppingList = shoppingList.filter(i => !i.checked);
        saveShoppingList();
        updateShopFab();
        renderShopModalContent();
      });
    }

    const clearAllBtn = document.getElementById('clearAll');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => {
        shoppingList = [];
        saveShoppingList();
        updateShopFab();
        closeShopModal();
      });
    }
  }

  function openShopModal() {
    renderShopModalContent();
    shopOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeShopModal() {
    shopOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  shopFab.addEventListener('click', openShopModal);
  shopOverlay.addEventListener('click', e => { if (e.target === shopOverlay) closeShopModal(); });

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

  searchBtn.addEventListener('click', findRecipes);

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
            <span class="badge green">${esc(r.difficulty)}</span>
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
      renderRecipes(); renderFavorites(); return;
    }
    const card = e.target.closest('.recipe-card');
    if (card) openRecipe(Number(card.dataset.idx));
  });

  // ─── Favorites ───
  function toggleFavorite(recipe) {
    const idx = favorites.findIndex(f => f.name === recipe.name);
    if (idx > -1) favorites.splice(idx, 1); else favorites.push(recipe);
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
        favorites.splice(Number(rmBtn.dataset.favRm), 1);
        saveFavorites(); renderFavView(); renderRecipes(); return;
      }
      const card = e.target.closest('.fav-card');
      if (card) { recipes = [...favorites]; openRecipe(Number(card.dataset.favOpen)); }
    });
  }

  // ─── Modal ───
  function openRecipe(idx) {
    const r = recipes[idx];
    if (!r) return;
    portions = r.servings || 4;

    const currentRating = ratings[r.name] || 0;

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
        <span class="badge green">${esc(r.difficulty)}</span>
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
      ${(r.ingredients || []).map(ing => `<div class="ing-item"><span class="dot"></span>${esc(ing)}</div>`).join('')}

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

    // Portions
    document.getElementById('portMinus').addEventListener('click', () => {
      if (portions > 1) { portions--; document.getElementById('portNum').textContent = portions; }
    });
    document.getElementById('portPlus').addEventListener('click', () => {
      if (portions < 20) { portions++; document.getElementById('portNum').textContent = portions; }
    });

    // Copy
    document.getElementById('copyBtn').addEventListener('click', async () => {
      const text = recipeToText(r);
      try { await navigator.clipboard.writeText(text); showToast('Kopierat till urklipp'); }
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
      try { await navigator.clipboard.writeText(text); showToast('Kopierat till urklipp'); }
      catch { showToast('Dela ej tillgängligt'); }
    });

    // Print
    document.getElementById('printBtn').addEventListener('click', () => window.print());

    // Add to shopping list
    document.getElementById('addToShopBtn').addEventListener('click', () => {
      addToShoppingList(r.ingredients || []);
    });

    // Rating
    const starsEl = document.getElementById('stars');
    starsEl.addEventListener('click', e => {
      const btn = e.target.closest('.star-btn');
      if (!btn) return;
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
    if (e.key === 'Escape') { closeModal(); closeShopModal(); }
  });

  // ─── World Cuisine Catalog ───
  const worldCuisines = [
    { flag: '🇸🇪', country: 'Sverige', bento: 'xl', dishes: [
      { name: 'Köttbullar med gräddsås', ings: ['köttfärs', 'lök', 'grädde', 'potatis', 'lingon'] },
      { name: 'Janssons frestelse', ings: ['potatis', 'lök', 'ansjovis', 'grädde', 'ströbröd'] },
      { name: 'Toast Skagen', ings: ['räkor', 'majonnäs', 'dill', 'citron', 'bröd'] },
      { name: 'Gravlax', ings: ['lax', 'dill', 'socker', 'salt', 'citron'] },
    ]},
    { flag: '🇮🇹', country: 'Italien', bento: 'xl', dishes: [
      { name: 'Pasta carbonara', ings: ['pasta', 'ägg', 'bacon', 'ost', 'vitlök'] },
      { name: 'Risotto ai funghi', ings: ['ris', 'svamp', 'lök', 'vitlök', 'ost'] },
      { name: 'Osso buco', ings: ['kalvlägg', 'tomat', 'lök', 'vitlök', 'morot'] },
    ]},
    { flag: '🇧🇦', country: 'Balkan', bento: 'wide', dishes: [
      { name: 'Ćevapi', ings: ['köttfärs', 'lök', 'vitlök', 'pitabröd', 'paprika'] },
      { name: 'Burek', ings: ['filodeg', 'köttfärs', 'lök', 'ägg', 'yoghurt'] },
      { name: 'Sarma', ings: ['kål', 'köttfärs', 'ris', 'lök', 'paprika'] },
      { name: 'Pljeskavica', ings: ['köttfärs', 'lök', 'paprika', 'vitlök', 'pitabröd'] },
    ]},
    { flag: '🇬🇷', country: 'Grekland', bento: 'sm', dishes: [
      { name: 'Moussaka', ings: ['aubergine', 'köttfärs', 'tomat', 'ost', 'potatis'] },
      { name: 'Souvlaki', ings: ['kyckling', 'citron', 'vitlök', 'pitabröd', 'yoghurt'] },
      { name: 'Tzatziki', ings: ['yoghurt', 'gurka', 'vitlök', 'dill', 'citron'] },
    ]},
    { flag: '🇹🇷', country: 'Turkiet', bento: 'sm', dishes: [
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
      { name: 'Grön curry', ings: ['kyckling', 'kokosmjölk', 'curry', 'paprika', 'ris'] },
      { name: 'Tom kha gai', ings: ['kyckling', 'kokosmjölk', 'ingefära', 'lime'] },
    ]},
    { flag: '🇯🇵', country: 'Japan', dishes: [
      { name: 'Ramen', ings: ['nudlar', 'ägg', 'soja', 'vitlök', 'ingefära'] },
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
      { name: 'Kung pao-kyckling', ings: ['kyckling', 'jordnötter', 'paprika', 'soja', 'vitlök'] },
      { name: 'Chow mein', ings: ['nudlar', 'kyckling', 'paprika', 'morötter', 'soja'] },
      { name: 'Mapo tofu', ings: ['tofu', 'köttfärs', 'vitlök', 'ingefära', 'soja'] },
    ]},
    { flag: '🇮🇳', country: 'Indien', dishes: [
      { name: 'Butter chicken', ings: ['kyckling', 'tomat', 'grädde', 'vitlök', 'ris'] },
      { name: 'Dal', ings: ['linser', 'tomat', 'lök', 'vitlök', 'ingefära'] },
      { name: 'Palak paneer', ings: ['spenat', 'ost', 'lök', 'vitlök', 'grädde'] },
    ]},
    { flag: '🇲🇽', country: 'Mexiko', dishes: [
      { name: 'Tacos al pastor', ings: ['tortilla', 'fläskfilé', 'ananas', 'lök', 'koriander'] },
      { name: 'Burrito bowl', ings: ['ris', 'bönor', 'avokado', 'tomat', 'ost'] },
      { name: 'Enchiladas', ings: ['tortilla', 'kyckling', 'ost', 'tomat', 'grädde'] },
    ]},
    { flag: '🇫🇷', country: 'Frankrike', dishes: [
      { name: 'Ratatouille', ings: ['aubergine', 'zucchini', 'paprika', 'tomat', 'vitlök'] },
      { name: 'Coq au vin', ings: ['kyckling', 'bacon', 'svamp', 'lök', 'morötter'] },
      { name: 'Croque monsieur', ings: ['bröd', 'skinka', 'ost', 'smör', 'mjölk'] },
      { name: 'Bouillabaisse', ings: ['fisk', 'räkor', 'tomat', 'vitlök', 'saffran'] },
    ]},
    { flag: '🇪🇸', country: 'Spanien', dishes: [
      { name: 'Paella', ings: ['ris', 'kyckling', 'räkor', 'paprika', 'saffran'] },
      { name: 'Patatas bravas', ings: ['potatis', 'tomat', 'vitlök', 'paprika', 'majonnäs'] },
      { name: 'Gazpacho', ings: ['tomat', 'gurka', 'paprika', 'vitlök', 'olivolja'] },
    ]},
    { flag: '🇲🇦', country: 'Marocko', dishes: [
      { name: 'Kycklingtagine', ings: ['kyckling', 'morötter', 'lök', 'citron', 'oliver'] },
      { name: 'Couscous-sallad', ings: ['couscous', 'morötter', 'paprika', 'lök', 'kikärtor'] },
      { name: 'Harira-soppa', ings: ['linser', 'tomat', 'lök', 'koriander', 'kikärtor'] },
    ]},
    { flag: '🇺🇸', country: 'USA', dishes: [
      { name: 'Mac & cheese', ings: ['pasta', 'ost', 'mjölk', 'smör', 'ströbröd'] },
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
    const ings = JSON.parse(dish.dataset.ings);
    ingredients = [];
    ings.forEach(ing => { if (!ingredients.includes(ing)) ingredients.push(ing); });
    switchView('search');
    render();
    ingInput.focus();
  });

  document.getElementById('surpriseBtn')?.addEventListener('click', () => {
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

      // Show preview
      const url = URL.createObjectURL(file);
      fridgeImg.src = url;
      fridgePreview.style.display = 'block';
      fridgeScanning.style.display = 'flex';
      fridgeBtn.parentElement.querySelector('.fridge-btn').style.display = 'none';

      // Convert to base64
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
            // Staggered pop animation — add ingredients one by one
            ingredients = [];
            for (let k = 0; k < found.length; k++) {
              const ing = found[k].trim().toLowerCase();
              if (ing && !ingredients.includes(ing)) ingredients.push(ing);
            }
            render();
            showToast(`Vi hittade ${ingredients.length} råvaror`);

            // Auto-trigger search
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

  // ─── Tilt effect on recipe cards (Micro-Gestures) ───
  function initTilt(container) {
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

  // Patch renderRecipes to add tilt
  const _origRenderRecipes = renderRecipes;
  // We reassign below

  // ─── Service Worker ───
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  // ─── Init ───
  updateShopFab();
  updateFavBadge();
  renderQuickPicks();
  renderHistory();
  // Handle initial hash
  const initView = location.hash.replace('#', '') || 'search';
  if (views[initView]) switchView(initView);
  ingInput.focus();
})();
