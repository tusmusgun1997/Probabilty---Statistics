# 07.1 — The Logic of Hypothesis Testing

> How do you tell a real effect from a lucky sample? Statistics answers with a procedure shaped exactly like a criminal trial — and once you see the courtroom, every p-value and A/B test that follows makes sense.

---

## 1. 🎣 Real win, or lucky sample?

Your new checkout flow shows a **3% higher** conversion rate than the old one. Time to celebrate and ship it?

Not so fast. Two stories fit that 3%: maybe the new flow is genuinely better — or maybe it's *identical* to the old one and you simply drew a lucky sample (Module 05 warned you: every estimate wobbles from sample to sample). Eyeballing the numbers can't separate the two. You need a formal way to ask *"is this bigger than random noise would produce?"* — and statistics borrows its answer, remarkably, from the logic of a courtroom.

---

## 2. 💡 A courtroom for data

Picture a criminal trial. The defendant is **presumed innocent**, and the prosecution must present evidence so strong that innocence becomes implausible. A hypothesis test works identically:

- The **null hypothesis (H₀)** is the presumption of innocence — the skeptical default that **nothing is going on**: no effect, no difference, the status quo. ("The new flow converts the same as the old.")
- The **alternative hypothesis (H₁)** is the prosecution's claim — that a **real effect exists**. ("The new flow is different.")

And here is the whole move: **assume the null is true, then ask — if it were, how surprising would my data be?** If the data would be a bizarre fluke under "nothing is going on," you **reject the null**. If the data is perfectly consistent with pure chance, you **fail to reject** it.

Two subtleties the courtroom makes intuitive. You never *prove* the effect is real — you only decide the evidence against "nothing" is strong enough. And "fail to reject" is like a verdict of **"not guilty," not "proven innocent"**: it means the evidence wasn't sufficient, not that the null is definitely true.

---

## 3. 📐 Null, alternative, and a test statistic

- **H₀** — no effect (e.g. "μ = μ₀", "new rate = old rate"). The default we try to disprove.
- **H₁** — an effect exists. What we'd need strong evidence to conclude.

To measure "how surprising," we compress the data into a single **test statistic** — typically *how far the data sits from what H₀ predicts, measured in standard errors* (Module 05). Because the CLT tells us the sampling distribution of that statistic *under H₀*, we can judge exactly how extreme our observation is.

**Worked example.** H₀: a coin is fair (p = 0.5). You flip it **100 times and get 62 heads**. If H₀ were true, the number of heads is approximately Normal with mean 50 and standard error 5. Our 62 sits

$$z = \frac{62 - 50}{5} = 2.4 \text{ standard errors above what "fair" predicts.}$$

That's fairly extreme — a fair coin would rarely stray so far. *How* extreme, as a probability, is the p-value (next topic). (A test can be **two-tailed** — looking for a difference in either direction — or **one-tailed**, for a specific direction decided in advance.)

---

## 4. 🎯 Where this logic shows up

- **It's the skeleton of every experiment.** A/B tests, clinical trials, and "is this metric change real?" investigations all run this courtroom procedure. It's how product teams decide whether to ship.
- **It formalises Module 05's instinct.** "Does the effect exceed the noise?" becomes a disciplined yes/no rather than a gut call — the guardrail against chasing random blips.
- **The null-hypothesis mindset is a professional habit.** Defaulting to "assume it's nothing until the data forces otherwise" protects you from wishful thinking and false discoveries — the single most valuable reflex in applied statistics.

---

## 5. ⚠️ The classic slips

- **"Failed to reject" ≠ "the null is true."** Absence of evidence isn't evidence of absence. A small or underpowered study can miss a real effect entirely (power, topic 07.3). Not guilty is not innocent.
- **Testing a hypothesis you invented *after* seeing the data.** Forming H₁ to fit the pattern you already spotted, then "testing" it on the same data, manufactures false positives (p-hacking, next topics). Decide the hypothesis first.
- **Forgetting the test only rules out *chance*, not *bias*.** A confounded or badly-run experiment can give a "significant" result that's meaningless — significance says "not random," never "not biased" (correlation ≠ causation, Module 04).
- **Thinking rejecting H₀ proves your specific story.** It says the data is inconsistent with "nothing," not that *your* proposed mechanism is the reason.

---

## 6. 🔁 Before you move on

1. State the null and alternative hypotheses, and match each to a role in the courtroom analogy.
2. What is the core logical move of a hypothesis test?
3. Why is "fail to reject the null" not the same as "the null is true"?
4. For the coin example, what does the test statistic z = 2.4 mean in plain words?
5. A confounded experiment produces a "significant" result. Why doesn't the test rescue it?

> ✍️ **Explain it back:** Explain to a friend how deciding whether a new feature "really" improved conversion is like a criminal trial — including why you can never quite "prove" the feature helped. If they grasp presumption-of-null and reject-vs-fail-to-reject, this topic is ✅.

---

*Next → 07.2 — p-values & Significance*
