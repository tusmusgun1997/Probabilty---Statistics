# Module 08 — Bayesian Inference · Problem Set

> **How to use this:** Attempt each problem *closed-book* first, working it through on paper. Solutions are collapsed below each problem; open them only after a genuine attempt.
>
> Difficulty: 🟢 warm-up · 🟡 core · 🔴 stretch

---

## Part A — Updating beliefs (topic 08.1)

**A1** 🟢 Name the three ingredients of Bayesian inference and write the slogan that connects them.

<details><summary>Solution</summary>

**Prior** (belief before data), **likelihood** (how well each parameter explains the data), **posterior** (updated belief). Slogan: **posterior ∝ prior × likelihood**.
</details>

**A2** 🟡 A coin is flipped 3 times and lands tails all 3 times. Explain why the Bayesian estimate of P(heads) stays sensible while the maximum-likelihood estimate does not.

<details><summary>Solution</summary>

Maximum likelihood trusts the data completely and returns $\hat{p} = 0/3 = 0$ — "heads is impossible," clearly absurd from 3 flips. The Bayesian starts with a prior ("coins are probably near fair"), and 3 tails is far too little data to overturn it. The posterior shifts *slightly* toward tails but keeps substantial weight near 0.5 and never rules heads out. The prior supplies the built-in skepticism that maximum likelihood lacks.
</details>

**A3** 🟡 Why is refusing to specify a prior not the same as making "no assumption"?

<details><summary>Solution</summary>

Refusing to state a prior doesn't remove it — it implicitly adopts a **flat prior** (all values equally plausible), which is itself an assumption and often a poor one. Being explicit about the prior makes the assumption visible and debatable; leaving it implicit just hides it. (Same lesson as Module 01: ignoring the base rate is choosing to assume one.)
</details>

---

## Part B — Priors (topic 08.2)

**B1** 🟢 Classify each as an informative or a weak/flat prior: (a) "conversion rates for pages like this are almost always 2–5%"; (b) "the rate could be anything from 0% to 100%, I have no idea."

<details><summary>Solution</summary>

(a) **Informative** — a concentrated belief built from prior knowledge. (b) **Weak / flat (uninformative)** — spread out, letting the data speak; with a fully flat prior the posterior peak matches the maximum-likelihood estimate.
</details>

**B2** 🟡 Explain the claim "ridge regression is really a prior."

<details><summary>Solution</summary>

Ridge regression adds a penalty that pulls model weights toward zero. Mathematically, that penalty is *identical* to doing Bayesian inference with a prior belief that the weights are **probably small** (centred at zero). "Penalize large weights" and "assume weights are near zero a priori" are the same statement — so regularization is Bayesian inference with a shrinkage prior, whether or not it's called that.
</details>

**B3** 🔴 With a "probably fair" prior peaked at 0.5, how does the posterior mean of a coin's bias change as you collect more data? Describe the small-n and large-n limits.

<details><summary>Solution</summary>

The posterior mean is a **weighted average** of the prior's 0.5 and the data's observed proportion $k/n$, with the data's weight growing as $n$ grows. **Small n:** the prior dominates, so the estimate stays near 0.5 (which is why 3 tails doesn't drag it to 0). **Large n:** the data dominates, so the estimate approaches $k/n$ — the maximum-likelihood answer. The prior matters most exactly when data is scarce, and washes out with plenty of data.
</details>

---

## Part C — Posterior & credible intervals (topic 08.3)

**C1** 🟢 A 95% credible interval for a conversion rate is (0.03, 0.07). State, correctly, what this means.

<details><summary>Solution</summary>

Given the prior and the data, there is a **95% probability that the true conversion rate lies between 3% and 7%.** (This is the intuitive statement a *confidence* interval is not allowed to make.)
</details>

**C2** 🟡 What is the MAP estimate, and how does it relate to the MLE from Module 06?

<details><summary>Solution</summary>

MAP (maximum a posteriori) is the value that **maximizes the posterior** — the peak of the belief curve. Since posterior ∝ likelihood × prior, MAP maximizes *likelihood × prior*, i.e. it's **MLE with a prior attached**. With a flat prior the prior term is constant, so MAP and MLE coincide.
</details>

**C3** 🔴 A colleague computes a 95% confidence interval of (0.40, 0.50) and says "there's a 95% probability the true value is between 0.40 and 0.50." Is that reading valid for a confidence interval? For a credible interval? Explain the difference.

<details><summary>Solution</summary>

**Not valid for a confidence interval.** There, the parameter is fixed and the 95% describes the *procedure's* long-run coverage — this particular interval either contains the truth or doesn't. The reading **is** valid for a **credible** interval, because the Bayesian treats the parameter as having a belief distribution, so a probability statement about it is meaningful. Same-sounding sentence; only the Bayesian interval earns it. (Numerically the two intervals are often close with lots of data, but their *meanings* differ.)
</details>

---

## Part D — Bayesian vs frequentist (topic 08.4)

**D1** 🟢 In one sentence each, state the core question the frequentist and Bayesian frameworks answer.

<details><summary>Solution</summary>

**Frequentist:** "How would my procedure behave if I repeated the experiment many times?" **Bayesian:** "Given my prior and this data, what should I believe now?"
</details>

**D2** 🟡 For each, say whether you'd lean frequentist or Bayesian, and why: (a) a large-scale web A/B test with millions of users and a stakeholder who expects a p-value; (b) estimating the failure rate of a brand-new part from just 12 tests, with solid engineering knowledge of similar parts.

<details><summary>Solution</summary>

(a) **Frequentist** — plenty of data (so a prior would wash out anyway) and stakeholders expecting standard p-values/confidence intervals. (b) **Bayesian** — tiny sample where maximum likelihood would be unstable, plus genuine prior knowledge from similar parts that a prior can encode to produce a sensible estimate.
</details>

**D3** 🔴 A team says "we switched to Bayesian A/B testing, so we can peek at the results whenever we want with no penalty." What's the kernel of truth, and what's the overstatement?

<details><summary>Solution</summary>

**Kernel of truth:** Bayesian methods don't share the frequentist p-value's specific "peeking inflates the false-positive rate" problem in the same way — continuous monitoring is less punishing, since you're reporting a posterior belief rather than a fixed-α reject/accept decision. **Overstatement:** it's not a free pass. A poorly chosen or gamed prior can bias conclusions, stopping rules and decision thresholds still need care, and multiplicity across many metrics still inflates false wins. No framework substitutes for honest experimental discipline.
</details>

---

## ✅ Self-check before advancing to Phase V

From memory, you should be able to:
- State "posterior ∝ prior × likelihood" and explain how it fixes maximum likelihood's overconfidence on small data.
- Explain what a prior encodes, distinguish informative from flat, and connect priors to regularization.
- Read a credible interval correctly, and explain why it — but not a confidence interval — permits a probability statement about the parameter.
- Compare the frequentist and Bayesian questions and pick the right tool for a given problem without being dogmatic.

Anything shaky → revisit that topic. Bayesian thinking closes the loop opened in Module 00 and underpins a huge amount of modern, uncertainty-aware machine learning.
