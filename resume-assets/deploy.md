# Deploy Guide — aaronlilla.github.io

Site is hosted on **GitHub Pages**, deployed automatically via GitHub Actions on every push to `main`.

Live at <https://aaronlilla.github.io>.

---

## How it works

`.github/workflows/deploy.yml` does the whole thing:

1. Runs on every push to `main`.
2. Spins up Ubuntu, installs Node 20, runs `npm ci`.
3. Runs `npm run build` → produces `dist/`.
4. Uploads `dist/` as a GitHub Pages artifact.
5. Deploys via `actions/deploy-pages@v4`.

First-time setup (once per repo):

1. Go to **Settings → Pages**.
2. Build and deployment **Source**: **GitHub Actions** (not "Deploy from a branch").
3. That's it. Push to `main`, the workflow runs, the site is live in ~90 seconds.

To track a deploy: **Actions tab → Deploy to GitHub Pages → most recent run.**

---

## Pre-flight checklist (before each push)

```bash
cd C:/Users/aaron/Documents/GitHub/aaronlilla.github.io

npm run typecheck             # passes
npm run build                 # passes
npm run dev &                 # start dev server
URL=http://localhost:5173 node scripts/visual-check.mjs   # passes
kill %1                       # stop dev server
```

If all four pass, push with confidence.

---

## Post-deploy checklist

After the workflow finishes:

- [ ] <https://aaronlilla.github.io/> loads, hero copy correct, no console errors.
- [ ] <https://aaronlilla.github.io/resume.html> renders, print preview clean.
- [ ] <https://aaronlilla.github.io/resume.txt> loads.
- [ ] <https://aaronlilla.github.io/robots.txt> returns the sitemap pointer.
- [ ] <https://aaronlilla.github.io/sitemap.xml> returns XML.
- [ ] Click a TableCaptain video — YouTube loads and plays.
- [ ] Click the Spire of Ash Steam link — opens the store page.
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) — `Person` schema found.
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) — aim for 90+ on Performance and Accessibility.
- [ ] [Google Search Console](https://search.google.com/search-console) — submit `https://aaronlilla.github.io/sitemap.xml`.

---

## Custom domain (when you buy aaronlilla.com or any other)

1. Create `public/CNAME` containing the bare domain on one line:
   ```
   aaronlilla.com
   ```
2. At your registrar, add **A** records pointing to GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. (Optional, but recommended) Also add a `www` `CNAME` record → `aaronlilla.github.io`.
4. Sweep `aaronlilla.github.io` → `aaronlilla.com` in code:
   ```bash
   cd C:/Users/aaron/Documents/GitHub/aaronlilla.github.io
   for f in index.html RESUME.md public/sitemap.xml public/robots.txt public/resume.html public/resume.txt 404.html; do
     sed -i 's|aaronlilla\.github\.io|aaronlilla.com|g' "$f"
   done
   find resume-assets -type f \( -name "*.md" -o -name "*.html" \) -exec sed -i 's|aaronlilla\.github\.io|aaronlilla.com|g' {} \;
   ```
5. Commit + push. GitHub Pages auto-issues SSL within a few minutes.
6. In **Settings → Pages**, verify the custom domain field shows `aaronlilla.com` with a green check.

---

## Alternative hosts (kept as backup, not currently used)

The repo also includes config for Vercel, Netlify, and Cloudflare Pages — switch hosts at any time:

- `vercel.json` — Vercel config (auto-detects Vite, just connect the repo at [vercel.com](https://vercel.com))
- `netlify.toml` — Netlify config (auto-detects, just connect the repo at [app.netlify.com](https://app.netlify.com))
- `public/_headers` — Cloudflare Pages headers (just connect the repo at [dash.cloudflare.com](https://dash.cloudflare.com))

All three are no-config drops: connect, deploy, get an HTTPS URL. Cloudflare Pages has the best free tier if you outgrow GitHub Pages bandwidth.

---

## Updating the live site

Just push:

```bash
git add -A
git commit -m "Your message"
git push
```

GitHub Actions builds + deploys automatically. The badge in the Actions tab shows progress.

If you want a preview without going live: use a feature branch. Actions only deploys from `main`.
