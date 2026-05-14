**Topic:** Coordinating 7+ specialized Claude Code agents on a single build pipeline
**Audience:** AI infra curious devs, hiring managers at agent/devtools companies, technical founders
**Screenshot prompt:** A diagram of the agent fleet: orchestrator at the top, branching to combat-runtime-engineer, balance-validator, data-pipeline-engineer, mode-implementors, vision-compliance-auditor, etc. Or a screenshot of `.bus/` activity logs showing agents handing tasks off.
**Optimal post day:** Thursday morning Pacific (deeper content, end-of-week engagement)

---

For Holoscene's port from a TypeScript studio to a Unity engine, I'm not driving Claude as a single agent. I'm driving a *fleet*.

Seven+ specialized agents, each owning a slice of the codebase:

- `combat-runtime-engineer` — the deterministic combat engine in C#. Frozen surface. Other agents consume; they don't touch.
- `balance-validator` — read-only verifier. Asserts TS↔C# parity at <0.5% drift across 1,000 Monte Carlo seeds. Gates every PR.
- `data-pipeline-engineer` — owns the TS→Unity exporter for ScriptableObjects + JSON sidecars.
- `mode-implementors` (one per game mode: M+, Raid, TFT, JRPG, TD/VS) — each owns a single Unity scene and its `mode-manifest.json` entry.
- `vision-compliance-auditor` — audits every diff against a vision doc with 7 design pillars. Read-only veto power.
- `cross-mode-validator` — diffs every mode manifest against frozen invariants and prior modes' entries.

The orchestrator agent holds the mode pointer and a `.bus/` write lock. It doesn't write code; it dispatches.

Why bother with this structure instead of one big agent?

Because *frozen contracts* are the only way coordination scales. The combat engine is a frozen API surface. Mode implementors can only consume it. Verifier agents can only veto, never edit. The orchestrator can only dispatch, never write. Roles compose; conflicts get caught at agent boundaries.

This is basically microservices for AI agents. Same principle: small, single-responsibility, communicate over a defined contract, fail loudly when contracts break.

I think this is what 2026 codebases will look like for any team using AI at scale. Not "the agent that does everything," but a fleet of agents with surgical scope, talking through a frozen invariant surface, with humans supervising the orchestrator.

Curious: anyone else running multi-agent pipelines in production? What's holding you together — explicit contracts, or just hope?
