# 05.1 — The Law of Large Numbers

> The theorem that licenses the entire idea of *learning from data*: average enough independent observations and the average locks onto the true mean. Casinos, insurers, and every data scientist quietly bet their livelihood on it.

---

## 1. 🎣 It evens out — but not the way you think

Flip a fair coin 10 times and you might get 7 heads — a wild 70%. Flip it 10,000 times and you'll be pinned near 50%. Everyone has the gut sense that results "even out" with more trials.

But *what exactly* is guaranteed? Here's the trap that catches almost everyone: the coin is **not** keeping score and "owing" you tails to balance the books. So how does 70% turn into 50% without the coin compensating? Pinning down the real mechanism — and what it does and doesn't promise — is one of the most clarifying moments in probability.

---

## 2. 💡 Deviations get diluted, not corrected

The **Law of Large Numbers (LLN)** says: as you collect more and more independent observations of a random quantity, their **running average converges to the true expectation** and stays there. The jumpy average of a small sample settles onto μ as the sample grows.

The crucial *why*: it isn't that later flips correct earlier ones (a coin has no memory). It's that **early deviations become a vanishingly small fraction of a growing total.** Those 7-out-of-10 heads are loud when the denominator is 10; by the time the denominator is 10,000, even a big early streak is a rounding error. Convergence happens by **dilution**, not compensation. That single distinction dissolves the gambler's fallacy.

🖼️ *Picture:* the running-average line you saw informally back in Module 00 — violently jumpy for the first few dozen trials, then tightening onto the true mean like a rope pulling taut and never coming loose again.

---

## 3. 📐 The average converges because its spread vanishes

For independent draws $X_1, \dots, X_n$ from a distribution with mean $\mu$, the sample mean

$$\bar{X}_n = \frac{1}{n}\sum_{i=1}^{n} X_i \ \longrightarrow\ \mu \quad \text{as } n \to \infty.$$

The reason sits right in Module 03's algebra. The sample mean is **always centred on the truth**, $E[\bar{X}_n] = \mu$, and its spread **shrinks to nothing**:

$$\text{Var}(\bar{X}_n) = \frac{\sigma^2}{n} \ \longrightarrow\ 0.$$

An estimator centred on μ whose spread collapses to zero has no choice but to close in on μ. That's the LLN in one line.

**Worked example — a fair die** ($\mu = 3.5$). The average of 10 rolls might be 4.1 (noisy). The average of 1,000 rolls sits around 3.49. The average of 100,000 rolls is about 3.501. The *destination* never changes; only the wobble around it shrinks.

(One thing the LLN does *not* tell you: how fast, or how the average is distributed on its way to μ. That's the next topic's job.)

---

## 4. 🎯 Where the LLN shows up

- **It's the licence to learn from samples.** The reason a sample mean estimates a population mean at all — the reason a measured click-through rate approaches the true rate — is the LLN. Without it, data would be noise with no destination.
- **Casinos and insurance are LLN machines.** Any single spin or policy is pure chance, but averaged over millions the payout is essentially certain. The house edge is *guaranteed* not by luck but by the LLN: the casino is the one entity playing enough games for the average to be law.
- **It grounds "frequency → probability."** Module 00's frequentist definition — probability is the long-run fraction — is literally a statement of the LLN.
- **It's why more data helps.** Every "collect more observations to get a better estimate" instinct is the LLN, and its variance-shrinking mechanism is exactly the √n effect from Module 03.

---

## 5. ⚠️ The classic slips

- **The gambler's fallacy.** The LLN does **not** make any outcome "due." A run of reds doesn't raise the chance of black; the average converges by diluting past deviations, never by reversing them.
- **The "law of small numbers."** Expecting a *small* sample to already reflect the true mean. Ten rolls averaging 4.1 is not a loaded die — small samples are simply noisy, exactly the overconfidence trap from Module 00.
- **Forgetting the assumptions.** The LLN needs independent draws and a *finite* mean. Certain heavy-tailed quantities (some wealth or network models) have no finite mean, and their running average never settles at all.
- **Expecting individual outcomes to become predictable.** The *average* converges; the next single outcome stays as random as ever. Convergence is a statement about aggregates, not individuals.

---

## 6. 🔁 Before you move on

1. State the Law of Large Numbers in one plain sentence.
2. Explain *why* the running average converges — and why that is not the gambler's fallacy.
3. Which quantity from Module 03 shrinking to zero forces the convergence, and why?
4. How is a casino's guaranteed profit an application of the LLN?
5. Give one situation where the LLN's assumptions fail so the average never settles.

> ✍️ **Explain it back:** A friend at a roulette table says "it's landed on red five times, black is due — the law of averages!" Explain what the law of large numbers actually promises, and why their reasoning is wrong. If they see dilution-not-compensation, this topic is ✅.

---

*Next → 05.2 — The Central Limit Theorem*
