# Module 06 — Inference & Estimation · Problem Set

> **How to use this:** Attempt each problem *closed-book* first, working it through on paper. Solutions are collapsed below each problem; open them only after a genuine attempt.
>
> Difficulty: 🟢 warm-up · 🟡 core · 🔴 stretch

---

## Part A — Estimators (topic 06.1)

**A1** 🟢 You observe 18 clicks from 200 ad impressions. Give a natural estimator of the true click-through rate and its value. Is this number the truth?

<details><summary>Solution</summary>

The sample proportion: $\hat{p} = 18/200 = \mathbf{0.09}$ (9%). It is **not** the truth — it's an *estimate*, one draw from a sampling distribution centred on the true rate, and a different 200 impressions would give a different number.
</details>

**A2** 🟡 Explain the difference between a *parameter*, an *estimator*, and an *estimate*, using the click-through example.

<details><summary>Solution</summary>

- **Parameter:** the true, fixed, unknown click-through rate $p$ of the ad.
- **Estimator:** the *rule* "take clicks ÷ impressions" — a random variable, since it depends on which impressions you happened to sample.
- **Estimate:** the specific number it produced this time, 0.09.
</details>

**A3** 🟡 Why is an estimator considered a random variable, and what does Module 05 tell us about the sample-proportion estimator's centre and spread?

<details><summary>Solution</summary>

It's random because it's computed from a *random sample* — a different sample yields a different value, so it has a **sampling distribution**. Module 05 tells us that distribution is centred on the true $p$ (unbiased) with standard error $\sqrt{p(1-p)/n}$, and is approximately Normal by the CLT.
</details>

---

## Part B — Bias & variance (topic 06.2)

**B1** 🟢 Match each archer to bias or variance: Archer A's arrows are tightly clustered but in the corner; Archer B's are scattered but centred on the bullseye.

<details><summary>Solution</summary>

Archer A = **high bias, low variance** (consistent but systematically off). Archer B = **low bias, high variance** (right on average but unstable). The ideal shooter is low on both.
</details>

**B2** 🟡 An estimator has bias 2 and variance 9. What is its mean squared error? Could a *biased* estimator ever beat an unbiased one on this measure?

<details><summary>Solution</summary>

$\text{MSE} = \text{Bias}^2 + \text{Variance} = 2^2 + 9 = \mathbf{13}$. Yes — a biased estimator with small enough variance can have a *lower* MSE than an unbiased one with large variance. Trading a little bias for a big drop in variance is exactly what **regularization** does.
</details>

**B3** 🔴 A model gets 98% accuracy on its training data but 64% on new data. Diagnose the problem in bias/variance terms, and name two fixes.

<details><summary>Solution</summary>

The huge train–test gap is the signature of **high variance (overfitting)** — the model has memorised noise in the training set and doesn't generalise. Fixes: **collect more data** (variance shrinks with n), **simplify the model / add regularization** (accept a little bias to cut variance), or use techniques like ensembling or cross-validation. More data helps here because the problem is variance, not bias.
</details>

---

## Part C — Maximum likelihood (topic 06.3)

**C1** 🟢 A coin is flipped 20 times and lands heads 13 times. What is the maximum likelihood estimate of the probability of heads?

<details><summary>Solution</summary>

$\hat{p} = k/n = 13/20 = \mathbf{0.65}$. The MLE of a coin's bias is just the observed proportion of heads.
</details>

**C2** 🟡 In one sentence, what does maximum likelihood estimation choose? Then explain why the likelihood is *not* the same as "the probability that p = 0.65."

<details><summary>Solution</summary>

MLE chooses the parameter value that makes the **observed data most probable**. The likelihood is $P(\text{data} \mid p)$ — the probability of the data given a candidate p — **not** $P(p \mid \text{data})$, the probability of p given the data. Turning the first into the second requires a prior (Bayes, Module 01); MLE deliberately uses only the likelihood.
</details>

**C3** 🔴 A new coin is flipped 3 times and lands tails all 3 times. What does the MLE say for the probability of heads, and why is that answer a red flag for using MLE on small samples?

<details><summary>Solution</summary>

$\hat{p} = 0/3 = \mathbf{0}$ — the MLE declares heads *impossible*. That's clearly too extreme: three flips is far too little to rule heads out entirely. It happens because MLE trusts the sample completely, with no built-in skepticism. The fix is to bring in prior belief (a prior / regularization), which pulls the estimate away from 0 — the motivation for the Bayesian tools in the next module.
</details>

---

## Part D — Confidence intervals (topic 06.4)

**D1** 🟢 A sample mean is 50 with a standard error of 4. Give an approximate 95% confidence interval.

<details><summary>Solution</summary>

$50 \pm 1.96(4) \approx 50 \pm 7.8 = \mathbf{(42.2,\ 57.8)}$. (Using the round "± 2·SE" gives (42, 58).)
</details>

**D2** 🟡 A 95% confidence interval for a conversion rate comes out as (0.03, 0.07). A colleague says "so there's a 95% chance the true rate is between 3% and 7%." Correct them.

<details><summary>Solution</summary>

The true rate is a **fixed** number — it's either in (0.03, 0.07) or it isn't, with no probability attached to *this* interval. The 95% describes the **procedure**: if you repeated the sample-and-build-interval process many times, about 95% of the intervals produced would contain the true rate. It's the method's long-run hit rate, not a probability about this one interval. (The statement they *want* to make is valid for a Bayesian credible interval, which uses a prior.)
</details>

**D3** 🔴 Two A/B variants report 95% CIs for their conversion lift: Variant X is (−1%, +5%) and Variant Y is (+2%, +8%). Which, if either, can you confidently call a real improvement, and why?

<details><summary>Solution</summary>

**Variant Y** — its entire interval lies above 0 (from +2% to +8%), so the no-effect value of 0 is excluded, and you can confidently claim a real positive lift. **Variant X**'s interval **includes 0** (it runs from −1% to +5%), so its result is consistent with no effect at all — you cannot yet claim it helps. "Does the CI exclude the no-effect value?" is the decision rule.
</details>

---

## ✅ Self-check before advancing to Hypothesis Testing

From memory, you should be able to:
- Distinguish parameter / estimator / estimate, and explain why an estimate is random.
- Define bias and variance, decompose MSE into both, and explain why unbiased isn't always best.
- State what maximum likelihood chooses, compute the coin MLE, and explain why it isn't the posterior.
- Build a confidence interval and state its meaning *correctly* — the 95% is about the procedure, not the single interval.

Anything shaky → revisit that topic. Estimation and its uncertainty are the ground floor of everything in applied statistics and machine learning.
