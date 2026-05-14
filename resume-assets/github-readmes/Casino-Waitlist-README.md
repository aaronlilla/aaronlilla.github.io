# Casino-Waitlist — Component Snippet

> A waitlist component pattern from the production TableCaptain V2 codebase, shared with permission. Full product is proprietary to **PokerAtlas**.

This is the public-facing pattern for managing a casino's poker-room waitlist — the data model, the real-time sync envelope, and the optimistic UI flow used by floor managers to add, modify, and remove players.

## Why this is interesting

A poker-room waitlist is one of the trickiest real-time UIs to ship:

- **Floor managers tap actions and expect instant feedback.** Optimistic UI is non-negotiable.
- **The waitlist also displays on player-facing in-venue TVs** — same state must converge across the back-office desktop AND the kiosk TVs without staff thinking about sync.
- **Network conditions vary by venue.** Some rooms are wired; some run off Wi-Fi behind the bar. Reconnection with replay-from-last-known-version is the difference between "always synced" and "support ticket."

## Production scale

TableCaptain V2 runs this waitlist pattern in **30+ poker rooms** across the U.S. and Asia, with **15+ in-venue displays per venue** subscribing to the same WebSocket fabric.

Live in 2024 as the **#1 poker room management system by adoption** (per company assessment).

## Stack

- React + Redux client
- WebSocket envelope to a .NET backend
- Electron shell for both back-office and TV display apps (same state shape, different chrome)

## See it in production

Video walkthrough of the Waitlist (and the Waitlist Display TV app):

→ **<https://aaronlilla.github.io/#work>**

## Author

[Aaron Lilla](https://aaronlilla.github.io) — full-stack engineer. Led front-end on TableCaptain V2 at PokerAtlas (2019–2025).

[Résumé](https://aaronlilla.github.io/resume.html) · [LinkedIn](https://www.linkedin.com/in/aaronlilla) · [Email](mailto:aaronjlilla@gmail.com)
