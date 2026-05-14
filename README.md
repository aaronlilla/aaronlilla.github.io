# aaronlilla.github.io

Aaron Lilla's portfolio — full-stack software engineer. Live at **<https://aaronlilla.github.io>**.

Vite + React + TypeScript + Tailwind, single-page anchored layout, CRT/broadcast aesthetic. Deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Local development

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build into dist/
npm run typecheck  # TS check, no emit
npm run visual     # Playwright visual regression at 5 viewports
```

## Deployment

Pushed to `main` → built by GitHub Actions (`.github/workflows/deploy.yml`) → deployed to GitHub Pages.

**One-time setup** (after the first push):

1. Go to **Settings → Pages**.
2. Source: **GitHub Actions** (not "Deploy from a branch").
3. The workflow runs; first deploy takes ~90 seconds.

## Structure

```
.
├── index.html                  # Vite entry
├── src/
│   ├── App.tsx                 # Section composition (Hero → Contact)
│   ├── data/                   # All site content lives here as TS data
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── caseStudies.ts
│   │   ├── skills.ts
│   │   ├── contact.ts
│   │   └── nav.ts
│   ├── components/
│   │   ├── sections/           # One file per section
│   │   ├── ui/                 # Section, Logo
│   │   ├── effects/            # CRTScreen, GlowingMark, YouTubeFacade, …
│   │   └── layout/             # AppShell, NavMenu
│   └── lib/                    # cn, useInView, reducedMotion, accents
├── public/
│   ├── resume.html             # Print-friendly résumé page
│   ├── resume.txt              # Plain text for ATS uploads
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── .nojekyll               # Disable Jekyll on GitHub Pages
│   └── _headers                # Cloudflare Pages headers (ignored by GH Pages)
├── resume-assets/              # Non-build assets — see resume-assets/README.md
├── scripts/
│   └── visual-check.mjs        # Playwright smoke test
└── .github/workflows/deploy.yml
```

## Adding a project, role, case study, or skill

Edit the relevant TS file in `src/data/`. No component changes needed.

## Editing the résumé

Three sources, kept in sync manually:
- `RESUME.md` — canonical content
- `public/resume.html` — printed / linked version
- `public/resume.txt` — for ATS uploads

When you edit one, edit the others.

## Custom domain

When `aaronlilla.com` (or any other domain) is registered:

1. Create `public/CNAME` with the bare domain (one line, e.g. `aaronlilla.com`).
2. At the registrar, add an `A` record pointing to GitHub Pages IPs:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. Sweep `aaronlilla.github.io` → `aaronlilla.com` in `index.html`, `public/sitemap.xml`, `public/robots.txt`, `RESUME.md`, `public/resume.html`, `public/resume.txt`.
4. Push. GitHub Pages auto-issues SSL within a few minutes.
