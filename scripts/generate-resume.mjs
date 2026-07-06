// Resume generator — single source (scripts/resume-data.mjs) → every format.
//
//   node scripts/generate-resume.mjs        (or: npm run resume)
//
// Outputs (all regenerated, never hand-edited):
//   public/resume.html                       — viewable page + the source Chromium prints to PDF
//   public/Aaron_Lilla_Resume.pdf             — text-based, ATS-extractable (Playwright page.pdf)
//   public/Aaron_Lilla_Resume.docx            — single-column, ATS-clean Word doc
//   public/resume.txt                         — ASCII plain text for paste-into-form fields
//   RESUME.md                                 — kept in sync for the repo
//   resume-assets/Aaron_Lilla_Resume.pdf      — mirror copy for the job-search asset folder
//   resume-assets/Aaron_Lilla_Resume.docx     — mirror copy for the job-search asset folder
//   resume-assets/Aaron_Lilla_Resume.txt      — mirror copy for the job-search asset folder
//
// Why a pipeline: HTML/PDF/DOCX/TXT used to be hand-synced and drifted. One
// source means they can never disagree, and retargeting is a single edit + run.

import { chromium } from 'playwright';
import {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink,
  AlignmentType, BorderStyle, LevelFormat,
} from 'docx';
import { writeFile, mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { resume } from './resume-data.mjs';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const PUBLIC = join(ROOT, 'public');
const ASSETS = join(ROOT, 'resume-assets');
const HTML_PATH = join(PUBLIC, 'resume.html');
const PDF_PATH = join(PUBLIC, 'Aaron_Lilla_Resume.pdf');
const DOCX_PATH = join(PUBLIC, 'Aaron_Lilla_Resume.docx');
const TXT_PATH = join(PUBLIC, 'resume.txt');
const MD_PATH = join(ROOT, 'RESUME.md');
const ASSETS_PDF_PATH = join(ASSETS, 'Aaron_Lilla_Resume.pdf');
const ASSETS_DOCX_PATH = join(ASSETS, 'Aaron_Lilla_Resume.docx');
const ASSETS_TXT_PATH = join(ASSETS, 'Aaron_Lilla_Resume.txt');

const ACCENT = 'B8531A';
// Metadata face for the DOCX: Consolas ships with Office on both Windows and
// Mac, so dates/tech-stacks/labels render consistently without embedding —
// mirrors the Inter/JetBrains Mono split used in the HTML/PDF.
const MONO = 'Consolas';
const log = (...a) => console.log('▸', ...a);

// ── helpers ────────────────────────────────────────────────────────────────
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Down-convert smart punctuation to ASCII for the plain-text variant, so the
// oldest/strictest form parsers never see a non-ASCII byte.
const ascii = (s) =>
  String(s)
    .replace(/[–—]/g, '-')
    .replace(/·/g, '|')
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/≥/g, '>=')
    .replace(/→/g, '->');

// Recursively ASCII-normalize every string in the resume data so EVERY output
// format (PDF, DOCX, HTML, TXT, MD) is pure ASCII — maximally safe for the
// widest range of resume parsers (regex-based ATS and LLM matchers alike).
const asciifyDeep = (v) =>
  typeof v === 'string'
    ? ascii(v)
    : Array.isArray(v)
      ? v.map(asciifyDeep)
      : v && typeof v === 'object'
        ? Object.fromEntries(Object.entries(v).map(([k, val]) => [k, asciifyDeep(val)]))
        : v;

// ── HTML ─────────────────────────────────────────────────────────────────────
function buildHtml(r) {
  const contactLine = [
    esc(r.location),
    ...r.contact.map((c) => `<a href="${esc(c.href)}">${esc(c.text)}</a>`),
  ].join(' &nbsp;|&nbsp; ');

  const roles = r.experience
    .map((e) => {
      const bullets = e.bullets.length
        ? `<ul class="bullets">${e.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`
        : '';
      const stack = e.stack
        ? `<p class="stack"><span class="stack-label">Technologies:</span> ${esc(e.stack)}</p>`
        : '';
      return `    <div class="role">
      <div class="role-head">
        <p class="role-title">${esc(e.title)}</p>
        <p class="role-dates">${esc(e.dates)}</p>
      </div>
      <div class="role-subhead">
        <p class="role-org">${esc(e.org)}</p>
        <p class="role-where">${esc(e.location)}</p>
      </div>
      <p class="role-summary">${esc(e.summary)}</p>
      ${bullets}
      ${stack}
    </div>`;
    })
    .join('\n\n');

  const projects = r.projects
    .map(
      (p) => `    <div class="project">
      <p class="project-title">${esc(p.name)}</p>
      <p class="project-stack">${esc(p.stack)}</p>
      <p class="project-desc">${esc(p.desc)}</p>
    </div>`,
    )
    .join('\n\n');

  const skills = r.skills
    .map((s) => `      <p><span class="label">${esc(s.label)}:</span> ${esc(s.items)}</p>`)
    .join('\n');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(r.name)} - ${esc(r.title)} - Resume</title>
  <meta name="description" content="${esc(r.name)} - ${esc(r.title)}. 13 years experience in React, TypeScript, Node.js, Electron. Lead engineer on TableCaptain (30+ venues). Shipped Spire of Ash on Steam." />
  <meta name="robots" content="index, follow" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <style>
    /* Self-hosted static weights — no CDN dependency at generation or view time,
       and static (non-variable) files avoid the Type3 bitmap fallback some
       PDF engines fall back to when embedding variable web fonts. */
    @font-face { font-family: 'Inter'; font-style: normal; font-weight: 400; font-display: swap; src: url('fonts/inter-400.woff2') format('woff2'); }
    @font-face { font-family: 'Inter'; font-style: normal; font-weight: 600; font-display: swap; src: url('fonts/inter-600.woff2') format('woff2'); }
    @font-face { font-family: 'Inter'; font-style: normal; font-weight: 700; font-display: swap; src: url('fonts/inter-700.woff2') format('woff2'); }
    @font-face { font-family: 'JetBrains Mono'; font-style: normal; font-weight: 500; font-display: swap; src: url('fonts/jetbrains-mono-500.woff2') format('woff2'); }
    @font-face { font-family: 'JetBrains Mono'; font-style: normal; font-weight: 600; font-display: swap; src: url('fonts/jetbrains-mono-600.woff2') format('woff2'); }

    :root {
      --bg: #f6f4ee;
      --paper: #ffffff;
      --ink: #14181f;
      --ink-2: #2a2f3a;
      --ink-3: #555c69;
      --rule: #d8d3c5;
      --accent: #${ACCENT.toLowerCase()};
    }

    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      font-size: 10.5pt;
      line-height: 1.45;
      color: var(--ink);
      background: var(--bg);
      -webkit-font-smoothing: antialiased;
    }

    .toolbar {
      position: sticky;
      top: 0;
      z-index: 10;
      background: var(--ink);
      color: #f6f4ee;
      padding: 10px 16px;
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5pt;
    }
    .toolbar a, .toolbar button {
      color: #f6f4ee;
      background: transparent;
      border: 1px solid #f6f4ee44;
      padding: 6px 12px;
      border-radius: 3px;
      font: inherit;
      cursor: pointer;
      text-decoration: none;
    }
    .toolbar a:hover, .toolbar button:hover {
      background: #f6f4ee10;
      border-color: #f6f4ee;
    }

    .page {
      max-width: 8.5in;
      margin: 24px auto;
      padding: 0.55in 0.6in;
      background: var(--paper);
      box-shadow: 0 2px 20px rgba(0,0,0,0.08);
    }

    h1 {
      font-size: 24pt;
      font-weight: 700;
      letter-spacing: -0.015em;
      margin: 0 0 1px 0;
      line-height: 1.05;
    }
    .role-line {
      font-size: 11.5pt;
      color: var(--accent);
      margin: 0 0 6px 0;
      font-weight: 600;
      letter-spacing: 0.01em;
    }
    /* Metadata face: dates, locations, tech tags, and section labels read as
       data, not prose — set in JetBrains Mono with wide tracking, mirroring
       the .crt-label treatment used site-wide on aaronlilla.github.io. */
    .kw {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      letter-spacing: 0.02em;
      color: var(--ink-3);
      margin: 0;
    }
    .contact {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      color: var(--ink-3);
      margin: 0 0 3px 0;
      line-height: 1.55;
    }
    .contact a {
      color: var(--ink-2);
      text-decoration: none;
      border-bottom: 1px solid var(--rule);
    }
    header {
      border-bottom: 1.5px solid var(--accent);
      padding-bottom: 8px;
      margin-bottom: 2px;
    }

    h2 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--accent);
      margin: 16px 0 8px 0;
      padding-bottom: 4px;
      border-bottom: 1px solid var(--rule);
    }

    .summary { font-size: 10.5pt; line-height: 1.5; margin: 4px 0 6px 0; }

    .role { margin-bottom: 13px; }
    .role-head, .role-subhead { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; }
    .role-title { font-weight: 700; font-size: 11pt; color: var(--ink); margin: 0; }
    .role-dates { font-family: 'JetBrains Mono', monospace; font-size: 9pt; color: var(--ink-3); margin: 0; white-space: nowrap; }
    .role-org { font-weight: 600; color: var(--ink-2); margin: 0; }
    .role-where { font-family: 'JetBrains Mono', monospace; font-size: 9pt; color: var(--ink-3); margin: 0; white-space: nowrap; }
    .role-summary { margin: 3px 0 4px 0; color: var(--ink-2); }
    ul.bullets { margin: 4px 0 4px 0; padding-left: 18px; }
    ul.bullets li { margin-bottom: 2px; }
    .stack { font-family: 'JetBrains Mono', monospace; font-size: 9pt; color: var(--ink-3); margin-top: 4px; }
    .stack-label { color: var(--accent); font-weight: 600; margin-right: 4px; }

    .project { margin-bottom: 9px; }
    .project-title { font-weight: 700; color: var(--ink); margin: 0; }
    .project-stack { font-family: 'JetBrains Mono', monospace; font-size: 9pt; color: var(--ink-3); margin: 0 0 2px 0; }
    .project-desc { color: var(--ink-2); margin: 2px 0 0 0; }

    .skills p { margin: 0 0 4px 0; color: var(--ink-2); }
    .skills .label { font-family: 'JetBrains Mono', monospace; font-size: 0.92em; color: var(--accent); font-weight: 600; margin-right: 4px; }

    .education { color: var(--ink-2); }

    @media print {
      .toolbar { display: none; }
      body { background: #fff; font-size: 9.5pt; line-height: 1.2; }
      .page { margin: 0; max-width: none; padding: 0; box-shadow: none; }
      h1 { font-size: 21pt; }
      .role-line { margin: 0 0 3px 0; }
      .contact { line-height: 1.3; }
      header { padding-bottom: 4px; margin-bottom: 0; }
      h2 { margin: 7px 0 4px 0; break-after: avoid; }
      .summary { line-height: 1.28; margin: 2px 0 3px 0; }
      .role { margin-bottom: 4px; }
      .role-summary { margin: 2px 0 2px 0; }
      ul.bullets { margin: 2px 0 2px 0; }
      ul.bullets li { margin-bottom: 0; }
      .stack { margin-top: 2px; }
      .project { margin-bottom: 3px; }
      .project-desc { line-height: 1.28; }
      .skills p { margin: 0 0 2px 0; }
      a { color: var(--ink); }
    }

    @page { size: letter; margin: 0.24in 0.45in; }
  </style>
</head>
<body>

<div class="toolbar">
  <span>${esc(r.name)} - Resume</span>
  <a href="/Aaron_Lilla_Resume.pdf" download>Download PDF</a>
  <a href="/Aaron_Lilla_Resume.docx" download>Download DOCX</a>
  <a href="/resume.txt">Plain text</a>
  <button onclick="window.print()">Print</button>
  <a href="/">Back to site</a>
</div>

<main class="page" role="main">
  <header>
    <h1>${esc(r.name)}</h1>
    <p class="role-line">${esc(r.title)}</p>
    <p class="contact">${contactLine}</p>
    ${r.eligibility ? `<p class="kw">${esc(r.eligibility)}</p>` : ''}
  </header>

  <section>
    <h2>Summary</h2>
    <p class="summary">${esc(r.summary)}</p>
  </section>

  <section class="skills">
    <h2>Skills</h2>
${skills}
  </section>

  <section>
    <h2>Experience</h2>

${roles}
  </section>

  <section>
    <h2>Projects</h2>

${projects}
  </section>

  <section>
    <h2>Education</h2>
    <p class="education">${esc(r.education.school)} - ${esc(r.education.detail)}, ${esc(r.education.location)}</p>
  </section>
</main>

</body>
</html>
`;
}

// ── Plain text (ASCII) ───────────────────────────────────────────────────────
function buildText(r) {
  const L = [];
  L.push(r.name);
  L.push(r.title);
  L.push(ascii(r.keywords));
  L.push('');
  L.push(`Location: ${r.location}`);
  for (const c of r.contact) L.push(`${c.label}: ${c.text}`);
  if (r.eligibility) L.push(r.eligibility);
  L.push('');
  L.push('');
  L.push('SUMMARY');
  L.push('');
  L.push(ascii(r.summary));
  L.push('');
  L.push('');
  L.push('SKILLS');
  L.push('');
  for (const s of r.skills) L.push(`${s.label}: ${ascii(s.items)}`);
  L.push('');
  L.push('');
  L.push('EXPERIENCE');
  for (const e of r.experience) {
    L.push('');
    L.push(e.title);
    L.push(e.org);
    L.push(`Dates: ${ascii(e.dates)}`);
    L.push(`Location: ${ascii(e.location)}`);
    L.push('');
    L.push(ascii(e.summary));
    if (e.bullets.length) {
      L.push('');
      for (const b of e.bullets) L.push(`- ${ascii(b)}`);
    }
    if (e.stack) {
      L.push('');
      L.push(`Technologies: ${ascii(e.stack)}`);
    }
    L.push('');
  }
  L.push('');
  L.push('PROJECTS');
  for (const p of r.projects) {
    L.push('');
    L.push(`${p.name} (${ascii(p.stack)})`);
    L.push(ascii(p.desc));
  }
  L.push('');
  L.push('');
  L.push('EDUCATION');
  L.push('');
  L.push(r.education.school);
  L.push(`${r.education.detail}, ${r.education.location}`);
  L.push('');
  // Final safety net: the plain-text variant must be pure ASCII regardless of
  // which field carries smart punctuation (em dashes, curly quotes, etc.).
  return ascii(L.join('\n'));
}

// ── Markdown (RESUME.md) ─────────────────────────────────────────────────────
function buildMarkdown(r) {
  const L = [];
  L.push(`# ${r.name}`);
  L.push('');
  L.push(`**${r.title}** — ${r.keywords}`);
  L.push('');
  L.push(
    [r.location, ...r.contact.map((c) => `[${c.text}](${c.href})`)].join(' · '),
  );
  if (r.eligibility) { L.push(''); L.push(`*${r.eligibility}*`); }
  L.push('');
  L.push('---');
  L.push('');
  L.push('## Summary');
  L.push('');
  L.push(r.summary);
  L.push('');
  L.push('## Skills');
  L.push('');
  for (const s of r.skills) L.push(`- **${s.label}:** ${s.items}`);
  L.push('');
  L.push('## Experience');
  for (const e of r.experience) {
    L.push('');
    L.push(`### ${e.title} — ${e.org}`);
    L.push(`**${e.dates}** · ${e.location}`);
    L.push('');
    L.push(e.summary);
    if (e.bullets.length) {
      L.push('');
      for (const b of e.bullets) L.push(`- ${b}`);
    }
    if (e.stack) {
      L.push('');
      L.push(`**Technologies:** ${e.stack}`);
    }
  }
  L.push('');
  L.push('## Projects');
  for (const p of r.projects) {
    L.push('');
    L.push(`**${p.name}** *(${p.stack})* — ${p.desc}`);
  }
  L.push('');
  L.push('## Education');
  L.push('');
  L.push(`**${r.education.school}** — ${r.education.detail}, ${r.education.location}`);
  L.push('');
  return L.join('\n');
}

// ── DOCX (ATS-clean: single column, no tables/text-boxes/headers) ────────────
function docHeading(text) {
  return new Paragraph({
    spacing: { before: 220, after: 90 },
    border: { bottom: { color: ACCENT, style: BorderStyle.SINGLE, size: 6, space: 2 } },
    children: [
      new TextRun({ text: text.toUpperCase(), bold: true, color: ACCENT, size: 22, font: MONO }),
    ],
  });
}
function docBullet(text) {
  return new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 40 },
    children: [new TextRun({ text, size: 20 })],
  });
}

function buildDocx(r) {
  const children = [];

  // Name
  children.push(
    new Paragraph({
      spacing: { after: 20 },
      children: [new TextRun({ text: r.name, bold: true, size: 36 })],
    }),
  );
  // Title + keyword line
  children.push(
    new Paragraph({
      spacing: { after: 20 },
      children: [new TextRun({ text: r.title, bold: true, size: 22, color: '2A2F3A' })],
    }),
  );
  children.push(
    new Paragraph({
      spacing: { after: 60 },
      children: [new TextRun({ text: r.keywords, size: 17, color: '555C69', font: MONO })],
    }),
  );
  // Contact line — Phone/Email as plain text (regex-based ATS contact-field
  // extraction is more reliable against unlinked plain text); LinkedIn/GitHub/
  // Website stay real hyperlinks. Mono, mirroring the HTML/PDF metadata face.
  const contactRuns = [new TextRun({ text: r.location + '  |  ', size: 17, color: '555C69', font: MONO })];
  r.contact.forEach((c, i) => {
    if (c.label === 'Phone' || c.label === 'Email') {
      contactRuns.push(new TextRun({ text: c.text, size: 17, color: '2A2F3A', font: MONO }));
    } else {
      contactRuns.push(
        new ExternalHyperlink({
          link: c.href,
          children: [new TextRun({ text: c.text, size: 17, color: '2A2F3A', underline: {}, font: MONO })],
        }),
      );
    }
    if (i < r.contact.length - 1) contactRuns.push(new TextRun({ text: '  |  ', size: 17, color: '555C69', font: MONO }));
  });
  children.push(new Paragraph({ spacing: { after: r.eligibility ? 20 : 60 }, children: contactRuns }));
  if (r.eligibility) {
    children.push(
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: r.eligibility, size: 17, color: '555C69', font: MONO })],
      }),
    );
  }

  // Summary
  children.push(docHeading('Summary'));
  children.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: r.summary, size: 20 })] }));

  // Skills
  children.push(docHeading('Skills'));
  for (const s of r.skills) {
    children.push(
      new Paragraph({
        spacing: { after: 30 },
        children: [
          new TextRun({ text: `${s.label}: `, bold: true, size: 19, color: ACCENT, font: MONO }),
          new TextRun({ text: s.items, size: 20 }),
        ],
      }),
    );
  }

  // Experience
  children.push(docHeading('Experience'));
  for (const e of r.experience) {
    children.push(
      new Paragraph({
        spacing: { before: 120, after: 0 },
        children: [new TextRun({ text: e.title, bold: true, size: 22 })],
      }),
    );
    children.push(
      new Paragraph({
        spacing: { after: 0 },
        children: [new TextRun({ text: e.org, bold: true, size: 21, color: '2A2F3A' })],
      }),
    );
    children.push(
      new Paragraph({
        spacing: { after: 0 },
        children: [
          new TextRun({ text: 'Dates: ', bold: true, size: 17, color: ACCENT, font: MONO }),
          new TextRun({ text: e.dates, size: 17, color: '555C69', font: MONO }),
        ],
      }),
    );
    children.push(
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: 'Location: ', bold: true, size: 17, color: ACCENT, font: MONO }),
          new TextRun({ text: e.location, size: 17, color: '555C69', font: MONO }),
        ],
      }),
    );
    children.push(new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: e.summary, size: 20 })] }));
    for (const b of e.bullets) children.push(docBullet(b));
    if (e.stack) {
      children.push(
        new Paragraph({
          spacing: { before: 30, after: 40 },
          children: [
            new TextRun({ text: 'Technologies: ', bold: true, size: 17, color: ACCENT, font: MONO }),
            new TextRun({ text: e.stack, size: 17, color: '555C69', font: MONO }),
          ],
        }),
      );
    }
  }

  // Projects
  children.push(docHeading('Projects'));
  for (const p of r.projects) {
    children.push(
      new Paragraph({
        spacing: { before: 80, after: 0 },
        children: [
          new TextRun({ text: p.name, bold: true, size: 20 }),
          new TextRun({ text: `  (${p.stack})`, size: 17, color: '555C69', font: MONO }),
        ],
      }),
    );
    children.push(new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: p.desc, size: 20 })] }));
  }

  // Education
  children.push(docHeading('Education'));
  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: r.education.school, bold: true, size: 20 }),
        new TextRun({ text: ` - ${r.education.detail}, ${r.education.location}`, size: 20 }),
      ],
    }),
  );

  return new Document({
    creator: r.name,
    title: `${r.name} - Resume`,
    description: `${r.title} resume`,
    styles: {
      default: {
        document: { run: { font: 'Calibri', size: 20 }, paragraph: { spacing: { line: 264 } } },
      },
    },
    numbering: {
      config: [
        {
          reference: 'bullets',
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: '•',
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 360, hanging: 200 } } },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 }, // US Letter
            margin: { top: 720, right: 720, bottom: 720, left: 720 }, // 0.5in
          },
        },
        children,
      },
    ],
  });
}

// ── main ─────────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(PUBLIC)) await mkdir(PUBLIC, { recursive: true });

  // Two variants: R_HTML keeps real typography (middle dots, en-dashes) for the
  // human-facing web page/PDF — modern text-layer PDF extraction (2026-era
  // parsers) handles UTF-8 fine, so this only affects how it looks, not how it
  // parses. R_SAFE is ASCII-normalized for TXT (paste-into-form fields) and
  // DOCX (the most format-sensitive, lowest-common-denominator upload target),
  // so those two stay maximally compatible with the oldest/strictest parsers.
  const R_HTML = resume;
  const R_SAFE = asciifyDeep(resume);

  // 1) HTML
  const html = buildHtml(R_HTML);
  await writeFile(HTML_PATH, html, 'utf8');
  log(`HTML  → ${HTML_PATH}`);

  // 2) TXT
  await writeFile(TXT_PATH, buildText(R_SAFE), 'utf8');
  log(`TXT   → ${TXT_PATH}`);

  // 3) Markdown (repo doc, not an ATS upload target — nice typography is fine)
  await writeFile(MD_PATH, buildMarkdown(R_HTML), 'utf8');
  log(`MD    → ${MD_PATH}`);

  // 4) DOCX
  const docBuffer = await Packer.toBuffer(buildDocx(R_SAFE));
  await writeFile(DOCX_PATH, docBuffer);
  log(`DOCX  → ${DOCX_PATH}`);

  // 5) PDF via Chromium (real, embedded text layer)
  log('launching chromium for PDF…');
  const browser = await chromium.launch();
  try {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await page.goto(pathToFileURL(HTML_PATH).href, { waitUntil: 'networkidle', timeout: 30_000 });
    await page.evaluate(() => document.fonts?.ready);
    await page.pdf({
      path: PDF_PATH,
      format: 'Letter',
      preferCSSPageSize: true,
      printBackground: true,
    });
    await ctx.close();
  } finally {
    await browser.close();
  }
  log(`PDF   → ${PDF_PATH}`);

  // 6) Mirror PDF/DOCX/TXT into resume-assets/ so the job-search folder never
  // drifts from what actually ships on the site.
  if (!existsSync(ASSETS)) await mkdir(ASSETS, { recursive: true });
  await copyFile(PDF_PATH, ASSETS_PDF_PATH);
  await copyFile(DOCX_PATH, ASSETS_DOCX_PATH);
  await copyFile(TXT_PATH, ASSETS_TXT_PATH);
  log(`ASSETS → ${ASSETS_PDF_PATH}`);
  log(`ASSETS → ${ASSETS_DOCX_PATH}`);
  log(`ASSETS → ${ASSETS_TXT_PATH}`);

  log('done.');
}

main().catch((err) => {
  console.error('fatal:', err);
  process.exit(1);
});
