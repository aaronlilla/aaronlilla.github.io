// Cover-letter generator — single source (scripts/resume-data.mjs) -> PDF + DOCX + TXT.
//
//   node scripts/generate-cover-letter.mjs        (or: npm run cover)
//
// Produces a generic, no-edit-needed cover letter (names no company) that
// matches the resume's masthead. Upload as-is to any application.
// Outputs:
//   public/Aaron_Lilla_Cover_Letter.pdf
//   public/Aaron_Lilla_Cover_Letter.docx
//   public/Aaron_Lilla_Cover_Letter.txt

import { chromium } from 'playwright';
import {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink, BorderStyle,
} from 'docx';
import { writeFile, mkdir, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { resume, coverLetter } from './resume-data.mjs';

const ROOT = join(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const PUBLIC = join(ROOT, 'public');
const HTML_TMP = join(ROOT, '_cover-letter.html'); // temp (repo root, not served)
const PDF_PATH = join(PUBLIC, 'Aaron_Lilla_Cover_Letter.pdf');
const DOCX_PATH = join(PUBLIC, 'Aaron_Lilla_Cover_Letter.docx');
const TXT_PATH = join(PUBLIC, 'Aaron_Lilla_Cover_Letter.txt');
const ACCENT = 'B8531A';
const log = (...a) => console.log('▸', ...a);

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const ascii = (s) =>
  String(s)
    .replace(/[–—]/g, '-').replace(/·/g, '|')
    .replace(/[’‘]/g, "'").replace(/[“”]/g, '"')
    .replace(/≥/g, '>=').replace(/→/g, '->');
const asciifyDeep = (v) =>
  typeof v === 'string' ? ascii(v)
    : Array.isArray(v) ? v.map(asciifyDeep)
      : v && typeof v === 'object'
        ? Object.fromEntries(Object.entries(v).map(([k, val]) => [k, asciifyDeep(val)]))
        : v;

function buildHtml(r, cl) {
  const contactLine = [
    esc(r.location),
    ...r.contact.map((c) => `<a href="${esc(c.href)}">${esc(c.text)}</a>`),
  ].join(' &nbsp;|&nbsp; ');
  const paras = cl.paragraphs.map((p) => `    <p>${esc(p)}</p>`).join('\n');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${esc(r.name)} - Cover Letter</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
  <style>
    :root { --ink:#14181f; --ink-2:#2a2f3a; --ink-3:#555c69; --rule:#d8d3c5; --accent:#${ACCENT.toLowerCase()}; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body { font-family: 'Inter', -apple-system, system-ui, sans-serif; font-size: 10.5pt; line-height: 1.5; color: var(--ink); background:#fff; -webkit-font-smoothing: antialiased; }
    .page { max-width: 8.5in; margin: 0 auto; padding: 0.55in 0.6in; }
    h1 { font-size: 24pt; font-weight: 700; letter-spacing: -0.015em; margin: 0 0 1px 0; line-height: 1.05; }
    .role-line { font-size: 11.5pt; color: var(--accent); font-weight: 600; letter-spacing: 0.01em; margin: 0 0 6px 0; }
    .contact { font-size: 9pt; color: var(--ink-3); margin: 0 0 3px 0; line-height: 1.55; }
    .contact a { color: var(--ink-2); text-decoration: none; border-bottom: 1px solid var(--rule); }
    .kw { font-size: 9pt; color: var(--ink-3); margin: 0; }
    header { border-bottom: 1.5px solid var(--accent); padding-bottom: 8px; margin-bottom: 22px; }
    .salutation { margin: 0 0 12px 0; }
    main p { margin: 0 0 12px 0; }
    .closing { margin: 18px 0 0 0; }
    .sign { font-weight: 600; margin: 2px 0 0 0; }
    @media print { .page { margin: 0; max-width: none; padding: 0; } a { color: var(--ink); } }
    @page { size: letter; margin: 0.7in 0.75in; }
  </style>
</head>
<body>
  <main class="page">
    <header>
      <h1>${esc(r.name)}</h1>
      <p class="role-line">${esc(r.title)}</p>
      <p class="contact">${contactLine}</p>
      ${r.eligibility ? `<p class="kw">${esc(r.eligibility)}</p>` : ''}
    </header>
    <p class="salutation">${esc(cl.salutation)}</p>
${paras}
    <p class="closing">${esc(cl.closing)}</p>
    <p class="sign">${esc(r.name)}</p>
  </main>
</body>
</html>
`;
}

function buildText(r, cl) {
  const L = [];
  L.push(r.name);
  L.push(r.title);
  L.push([r.location, ...r.contact.map((c) => c.text)].join(' | '));
  if (r.eligibility) L.push(r.eligibility);
  L.push('');
  L.push(cl.salutation);
  L.push('');
  for (const p of cl.paragraphs) { L.push(p); L.push(''); }
  L.push(cl.closing);
  L.push(r.name);
  L.push('');
  return ascii(L.join('\n'));
}

function buildDocx(r, cl) {
  const children = [];
  children.push(new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: r.name, bold: true, size: 36 })] }));
  children.push(new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: r.title, bold: true, size: 22, color: ACCENT })] }));
  const contactRuns = [new TextRun({ text: r.location + '  |  ', size: 18, color: '555C69' })];
  r.contact.forEach((c, i) => {
    contactRuns.push(new ExternalHyperlink({ link: c.href, children: [new TextRun({ text: c.text, size: 18, color: '2A2F3A', underline: {} })] }));
    if (i < r.contact.length - 1) contactRuns.push(new TextRun({ text: '  |  ', size: 18, color: '555C69' }));
  });
  children.push(new Paragraph({ spacing: { after: r.eligibility ? 20 : 80 }, children: contactRuns }));
  if (r.eligibility) {
    children.push(new Paragraph({
      spacing: { after: 200 },
      border: { bottom: { color: ACCENT, style: BorderStyle.SINGLE, size: 6, space: 6 } },
      children: [new TextRun({ text: r.eligibility, size: 18, color: '555C69' })],
    }));
  }
  children.push(new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: cl.salutation, size: 21 })] }));
  for (const p of cl.paragraphs) {
    children.push(new Paragraph({ spacing: { after: 160, line: 276 }, children: [new TextRun({ text: p, size: 21 })] }));
  }
  children.push(new Paragraph({ spacing: { before: 120, after: 0 }, children: [new TextRun({ text: cl.closing, size: 21 })] }));
  children.push(new Paragraph({ children: [new TextRun({ text: r.name, bold: true, size: 21 })] }));

  return new Document({
    creator: r.name,
    title: `${r.name} - Cover Letter`,
    styles: { default: { document: { run: { font: 'Calibri', size: 21 } } } },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1008, right: 1080, bottom: 1008, left: 1080 } } },
      children,
    }],
  });
}

async function main() {
  if (!existsSync(PUBLIC)) await mkdir(PUBLIC, { recursive: true });
  const r = asciifyDeep(resume);
  const cl = asciifyDeep(coverLetter);

  await writeFile(TXT_PATH, buildText(r, cl), 'utf8');
  log(`TXT  -> ${TXT_PATH}`);

  await writeFile(DOCX_PATH, await Packer.toBuffer(buildDocx(r, cl)));
  log(`DOCX -> ${DOCX_PATH}`);

  await writeFile(HTML_TMP, buildHtml(r, cl), 'utf8');
  const browser = await chromium.launch();
  try {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await page.goto(pathToFileURL(HTML_TMP).href, { waitUntil: 'networkidle', timeout: 30_000 });
    await page.evaluate(() => document.fonts?.ready);
    await page.pdf({ path: PDF_PATH, format: 'Letter', preferCSSPageSize: true, printBackground: true });
    await ctx.close();
  } finally {
    await browser.close();
  }
  await unlink(HTML_TMP).catch(() => {});
  log(`PDF  -> ${PDF_PATH}`);
  log('done.');
}

main().catch((err) => { console.error('fatal:', err); process.exit(1); });
