export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  context: string;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tablecaptain-realtime',
    title: 'Real-time across 450+ displays, 30+ venues, six years no major outages',
    tagline: "How TableCaptain keeps a casino's floor, waitlist, and in-venue TVs in lockstep.",
    context:
      "TableCaptain runs 24/7 in 30+ poker rooms across the U.S. and Asia. Every venue has a Windows back-office desktop, 15+ in-venue TVs showing live waitlist and table status to players, and floor managers walking around updating state from tablets — 450+ concurrent displays across the fleet. All of it has to stay in sync, sub-second, even when one of those screens has flaky Wi-Fi.",
    problem:
      "Real-time multi-screen sync is hard. Network conditions vary across venues — wired in some rooms, marginal Wi-Fi behind the bar in others. Auto-updates can't take a poker room offline; a live waitlist display going dark mid-tournament is a real, customer-visible failure. And the back-office app, the staff tablets, and the TV displays all need to converge on the same truth without the staff ever thinking about state.",
    solution:
      "Built a React + Electron client architecture sitting on a long-lived WebSocket connection to a .NET backend. State is Redux on the client, with optimistic updates on staff actions and reconciliation on confirmation. The TV display app is the same Electron bundle running in a kiosk mode — same state shape, same reducers, same code path. Auto-update flows through a custom Electron updater with staged rollout and rollback so a bad build never reaches all venues at once. Bi-weekly releases became the norm; hotfixes go out in under 10 minutes.",
    outcome:
      "TableCaptain V2 reached a market-leading adoption position in 2024. The same architecture absorbed feature additions — floor editor, table manager, employee manager, dealer rotation — without restructuring the sync layer. Six years of production with sub-second sync as a baseline; zero major downtime incidents. Video walkthroughs on this site demo each surface.",
    stack: ['React', 'Redux', 'Electron', 'WebSockets', '.NET (integration)', 'Webpack', 'CI/CD', 'Figma'],
  },
  {
    slug: 'deterministic-combat-sim',
    title: 'Deterministic combat at <0.5% drift across 1,000 seeds',
    tagline: 'How Holoscene runs the same fight twice and gets the same answer — in two languages.',
    context:
      "Holoscene's combat is a deep, stat-heavy ARPG simulation: 36 hero archetypes, procedural affixes, multi-character passive synergies, and an ability priority language that resolves into per-tick damage events. The math is authored in TypeScript so it can run in the studio's design tools; it ships in C# inside Unity for production.",
    problem:
      "Two implementations of the same combat math is a recipe for silent drift. A 0.3% rounding difference compounds across a thousand ticks into wildly different fight outcomes — which means design balance done in the studio doesn't match what players actually see in the game.",
    solution:
      "I locked the TypeScript reference spec, ported the math line-for-line into C# preserving operand grouping and halt-on-zero guarantees, and built a Monte Carlo parity validator that runs 1,000 seeded fights through both implementations and asserts <0.5% divergence on event count, final HP, and ailment fire ordering. Every PR that touches combat passes through the validator before it can merge.",
    outcome:
      "The studio and the engine can iterate independently without diverging. A balance designer changes a coefficient in TypeScript, the validator confirms parity, and the C# build accepts the change. The same pipeline drives an MCP-exposed headless sim that Claude can invoke directly — single-command balance prototyping with deterministic reproducibility.",
    stack: ['C#', 'TypeScript', 'Unity', 'MCP', 'Claude API', 'Monte Carlo validation'],
  },
  {
    slug: 'clippa-mcp-electron',
    title: 'Driving an Electron desktop app from an LLM',
    tagline: "How Clippa lets a Claude agent run the entire video-clipping pipeline without ever touching the UI.",
    context:
      "Clippa is a local-first Electron app for finding highlight moments in long-form videos — Twitch VODs, streams, screen recordings. The pipeline runs locally: yt-dlp ingest → ffprobe → frame sampling → audio RMS analysis → scene detection → event classification → review timeline → export. It's the kind of workflow that benefits from being scriptable.",
    problem:
      "Scripting an Electron app through its UI is fragile. AppleScript / WinAPI automation, headless browser drivers, accessibility APIs — all leak across versions and break the moment someone changes a label. I wanted a stable, typed contract that external agents could rely on, with auth and isolation built in.",
    solution:
      "Built a dual-transport MCP (Model Context Protocol) server inside the Electron main process — HTTP on 127.0.0.1:39127 and a stdio bridge — with bearer-token authentication and a resource-driven API. The same job queue that drives the UI also serves MCP requests, so an agent and a human user can drive the app interchangeably. The renderer stays sandboxed with context isolation; subprocesses use explicit argument arrays (never shell interpolation); CSP locks fetch to local origins.",
    outcome:
      "Claude Code can import a VOD, rerun analysis with new detection thresholds, inspect the resulting event timeline, and export clips — all without opening the window. It's headless when you want it headless, GUI when you want it GUI. The same pattern generalizes to any local-first app that wants an agent-friendly surface.",
    stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'MCP SDK', 'ffmpeg', 'yt-dlp', 'Zod'],
  },
];
