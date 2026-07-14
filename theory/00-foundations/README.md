# Module 00 — Foundations: The Language of Uncertainty

> **Phase I · Module 0 of 9**
> Before we can *do* probability, we have to *think* in it. This module is the mindset shift — from a world of "yes/no" certainties to a world of graded belief — plus the vocabulary and the fluency everything else is built on.

---

## Why this module matters

You cannot build a house on sand. Every later module — distributions, Bayes, the CLT, MLE, cross-entropy — silently assumes three things:

1. You know **what a probability actually is** (and it's subtler than "chance").
2. You can speak the **language of sets and events** fluently.
3. You can **translate a chance between its many everyday forms** — percentages, odds, "1 in 20" — and reason with the form that makes a problem easy.

Most people skip this module and pay for it later, when Bayes' theorem feels like magic and p-values feel like witchcraft. We're not going to skip it. It's short, but it's the load-bearing wall.

> 🎯 **The data-science payoff of this whole module:** every ML model that outputs a "probability" (a spam score, a fraud score, a recommendation score) is making a claim you need to be able to interpret correctly. This module is what lets you read those numbers honestly instead of superstitiously.

---

## What you'll be able to do at the end

- [ ] Explain the difference between the **frequentist** and **Bayesian** views of probability — and why both are useful.
- [ ] Translate an English statement ("at least one of A or B happens") into **set notation** and back.
- [ ] State the **three axioms** that all of probability is built from, and derive the everyday rules from them.
- [ ] Move a single chance fluidly between **probability, percentage, odds, and natural frequency** — and know which form makes a hard problem easy.

---

## Topics in this module (do them in order)

| # | Topic | The one-sentence idea |
|---|-------|-----------------------|
| 1 | [What Is Probability, Really?](01-what-is-probability.md) | A probability is a number in [0, 1] that measures uncertainty — and there are two legitimate ways to read it. |
| 2 | [The Language of Sets & Events](02-language-of-sets-and-events.md) | Every probability question is secretly a question about sets: outcomes, events, unions, and intersections. |
| 3 | [The Three Axioms & the Rules They Give You](03-axioms-and-rules.md) | All of probability is derived from just three simple rules Kolmogorov wrote down in 1933. |
| 4 | [Reading Chance in the Real World](04-reading-chance-in-the-real-world.md) | Probabilities, odds, percentages, and natural frequencies are four dialects of one idea — and one of them makes hard problems easy. |

Then consolidate with:
- 📄 [cheatsheet.md](cheatsheet.md) — the whole module compressed to one page.
- ✏️ [problems.md](problems.md) — practice with worked solutions.

---

## How to work through it

Follow the ritual from the main [README](../README.md):

1. Read the **intuition** before you look at any formula.
2. **Work every example by hand.** Predict the answer before you check it — the gap between your guess and the truth is where learning lives.
3. Do the recall questions **closed-book**.
4. Write the "explain it back" answer in your own words.

Don't move to Module 01 until you can check all three boxes on the [3-test check](../README.md#6-definition-of-done-for-any-topic) for each topic here.

---

*Next module → `01-probability-core/` (conditional probability & Bayes — the crown jewel).*
