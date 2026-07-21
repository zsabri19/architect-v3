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

## Phase 2: Cloudflare Pages Deployment (Planned)

Cloudflare is the target hosting platform. We will use **Cloudflare Pages** because:
- The site is a static SPA (no server-side runtime needed)
- Vite build output is `dist/`
- Cloudflare already hosts the current domain

### Proposed Cloudflare Pages Configuration

| Setting | Value |
|---|---|
| **Project name** | `architect-v3` |
| **Production branch** | `main` |
| **Framework preset** | Vite |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node version** | `20` or `22` |
| **Root directory** | `app` (if monorepo layout) or `/` (if repo root is the app) |

### Domain Strategy

| Environment | Domain | Purpose |
|---|---|---|
| **Staging** | `architect-v3.global-mkts.com` | Testing and content review |
| **Production** | `architect.global-mkts.com` | Final switchover |

### DNS / Cloudflare Steps (when ready)

1. Create Cloudflare Pages project from the GitHub repo
2. Verify build succeeds on Cloudflare's CI
3. Add custom domain `architect-v3.global-mkts.com` for staging
4. Review staging site thoroughly
5. When approved, update `architect.global-mkts.com` DNS record to point to the new Pages project
6. Decommission or archive the old `architect.global-mkts.com` origin

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
