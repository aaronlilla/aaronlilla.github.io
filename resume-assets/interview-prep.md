# Interview Prep — Aaron Lilla

A self-contained prep doc tuned to your actual experience. Skim the whole thing once, then drill the sections relevant to whatever loop you're walking into.

---

## How senior-IC remote loops work in 2026

Typical 4-stage funnel:

1. **Recruiter screen (20–30 min)** — culture fit, comp expectations, why-now-why-them. **Resume facts only**, no whiteboarding.
2. **Hiring manager screen (45 min)** — your background in depth, why their team, walk-through of 1-2 projects.
3. **Technical loop (3–5 hours)** — system design (1 hr), live coding or take-home (1–2 hr), behavioral (45 min), sometimes a culture/values round.
4. **Offer + comp negotiation.**

The biggest filters are the recruiter screen (have a clean 60-second pitch + comp anchor) and the hiring manager screen (have 5 STAR stories *cold*). Most candidates over-prep LeetCode and under-prep the conversational rounds.

---

## Your 60-second pitch

Have this memorized. Use it on recruiter screens, in introductions, in DMs.

> "I'm a full-stack engineer with 13 years of web experience, mostly in React, TypeScript, Node, and Electron. For six years I led front-end on TableCaptain at PokerAtlas — a React + Electron poker room management platform that scaled to 30+ venues across the U.S. and Asia, and became the #1 product by adoption in 2024. On the side I've shipped my own indie game on Steam and I'm currently building a follow-up with deep AI tooling — multi-agent build pipelines, MCP-based agent integration. Looking for a senior IC role at a product company where I can own end-to-end work and bring the AI-tooling fluency that most JS engineers haven't built yet."

Variations:
- **For AI/devtools companies:** swap the closing for "...looking for a team building agent-native tooling. The MCP and multi-agent work is where I'm putting most of my creative energy right now."
- **For real-time/infra companies:** swap the closing for "...looking for real-time or infra-heavy work. The TableCaptain sync problem at scale is the kind of engineering I want more of."

---

## STAR stories — 7 you should have ready

For each, follow Situation → Task → Action → Result. **Practice these out loud.** Reading them is useless; saying them is the prep.

### 1. "Tell me about a time you owned a project end-to-end."

- **S:** At PokerAtlas, TableCaptain V1 had grown into a tangled JS codebase. We were losing engineering velocity and the founders wanted a V2 with a path to scale.
- **T:** I was asked to lead the front-end re-architecture — own the structure, the design-system, the migration plan, and the rollout.
- **A:** I introduced TypeScript across the codebase, restructured the Redux state shape, built a reusable component library, and worked with the .NET backend team on the WebSocket contract. I also designed the staged auto-update rollout so we could ship bi-weekly without ever taking a live venue offline.
- **R:** TableCaptain V2 became the #1 poker room management system by adoption in 2024 — 30+ venues across the U.S. and Asia. Hotfixes deployable in under 10 minutes.

### 2. "Tell me about a time you shipped something hard."

- **S:** Shipping an indie game alone on Steam — Spire of Ash. Engine, content, store integration, the works.
- **T:** I gave myself 18 months from prototype to publish; the actual deadline was self-imposed.
- **A:** I scoped aggressively — picked one genre, one set of mechanics, refused feature creep. Built the procedural affix system, the loot math audit scripts, the build pipeline, and the store page. Every Sunday I shipped a build.
- **R:** Shipped on Steam in the planned window. The patterns I proved out (deterministic sims, audit-script gates, weekly cadence) became the foundation for Holoscene.

### 3. "Tell me about a time you handled conflict / disagreement on a team."

- **S:** At TableCaptain we had a recurring tension: the .NET backend team wanted a strict request/response API; the front-end team needed a real-time push model for the in-venue displays.
- **T:** Get to a contract both sides could ship against without one team blocking the other.
- **A:** I proposed and prototyped a WebSocket envelope that wrapped backend events in a typed schema the front-end could consume optimistically. Walked through it with the backend lead, found two cases where my model didn't match their domain, revised. Then we co-owned the contract and added new event types via the same shape.
- **R:** Six years of real-time without a major sync incident. The contract was load-bearing for every feature added after.

### 4. "Tell me about a time you failed or made a mistake."

- **S:** Early on at PokerAtlas, I shipped an Electron auto-update that didn't have a rollback path. One bad build broke the main display app at a venue mid-tournament.
- **T:** Restore the venue immediately and prevent the recurrence.
- **A:** Walked the manager through reverting to the prior installer over the phone. Then rewrote the updater that week with: staged rollout (one venue tier at a time), explicit rollback, version pinning per venue. Wrote a postmortem and presented it to the team.
- **R:** That class of incident never recurred. The rollback architecture became table stakes for every release after.

### 5. "Tell me about a time you had to learn something quickly."

- **S:** When I started on Holoscene, I'd never seriously used C# or Unity. The combat engine had to run there.
- **T:** Port the TypeScript combat math to C# without drift.
- **A:** Treated the port as a parity problem, not a rewrite. Wrote a Monte Carlo validator first — 1,000 seeds, comparing TypeScript and C# output. Then ported the math piece by piece, letting the validator tell me when I'd diverged. Picked up C# idioms in the process: properties, generics, struct vs class semantics, all driven by failing tests.
- **R:** <0.5% drift across 1,000 seeds. The validator gates every combat change now.

### 6. "Tell me about a time you had ambiguity / no clear spec."

- **S:** Holoscene's multi-agent build pipeline. There's no playbook for "coordinate 7+ specialized AI agents on a long-running codebase port."
- **T:** Figure out an architecture that scales without humans being a bottleneck for every micro-decision.
- **A:** I defaulted to the same pattern that works for microservices: frozen contracts at module boundaries, surgical scope per agent, read-only verifier agents that can veto but not edit. Wrote the orchestrator as the only agent allowed to write to a `.bus/` lockfile. Iterated on the rules every week based on what was actually shipping.
- **R:** Coordinated changes flow without merge conflicts. New agents can be added without restructuring the fleet. Same instincts I'd use scaling a backend microservice mesh.

### 7. "Tell me about a time you improved performance."

- **S:** At USCRE, the property search was sluggish — quote retrieval over 2 seconds, mobile users churning.
- **T:** Cut latency without rewriting the backend.
- **A:** Profiled the front-end. Found we were re-fetching property data on every filter change; backend was returning the same payload. Added Redux-driven caching with cache invalidation on actual data mutations, deduplicated in-flight requests, and prefetched detail panes on hover.
- **R:** Quote retrieval cut 50%. Page load dropped under 1.2 seconds. Core Web Vitals went green. Mobile session duration up 22%.

---

## System design — topics tuned to your background

The big rule for senior-IC system design: **clarify requirements before drawing boxes**. Spend 5 of your 45 minutes asking questions. Spend 30 designing. Spend 10 discussing tradeoffs.

### Likely prompts you'll see

| Prompt | Why it'll come up | What to lead with |
|---|---|---|
| **Design a real-time multi-screen sync system** | Direct TableCaptain analog | WebSocket envelope with typed events, optimistic UI + reconciliation, staged auto-update with rollback |
| **Design a leaderboard / ranking system at scale** | Game-adjacent + classic system design | Write path (batched ingest + sorted set in Redis), read path (cached tiers), pagination strategy |
| **Design a video clip processor (Twitch-style highlights)** | Direct Clippa analog | Multi-stage pipeline, job queue with idempotent stages, asset-store separation, signal fusion for detection |
| **Design a desktop app that exposes an API to external agents** | Direct MCP analog | Local-only transport, auth, contract-versioning, shared job queue for UI + API |
| **Design a content / data pipeline (TS → engine)** | Direct Holoscene exporter analog | Single source of truth, versioned schema, validation gate, idempotent re-runs |
| **Design a CI/CD system for desktop apps** | TableCaptain auto-update analog | Build matrix, staged rollout by tier, version pinning, rollback model |

### Frameworks to keep in your back pocket

- **Optimistic UI vs server confirmation** — when to choose which.
- **Idempotent vs at-least-once vs exactly-once delivery** — most real-time systems are at-least-once with idempotent handlers.
- **CAP theorem applied** — most product systems pick AP (real-time UI) with eventually-consistent state.
- **Event-driven vs request/response** — when each is correct.
- **Push vs pull** — WebSockets vs polling vs Server-Sent Events.
- **Cache invalidation strategies** — TTL, write-through, write-around, eventual consistency.

---

## Live coding / take-home — what to expect

You'll see one of these:

1. **Live coding (1 hr)** — usually a medium-complexity problem in JS/TS. Implement a debounce, a typeahead, a state machine, a virtual list. **Practice talking while you code** — silence is the killer.
2. **Take-home (4–8 hr)** — small full-stack app. Build a CRUD with auth, build a real-time chat, build a dashboard from a JSON API. Quality > completion; ship what you have with a tight README explaining tradeoffs.
3. **Pair-programming on a real codebase** — they hand you their repo and a bug. Ask questions. Read before typing. Walk through your reasoning.

### JS/TS questions to be ready for

- Event loop (microtasks vs macrotasks, when does `setTimeout(fn, 0)` run vs `Promise.resolve().then(fn)`).
- Closures and module scope.
- `this` in arrow vs regular functions.
- Generics in TypeScript — `<T extends Record<string, unknown>>`-style constraints, conditional types, mapped types.
- React reconciliation — keys, the rules of hooks, why-am-I-rendering-twice.
- Redux flow — actions, reducers, middleware, why state is immutable.
- Race conditions in async code — cancel-on-unmount, AbortController, last-write-wins.
- WebSocket reconnection logic — exponential backoff, replay-from-version.

---

## Behavioral — common framings + your default story

| Framing | Default story |
|---|---|
| "Tell me about your work." | 60-second pitch above |
| "Why are you leaving / why now?" | Holoscene is fascinating but I want team work + a steady mission. Holoscene continues on evenings. |
| "Why this company?" | One specific thing — a blog post, a product decision, a hire. **Always specific.** |
| "What are you looking for in a role?" | Senior IC ownership, modern stack (React/TS/Node), remote, team that ships and iterates. |
| "Strengths?" | Real-time + desktop + AI-tooling fluency. The third one is rare. |
| "Weaknesses?" | "Default to deep dives — I've learned to time-box them and surface tradeoffs earlier when scope is unclear." (Don't lie about a weakness; pick a real one and show what you do about it.) |
| "Where do you see yourself in 5 years?" | Senior IC who's known for one specific superpower — for me probably AI-tooling for product engineering. Not chasing management. |

---

## Comp anchoring

Before any recruiter screen, **know your numbers cold**:

- **Floor (won't take):** ~$140K base
- **Target:** $170K–$185K base
- **Stretch:** $200K+ base
- **Total comp expectations:** ~$200K-$250K with equity for early-stage; ~$220K-$300K with public stock for established companies

When asked "what's your range?": *"I'm targeting $170-200 base depending on equity and scope, but I'm flexible if the role is right — happy to walk through specifics once we both know it's a fit."* Never give a single number first.

When they push for a single number: *"I'd want to understand the role and the team better before naming a single number — but I won't be a fit below $140."*

---

## Day-of checklist

- [ ] 5 STAR stories rehearsed *out loud* in the past week.
- [ ] 60-second pitch said out loud 3+ times.
- [ ] One specific thing about the company you'll mention.
- [ ] One thoughtful question prepared per round.
- [ ] Résumé + portfolio open in a tab.
- [ ] Water + snack within reach.
- [ ] Phone on do-not-disturb.
- [ ] Backup connection (phone hotspot tethered) ready.

---

## Questions YOU should ask

Senior candidates ask sharp questions. Don't waste your "any questions for us?" slot.

- "Walk me through how a feature actually gets shipped here — from idea to production."
- "What's the team's relationship with on-call? Who's on call when?"
- "What's the biggest technical debt the team is carrying right now? What's the plan?"
- "How do code reviews work? Async? Pair?"
- "What does success in the first 90 days look like for someone in this role?"
- "What's the manager's IC background? Do they still code?"
- "Tell me about a time the team disagreed on a technical direction. How did it land?"

**Don't ask about WFH policies, comp, or vacation in early rounds.** Save those for offer-stage.
