// Generates public/og-cover.png — the 1200x630 social-share card shown when
// aaronlilla.github.io is linked on LinkedIn, Slack, iMessage, etc.
// Run: node scripts/make-og-image.mjs   (re-run if the logo or tagline changes)

import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200;
const H = 630;

const bg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="68%" cy="38%" r="75%">
      <stop offset="0%" stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#050608"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="16" y="16" width="${W - 32}" height="${H - 32}" rx="14"
        fill="none" stroke="#ffc26a" stroke-opacity="0.28" stroke-width="2"/>
  <text x="470" y="270" font-family="Arial, Helvetica, sans-serif" font-size="78"
        font-weight="700" fill="#ece3c8">Aaron Lilla</text>
  <text x="472" y="330" font-family="Arial, Helvetica, sans-serif" font-size="36"
        font-weight="600" fill="#c9c2ad">Full-Stack Software Engineer</text>
  <text x="472" y="386" font-family="Arial, Helvetica, sans-serif" font-size="25"
        fill="#ffc26a">React &#183; TypeScript &#183; Node &#183; Electron &#183; Real-time &#183; AI tooling</text>
  <text x="472" y="560" font-family="Arial, Helvetica, sans-serif" font-size="24"
        fill="#8a8472">aaronlilla.github.io</text>
</svg>`;

const base = await sharp(Buffer.from(bg)).png().toBuffer();

const logo = await sharp(join(ROOT, 'src/assets/mainlogo.png'))
  .resize({ height: 380, fit: 'inside' })
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

const out = join(ROOT, 'public/og-cover.png');
await sharp(base)
  .composite([{ input: logo, left: 90, top: Math.round((H - logoMeta.height) / 2) }])
  .png()
  .toFile(out);

console.log('wrote', out);
