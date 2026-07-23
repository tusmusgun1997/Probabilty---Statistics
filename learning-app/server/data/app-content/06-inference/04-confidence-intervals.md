# 06.4 — Confidence Intervals

> The rigorous version of Module 05's margin of error — and the most misinterpreted tool in all of statistics. Getting its meaning exactly right is a genuine mark of statistical literacy.

---

## 1. 🎣 What does "95% confident" actually mean?

Module 05 handed you "estimate ± 2·SE" and a rough 95%. Now the sharp question: what does that **95%** really mean?

Here's a sentence almost everyone says — including many working scientists — that is subtly, importantly *wrong*: *"I'm 95% confident the true value lies in this interval."* It sounds obviously correct. It isn't quite. Untangling why is one of those moments that separates people who *use* statistics from people who *understand* it — and it changes how you read every poll and every experiment for the rest of your career.

---

## 2. 💡 The 95% describes the method, not your interval

A **confidence interval (CI)** is a range built around your estimate, designed to capture the true parameter with a stated reliability. The trick is *what the reliability refers to.*

The true parameter is **fixed** — it's a specific unknown number, not something random. Your *interval*, on the other hand, is random: it was built from a random sample, so a different sample would have produced a different interval. So the "95%" cannot be a probability about the fixed truth. It's a property of the **procedure**:

> If you repeated the whole "draw a sample, build an interval" process many times, about **95% of the intervals you'd construct would contain the true value.**

Any *particular* interval — the one you actually have — either contains the truth or it doesn't; there's no "95% chance" about that single interval, because nothing in it is still random. The 95% is the long-run **hit rate of the method**, like a free-throw shooter who sinks 95% of attempts: *this* shot goes in or misses, but the process is 95% reliable.

In practice you still act on your one interval — but the honest statement is about the procedure. This is exactly Module 05's margin of error, made rigorous.

---

## 3. 📐 Estimate ± (multiplier × SE)

A **95% confidence interval for a mean**:

$$\bar{X} \pm 1.96 \times \text{SE}, \qquad \text{SE} = \frac{s}{\sqrt{n}}.$$

The **1.96** comes straight from the standard Normal (the CLT): 95% of a bell sits within 1.96 standard deviations of its centre. For a **proportion**, $\hat{p} \pm 1.96\sqrt{\hat{p}(1-\hat{p})/n}$. Want *more* confidence? Use a bigger multiplier — 99% confidence uses 2.58 — which makes the interval **wider**. You trade precision for reliability: a surer statement is a vaguer one.

**Worked example — the poll.** $\hat{p} = 0.52$, $\text{SE} \approx 0.016$:

$$\text{95\% CI} = 0.52 \pm 1.96(0.016) = 0.52 \pm 0.031 = (0.489,\ 0.551).$$

The interval **includes 0.50**, so a genuine tie can't be ruled out — the lead is inside the noise. And because the width scales like $1/\sqrt{n}$, quadrupling the sample halves the interval (the √n law, one more time).

---

## 4. 🎯 Where confidence intervals show up

- **They're how every serious estimate is reported.** An A/B lift with its CI, a model metric ± its CI, poll results, KPIs — the CI is the honest alternative to a naked point estimate.
- **The decision rule you already know.** *Does the interval exclude the "no-effect" value (0 for a difference, 50% for a race)?* If the whole interval sits above a threshold, act; if it straddles the no-effect value, you can't claim an effect. This is the everyday use.
- **It's the dual of hypothesis testing** (next module): a 95% CI that excludes the no-effect value corresponds exactly to a result "significant at the 5% level." Two views of the same evidence.
- **Bootstrapping builds CIs** when tidy formulas don't exist — resample your data many times and watch how the estimate varies. Communicating uncertainty this way builds trust and stops teams from overreacting to noise.

---

## 5. ⚠️ The classic slips

- **The famous misreading:** "there's a 95% probability the truth is in *this* interval." The truth is fixed; the interval is what varies; the 95% is the procedure's long-run capture rate. (The Bayesian *credible* interval — next module — is the tool that *does* let you say "95% probability the truth is in here," by using a prior.)
- **Thinking a wider interval means worse data.** A wide interval is just more *honest* — the result of a smaller sample or a higher confidence level. Narrow isn't automatically better; it must be *earned* with data.
- **Forgetting the CI only covers random error.** It captures sampling noise and nothing else. A **biased** estimate gets a tight, confident CI around the *wrong* value — the interval is silent about systematic error (the same trap as Module 05).
- **Over-reading two overlapping CIs.** Two intervals overlapping does *not* reliably mean "no significant difference" — that comparison needs its own test, not eyeballing the bars.

---

## 6. 🔁 Before you move on

1. State precisely what the "95%" in a 95% confidence interval refers to — and what it does *not*.
2. Why can't you say "there's a 95% probability the true value is in this particular interval"?
3. Build a 95% CI for a proportion of 0.40 estimated from n = 100. (Use SE ≈ 0.049.)
4. Why does a 99% confidence interval come out wider than a 95% one?
5. What kind of error does a confidence interval fail to account for, and why is that dangerous?

> ✍️ **Explain it back:** Explain to a friend why "95% confident" is a statement about your *method*, not about the one interval in front of you — using the free-throw-shooter analogy. If they stop saying "95% chance the truth is in here," this topic — and the Inference module — is ✅.

---

*Module complete. Head to the exercises. Next comes Hypothesis Testing — turning these intervals into yes/no decisions, p-values, and the machinery of A/B testing.*
