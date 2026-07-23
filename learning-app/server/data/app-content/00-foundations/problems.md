# Module 00 — Foundations · Problem Set

> **How to use this:** Try each problem *closed-book and closed-solution* first — with pen and paper. Reasoning it out yourself is where the learning happens. Solutions are collapsed below each problem; open them only after a genuine attempt.
>
> Difficulty: 🟢 warm-up · 🟡 core · 🔴 stretch

---

## Part A — What is probability (topic 01)

**A1** 🟢 A weather app says "70% chance of rain tomorrow." Interpret this once with the frequentist lens and once with the Bayesian lens, and say which fits better.

<details><summary>Solution</summary>

- **Frequentist:** across many days whose atmospheric conditions match tomorrow's, it rains on about 70% of them. This treats "tomorrow" as a member of a repeatable class of similar days.
- **Bayesian:** given the forecaster's current information (models, sensors, history), their degree of belief that it rains tomorrow is 0.70.

The **Bayesian** reading fits more naturally, because tomorrow happens exactly once — you can't literally re-run it many times, so "long-run frequency" is a bit of a fiction here, while "degree of belief given what we know" applies directly.
</details>

**A2** 🟢 A fair coin has just landed *heads* five times in a row. A gambler bets heavily on tails next, sure it's "due." What's P(heads) on the next flip, and what's the fallacy?

<details><summary>Solution</summary>

P(heads) = **0.5**, unchanged — a fair coin has no memory, so past flips can't influence the next one. The error is the **gambler's fallacy**. The long-run fraction does head toward 0.5, but by *diluting* early streaks under a growing pile of future flips, never by the coin "correcting" itself on the next toss.
</details>

**A3** 🟡 A model outputs "spam with probability 0.9" on many emails, but only 55% of those flagged emails are truly spam. Is the model well-calibrated? Name the property, and say why it matters operationally.

<details><summary>Solution</summary>

Not calibrated — it's **miscalibrated (overconfident)**. A calibrated model that says 0.9 should be right about 90% of the time; this one is right 55% of the time. It matters because downstream actions (auto-deleting mail, blocking a transaction) trust the number to *mean what it says* — so an overconfident model causes you to act far more aggressively than the true reliability warrants. Calibration is just the frequentist definition of probability applied to the model's own outputs.
</details>

---

## Part B — Sets & events (topic 02)

**B1** 🟢 With $\Omega = \{1,2,3,4,5,6\}$, $A = \{1,2,3\}$, $B = \{2,4,6\}$, list $A \cup B$, $A \cap B$, $A^c$, and $A^c \cap B$.

<details><summary>Solution</summary>

- $A \cup B = \{1,2,3,4,6\}$ (everything in either group)
- $A \cap B = \{2\}$ (the only outcome in both)
- $A^c = \{4,5,6\}$ (everything not in A)
- $A^c \cap B = \{4,6\}$ (in "not A" *and* in B)
</details>

**B2** 🟡 Translate to set notation: "exactly one of A or B occurs" (A or B, but not both).

<details><summary>Solution</summary>

$(A \cap B^c) \cup (A^c \cap B)$ — "(A and not B) or (not A and B)." This is the *symmetric difference*, sometimes written $A \triangle B$. Equivalently $(A \cup B) \cap (A \cap B)^c$: "in the union, but not in the overlap."
</details>

**B3** 🟡 Use De Morgan's law to rewrite $P(A^c \cap B^c)$ in terms of $P(A \cup B)$, and say what it means in words.

<details><summary>Solution</summary>

By De Morgan, $A^c \cap B^c = (A \cup B)^c$ ("neither happens" = "not (either happens)"). Then the complement rule gives $P(A^c \cap B^c) = 1 - P(A \cup B)$. In words: *"the probability that neither A nor B happens equals 1 minus the probability that at least one of them happens."*
</details>

---

## Part C — Axioms & rules (topic 03)

**C1** 🟢 If $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \cap B) = 0.2$, find $P(A \cup B)$.

<details><summary>Solution</summary>

General addition rule: $P(A \cup B) = 0.6 + 0.5 - 0.2 = \mathbf{0.9}$. Note that *naive* addition would give 1.1 — an impossible probability above 1 — and the subtraction of the 0.2 overlap is exactly what keeps the answer legal.
</details>

**C2** 🟡 A component works with probability 0.95. You wire **3 independent copies** in parallel; the system works if *at least one* copy works. Find P(system works) using the complement trick. *(You'll formally meet independence in Module 01; here just multiply the failure probabilities.)*

<details><summary>Solution</summary>

"At least one works" is a flag for the complement trick. Its opposite is "all 3 fail":
$P(\text{all 3 fail}) = (1 - 0.95)^3 = 0.05^3 = 0.000125.$
$P(\text{at least one works}) = 1 - 0.000125 = \mathbf{0.999875}.$
This is *why* redundancy works — and why the complement trick is the natural tool: "at least one" is a mess to compute directly, but "none" is a single multiplication.
</details>

**C3** 🔴 Prove the general addition rule $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ using only the axioms. *Hint: split $A \cup B$ into three disjoint pieces.*

<details><summary>Solution</summary>

Partition $A \cup B$ into three **disjoint** events: $(A \cap B^c)$ [only A], $(A \cap B)$ [both], $(A^c \cap B)$ [only B]. By axiom 3 (disjoint additivity):
$$P(A\cup B) = P(A\cap B^c) + P(A\cap B) + P(A^c\cap B).$$
Also $P(A) = P(A\cap B^c) + P(A\cap B)$ and $P(B) = P(A^c\cap B) + P(A\cap B)$. Add those two:
$$P(A)+P(B) = P(A\cap B^c) + P(A^c\cap B) + 2P(A\cap B).$$
So $P(A)+P(B) - P(A\cap B) = P(A\cap B^c)+P(A^c\cap B)+P(A\cap B) = P(A\cup B)$. ∎ The overlap got counted twice in $P(A)+P(B)$; subtracting it once fixes the double-count.
</details>

---

## Part D — Reading chance in the real world (topic 04)

**D1** 🟢 A weather service gives tomorrow "odds of 3-to-1 against rain." Convert that to a probability of rain, and to a percentage.

<details><summary>Solution</summary>

"3-to-1 against" = 3 dry outcomes for every 1 rainy one → 4 outcomes total → P(rain) = 1/4 = **0.25 = 25%**. (Careful: "against" puts the 3 on the dry side, so rain is the smaller share.)
</details>

**D2** 🟡 A report says a metric "increased by 3%." Give two genuinely different things this could mean, using a metric that started at 20%.

<details><summary>Solution</summary>

- **Percentage points:** 20% → 23% (an absolute +3 points).
- **Relative percent:** 20% → 20.6% (3% *of* 20 is 0.6, so a +0.6-point rise).

These differ by a factor of 5 here. Whenever someone says "up X%," pin down which one they mean — the ambiguity has caused real and expensive misreadings.
</details>

**D3** 🟡 Restate each as a natural frequency "out of a fixed crowd," choosing a crowd size that makes the counts whole: (a) P = 0.2, (b) P = 0.005, (c) odds of 4-to-1 in favour.

<details><summary>Solution</summary>

- (a) 0.2 → **2 out of 10** (or 20 out of 100).
- (b) 0.005 → **1 out of 200** (or 5 out of 1,000).
- (c) 4-to-1 in favour → P = 4/5 → **8 out of 10**.

Picking the denominator that clears the fractions is the whole trick — it's what makes the count easy to picture.
</details>

**D4** 🔴 A rare condition affects 1 in 1,000 people. A test detects it 99% of the time and false-alarms on 1% of healthy people. Using **natural frequencies only** (no algebra), estimate the probability that a person who tests positive actually has the condition. Then say in one sentence why the "obvious" answer of ~99% is wrong.

<details><summary>Solution</summary>

Picture **1,000 people**. About **1** is sick and (99% of the time) tests positive → ~1 true positive. Of the **999** healthy people, 1% false-alarm → ~**10** false positives. Total positives ≈ 11, of whom 1 is truly sick.
$$P(\text{sick} \mid \text{positive}) \approx \frac{1}{11} \approx \mathbf{9\%}.$$
The ~99% intuition confuses "the test catches 99% of sick people" (true) with "99% of positives are sick" (false) — and because the healthy group is so much larger, its rare false alarms still *outnumber* the true positives ten to one. This exact puzzle is the crown jewel of the next module (Bayes' theorem); you just solved it by counting.
</details>

---

## ✅ Self-check before advancing to Module 01

You're ready if you can, from memory:
- Give both interpretations of a probability and say which fits a one-off event.
- Write any "and / or / not" statement in set notation and apply De Morgan.
- State the 3 axioms and *use* the complement + addition rules without notes.
- Move a single chance between probability, percentage, odds, and a natural frequency — and explain why the natural-frequency form makes conditional puzzles easy.

If any of these is shaky, revisit that topic — don't paper over it. The foundation carries everything above it.
