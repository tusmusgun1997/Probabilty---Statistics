# Probability & Statistics — Built for Intuition, Aimed at Data Science

> A structured, intuition-first course that turns probability from a set of formulas you *memorize* into a set of ideas you *see*. Every concept is anchored to a data-science payoff so the math never feels abstract.

---

## 0. Why this repo exists

Most probability courses fail in the same way: they hand you a formula, prove it, and move on. You pass the exam and forget it in three weeks because nothing ever *clicked* — you never built a mental picture you could reach for later.

This repo is the opposite. The organizing rule is:

> **You don't understand a probability concept until you can (a) explain it to a friend with a picture, (b) work a concrete example by hand, and (c) point to where it shows up in a real ML/DS workflow.**

If a topic can't pass those three tests, we haven't finished it.

---

## 1. The learning philosophy (the 5 principles)

| # | Principle | What it means in practice |
|---|-----------|---------------------------|
| 1 | **Intuition before formalism** | We meet every idea first as a *story* or *picture* (coin flips, dart boards, waiting for a bus). The equation is introduced only to make the intuition precise — never as the starting point. |
| 2 | **See it in a concrete example** | Before (or alongside) any abstract rule, we pin it to numbers you can follow by hand — a deck of cards, 1,000 people, a die. A worked example you can verify yourself beats a formula you take on faith. |
| 3 | **Every concept earns its place** | Each topic ends with a **"Why a data scientist cares"** note. Bayes → spam filters & A/B tests. Entropy → decision trees & loss functions. If we can't name the payoff, we cut it. |
| 4 | **Active recall over passive reading** | Notes are written as questions you answer, not paragraphs you highlight. Each module ships with problems and an "explain it back" prompt. You learn by *retrieving*, not re-reading. |
| 5 | **Spiral, don't sprint** | We revisit core ideas (expectation, independence, distributions) at increasing depth across modules instead of "finishing" them once. Repetition at spacing is what makes it stick. |

---

## 2. The learning loop (every topic follows this)

Each topic file is built from the same repeating skeleton. This consistency is deliberate — once your brain knows the rhythm, it can focus on the *content*. (Each stage carries a topic-specific heading, but the underlying roles are always these six.)

```
┌─────────────────────────────────────────────────────────────┐
│  1. HOOK          A question or paradox you can't answer yet │
│  2. INTUITION     The picture / story. No heavy notation.    │
│  3. FORMALISM     The definition & formula, now that you     │
│                   already "get it" — with a worked example   │
│  4. DS PAYOFF     Where this shows up in ML / data science   │
│  5. PITFALLS      The classic mistakes & misreadings         │
│  6. RECALL        3–5 questions + 1 "explain it back" prompt │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Repository structure

```
Probability & Statistics/
│
├── theory/                     ← the course content (you are here)
│   ├── README.md               ← the map + method
│   ├── 00-foundations/         ← mindset, notation, the language of uncertainty
│   ├── 01-probability-core/    ← counting → Bayes → random variables
│   ├── 02-distributions/       ← the "distribution zoo" and when each appears
│   ├── 03-expectation-variance/← moments, the tools you'll use every day
│   ├── 04-joint-and-dependence/← covariance, correlation, independence
│   ├── 05-limit-theorems/      ← LLN & CLT — the reason statistics works
│   ├── 06-inference/           ← estimation, MLE/MAP, confidence intervals
│   ├── 07-hypothesis-testing/  ← p-values, A/B tests, errors, power
│   ├── 08-bayesian/            ← priors, posteriors, Bayesian thinking
│   └── 09-ds-special-topics/   ← entropy, KL, Markov chains, sampling ideas
│
└── learning-app/               ← the interactive website (renders this content)
```

Each numbered module folder contains:
- `README.md` — the module's roadmap and "why it matters"
- one file per topic (following the learning loop above)
- a `cheatsheet.md` — the module compressed to one page
- a `problems.md` — practice with worked solutions

---

## 4. The curriculum map

We move in **phases**. Each phase is a plateau — you should feel a distinct jump in capability at the end of each one. The rule: **you don't advance until you can pass the 3-test check** (explain + work an example + apply).

### Phase I — The Language of Uncertainty (`00`, `01`)
*Goal: stop thinking in certainties. Learn to reason about what you don't know.*

- **00 Foundations** — What probability *is* (frequentist vs. Bayesian views), set notation, the three axioms, and reading chance in its everyday forms (odds, percentages, natural frequencies).
- **01 Probability Core** — Counting/combinatorics · conditional probability · independence · **Bayes' theorem** (the crown jewel) · random variables.
- 🎯 *DS payoff:* Bayes powers spam filters, medical-test reasoning, and the "base rate" mistakes that trip up every junior analyst.

### Phase II — The Shapes of Randomness (`02`, `03`)
*Goal: recognize the handful of distributions that describe almost everything, and compute with them.*

- **02 Distributions** — Bernoulli, Binomial, Poisson, Uniform, Exponential, **Normal**, and friends. *When does each one show up in nature and in data?*
- **03 Expectation & Variance** — The mean as a "center of mass," variance as "spread," moments, and the algebra of expectations you'll use daily.
- 🎯 *DS payoff:* Choosing the right likelihood for a model, understanding noise, feature scaling, and why the Normal is everywhere (spoiler: the CLT).

### Phase III — When Variables Interact (`04`, `05`)
*Goal: move from one random quantity to many — the world of real datasets.*

- **04 Joint Distributions & Dependence** — Covariance, correlation (and why correlation ≠ causation ≠ dependence), independence, conditional expectation.
- **05 Limit Theorems** — **Law of Large Numbers** and the **Central Limit Theorem** — *the two theorems that make all of statistics possible.*
- 🎯 *DS payoff:* Correlation is the beating heart of feature selection; the CLT is why your sample means, confidence intervals, and standard errors mean anything at all.

### Phase IV — Learning From Data (`06`, `07`, `08`)
*Goal: reverse the arrow — go from observed data back to the process that generated it. This is inference, and it's the core of statistics and ML.*

- **06 Inference & Estimation** — Estimators, bias/variance, **Maximum Likelihood (MLE)** and MAP, confidence intervals.
- **07 Hypothesis Testing** — p-values (what they *actually* mean), Type I/II errors, statistical power, and **A/B testing** end-to-end.
- **08 Bayesian Inference** — Priors, likelihoods, posteriors, and thinking in updates rather than verdicts.
- 🎯 *DS payoff:* MLE is literally how most ML models are trained. A/B testing is the daily bread of product data science. Bayesian thinking underlies modern ML and honest uncertainty.

### Phase V — The Data-Science Frontier (`09`)
*Goal: the probability ideas that live specifically inside machine learning.*

- **Information theory** — entropy, cross-entropy, **KL divergence** (the loss functions of classification).
- **Markov chains** — sequences, states, and the math behind PageRank, RL, and language models.
- **Sampling ideas** — how intractable probabilities get estimated by drawing samples instead of solving integrals.
- 🎯 *DS payoff:* Cross-entropy is *the* classification loss. KL divergence shows up in VAEs, RLHF, and model distillation.

---

## 5. How to actually use this repo

**Cadence:** One topic per session, not one module. Depth beats speed. A topic done properly (read → work the examples → do the problems → explain it back) is a real hour or two.

**The non-negotiable ritual for each topic:**
1. Read the intuition section *before* looking at any formula.
2. **Work the examples yourself**, on paper, predicting each answer before you check it — the gap between your guess and the truth is where learning happens.
3. Do the recall questions *from memory*, closed-book.
4. Write the "explain it back" answer in your own words. If you can't, you're not done.

**Weekly:** Revisit the previous module's `cheatsheet.md`. Spiral learning only works if you actually spiral.

---

## 6. Definition of "done" for any topic

A topic is complete only when you can honestly check all three:

- [ ] **Explain** it to a non-expert using a picture or story — no formulas.
- [ ] **Work** a concrete example by hand and predict the answer before checking.
- [ ] **Apply** it — name a concrete data-science situation where it decides something.

If any box is unchecked, the topic isn't finished. That standard, applied consistently, is the whole method.

---

## 7. Progress tracker

| Phase | Module | Status |
|-------|--------|:------:|
| I | 00 — Foundations | ⬜ |
| I | 01 — Probability Core | ⬜ |
| II | 02 — Distributions | ⬜ |
| II | 03 — Expectation & Variance | ⬜ |
| III | 04 — Joint & Dependence | ⬜ |
| III | 05 — Limit Theorems | ⬜ |
| IV | 06 — Inference & Estimation | ⬜ |
| IV | 07 — Hypothesis Testing | ⬜ |
| IV | 08 — Bayesian Inference | ⬜ |
| V | 09 — DS Special Topics | ⬜ |

*(⬜ not started · 🟡 in progress · ✅ passed the 3-test check)*

---

*Start with `00-foundations/` — the mindset shift — then work through Phase I one topic at a time.*
