// Canonical resume content — single source of truth.
//
// Edit THIS file to change resume content or to tailor for a target role,
// then run `npm run resume` to regenerate every format (HTML, PDF, DOCX, TXT,
// and RESUME.md) so they can never drift apart.
//
// Guidance: keep it ATS-clean — plain prose, real metrics, no fabrication.
// See resume-assets/TAILORING.md for how to retarget per vertical.

export const resume = {
  name: 'Aaron Lilla',
  title: 'Full-Stack Software Engineer',
  // Keyword line under the title — mirrors how recruiters & ATS skim for stack.
  keywords: 'React · TypeScript · Node.js · Electron · Real-time Systems · AI Tooling',
  location: 'Las Vegas, NV (Remote)',
  // Logistics line — recruiters and screening forms key on these.
  eligibility: 'Authorized to work in the U.S. (no sponsorship required) · Native English speaker',

  contact: [
    { label: 'Phone', text: '(702) 964-5163', href: 'tel:+17029645163' },
    { label: 'Email', text: 'aaronjlilla@gmail.com', href: 'mailto:aaronjlilla@gmail.com' },
    { label: 'LinkedIn', text: 'linkedin.com/in/aaronlilla', href: 'https://www.linkedin.com/in/aaronlilla' },
    { label: 'GitHub', text: 'github.com/aaronlilla', href: 'https://github.com/aaronlilla' },
    { label: 'Website', text: 'aaronlilla.github.io', href: 'https://aaronlilla.github.io' },
  ],

  summary:
    'Full-stack software engineer with 13 years in web development and 8+ years in modern JavaScript and TypeScript. Lead front-end engineer on TableCaptain — a React and Electron platform in 30+ poker rooms across the U.S. and Asia — driving 450+ concurrent in-venue displays over one real-time WebSocket fabric with zero major downtime in six years. Founder of Afterimage Studio: self-published Spire of Ash, a commercial TypeScript/Electron game, on Steam, and building Holoscene on a TypeScript design studio plus a deterministic C# engine with an AI-agent tooling pipeline.',

  skills: [
    { label: 'Languages', items: 'TypeScript, JavaScript (ES2024), Node.js, C# (.NET), HTML5, CSS3, SQL' },
    { label: 'Frontend', items: 'React, Redux, Next.js, Tailwind CSS, Vite, Three.js, Design Systems, Responsive UI, Accessibility (WCAG)' },
    { label: 'Backend & Real-time', items: 'Node.js, Express, REST APIs, WebSockets, Supabase, PostgreSQL, SQLite, Electron (IPC, preload, auto-update), Auth & Sessions (OAuth)' },
    { label: 'AI & Tooling', items: 'Claude API, MCP (Model Context Protocol), Multi-agent Pipelines, LLM Streaming, Prompt Engineering, AI-assisted Development' },
    { label: 'Architecture & Practice', items: 'System Design, Scalable Architecture, Deterministic Simulation, Code Review, Mentoring, Agile / Scrum' },
    { label: 'Testing & DevOps', items: 'Vitest, Jest, Playwright, CI/CD, Visual Regression, Performance Profiling, Git, AWS, Azure' },
  ],

  experience: [
    {
      title: 'Founder and Lead Engineer',
      org: 'Afterimage Studio',
      dates: '2025 - Present',
      location: 'Remote',
      summary:
        'Holoscene (in development) - a buildcraft ARPG built end-to-end across a TypeScript/React design studio and a deterministic C#/.NET engine on Godot, with an AI-agent pipeline that lets Claude prototype and validate changes in-process.',
      bullets: [
        'Built a TypeScript + React (React 19, Vite) design studio as the single source of truth — a deterministic combat simulator with an ability-priority (APL) evaluator, aura and synergy systems, and content authoring for 100 characters, 500 skills, and 2,000+ items.',
        'Engineered a deterministic, tick-based simulator (seeded RNG, typed event-stream architecture) and a Monte Carlo parity harness that holds the C#/.NET engine within 0.5% of the TypeScript reference across 1,000 seeded runs.',
        'Wrote 66 automated balance and parity audit scripts (Node.js) that enforce design contracts in CI — per-character DPS/EHP bands, cross-mode parity, loot and affix coverage — plus a 30-suite Vitest pack over the simulator.',
        'Designed a multi-agent build pipeline of specialized Claude Code agents (combat runtime, balance validator, data exporter, mode implementor, cross-mode validator) coordinating against a frozen invariant contract, with an MCP-driven dashboard monitoring agent and engine state.',
      ],
      stack: 'TypeScript, React, Node.js, Vite, C#, .NET, Godot, MCP, Claude API, Vitest',
    },
    {
      title: 'Founder and Lead Engineer',
      org: 'Afterimage Studio',
      dates: '2022 - 2024',
      location: 'Remote',
      summary:
        'Spire of Ash (shipped on Steam) - a commercial roguelite ARPG I designed, built, and self-published end-to-end as a TypeScript and Electron desktop app (~74,000 lines of TypeScript, 600+ tests).',
      bullets: [
        'Shipped a full live-service product to Steam and maintained it across 20+ releases (Steamworks integration, electron-builder packaging, staged auto-update, Sentry crash reporting, and Chinese localization).',
        'Built the 3D game client with Three.js / React Three Fiber and a Pixi.js Path-of-Exile-style passive tree, on a React + Redux Toolkit / Zustand UI with a spatial-hash and pathfinding engine.',
        'Built a Supabase cloud backend (auth, cloud saves with conflict resolution, IndexedDB fallback) and real-time WebSocket leaderboards ranked per mode and key level.',
        'Engineered the procedural systems — a 442-affix item generator, a procedural passive-tree generator, and 988 collectible cards — and gated every release with a headless combat worker and Monte Carlo balance audits.',
      ],
      stack: 'TypeScript, React, Electron, Three.js, Pixi.js, Redux, Supabase, Steamworks, Vite, Vitest, Playwright',
    },
    {
      title: 'Frontend Engineer',
      org: 'PokerAtlas',
      dates: '2019 - 2025',
      location: 'Las Vegas, NV (Hybrid)',
      summary:
        'Led front-end development of TableCaptain, a React and Electron poker room management platform adopted in 30+ rooms across the U.S. and Asia. Video walkthroughs of the Floor Editor, Table Manager, Waitlist, and in-venue TV display at aaronlilla.github.io.',
      bullets: [
        'Architected the real-time WebSocket sync layer — 450+ concurrent displays (15+ per venue across 30+ venues) with sub-second latency — and scaled TableCaptain V2 to the #1 poker room management system by adoption in 2024 (per company assessment).',
        'Engineered core features end-to-end (floor editor, table manager, waitlist, employee manager, and a real-time in-venue display HUD with optimistic UI and server-confirmed reconciliation); integrated a .NET backend over WebSockets.',
        'Automated the Electron auto-update and CI/CD pipeline with staged rollout and rollback — bi-weekly releases, sub-10-minute hotfixes, and zero major downtime incidents across six years of production.',
        'Led the TypeScript and Redux migration, mentored engineers, and introduced code-review practices; translated Figma mockups into reusable React design-system components.',
      ],
      stack: 'React, Redux, Electron, WebSockets, .NET (integration), Webpack, CI/CD, Figma',
    },
    {
      title: 'Frontend Developer',
      org: 'USCRE Online',
      dates: '2017 – 2019',
      location: 'Las Vegas, NV (Hybrid)',
      summary:
        'Built a single-page React app delivering real-time commercial real estate data for 5,000+ properties.',
      bullets: [
        'Cut quote retrieval time by 50% via Redux-driven caching, request deduplication, and search-path query optimization.',
        'Shipped a 20-component reusable UI library (~40% fewer front-end bugs in six months) and drove load time under 1.2s into green Core Web Vitals.',
      ],
      stack: 'React, Redux, JavaScript, HTML5, CSS3',
    },
  ],

  projects: [
    {
      name: 'FiveStack',
      stack: 'React · Node/Express · Supabase (PostgreSQL) · OAuth',
      desc:
        'Full-stack Mythic+ team-building platform for World of Warcraft. React 18 front end (React Query, Tailwind) on a Node/Express API with Supabase PostgreSQL (row-level security, real-time subscriptions) and Discord + Battle.net OAuth. AI matchmaking scores players across five compatibility factors (role, rating, experience, schedule, item level) from live Raider.io data. github.com/aaronlilla/FiveStack',
    },
    {
      name: 'Clippa',
      stack: 'Electron · React · MCP · ffmpeg · SQLite',
      desc:
        'Local-first Electron app that finds highlight moments in long-form video for review and clip export. Multi-stage media pipeline (ingest, audio, scene detection, event classification) on a SQLite job queue, with a dual-transport MCP server (HTTP + stdio, bearer-token auth) that lets external agents drive the whole workflow.',
    },
  ],

  education: {
    school: 'College of Southern Nevada',
    detail: 'Organic Chemistry coursework',
    location: 'Las Vegas, NV',
  },
};

// Generic, no-edit-needed cover letter for mass uploads (no company/role blanks).
// Generated to PDF/DOCX by `npm run cover`. Names no company so it works anywhere.
export const coverLetter = {
  salutation: 'Dear Hiring Manager,',
  paragraphs: [
    "I'm a full-stack software engineer with 13 years of experience — 8+ of them deep in React, TypeScript, and Node — writing to apply for your open engineering role. I've spent my career shipping real products end to end, and I'd bring that same ownership to your team.",
    'For six years I was the lead front-end engineer on TableCaptain, a React and Electron platform that runs live in 30+ poker rooms across the U.S. and Asia. I architected its real-time WebSocket layer (450+ in-venue displays synced sub-second), owned core features end to end, and ran the Electron auto-update and CI/CD pipeline — bi-weekly releases, sub-10-minute hotfixes, and zero major downtime over six years. It became the #1 system in its category by adoption in 2024.',
    "I also design, build, and ship independently under my studio, Afterimage Studio. Spire of Ash is a commercial game I self-published to Steam as a TypeScript and Electron app — a Three.js 3D client, a Supabase cloud backend, and real-time leaderboards, maintained across 20+ live releases. I'm now building Holoscene on a TypeScript design studio plus a deterministic C# engine, with a multi-agent Claude Code pipeline that lets AI prototype and validate changes in-process.",
    "What you'd get is a senior engineer who has owned production systems at scale and is fluent in the AI-assisted development patterns reshaping how teams ship in 2026 — someone you can hand an ambiguous problem and trust to deliver. I work remotely, I'm authorized to work in the U.S. (no sponsorship needed), and I move fast without breaking the things that matter.",
    "I'd welcome the chance to talk about how I can help. Thank you for your time and consideration.",
  ],
  closing: 'Sincerely,',
};
