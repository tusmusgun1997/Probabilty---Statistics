# 03.2 — Variance & Standard Deviation

> The mean tells you where a distribution sits; it says nothing about how much it *wobbles*. Variance and its friendlier square root, the standard deviation, measure that wobble — and wobble is risk, noise, and uncertainty all at once.

---

## 1. 🎣 Two jobs, same average pay

You're weighing two job offers. You model your possible annual pay at each. Both come out to the **same average** — say ₹20 lakh. By the last topic's tool, expectation, they're identical.

But they're not. Job A's outcomes are all bunched around ₹20 lakh — steady, predictable. Job B swings from ₹8 lakh in a bad year to ₹35 lakh in a great one — same average, wildly different experience. **The mean literally cannot tell these two apart.** To choose well you need a second number: one for *how spread out* the outcomes are. That number is what separates a safe bet from a rollercoaster.

---

## 2. 💡 Average distance from the mean

**Variance measures how far outcomes typically land from the mean.** The recipe: for each outcome, take its distance from the mean, **square it**, and average those squared distances (weighted by probability).

Why square the distances? Two reasons. First, distances above and below the mean would otherwise **cancel out** to zero — squaring makes them all positive. Second, squaring makes **big deviations count much more** than small ones, which matches how we think about risk: one disastrous year hurts more than several slightly-off ones.

The catch: squaring warps the units. If pay is in rupees, variance comes out in *rupees-squared* — meaningless to a human. So we take the square root to undo it, giving the **standard deviation (SD)**, back in real rupees. **The standard deviation is the number you actually report and reason about**; it's roughly "how far, in normal units, a typical outcome sits from the average."

🖼️ *Picture:* two bell curves with the *same* centre. A small SD is a tall, narrow spike (outcomes hug the mean — Job A). A large SD is a low, wide spread (outcomes range far — Job B).

---

## 3. 📐 Squared distance, and a shortcut

Formally, with mean $\mu = E[X]$:

$$\text{Var}(X) = E\big[(X - \mu)^2\big], \qquad \text{SD}(X) = \sqrt{\text{Var}(X)}.$$

A shortcut that's almost always easier to compute:

$$\text{Var}(X) = E[X^2] - \big(E[X]\big)^2 \quad\text{—  "the mean of the square minus the square of the mean."}$$

**Worked example — a fair die.** We know $E[X] = 3.5$. Now the mean of the squares:

$$E[X^2] = \tfrac16(1 + 4 + 9 + 16 + 25 + 36) = \tfrac{91}{6} \approx 15.17.$$

$$\text{Var}(X) = 15.17 - 3.5^2 = 15.17 - 12.25 = 2.92, \qquad \text{SD} \approx \mathbf{1.71}.$$

So a die's rolls sit, on average, about **1.7 away** from 3.5 — which matches the feel of the numbers 1–6.

The Module 02 distributions have tidy variances too: **Bernoulli(p) → p(1−p)**, **Binomial(n, p) → np(1−p)**, **Poisson(λ) → λ** (its mean and variance are equal — that signature again).

---

## 4. 🎯 Where spread shows up

- **Spread is risk.** In finance, an asset's standard deviation *is* its volatility. In operations, it's how unreliable a delivery time is. Any time "average" hides danger, the SD reveals it — exactly the two-jobs problem.
- **Spread is noise.** Measurement error, sensor jitter, and the scatter of data around a model's prediction are all quantified by variance. The famous **bias–variance tradeoff** in machine learning is literally about a model's prediction variance.
- **Standardisation uses it.** The z-scores from Module 02, and feature scaling in ML, divide by the standard deviation so every feature has comparable spread. "Mean ± SD" is the universal one-line summary of a dataset.
- **It decides significance.** Whether an A/B test result is "real" depends not just on the gap between the means but on how much each group varies — a big gap with huge spread can still be noise.

---

## 5. ⚠️ The classic slips

- **Reporting variance to humans.** Its squared units ("rupees²") are uninterpretable. Communicate with the **standard deviation**, which lives in real units.
- **Ignoring outliers.** Because deviations are squared, a single extreme value can massively inflate the SD. For messy, heavy-tailed data, robust spread measures (like the interquartile range) may describe the bulk better.
- **Comparing SDs across different scales.** An SD of 5 is huge for shoe sizes and tiny for house prices. To compare spread across unlike quantities, use the *relative* spread (coefficient of variation = SD ÷ mean).
- **Confusing precise with accurate.** Low variance means *consistent*, not *correct*. A miscalibrated scale can give tightly clustered readings that are all wrong (low variance, high bias).

---

## 6. 🔁 Before you move on

1. In words, what does variance measure, and why are the distances squared?
2. Why do we usually report the standard deviation instead of the variance?
3. Use the shortcut $E[X^2] - (E[X])^2$ to find the variance of a fair coin scored as 1 for heads, 0 for tails.
4. Two datasets have the same mean but very different standard deviations. What does that tell you, with a real example?
5. Why can one outlier distort the standard deviation, and what could you use instead?

> ✍️ **Explain it back:** Explain to a friend why two investments with the *same* average return can be very different choices, using the word "standard deviation." If they connect spread to risk, this topic is ✅.

---

*Next → 03.3 — Combining Random Variables: Linearity & the √n Effect*
