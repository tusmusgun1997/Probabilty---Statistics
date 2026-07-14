/**
 * Express server for the Probability & Statistics learning app.
 *
 * Serves two things from ONE process (so it deploys as a single Render web service):
 *   1. A small JSON API under /api/*  (reads server/data/course.json)
 *   2. The built React app from client/dist  (static files + SPA fallback)
 *
 * Local dev runs this on :3001 while Vite runs the client on :5173 and proxies
 * /api here (see client/vite.config.js). In production Vite is not running — the
 * server serves the pre-built client/dist itself.
 */
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

const DATA_FILE = path.join(__dirname, "data", "course.json");

// Load once at boot; small file, no need to re-read per request.
let course;
try {
  course = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
} catch (err) {
  console.error(
    `\n[fatal] Could not read ${DATA_FILE}\n` +
      `Run "npm run data" to generate it from the theory Markdown files.\n`
  );
  throw err;
}

// --- API --------------------------------------------------------------------

// Navigation tree: modules + topic headers (no heavy section bodies).
app.get("/api/course", (_req, res) => {
  res.json({
    title: course.title,
    tagline: course.tagline,
    modules: course.modules.map((m) => ({
      id: m.id,
      number: m.number,
      phase: m.phase,
      title: m.title,
      summary: m.summary,
      topics: m.topics.map((t) => ({
        id: t.id,
        number: t.number,
        title: t.title,
        oneLiner: t.oneLiner,
        sectionCount: t.sections.length,
        questionCount: t.questions.length,
      })),
    })),
  });
});

// One full topic: sections + questions, plus its module + prev/next for flow.
app.get("/api/topics/:topicId", (req, res) => {
  const flat = [];
  course.modules.forEach((m) =>
    m.topics.forEach((t) => flat.push({ moduleId: m.id, topic: t }))
  );
  const idx = flat.findIndex((x) => x.topic.id === req.params.topicId);
  if (idx === -1) return res.status(404).json({ error: "Topic not found" });

  const module = course.modules.find((m) => m.id === flat[idx].moduleId);
  const neighbor = (i) =>
    i >= 0 && i < flat.length
      ? { id: flat[i].topic.id, number: flat[i].topic.number, title: flat[i].topic.title }
      : null;

  res.json({
    module: { id: module.id, number: module.number, title: module.title },
    topic: flat[idx].topic,
    prev: neighbor(idx - 1),
    next: neighbor(idx + 1),
  });
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));

// --- Static client (production) ---------------------------------------------

const CLIENT_DIST = path.join(__dirname, "..", "client", "dist");
if (fs.existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST));
  // SPA fallback: any non-API GET returns index.html so client routing works.
  app.get(/^\/(?!api\/).*/, (_req, res) =>
    res.sendFile(path.join(CLIENT_DIST, "index.html"))
  );
} else {
  console.log(
    "[info] client/dist not found — API-only mode. Run `npm run build` for the full site."
  );
}

app.listen(PORT, () => {
  console.log(`✓ Server listening on http://localhost:${PORT}`);
});
