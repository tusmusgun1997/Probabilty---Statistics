# Module 01 — Probability Core · Problem Set

> **How to use this:** Attempt each problem *closed-book* first, working it out by hand. Solutions are collapsed below each problem; open them only after a genuine attempt.
>
> Difficulty: 🟢 warm-up · 🟡 core · 🔴 stretch

---

## Part A — Counting & combinatorics (topic 01)

**A1** 🟢 A password is 2 letters (A–Z) followed by 2 digits (0–9), repeats allowed. How many passwords exist? What principle did you use?

<details><summary>Solution</summary>

Stages multiply (the **multiplication principle**): $26 \times 26 \times 10 \times 10 = \mathbf{67{,}600}$.
</details>

**A2** 🟡 From a team of 10, count the ways to (a) choose a president, VP, and treasurer; (b) choose a 3-person committee. Why do the answers differ by exactly a factor of 6?

<details><summary>Solution</summary>

(a) Order matters (distinct roles): $10 \times 9 \times 8 = \mathbf{720}$.
(b) Order doesn't: $\binom{10}{3} = \mathbf{120}$.
The factor is $3! = 6$: each committee was counted once per internal ordering of its 3 members in (a). Combinations = permutations ÷ orderings you don't care about.
</details>

**A3** 🔴 Poker: compute P(a 5-card hand is a *flush* — all five cards the same suit).

<details><summary>Solution</summary>

Count flushes: pick the suit ($4$ ways), then pick 5 of its 13 cards ($\binom{13}{5} = 1287$): $4 \times 1287 = 5148$ flushes.
$$P = \frac{5148}{\binom{52}{5}} = \frac{5148}{2{,}598{,}960} \approx \mathbf{0.00198}$$
About 1 hand in 505. (This count *includes* straight flushes; the "flush only" casino definition subtracts the 40 straight flushes.)
</details>

---

## Part B — Conditional probability (topic 02)

**B1** 🟢 One card is drawn from a standard deck. Given that it's a face card (J, Q, K), what's the probability it's a king?

<details><summary>Solution</summary>

Shrink the universe to the 12 face cards; 4 are kings: $P = 4/12 = \mathbf{1/3}$.
</details>

**B2** 🟡 Two dice are rolled and you're told the sum is 8. What's the probability at least one die shows a 6?

<details><summary>Solution</summary>

Survivors (sum = 8): (2,6), (3,5), (4,4), (5,3), (6,2) — five equally likely outcomes. With a 6: (2,6) and (6,2) → $P = \mathbf{2/5}$. (Not 11/36 — the universe shrank.)
</details>

**B3** 🔴 **Monty Hall.** Three doors, one car. You pick door 1. The host — who knows where the car is and always opens a *goat* door you didn't pick — opens door 3. Should you switch to door 2?

<details><summary>Solution</summary>

**Yes — switching wins with probability 2/3.** Your initial pick is right only 1/3 of the time (in which case staying wins) and wrong 2/3 of the time. Whenever your first pick is wrong, the host — forced to open the *other* goat door — leaves the car sitting behind the one remaining closed door, so switching wins. Switching therefore wins in exactly the 2/3 of cases where your first guess was wrong. The host's *knowledge* is what breaks the "50/50" intuition: his door was not opened at random, so it carries information.
</details>

---

## Part C — Independence (topic 03)

**C1** 🟢 Compute (a) P(two heads in two coin flips); (b) P(two aces in two cards drawn without replacement). Which computation used independence, and why can't the other?

<details><summary>Solution</summary>

(a) Flips are independent: $\frac12 \times \frac12 = \mathbf{1/4}$.
(b) Draws are dependent (the deck changes): chain rule, $\frac{4}{52} \times \frac{3}{51} = \mathbf{1/221}$. Multiplying $\frac{4}{52}\times\frac{4}{52}$ would be the independence mistake.
</details>

**C2** 🟡 Two dice: A = "die 1 is even", B = "sum > 7". Determine whether A and B are independent by counting P(A∩B) and comparing it to P(A)P(B).

<details><summary>Solution</summary>

$P(A) = 1/2$. Sum > 7 has 15 of 36 outcomes: $P(B) = 5/12$. Count A∩B (die 1 even *and* sum > 7): die1=2 → die2=6 (1 way); die1=4 → die2>3 (3 ways); die1=6 → die2>1 (5 ways) = 9 ways → $P(A \cap B) = 9/36 = 1/4$.
Compare: $P(A)P(B) = \frac12 \cdot \frac{5}{12} = \frac{5}{24} \approx 0.208 \ne 0.25$. **Dependent** — the sum contains die 1 inside it.
</details>

**C3** 🔴 Flip two fair coins. A = "first is heads", B = "second is heads", C = "exactly one head". Show A, B, C are **pairwise** independent but not **mutually** independent.

<details><summary>Solution</summary>

Each event has probability 1/2. Pairs: $P(A \cap B) = 1/4 = P(A)P(B)$ ✓; $P(A \cap C) = P(\text{HT}) = 1/4$ ✓; $P(B \cap C) = P(\text{TH}) = 1/4$ ✓ — all pairs factor.
Triple: $A \cap B \cap C$ = "both heads *and* exactly one head" = impossible → $P = 0 \ne \frac12 \cdot \frac12 \cdot \frac12 = \frac18$. **Pairwise ≠ mutual.** Any two carry no information about each other, but two of them together *determine* the third.
</details>

---

## Part D — Bayes' theorem (topic 04)

**D1** 🟢 Redo the star example by hand with natural frequencies: prevalence 1/1000, sensitivity 99%, false-positive rate 1%. Out of 100,000 people, build the counts and find P(sick | positive).

<details><summary>Solution</summary>

100,000 people → 100 sick, 99,900 healthy. Positives: 99 true (99% of 100) + 999 false (1% of 99,900) = 1098. $P(\text{sick} \mid +) = 99/1098 \approx \mathbf{9\%}$. The false alarms outnumber the true alarms ten to one because healthy people are 999× more numerous.
</details>

**D2** 🟡 40% of email is spam. "FREE" appears in 30% of spam and 2% of legitimate mail. An email contains "FREE" — what's the probability it's spam?

<details><summary>Solution</summary>

$$P(\text{spam} \mid \text{FREE}) = \frac{0.30 \times 0.40}{0.30 \times 0.40 + 0.02 \times 0.60} = \frac{0.12}{0.132} \approx \mathbf{0.909}$$
One word took the belief from 40% to 91% — a Naive Bayes filter is just this, multiplied across every word.
</details>

**D3** 🟡 Machine A makes 60% of parts with a 2% defect rate; machine B makes 40% with 5%. A random part is defective. Which machine probably made it?

<details><summary>Solution</summary>

Paths to a defect: A: $0.6 \times 0.02 = 0.012$; B: $0.4 \times 0.05 = 0.020$. Total 0.032.
$$P(B \mid \text{defect}) = 0.020 / 0.032 = \mathbf{0.625}$$
Machine B — despite making fewer parts. *Your path / all paths.*
</details>

**D4** 🔴 Keep D1's test (99% sensitivity, 1% false alarms) but work out P(sick | positive) by hand at three prevalences — 1 in 10,000, 1 in 1,000, and 1 in 10. What's the one-sentence lesson?

<details><summary>Solution</summary>

Use the "your path / all paths" structure with $P(\text{sick} \mid +) = \dfrac{0.99\,p}{0.99\,p + 0.01(1-p)}$ for prevalence $p$:

| Prevalence $p$ | P(sick given positive) |
|---|---|
| 1 in 10,000 (0.0001) | ≈ **0.010** (1%) |
| 1 in 1,000 (0.001) | ≈ **0.090** (9%) |
| 1 in 10 (0.1) | ≈ **0.917** (92%) |

**Lesson:** the meaning of a positive result is not a property of the test — it's a property of the test *and the prior together*. (In machine-learning terms: precision collapses as class imbalance grows, even at fixed model quality.)
</details>

---

## Part E — Random variables (topic 05)

**E1** 🟢 X = number of heads in two fair coin flips. Write the full PMF and verify it sums to 1.

<details><summary>Solution</summary>

Outcomes HH, HT, TH, TT (¼ each): $P(X=0) = \frac14$, $P(X=1) = \frac24$, $P(X=2) = \frac14$. Sum = 1 ✓.
</details>

**E2** 🟡 Roll two dice; let X = the **larger** of the two (ties count as the value). Derive the PMF formula and check it sums to 1.

<details><summary>Solution</summary>

$P(X \le k) = (k/6)^2$ (both dice ≤ k), so $P(X = k) = \frac{k^2 - (k-1)^2}{36} = \frac{2k - 1}{36}$.
PMF: 1/36, 3/36, 5/36, 7/36, 9/36, 11/36 — sum $= 36/36 = 1$ ✓. The mass piles up on high values: maxima drift upward (a preview of order statistics).
</details>

**E3** 🔴 Answer the module's cliffhanger bet by hand: 3 coins, ₹100 per head, entry fee ₹120. Using the 3-coin PMF (1/8, 3/8, 3/8, 1/8 for 0–3 heads), find the *average* winnings per play. Is the bet worth it?

<details><summary>Solution</summary>

Average winnings = each payout weighted by its probability:
$$0\cdot\tfrac18 + 100\cdot\tfrac38 + 200\cdot\tfrac38 + 300\cdot\tfrac18 = \tfrac{0 + 300 + 600 + 300}{8} = \tfrac{1200}{8} = \mathbf{₹150}.$$
₹150 average payout beats the ₹120 entry, so the bet is **favorable** — worth about ₹30 per play in the long run. That probability-weighted average of a random variable has a name — **expectation** — and it opens the next phase of the course.
</details>

---

## ✅ Self-check before advancing to Module 02

From memory, you should be able to:
- Choose permutation vs. combination instantly, and explain the $k!$ divisor.
- Solve a "given that…" problem by explicitly shrinking the sample space.
- State why mutually exclusive and independent are opposites.
- Run the 1,000-people Bayes picture for any test/prior, and translate it into precision/recall.
- Build a PMF from an experiment by counting outcomes, and check that it sums to 1.

Anything shaky → revisit that topic before the distribution zoo. Bayes especially: it returns again and again later in the course.
