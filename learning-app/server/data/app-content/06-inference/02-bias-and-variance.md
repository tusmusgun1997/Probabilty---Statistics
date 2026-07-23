# 06.2 — Bias & Variance: What Makes an Estimator Good

> Two ways an estimate can fail, and they're completely different. Naming them — and understanding the tension between them — is not just how you judge an estimator; it's the single deepest idea in all of machine learning.

---

## 1. 🎣 Two archers

Archer A puts every arrow in a tight little cluster — impressively consistent — but the cluster sits in the top-left corner, nowhere near the bullseye. Archer B's arrows scatter all over the target, but if you find their average position, it's dead centre on the bullseye.

Who's the better shot? The honest answer is *neither, simply* — they fail in **opposite** ways. Archer A is consistent but wrong; Archer B is right on average but unreliable. Those two failure modes have names, and once you can see them, you can judge any estimator — and diagnose any machine-learning model — at a glance.

---

## 2. 💡 Systematically off vs. all over the place

Two independent things can go wrong with an estimator:

- **Bias** — it's **systematically off**, missing the truth in a consistent direction on average. That's **Archer A**: tight, but centred away from the bullseye.
- **Variance** — it's **unstable**, swinging a lot from one sample to the next. That's **Archer B**: centred on target, but scattered.

The ideal estimator is both **unbiased** (its sampling distribution centres on the truth) and **low-variance** (that distribution is narrow). Total accuracy needs both — being right *on average* is useless if any single estimate is wildly off, and being consistent is useless if you're consistently wrong.

🖼️ *The dartboard picture:* **bias** is how far the *centre* of your cluster sits from the bullseye; **variance** is how *spread out* the cluster is. Four combinations: low-bias/low-variance (ideal), low-bias/high-variance (Archer B), high-bias/low-variance (Archer A), and high-both (hopeless).

And here's the twist that makes this the central problem of machine learning: you often **can't minimise both at once.** Push an estimator (or a model) to reduce one and the other tends to rise. Managing that tension — the **bias–variance tradeoff** — is the whole game.

---

## 3. 📐 The error decomposition, and the n−1 puzzle

With true parameter $\theta$ and estimator $\hat{\theta}$:

$$\text{Bias}(\hat{\theta}) = E[\hat{\theta}] - \theta \quad(\text{0 means unbiased}), \qquad \text{Variance}(\hat{\theta}) = \text{spread of its sampling distribution}.$$

The total error combines them cleanly. The **mean squared error** decomposes into exactly two pieces:

$$\text{MSE}(\hat{\theta}) = E\big[(\hat{\theta} - \theta)^2\big] = \text{Bias}^2 + \text{Variance}.$$

An estimator is **consistent** if, as $n \to \infty$, both shrink and $\hat{\theta} \to \theta$ — which the sample mean does, by the LLN.

**Worked example — why you divide by n−1.** The sample mean is unbiased ($E[\bar{X}] = \mu$). But the sample *variance* has a famous subtlety: if you measure spread around the *sample* mean and divide by $n$, you get a value that's **biased low** — because the sample mean is itself pulled toward the data, so deviations from it are a little too small. Dividing by $n-1$ instead of $n$ (Bessel's correction) exactly cancels that bias. It's the most common real-world example of *detecting and removing bias* from an estimator, and it's why calculators have two "standard deviation" buttons.

**The deeper lesson:** unbiased is not always best. A slightly **biased** estimator with **much lower variance** can have a *smaller* MSE than an unbiased one — deliberately accepting a little bias to buy a lot of stability. That trade has a name in machine learning: **regularization.**

---

## 4. 🎯 Where bias & variance show up

- **It's the framework for all model fitting.** A too-simple model **underfits** — high bias (Archer A): it misses the real pattern the same way every time. A too-complex model **overfits** — high variance (Archer B): it chases the noise and swings wildly between datasets. Good modelling is finding the sweet spot between them.
- **Regularization is the tradeoff, on purpose.** Techniques like ridge/lasso and dropout *add bias* to *cut variance*, lowering total error — the "biased-but-lower-MSE" idea made into an everyday tool.
- **It explains train-vs-test gaps.** "Great on training data, terrible on new data" is the signature of high variance. "Mediocre everywhere" is high bias. The diagnosis dictates the fix (more data and simpler models cut variance; richer models cut bias).
- **Ensembles cut variance;** averaging many high-variance models (random forests) tames the scatter — the √n effect from Module 03, aimed at variance.

---

## 5. ⚠️ The classic slips

- **Worshipping unbiasedness.** Minimising bias at all costs can leave you with huge variance and worse total error. Often a biased, stable estimator wins on MSE — the entire justification for regularization.
- **Confusing the two failures.** Bias is *systematic* and does **not** shrink with more data; variance is *random* and does. Collecting more data fixes variance, never bias — the same lesson as Module 03, now central.
- **Mistaking precision for accuracy.** Low variance means *consistent*, not *correct*. Archer A (and Module 05's tight-but-biased poll) is precise and wrong. A confident, repeatable answer can still be systematically off.
- **Forgetting a biased sample poisons everything.** No estimator formula can undo a sample that was collected wrong — that shows up as irreducible bias.

---

## 6. 🔁 Before you move on

1. Define bias and variance for an estimator, and match each to one of the two archers.
2. Write the MSE decomposition. Why does it mean an unbiased estimator isn't automatically the best?
3. Why is the sample variance divided by n−1 instead of n?
4. Translate "underfitting" and "overfitting" into the language of bias and variance.
5. Which of the two can be reduced by collecting more data, and which cannot?

> ✍️ **Explain it back:** Explain to a friend why a model that scores 99% on its training data but 60% on new data is failing — using the words bias and variance. If they identify it as high variance (overfitting) and know more data helps, this topic is ✅.

---

*Next → 06.3 — Maximum Likelihood Estimation*
