import type { Role } from '../types';

export const roles: Role[] = [
  {
    period: '2025 — present',
    title:  'Founder · Lead Engineer',
    org:    'Afterimage Studio — Holoscene (in development)',
    summary:
      'Building an indie game studio end-to-end. Engine, runtime, content pipeline, custom tooling, and an MCP-integrated balance simulator that lets AI agents prototype and validate changes in-process.',
    bullets: [
      'Architected a deterministic combat engine in C# (~48,000 LOC) with a TypeScript reference spec; Monte Carlo parity gate rejects drift above 0.5% across 1,000 seeds.',
      'Designed a multi-agent build pipeline coordinating 7+ specialized Claude Code agents (combat runtime, balance validator, data exporter, mode implementor, cross-mode validator) shipping coordinated changes across 6 game modes against a frozen invariant contract — no merge conflicts to date.',
      'Engineered an Ability Priority Language (APL) evaluator and a 36-mechanic dispatch system supporting 36 hero archetypes with 14 aura patterns, resolving cross-character passive synergies deterministically per simulation tick.',
      'Built a TypeScript-to-Unity data pipeline that exports versioned ScriptableObject .asset files plus JSON sidecars from a single TS source of truth — eliminating data-shape drift between studio and engine.',
    ],
    stack: ['Unity', 'C#', 'TypeScript', 'Node.js', 'MCP', 'Claude API'],
  },
  {
    period: '2019 — 2025',
    title:  'Frontend Engineer',
    org:    'PokerAtlas (TableCaptain)',
    summary:
      'Led front-end development of TableCaptain — a React + Electron poker room management platform adopted in 30+ rooms across the U.S. and Asia, orchestrating 450+ concurrent in-venue displays (15+ per venue × 30+ venues) over a single WebSocket fabric.',
    bullets: [
      'Scaled TableCaptain V2 to a market-leading position by adoption in 2024 (per company assessment), serving 30+ active poker rooms.',
      'Architected the real-time WebSocket sync layer: 450+ concurrent displays with sub-second update latency across variable venue network conditions.',
      'Engineered core features end-to-end: floor editor, table manager, waitlist, employee manager, and a real-time in-venue display HUD with optimistic UI and server-confirmed reconciliation.',
      'Automated Electron auto-update + CI/CD pipeline with staged rollout and rollback; bi-weekly releases, hotfixes deployable in under 10 minutes — zero major downtime incidents across 6 years.',
      'Led TypeScript + Redux migration across the codebase; mentored junior engineers and introduced code-review practices adopted across the team.',
      'Translated Figma mockups into pixel-perfect, responsive React components and reusable design-system primitives.',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'Electron', '.NET (integration)', 'WebSockets', 'Webpack', 'CI/CD', 'Figma', 'Agile'],
  },
  {
    period: '2022 — 2024',
    title:  'Founder · Lead Engineer',
    org:    'Afterimage Studio — Spire of Ash (shipped on Steam)',
    summary:
      'Shipped a roguelike ARPG on Steam end-to-end — engine, content tooling, loot math, and the build pipeline. The patterns proved out here became the foundation for Holoscene.',
    bullets: [
      'Self-shipped on Steam — full production cycle from prototype to publish.',
      'Built the procedural affix generator and audit scripts that gate item rolls against design tolerances; the loot math pipeline informs current Holoscene combat parity work.',
    ],
    stack: ['Unity', 'C#', 'TypeScript', 'Node.js'],
  },
  {
    period: '2017 — 2019',
    title:  'Frontend Developer',
    org:    'USCRE Online',
    summary:
      'Built a single-page React app delivering real-time commercial real estate data for 5,000+ properties. Owned state architecture, the component library, front-end performance, and database query design for the search layer.',
    bullets: [
      'Cut quote retrieval time by 50% via Redux-driven caching, request deduplication, and database query optimization on the search path.',
      'Shipped a 20-component reusable library, dropping front-end bug rate ~40% over 6 months.',
      'Drove load time under 1.2s; lifted Core Web Vitals into the green and improved SEO ranking.',
    ],
    stack: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    period: '2012 — present',
    title:  'Freelance Web Developer',
    org:    'Self-employed (alongside salaried roles)',
    summary:
      'Long-running freelance practice — landing pages, custom dashboards, Discord bots, and small SaaS tools.',
    bullets: [
      'Recent: Clippa (Electron desktop app with SQLite-backed job queue and local MCP server), FiveStack (Mythic+ team matchmaker with Raider.io API integration), Discord AI chatbot (streaming LLM responses with conversation memory).',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Electron', 'SQLite', 'Discord.js'],
  },
];
