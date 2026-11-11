# Vacato website

Frontend-only marketing, support and privacy site for the Vacato iOS app (Vite + React 19 + TypeScript + Tailwind v4). Bilingual (English default, Bahasa Indonesia) with System / Light / Dark themes. No backend: contact is `mailto:` only.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ (SPA fallback, test all 6 URLs here)
npm run lint
npm run typecheck
```

## Edit content

All user-facing text lives in `src/content/{en,id}/` (`common`, `home`, `support`, `privacy`, `meta`).
Types are defined once in `src/content/types.ts`; both languages use `satisfies`, so a missing key in either language is a TypeScript error.
Non-text values (email, App Store URL, App ID, version, privacy date) are in `src/config/site.ts`.

## Add a language

1. Add the code and metadata in `src/i18n/locales.ts` (`LOCALES`, `LOCALE_META` with its URL prefix).
2. Create `src/content/<code>/` with the same 6 files and register it in `src/content/index.ts`.
3. Add its option label in every language's `common.language.options` (the type forces this).
4. Add the routes in `src/App.tsx`, the badge `public/badges/app-store-badge-<code>.svg`, optional screenshots in `public/images/screenshots/<code>/`, and the new URLs in `public/sitemap.xml`.

## Replace assets

| File                                               | Replace with                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------- |
| `public/images/app-icon.png`                       | Real app icon (square, 1024px)                                      |
| `public/apple-touch-icon.png`                      | 180x180 icon                                                        |
| `public/favicon.svg`                               | Real favicon                                                        |
| `public/images/og-image.png`                       | 1200x630 share image                                                |
| `public/badges/app-store-badge-en.svg` / `-id.svg` | Official Apple badges (never redraw them)                           |
| `public/images/screenshots/en/hero.png`            | Main screenshot (1206x2622). Optional `hero-dark.png` for dark mode |
| `public/images/screenshots/id/hero.png`            | Indonesian screenshot (falls back to `en/` if missing)              |

## Go live checklist

In `src/config/site.ts` fill `supportEmail`, `appStoreUrl`, `appleAppId`. Until then the site shows "Coming soon" and disables the mailto buttons. Review `privacy.ts` in both languages (`// TODO: review legal`).

## Deploy to Vercel

Import the repo in Vercel (framework: Vite, build `npm run build`, output `dist`). `vercel.json` rewrites every route to `index.html`. Set the domain to `vacato.vercel.app`. If it differs, update `siteUrl` in `site.ts`, `public/robots.txt` and `public/sitemap.xml`.

## URLs for App Store Connect

| Field              | English                             | Bahasa Indonesia                       |
| ------------------ | ----------------------------------- | -------------------------------------- |
| Marketing URL      | `https://vacato.vercel.app/`        | `https://vacato.vercel.app/id`         |
| Support URL        | `https://vacato.vercel.app/support` | `https://vacato.vercel.app/id/support` |
| Privacy Policy URL | `https://vacato.vercel.app/privacy` | `https://vacato.vercel.app/id/privacy` |
