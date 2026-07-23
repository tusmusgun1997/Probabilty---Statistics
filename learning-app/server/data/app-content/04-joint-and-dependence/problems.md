# Module 04 — Joint Distributions & Dependence · Problem Set

> **How to use this:** Attempt each problem *closed-book* first, working it through on paper. Solutions are collapsed below each problem; open them only after a genuine attempt.
>
> Difficulty: 🟢 warm-up · 🟡 core · 🔴 stretch

---

## Part A — Joint distributions (topic 04.1)

**A1** 🟢 A joint table of P(X, Y) has cells: P(0,0) = 0.1, P(0,1) = 0.2, P(1,0) = 0.3, P(1,1) = 0.4. Find the marginal distribution of X.

<details><summary>Solution</summary>

Sum across Y for each X. P(X = 0) = 0.1 + 0.2 = **0.3**; P(X = 1) = 0.3 + 0.4 = **0.7**. (They sum to 1, as a marginal must.)
</details>

**A2** 🟡 For the same table, are X and Y independent? Check one cell.

<details><summary>Solution</summary>

Marginals: P(X = 0) = 0.3, P(Y = 0) = 0.1 + 0.3 = 0.4. If independent, P(0, 0) would equal 0.3 × 0.4 = 0.12. But the table says **0.1** ≠ 0.12, so X and Y are **dependent**.
</details>

**A3** 🔴 Two coins are flipped. Let X = number of heads and Y = 1 if the first coin is heads, else 0. Build the joint table of (X, Y) and give the marginal of X.

<details><summary>Solution</summary>

Outcomes (each prob ¼): TT → (X=0, Y=0); TH → (X=1, Y=0); HT → (X=1, Y=1); HH → (X=2, Y=1).

| | Y = 0 | Y = 1 |
|---|---|---|
| X = 0 | ¼ | 0 |
| X = 1 | ¼ | ¼ |
| X = 2 | 0 | ¼ |

Marginal of X: P(X=0) = ¼, P(X=1) = ½, P(X=2) = ¼ — the familiar Binomial(2, ½). (X and Y are clearly dependent: knowing the first coin constrains the total.)
</details>

---

## Part B — Covariance (topic 04.2)

**B1** 🟢 Without calculating, state the sign of the covariance you'd expect between (a) hours studied and exam score, (b) outdoor temperature and heating-bill amount.

<details><summary>Solution</summary>

(a) **Positive** — more study tends to go with higher scores. (b) **Negative** — warmer weather goes with lower heating bills.
</details>

**B2** 🟡 Three equally likely paired outcomes: (X, Y) = (1, 3), (2, 2), (3, 1). Compute the covariance and interpret its sign.

<details><summary>Solution</summary>

Means: $\mu_X = 2$, $\mu_Y = 2$. Deviation products: $(1{-}2)(3{-}2) = -1$; $(2{-}2)(2{-}2) = 0$; $(3{-}2)(1{-}2) = -1$. Average $= (-1 + 0 - 1)/3 = \mathbf{-0.67}$. **Negative** — as X rises, Y falls (they move oppositely), which matches the data.
</details>

**B3** 🔴 X and Y are independent, each with variance 4. What is Var(X + Y)? Now suppose instead Cov(X, Y) = 3 — what is Var(X + Y), and what does the change mean?

<details><summary>Solution</summary>

Independent: $\text{Var}(X+Y) = 4 + 4 + 2(0) = \mathbf{8}$.
With Cov = 3: $\text{Var}(X+Y) = 4 + 4 + 2(3) = \mathbf{14}$. The positive covariance makes the combined spread larger than the sum of the parts — because the two variables tend to be high together and low together, their sum swings more widely.
</details>

---

## Part C — Correlation (topic 04.3)

**C1** 🟢 Cov(X, Y) = 6, with standard deviations σ_X = 3 and σ_Y = 4. Compute the correlation and describe the strength.

<details><summary>Solution</summary>

$r = \dfrac{6}{3 \times 4} = \dfrac{6}{12} = \mathbf{0.5}$ — a moderate positive linear relationship.
</details>

**C2** 🟡 A study finds that cities with more police officers have more crime (positive correlation). Does hiring police cause crime? Explain using the vocabulary of this topic.

<details><summary>Solution</summary>

No — this is **correlation, not causation**. A **confounder**, city population, drives both: bigger cities have both more police *and* more crime. The correlation is real but the causal story ("police cause crime") is wrong. (Reverse causation also plays in: more crime leads cities to hire more police.)
</details>

**C3** 🔴 Let X take values −2, −1, 0, 1, 2 (equally likely) and Y = X². Show that the correlation is 0, and explain why that's true despite Y being completely determined by X.

<details><summary>Solution</summary>

By symmetry $\mu_X = 0$. $\text{Cov}(X, Y) = E[XY] - E[X]E[Y] = E[X \cdot X^2] - 0 = E[X^3]$. The values of $X^3$ are −8, −1, 0, 1, 8, which average to **0**, so covariance = 0 and therefore **r = 0**. Yet Y is a perfect function of X. The reason: correlation only detects **linear** association, and the relationship here is a symmetric parabola — perfectly dependent, but not at all linear. A vivid reminder that r = 0 ≠ independent.
</details>

---

## Part D — Conditional expectation (topic 04.4)

**D1** 🟢 In a dataset, E[income | education = "degree"] = ₹9 lakh and E[income | education = "no degree"] = ₹5 lakh. What does the fact that these two numbers differ tell you?

<details><summary>Solution</summary>

That income and education are **dependent** — the average of income *changes* depending on the value of education. If they were independent, the conditional averages would both equal the overall average.
</details>

**D2** 🟡 Using the study-hours table from topic 04.4 (E[Y | X=1] = 46.7, E[Y | X=2] = 70.9, with P(X=1) = 0.30, P(X=2) = 0.70), use the tower rule to find the overall E[Y].

<details><summary>Solution</summary>

Law of total expectation: $E[Y] = E[Y{\mid}X{=}1]P(X{=}1) + E[Y{\mid}X{=}2]P(X{=}2) = 46.7(0.30) + 70.9(0.70) \approx 14.0 + 49.6 = \mathbf{63.6}$. Averaging the slice-averages, weighted by slice sizes, recovers the overall mean.
</details>

**D3** 🔴 A regression model predicts house price from size. In the language of this module, what is the model actually estimating, and why is that the "best" thing to predict?

<details><summary>Solution</summary>

It's estimating the **conditional expectation** E[price | size] — the average price for each house size, traced out as a curve over size. It's the "best" prediction because, among *all* functions of size, the conditional mean **minimises the expected squared error** — so any model trained on squared-error loss is trying to approximate exactly this curve. (Linear regression assumes the curve is a straight line; flexible models estimate its true shape.)
</details>

---

## ✅ Self-check before advancing to Phase III's finale

From memory, you should be able to:
- Read marginals off a joint table and check two variables for independence.
- Explain what the sign of a covariance means, and why its magnitude isn't interpretable.
- Compute a correlation from covariance and standard deviations, and recite the three warnings (not causation, linear-only, always plot).
- Explain the conditional expectation E[Y | X] as the best prediction of Y from X, and connect it to regression.

Anything shaky → revisit that topic. These ideas — especially "correlation ≠ causation" and "regression estimates the conditional mean" — are among the most quoted (and most botched) in all of data science.
