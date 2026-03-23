const ALLOWED_ORIGINS = [
  'https://vadskavialaga.se',
  'https://www.vadskavialaga.se',
  'https://receptappen.vercel.app',
];

function getCorsHeaders(origin) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

// Simple in-memory cache to reduce Unsplash API calls
const imageCache = new Map();
const CACHE_MAX = 200;

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  const corsHeaders = getCorsHeaders(origin);
  Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const query = (req.query.q || '').trim().slice(0, 100);
  if (!query) return res.status(400).json({ error: 'Missing query parameter q' });

  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    return res.status(200).json({ url: null, error: 'Image service not configured' });
  }

  // Check cache
  const cacheKey = query.toLowerCase();
  if (imageCache.has(cacheKey)) {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.status(200).json(imageCache.get(cacheKey));
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const searchQuery = encodeURIComponent(`${query} food dish`);
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=1&orientation=landscape&content_filter=high`,
      {
        headers: { 'Authorization': `Client-ID ${accessKey}` },
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error('Unsplash API error:', response.status);
      return res.status(200).json({ url: null });
    }

    const data = await response.json();
    const photo = data.results?.[0];

    if (!photo) {
      const result = { url: null };
      imageCache.set(cacheKey, result);
      return res.status(200).json(result);
    }

    const result = {
      url: photo.urls?.small || photo.urls?.regular,
      photographer: photo.user?.name || '',
      photographerUrl: photo.user?.links?.html || '',
      alt: photo.alt_description || query,
    };

    // Cache result
    if (imageCache.size >= CACHE_MAX) {
      const firstKey = imageCache.keys().next().value;
      imageCache.delete(firstKey);
    }
    imageCache.set(cacheKey, result);

    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.status(200).json(result);
  } catch (error) {
    console.error('Recipe image fetch error:', error.message);
    return res.status(200).json({ url: null });
  }
}
