# 07.4 — A/B Testing in Practice

> Hypothesis testing wearing a business suit. The math you've built is the easy part; the hard part is the discipline — peeking, multiple comparisons, and the gap between "statistically significant" and "actually worth it."

---

## 1. 🎣 It's winning on day 2 — do you ship?

You launch an A/B test. Day 2: the variant is ahead with **p = 0.04**. Ship it and celebrate? Day 5: it's slipped to **p = 0.20**. Now what — kill it, or wait for it to "come back"?

Every one of those instincts — stop when you're ahead, keep waiting for significance — quietly poisons your result. Teams wreck their own experiments this way constantly, and the damage is invisible: the numbers still *look* rigorous. The mathematics of testing is the easy part you've already learned. Using it honestly, in the messy real world, is where data-science careers are actually made.

---

## 2. 💡 A controlled courtroom — and its practical traps

An A/B test is the courtroom logic of 07.1 run as a **controlled experiment**: randomly split users into **control (A)** and **variant (B)**, measure a metric, and test H₀ "no difference" against H₁ "B differs." The magic ingredient is **randomization** — by splitting users at random, you break every confounder by construction, which is what makes the conclusion *causal* rather than merely correlational (the fix for Module 04's correlation-≠-causation problem).

Everything from this module then applies: a p-value or confidence interval decides significance, power dictates the sample size, and the two error types are your risks. But the failures that actually sink experiments are procedural:

- **Peeking / early stopping.** Checking the results over and over and stopping the instant you hit p < 0.05 massively inflates false positives — you've given chance dozens of attempts to cross the line (a sneaky form of multiple testing). **Fix:** fix the sample size and duration *in advance*, or use methods designed for continuous monitoring (sequential testing).
- **Multiple comparisons.** Test enough variants or metrics and some will look "significant" by luck alone. **Fix:** pre-declare one primary metric, or apply a correction.
- **Statistical vs. practical significance.** With huge traffic, a trivial 0.05% lift can be "significant" yet worthless. **Fix:** look at the *effect size* and its business value, not just the p-value.
- **Everyday gotchas:** novelty effects, weekly seasonality (run full business cycles), and assignment bugs where the split isn't actually 50/50 (sample-ratio mismatch).

---

## 3. 📐 The two-proportion test

Randomise N users to A and B; let the difference be $\Delta = \text{rate}_B - \text{rate}_A$. Because the groups are independent, their variances **add** (Module 03/04):

$$\text{SE}_\Delta = \sqrt{\text{SE}_A^{2} + \text{SE}_B^{2}}, \qquad z = \frac{\Delta}{\text{SE}_\Delta}.$$

Then it's the familiar machinery: get a p-value from z, or build a 95% CI on Δ. **Ship when the CI excludes 0 *and* the effect is practically meaningful** — and size the test up front with a power analysis (07.3).

**Worked example.** A converts 200 of 5,000 (4.0%); B converts 240 of 5,000 (4.8%). So $\Delta = 0.8\%$.
$\text{SE}_A = \sqrt{0.04 \cdot 0.96 / 5000} \approx 0.0028$; $\text{SE}_B = \sqrt{0.048 \cdot 0.952 / 5000} \approx 0.0030$; combined $\text{SE}_\Delta \approx \sqrt{0.0028^2 + 0.0030^2} \approx 0.0041$.

$$z = \frac{0.008}{0.0041} \approx 1.95, \qquad \text{95\% CI on } \Delta \approx 0.8\% \pm 0.8\% = (0.0\%,\ 1.6\%).$$

Right on the edge — p ≈ 0.05 and the interval just touches 0. This is *not* a confident win; the honest call is "promising, collect more data," not "ship it."

---

## 4. 🎯 Where A/B testing shows up

- **It's the most common applied-statistics job in tech.** Whole teams and dedicated experimentation platforms exist to run it; "can you design and read an A/B test?" is a standard interview and on-the-job expectation.
- **It's this entire course in one workflow.** Randomization (causality, Module 04), sampling distributions and standard error (Module 05), confidence intervals (Module 06), significance and power (this module) — an A/B test uses all of it at once.
- **Doing it *right* is the hireable skill.** Pre-registered primary metric, power-based sample size, no peeking, and a practical-significance check are what separate a trustworthy experimenter from someone generating false wins — and those decisions steer product bets worth millions.
- **The discipline generalises.** The same traps (peeking, multiplicity, chasing significance over value) appear in model evaluation, feature launches, and any data-driven decision.

---

## 5. ⚠️ The classic slips

- **Peeking and stopping early.** The most common real sin — monitoring continuously and stopping at the first p < 0.05 inflates false positives dramatically. Commit to the sample size beforehand.
- **Many variants/metrics, no correction.** Twenty things tested at α = 0.05 will hand you a "winner" from pure noise. Pre-register the primary metric or correct for multiplicity.
- **Confusing significant with worth it.** A statistically significant 0.05% lift can be a rounding error to the business. Always check the effect size against what matters.
- **Trusting a broken split.** Randomization is what buys you causality; a bug in assignment (sample-ratio mismatch) silently voids the whole test.
- **Reading an underpowered null as "no difference,"** and ignoring seasonality by not running a full cycle.

---

## 6. 🔁 Before you move on

1. What does randomization buy you in an A/B test that a mere correlation can't?
2. Explain why "peeking and stopping at the first p < 0.05" inflates false positives.
3. Give an example where a result is statistically significant but not practically significant.
4. In the worked example, why is z ≈ 1.95 *not* a confident win?
5. List three disciplines that separate a trustworthy A/B test from a misleading one.

> ✍️ **Explain it back:** Explain to a friend why checking an A/B test every day and shipping the moment it hits p < 0.05 is a way to fool yourself — and what to do instead. If they grasp the peeking/multiple-testing problem, this topic — and the Hypothesis Testing module — is ✅.

---

*Module complete. Head to the exercises. Next comes Bayesian Inference — the other great school of statistics, where you update beliefs with a prior instead of testing a null.*
