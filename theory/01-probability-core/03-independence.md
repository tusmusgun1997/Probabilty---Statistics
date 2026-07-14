# 01.3 — Independence

> "Knowing one thing tells you nothing about the other." It sounds simple, it's constantly assumed, and it's rarer than people think. Getting it right is what keeps your statistics honest.

---

## 1. 🎣 The coin vs. the deck

Two quick questions. A fair coin and a fresh deck:

1. You flip heads five times in a row. Does the sixth flip now favor tails?
2. You draw an ace from the deck. Is the next card *more* or *less* likely to be an ace?

Question 1: **no** — the coin has no memory (Module 00's gambler's fallacy). Question 2: **less likely** — 3 aces remain among 51 cards.

Same setup — "a repeat event" — but completely different logic. The coin flips are **independent**; the card draws are **dependent**. Telling these two situations apart, instantly and reliably, is a superpower — because the *entire* toolkit of statistics changes depending on which one you're in.

---

## 2. 💡 Knowing B teaches you nothing about A

### Independence = "knowing B teaches you nothing about A" 🧠🚫

Formally we'll say $P(A \mid B) = P(A)$: after learning B happened, your belief about A **doesn't move**. The information is useless. That's independence — not "unrelated topics," not "no physical connection" — *zero information transfer*.

- Coin flips: knowing flip 5 was heads tells you *nothing* about flip 6. Independent.
- Card draws: knowing the first card was an ace *changes the deck*. Dependent.
- Height and last digit of your phone number: independent (we'd bet).
- Height and weight: dependent — learning one shifts your beliefs about the other.

### The picture: proportional overlap

In the Venn view, independence means **A occupies the same fraction of B as it occupies of the whole box.** If A covers 30% of the world, it covers exactly 30% of B too. Conditioning on B (zooming into B) doesn't change A's share. The overlap is *perfectly proportional* — nothing special happens inside B.

### ⚔️ The classic confusion: independent vs. mutually exclusive

They sound like cousins. They are **opposites**.

- **Mutually exclusive** (disjoint): if B happened, A is *impossible*. That's not "no information" — that's **maximum information**! Knowing B happened tells you everything about A (it didn't).
- **Independent:** knowing B happened tells you *nothing* about A.

Two events with positive probability can never be both. File this in permanent memory.

---

## 3. 📐 The product rule (and how to test it)

Events A and B are **independent** iff:

$$P(A \cap B) = P(A)\,P(B)$$

Equivalent (when $P(B)>0$): $P(A \mid B) = P(A)$. The definitions are symmetric — if B teaches nothing about A, A teaches nothing about B.

Two useful consequences:
- If A, B independent, so are A and $B^c$, $A^c$ and B, $A^c$ and $B^c$.
- For **multiple** events, we want *mutual* independence: every sub-collection must factor, e.g. $P(A\cap B\cap C) = P(A)P(B)P(C)$ *and* all pairs. **Pairwise independence does not imply mutual independence** (a problem in this module's problem set constructs the classic counterexample).

**The workhorse:** for independent events, "and" becomes multiplication. P(10 fair coins all heads) $= (1/2)^{10} = 1/1024$. This product rule — only valid under independence — is what made Module 00's complement trick compute: $P(\text{no defect in 50 parts}) = 0.98^{50}$.

**How to check it, by comparison.** The product form is also a *test*: measure the true joint probability $P(A \cap B)$ and compare it to $P(A)\,P(B)$. Take two dice. Let A = "die 1 is even" ($P = \tfrac12$) and B = "die 2 is greater than 4" ($P = \tfrac13$). These live on *separate* dice, so the joint is $\tfrac16$ — exactly $\tfrac12 \times \tfrac13$. **Independent.** Now let B instead be "the *sum* is greater than 7." Die 1 is baked into the sum, so knowing die 1 is even nudges the sum upward: the true joint works out to $\tfrac14$, but $P(A)P(B) = \tfrac12 \times \tfrac{5}{12} \approx 0.208$. The numbers disagree → **dependent.** Whenever a shared ingredient links two events, the product rule fails, and the gap between "joint" and "product" is exactly that leaked information.

---

## 4. 🎯 Where independence rules (and ruins)

- **"Naive" Bayes is named after this topic.** The spam filter assumes every word is independent given the class — false, but useful — and multiplies per-word probabilities with the product rule. Knowing exactly *what* assumption is being made (and when it breaks: repeated phrases, templates) is what separates using a model from understanding it.
- **i.i.d. — the assumption under everything.** "Independent and identically distributed" is the fine print of nearly all of ML: train/test splits, cross-validation, confidence intervals. When rows are *not* independent (time series, users appearing in both splits, grouped data), naive metrics silently lie. Diagnosing dependence is a job skill.
- **The product rule powers reliability math and power analysis:** P(pipeline of 12 independent stages all succeed) = product of the stages. One line — if independence holds. Correlated failures (shared server!) break it, which is precisely why real systems fail more than naive math predicts.
- **Zero correlation ≠ independence** — a teaser: correlation (Module 04) only detects *linear* dependence. Independence is the stronger, more precious property.

---

## 5. ⚠️ The classic slips

- **Mutually exclusive ≠ independent.** They're opposites (maximum vs. zero information). If you catch yourself saying "they can't both happen, so they're independent," stop and reread the intuition section.
- **Assuming independence because it's convenient.** Multiplying probabilities is easy, so people do it everywhere — including where it's false (correlated user sessions, repeated measures, shared infrastructure). Ask: *does knowing one outcome tell me anything about the other?* If yes, no multiplying.
- **Independence is model-relative.** Card draws are dependent; card draws *with replacement* are independent. Tiny protocol changes flip the property. Check the mechanism, not the vibes.
- **Pairwise ≠ mutual.** All pairs factoring doesn't guarantee the triple factors. Rare in practice, classic on exams (and in this module's problem set).

---

## 6. 🔁 Before you move on

1. Give the definition of independence twice: the product form and the "no information" form.
2. Why can two events with positive probability never be both mutually exclusive *and* independent?
3. Coin: P(6 heads in a row)? Deck: P(two aces in two draws, no replacement)? Which used independence, which couldn't?
4. Your A/B test assigned whole *offices* to variants, but you analyzed at the *employee* level. Which assumption broke, and why does it matter?
5. You suspect two events are independent. What two quantities would you compute and compare to check?

> ✍️ **Explain it back:** Explain to a friend why a casino can rely on the roulette wheel having no memory, while a card-counter at blackjack can genuinely gain an edge. If your explanation names the property that differs between the two games, this topic is ✅.

---

*Next → [04 — Bayes' Theorem](04-bayes-theorem.md)*
