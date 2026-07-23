# 06.1 — Estimators: Guessing the Population from a Sample

> The whole course flips direction here. Until now: *given the process, what does the data look like?* From now on: *given the data, what is the process?* That reverse arrow is statistical inference, and it starts with the humble estimator.

---

## 1. 🎣 One spoonful for the whole pot

You taste a single spoonful of soup and decide the whole pot needs more salt. You never taste the entire pot — one small, well-stirred spoonful stands in for all of it, and you confidently act on the whole thing.

That is the entire logic of statistical inference: use a **sample** you *can* see to make a claim about a **population** you *can't*. Every poll, every A/B test, every model trained on a dataset is a spoonful standing in for a pot. The questions that matter are: how good is that leap, and how do you make it well? All of Phase IV is the answer — and it begins by getting precise about what "a guess from a sample" even is.

---

## 2. 💡 The parameter, the estimate, and the arrow reversed

Phases I–III always ran forwards: assume a coin's bias, then predict the flips. Inference runs **backwards**: watch the flips, then guess the bias.

The unknown number that describes the whole population — the true average income, the true conversion rate, the true standard deviation — is called a **parameter**. It's *fixed but unknown*, and we name it with a Greek letter (μ, p, σ). Your best guess of it, computed from the sample, is an **estimator**, usually marked with a hat: $\hat{p}$, $\hat{\mu}$.

The single most important mindset — straight from Module 05 — is this: **your estimate is itself random.** A different sample would have handed you a different number. So an estimator isn't just a value; it's a random variable with its own **sampling distribution**. Judging an estimator means judging that distribution: *does it centre on the truth, and how much does it wobble?* The sample mean estimates μ, the sample proportion estimates p, the sample standard deviation estimates σ — each a spoonful pointing at its pot.

---

## 3. 📐 Parameter, estimator, estimate

Three words, kept distinct:

- **Parameter** $\theta$ — the true, fixed, unknown value describing the population.
- **Estimator** $\hat{\theta}$ — a *rule* applied to the sample to guess $\theta$ (e.g. "take the sample mean"). Because it depends on the random sample, $\hat{\theta}$ is a **random variable** with a sampling distribution.
- **Estimate** — the single number your estimator produces from the *actual* data in hand.

**Worked example.** A page's true conversion rate $p$ is unknown. You observe **47 conversions in 500 visitors**. The natural estimator is the sample proportion:

$$\hat{p} = \frac{47}{500} = 0.094.$$

From Module 05 we already know how this estimator behaves: it's centred on the true $p$, with standard error $\sqrt{p(1-p)/n} \approx 0.013$. So 0.094 is a *spoonful* — our best point estimate — but it comes with built-in wobble, and it is not the truth itself.

---

## 4. 🎯 Where estimators show up

- **Every number you compute from data is one.** A click-through rate, an average order value, a model's test accuracy, a fitted regression coefficient — each is an estimate of some true population quantity, carrying a sampling distribution.
- **Model parameters are estimates.** The weights a model learns are estimates of the "true" underlying relationship. Training a model is estimation at scale — the rest of this module is about doing it well.
- **The mindset is the job.** Recognising "this dashboard number is an *estimate*, not the truth" — and asking how much it could be off — is what separates a data scientist from someone reading a spreadsheet literally.
- **It sets up everything ahead.** Bias, variance, maximum likelihood, and confidence intervals are all about building good estimators and quantifying their uncertainty.

---

## 5. ⚠️ The classic slips

- **Treating an estimate as the exact truth.** It's one draw from a sampling distribution. The true parameter is fixed and still unknown; your number is a guess with error bars.
- **Confusing the estimator with the estimate.** The estimator is the *formula* (a random variable); the estimate is the *number* it produced this time. The distinction matters the moment you reason about its distribution.
- **Assuming any reasonable formula is a good estimator.** "Sensible-looking" isn't enough — an estimator has to be *checked* for bias and variance (next topic). Some natural formulas are systematically wrong.
- **Forgetting the sample must be representative.** No formula rescues a bad sample: an unstirred spoonful from the top of the pot estimates the wrong thing, confidently. Random, representative sampling is the unspoken precondition of all of it.

---

## 6. 🔁 Before you move on

1. In one sentence, how does inference reverse the direction of the earlier phases?
2. Distinguish *parameter*, *estimator*, and *estimate*.
3. Why is an estimator a random variable, and what is its distribution called?
4. You observe 12 defective items in a batch of 300. Give a natural estimator of the true defect rate and its value.
5. Why can no formula fix a non-representative sample?

> ✍️ **Explain it back:** Explain to a friend why tasting one spoonful to judge a whole pot of soup is exactly what a data scientist does with a sample — and what has to be true about the spoonful for the judgement to be fair. If they land on "well-stirred / representative," this topic is ✅.

---

*Next → 06.2 — Bias & Variance: What Makes an Estimator Good*
