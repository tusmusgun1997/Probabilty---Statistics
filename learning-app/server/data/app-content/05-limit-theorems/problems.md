# Module 05 — Limit Theorems · Problem Set

> **How to use this:** Attempt each problem *closed-book* first, working it through on paper. Solutions are collapsed below each problem; open them only after a genuine attempt.
>
> Difficulty: 🟢 warm-up · 🟡 core · 🔴 stretch

---

## Part A — The Law of Large Numbers (topic 05.1)

**A1** 🟢 You roll a fair die 100,000 times and average the results. Roughly what number do you expect, and which theorem guarantees it?

<details><summary>Solution</summary>

About **3.5** — the die's expectation. The **Law of Large Numbers** guarantees the sample average converges to the true mean as the number of rolls grows.
</details>

**A2** 🟡 A gambler says: "The roulette wheel has hit red 8 times in a row, so by the law of large numbers, black is now more likely." What's wrong with this reasoning?

<details><summary>Solution</summary>

It's the **gambler's fallacy**. The LLN says the *long-run proportion* of red approaches ½, but it achieves this by **diluting** past streaks under a growing number of future spins — not by making black "due." Each spin is independent; the wheel has no memory, so black stays at its usual probability regardless of the streak.
</details>

**A3** 🔴 Explain, using a fact from Module 03, *why* the sample mean converges to μ as n grows.

<details><summary>Solution</summary>

The sample mean is always centred on the truth, $E[\bar{X}] = \mu$, and its variance is $\text{Var}(\bar{X}) = \sigma^2/n$, which **shrinks to 0** as $n \to \infty$. An estimator that is centred at μ and whose spread collapses to zero must close in on μ — that is precisely the LLN.
</details>

---

## Part B — The Central Limit Theorem (topic 05.2)

**B1** 🟢 A variable is heavily right-skewed. You repeatedly take samples of 200 and record the sample mean. What shape will the distribution of those sample means have, and why?

<details><summary>Solution</summary>

Approximately **Normal** (a bell), by the **Central Limit Theorem** — the sample mean of many independent draws is approximately Normal *regardless* of the skewed shape of the original data, provided n is large enough (200 easily qualifies).
</details>

**B2** 🟡 A single measurement has mean 100 and standard deviation 20. You average 25 independent measurements. What are the mean and standard error of that average, and what's its approximate distribution?

<details><summary>Solution</summary>

Mean stays **100**. Standard error $= \sigma/\sqrt{n} = 20/\sqrt{25} = 20/5 = \mathbf{4}$. By the CLT the average is approximately **Normal(100, 4²)** — a bell centred at 100 with standard error 4.
</details>

**B3** 🔴 A friend claims: "The CLT means that if I collect enough income data, the incomes themselves will look Normal." Correct them.

<details><summary>Solution</summary>

Wrong target. The CLT is about the distribution of the **sum or average**, not the raw individuals. No matter how much income data you gather, incomes stay **right-skewed** — the CLT never reshapes the raw data. What *becomes* Normal is the distribution of the **sample mean** across repeated samples. Individuals: skewed. Averages of many: bell.
</details>

---

## Part C — Sampling distributions & standard error (topic 05.3)

**C1** 🟢 In one sentence each, distinguish the *population distribution*, a *sample*, and the *sampling distribution* of the mean.

<details><summary>Solution</summary>

- **Population distribution:** all individuals in the whole population (fixed, usually unknown).
- **Sample:** the specific finite set of data you actually collected.
- **Sampling distribution of the mean:** the distribution of the sample mean you'd see if you repeated the whole sampling process many times.
</details>

**C2** 🟡 A survey of 400 people estimates that 30% prefer option A. Compute the standard error of this proportion.

<details><summary>Solution</summary>

$\text{SE} = \sqrt{\dfrac{p(1-p)}{n}} = \sqrt{\dfrac{0.30 \times 0.70}{400}} = \sqrt{\dfrac{0.21}{400}} = \sqrt{0.000525} \approx \mathbf{0.023}$, i.e. about **2.3%**.
</details>

**C3** 🔴 A dataset of individual salaries has a standard deviation of ₹6 lakh. Someone reports the "standard error of a salary" as ₹6 lakh. Two things are wrong-headed here — what are they?

<details><summary>Solution</summary>

(1) **SD vs SE confusion:** ₹6 lakh is the **standard deviation** (spread of individual salaries), not a standard error. A standard error describes the spread of an *estimate* (like a sample mean), and equals $s/\sqrt{n}$ — much smaller. (2) "Standard error of a salary" is a category error: standard error attaches to a **statistic computed from a sample**, not to a single individual value. An individual salary has variability (the SD), but not a standard error.
</details>

---

## Part D — Margin of error (topic 05.4)

**D1** 🟢 An estimate is 0.45 with a standard error of 0.025. Give the approximate 95% margin of error and interval.

<details><summary>Solution</summary>

Margin $\approx 2 \times 0.025 = 0.05$. Interval $= 0.45 \pm 0.05 = \mathbf{(0.40,\ 0.50)}$.
</details>

**D2** 🟡 A poll finds candidate A at 53% with a margin of error of ±3%. Can the poll confidently say A is ahead of a 50/50 split? Explain.

<details><summary>Solution</summary>

The 95% interval is $53\% \pm 3\% = (50\%,\ 56\%)$. Its lower edge just touches **50%**, so the poll **cannot** confidently rule out a tie — the lead is at the boundary of the noise. You'd need a larger sample (smaller margin) to call it with confidence.
</details>

**D3** 🔴 An A/B test currently reports a lift of +4% with a margin of error of ±4%, from 2,500 users per arm. Your PM wants the margin down to ±1%. Roughly how many users per arm are needed, and can you conclude the variant works *right now*?

<details><summary>Solution</summary>

**Right now:** the interval is $4\% \pm 4\% = (0\%, 8\%)$, which **touches 0** — so you cannot yet conclude the variant truly helps. **Sample size:** margin scales as $1/\sqrt{n}$, so cutting it 4× (from ±4% to ±1%) needs $4^2 = 16$ times the users: about $2{,}500 \times 16 = \mathbf{40{,}000}$ per arm. The √n law makes tight margins expensive.
</details>

---

## ✅ Self-check before advancing to Phase IV

From memory, you should be able to:
- State the LLN and explain convergence-by-dilution (and why it isn't the gambler's fallacy).
- State the CLT and explain why averages are Normal even when the data isn't.
- Keep population / sample / sampling distribution separate, and compute a standard error.
- Build an approximate 95% margin of error (± 2·SE) and use "does the interval include the no-effect value?" as a decision rule.

Anything shaky → revisit that topic. These two theorems are the bridge from probability to statistics — everything in Phase IV stands on them.
