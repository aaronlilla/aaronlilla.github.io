# Tailoring the resume per application

`scripts/resume-data.mjs` is the single source of truth. Don't hand-edit the
generated files (`public/resume.html`, `public/Aaron_Lilla_Resume.pdf`,
`public/Aaron_Lilla_Resume.docx`, `public/resume.txt`, `RESUME.md`) — edit the
source, then run `npm run resume`.

## Default positioning

The canonical resume leads with core front-end seniority (Skills order:
Frontend → Backend & Real-time → AI & LLM Development → ...), on the theory
that a generalist front-end/full-stack screener sees "senior production
engineer who's also deep in AI" before anything else. This is the right
default for generalist full-stack / front-end postings.

## Flip for AI-forward employers

For roles at AI-native or AI-product companies (postings that foreground
LLMs, agents, ML infra, applied AI, etc.), do this before submitting:

1. **Reorder Skills** — move `AI & LLM Development` from position 3 to
   position 1 in the `skills` array. Everything else stays the same.
2. **Reorder the Summary** — lead with the AI/LLM-training sentence instead
   of the PokerAtlas sentence, if the posting is squarely an AI/ML role
   rather than a front-end role that happens to touch AI.
3. **Consider surfacing the Discord AI Chatbot project higher** in the
   Projects list (currently 2nd) — it's the one concrete example of a
   real Claude-API integration shipped to end users, distinct from
   Mercor/DataAnnotation (contract AI-training work) and Claude Code
   (agentic tooling for internal dev work). If an AI-hiring-manager-style
   reviewer is going to ask "have you actually shipped an LLM feature to
   real users," this project is the answer — don't let it get buried.

## What NOT to do per-posting

- Don't invent metrics, tools, or claims that aren't in the canonical
  source, even to match a job description's keywords exactly. See the
  file header of `resume-data.mjs`.
- Don't merge/collapse the Dockyard (Nolve / Spire of Ash) or Mercor /
  DataAnnotation entries as a "quick fix" for a specific application
  without deciding it deliberately — see the open question in the repo
  history about whether to permanently merge these (recruiter-skim
  feedback: two adjacent "Founder, Dockyard" entries and two adjacent
  AI-training-gig entries can read as padding to a skimming recruiter;
  the current resume keeps them separate to preserve full factual detail
  and employment continuity). If you decide to merge for a specific
  high-value application, do it as a one-off tailored copy, not a
  permanent change to the canonical source, until the decision is final.

## Format checklist before submitting

- Prefer DOCX unless the posting explicitly asks for PDF.
- If PDF is required, use `public/Aaron_Lilla_Resume.pdf` (a real,
  text-based export) — never a scanned/flattened image PDF.
- Use `public/resume.txt` only for "paste your resume" web-form fields,
  never as the uploaded file itself.
