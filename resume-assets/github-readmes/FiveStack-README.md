# FiveStack

**Mythic+ team-building platform with AI-assisted matchmaking and Raider.io integration.**

Build consistent World of Warcraft Mythic+ teams, climb the rankings, and conquer the highest keys with intelligent teammate matching.

---

## What it does

Mythic+ is the endgame for many WoW players, and finding a consistent group is the hardest part of pushing keys. FiveStack pulls live data from the [Raider.io API](https://raider.io/api) — score, role coverage, run history, key levels timed — and uses it to suggest balanced groups from a player pool you control.

- **Profile import** — paste a Raider.io URL or character name; FiveStack pulls live stats.
- **Pool management** — maintain a roster of players you run with, with their preferred specs and roles.
- **AI-assisted matchmaking** — suggests 5-person comps balanced on role coverage, average score, and run experience.
- **Live Raider.io integration** — scores and run history stay fresh between sessions.

## Stack

- **Frontend:** React, JavaScript
- **Backend:** Node.js
- **Data:** Raider.io API
- **Auth:** *(if applicable — Battle.net OAuth?)*

## Status

Active development. Not yet shipped.

## Running locally

```bash
npm install
npm run dev
```

Set `RAIDER_IO_API_KEY` in `.env` (if needed — Raider.io's public read endpoints don't require auth as of writing).

## Author

[Aaron Lilla](https://aaronlilla.github.io) — full-stack engineer. More projects at [github.com/aaronlilla](https://github.com/aaronlilla).
