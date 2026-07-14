# 00.3 — The Three Axioms & the Rules They Give You

> Three plain statements, written down in 1933, that the entire tower of probability rests on. Own these and you can rebuild forgotten formulas instead of googling them.

---

## 1. 🎣 The whole subject from three rules

Here's a claim: **every formula in this entire course — Bayes' theorem, the binomial distribution, the machinery behind p-values, all of it — is squeezed out of just three short rules a Russian mathematician wrote down in 1933.**

That sounds like marketing. It isn't. Andrey Kolmogorov found the *minimum* set of assumptions that make probability behave sensibly, and everything else is a logical consequence. If you truly own these three rules, you can *rederive* forgotten formulas instead of frantically searching for them. That's the difference between renting knowledge and owning it.

---

## 2. 💡 Three statements you already believe

Forget the word "axiom" — it just means "a rule so basic we agree to start from it." Here's the intuition for each, using the picture from the last topic (probability = *how much of the sample-space box a region covers*).

1. **Probabilities aren't negative.** You can't have "less than none" of the box shaded. The smallest is zero (empty region). ✅ Obvious.
2. **The whole box has probability 1.** *Something* in the sample space must happen. If you shade everything, you've shaded 100%. ✅ Obvious.
3. **For non-overlapping regions, areas add.** If two events can't happen together (disjoint circles that don't touch), the chance of "one or the other" is just their areas summed. ✅ Obvious.

That's the whole foundation. It's *deliberately* boring — that's the point. From these three "obvious" statements, a tower of non-obvious, powerful results follows.

### The rules that fall out (this is where it gets useful)

**Complement rule** — from rules 2 & 3, since A and "not A" are disjoint and together fill the box:
$$P(A^c) = 1 - P(A)$$
🔑 *This is a superpower.* Whenever "at least one" is hard to compute directly, compute "none" and subtract. ("At least one head in 10 flips" is a nightmare head-on, but "no heads" = "all tails" is one easy multiplication.)

**Addition rule (general)** — for events that *might* overlap, the fix for the last topic's hook:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
🖼️ *Why subtract?* Because adding both circles counts the overlap **twice**. You subtract it once to fix the double-count. This is called **inclusion–exclusion**.

---

## 3. 📐 Kolmogorov's axioms, precisely

For a sample space $\Omega$ and events (subsets) $A$:

$$
\textbf{(1)}\quad P(A) \ge 0
\qquad
\textbf{(2)}\quad P(\Omega) = 1
\qquad
\textbf{(3)}\quad A \cap B = \varnothing \;\Rightarrow\; P(A \cup B) = P(A) + P(B)
$$

**Consequences** (each provable from the three above):

| Rule | Formula |
|------|---------|
| Complement | $P(A^c) = 1 - P(A)$ |
| Impossible event | $P(\varnothing) = 0$ |
| Monotonicity | $A \subseteq B \Rightarrow P(A) \le P(B)$ |
| General addition | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Bounds | $0 \le P(A) \le 1$ |

> 🧠 **Do this once by hand:** prove the complement rule. $A$ and $A^c$ are disjoint (rule 3 applies) and their union is $\Omega$ (rule 2). So $P(A) + P(A^c) = P(\Omega) = 1$, therefore $P(A^c) = 1 - P(A)$. Two lines. *That's* what "everything follows from the axioms" feels like — do it yourself and it stops being a slogan.

**A worked overlap.** A die roll, A = "even" = {2,4,6}, B = ">3" = {4,5,6}. Naively $P(A)+P(B) = \tfrac12 + \tfrac12 = 1$ — impossible, since rolling a 1 satisfies neither. The overlap is {4,6}, probability $\tfrac26$. Correct: $P(A\cup B) = \tfrac12 + \tfrac12 - \tfrac26 = \tfrac46$. The subtraction is bookkeeping, not decoration.

---

## 4. 🎯 Where these rules pay off

- **The complement trick is everywhere.** "What's the probability a system with 20 redundant servers has *at least one* alive?" Computing that directly is brutal. Computing "all 20 dead" and doing `1 − that` is one step. Reliability engineering, dropout analysis, "at least one fraud in this batch" — all lean on `P(at least one) = 1 − P(none)`.
- **Inclusion–exclusion drives de-duplication and reach.** "How many users did campaign A *or* B reach?" You can't add the two audiences — you'd double-count everyone in both. Subtract the intersection. This is the exact logic behind unique reach, funnel overlap, and set-based metrics.
- **Sanity-checking model outputs.** If a multi-class model's predicted probabilities don't sum to 1 (rule 2) or any is negative (rule 1), something is *broken*. The axioms are your smoke detector for buggy probability numbers.

---

## 5. ⚠️ The classic slips

- **Applying rule 3 to overlapping events.** The naive `P(A) + P(B)` is only valid when disjoint. When in doubt, assume there's an overlap and use the general addition rule.
- **Probabilities that don't sum to 1.** Over a set of *mutually exclusive and exhaustive* outcomes, they must total exactly 1. If your distribution sums to 1.2, you've made an error — the axioms just caught it.
- **Forgetting the complement shortcut.** Any time a problem says "at least one," your first thought should be *"...so let me compute 'none' and subtract."* Beginners grind through the hard direct sum and make arithmetic errors.
- **Treating axioms as arbitrary trivia.** They're not a list to memorize and discard — they're the *engine*. Re-deriving the complement rule by hand is worth more than reading this whole page twice.

---

## 6. 🔁 Before you move on

1. State Kolmogorov's three axioms from memory.
2. Derive the complement rule $P(A^c) = 1 - P(A)$ using only the axioms. (Two lines.)
3. Why does the general addition rule *subtract* $P(A \cap B)$? Answer with the double-counting picture.
4. A model outputs class probabilities `0.5, 0.4, 0.3`. Which axiom does this violate, and why is that a red flag?
5. "Probability of at least one defect in a batch of 50, if each is defective with probability 0.02." Set up the calculation using the complement trick (you don't have to finish the arithmetic).

> ✍️ **Explain it back:** In your own words, defend the claim "all of probability follows from three rules" to a skeptic. Use the complement rule as your worked example of something non-obvious falling out of something obvious. If your explanation holds together, this topic is ✅.

---

*Next → [04 — Reading Chance in the Real World](04-reading-chance-in-the-real-world.md)*
