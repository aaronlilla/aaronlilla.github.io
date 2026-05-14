# Aaron Lilla

**Full-Stack Software Engineer** — React, TypeScript, Node.js, Electron

Las Vegas, NV (Remote) · [aaronjlilla@gmail.com](mailto:aaronjlilla@gmail.com) · [aaronlilla.github.io](https://aaronlilla.github.io) · [github.com/aaronlilla](https://github.com/aaronlilla) · [linkedin.com/in/aaronlilla](https://www.linkedin.com/in/aaronlilla)

---

## Summary

Full-stack software engineer with **13 years of web development experience** and 8+ years deep in modern JavaScript. Lead front-end engineer on **TableCaptain**, a React + Electron platform deployed in **30+ poker rooms** across the U.S. and Asia, orchestrating **450+ concurrent in-venue displays** over a single WebSocket fabric. Founder of **Afterimage Studio**, with **Spire of Ash** shipped on Steam and Holoscene in development. Production AI-tooling experience: multi-agent build pipelines, MCP-based agent integration, deterministic TS↔C# parity validation across ~48K LOC.

---

## Skills

- **Languages:** TypeScript, JavaScript (ES2024), Node.js, C# (.NET), HTML5, CSS3
- **Frontend:** React, Redux, Tailwind CSS, Vite, Design Systems, Accessibility (WCAG), Figma → React
- **Backend:** Node.js, REST APIs, WebSockets, PostgreSQL, SQLite, Schema Design, Auth & Sessions
- **Desktop & Real-time:** Electron (IPC, preload, auto-update, native subprocess), Real-time sync, Optimistic UI + reconciliation
- **Architecture & Practice:** System Design, Scalable Architecture, Code Review, Mentoring, Agile / Scrum
- **AI & Tooling:** Claude API, MCP (Model Context Protocol), Multi-agent pipelines, LLM streaming, Prompt engineering, AI-assisted development
- **Testing & DevOps:** Playwright, Vitest, Jest, CI/CD, Visual regression, Performance profiling, Git

---

## Experience

### Founder · Lead Engineer — Afterimage Studio (Holoscene, in development)
**2025 — Present** · Remote

Building an indie game studio end-to-end. Engine, runtime, content pipeline, custom tooling, and an MCP-integrated balance simulator that lets AI agents prototype and validate changes in-process.

- Architected a deterministic combat engine in C# (~48,000 LOC) with a TypeScript reference spec; Monte Carlo parity gate rejects drift above 0.5% across 1,000 seeds.
- Designed a multi-agent build pipeline coordinating 7+ specialized Claude Code agents (combat runtime, balance validator, data exporter, mode implementor, cross-mode validator) shipping coordinated changes across 6 game modes against a frozen invariant contract — no merge conflicts to date.
- Engineered an Ability Priority Language (APL) evaluator and a 36-mechanic dispatch system supporting 36 hero archetypes with 14 aura patterns, resolving cross-character passive synergies deterministically per simulation tick.
- Built a TypeScript-to-Unity data pipeline that exports versioned ScriptableObject `.asset` files plus JSON sidecars from a single TS source of truth — eliminating data-shape drift between studio and engine.

**Stack:** Unity · C# · TypeScript · Node.js · MCP · Claude API · PlayFab · Addressables

### Frontend Engineer — PokerAtlas (TableCaptain)
**2019 — 2025** · Las Vegas, NV (Hybrid)

Led front-end development of TableCaptain — a React + Electron poker room management platform adopted in 30+ rooms across the U.S. and Asia, orchestrating 450+ concurrent in-venue displays over a single WebSocket fabric. **Video walkthroughs of Floor Editor, Table Manager, Waitlist, Auto Updater, and the in-venue TV display: [aaronlilla.github.io](https://aaronlilla.github.io/#work).**

- Scaled TableCaptain V2 to a market-leading position by adoption in 2024 (per company assessment), serving 30+ active poker rooms.
- Architected the real-time WebSocket sync layer: 450+ concurrent displays (15+ per venue × 30+ venues) with sub-second update latency across variable venue network conditions.
- Engineered core features end-to-end: floor editor, table manager, waitlist, employee manager, and a real-time in-venue display HUD with optimistic UI and server-confirmed reconciliation.
- Automated Electron auto-update + CI/CD pipeline with staged rollout and rollback; bi-weekly releases with hotfixes deployable in under 10 minutes — zero major downtime incidents across 6 years of production.
- Led TypeScript + Redux migration across the codebase; mentored junior engineers and introduced code-review practices adopted across the team.
- Translated Figma mockups into pixel-perfect, responsive React components and reusable design-system primitives.

**Stack:** React · Redux · Electron · WebSockets · .NET (integration) · Webpack · CI/CD · Figma · Agile

### Founder · Lead Engineer — Afterimage Studio (Spire of Ash, shipped on Steam)
**2022 — 2024** · Remote

Shipped a roguelike ARPG on Steam end-to-end — engine, content tooling, loot math, and the build pipeline.

- Self-shipped on [Steam](https://store.steampowered.com/app/4450160/Spire_of_Ash/) — full production cycle from prototype to publish.
- Built the procedural affix generator and audit scripts that gate item rolls against design tolerances; the loot math pipeline informs current Holoscene combat parity work.
- Patterns proven here became the foundation of the Holoscene engine and tooling.

**Stack:** Unity · C# · TypeScript · Node.js · Steam

### Frontend Developer — USCRE Online
**2017 — 2019** · Las Vegas, NV (Hybrid)

Built a single-page React app delivering real-time commercial real estate data for 5,000+ properties.

- Cut quote retrieval time by 50% via Redux-driven caching, request deduplication, and database query optimization on the search path.
- Shipped a 20-component reusable library, dropping front-end bug rate ~40% over 6 months.
- Drove load time under 1.2s; lifted Core Web Vitals into the green and improved organic search ranking.

**Stack:** React · Redux · JavaScript · HTML5 · CSS3

### Freelance Web Developer — Self-Employed (concurrent with salaried roles)
**2012 — Present** · Remote

Landing pages, custom dashboards, Discord bots, and small SaaS tools.

---

## Notable Side Projects

**Clippa** *(Electron · MCP · SQLite · ffmpeg)* — Local-first Electron app that detects highlight moments in long-form video. Multi-stage media pipeline on a SQLite-backed job queue. Exposes a dual-transport MCP server (HTTP + stdio, bearer-token auth) so external agents can drive the entire workflow programmatically.

**FiveStack** *(React · Node.js · Raider.io API)* — Mythic+ team-building platform with AI-assisted matchmaking. [github.com/aaronlilla/FiveStack](https://github.com/aaronlilla/FiveStack)

**Discord AI Chatbot** *(Node.js · discord.js · streaming LLM)* — Discord bot that streams LLM responses token-by-token in real time. [github.com/aaronlilla/discord-ai-chatbot](https://github.com/aaronlilla/discord-ai-chatbot)

---

Education: College of Southern Nevada, Las Vegas, NV
