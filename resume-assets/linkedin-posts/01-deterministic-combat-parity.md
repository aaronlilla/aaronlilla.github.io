**Topic:** TS↔C# combat parity validation in Holoscene
**Audience:** Senior engineers, systems folks, anyone who's lived through cross-language drift
**Screenshot prompt:** A side-by-side diff or a Monte Carlo distribution plot from the validator showing <0.5% drift across 1,000 seeds. Even a terminal output of the parity check will do.
**Optimal post day:** Tuesday or Wednesday morning Pacific

---

Holoscene's combat math has to run in two languages.

TypeScript in the studio (so balance designers can iterate in seconds).
C# in Unity (so the player actually feels the simulation).

The problem: a 0.3% rounding difference between the two compounds across 1,000 ticks into wildly different fight outcomes. Design balance done in the studio stops matching what ships to players.

Fix:

1. The TypeScript spec is locked. Operand grouping, halt-on-zero conditions, the order every multiply happens in — all spec'd in a frozen reference doc.

2. The C# port is line-for-line. Same operand grouping. Same conditions. Same order.

3. A Monte Carlo validator runs 1,000 seeded fights through both implementations and asserts <0.5% divergence on event count, final HP per actor, and ailment fire ordering. PRs that drift past that don't merge.

Now the studio and the engine iterate independently. A designer changes a coefficient in TypeScript; the validator confirms the C# build still agrees; the change ships.

Bonus: the same headless sim is exposed via MCP so Claude can run "what if this skill cost 20% less" in one command and validate parity automatically.

This is the kind of plumbing nobody asks for and everybody benefits from. The hardest bugs in live-service games are the ones where the math drifts silently. A validator that fails loudly beats a player who notices quietly.

What's the equivalent in your stack? The thing that's never going to be in a JIRA ticket but keeps you out of a Saturday-night fire?
