# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Swedish AI-powered recipe app ("Vad ska vi laga?"). Users input ingredients (text or fridge photo), get 4 recipe suggestions from Claude Haiku. Vanilla JS PWA deployed on Vercel.

## Development

```bash
# Start local dev server (static files only — API calls require Vercel)
python3 -m http.server 3000 --bind 127.0.0.1

# Deploy
vercel
```

**Required env var on Vercel:** `ANTHROPIC_API_KEY`

API endpoints (`/api/chat`, `/api/recognize-ingredients`) are Vercel serverless functions and won't work on the local static server. Test UI locally, test API via `vercel dev` or after deploy.

## Architecture

**No build step, no bundler, no framework.** Three files make the whole frontend:

- `index.html` — HTML shell with 3 views and bottom nav
- `style.css` — design system via CSS variables, Plus Jakarta Sans, terrakotta accent `#C05A1F`
- `app.js` — all logic in a single IIFE (~1000 lines)

**View system:** The app has 3 tab-views (`#viewSearch`, `#viewInspiration`, `#viewFavorites`) controlled by `switchView()` using `hidden` attribute and `history.pushState`. No router library.

**State:** All state lives in module-scoped variables inside the IIFE. Persistence via `localStorage` keys: `fav_recipes`, `search_history`, `shopping_list`, `recipe_ratings`, `dark_mode`.

**API flow:** Ingredients + prefs + portions → prompt string → POST `/api/chat` → Claude Haiku responds with JSON → parsed and rendered as recipe cards. Responses are cached in a `Map` keyed by sorted ingredients+prefs+portions.

**Fridge photo flow:** Image → base64 → POST `/api/recognize-ingredients` → Claude Vision extracts ingredient names → auto-fills and triggers recipe search.

## Design system

Color palette uses warm terrakotta accent on off-white (`#F7F4EF`). Dark mode inverts to charcoal (`#0E0C0A`). All spacing is 8px multiples. The accent color (`--accent`) should only appear on: primary CTA, active filter chips, focus rings, and the terrakotta ingredient tags.

## Language

All UI text, prompts, and API responses are in **Swedish**. Code comments and variable names are in English.
