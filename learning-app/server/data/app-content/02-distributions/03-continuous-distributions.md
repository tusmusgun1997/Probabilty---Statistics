# 02.3 — From Bars to Curves: Continuous Distributions

> Everything so far counted whole things. But height, time, and temperature vary *smoothly* — and modelling them forces a genuinely new idea: probability as area, not as a stack of bars.

---

## 1. 🎣 The paradox of the exact height

Pick a person at random. What's the probability they are **exactly 170 centimetres** tall — not 170.1, not 169.99999, but 170.000000… on forever?

The honest answer is **zero**. There are infinitely many possible heights, so any single exact value has no room to carry probability. Yet heights *near* 170 are extremely common. How can every exact value have probability zero, while the variable is obviously real and clusters around typical values?

Resolving this cracks open the entire continuous world — where the discrete tools from the last two topics stop working and something more elegant takes over.

---

## 2. 💡 Probability becomes area

With a die or a Binomial, probability sits in **bars** — a lump of probability on each value, and the lumps add to 1. For something continuous like height, you can't put a lump on every exact value (there are infinitely many). So we spread the probability out into a smooth **curve**, and change the rule:

> **Probability is the *area under the curve* over a range — not the height of the curve at a point.**

That curve is the **probability density function (PDF)**. It answers questions like "what's the chance a height falls *between* 168 and 172?" by measuring the area sitting above that stretch. The total area under the whole curve is 1 (something happens). The probability of any single exact value is the area of a line with no width — **zero** — which dissolves the paradox: exact values have probability 0, but *ranges* have real, positive probability.

🖼️ *Two shapes to hold onto:*
- **Uniform** — a flat rectangle. Every value in a range is equally likely (a random number between 0 and 1).
- **Exponential** — a curve that starts high and decays. It models *waiting times*: time until the next bus, next call, next failure. Short waits are common, long waits rare.

Running alongside the density is the **CDF** — the *running total* of area, F(x) = P(X ≤ x) — which climbs from 0 to 1 and answers "how much probability is at or below x."

---

## 3. 📐 Density, and the two starter distributions

A **probability density function** f(x) satisfies:

$$f(x) \ge 0, \qquad \text{total area} = 1, \qquad P(a \le X \le b) = \text{area of } f \text{ between } a \text{ and } b.$$

A crucial consequence: $P(X = x) = 0$ for any exact value, so $P(a \le X \le b)$ and $P(a < X < b)$ are the same. The **CDF** is $F(x) = P(X \le x)$.

**Uniform(a, b)** — flat over [a, b]:

$$f(x) = \frac{1}{b-a}. \qquad \text{Example: on } [0, 10],\ P(2 \le X \le 5) = \frac{5-2}{10} = \mathbf{0.3}.$$

**Exponential(λ)** — waiting time for events arriving at rate λ:

$$f(x) = \lambda e^{-\lambda x} \ (x \ge 0), \qquad \text{mean} = \frac{1}{\lambda}.$$

The exponential has a famous quirk — it is **memoryless**: having already waited 10 minutes for the bus tells you *nothing* about how much longer you'll wait. The distribution of remaining time resets, as if the clock had no memory of the time already spent.

---

## 4. 🎯 Where continuous distributions show up

- **Waiting and duration everywhere.** Time between website requests, until a machine fails, until a customer churns, until the next earthquake — the exponential (and its relatives) model all of these. It's the natural partner of the Poisson: Poisson counts events, exponential times the gaps between them.
- **The uniform is the raw material of randomness.** Every random-number routine produces a Uniform(0, 1) under the hood; simulations, random sampling, and shuffling all start there.
- **Densities are what likelihoods are made of.** When you fit a model to continuous data (heights, prices, sensor readings), you evaluate the PDF at each data point — that's the "likelihood" that maximum-likelihood estimation maximises, later in the course.
- **Memorylessness models "no wear-out."** The exponential assumes a thing is no more likely to fail having run a while — a useful (and testable) baseline in reliability and survival analysis.

---

## 5. ⚠️ The classic slips

- **Reading the curve's height as a probability.** Density is *not* probability. A density can even be **greater than 1** (a tall, narrow peak) — only the *area* is a probability, and area is always between 0 and 1.
- **Forgetting that exact values have probability 0.** "P(wait = exactly 5.0 minutes)" is 0; ask about a *range* ("between 4.9 and 5.1") instead.
- **Being surprised by memorylessness.** Under the exponential, "I've already waited 20 minutes, so I'm due soon" is false — the remaining wait has the same distribution it started with.
- **Confusing the PDF with the CDF.** The PDF is the curve (density); the CDF is the accumulated area up to x. Percentiles and "probability below x" come from the CDF, not the PDF.

---

## 6. 🔁 Before you move on

1. Resolve the paradox: how can every exact height have probability 0 while the variable is real?
2. What is a probability density, and how do you get an actual probability from it?
3. Why can a density value be larger than 1, when a probability never can?
4. For a Uniform(0, 20), what's the probability of landing between 5 and 8?
5. Explain "memoryless" for the exponential in one sentence, using the waiting-for-a-bus example.

> ✍️ **Explain it back:** A friend asks, "if the chance of being exactly 170 cm is zero, how can anyone be 170 cm?" Answer them using the idea of area under a curve. If the "probability is area, not height" picture lands, this topic is ✅.

---

*Next → 02.4 — The Normal Distribution*
