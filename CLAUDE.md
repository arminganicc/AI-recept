# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Swedish AI-powered recipe app ("Amkos AI-Recept"). Users input ingredients (text or fridge photo), get recipe suggestions (3/5/8) from Claude Haiku 4.5. Vanilla JS PWA deployed on Vercel.

## Development

```bash
# Start local dev server (static files only — API calls require Vercel)
python3 -m http.server 3000 --bind 127.0.0.1

# Deploy
vercel
```

**Required env vars on Vercel:** `ANTHROPIC_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `UNSPLASH_ACCESS_KEY` (optional, for recipe images)

API endpoints (`/api/chat`, `/api/recognize-ingredients`, `/api/recipe-image`, `/api/config`, `/api/send-list`) are Vercel serverless functions and won't work on the local static server. Test UI locally, test API via `vercel dev` or after deploy.

## Architecture

**No build step, no bundler, no framework.** Three files make the whole frontend:

- `index.html` — HTML shell with 3 views and bottom nav
- `style.css` — design system via CSS variables, Plus Jakarta Sans, terrakotta accent `#C05A1F`
- `app.js` — all logic in a single IIFE (~1000 lines)

**View system:** The app has 3 tab-views (`#viewSearch`, `#viewInspiration`, `#viewFavorites`) controlled by `switchView()` using `hidden` attribute and `history.pushState`. No router library.

**State:** All state lives in module-scoped variables inside the IIFE. Persistence via `localStorage` keys: `fav_recipes`, `search_history`, `shopping_list`, `recipe_ratings`, `dark_mode`.

**API flow:** Ingredients + prefs + portions → prompt string → POST `/api/chat` → Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) responds with JSON → parsed and rendered as recipe cards. Responses are cached in a `Map` keyed by sorted ingredients+prefs+portions. Also supports freetext mode and meal plan generation.

**Fridge photo flow:** Image → base64 → POST `/api/recognize-ingredients` → Claude Haiku 4.5 Vision extracts ingredient names → auto-fills and triggers recipe search.

**Recipe images:** `/api/recipe-image` fetches food photos from Unsplash API with in-memory caching.

## Design system

Color palette uses warm terrakotta accent on off-white (`#F7F4EF`). Dark mode inverts to charcoal (`#0E0C0A`). All spacing is 8px multiples. The accent color (`--accent`) should only appear on: primary CTA, active filter chips, focus rings, and the terrakotta ingredient tags.

## Language

All UI text, prompts, and API responses are in **Swedish** by default. The app supports 4 languages: Swedish (sv), English (en), Spanish (es), Bosnian (bs). Code comments and variable names are in English.
