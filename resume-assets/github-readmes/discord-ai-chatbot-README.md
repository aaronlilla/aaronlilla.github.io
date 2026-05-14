# discord-ai-chatbot

**A Discord AI bot that streams responses in real time.** Built with Node.

---

## What it does

Most Discord AI bots show a typing indicator for ten seconds and then dump a wall of text. This one streams tokens into the message in real time — same UX as the underlying model in its own chat interface. No dead air, no "thinking…" message, just a response that types itself.

- **Token-by-token streaming** into a single Discord message via `editMessage` calls, with backoff and rate-limit handling.
- **Per-channel personality** — configure the system prompt per channel or per server.
- **Conversation memory** — bot remembers recent context within a channel.
- **Multiple model providers** — swap providers via env config.

## Stack

- **Runtime:** Node.js
- **Discord:** discord.js (v14)
- **LLM:** Claude API / OpenAI / configurable
- **Streaming:** SSE-based streaming with debounced message edits

## Setup

```bash
npm install

# .env
DISCORD_TOKEN=...
LLM_API_KEY=...
LLM_PROVIDER=anthropic   # or openai
LLM_MODEL=claude-opus-4-7

npm start
```

Add the bot to your Discord server with the OAuth URL printed on startup. Required intents: `MESSAGE_CONTENT`, `GUILDS`, `GUILD_MESSAGES`.

## Why I built it

Streaming responses are the difference between *feels like a tool* and *feels like a teammate*. The fixed-delay UX in most chatbots is a leak of the underlying request/response shape — this bot hides it.

## Author

[Aaron Lilla](https://aaronlilla.github.io) — full-stack engineer. Building [Holoscene](https://aaronlilla.github.io); previously shipped [Spire of Ash on Steam](https://store.steampowered.com/app/4450160/Spire_of_Ash/).
