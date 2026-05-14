import type { Project } from '../types';

export const projects: Project[] = [
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
    name: 'Holoscene',
    type: 'Indie Game · In Development · Engine + Tooling',
    stack: ['Unity', 'C#', 'TypeScript', 'Node.js', 'MCP', 'Claude API', 'PlayFab'],
    year: '2025 — present',
    description:
      'In-development ARPG built on a 48K-LOC deterministic combat engine. The combat math has a locked TypeScript reference spec; a C# port is gated by a Monte Carlo parity validator that rejects builds with >0.5% divergence across 1,000 seeds. A custom MCP (Model Context Protocol) tool suite exposes the headless combat sim to Claude, collapsing balance-iteration cycles to single commands.',
    outcomes: [
      'Deterministic combat sim — seeded RNG, no global state, bit-identical TS↔C# damage pipeline.',
      'Built a multi-agent build pipeline: 7+ specialized Claude Code agents (combat runtime, balance validator, data exporter, etc.) ship coordinated changes against a frozen invariant surface.',
      'Engineered an APL (Ability Priority Language) evaluator and a 36-mechanic dispatch system supporting cross-character passive synergies.',
    ],
  },
  {
    name: 'Spire of Ash',
    type: 'Indie Game · Shipped on Steam',
    stack: ['Unity', 'C#', 'TypeScript', 'Node.js', 'Steam'],
    year: '2022 — 2024',
    description:
      'Self-shipped roguelike ARPG with procedural loot, deep affix systems, and tier-based progression. Engineered the live combat engine, the loot generation math, and the tooling pipeline used to balance and iterate on hundreds of items and skills.',
    outcomes: [
      'Released on Steam — full production cycle from prototype to publish.',
      'Built the procedural affix generator + balance audit scripts that gate item rolls against design tolerances.',
    ],
    links: [
      { label: 'Steam page', href: 'https://store.steampowered.com/app/4450160/Spire_of_Ash/' },
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
    name: 'FiveStack',
    type: 'Web App · Team-Matching + Raider.io API',
    stack: ['JavaScript', 'React', 'Node.js', 'Raider.io API'],
    year: '2024 — present',
    description:
      'Mythic+ team-building platform for World of Warcraft players. AI-assisted matchmaking pairs players against Raider.io profile data — score, role coverage, experience, and run history — to build consistent, climbable teams. Integrates with the Raider.io API for live character data.',
    links: [
      { label: 'GitHub', href: 'https://github.com/aaronlilla/FiveStack' },
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
