/**
 * Data generator: reads the Markdown course files in /theory and emits a single
 * structured course.json that the Express API serves and the React app consumes.
 *
 * The theory Markdown files are the SINGLE SOURCE OF TRUTH. Re-run this whenever
 * the theory content changes:   npm run data
 *
 * Why a generator instead of hand-writing JSON? The lessons contain code fences,
 * LaTeX (backslashes), tables and quotes — all painful to escape by hand. Reading
 * the raw files and JSON.stringify-ing guarantees valid, in-sync data.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const THEORY_DIR = path.resolve(__dirname, "../../../theory");
// App-only content lives here (not in /theory). Same markdown format, parsed the
// same way — so app-authored modules stay in sync and survive regeneration.
const APP_DIR = path.resolve(__dirname, "app-content");
const OUT_FILE = path.resolve(__dirname, "course.json");

// ---- helpers ---------------------------------------------------------------

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const DIFFICULTY = { "🟢": "warm-up", "🟡": "core", "🔴": "stretch" };

// The section's leading emoji is the stable "kind" that drives its accent color
// in the UI. This lets each topic use its own custom heading text while keeping
// the color-coded learning rhythm consistent. Variation selectors are stripped.
const EMOJI_KIND = {
  "🎣": "hook",
  "💡": "intuition",
  "📐": "formalism",
  "🎯": "ds-payoff",
  "⚠": "pitfalls",
  "🔁": "recall",
};

/** Split one topic Markdown file into {number, title, sections[]}. */
function parseTopic(md) {
  // H1:  "# 00.1 — What Is Probability, Really?"
  const h1 = md.match(/^#\s+(.+)$/m)[1].trim();
  const [numberRaw, ...titleParts] = h1.split("—");
  const number = numberRaw.trim();
  const title = titleParts.join("—").trim();

  // Section headers:  "## 1. 🎣 The coin already landed"
  const headerRe = /^##\s+\d+\.\s+(.+)$/gm;
  const marks = [...md.matchAll(headerRe)];
  const sections = [];

  marks.forEach((m, i) => {
    const heading = m[1].trim();
    const [icon, ...rest] = heading.split(/\s+/);
    const secTitle = rest.join(" ").trim();
    const kind = EMOJI_KIND[icon.replace(/️/g, "")] || slug(secTitle);

    const start = m.index + m[0].length;
    const end = i + 1 < marks.length ? marks[i + 1].index : md.length;
    let body = md.slice(start, end).trim();

    // strip the trailing "*Next → ...*" nav and any separating horizontal rule
    body = body
      .replace(/\n+\*Next[\s\S]*$/i, "")
      .replace(/\n+---\s*$/, "")
      .trim();

    // `id` is the color kind; `title` is the topic-specific display heading
    sections.push({ id: kind, icon, title: secTitle, body });
  });

  return { number, title, sections };
}

/** Parse problems.md into questions grouped by Part letter (A→topic1, B→topic2...). */
function parseQuestions(md) {
  const re =
    /\*\*([A-Z])(\d+)\*\*\s+(🟢|🟡|🔴)\s+([\s\S]*?)\n\n<details><summary>Solution<\/summary>\n\n([\s\S]*?)<\/details>/g;
  const byPart = {};
  let m;
  while ((m = re.exec(md)) !== null) {
    const [, part, num, emoji, prompt, solution] = m;
    (byPart[part] ??= []).push({
      id: `${part}${num}`,
      difficulty: DIFFICULTY[emoji],
      prompt: prompt.trim(),
      solution: solution.trim(),
    });
  }
  return byPart;
}

// ---- per-module config (metadata not easily derived from the files) --------

const ONE_LINERS = {
  "what-is-probability":
    "A probability is a number in [0, 1] that measures uncertainty — and there are two legitimate ways to read it.",
  "language-of-sets-and-events":
    "Every probability question is secretly a question about sets: outcomes, events, unions, and intersections.",
  "axioms-and-rules":
    "All of probability is derived from just three simple rules Kolmogorov wrote down in 1933.",
  "reading-chance-in-the-real-world":
    "Probabilities, odds, percentages, and natural frequencies are four dialects of the same idea — and one of them makes hard problems easy.",
  "counting-and-combinatorics":
    "When outcomes are equally likely, probability is just counting — and counting has shortcuts.",
  "conditional-probability":
    "New information shrinks your universe — conditioning is recomputing probability inside the survivors.",
  "independence":
    "Independence means knowing one thing tells you nothing about the other — and it's rarer than it looks.",
  "bayes-theorem":
    "The crown jewel: turn P(evidence | cause) into the thing you actually want — P(cause | evidence).",
  "random-variables":
    "A random variable turns outcomes into numbers, so uncertainty becomes something you can compute with.",
  "bernoulli-and-binomial":
    "One yes/no trial is a Bernoulli; count the yeses over many independent trials and you get the Binomial.",
  "poisson-distribution":
    "When events are rare but you watch a lot, their counts follow a Poisson — governed by a single rate.",
  "continuous-distributions":
    "When outcomes vary smoothly, probability becomes area under a curve — the density — not height on a bar.",
  "normal-distribution":
    "The bell curve: the shape that sums and averages settle into, described entirely by a mean and a spread.",
};

const MODULES = [
  {
    id: "00-foundations",
    number: "00",
    phase: "Phase I — The Language of Uncertainty",
    title: "Foundations: The Language of Uncertainty",
    summary:
      "The mindset shift from certainties to graded belief, the vocabulary of sets and events, the three axioms everything is built on, and the simulation workflow you'll use for the rest of the course.",
    dir: "00-foundations",
    partToTopic: ["A", "B", "C", "D"], // question Part letter per topic, in order
  },
  {
    id: "01-probability-core",
    number: "01",
    phase: "Phase I — The Language of Uncertainty",
    title: "Probability Core: Conditioning, Bayes & Random Variables",
    summary:
      "How to count outcomes, how new information changes probabilities (conditioning), what independence really means, Bayes' theorem — the crown jewel — and the bridge to everything that follows: the random variable.",
    dir: "01-probability-core",
    partToTopic: ["A", "B", "C", "D", "E"],
  },
  {
    id: "02-distributions",
    number: "02",
    phase: "Phase II — Shapes of Randomness",
    title: "Distributions: The Shapes of Randomness",
    summary:
      "The handful of distributions that describe almost everything — Bernoulli & Binomial for counts of successes, Poisson for rare events, the leap to continuous densities, and the Normal bell curve that sums and averages fall into.",
    root: APP_DIR, // app-authored content, not in /theory
    dir: "02-distributions",
    partToTopic: ["A", "B", "C", "D"],
  },
];

// ---- build -----------------------------------------------------------------

function build() {
  const modules = MODULES.map((mod) => {
    const dir = path.join(mod.root || THEORY_DIR, mod.dir);
    const topicFiles = fs
      .readdirSync(dir)
      .filter((f) => /^\d\d-.+\.md$/.test(f))
      .sort();

    const questions = parseQuestions(
      fs.readFileSync(path.join(dir, "problems.md"), "utf-8")
    );

    const topics = topicFiles.map((file, idx) => {
      const parsed = parseTopic(fs.readFileSync(path.join(dir, file), "utf-8"));
      const id = file.replace(/^\d\d-/, "").replace(/\.md$/, "");
      const partLetter = mod.partToTopic[idx];
      return {
        id,
        number: parsed.number,
        title: parsed.title,
        oneLiner: ONE_LINERS[id] || "",
        sections: parsed.sections,
        questions: questions[partLetter] || [],
      };
    });

    return {
      id: mod.id,
      number: mod.number,
      phase: mod.phase,
      title: mod.title,
      summary: mod.summary,
      topics,
    };
  });

  const course = {
    title: "Probability & Statistics",
    tagline: "Built for intuition. Aimed at data science.",
    generatedAt: new Date().toISOString(),
    modules,
  };

  fs.writeFileSync(OUT_FILE, JSON.stringify(course, null, 2));
  const topicCount = modules.reduce((n, m) => n + m.topics.length, 0);
  const qCount = modules.reduce(
    (n, m) => n + m.topics.reduce((k, t) => k + t.questions.length, 0),
    0
  );
  console.log(
    `✓ Wrote ${OUT_FILE}\n  ${modules.length} module(s), ${topicCount} topic(s), ${qCount} question(s).`
  );
}

build();
