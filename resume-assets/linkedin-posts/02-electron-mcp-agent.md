**Topic:** Driving an Electron desktop app from a Claude agent via MCP
**Audience:** AI tooling crowd, dev tools engineers, anyone building agent-friendly software
**Screenshot prompt:** A Claude Code terminal session running `clippa.import-vod` and getting structured JSON back. Or a screen split: Clippa UI on the left, Claude session on the right, both driving the same job queue.
**Optimal post day:** Wednesday or Thursday morning Pacific

---

Spent the weekend making my Electron desktop app drivable by Claude.

Not "automatable" via UI scraping. Not "scriptable" via brittle keyboard shortcuts. Drivable — via a typed, authenticated contract that an LLM agent can use to import videos, run analysis, and export clips without ever opening the window.

The pattern:

1. The Electron main process embeds an MCP server (Model Context Protocol). Two transports: HTTP on 127.0.0.1 for in-process tools, stdio bridge for command-line agents. Bearer-token auth so it doesn't leak.

2. The same job queue that drives the UI also serves MCP requests. An agent and a human user can hit the app interchangeably. No special "agent mode."

3. Renderer stays sandboxed. Context isolation on, no nodeIntegration, subprocesses use explicit argument arrays (never shell interpolation). The MCP surface is opt-in and locked down.

The result is genuinely useful: Claude can ingest a VOD, rerun detection with new thresholds, inspect the resulting timeline, and export clips — all from a chat session. Headless when you want it headless, GUI when you want it GUI.

The pattern generalizes. Any local-first app that benefits from agent integration can ship the same surface.

If you're building a desktop tool in 2026 and not exposing an MCP surface, you're betting the future of your product on a UI that an agent can't reliably use.

What's the smallest local-first app on your machine that should be agent-drivable?
