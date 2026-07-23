# 08.2 — Priors: Encoding What You Knew Before

> The prior gets a bad reputation as the "subjective" part of statistics. In fact it's the ingredient that makes small data behave, and — surprisingly — it's what regularization has been all along.

---

## 1. 🎣 You've already used a prior

A doctor tests a patient for a genuinely rare disease. The test comes back **positive**. Should the doctor take that positive at face value and start treatment?

No — and you knew that from Module 01. The **base rate** of the disease matters enormously; a positive for a rare condition is usually a false alarm. That base rate — "how common is this before I see any test result" — *is a prior.* The prior isn't a Bayesian indulgence bolted on to complicate things; it's the exact quantity that stopped you from panicking over the rare-disease positive. This topic is about choosing priors on purpose, and well.

---

## 2. 💡 What you bring before the data speaks

A **prior** encodes what you believed about a parameter before seeing *this* dataset. Two flavours anchor the range:

- **Informative prior** — genuine prior knowledge. "Conversion rates for pages like this run 2–5%." "Coins are near-fair." It bakes in history and domain expertise.
- **Weak / flat (uninformative) prior** — "I know almost nothing; treat all values as roughly equally plausible." It steps back and lets the data speak; with a fully flat prior, the posterior peak lands right on the maximum-likelihood estimate.

What matters just as much as *where* the prior sits is *how strong* it is. A **strong** prior is a concentrated, confident belief that takes strong evidence to overturn; a **weak** prior yields quickly to data. Priors come from previous experiments, domain knowledge, hard constraints (a probability *must* live in [0, 1]), or deliberate conservatism. In the 3-tails coin, a mild "probably fair" prior keeps the estimate sane; a flat prior would just reproduce maximum likelihood's overconfidence. **The prior is how much skepticism you bring to the table.**

---

## 3. 📐 How the prior blends with data — and *is* regularization

The posterior blends prior and likelihood, and as data accumulates the **likelihood takes over and the prior washes out** — so with enough data a Bayesian estimate converges to the maximum-likelihood one (consistent with Module 06). The prior matters most exactly when data is scarce.

**Worked example — a "probably fair" coin.** With a prior peaked at 0.5 and then $k$ heads in $n$ flips, the posterior mean comes out as a **weighted average** of the prior's 0.5 and the data's $k/n$, where the data's weight grows with $n$:

- Small $n$ → the estimate stays close to **0.5** (the prior dominates — this is why 3 tails doesn't drag it to 0).
- Large $n$ → the estimate approaches **$k/n$** (the data dominates).

**The regularization connection — this is the big one.** Adding a prior that pulls parameters toward zero is *mathematically identical* to **ridge / lasso regularization**. "Penalize large weights" and "believe, a priori, that weights are probably small" are the same statement. Every time you've used weight decay or an L2 penalty to stop a model overfitting, you were doing Bayesian inference with a prior — whether or not anyone called it that.

---

## 4. 🎯 Where priors show up

- **Building on what you already know.** Use last quarter's conversion rate as this experiment's prior and you get faster, steadier estimates than starting blank every time.
- **Regularization — the workhorse.** Ridge, lasso, and weight decay are priors that pull parameters toward zero and prevent overfitting. This is, by a wide margin, the most common practical use of a prior in all of machine learning.
- **Sane estimates from tiny samples.** Rare diseases, brand-new products, cold-start recommendations — a defensible prior rescues you where the data alone is too thin to trust.
- **Sharing strength across groups.** Hierarchical / empirical-Bayes models set each group's prior from the overall population, shrinking a noisy per-store or per-user estimate toward the global average — more reliable than trusting each tiny group on its own.

---

## 5. ⚠️ The classic slips

- **A strong, wrong prior on weak data.** With little data, the prior *drives* the conclusion — so a bad prior yields a confidently wrong answer. Choose priors you can defend out loud.
- **Pretending a flat prior is "no assumption."** Flat *is* an assumption, and sometimes a poor one (a flat prior over an unbounded range can quietly misbehave). "Uninformative" is not "neutral."
- **Using the data twice.** Setting your prior from the very same data you then analyze double-counts the evidence and overstates certainty.
- **Tuning the prior to get the answer you wanted.** That's p-hacking in Bayesian clothing. And conversely — don't over-agonize over the prior when you have *lots* of data, because it washes out anyway.

---

## 6. 🔁 Before you move on

1. What is a prior, and how is a disease's base rate an example of one?
2. Distinguish an informative prior from a weak/flat prior, and say when each is appropriate.
3. Why does a mild "probably fair" prior keep the 3-tails coin estimate sensible?
4. Explain the claim "regularization is a prior."
5. Give one situation where a strong prior would be dangerous, and one where it's exactly what you need.

> ✍️ **Explain it back:** Explain to a friend that using ridge regression to prevent overfitting is secretly "assuming the model's weights are probably small." If they see regularization as a prior, this topic is ✅.

---

*Next → 08.3 — The Posterior & Credible Intervals*
