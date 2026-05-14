// Generate small WebP variant of mainlogo.png for the nav.
// The original PNG (~334 KB) is kept for the bumper where it's shown large.
// Run: node scripts/optimize-logo.mjs

import sharp from 'sharp';
import { join } from 'node:path';
import { stat } from 'node:fs/promises';

const SRC = join('src', 'assets', 'mainlogo.png');
const OUT = join('src', 'assets', 'mainlogo-sm.webp');
const NAV_PX_H = 28;          // h-7 in tailwind = 1.75rem ≈ 28px
const TARGET_H = NAV_PX_H * 4; // generate at 4x for crisp HiDPI

const before = (await stat(SRC)).size;

await sharp(SRC)
  .resize({ height: TARGET_H, withoutEnlargement: true })
  .webp({ quality: 85, effort: 6 })
  .toFile(OUT);

const after = (await stat(OUT)).size;

const fmt = (b) => `${(b / 1024).toFixed(1)} KB`;
console.log(`✓ ${SRC}  ${fmt(before)}`);
console.log(`✓ ${OUT}  ${fmt(after)}  (${TARGET_H}px tall, ${Math.round((1 - after / before) * 100)}% smaller)`);
