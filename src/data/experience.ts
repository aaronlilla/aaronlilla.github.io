import type { Role } from '../types';

export const roles: Role[] = [
  {
    period: '2025 — present',
    title:  'Founder · Lead Engineer',
    org:    'Afterimage Studio — Holoscene (in development)',
    summary:
      'Building an indie game studio end-to-end. Engine, runtime, content pipeline, custom tooling, and an MCP-integrated balance simulator that lets AI agents prototype and validate changes in-process.',
    bullets: [
      'Architected a deterministic combat engine in C# with a TypeScript reference spec; Monte Carlo parity gate rejects drift above 0.5% across 1,000 seeds.',
      'Designed a multi-agent build pipeline (7+ specialized Claude Code agents) coordinating mode runtimes, balance audits, data exports, and cross-mode invariants against a frozen contract.',
      'Stack: Unity, C#, TypeScript, Node.js, PlayFab, MCP, Claude API, Addressables.',
    ],
    stack: ['Unity', 'C#', 'TypeScript', 'Node.js', 'MCP', 'Claude API'],
  },
  {
    period: '2019 — 2025',
    title:  'Frontend Engineer',
    org:    'PokerAtlas (TableCaptain)',
    summary:
      'Led development of TableCaptain — a React + Electron poker room management platform adopted in 30+ rooms across the U.S. and Asia, with a real-time WebSocket TV display system driving 15+ synchronized screens per venue.',
    bullets: [
      'Scaled TableCaptain V2 into the #1 poker room management system by adoption in 2024.',
      'Built a real-time WebSocket TV display platform: 15+ synchronized screens per venue with sub-second update latency.',
      'Engineered core features end-to-end: floor editor, waitlist, dealer tracking, and dynamic UI with optimistic updates.',
      'Automated Electron auto-update + CI/CD: bi-weekly releases, hotfixes deployable in under 10 minutes.',
      'Migrated the codebase to TypeScript + Redux; introduced design-system patterns adopted across the app.',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'Electron', 'Node.js', 'WebSockets', 'CI/CD'],
  },
  {
    period: '2022 — 2024',
    title:  'Founder · Lead Engineer',
    org:    'Afterimage Studio — Spire of Ash (shipped on Steam)',
    summary:
      'Shipped a roguelike ARPG on Steam end-to-end — engine, content tooling, loot math, and the build pipeline. The patterns proved out here became the foundation for Holoscene.',
    bullets: [
      'Self-shipped on Steam — full production cycle from prototype to publish.',
      'Built the procedural affix generator and audit scripts that gate item rolls against design tolerances.',
    ],
    stack: ['Unity', 'C#', 'TypeScript', 'Node.js'],
  },
  {
    period: '2017 — 2019',
    title:  'Frontend Developer',
    org:    'USCRE Online',
    summary:
      'Built a single-page React app delivering real-time commercial real estate data for 5,000+ properties. Owned state architecture, the component library, and front-end performance.',
    bullets: [
      'Cut quote retrieval time by 50% via Redux-driven caching and request deduplication.',
      'Shipped a 20-component reusable library, dropping front-end bug rate by ~40% in 6 months.',
      'Drove load time under 1.2s; lifted Core Web Vitals into the green and improved SEO ranking.',
    ],
    stack: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    period: '2012 — present',
    title:  'Freelance Web Developer',
    org:    'Self-employed',
    summary:
      'Long-running freelance practice alongside salaried roles — landing pages, custom dashboards, Discord bots, and small SaaS tools for clients and side projects.',
    bullets: [
      'Recent: Clippa (Electron + MCP video clipping tool), FiveStack (Mythic+ team matchmaker, Raider.io API), Discord AI chatbot (streaming LLM responses).',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Electron', 'Discord.js'],
  },
];
