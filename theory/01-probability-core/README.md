# Module 01 — Probability Core: Conditioning, Bayes & Random Variables

> **Phase I · Module 1 of 9**
> Module 00 gave you the language. This module gives you the *engine*: how to count outcomes, how new information changes probabilities, and the single most important formula in applied probability — Bayes' theorem. It ends by building the bridge to everything that follows: the random variable.

---

## Why this module matters

Almost every probability question a data scientist actually faces has the same shape: **"given what I just observed, what should I now believe?"**

- Given that the test is positive, how likely is the disease?
- Given that the user clicked twice, how likely are they to churn?
- Given the word "free", how likely is spam?

That is *conditional* probability, and its master tool is *Bayes' theorem*. This module builds that machinery from scratch — starting with counting (where probabilities come from when outcomes are equally likely) and ending with random variables (how outcomes become numbers you can compute with).

> 🎯 **The data-science payoff of this whole module:** every classifier you will ever train outputs conditional probabilities. Precision vs. recall, base-rate traps, Naive Bayes, the i.i.d. assumption — all of it is this module wearing work clothes.

---

## What you'll be able to do at the end

- [ ] Count arrangements and selections (permutations vs. combinations) without second-guessing which is which.
- [ ] Compute **P(A | B)** by shrinking the sample space on paper.
- [ ] Say precisely what **independence** means, and catch the classic confusion with mutual exclusivity.
- [ ] Run a **Bayes' theorem** update mentally using natural frequencies (the 1000-people picture).
- [ ] Define a **random variable** and derive a simple PMF by counting.

---

## Topics in this module (do them in order)

| # | Topic | The one-sentence idea |
|---|-------|-----------------------|
| 1 | [Counting & Combinatorics](01-counting-and-combinatorics.md) | When outcomes are equally likely, probability is just counting — and counting has shortcuts. |
| 2 | [Conditional Probability](02-conditional-probability.md) | New information shrinks your universe; conditioning is recomputing probability inside the survivors. |
| 3 | [Independence](03-independence.md) | Independence means knowing one thing tells you nothing about the other — and it's rarer than it looks. |
| 4 | [Bayes' Theorem](04-bayes-theorem.md) | The crown jewel: turn P(evidence \| cause) into the thing you actually want — P(cause \| evidence). |
| 5 | [Random Variables](05-random-variables.md) | Turn outcomes into numbers, so uncertainty becomes something you can compute with. |

Then consolidate with:
- 📄 [cheatsheet.md](cheatsheet.md) — the whole module compressed to one page.
- ✏️ [problems.md](problems.md) — practice with worked solutions (includes Monty Hall).

---

## How to work through it

Same ritual as always ([main README](../README.md)):

1. Read the **intuition** before any formula.
2. **Work every example by hand**, predicting the answer first.
3. Do the recall questions **closed-book**.
4. Write the "explain it back" answer in your own words.

The topics stack: conditional probability uses counting, Bayes uses conditioning, random variables use all of it. Don't skip ahead — but do notice how often topic 2's "shrink the universe" picture keeps coming back.

---

*Previous module ← [`00-foundations/`](../00-foundations/README.md) · Next module → `02-distributions/` (the distribution zoo).*
