# 08.1 — The Bayesian Idea: Updating Beliefs

> A different way to do inference — and a fix for maximum likelihood's worst habit. Instead of pinpointing one "best" parameter, you carry a whole distribution of belief and let data *reshape* it. It's the Bayes' theorem you already know, aimed at parameters.

---

## 1. 🎣 The coin that "can't" land heads

Back in Module 06, maximum likelihood flipped a coin **3 times, saw 3 tails**, and confidently declared the probability of heads to be **exactly 0** — heads is *impossible*. That's absurd. You knew, *before* touching the coin, that coins are roughly fair; three flips shouldn't erase a lifetime of knowing what coins are like.

Maximum likelihood threw away everything you knew beforehand and trusted three data points completely. What if, instead, you could **start from what you already believed and let the data update it** — nudging your belief rather than replacing it? That is the Bayesian move. And it's not a new theorem: it's the same Bayes' rule from Module 01, now pointed at an unknown *parameter* instead of a disease.

---

## 2. 💡 Prior, times likelihood, gives posterior

The core shift is this: a Bayesian doesn't treat the unknown parameter as a single fixed number to hunt down. They treat it as a **whole distribution of belief** — not "I'm unsure of one value" but "here's a spread of plausible values, each with a weight." Inference then has three ingredients:

- **Prior** — what you believed about the parameter *before* this data ("the coin is probably near fair").
- **Likelihood** — how well each candidate value explains the data you actually saw (the maximum-likelihood ingredient from Module 06).
- **Posterior** — your **updated** belief after combining them.

The whole method fits in one slogan:

> **posterior ∝ prior × likelihood.**

Data doesn't delete your prior; it **reweights** it. Strong data overwhelms a weak prior; weak data barely budges a strong one. 🖼️ *Picture:* start with a belief curve over the coin's bias peaked at 0.5, multiply it by what "3 tails" supports (low values), and get a new curve — leaning a bit toward tails, but nowhere near 0, with heads still very much alive. Sane, where maximum likelihood was reckless.

---

## 3. 📐 Bayes' theorem, aimed at a parameter

For a parameter $\theta$ and observed data $D$:

$$P(\theta \mid D) = \frac{P(D \mid \theta)\, P(\theta)}{P(D)} \ \propto\ \underbrace{P(D \mid \theta)}_{\text{likelihood}}\ \underbrace{P(\theta)}_{\text{prior}}.$$

It's *exactly* Module 01's Bayes' theorem with a parameter $\theta$ in place of a hypothesis: $P(\theta)$ is the **prior**, $P(D \mid \theta)$ the **likelihood**, $P(\theta \mid D)$ the **posterior**, and $P(D)$ a normalizing constant that makes the posterior a proper distribution (which is why we usually just write $\propto$ and drop it). The crucial point: **the answer is the whole posterior distribution**, not a single number.

**Worked example — the 3-tails coin.** Start with a prior gently peaked at 0.5 ("probably fair"). The likelihood from 3 tails pushes toward low values of $p$. Multiply them: the posterior is a *compromise* — a curve most plausible somewhere around 0.3–0.4, still carrying real weight near 0.5, and assigning heads a perfectly nonzero chance. Compare the two answers: maximum likelihood gave a single point, **0**; the Bayesian gives a **full curve of belief** that never does anything so silly.

---

## 4. 🎯 Where updating beliefs shows up

- **Injecting knowledge instead of starting from scratch.** A strong prior from last quarter's data or domain expertise makes a new experiment faster and more stable — you build on what you knew rather than relearning it every time.
- **The honest tool for small data.** Where maximum likelihood overfits (rare diseases, new products, cold-start), a sensible prior keeps estimates reasonable — exactly the 3-tails fix, at scale.
- **It powers modern probabilistic methods.** Bayesian A/B testing, Bayesian optimization for hyperparameter tuning, probabilistic programming, and uncertainty estimates in machine learning all run on prior → posterior updating.
- **It mirrors how reasoning actually works.** Humans update beliefs as evidence arrives; Bayes is that process made precise — and it connects straight to regularization (next topics).

---

## 5. ⚠️ The classic slips

- **Thinking the prior is "cheating."** Every analysis has assumptions; the Bayesian just makes them *explicit and auditable*. Refusing to state a prior doesn't remove it — it silently picks a flat one, often the least defensible choice (the same lesson as Module 01's base rates).
- **Expecting a single answer.** The posterior is a *distribution*. Collapsing it to one number is sometimes necessary but always throws away the uncertainty that was the point.
- **Letting a strong wrong prior dominate weak data.** If you barely have data, a bad prior drives the conclusion. Priors must be defensible.
- **Confusing the posterior with the likelihood.** $P(\theta \mid D)$ (what you believe now) is not $P(D \mid \theta)$ (how well a value explains the data) — the transposed-conditional trap from Module 01, one more time.

---

## 6. 🔁 Before you move on

1. Name the three ingredients of Bayesian inference and the slogan connecting them.
2. How does the Bayesian approach fix maximum likelihood's "3 tails → p = 0" problem?
3. In what sense is the "answer" of a Bayesian analysis a distribution rather than a number?
4. Why is refusing to choose a prior not the same as having no assumptions?
5. Which two probabilities must you not confuse, and what does each mean?

> ✍️ **Explain it back:** Explain to a friend why seeing 3 tails in a row shouldn't make you believe a coin never lands heads — and how "starting from what you already knew and updating" captures that. If they grasp prior × likelihood → posterior, this topic is ✅.

---

*Next → 08.2 — Priors: Encoding What You Knew Before*
