# Module 01 — Probability Core · One-Page Cheatsheet

> Re-read at the start of each session while working through Module 02. Spiral learning only works if you spiral.

---

## Counting (topic 1)
| Tool | Formula | Use when |
|---|---|---|
| Multiplication principle | stages multiply: $n_1 \cdot n_2 \cdots$ | choices happen in stages |
| Permutations $^nP_k$ | $\frac{n!}{(n-k)!}$ | **order matters** (podium, passwords) |
| Combinations $\binom{n}{k}$ | $\frac{n!}{k!(n-k)!}$ | **order doesn't** (committees, hands) |

⭐ Master question: *"Does order matter?"* · Classical probability: $P(A) = |A|/|\Omega|$ (equally likely only!)
Cancel factorials *before* multiplying — in $\binom{n}{k}$ the $(n-k)!$ kills most of the $n!$.

---

## Conditional probability (topic 2)
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
**Picture:** conditioning = *shrink the universe to B, recount inside.*
**In data:** keep only the rows where B holds, then take the rate of A within them.

- **Chain rule:** $P(A \cap B) = P(A \mid B)P(B)$ — extend for longer chains.
- **Law of total probability:** $P(A) = \sum_i P(A \mid B_i)P(B_i)$ — weighted average over scenarios.
- Two-children lesson: *write down exactly what you learned* — different filters, different answers.

---

## Independence (topic 3)
$$A \perp B \iff P(A \cap B) = P(A)P(B) \iff P(A \mid B) = P(A)$$
"Knowing B teaches you **nothing** about A." Then and only then: "and" = multiply.

⚔️ **Mutually exclusive ≠ independent — they're opposites** (max information vs. zero information).
Test it: compare the true joint $P(A \cap B)$ against the product $P(A)P(B)$ — equal ⇒ independent.
Pairwise independence ≠ mutual independence. i.i.d. = the fine print under all of ML.

---

## Bayes' theorem (topic 4) 👑
$$P(H \mid E) = \frac{P(E \mid H)\,P(H)}{P(E \mid H)P(H) + P(E \mid H^c)P(H^c)}$$
**prior** → evidence re-weights → **posterior**. Structure: *your path / all paths to the evidence.*

🧑‍🤝‍🧑 **1,000-people picture** (rare disease, 99% test): 1 true positive vs ~10 false alarms → P(sick | +) ≈ **9%**.
- Base-rate neglect = the #1 human probability error. Always ask: *what's the prevalence?*
- Translation table: recall = $P(+\mid\text{sick})$ (likelihood) · precision = $P(\text{sick}\mid+)$ (posterior).
- Same test, different prior → different meaning of a positive.

---

## Random variables (topic 5)
$X: \Omega \to \mathbb{R}$ — a **numbering of outcomes** (a function, not a number).
**PMF:** $p(x) = P(X = x)$, needs $p(x) \ge 0$ and $\sum_x p(x) = 1$ (your built-in error check).

3 coins, X = heads: PMF = 1/8, 3/8, 3/8, 1/8 — a baby binomial (a symmetric hill).
A function of an RV is another RV (winnings = 100·X). A model's class-probability output = a predicted PMF.

---

## The module in three reflexes
1. Order matters? → perm : comb.
2. New information? → shrink the universe (filter), recount.
3. Have P(E|H), want P(H|E)? → Bayes; bring the base rate.

## The 3-test check (per topic)
- [ ] **Explain** with a picture/story · [ ] **Work** an example by hand, predicting first · [ ] **Apply** to a real DS situation
