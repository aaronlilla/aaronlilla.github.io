import type { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'Holoscene',
    type: 'Game · In Development · Studio + Engine',
    stack: ['TypeScript', 'React', 'Node.js', 'Vite', 'C#', '.NET', 'Godot', 'MCP', 'Claude API'],
    year: '2025 — present',
    description:
      "A buildcraft ARPG I'm building end-to-end across two codebases: a TypeScript + React design studio (the single source of truth) and a deterministic C#/.NET game engine on Godot. The studio holds a deterministic combat simulator, content for 100 characters / 500 skills / 2,000+ items, and 66 automated audits that enforce balance and cross-engine parity in CI. An AI-agent pipeline lets Claude prototype and validate changes in-process.",
    outcomes: [
      'Deterministic, tick-based combat simulator (seeded RNG, typed event stream) with an ability-priority (APL) evaluator, auras, and cross-character synergy systems.',
      'Monte Carlo parity harness holds the C# engine within 0.5% of the TypeScript reference across 1,000 seeded runs; 66 audit scripts + a 30-suite Vitest pack gate every change.',
      'Multi-agent build pipeline of specialized Claude Code agents (combat runtime, balance validator, data exporter, mode implementor, cross-mode validator) with an MCP-driven live dashboard.',
      'Single-source-of-truth data pipeline codegens the engine data from TypeScript with content-hash drift detection in a pre-commit gate.',
    ],
  },
  {
    name: 'Spire of Ash',
    type: 'Game · Shipped on Steam · Electron + TypeScript',
    stack: ['TypeScript', 'React', 'Electron', 'Three.js', 'Pixi.js', 'Redux', 'Supabase', 'Steamworks'],
    year: '2022 — 2024',
    description:
      'A commercial roguelite ARPG I designed, built, and self-published on Steam — end-to-end as a TypeScript + Electron desktop app (~74,000 lines of TypeScript, 600+ tests). 3D dungeon rendering with Three.js / React Three Fiber, a Pixi.js Path-of-Exile-style passive tree, a Supabase cloud backend, and real-time WebSocket leaderboards.',
    outcomes: [
      'Shipped and maintained a live-service product across 20+ releases — Steamworks integration, electron-builder packaging, staged auto-update, Sentry crash reporting, and Chinese localization.',
      'Built the cloud backend on Supabase (auth, cloud saves with conflict resolution, IndexedDB fallback) and per-mode / per-key-level real-time WebSocket leaderboards.',
      'Engineered the procedural systems — a 442-affix item generator, a procedural passive-tree generator, and 988 collectible cards — gated by a headless combat worker and Monte Carlo balance audits.',
    ],
    links: [
      { label: 'Steam page', href: 'https://store.steampowered.com/app/4450160/Spire_of_Ash/' },
    ],
  },
  {
    name: 'TableCaptain',
    type: 'Desktop App · Production · 30+ Venues',
    stack: ['React', 'Redux', 'Electron', 'WebSockets', '.NET (integration)', 'Webpack', 'CI/CD'],
    year: '2019 — 2025',
    description:
      'React + Electron poker room management platform at PokerAtlas. Live in 30+ poker rooms across the U.S. and Asia, with a real-time WebSocket TV display system driving 15+ synchronized screens per venue. Owned core front-end features end-to-end: floor editor, waitlist, table manager, employee manager, dealer rotation, and an auto-update pipeline that ships hotfixes in under 10 minutes.',
    outcomes: [
      'Scaled the product to the #1 poker room management system by adoption in 2024.',
      'Built bi-weekly release pipeline with Electron auto-updater + CI/CD; hotfixes deployable in under 10 minutes.',
      'Translated Figma mockups into pixel-perfect, responsive React components and reusable primitives.',
      'Integrated with a .NET backend over WebSockets for sub-second synchronization across 15+ in-venue displays.',
    ],
    videos: [
      { id: 'spwbp0cndwo', label: 'Floor Editor — drag-and-drop layout' },
      { id: 'TeF75Xz1YYg', label: 'Table Manager — real-time assignment' },
      { id: 'KZC2kZ4esOI', label: 'Waitlist — live updates' },
      { id: 'cPGJ_oQv8CM', label: 'Waitlist Display — in-venue TV' },
      { id: 'wgbSgOx5LfE', label: 'Employee Manager' },
      { id: '8MTiMwkA7CU', label: 'Auto Updater — Electron CI/CD' },
    ],
  },
  {
    name: 'FiveStack',
    type: 'Web App · Full-Stack · Raider.io + OAuth',
    stack: ['React', 'Node.js', 'Express', 'Supabase (PostgreSQL)', 'OAuth', 'Raider.io API'],
    year: '2024 — present',
    description:
      'A full-stack Mythic+ team-building platform for World of Warcraft. A React 18 front end (React Query, Tailwind) on a Node/Express API backed by Supabase PostgreSQL with row-level security and real-time subscriptions. AI matchmaking scores players across five compatibility factors — role coverage, Mythic+ rating, experience, schedule, and item level — from live Raider.io data, with Discord and Battle.net OAuth.',
    links: [
      { label: 'GitHub', href: 'https://github.com/aaronlilla/FiveStack' },
    ],
  },
  {
    name: 'Clippa',
    type: 'Desktop App · Electron + MCP Server',
    stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Node.js', 'MCP', 'ffmpeg'],
    year: '2025 — present',
    description:
      'Local-first desktop app that detects interesting moments in long-form video (Twitch VODs, recordings) and lets you review them on a timeline before exporting clips. Runs a multi-stage media pipeline — yt-dlp ingest, frame sampling, audio RMS analysis, scene detection, and event classification — on top of a SQLite-backed job queue. Exposes an MCP server (HTTP + stdio, bearer-token auth) so external agents can drive the entire workflow programmatically.',
    outcomes: [
      'Designed a security-hardened Electron architecture: context isolation, sandboxed renderer, explicit subprocess arg arrays (no shell interpolation), strict CSP.',
      'Implemented signal fusion — audio z-scores + scene cuts + transcript keywords merge into per-second timeline events with tunable detection profiles.',
      'Dual-transport MCP server enables Claude Code to import VODs, rerun analysis, and export clips without touching the UI.',
    ],
  },
  {
    name: 'Discord AI Chatbot',
    type: 'Bot · Streaming LLM Responses',
    stack: ['Node.js', 'discord.js', 'LLM APIs', 'Streaming'],
    year: '2024',
    description:
      'A Discord bot that streams LLM responses into a channel in real time — token-by-token rendering, no "thinking..." dead air. Designed to feel as fast and conversational as the underlying model, with conversation memory and per-channel personality configuration.',
    links: [
      { label: 'GitHub', href: 'https://github.com/aaronlilla/discord-ai-chatbot' },
    ],
  },
  {
    name: 'aaronlilla.github.io',
    type: 'Portfolio · CRT Design System',
    stack: ['Vite', 'React', 'TypeScript', 'Tailwind', 'Playwright'],
    year: '2026',
    description:
      'This site. A modern portfolio rendered through a CRT — scanlines, phosphor bloom, screen feel. Hand-tuned CSS animations only (no animation library), Playwright visual regression tests, AAA contrast, and motion-safe by default.',
    links: [
      { label: 'GitHub', href: 'https://github.com/aaronlilla' },
    ],
  },
];
