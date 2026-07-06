import type { Role } from '../types';

export const roles: Role[] = [
  {
    period: '2019 — 2025',
    title:  'Senior Front-End Engineer',
    org:    'PokerAtlas (TableCaptain)',
    summary:
      'Led development of TableCaptain — a React + Electron poker room management platform adopted in 30+ rooms across the U.S. and Asia, with a real-time WebSocket TV display system driving 15+ synchronized screens per venue.',
    bullets: [
      'Scaled TableCaptain V2 into the #1 poker room management system by adoption in 2024.',
      'Solo-designed and shipped the TableCaptain OTR Kiosk: a self-service camera-QR check-in app (React 19, real-time WebSocket) deployed on-premises at several large Las Vegas casino poker rooms including the Venetian, through 57 commits and 15+ versioned releases backed by a ~300-test automated suite.',
      'Built a real-time WebSocket TV display platform: 15+ synchronized screens per venue with sub-second update latency.',
      'Engineered core features end-to-end: floor editor, waitlist, dealer tracking, and dynamic UI with optimistic updates.',
      'Automated Electron auto-update + CI/CD: bi-weekly releases, hotfixes deployable in under 10 minutes.',
      'Migrated the codebase to TypeScript + Redux; introduced design-system patterns adopted across the app.',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'Electron', 'Node.js', 'WebSockets', 'Vite', 'Vitest', 'CI/CD'],
  },
  {
    period: '2022 — present',
    title:  'Founder · Lead Engineer',
    org:    'Dockyard',
    summary:
      'Indie game studio: shipped Spire of Ash (a commercial roguelite ARPG) end-to-end on Steam in 2022 — 2024, and building Nolve (a buildcraft ARPG, in development since 2025) on a deterministic C#/.NET engine with an AI-agent development pipeline.',
    bullets: [
      'Nolve (2025 — present): built a TypeScript + React design studio as the single source of truth — a deterministic combat simulator with content authoring for 100 characters, 500 skills, and 2,000+ items — with a Monte Carlo parity harness holding the C#/.NET engine within 0.5% of the TypeScript reference across 1,000 seeded runs, driven by a multi-agent Claude Code build pipeline with an MCP-driven dashboard.',
      'Spire of Ash (2022 — 2024): self-published a commercial roguelite ARPG end-to-end on Steam (~74,000 lines of TypeScript, 600+ tests) across 20+ releases, with a Three.js/Pixi.js 3D client, a Supabase cloud backend with real-time leaderboards, and procedural systems (442-affix generator, 988 collectible cards) gated by Monte Carlo balance audits.',
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'C#', '.NET', 'Godot', 'Electron', 'Three.js', 'Pixi.js', 'Supabase', 'Steamworks', 'MCP', 'Claude Code'],
  },
  {
    period: '2024 — present',
    title:  'Senior Front-End Engineer & AI/LLM Developer (Contract)',
    org:    'Mercor Intelligence & DataAnnotation',
    summary:
      'Concurrent senior front-end and AI/LLM development contract work with two vetted-expert AI-training marketplaces that route engineers into RLHF pipelines for frontier AI labs (Mercor\'s clients include OpenAI and Anthropic) — building production React applications from LLM-processed prompts and evaluating AI-generated front-end code.',
    bullets: [
      'Mercor Intelligence (Mar 2025 — Nov 2025, 8-month contract): built production-quality React applications from LLM-processed prompts as a Senior Front-End Engineer, structuring code as canonical teaching examples and training models to flag critical UX defects.',
      'DataAnnotation (2024 — present): serve as a senior front-end / AI-LLM developer on its software-engineering review track, evaluating React and Node code for correctness and production-readiness and producing structured feedback used in RLHF model fine-tuning.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'LLM Training & Evaluation', 'RLHF', 'Prompt Engineering'],
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
    period: '2014 — 2016',
    title:  'Operations Manager, Extraction & Compliance Systems',
    org:    'Evergreen Organix',
    summary:
      'Managed daily operations for a licensed cannabis processing facility — CO2 critical extraction, general chemistry lab work, and the plant\'s compliance software and packaging systems.',
    bullets: [
      'Administered the Metrc seed-to-sale compliance system: plant tagging, inventory tracking, and packaging workflows.',
      'Built and tuned CO2 critical extraction processes, standardizing parameters for yield, purity, and safety.',
      'Set up packaging line systems and SOPs; supervised staff and troubleshot production and compliance-software issues.',
    ],
    stack: ['Metrc', 'Systems Administration', 'Regulatory Compliance', 'Operations'],
  },
  {
    period: '2012 — present',
    title:  'Freelance Web Developer',
    org:    'Self-employed',
    summary:
      'Long-running freelance practice alongside salaried roles — landing pages, custom dashboards, Discord bots, and small SaaS tools for clients and side projects. Started as Web Developer & Graphic Designer at IMPACT International Marketing (Lake Havasu, AZ, 2012–2013).',
    bullets: [
      'Recent: Clippa (Electron + MCP video clipping tool), FiveStack (Mythic+ team matchmaker, Raider.io API), Discord AI chatbot (streaming LLM responses).',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Electron', 'Discord.js'],
  },
];
