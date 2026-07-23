# 07.2 — p-values & Significance

> The most famous number in statistics, and quite possibly the most misunderstood. Getting its meaning exactly right protects you from shipping noise and from the reasoning errors behind the reproducibility crisis.

---

## 1. 🎣 The phrase that ships features

**"p < 0.05."** Those four characters launch academic papers, greenlight product features, and end arguments in meetings. It's the single most cited number in all of empirical science.

It's also the most misread. Ask ten smart people what a p-value means and you'll get ten confident answers, most of them wrong — including some that sound authoritative. So what does it *actually* say, and why does the difference between the right and wrong reading matter enough to build a whole topic around it?

---

## 2. 💡 A measure of surprise, assuming nothing happened

A p-value answers **one precise question**:

> *If the null hypothesis were true (no real effect), how probable would it be to see data at least as extreme as what I actually got — purely by random chance?*

That's the whole definition, and every correct use flows from it:

- **Small p-value** → "my data would be a weird fluke if nothing were really going on" → **evidence against the null.**
- **Large p-value** → "my data is exactly what chance alone routinely produces" → **no evidence against the null.**

It is, in one phrase, a measure of **surprise under the null.** The famous **0.05** threshold is just a convention: reject the null if p < 0.05 — a "would happen less than 1 time in 20 by chance" line. It's arbitrary (nothing magic separates 0.049 from 0.051), but it's the shared default.

Hold tight to what the p-value is **not**: it is *not* the probability the null is true, *not* the probability your result was "due to chance," and *not* a measure of how big or important the effect is. It's the probability of the *data* under the null — nothing more.

---

## 3. 📐 The definition and the decision rule

$$p\text{-value} = P(\text{a test statistic at least as extreme as observed} \mid H_0 \text{ true}).$$

**Decision rule:** fix a significance level $\alpha$ (usually 0.05) *in advance*; if $p < \alpha$, reject $H_0$ and call the result **statistically significant**; otherwise, fail to reject.

**Worked example — the coin.** H₀: p = 0.5; we saw 62 heads in 100 (z = 2.4 from the last topic). The two-tailed p-value is the chance of landing *that far or farther* from 50 in either direction:

$$p = P(|Z| \ge 2.4) \approx 0.016.$$

Since 0.016 < 0.05, we **reject H₀** — the coin is likely biased. Contrast a borderline case: 58 heads gives z = 1.6, p ≈ 0.11 > 0.05, so we **fail to reject** — 58 is well within what a fair coin tosses up by luck.

This connects directly to Module 06: a two-sided p < 0.05 is *equivalent* to the 95% confidence interval **excluding** the null value. Same evidence, two languages — a p-value and a CI are two views of one result.

---

## 4. 🎯 Where p-values show up

- **They gate real decisions.** Every A/B testing platform, experimentation tool, and published study uses a p-value (or its CI equivalent) to decide whether an effect is "real enough" to act on.
- **The correct reading keeps you honest.** "Surprise under the null" is the reading that stops you from shipping a fluke and from over-claiming. The wrong readings are how noise gets mistaken for discovery at scale.
- **Significance ≠ importance.** With enough data, even a microscopic, useless effect crosses p < 0.05. A p-value tells you an effect is *probably not zero*, never that it's *big enough to matter* — always pair it with the effect size (next module's A/B discipline).
- **It underpins the reproducibility conversation.** Understanding p-values is what lets you spot p-hacking and publication bias — why so many "significant" findings fail to replicate.

---

## 5. ⚠️ The classic slips

The four cardinal misreadings — memorise that each is **false**:

- p is **not** the probability that H₀ is true.
- p is **not** "the probability the result was due to chance."
- p is **not** 1 − (probability H₁ is true).
- a small p does **not** mean a *large* or important effect — significance is not magnitude.

And the process traps:

- **p-hacking.** Trying many analyses, variants, or subgroups until one squeaks under 0.05 inflates false positives enormously (multiple testing, next topic). Decide the analysis before looking.
- **Worshipping the 0.05 line.** p = 0.049 and p = 0.051 are essentially identical evidence; the threshold is a convenience, not a law of nature.
- **Reading non-significance as "no effect."** A large p can mean "no effect" *or* "too little data to detect one" — you can't tell without considering power.

---

## 6. 🔁 Before you move on

1. State the precise definition of a p-value in one sentence.
2. Give two of the four common *wrong* interpretations, and say why each is wrong.
3. A test gives p = 0.002. In correct language, what does that tell you?
4. How does a two-sided p < 0.05 relate to a 95% confidence interval?
5. Why can a "statistically significant" result still be practically worthless?

> ✍️ **Explain it back:** Explain to a friend what "p = 0.03" actually means, *without* saying "3% chance the result is wrong" or "3% chance it's due to chance." If they can phrase it as "surprise assuming nothing is going on," this topic is ✅.

---

*Next → 07.3 — Two Ways to Be Wrong: Errors & Power*
