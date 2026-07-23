# 05.4 — Margin of Error: How Far Off Is Your Estimate?

> The moment this whole phase pays off. Combine the CLT's bell with the standard error and you can put honest error bars on any estimate — turning a single, overconfident number into a trustworthy range.

---

## 1. 🎣 Where does the ± come from?

Every poll says "52%, **margin of error ±3%**." Every A/B test writes up "+5% lift **± 2%**." Every serious chart draws error bars. That little ± is doing enormous work — it's the difference between a number you can act on and a number that's just noise.

So where does it come from, and what does it actually promise? Answering that is the payoff of everything in this phase: it's the exact point where abstract probability becomes a usable, defensible statement about the real world.

---

## 2. 💡 Two standard errors, and you've bracketed the truth

Here's the chain, and every link is something you already have:

- Your estimate (a sample mean or proportion) is approximately **Normal** (CLT),
- **centred on the truth** (LLN), with spread equal to the **standard error** (last topic).

Now apply the **68–95–99.7 rule** from Module 02 to that bell: your estimate lands within about **2 standard errors** of the truth roughly **95%** of the time. Turn it around — since the estimate is usually within 2 SE of the truth, the truth is usually within **2 SE of your estimate.** That band, **estimate ± 2·SE**, is the **margin of error**: an honest "how far off could I reasonably be?"

A bare point estimate hides its uncertainty and invites overreaction. The margin of error makes the uncertainty visible: a **wide** band screams "small sample, don't over-read this," a **narrow** band says "this is pinned down." Same number, very different meaning depending on the width.

---

## 3. 📐 Estimate ± 2·SE

An approximate **95% margin of error** is two standard errors (more precisely 1.96, but 2 is the working number):

$$\text{margin} \approx 2 \times \text{SE}, \qquad \text{interval} = \text{estimate} \pm 2\,\text{SE}.$$

**Worked example — the poll.** $\hat{p} = 0.52$, and from the last topic $\text{SE} \approx 0.016$. So:

$$\text{margin} \approx 2 \times 0.016 = 0.032 \approx \pm 3\%, \qquad \text{interval} \approx (49\%,\ 55\%).$$

Read "52% ± 3%." Crucially, that interval **includes 50%** — so the poll *cannot* confidently declare A the winner. The lead is within the noise.

**The sample-size lever.** Since $\text{SE} = \sigma/\sqrt{n}$, the margin is proportional to $1/\sqrt{n}$: **to halve the margin you need four times the sample** (the √n law, one last time). Getting the poll from ±3% down to ±1.5% takes not 2,000 but ~4,000 respondents.

**Worked example — an A/B test.** Variant B shows a **+5%** lift with $\text{SE} = 2\%$. Margin $\approx \pm 4\%$, interval $(1\%,\ 9\%)$. This interval **excludes 0**, so B's improvement is very likely real — not just noise. That single check ("does the interval include the no-effect value?") is the everyday decision.

---

## 4. 🎯 Where the margin of error shows up

- **It's how estimates are honestly reported.** Polls, A/B lifts, model accuracy, business KPIs — a credible number comes with a ± band. Reporting the point estimate alone is, quietly, malpractice.
- **The everyday decision rule.** *Does the interval include the "no effect" value (0 for a difference, 50% for a two-way race)?* If yes, you can't claim an effect; if no, you probably have one. This is the intuition that becomes hypothesis testing next module.
- **It stops teams chasing noise.** A "+2% lift" with a ±5% margin is *nothing* — the interval straddles zero. The margin is what keeps a dashboard blip from becoming a bad decision.
- **It sizes experiments.** "How many users until the margin is small enough to detect the effect I care about?" comes straight from margin ∝ 1/√n.

---

## 5. ⚠️ The classic slips

- **Misreading "95% confident."** It refers to the long-run reliability of the *procedure* (95% of such intervals capture the truth), **not** "a 95% chance the truth is in *this particular* interval." The distinction is subtle and important — the next module treats it rigorously; for now, just don't overclaim.
- **Forgetting the margin only covers *random* error.** It captures sampling noise, and nothing else. A **biased** sample (bad polling, a broken instrument) can be wrong by far more than its margin — the margin is completely silent about systematic error. A tight ± around a biased estimate is confident and wrong.
- **Reporting a bare number as fact.** A point estimate with no band pretends to a certainty it doesn't have.
- **Reacting to gaps smaller than the margin.** If the difference is inside the noise band, it isn't yet a signal.
- **Assuming precision is cheap.** The √n law means shrinking the margin has steeply diminishing returns.

---

## 6. 🔁 Before you move on

1. Where does the "± 2·SE" margin come from? Trace it back to the CLT and the 68–95–99.7 rule.
2. A proportion is estimated at 0.60 with a standard error of 0.02. Give the approximate 95% margin and interval.
3. Why does halving a margin of error require four times the sample size?
4. An A/B test reports "+1% ± 3%." Should you conclude the variant helped? Why or why not?
5. What kind of error does the margin of error *fail* to capture, and why does that matter?

> ✍️ **Explain it back:** Explain to a friend what a poll's "±3%" actually means, and why a 52%-with-±3% result can't confidently call the race. If they reach for "the interval includes 50%," this topic — and all of Phase III — is ✅. You're ready to learn from data for real.

---

*Module complete. Head to the exercises. Next comes Phase IV — Inference: turning these error bars into rigorous estimation, confidence, and testing.*
