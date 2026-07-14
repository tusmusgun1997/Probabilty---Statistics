# Module 00 — Foundations · One-Page Cheatsheet

> Print this. Re-read it at the start of every session for the next two weeks. Spiral learning only works if you actually spiral.

---

## The big idea
**A probability is a number in [0, 1] measuring uncertainty.** Read it two ways:
- **Frequentist** — long-run fraction if you repeated forever. (A property of the *process*.)
- **Bayesian** — your degree of belief given what you know. (A property of *your information*.)

Both are valid; the math is identical. Know which lens you're wearing.

---

## The language of sets
| Concept | Symbol | Meaning |
|---|---|---|
| Sample space | $\Omega$ | bag of *all* outcomes |
| Event | $A \subseteq \Omega$ | a subset of outcomes you care about |
| Union ("or") | $A \cup B$ | in A **or** B |
| Intersection ("and") | $A \cap B$ | in A **and** B |
| Complement ("not") | $A^c$ | **not** in A |
| Disjoint / mut. exclusive | $A \cap B = \varnothing$ | can't happen together |

**De Morgan:** $(A \cup B)^c = A^c \cap B^c$  and  $(A \cap B)^c = A^c \cup B^c$
*"not (A or B)" = "not-A and not-B."*

---

## Kolmogorov's 3 axioms (everything is built from these)
1. $P(A) \ge 0$ — no negative probability
2. $P(\Omega) = 1$ — something must happen
3. disjoint $\Rightarrow P(A \cup B) = P(A) + P(B)$ — non-overlapping areas add

## The rules they give you
| Rule | Formula | When to reach for it |
|---|---|---|
| **Complement** | $P(A^c) = 1 - P(A)$ | any "**at least one**" problem → do `1 − P(none)` |
| **General addition** | $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ | "or" with possible overlap (subtract the double-count) |
| Disjoint addition | $P(A\cup B)=P(A)+P(B)$ | only when no overlap |
| Bounds | $0 \le P(A) \le 1$ | sanity-check any result |

⭐ **The complement trick** is the most useful shortcut in this module: `P(at least one) = 1 − P(none)`.

---

## Four dialects of one chance
The same likelihood, said four ways — slide one dial, read four labels:
| Form | Example | Convert |
|---|---|---|
| Probability | 0.8 | the base form (0 to 1) |
| Percentage | 80% | probability × 100 |
| Odds (for) | 4-to-1 | $\text{odds} = \dfrac{P}{1-P}$, $P = \dfrac{\text{odds}}{\text{odds}+1}$ |
| Natural frequency | 8 out of 10 | pick a crowd size that clears the fractions |

⭐ **Natural frequencies make conditional puzzles easy:** "1 sick + 10 false alarms out of 1,000 → about 1 in 11." The same fact as decimals fools most people.
⚠️ Odds ≠ probability ("4-to-1" is 4/5, not 1/4). Percentage points ≠ percent. A rate needs its base.

---

## The 3-test check (a topic isn't done until all three pass)
- [ ] **Explain** it with a picture/story, no formulas.
- [ ] **Work** a concrete example by hand and predict the answer first.
- [ ] **Apply** it — name a real DS situation where it decides something.

---

## DS payoffs from this module
- Model outputs (spam score, recommendation score) *are* probabilities → interpret & check **calibration**.
- Filtering data on "and / or / not" = intersection / union / complement.
- `P(at least one) = 1 − P(none)` → reliability, "≥1 fraud in batch," redundant systems.
- Inclusion–exclusion → unique reach / de-duplication.
- Odds & natural frequencies → logistic-regression readouts and communicating risk to humans.
