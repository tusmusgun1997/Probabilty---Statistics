# 03.3 — Combining Random Variables: Linearity & the √n Effect

> Real problems stack many random pieces together. Two simple rules — one for means, one for spreads — govern the whole game, and one surprising consequence explains why averaging data makes it sharper.

---

## 1. 🎣 How much better is an average?

You measure a table's length once; your reading might be off by a little. So you measure it **100 times and average** — everyone agrees the average is more trustworthy than a single reading.

But *how much* more trustworthy? Twice as good? Ten times? A hundred times, since you took a hundred readings? The answer is exact, and it's genuinely surprising the first time you see it — and it quietly governs how big a sample you need, how long to run an A/B test, and why "wisdom of crowds" and model ensembles work.

---

## 2. 💡 Two rules, and one asymmetry

Combining random variables comes down to two rules — and the fact that they behave *differently* is the whole lesson.

**Rule 1 — Means always add.** $E[X + Y] = E[X] + E[Y]$. Always. This is **linearity of expectation**, and its superpower is that it holds **even when X and Y are related.** Expected totals just add up, no independence required. It makes many scary-looking averages trivial.

**Rule 2 — Spreads add *only when independent*.** $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$ **only if X and Y are independent.** If they move together, there's an extra term (covariance — Module 04's job). Uncertainty only stacks cleanly when the pieces are unrelated.

And scaling: multiplying by a constant scales the mean by that constant, but scales the **variance by its square** — $\text{Var}(aX) = a^2\,\text{Var}(X)$ — so the standard deviation scales by $|a|$.

**The payoff — the √n effect.** Average $n$ independent measurements. The mean of the average is unchanged, but its **variance is divided by n**, so its standard deviation is divided by **√n**. More data sharpens your estimate — but through the square root, so **to cut your error in half you need four times the data**, not twice. Diminishing returns, made precise.

---

## 3. 📐 The rules on paper

For constants $a, b$ and any variables:

$$E[aX + b] = aE[X] + b, \qquad E[X_1 + \dots + X_n] = \sum_i E[X_i] \ \text{(always)}.$$

$$\text{Var}(aX + b) = a^2\,\text{Var}(X), \qquad \text{Var}\Big(\sum_i X_i\Big) = \sum_i \text{Var}(X_i) \ \text{(independent only)}.$$

For the **sample mean** $\bar{X} = \tfrac{1}{n}\sum_i X_i$ of $n$ independent draws with mean $\mu$ and standard deviation $\sigma$:

$$E[\bar{X}] = \mu, \qquad \text{Var}(\bar{X}) = \frac{\sigma^2}{n}, \qquad \text{SD}(\bar{X}) = \frac{\sigma}{\sqrt{n}}.$$

That last quantity, $\sigma/\sqrt{n}$, is so important it has its own name: the **standard error**.

**Worked example — the table.** Say a single measurement has SD $\sigma = 2$ mm. Average 100 readings: the standard error is $2/\sqrt{100} = 0.2$ mm — a **tenfold** sharpening. Want to reach 0.1 mm? You'd need $n = 400$ readings, not 200. The √n is why.

---

## 4. 🎯 Where this runs the show

- **Sample sizes and A/B tests.** "How long must we run the experiment?" is answered by the standard error $\sigma/\sqrt{n}$: pick n so the error is small enough to see the effect you care about. This one formula plans nearly every experiment.
- **Why ensembles work.** Averaging many noisy but *independent* models (bagging, random forests) drives the combined variance down by roughly 1/n — the √n effect applied to predictions. The catch is right there in Rule 2: it only works to the extent the models' errors are **independent**.
- **Linearity makes hard sums easy.** "Expected number of matches / collisions / successes across many pieces" often falls out instantly by adding per-piece expectations — no need to untangle their dependence.
- **The bridge to inference.** Confidence intervals, standard errors on every dashboard, and the Central Limit Theorem (next phase) all stand on $\sigma/\sqrt{n}$. This is the machinery that makes samples speak about populations.

---

## 5. ⚠️ The classic slips

- **Adding variances when the pieces aren't independent.** Correlated errors do **not** shrink like 1/n. Ensembles of near-identical models barely help; an A/B test that assigns whole *offices* (not individuals) has correlated users and a far larger true error than the naive formula claims (the independence trap from Module 01, with real consequences).
- **Expecting error to fall linearly with n.** It falls with **√n**. Going from 100 to 10,000 samples (100×) only sharpens you 10×. Big data helps, but with diminishing returns.
- **Thinking more data fixes bias.** Only *variance* shrinks with n. A systematically wrong measurement (a miscalibrated sensor) stays wrong no matter how many readings you average.
- **Applying linearity to nonlinear functions.** $E[X + Y] = E[X] + E[Y]$, but $E[X^2] \neq (E[X])^2$ and $E[1/X] \neq 1/E[X]$. Averages pass through addition, not through squaring, dividing, or other curves.

---

## 6. 🔁 Before you move on

1. State the two combining rules. Which one needs independence, and which holds always?
2. What is the √n effect, and why does halving your error require *four times* the data?
3. A single measurement has SD 6. What's the standard error of the average of 36 measurements?
4. Why does averaging many models reduce variance — and what assumption must hold for it to work?
5. Give one thing that collecting more data will *not* fix, and say why.

> ✍️ **Explain it back:** A colleague wants to double the precision of an estimate and assumes they need to double the sample size. Explain, using the √n rule, why they actually need four times as much data. If they grasp the square-root, this topic is ✅.

---

*Next → 03.4 — Expectation in the Wild: Decisions, Loss & Risk*
