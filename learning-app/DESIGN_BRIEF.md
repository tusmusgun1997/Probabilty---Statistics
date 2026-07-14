# Design Brief — "Probability & Statistics" Learning Web App

## What it is (one-liner)
A self-paced, interactive course website that teaches probability & statistics for a data-science career — **intuition-first, simulation-driven** — where every topic is a structured lesson followed by practice questions with hidden solutions.

## Audience & vibe
- Learner: an aspiring/working **data scientist** studying solo, likely in long focused sessions.
- The brand promise: *"Built for intuition. Aimed at data science."* Not a monotonous classroom — concepts should feel visual, motivating, and sticky.
- Must feel **modern and premium** (think Linear, Notion, Duolingo, Brilliant.org quality), not like a university LMS.

## The core screen (90% of usage): the Topic page
A three-zone layout:

1. **Top bar** — logo/brand ("∑ Probability & Statistics"), breadcrumb (Module / Topic), search, dark-light theme toggle.
2. **Left sidebar (course navigation)** — hierarchical: *Phase → Module → Topics*.
   - Each module shows a **progress indicator** (e.g. 1/4 topics complete).
   - Each topic row has a completion checkmark, its number (00.1, 00.2…), and title.
   - Future modules are visible but locked/dimmed.
3. **Main content column** — the lesson itself:
   - **Topic header:** module chip ("Module 00 · Topic 1"), big title ("What Is Probability, Really?"), a one-line hook-summary, meta chips (est. time, 7 sections, 3 exercises), a "Mark complete" action.
   - **Two primary tabs (the app's two main components):**
     - **Learn** — the lesson content.
     - **Questions / Practice** — the related exercises.

### The Learn tab — "the learning loop"
Every lesson has the **same 7 sections in the same order**, and each has its own identity/accent color. This rhythm is a core design feature — make the stages visually distinct and recognizable:

| # | Section | Icon | Feel |
|---|---------|------|------|
| 1 | Hook | 🎣 | a teaser question/paradox — should feel intriguing |
| 2 | Intuition | 💡 | pictures & stories, warm |
| 3 | Formalism | 📐 | definitions & formulas, precise |
| 4 | Simulate | 🖥️ | runnable Python code, "lab" feel |
| 5 | DS Payoff | 🎯 | why it matters for a data-science job |
| 6 | Pitfalls | ⚠️ | classic mistakes, cautionary |
| 7 | Recall | 🔁 | closed-book self-test questions |

Content inside sections includes: rich prose (bold/italic/emoji), **callout/blockquote boxes**, **LaTeX math** (inline and centered display equations), **Python code blocks with syntax highlighting** (dark editor style, copy button), and **tables**. A "section progress" affordance (stepper/rail/dots showing where you are in the 7 stages) is welcome.

### The Questions tab
- Intro note encouraging attempting before revealing.
- **Question cards**, each with:
  - difficulty badge — three tiers: 🟢 Warm-up, 🟡 Core, 🔴 Stretch (color-coded),
  - question id (A1, B2…), the prompt (may contain math/code),
  - a **"Reveal solution"** button — solution stays hidden until clicked (active-recall pedagogy),
  - revealed solution area with full formatting.

### Bottom of topic
Prev / Next topic navigation cards (with topic numbers + titles).

## Secondary screens (nice to include in concepts)
- **Course home / dashboard:** phase & module overview cards, overall progress, "continue where you left off" CTA.
- **Mobile layout:** sidebar collapses to a drawer; everything must work at phone width.

## Functional/UX requirements the design must accommodate
- Light **and** dark theme.
- Progress tracking (completed topics persist; progress bars in sidebar).
- Long-form reading comfort: ~65–75ch measure, generous line height.
- Code and math must not overflow — horizontal scroll containers.
- The 7-section color coding and the 3-tier difficulty coding are part of the system.
- Optional modern touches welcome: reading-progress bar, ⌘K search, streak/XP gamification, progress rings, keyboard hints, smooth section anchors.

## Current stack (for feasibility)
React + Vite SPA, Express API, content rendered from Markdown (KaTeX for math, highlight.js for code). Any design must be implementable with plain CSS — no heavy design-system dependency required.
