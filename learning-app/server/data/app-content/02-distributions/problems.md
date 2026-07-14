# Module 02 — Distributions · Problem Set

> **How to use this:** Attempt each problem *closed-book* first, working it through on paper. Solutions are collapsed below each problem; open them only after a genuine attempt.
>
> Difficulty: 🟢 warm-up · 🟡 core · 🔴 stretch

---

## Part A — Bernoulli & Binomial (topic 02.1)

**A1** 🟢 A fair coin is flipped 4 times. What's the probability of getting exactly 2 heads?

<details><summary>Solution</summary>

Binomial with n = 4, p = ½, k = 2:
$$\binom{4}{2}(0.5)^2(0.5)^2 = 6 \times 0.0625 = \mathbf{0.375}.$$
Six of the sixteen equally likely sequences have exactly two heads.
</details>

**A2** 🟡 A basketball player makes 80% of free throws. She takes 5. What's the probability she makes all 5, and what's her expected number of makes?

<details><summary>Solution</summary>

All 5 made: only one arrangement, so $\binom{5}{5}(0.8)^5(0.2)^0 = (0.8)^5 \approx \mathbf{0.328}$.
Expected makes = $np = 5 \times 0.8 = \mathbf{4}$.
</details>

**A3** 🔴 A factory's parts are defective 5% of the time, independently. In a box of 20, what's the probability of *at least one* defective? (Use the complement trick from Module 00.)

<details><summary>Solution</summary>

Easier via the complement: P(at least one) = 1 − P(none).
$$P(\text{none}) = \binom{20}{0}(0.05)^0(0.95)^{20} = (0.95)^{20} \approx 0.358.$$
So P(at least one) $\approx 1 - 0.358 = \mathbf{0.642}$ — about 64%. Even a 5% rate makes a defect in the box more likely than not.
</details>

---

## Part B — The Poisson (topic 02.2)

**B1** 🟢 A call centre receives on average 4 calls per minute. What distribution models the number of calls in a given minute, and what are its mean and variance?

<details><summary>Solution</summary>

A **Poisson** with λ = 4. Its mean = λ = **4** and variance = λ = **4** — mean and variance are equal, the Poisson's signature.
</details>

**B2** 🟡 A website logs on average 2 errors per hour. What's the probability of exactly 0 errors in the next hour?

<details><summary>Solution</summary>

Poisson, λ = 2, k = 0:
$$P(X = 0) = \frac{e^{-2}\, 2^0}{0!} = e^{-2} \approx \mathbf{0.135}.$$
About a 14% chance of a clean hour.
</details>

**B3** 🔴 A shop averages 6 customers per hour. Using natural scaling, what's the average number in a 20-minute window, and set up the probability that exactly 1 arrives in that window?

<details><summary>Solution</summary>

Scale λ to the window: 20 minutes is ⅓ of an hour, so λ = 6 × ⅓ = **2** for the 20-minute window.
$$P(X = 1) = \frac{e^{-2}\, 2^1}{1!} = 2e^{-2} \approx \mathbf{0.271}.$$
The key move is rescaling the rate to match the window before computing.
</details>

---

## Part C — Continuous distributions (topic 02.3)

**C1** 🟢 A random number is drawn uniformly between 0 and 50. What's the probability it lands between 10 and 20?

<details><summary>Solution</summary>

Uniform: probability is the fraction of the interval covered. $(20 - 10)/(50 - 0) = 10/50 = \mathbf{0.2}$.
</details>

**C2** 🟡 Explain why the probability that a continuous waiting time equals *exactly* 3.000… minutes is 0, yet the wait is obviously some real number.

<details><summary>Solution</summary>

For a continuous variable, probability is **area under the density curve** over a range. A single exact value spans a range of zero width, so its area — and thus its probability — is 0. Real outcomes still occur because each actual wait falls inside some tiny interval, and intervals have positive area. Only *ranges*, not exact points, carry probability.
</details>

**C3** 🔴 Buses arrive on average every 10 minutes (exponential waiting time). You've already waited 10 minutes. Because the exponential is memoryless, what's the expected *additional* wait, and why?

<details><summary>Solution</summary>

Still **10 minutes**. Memorylessness means the time already spent waiting carries no information about the remaining wait — the distribution of what's left is identical to the original. The clock effectively resets, so your expected additional wait is the same 1/λ = 10 minutes you started with. ("I'm due any second now" is a fallacy here.)
</details>

---

## Part D — The Normal (topic 02.4)

**D1** 🟢 IQ scores are Normal with μ = 100, σ = 15. Using the 68–95–99.7 rule, what fraction of people score between 85 and 115?

<details><summary>Solution</summary>

85 and 115 are exactly μ − σ and μ + σ (one standard deviation each side). By the rule, that's about **68%**.
</details>

**D2** 🟡 For the same IQ distribution (μ = 100, σ = 15), compute the z-score of a score of 130 and say roughly what fraction of people score above it.

<details><summary>Solution</summary>

$z = (130 - 100)/15 = \mathbf{2}$ — two standard deviations above the mean. The 95% rule leaves 5% split between the two tails, so about **2.5%** score above 130.
</details>

**D3** 🔴 Daily incomes in a city have a long right tail (a few very high earners). Would a Normal distribution model them well? What goes wrong, and which is larger — the mean or the median?

<details><summary>Solution</summary>

No — the Normal is symmetric, but incomes are **right-skewed**. Forcing a Normal underestimates the long tail of high earners and misrepresents the spread. With a right skew, the few large values pull the **mean above the median**, so the mean overstates the "typical" income. (This is why median income is usually reported instead of mean.)
</details>

---

## ✅ Self-check before advancing to Phase III

From memory, you should be able to:
- Say when to use a Binomial vs. a Poisson vs. a continuous distribution.
- Compute a simple Binomial probability, including its three-piece structure.
- Use λ for a Poisson and rescale it to a different window.
- Explain probability as area under a density, and why exact continuous values have probability 0.
- Use μ, σ, z-scores, and the 68–95–99.7 rule on a Normal.

Anything shaky → revisit that topic. These distributions are the vocabulary the rest of the course speaks in.
