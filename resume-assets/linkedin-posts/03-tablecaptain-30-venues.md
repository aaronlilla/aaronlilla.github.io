**Topic:** Six years leading TableCaptain front-end at 30+ venues
**Audience:** Hiring managers, full-stack ICs, anyone shipping real-time
**Screenshot prompt:** A photo of one of the in-venue TV displays, or a screen recording of the Floor Editor in action. (You have these on your portfolio — link the page.)
**Optimal post day:** Tuesday morning Pacific

---

Six years on TableCaptain at PokerAtlas. React + Electron. 30+ poker rooms across the U.S. and Asia. 15+ in-venue TV screens per venue staying sub-second in sync with the back-office desktop and staff tablets.

A few things I learned about real-time at production scale:

1. Optimistic UI is non-negotiable. Floor managers tap "seat this player at table 12" and they want the state to flip *now*. The server confirms a beat later. If your UI waits for the server, your users hate you.

2. Auto-update has to be staged. A casino doesn't tolerate a black-screen display mid-tournament. We rolled out bi-weekly releases by venue tier, with rollback in under 10 minutes if anything regressed.

3. Network conditions vary. Wired in some rooms. Wi-Fi behind the bar in others. Reconnection logic with exponential backoff and replay-from-last-known-version is the difference between "always synced" and "support ticket."

4. The kiosk display app is the *same* Electron bundle as the back-office. Same Redux state shape. Same reducers. Different chrome. A bug in one is a bug in zero or in all — never in one.

5. The hardest bugs aren't in the code. They're in the assumptions about the venue. Power flickers. Routers reboot. A dealer unplugs the wrong cable. Engineer for those.

Result: TableCaptain V2 became the #1 poker room management system by adoption in 2024.

I recorded walkthroughs of Floor Editor, Table Manager, Waitlist, the in-venue TV display, and the Auto Updater — link in profile / aaronlilla.github.io.

What's the single design decision that saved you the most pain on a real-time system you've built?
