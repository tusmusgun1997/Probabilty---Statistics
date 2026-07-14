# 02.4 — The Normal Distribution

> The most famous curve in all of statistics. Heights, errors, test scores, and the average of almost anything settle into the same bell — and understanding *why* unlocks half of the inference still to come.

---

## 1. 🎣 The shape that's everywhere

Measure the heights of a thousand people: a bell. Weigh the packets off a factory line: a bell. Look at the errors a scale makes, the scores on a big exam, the average daily temperature over years: bell, bell, bell.

Wildly different sources, one recurring silhouette — symmetric, humped in the middle, tapering on both sides. **Why does the same shape keep appearing, in places that have nothing to do with each other?** The answer is one of the deepest facts in statistics, and this curve is the doorway to it.

---

## 2. 💡 A bell described by just two numbers

The **Normal distribution** (or Gaussian) is a symmetric bell fully pinned down by two numbers:

- **μ (mu)** — the mean, where the peak sits.
- **σ (sigma)** — the standard deviation, how wide the bell spreads.

Shift μ and the whole bell slides left or right; change σ and it gets fatter or skinnier. That's all — two dials describe the entire curve.

Its most useful feature is the **68–95–99.7 rule**: about **68%** of the probability lies within 1σ of the mean, **95%** within 2σ, and **99.7%** within 3σ. Once you know μ and σ, you can eyeball almost any "how likely is a value this extreme?" question.

**Why it's everywhere:** when you add up (or average) many small, independent random effects, the result drifts toward a Normal — *regardless* of the shapes of the pieces. A height is the sum of countless genetic and environmental nudges; a measurement error is the sum of many tiny disturbances. This pile-up-into-a-bell fact is the **Central Limit Theorem**, the headline act of Phase III — but you'll feel its pull all through this topic.

---

## 3. 📐 The bell, and the z-score trick

The Normal's density is the classic bell formula (worth recognising, not memorising):

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \qquad \text{mean} = \mu, \quad \text{sd} = \sigma.$$

The real workhorse is **standardisation**. Any Normal can be shifted and rescaled into the single **standard Normal** — mean 0, sd 1 — using the **z-score**:

$$z = \frac{x - \mu}{\sigma}.$$

A z-score says *how many standard deviations from the mean* a value sits. z = 2 means "two σ above average"; by the 95% rule, only about 2.5% of values sit above that. One standard table then answers every Normal question.

**Worked example.** Exam scores are Normal with μ = 100, σ = 15.
- **Between 85 and 115?** That's μ ± 1σ → about **68%**.
- **Above 130?** 130 is μ + 2σ, i.e. z = 2. The 95% rule leaves 5% in the two tails combined, so about **2.5%** score above 130.

---

## 4. 🎯 Where the Normal shows up

- **The default model for noise.** Measurement error, sensor jitter, and the leftover "residuals" in linear regression are almost always modelled as Normal. A huge amount of classical statistics assumes it.
- **Standardisation is everyday feature engineering.** Converting features to z-scores (mean 0, sd 1) is a standard preprocessing step so that no single feature dominates a model just because of its units. That's the z-score from this topic, applied at scale.
- **The Central Limit Theorem makes inference possible.** Because *averages* are Normal even when raw data isn't, sample means, confidence intervals, and hypothesis tests all lean on this curve — the entire back half of the course rests here.
- **Anomaly detection via σ.** "Flag anything beyond 3σ from the mean" uses the 99.7% rule: such values should appear only ~0.3% of the time, so they're worth a second look.

---

## 5. ⚠️ The classic slips

- **Assuming everything is Normal.** Plenty of real data isn't: incomes, wait times, and web-session lengths are **skewed** with long right tails. Forcing a Normal model onto them underestimates the extremes badly.
- **Underestimating fat tails.** Real "once-in-a-century" events (market crashes, viral spikes) happen far more often than a Normal's thin tails predict. Betting on Normal tails has sunk real institutions.
- **Mean ≠ median for skewed data.** The Normal is symmetric, so its mean and median coincide. Reporting a mean for skewed data (e.g. average salary) can badly misrepresent the "typical" value.
- **"Normal" is a technical word.** It doesn't mean "ordinary" or "the norm." A distribution being non-Normal isn't a defect — many important quantities simply aren't bell-shaped.

---

## 6. 🔁 Before you move on

1. Which two numbers fully describe a Normal distribution, and what does each control?
2. State the 68–95–99.7 rule.
3. What is a z-score, and what does z = −1.5 mean in words?
4. Heights are Normal with μ = 170, σ = 10. Roughly what fraction of people are between 160 and 180?
5. Give two kinds of real data that are *not* well modelled by a Normal, and say why.

> ✍️ **Explain it back:** A friend asks why the bell curve "shows up everywhere." Explain, without formulas, that it's what you get when many small independent effects add up — and give one concrete example (like height). If they grasp the "sum of many little things" idea, this topic — and the whole Distributions module — is ✅.

---

*Module complete. Head to the exercises, then onward to Phase III.*
