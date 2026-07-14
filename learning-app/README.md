# Learning App — Probability & Statistics

A small full-stack app that turns the Markdown course in [`../theory`](../theory) into an
interactive website. **React (Vite)** front end, **Express** back end, data stored in a
single generated **`course.json`**. Built to deploy as **one web service on Render**.

---

## Architecture at a glance

```
learning-app/
├── package.json            ← root scripts (build / start / data) + express dep
├── render.yaml             ← Render blueprint (one web service, both tiers)
├── server/
│   ├── index.js            ← Express: JSON API + serves the built React app
│   └── data/
│       ├── generate.mjs    ← reads ../../../theory/*.md → course.json
│       └── course.json     ← the data store the API reads (generated)
└── client/                 ← React + Vite front end
    ├── vite.config.js      ← dev proxy /api → :3001
    └── src/
        ├── App.jsx         ← layout, hash routing, theme + progress
        └── components/     ← Sidebar, TopicView, Section, Question, Markdown
```

**The data pipeline:** the Markdown in `theory/` is the single source of truth.
`npm run data` parses it into `course.json`. The Express API serves that file; the
React app fetches it. To add or edit content, edit the Markdown and re-run `npm run data`.

**API**
| Route | Returns |
|-------|---------|
| `GET /api/course` | navigation tree — modules + topic headers |
| `GET /api/topics/:id` | one full topic (sections + questions) with prev/next |
| `GET /api/health` | `{ ok: true }` |

---

## Run it locally

Two terminals (Express on `:3001`, Vite dev server on `:5173` with hot reload):

```bash
cd learning-app
npm install            # installs express (root)
npm run data           # (re)generate course.json from the theory Markdown

# terminal 1 — API
npm run server

# terminal 2 — client with hot reload
npm run client         # open http://localhost:5173
```

### Or run it exactly like production (single process)

```bash
cd learning-app
npm install
npm run build          # installs client deps + builds client/dist
npm start              # Express serves API *and* the built app on :3001
# open http://localhost:3001
```

---

## Deploy to Render (one service, both tiers together)

The Express server serves the API **and** the built React files, so it's a single
**Web Service** — no separate static site needed.

**Option A — Blueprint (uses `render.yaml`):** New → Blueprint → pick this repo.

**Option B — Manual Web Service:**
| Setting | Value |
|---------|-------|
| Root Directory | `learning-app` |
| Runtime | Node |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |
| Environment | `NODE_VERSION = 22.17.0` |

Render provides `PORT` automatically; the server reads `process.env.PORT`. `course.json`
is committed, so deployment does not depend on the `theory/` folder being present.

---

## Adding the next module

1. Write the Markdown under `theory/NN-name/` (topics `01-…md`, `problems.md`), following the
   existing 7-section learning-loop headers so the parser picks them up.
2. Add the module's metadata to the `MODULES` array in `server/data/generate.mjs`.
3. `npm run data` → rebuild → the new module appears in the sidebar automatically.
