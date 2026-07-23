# 04.2 — Covariance: Do They Move Together?

> The first summary of a relationship: a single number whose *sign* tells you whether two variables rise and fall together, oppose each other, or march independently.

---

## 1. 🎣 What moves with what

Ice-cream sales go up — and so do drownings. Study hours go up — and so do exam scores. A product's price goes up — and demand goes down.

Some pairs of variables move **together**, some move in **opposite** directions, and some don't track each other at all. We'd like one number that captures the *direction and strength* of that co-movement, distilled from the whole joint distribution. That number is **covariance** — and it comes with a warning we'll cash in next topic: *moving together is not the same as causing.*

---

## 2. 💡 Deviations, multiplied

Covariance asks a simple question of every data point: **when X is above its average, is Y also above its average?**

For each observation, take how far X sits from its mean and how far Y sits from *its* mean, and **multiply those two deviations**:

- Both above average (or both below) → the two deviations have the **same sign** → their product is **positive**.
- One above while the other is below → **opposite signs** → product **negative**.

Average those products across all the data. If the pairs mostly move together, the positives dominate → **positive covariance**. If they mostly oppose, negatives dominate → **negative covariance**. If there's no consistent pattern, the products cancel → **covariance near zero.**

🖼️ *Picture:* draw the scatter plot and split it into four quadrants with a vertical line at X's mean and a horizontal line at Y's mean. Points in the top-right and bottom-left (both-above, both-below) push covariance positive; points in the other two quadrants push it negative. Covariance measures which quadrants the cloud favours.

---

## 3. 📐 The formula, and the missing variance term

With means $\mu_X$ and $\mu_Y$:

$$\text{Cov}(X, Y) = E\big[(X - \mu_X)(Y - \mu_Y)\big] = E[XY] - E[X]\,E[Y].$$

The second form is the handy shortcut ("mean of the product minus product of the means"). What matters most is the **sign**: positive = move together, negative = move oppositely, zero = no *linear* co-movement. Note that a variable's covariance with itself is just its variance: $\text{Cov}(X, X) = \text{Var}(X)$.

This is also the **missing piece from Module 03.** The clean rule "variances add" was only true for independent variables. The full rule is:

$$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\,\text{Cov}(X, Y).$$

Variances add cleanly *only* when the covariance is zero. When variables move together, their combined spread is larger than the parts; when they oppose, it's smaller.

**Worked example.** Three equally likely paired outcomes: (X, Y) = (1, 2), (2, 1), (3, 3). Means: $\mu_X = 2$, $\mu_Y = 2$. Products of deviations: $(1{-}2)(2{-}2) = 0$; $(2{-}2)(1{-}2) = 0$; $(3{-}2)(3{-}2) = 1$. Average $= (0 + 0 + 1)/3 \approx \mathbf{0.33}$ — a small **positive** covariance, so X and Y lean toward moving together. But is 0.33 "strong"? We genuinely can't say yet — its size depends on the units, which is precisely the problem the next topic fixes.

---

## 4. 🎯 Where covariance shows up

- **The covariance matrix runs multivariate analysis.** Collect the covariances between every pair of features into a matrix, and you have the object at the heart of **PCA / dimensionality reduction** (it finds the directions of greatest joint spread) and of the multivariate Normal.
- **Diversification is covariance in action.** A portfolio's risk isn't just the sum of its assets' risks — the cross term $2\,\text{Cov}$ is exactly why holding assets that move *oppositely* (negative covariance) reduces total risk. Same math, real money.
- **It explains the √n caveat from Module 03.** Errors that are correlated have positive covariance, so their combined variance *doesn't* shrink like 1/n. That's why an ensemble of near-identical models barely helps, and why an A/B test with clustered users has more real uncertainty than the naive formula claims.
- **It's the raw ingredient of correlation** — the standardized, interpretable version you'll use daily, coming next.

---

## 5. ⚠️ The classic slips

- **Reading the magnitude.** A covariance of 50 is *not* "stronger" than one of 5 — the number scales with the units of X and Y, so its size is uninterpretable on its own. Only the **sign** is directly meaningful (the next topic fixes the magnitude).
- **Thinking zero covariance means independence.** It does not. Covariance only detects **linear** co-movement. A perfectly dependent U-shaped relationship (Y = X² with X centred at 0) has **zero covariance** while Y is completely determined by X. Independence forces covariance to 0, but not the reverse.
- **Forgetting the covariance term in sums.** $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$ is only the independent-case shortcut. Leaving out $2\,\text{Cov}$ underestimates (or overestimates) the true spread of a combination.
- **Seeing co-movement and inferring cause.** Covariance is symmetric and says nothing about *why* — that's next topic's headline warning.

---

## 6. 🔁 Before you move on

1. In words, how does covariance decide its sign?
2. What does a covariance of zero tell you — and, importantly, what does it *not* tell you?
3. Why is the *magnitude* of a covariance hard to interpret?
4. Write the full formula for Var(X + Y). When does it reduce to Var(X) + Var(Y)?
5. Give a pair of variables you'd expect to have negative covariance, and explain why.

> ✍️ **Explain it back:** Explain to a friend how you'd tell, from data, whether two quantities "move together" — and why a covariance of zero doesn't guarantee they're unrelated. If they get the linear-only limitation, this topic is ✅.

---

*Next → 04.3 — Correlation: Covariance, Standardized*
