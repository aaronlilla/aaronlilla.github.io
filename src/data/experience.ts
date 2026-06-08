import type { Role } from '../types';

export const roles: Role[] = [
  {
    period: '2025 — present',
    title:  'Founder · Lead Engineer',
    org:    'Afterimage Studio — Holoscene (in development)',
    summary:
      'Building Holoscene end-to-end — a buildcraft ARPG — across a TypeScript/React design studio and a deterministic C#/.NET engine on Godot, with an AI-agent pipeline that lets Claude prototype and validate changes in-process.',
    bullets: [
      'Built a TypeScript + React design studio (the single source of truth): a deterministic combat simulator plus content authoring for 100 characters, 500 skills, and 2,000+ items.',
      'Engineered a deterministic tick-based simulator (seeded RNG, typed event stream); a Monte Carlo parity harness holds the C# engine within 0.5% of the TypeScript reference across 1,000 seeded runs.',
      'Wrote 66 automated balance/parity audits (Node.js) enforcing design contracts in CI, plus a 30-suite Vitest pack; multi-agent Claude Code pipeline with an MCP-driven live dashboard.',
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'C#', '.NET', 'Godot', 'MCP', 'Claude API'],
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
      'Designed, built, and self-published Spire of Ash — a commercial roguelite ARPG — end-to-end on Steam as a TypeScript + Electron desktop app (~74,000 lines of TypeScript, 600+ tests).',
    bullets: [
      'Shipped a live-service product across 20+ releases: Three.js / React Three Fiber 3D, a Pixi.js passive tree, Steamworks, electron-builder, staged auto-update, Sentry, and localization.',
      'Built a Supabase cloud backend (auth, cloud saves, conflict resolution) and real-time WebSocket leaderboards; engineered the 442-affix generator and 988-card systems gated by Monte Carlo balance audits.',
    ],
    stack: ['TypeScript', 'React', 'Electron', 'Three.js', 'Pixi.js', 'Supabase', 'Steamworks'],
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
