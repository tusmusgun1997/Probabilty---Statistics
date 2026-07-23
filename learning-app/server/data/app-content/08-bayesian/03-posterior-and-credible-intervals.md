# 08.3 — The Posterior & Credible Intervals

> The posterior distribution is the entire answer, and reading a range off it gives you the interval your gut always wanted — the one where "95% probability the truth is in here" is finally, exactly, correct.

---

## 1. 🎣 The interval you actually wanted

Remember the headache from Module 06? You were forbidden from saying *"there's a 95% probability the true value lies in this confidence interval."* The 95% was about the long-run *procedure*, not your particular interval — and almost everyone got it wrong because the wrong reading is the one that feels natural.

The Bayesian approach hands you an interval where that natural statement is **exactly right**. It's called a **credible interval**, and it's the answer your intuition was reaching for the whole time. Here's why the Bayesian framework is allowed to say it when the frequentist one wasn't.

---

## 2. 💡 Read anything you want off the posterior

In Bayesian inference the **posterior distribution is the deliverable** — it shows every plausible parameter value with its belief-weight. Once you have it, every summary you might want is just a reading off that curve:

- **A single best guess**, if you're forced to collapse to one number: the **posterior mean** (the balance point of the belief curve) or the **MAP** — *maximum a posteriori*, the posterior's peak, i.e. the single most probable value.
- **A credible interval** — a range holding, say, 95% of the posterior's probability. And the honest, intuitive reading is valid:

> **"Given my prior and the data, there's a 95% probability the true value lies in this interval."**

Why is this allowed here but not for a confidence interval? Because in the Bayesian world the parameter genuinely *has* a probability distribution — your belief about it — so you're permitted to make probability statements about it. The frequentist treats the parameter as a fixed unknown with no distribution, so "95% probability it's in here" was meaningless there. Same-sounding sentence, and only one framework earns the right to say it.

This is the clean resolution of Module 06's most confusing point: the interval you *wanted* is the **credible** interval; the interval you *got and misread* was the **confidence** interval.

---

## 3. 📐 MAP, credible intervals, and a link back to MLE

The posterior $P(\theta \mid D)$ summarizes belief after the data. Two summaries:

- **MAP estimate:** $\hat{\theta}_{\text{MAP}} = \arg\max_\theta P(\theta \mid D)$ — the peak of the posterior. Since posterior $\propto$ likelihood $\times$ prior, **MAP is just MLE with a prior attached** (maximize likelihood × prior instead of likelihood alone). With a *flat* prior, MAP and MLE coincide — the Bayesian and frequentist point estimates meet.
- **Credible interval:** a range $[a, b]$ with $P(a \le \theta \le b \mid D) = 0.95$ — often the central 95% of the posterior.

**Worked example.** Suppose after some flips the coin's posterior is peaked around 0.4. A 95% credible interval might be **(0.28, 0.53)**, read as: *"there's a 95% probability the coin's bias is between 0.28 and 0.53, given my prior and the data."* Clean and direct — no talk of hypothetical repeated experiments.

One practical note: with **lots of data** (and a weak prior), credible and confidence intervals come out **numerically almost identical** — they differ most, in both value and meaning, when data is scarce or the prior is strong. So the philosophical gap is loudest exactly when data is quietest.

---

## 4. 🎯 Where the posterior & credible intervals show up

- **Reporting uncertainty that stakeholders actually understand.** "95% probability the lift is between 1% and 6%" lands far better than the contortions required to state a confidence interval correctly.
- **Bayesian A/B testing.** Instead of a p-value, you report **"P(B is better than A) = 0.97"** or the **expected loss** of each choice — direct probability statements a decision-maker can act on immediately.
- **The full picture, not just a point.** The posterior reveals whether belief is tight or wide, skewed, or even bimodal — structure that a lone point estimate plus a symmetric CI would hide.
- **Honest uncertainty in ML.** Bayesian models, Gaussian processes, and Bayesian neural nets output posteriors and credible intervals — increasingly essential where a model's *confidence* matters for safety and decisions, not just its prediction.

---

## 5. ⚠️ The classic slips

- **Confusing credible with confidence.** A **credible** interval is a probability statement about the *parameter* (Bayesian); a **confidence** interval is a statement about the *procedure* (frequentist). They look alike and mean different things — mixing them up is the single most common error bridging the two schools.
- **Trusting a credible interval built on a bad prior.** The interval inherits the prior's biases; a confidently wrong prior gives a confidently wrong interval.
- **Over-relying on MAP.** The peak can badly misrepresent a skewed or multimodal posterior. When the shape is complex, report the distribution, not just its summit.
- **Collapsing the posterior to one number.** A point estimate discards the uncertainty that was the entire reason to go Bayesian.

---

## 6. 🔁 Before you move on

1. What is a credible interval, and what statement does it let you make that a confidence interval does not?
2. Why is the Bayesian framework *allowed* to make a probability statement about the parameter?
3. What is the MAP estimate, and how does it relate to the MLE?
4. Interpret in plain words: "a 95% credible interval for the lift is (1%, 6%)."
5. When do credible and confidence intervals nearly coincide, and when do they diverge most?

> ✍️ **Explain it back:** Explain to a friend the difference between "95% of intervals built this way capture the truth" (confidence) and "95% probability the truth is in *this* interval" (credible) — and why only the Bayesian earns the second. If they keep the two straight, this topic is ✅.

---

*Next → 08.4 — Bayesian vs Frequentist: When to Use Which*
