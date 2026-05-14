# TableCaptain2 — Code Snippets

> Selected snippets from the production TableCaptain V2 codebase, shared with permission. The full product is proprietary to **PokerAtlas**.

TableCaptain V2 is a React + Electron poker-room management platform deployed in **30+ poker rooms** across the U.S. and Asia. It orchestrates **450+ concurrent in-venue displays** (15+ per venue × 30+ venues) over a single WebSocket fabric with sub-second update latency.

This repo contains a small, illustrative subset of the patterns I used in production — enough to show the engineering approach without exposing IP.

## What's in here

- Component-level patterns for the real-time HUD: optimistic UI with server-confirmed reconciliation.
- Redux state shape for synchronized multi-screen state (kiosk display app shares state shape with back-office desktop).
- WebSocket envelope examples — typed event schemas that survived 6 years of production without restructuring.

## Stack (production)

- **Client:** React, Redux, Electron (Webpack bundle)
- **Realtime:** Long-lived WebSocket to a .NET backend; replay-from-version on reconnect with exponential backoff
- **Deploy:** Custom Electron auto-updater with staged rollout + rollback; bi-weekly releases, hotfixes deployable in under 10 minutes

## Where to see the product

I recorded narrated walkthroughs of each major surface — Floor Editor, Table Manager, Waitlist, in-venue TV Display, Employee Manager, Auto Updater — on the live site:

→ **<https://aaronlilla.github.io/#work>**

## Author

[Aaron Lilla](https://aaronlilla.github.io) — full-stack engineer. Led TableCaptain V2 at PokerAtlas (2019–2025). Now founding [Afterimage Studio](https://aaronlilla.github.io).

[Résumé](https://aaronlilla.github.io/resume.html) · [LinkedIn](https://www.linkedin.com/in/aaronlilla) · [Email](mailto:aaronjlilla@gmail.com)
