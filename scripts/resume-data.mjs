// Canonical resume content — single source of truth.
//
// Edit THIS file to change resume content or to tailor for a target role,
// then run `npm run resume` to regenerate every format (HTML, PDF, DOCX, TXT,
// and RESUME.md) so they can never drift apart.
//
// Guidance: keep it ATS-clean — plain prose, real metrics, no fabrication.
// See resume-assets/TAILORING.md for how to retarget per vertical (e.g. lead
// with "AI & LLM Development" in Skills for AI-forward employers).

export const resume = {
  name: 'Aaron Lilla',
  title: 'Senior Front-End Engineer, Full-Stack & AI-Assisted Development',
  // Keyword line under the title — mirrors how recruiters & ATS skim for stack.
  keywords: 'React · TypeScript · Next.js · Node.js · LLM Tooling (Claude API, Claude Code, MCP) · Electron · Real-time Systems · CI/CD',
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
    'Senior front-end engineer with 13+ years building production web applications — 8+ of them deep in React, TypeScript, and Node.js. Six years as Senior Front-End Engineer on TableCaptain (PokerAtlas), architecting the real-time WebSocket layer behind 450+ concurrent displays in 30+ casino poker rooms. Concurrent senior front-end / AI-LLM contract work training and evaluating LLMs (Mercor Intelligence, DataAnnotation), a shipped Claude-API Discord bot, and an AI-agent build pipeline (Claude Code, MCP) as founder of indie studio Dockyard. Seeking a full-time senior or staff front-end / full-stack role centered on production ownership and AI-assisted engineering.',

  skills: [
    { label: 'Frontend', items: 'React, Redux, Next.js, TypeScript, Tailwind CSS, Vite, Three.js, Design Systems, Responsive UI, Accessibility (WCAG), Figma to React' },
    { label: 'Backend & Real-time', items: 'Node.js, Express, REST APIs, WebSockets, Supabase, PostgreSQL, SQLite, Electron, IPC, Electron Preload Scripts, Electron Auto-Update, Auth & Sessions, OAuth' },
    { label: 'AI & LLM Development', items: 'LLM (Large Language Model) Training & Evaluation, Claude API, Claude Code (Agentic CLI), MCP (Model Context Protocol), Prompt Engineering, AI Code Review & Defect Detection, RLHF (Reinforcement Learning from Human Feedback) / Data Annotation, Multi-agent / Agentic Pipelines' },
    { label: 'Languages', items: 'JavaScript (ES2024), C# (.NET), HTML5, CSS3, SQL' },
    { label: 'Architecture & Practice', items: 'System Design, Scalable Architecture, Deterministic Simulation, Code Review, Mentoring, Agile / Scrum' },
    { label: 'Testing & DevOps', items: 'Vitest, Jest, Playwright, CI/CD, Visual Regression, Performance Profiling, Git' },
  ],

  experience: [
    {
      title: 'Senior Front-End Engineer',
      org: 'PokerAtlas',
      dates: '2019 - 2025',
      location: 'Las Vegas, NV (Hybrid)',
      summary:
        'Led front-end development of TableCaptain, a React and Electron poker room management platform adopted in 30+ rooms across the U.S. and Asia. Video walkthroughs of the Floor Editor, Table Manager, Waitlist, and in-venue TV display at aaronlilla.github.io.',
      bullets: [
        'Architected the real-time WebSocket sync layer - 450+ concurrent displays (15+ per venue across 30+ venues) with sub-second latency - and scaled TableCaptain V2 to the #1 poker room management system by adoption in 2024 (per company assessment).',
        'Solo-designed and shipped the TableCaptain OTR Kiosk, a self-service camera-QR check-in app (React 19, real-time WebSocket) deployed on-premises at several large Las Vegas casino poker rooms including the Venetian, through 57 commits and 15+ versioned releases backed by a ~300-test automated suite.',
        'Engineered core features end-to-end (floor editor, table manager, waitlist, employee manager, in-venue display HUD with optimistic UI) integrated with a .NET backend over WebSockets.',
        'Automated the Electron auto-update and CI/CD pipeline (bi-weekly releases, sub-10-minute hotfixes, zero major downtime across six years) and led the TypeScript and Redux migration, mentoring engineers and translating Figma mockups into reusable design-system components.',
      ],
      stack: 'React, Redux, Electron, WebSockets, .NET (integration), Webpack, Vite, Vitest, CI/CD, Figma',
    },
    {
      title: 'Founder and Lead Engineer',
      org: 'Dockyard (dockyard.studio)',
      dates: '2022 - Present',
      location: 'Remote',
      summary:
        'Indie game studio: shipped Spire of Ash (a commercial roguelite ARPG) end-to-end on Steam in 2022-2024, and building Nolve (a buildcraft ARPG, in development since 2025) on a deterministic C#/.NET engine with an AI-agent development pipeline.',
      bullets: [
        'Nolve (2025-present): built a TypeScript + React design studio as the single source of truth - a deterministic combat simulator with content authoring for 100 characters, 500 skills, and 2,000+ items - with a Monte Carlo parity harness holding the C#/.NET engine within 0.5% of the TypeScript reference across 1,000 seeded runs, driven by a multi-agent Claude Code build pipeline (combat runtime, balance validator, data exporter, mode implementor, cross-mode validator) with an MCP-driven dashboard.',
        'Spire of Ash (2022-2024): self-published a commercial roguelite ARPG end-to-end on Steam (~74,000 lines of TypeScript, 600+ tests) across 20+ releases (Steamworks, electron-builder, staged auto-update, Sentry, Chinese localization), with a Three.js/Pixi.js 3D client, a Supabase cloud backend with real-time leaderboards, and procedural systems (a 442-affix generator, 988 collectible cards) gated by Monte Carlo balance audits.',
      ],
      stack: 'TypeScript, React, Node.js, C#, .NET, Godot, Electron, Three.js, Pixi.js, Redux, Supabase, Steamworks, MCP, Claude Code, Vite, Vitest, Playwright',
    },
    {
      title: 'Senior Front-End Engineer & AI/LLM Developer (Contract)',
      org: 'Mercor Intelligence & DataAnnotation',
      dates: '2024 - Present',
      location: 'Remote',
      summary:
        'Concurrent senior front-end and AI/LLM development contract work with two vetted-expert AI-training marketplaces that route engineers into RLHF pipelines for frontier AI labs (Mercor\'s clients include OpenAI and Anthropic) - building production React applications from LLM-processed prompts, training models to flag UX and code defects, and evaluating AI-generated front-end code for correctness and production readiness.',
      bullets: [
        'Mercor Intelligence (Mar-Nov 2025, 8-month contract): built production-quality React applications from LLM-processed prompts as a Senior Front-End Engineer, structuring code as canonical teaching examples so models could learn and replicate optimal component architecture, and trained models to automatically flag critical UX defects.',
        'DataAnnotation (2024-present): serve as a senior front-end / AI-LLM developer on its software-engineering review track, building and evaluating React and Node code for correctness and production-readiness (logic errors, race conditions, inefficient implementations) and producing structured feedback used in RLHF model fine-tuning.',
      ],
      stack: 'React, TypeScript, Node.js, LLM Training & Evaluation, RLHF, Prompt Engineering',
    },
    {
      title: 'Frontend Developer',
      org: 'USCRE Online',
      dates: '2017 - 2019',
      location: 'Las Vegas, NV (Hybrid)',
      summary:
        'Built a single-page React app delivering real-time commercial real estate data for 5,000+ properties.',
      bullets: [
        'Cut quote retrieval time by 50% via Redux-driven caching, request deduplication, and search-path query optimization.',
        'Shipped a 20-component reusable UI library (~40% fewer front-end bugs in six months) and drove load time under 1.2s into green Core Web Vitals.',
      ],
      stack: 'React, Redux, JavaScript, HTML5, CSS3',
    },
    {
      title: 'Operations Manager - Extraction & Compliance Systems',
      org: 'Evergreen Organix',
      dates: '2014 - 2016',
      location: 'Nevada',
      summary:
        'Operations Manager for a licensed cannabis processing facility (2014-2016), overseeing CO2 extraction operations and seed-to-sale compliance systems between web development roles.',
      bullets: [
        'Administered the Metrc seed-to-sale compliance system (plant tagging, inventory tracking, packaging workflows) to meet state regulatory requirements.',
        'Built and tuned CO2 critical extraction processes and packaging-line SOPs, supervising staff and troubleshooting production and compliance-software issues under regulatory deadlines.',
      ],
      stack: 'Metrc, Systems Administration, Regulatory Compliance, Operations Management',
    },
    {
      title: 'Web Developer & Graphic Designer',
      org: 'IMPACT International Marketing',
      dates: '2012 - 2013',
      location: 'Lake Havasu City, AZ',
      summary:
        'First professional web development and design role, building marketing websites and graphic design assets for local and regional clients.',
      bullets: [
        'Designed and built marketing websites and landing pages (HTML, CSS, JavaScript) and produced print and digital graphic design assets - branding, ads, marketing collateral - for regional clients.',
      ],
      stack: 'HTML, CSS, JavaScript, Graphic Design, Adobe Creative Suite',
    },
  ],

  projects: [
    {
      name: 'Discord AI Chatbot',
      stack: 'Node.js · discord.js · Claude API · Streaming LLM',
      desc:
        'Discord bot that streams LLM responses token-by-token in real time via the Claude API (OpenAI-configurable), with per-channel system prompts and conversation memory. github.com/aaronlilla/discord-ai-chatbot',
    },
    {
      name: 'Clippa',
      stack: 'Electron · React · MCP · ffmpeg · SQLite',
      desc:
        'Local-first Electron app that finds highlight moments in long-form video for clip export via a multi-stage pipeline (yt-dlp ingest, audio/scene-cut fusion) on a SQLite job queue with crash recovery, scored by a precision/recall/nDCG eval harness. Exposes a dual-transport MCP server (~25 tools) for external agents to drive the whole workflow.',
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
    "I'm a senior front-end engineer with 13+ years of experience — 8+ of them deep in React, TypeScript, and Node — and a deep, hands-on focus on AI-assisted and LLM-driven development, writing to apply for your open role. I've spent my career shipping real products end to end, and more recently, helping large language models learn to do the same.",
    'For six years I was the senior front-end engineer on TableCaptain, a React and Electron platform that runs live in 30+ poker rooms across the U.S. and Asia. I architected its real-time WebSocket layer (450+ in-venue displays synced sub-second), owned core features end to end, and ran the Electron auto-update and CI/CD pipeline — bi-weekly releases, sub-10-minute hotfixes, and zero major downtime over six years. It became the #1 system in its category by adoption in 2024 (per company assessment).',
    "Alongside that, I've gone deep on AI-assisted development: at Mercor Intelligence I built React applications from LLM-processed prompts and ran training pipelines that taught models to generate and self-correct front-end code, and I continue that work today annotating and grading full-stack coding tasks used to train and fine-tune LLMs. I've also shipped a real-time streaming-LLM Discord bot on the Claude API, and I run a multi-agent Claude Code / MCP build pipeline for my own game studio.",
    "I also design, build, and ship independently under my studio, Dockyard. Spire of Ash is a commercial game I self-published to Steam as a TypeScript and Electron app — a Three.js 3D client, a Supabase cloud backend, and real-time leaderboards, maintained across 20+ live releases. I'm now building Nolve on a TypeScript design studio plus a deterministic C# engine, with a multi-agent Claude Code pipeline that lets AI prototype and validate changes in-process.",
    "What you'd get is a senior engineer who has owned production front-end systems at scale and is fluent in the AI-assisted development patterns reshaping how teams ship in 2026 — someone you can hand an ambiguous problem and trust to deliver. I work remotely, I'm authorized to work in the U.S. (no sponsorship needed), and I move fast without breaking the things that matter.",
    "I'd welcome the chance to talk about how I can help. Thank you for your time and consideration.",
  ],
  closing: 'Sincerely,',
};
