// Visual smoke test: load the site at multiple viewports, capture
// screenshots, and report layout/console/network issues.
//
// Usage:
//   node scripts/visual-check.mjs                 # uses preview server at :4173
//   URL=http://localhost:5173 node scripts/...    # override target
//   FULLPAGE=0 node scripts/...                   # only above-the-fold
//
// Outputs:
//   .playwright-screenshots/{viewport}.png
//   .playwright-screenshots/report.json

import { chromium } from 'playwright';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const URL_ROOT = process.env.URL || 'http://localhost:4173';
const OUT_DIR  = '.playwright-screenshots';
const FULLPAGE = process.env.FULLPAGE !== '0';

const VIEWPORTS = [
  { name: 'mobile-360',  width: 360,  height: 800,  deviceScaleFactor: 2, isMobile: true,  hasTouch: true  },
  { name: 'mobile-414',  width: 414,  height: 896,  deviceScaleFactor: 2, isMobile: true,  hasTouch: true  },
  { name: 'tablet-768',  width: 768,  height: 1024, deviceScaleFactor: 2, isMobile: true,  hasTouch: true  },
  { name: 'desktop-1280',width: 1280, height: 800,  deviceScaleFactor: 1, isMobile: false, hasTouch: false },
  { name: 'desktop-1920',width: 1920, height: 1080, deviceScaleFactor: 1, isMobile: false, hasTouch: false },
];

const ANCHORS = ['#about', '#work', '#case-studies', '#stack', '#experience', '#contact'];

function log(...args) { console.log('▸', ...args); }
function warn(...args) { console.warn('!', ...args); }

async function ensureCleanDir(dir) {
  if (existsSync(dir)) await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });
}

async function captureViewport(browser, vp) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: vp.deviceScaleFactor,
    isMobile: vp.isMobile,
    hasTouch: vp.hasTouch,
    reducedMotion: 'reduce', // stable screenshots — no flicker/track line
    colorScheme: 'dark',
  });
  const page = await ctx.newPage();

  const consoleMsgs = [];
  const pageErrors = [];
  const failedRequests = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      consoleMsgs.push({ type: msg.type(), text: msg.text() });
    }
  });
  page.on('pageerror', (err) => pageErrors.push(String(err)));
  page.on('requestfailed', (req) => failedRequests.push({
    url: req.url(),
    failure: req.failure()?.errorText,
  }));

  log(`[${vp.name}] navigating ${URL_ROOT}`);
  const resp = await page.goto(URL_ROOT, { waitUntil: 'networkidle', timeout: 30_000 });
  if (!resp || !resp.ok()) {
    throw new Error(`[${vp.name}] navigation failed: ${resp?.status()}`);
  }

  // Settle: fonts loaded + a tick for any layout shift
  await page.evaluate(() => document.fonts?.ready);
  await page.waitForTimeout(250);

  // Layout audit — horizontal scroll, off-screen elements, missing h1/main
  const audit = await page.evaluate(() => {
    // scrollWidth reflects intrinsic content size even when overflow:hidden clips it
    const docW = Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
    );
    const winW = window.innerWidth;
    const horizontalScroll = docW > winW + 1;

    const offscreen = [];
    const all = document.querySelectorAll('main *, header *, nav *');
    all.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.right > winW + 1) {
        offscreen.push({
          tag: el.tagName.toLowerCase(),
          cls: el.className?.toString?.().slice(0, 80) || '',
          right: Math.round(r.right),
          width: Math.round(r.width),
          text: (el.textContent || '').slice(0, 40),
        });
      }
    });

    const h1Count = document.querySelectorAll('h1').length;
    const mainEl  = document.querySelector('main');

    // Check that all anchor sections actually exist
    const missingAnchors = [];
    ['#about','#work','#case-studies','#stack','#experience','#contact'].forEach((a) => {
      if (!document.querySelector(a)) missingAnchors.push(a);
    });

    return {
      docW, winW, horizontalScroll,
      offscreenCount: offscreen.length,
      offscreenSample: offscreen.slice(0, 5),
      h1Count,
      hasMain: !!mainEl,
      missingAnchors,
    };
  });

  const screenshotPath = join(OUT_DIR, `${vp.name}.png`);
  await page.screenshot({
    path: screenshotPath,
    fullPage: FULLPAGE,
  });
  log(`[${vp.name}] screenshot → ${screenshotPath}`);

  // Per-section screenshots at the smallest viewport for spot checks
  if (vp.name === 'mobile-360') {
    for (const a of ANCHORS) {
      const id = a.slice(1);
      try {
        const el = await page.$(`#${id}`);
        if (el) {
          const sectionPath = join(OUT_DIR, `mobile-360-section-${id}.png`);
          await el.screenshot({ path: sectionPath });
        }
      } catch (e) {
        warn(`section screenshot failed for ${a}:`, e.message);
      }
    }
  }

  await ctx.close();

  return {
    viewport: vp.name,
    audit,
    consoleMsgs,
    pageErrors,
    failedRequests,
    screenshot: screenshotPath,
  };
}

async function main() {
  await ensureCleanDir(OUT_DIR);

  log('launching chromium…');
  const browser = await chromium.launch();

  const results = [];
  let hardFail = false;

  try {
    for (const vp of VIEWPORTS) {
      try {
        const r = await captureViewport(browser, vp);
        results.push(r);
        if (r.audit.horizontalScroll) {
          warn(`[${vp.name}] HORIZONTAL SCROLL  doc=${r.audit.docW}  win=${r.audit.winW}`);
          hardFail = true;
        }
        if (r.audit.offscreenCount > 0) {
          warn(`[${vp.name}] ${r.audit.offscreenCount} element(s) overflow viewport`);
          r.audit.offscreenSample.forEach((o) => warn(`  · <${o.tag}> right=${o.right} w=${o.width}  ${o.cls}`));
          hardFail = true;
        }
        if (r.audit.missingAnchors.length) {
          warn(`[${vp.name}] missing anchors: ${r.audit.missingAnchors.join(', ')}`);
          hardFail = true;
        }
        if (!r.audit.hasMain) { warn(`[${vp.name}] missing <main>`); hardFail = true; }
        if (r.pageErrors.length) {
          warn(`[${vp.name}] ${r.pageErrors.length} page error(s):`);
          r.pageErrors.forEach((e) => warn('  ·', e));
          hardFail = true;
        }
        if (r.consoleMsgs.length) {
          warn(`[${vp.name}] ${r.consoleMsgs.length} console warning/error(s):`);
          r.consoleMsgs.forEach((m) => warn(`  · [${m.type}] ${m.text}`));
        }
        if (r.failedRequests.length) {
          warn(`[${vp.name}] ${r.failedRequests.length} failed request(s):`);
          r.failedRequests.forEach((f) => warn(`  · ${f.url}  (${f.failure})`));
        }
      } catch (e) {
        warn(`[${vp.name}] FAILED:`, e.message);
        hardFail = true;
      }
    }
  } finally {
    await browser.close();
  }

  await writeFile(
    join(OUT_DIR, 'report.json'),
    JSON.stringify(results, null, 2),
  );

  log('---');
  log(`captured ${results.length}/${VIEWPORTS.length} viewports`);
  log(`report: ${join(OUT_DIR, 'report.json')}`);

  if (hardFail) {
    warn('VISUAL CHECK: ISSUES FOUND ✗');
    process.exit(1);
  } else {
    log('VISUAL CHECK: OK ✓');
  }
}

main().catch((err) => {
  console.error('fatal:', err);
  process.exit(2);
});
