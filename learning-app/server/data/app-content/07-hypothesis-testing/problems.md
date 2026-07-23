# Module 07 — Hypothesis Testing · Problem Set

> **How to use this:** Attempt each problem *closed-book* first, working it through on paper. Solutions are collapsed below each problem; open them only after a genuine attempt.
>
> Difficulty: 🟢 warm-up · 🟡 core · 🔴 stretch

---

## Part A — The logic of testing (topic 07.1)

**A1** 🟢 A team wants to show a new recommendation algorithm increases average order value. State the null and alternative hypotheses.

<details><summary>Solution</summary>

**H₀ (null):** the new algorithm makes no difference — average order value is the same as before. **H₁ (alternative):** the new algorithm changes (increases) average order value. The test assumes H₀ and looks for evidence strong enough to reject it.
</details>

**A2** 🟡 A test of a new drug returns "not statistically significant." A headline reports "Drug proven to have no effect." What's wrong with the headline?

<details><summary>Solution</summary>

"Fail to reject H₀" is **not** "prove H₀ true." The study simply lacked sufficient evidence of an effect — which can happen either because there is no effect *or* because the study was too small to detect one (low power). "Not guilty" is not "innocent." The headline overclaims.
</details>

**A3** 🟡 Why does a "statistically significant" result from a confounded (non-randomized) study still fail to establish causation?

<details><summary>Solution</summary>

A hypothesis test only rules out **chance** — it says the pattern is unlikely to be random noise. It says nothing about **bias or confounding**. If a lurking third variable drives the result (Module 04), the effect is real-but-not-causal, and significance can't fix that. Only proper randomization breaks confounders.
</details>

---

## Part B — p-values (topic 07.2)

**B1** 🟢 A study reports p = 0.5. In correct language, what does that mean, and would you reject the null at α = 0.05?

<details><summary>Solution</summary>

If the null were true, data at least as extreme as observed would occur about **50% of the time** by chance — completely unremarkable. Since 0.5 > 0.05, you **fail to reject** the null: no evidence of an effect.
</details>

**B2** 🟡 A colleague says "p = 0.03 means there's a 3% chance the null hypothesis is true." Correct them precisely.

<details><summary>Solution</summary>

Wrong. The p-value is $P(\text{data this extreme} \mid H_0 \text{ true})$ — it *assumes* the null and measures how surprising the data would be under it. It is **not** $P(H_0 \text{ true} \mid \text{data})$. The p-value says nothing directly about the probability the null is true (getting that would require a prior — Bayes, next module). Correct reading: "if nothing were going on, data this extreme would occur only 3% of the time."
</details>

**B3** 🔴 With 10 million users, an A/B test finds a 0.01% conversion lift with p = 0.001. Is this a big deal? Explain the significance-vs-magnitude distinction.

<details><summary>Solution</summary>

Statistically, yes — p = 0.001 means the lift is almost certainly not exactly zero. But **practically, probably not**: 0.01% is a rounding error that may not justify the cost of the change. A tiny effect becomes "significant" with a large enough sample because the standard error shrinks like 1/√n, so *any* nonzero effect eventually clears the threshold. Significance tells you an effect is **real**, never that it's **large enough to matter** — always check the effect size against business value.
</details>

---

## Part C — Errors & power (topic 07.3)

**C1** 🟢 Match to Type I or Type II error: (a) concluding a drug works when it actually doesn't; (b) concluding a drug doesn't work when it actually does.

<details><summary>Solution</summary>

(a) **Type I error** (false positive) — rejecting a true null. (b) **Type II error** (false negative) — failing to reject a false null. Power = 1 − P(Type II) is the chance of avoiding (b) when the drug really works.
</details>

**C2** 🟡 An A/B test runs for a week and finds no significant difference. Give two very different explanations, and say what number you'd want to know to distinguish them.

<details><summary>Solution</summary>

Either (1) there really is **no effect**, or (2) there **is** an effect but the test was **underpowered** (too few users) to detect it. To distinguish, you'd want the test's **power** for the smallest effect worth caring about — if power was low (say 0.3), the null result is uninformative; if power was high (say 0.9), a true meaningful effect probably would have shown up.
</details>

**C3** 🔴 A data scientist runs 20 independent A/B tests, all on features that genuinely do nothing, each at α = 0.05. Roughly how many "significant" results should they expect, and what's the lesson?

<details><summary>Solution</summary>

Each true-null test has a 5% chance of a false positive, so across 20 tests they expect about $20 \times 0.05 = \mathbf{1}$ false "discovery" — even though *every* feature is useless. (The chance of *at least one* false positive is $1 - 0.95^{20} \approx 64\%$.) The lesson: **multiple testing inflates false positives**; running many comparisons without correction manufactures significance from pure noise. Pre-register a primary metric or apply a multiplicity correction.
</details>

---

## Part D — A/B testing in practice (topic 07.4)

**D1** 🟢 Why is randomly assigning users to A and B essential — what would happen if you instead gave version B to users who opted in?

<details><summary>Solution</summary>

Randomization makes the two groups comparable on *everything* (measured and unmeasured), so a difference in the metric can be attributed to the version — that's what makes the result **causal**. If users self-selected into B, those users might differ systematically (more engaged, more tech-savvy), confounding the comparison: you'd measure the *kind of user*, not the *effect of B*.
</details>

**D2** 🟡 An experimenter checks their dashboard every hour and plans to stop as soon as p < 0.05. Why is this a problem, and what should they do instead?

<details><summary>Solution</summary>

Repeatedly peeking and stopping at the first p < 0.05 is a hidden form of **multiple testing** — each look is another chance for random noise to cross the threshold, so the true false-positive rate is far above 5%. Fixes: **decide the sample size / duration in advance** and only evaluate at the end, or use a **sequential testing** method designed for continuous monitoring.
</details>

**D3** 🔴 Variant A converts 150/3000; variant B converts 180/3000. Estimate the lift and, roughly, whether it's a confident win. (Use SE of each proportion, then combine.)

<details><summary>Solution</summary>

Rates: A = 0.050, B = 0.060, so $\Delta = 0.010$ (1 percentage point). Standard errors: $\text{SE}_A = \sqrt{0.05 \cdot 0.95 / 3000} \approx 0.00398$; $\text{SE}_B = \sqrt{0.06 \cdot 0.94 / 3000} \approx 0.00434$; combined $\text{SE}_\Delta = \sqrt{0.00398^2 + 0.00434^2} \approx 0.0059$.
$z = 0.010 / 0.0059 \approx 1.7$, and the 95% CI on Δ is about $0.010 \pm 1.96(0.0059) = 0.010 \pm 0.0116 = (-0.0016,\ 0.0216)$. The interval **includes 0**, so this is **not** a confident win yet — the improvement is promising but within the noise. Collect more data.
</details>

---

## ✅ Self-check before advancing to Bayesian Inference

From memory, you should be able to:
- Set up H₀ and H₁ and explain the "assume the null, look for surprise" logic.
- State the *correct* definition of a p-value and reject two common misreadings.
- Define Type I / Type II errors and power, and explain why an underpowered null result is uninformative.
- Run and read a simple two-proportion A/B test, and name the practical traps (peeking, multiplicity, practical vs statistical significance).

Anything shaky → revisit that topic. Hypothesis testing and A/B experiments are the most common — and most commonly botched — statistical tasks in the entire industry.
