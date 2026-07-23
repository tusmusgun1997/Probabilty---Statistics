# 05.3 — Sampling Distributions & the Standard Error

> The idea that makes the previous two theorems *usable*: the number you compute from a sample is itself random, and knowing how it varies is what lets one sample speak honestly about an entire population.

---

## 1. 🎣 Poll a thousand people — then a different thousand

You poll 1,000 people and 52% favour candidate A. Reassuring. But poll a *different* random 1,000 and you'd get 49%. Another, and it's 54%. The headline number **wobbles** every time you draw a fresh sample.

So how much should you trust *your* 52%? Is A really ahead, or is 52% just this sample's luck? The unlock is a shift in perspective: the statistic you computed is not a fixed fact — it's one **draw from a distribution** of numbers you *could* have gotten. Understand that distribution and you understand exactly how far to trust your estimate. This is the hinge on which all of statistics turns.

---

## 2. 💡 Three distributions, don't conflate them

Keep three distinct things separate — muddling them is the root of most statistical confusion:

1. **The population distribution** — every individual in the whole population. Fixed, and usually *unknown* (it's what you want to learn about).
2. **The sample** — the specific data you actually collected. One finite draw.
3. **The sampling distribution** — if you repeated the *entire sampling process* over and over and recorded your statistic (say, the sample mean) each time, this is the histogram of those statistics.

The sample mean has its own sampling distribution, and from the last two topics we already know its three vital features: it's **centred at the true μ** (LLN — the estimate is unbiased), it's **approximately Normal** (CLT), and its spread is $\sigma/\sqrt{n}$. That spread has a special name — the **standard error** — and it is the *typical distance between your estimate and the truth.* Small standard error → trustworthy estimate; large → shaky.

That's the whole bridge: we can't see the population, but we know precisely how our estimate *behaves* around it, so we can say how wrong it's likely to be.

---

## 3. 📐 Standard error, and the one distinction everyone botches

For a sample mean $\bar{X}$ from $n$ independent draws:

$$E[\bar{X}] = \mu, \qquad \text{Standard Error} = \text{SD}(\bar{X}) = \frac{\sigma}{\sqrt{n}}, \qquad \bar{X} \approx \text{Normal}.$$

In practice $\sigma$ is unknown, so we estimate it with the sample standard deviation $s$, giving $\text{SE} \approx s/\sqrt{n}$. For a **proportion** $\hat{p}$ (a fraction of yes/no successes), the standard error is:

$$\text{SE}(\hat{p}) = \sqrt{\frac{p(1-p)}{n}}.$$

**Worked example — the poll.** $\hat{p} = 0.52$, $n = 1000$:

$$\text{SE} = \sqrt{\frac{0.52 \times 0.48}{1000}} = \sqrt{0.0002496} \approx 0.0158 \approx \mathbf{1.6\%}.$$

So the estimate's typical wobble is about ±1.6 points — the 52% is really "52%, give or take a couple of points."

> ⚠️ **The single most confused pair in statistics:** **standard deviation** measures the spread of the *individuals* (how varied people are); **standard error** measures the spread of your *estimate* (how varied the sample mean is). They differ by a factor of $\sqrt{n}$. SD describes the data; SE describes your certainty about a summary of the data.

---

## 4. 🎯 Where sampling distributions show up

- **They are the foundation of all inference.** Every confidence interval, every p-value, every A/B-test "significance" is, underneath, a statement about a sampling distribution. This topic is the concept the entire next phase is built on.
- **Standard error is everywhere in the wild.** A poll's "margin of error," the error bars on a chart, the ± on a reported metric — all are standard errors (or small multiples of them).
- **It powers sample-size planning.** Because SE = σ/√n, you can solve *backwards*: "how many users do I need for an estimate precise to ±1%?" — the core calculation behind sizing any experiment.
- **The SD-vs-SE distinction is a real-world trap.** Reporting a standard deviation when you meant a standard error (or the reverse) mis-states your certainty by a factor of √n — a common and costly reporting error.

---

## 5. ⚠️ The classic slips

- **Confusing standard deviation with standard error.** The cardinal confusion of the whole subject. One is about people; the other is about your estimate. Always know which you're quoting.
- **Forgetting the √n.** Standard error falls with $\sqrt{n}$, not $n$ — so precision improves slowly (four times the data to halve the error).
- **Treating your one statistic as the exact truth.** Your 52% is a single draw from the sampling distribution, not the population value. It comes with built-in wobble.
- **Assuming a random, representative sample.** All of this assumes the sample was drawn fairly. A **biased** sample has a small standard error clustered around the *wrong* number — precise but inaccurate, and no amount of data fixes it. (And clustered, non-independent observations make the true SE larger than the formula claims.)

---

## 6. 🔁 Before you move on

1. Name the three distributions you must keep separate, and say which one is usually unknown.
2. What is the standard error, in words, and what makes it small or large?
3. Explain the difference between standard deviation and standard error, with what each describes.
4. A survey estimates a proportion of 0.40 from n = 400. Compute the standard error.
5. Why does a biased sample's small standard error give false confidence?

> ✍️ **Explain it back:** Explain to a friend why a poll's 52% comes with a "give or take" attached, and what the standard error measures. If they distinguish "how varied people are" from "how varied my estimate is," this topic is ✅.

---

*Next → 05.4 — Margin of Error: How Far Off Is Your Estimate?*
