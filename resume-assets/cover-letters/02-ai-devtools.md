Subject: Engineer with shipped MCP integrations — Aaron Lilla

Hi [HIRING MANAGER],

[SPECIFIC THING — e.g., "Your team's work on [PRODUCT] is the most thoughtful application of agent-driven workflows I've seen in this space, and I want to help build it."]

I'm a full-stack engineer with thirteen years of experience, and I spend a meaningful share of my time on AI-assisted development and agent tooling. Two things in particular that I think are directly relevant:

**Holoscene's multi-agent build pipeline.** Holoscene is the current project at my indie studio (Afterimage Studio). I designed a coordinated fleet of 7+ specialized Claude Code agents — combat runtime, balance validator, data exporter, mode implementor — that ship coordinated changes against a frozen invariant contract. The combat engine itself runs deterministically in C# against a TypeScript reference spec, with a Monte Carlo parity validator that rejects drift above 0.5% across 1,000 seeds. The whole loop is exposed to Claude via a custom MCP tool suite, so balance prototyping collapses to single commands.

**Clippa's MCP server.** Local-first Electron app for video clip detection. The Electron main process embeds a dual-transport MCP server (HTTP + stdio, bearer-token auth) so external agents can drive the entire workflow — VOD ingest, signal analysis, event detection, clip export — without ever touching the UI. The same job queue serves the human and the agent.

For context on the production engineering side: I led six years of front-end on **TableCaptain** (React + Electron, deployed in 30+ poker rooms, real-time WebSocket sync across 15+ in-venue displays). I also founded **Afterimage Studio**, my indie game studio, which shipped **Spire of Ash** on Steam end-to-end. So the AI work is in addition to a track record of shipping real things.

If [COMPANY] is hiring people who build *with* AI as a first-class tool — not just consume it — I'd love a 20 minutes to talk.

**Aaron Lilla**
[aaronjlilla@gmail.com](mailto:aaronjlilla@gmail.com) · [aaronlilla.github.io](https://aaronlilla.github.io) · [Résumé](https://aaronlilla.github.io/resume.html) · [GitHub](https://github.com/aaronlilla)
