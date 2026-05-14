// Captures the boot overlay mid-animation (motion ENABLED).
// Saves frames at multiple stages for review.

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const URL_ROOT = process.env.URL || 'http://localhost:4173';
const OUT_DIR  = '.playwright-screenshots/boot';

const VIEWPORTS = [
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'mobile-360',   width: 360,  height: 800 },
];

// Capture frames at these times after navigation start (ms)
const FRAMES_MS = [120, 380, 700, 1100, 1700, 2400, 3200];

async function main() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      reducedMotion: 'no-preference', // ENABLE motion for the boot intro
      colorScheme: 'dark',
    });
    const page = await ctx.newPage();
    console.log(`▸ [${vp.name}] navigating`);
    const navStart = Date.now();
    await page.goto(URL_ROOT, { waitUntil: 'commit' });

    for (const targetMs of FRAMES_MS) {
      const elapsed = Date.now() - navStart;
      const wait = Math.max(0, targetMs - elapsed);
      if (wait > 0) await page.waitForTimeout(wait);
      const path = join(OUT_DIR, `${vp.name}-t${String(targetMs).padStart(4, '0')}.png`);
      await page.screenshot({ path, fullPage: false });
      console.log(`▸ [${vp.name}] frame @${targetMs}ms → ${path}`);
    }
    await ctx.close();
  }
  await browser.close();
  console.log('▸ done');
}

main().catch((err) => { console.error(err); process.exit(1); });
