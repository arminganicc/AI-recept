const CACHE_NAME = 'amkos-v9.0';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/apple-touch-icon.png',
  '/icon-192.png',
  '/icon-512.png'
];

// Offline fallback HTML embedded directly
const OFFLINE_PAGE = `<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Offline — Amkos AI-Recept</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Plus Jakarta Sans',-apple-system,system-ui,sans-serif;background:#F7F4EF;color:#1A1208;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;text-align:center}
.offline-wrap{max-width:380px}
.offline-icon{font-size:64px;margin-bottom:16px}
h1{font-size:24px;font-weight:800;letter-spacing:-0.5px;margin-bottom:8px}
p{font-size:15px;color:#5B4A3E;line-height:1.6;margin-bottom:24px}
.retry-btn{display:inline-block;background:#C05A1F;color:#fff;border:none;padding:14px 32px;border-radius:14px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit}
.retry-btn:active{transform:scale(0.97)}
.hint{font-size:13px;color:#5E5043;margin-top:16px}
@media(prefers-color-scheme:dark){
body{background:#0E0C0A;color:#EDE8E0}
p,.hint{color:#B5A899}
.retry-btn{background:#D4652A}
}
</style>
</head>
<body>
<div class="offline-wrap">
<div class="offline-icon">📡</div>
<h1>Du verkar vara offline</h1>
<p>Inga problem! Dina sparade favoriter och inköpslistan finns kvar. Receptsökningar kräver internet.</p>
<button class="retry-btn" onclick="location.reload()">Försök igen</button>
<p class="hint">Kolla dina favoriter medan du väntar på nätet.</p>
</div>
</body>
</html>`;

// ─── Install: pre-cache static assets ───
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache the offline page
      cache.put('/_offline', new Response(OFFLINE_PAGE, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      }));
      return cache.addAll(STATIC_ASSETS);
    }).catch(() => {})
  );
  self.skipWaiting();
});

// ─── Activate: clean old caches, claim clients ───
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => {
      self.clients.matchAll().then(clients => {
        clients.forEach(client => client.postMessage({ type: 'SW_UPDATED', version: CACHE_NAME }));
      });
    })
  );
  self.clients.claim();
});

// ─── Message handling ───
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  // Cache recipe results from the app for offline viewing
  if (event.data && event.data.type === 'CACHE_RECIPES') {
    caches.open(CACHE_NAME).then(cache => {
      cache.put('/_cached_recipes', new Response(JSON.stringify(event.data.recipes), {
        headers: { 'Content-Type': 'application/json' }
      }));
    });
  }
});

// ─── Fetch strategies ───
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // API calls: network-only, return structured offline error
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response(JSON.stringify({
          error: 'Du verkar vara offline. Kontrollera din internetanslutning.',
          offline: true
        }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );
    return;
  }

  // Google Fonts & CDN: cache-first (immutable resources)
  if (url.hostname === 'fonts.googleapis.com' ||
      url.hostname === 'fonts.gstatic.com' ||
      url.hostname === 'cdn.jsdelivr.net') {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => cached || new Response('', { status: 408 }));
      })
    );
    return;
  }

  // Static assets (HTML, CSS, JS): stale-while-revalidate
  if (STATIC_ASSETS.some(asset => url.pathname === asset || url.pathname === asset.replace('/index.html', '/'))) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => cached);

        return cached || fetchPromise;
      })
    );
    return;
  }

  // Images & other assets: cache-first, network fallback
  if (url.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico)$/)) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => new Response('', { status: 408 }));
      })
    );
    return;
  }

  // Navigation requests: network-first with offline fallback page
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() =>
          caches.match(event.request)
            .then(cached => cached || caches.match('/_offline'))
        )
    );
    return;
  }

  // Everything else: network-first, fall back to cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
