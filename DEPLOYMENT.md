# Architect V3 Deployment Plan

## Overview

Architect V3 is the next-generation personal brand site for Zeeshan Sabri / ClarityOS.
It is a React 19 + Vite 7 + Tailwind CSS 3.4 SPA that will eventually replace the current
live site at `architect.global-mkts.com`.

## Phase 1: GitHub Repository (Complete)

- **Repo:** `https://github.com/zsabri19/architect-v3`
- **Branch:** `main`
- **Local path:** `/Users/zsabri/architect-v3/app/`

### What changed from the source zip
- Extracted from `Kimi_Agent_Logo Background Fix.zip`
- Fixed `src/components/shared.tsx` — `LogoCard` now supports per-logo `bgClass` override
- Fixed `src/lib/content.ts` — added `bgClass` for:
  - `cbo.png` (Central Bank of Oman) → dark background `#1a1a2e`
  - `ncm.png` (National Center of Meteorology) → white background

## Phase 2: Cloudflare Pages Deployment (Complete — 2026-07-22)

**LIVE:** `https://architect.global-mkts.com` now serves this codebase via Cloudflare Pages.

### Deployed Configuration

| Setting | Value |
|---|---|
| **Pages project** | `architect-v3` |
| **Pages URL** | `https://architect-v3.pages.dev` |
| **Custom domain** | `architect.global-mkts.com` (proxied) |
| **Deploy method** | Direct Upload via `wrangler pages deploy dist` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **SPA fallback** | `public/_redirects` → `/* /index.html 200` |

### DNS Change Log

- Previous: `architect.global-mkts.com` CNAME → `zsabri19.github.io` (GitHub Pages, was down)
- Current: `architect.global-mkts.com` CNAME → `architect-v3.pages.dev` (proxied via Cloudflare)

### Deploying Updates

```bash
cd app
npm run build
npx wrangler pages deploy dist --project-name architect-v3 --branch main
git add -A && git commit -m "<message>" && git push
```

### Notes

- The wrangler OAuth token lacks `dns_records:edit`, so DNS changes must be made in the Cloudflare dashboard.
- GitHub-connected CI builds are not configured; deployments are done manually via wrangler Direct Upload.

## Build Verification

```bash
cd app
npm install
npm run build
npm run preview
```

## Notes

- Keep `architect.global-mkts.com` pointing to the old codebase until V3 is fully approved.
- All Stripe, Mailchimp, and social links are hardcoded in `src/lib/content.ts`.
- Image assets are in `public/images/` and `public/logos/`.
