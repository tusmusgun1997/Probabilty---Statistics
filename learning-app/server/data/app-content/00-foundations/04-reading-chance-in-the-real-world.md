# 00.4 — Reading Chance in the Real World

> Probabilities rarely arrive as tidy fractions. They show up as odds, as percentages, as "1 in 2,000," as rates pulled from data. This topic is the fluency to translate between all of these — and one of those translations quietly turns hard problems into easy ones.

---

## 1. 🎣 Same fact, four disguises

Four everyday sentences:

- A doctor says a treatment "works **4 times out of 5**."
- A bookmaker lists the rival team "at **4-to-1**."
- A dashboard reports a "**17% conversion rate**."
- A news article warns of a side effect that hits "**1 in 2,000** people."

Every one of these is a probability wearing a costume. And here is the surprising, genuinely useful fact: **the costume changes how hard the problem is to think about.** Dressed one way, a famous medical puzzle fools most trained doctors. Dressed another way, the exact same puzzle becomes so obvious a child can solve it. Learning to change the costume at will is a real superpower — and it's the last piece of foundation you need before the actual machinery of the course begins.

---

## 2. 💡 Four dialects of one idea

There are four common ways to say "how likely," and every one of them describes the *same underlying number*. Think of a single dial, with four labels printed around it.

**Dialect 1 — Probability.** A number from 0 to 1. "0.8." This is the base form, the one all our formulas use, and everything else is a re-encoding of it.

**Dialect 2 — Percentage.** Probability times 100. "0.8" becomes "80%." Identical in meaning, friendlier to say. One subtlety to guard against — the difference between *percentage points* and *percent*. If a rate rises from 10% to 12%, that is a **+2 percentage-point** change (absolute), but a **+20 percent** change (relative: 2 is 20% of 10). These are different numbers, and confusing them is one of the most common reporting errors in the world.

**Dialect 3 — Odds.** This is the one people misread. Odds compare the *"for"* outcomes to the *"against"* outcomes directly, rather than comparing "for" to the *total*. "4-to-1 in favour" means **4 winning outcomes for every 1 losing outcome.** To get a probability from that, notice there are 4 + 1 = 5 outcomes in total, of which 4 are wins, so the probability is 4/5 = 0.8. The two directions convert like this:

$$\text{odds in favour} = \frac{P}{1 - P}, \qquad\qquad P = \frac{\text{odds}}{\text{odds} + 1}.$$

Let's read those. In the first, $P$ is the probability of the event and $1 - P$ is the probability it *doesn't* happen (the complement rule!), so "odds" is literally *the chance it happens divided by the chance it doesn't* — the "for" versus "against" ratio. In the second, if the odds are "4-to-1" we plug in odds = 4/1 = 4, giving $P = 4/(4+1) = 4/5$, confirming the 0.8. The reason odds get mangled is that "4-to-1" is **not** 4/1 = 4 (probabilities can't exceed 1) and **not** "1 in 4"; it's 4-for-every-1, i.e. 4/5.

**Dialect 4 — Natural frequencies.** Instead of "0.8," say "**8 out of 10 people**." Instead of "0.0005," say "**1 in 2,000**." This sounds like the least mathematical option — it's just counting people. It is secretly the *most powerful* of the four, and the next section shows exactly why.

🖼️ *Picture one dial, four labels.* Slide the dial to a single position and you can read off 0.8, or 80%, or 4-to-1, or "8 in 10." Nothing about the world changed — only the words. Being able to spin between them without thinking is what makes the rest of the course, and a lot of real-world communication, dramatically easier.

---

## 3. 📐 Where the numbers come from — and why counts beat fractions

We've *defined* probability across the last three topics. But in practice, where does a concrete number like "0.17" actually come from? Two honest sources.

**Source 1 — Counting equally likely outcomes.** Probability = favourable outcomes ÷ total outcomes. A fair die shows an even number with probability 3/6, because 3 of the 6 equally likely faces are even. (This counting engine is the whole subject of the next module.)

**Source 2 — Relative frequency from data.** Watch the thing happen many times and take the fraction — exactly the frequentist limit from Topic 1, stopped at a finite n. If 1,700 of 10,000 visitors converted, your estimate of the conversion probability is 1,700/10,000 = 0.17. The more observations you gather, the more you can trust the estimate (the Law of Large Numbers again).

Now the payoff of natural frequencies — pay close attention, because this is the practical crown jewel of the whole module. Consider one fact, stated two ways.

> **As probabilities:** "A disease has probability 0.001. A test detects it with probability 0.99, and gives a false alarm with probability 0.01. Given a positive test, what is the probability the person is actually sick?"

Most people — including, in real published studies, most physicians — freeze, or confidently guess "about 99%." Now the **identical fact**, retold in natural frequencies:

> **As counts:** "Picture 1,000 people. About **1** of them has the disease, and the test catches them → **1** true positive. Of the other **999** healthy people, 1% get a false alarm → about **10** false positives. So about **11** people test positive, and only **1** of them is truly sick."

Read that second version and the answer is almost impossible to get wrong: about **1 in 11**, roughly **9%**. Nothing changed but the costume. Why is the count version so much easier? Because the probability version secretly asks you to juggle several multiplications and a division at once, while the count version lays the whole situation out as concrete, countable people — and our brains are far better at counting people than at multiplying decimals. **Translating probabilities into "so many out of a fixed crowd" converts multiplication-heavy reasoning into simple counting.** Hold on to this hard: the crown jewel of the *next* module (Bayes' theorem) is exactly this puzzle, and natural frequencies are the reason it will feel easy instead of terrifying.

---

## 4. 🎯 Why this literacy pays off

- **Reading metrics without being fooled.** "Conversion rose 2%" — is that two percentage points, or 2% of the old rate? "The model is 99% accurate" — accurate how, and against what base rate? Fluency in these dialects is what keeps a dashboard from quietly lying to you.
- **Odds are the native tongue of two big tools.** Logistic regression — one of the most-used models in the industry — predicts *log-odds*, not probability, and its coefficients are read as "odds ratios." And "odds ratio" is the headline number in most medical and social-science studies. You'll meet both; this topic is where the vocabulary starts.
- **Communicating risk to humans.** Stakeholders grasp "about 1 in 20 users hits this bug" far better than "P = 0.048." Presenting probability as a natural frequency is a repeatedly-proven way to make an audience *actually* understand — a genuine, underrated professional skill, not a soft one.
- **Estimating from data is the day job.** Nearly every probability you'll use in practice is a relative frequency measured from a sample: a click-through rate, a churn rate, a defect rate. Knowing these are *estimates* — noisier the smaller the sample — is the seed from which all of statistics grows later in the course.

---

## 5. ⚠️ The classic slips

- **Odds ≠ probability.** "4-to-1" is *not* 4, and *not* "1 in 4" — it's 4-for-every-1, which is a probability of 4/5. Getting this backwards mangles betting math and logistic-regression readouts alike. Always convert through $P = \text{odds}/(\text{odds}+1)$ if you're unsure.
- **Percentage points versus percent.** Confusing the absolute change (points) with the relative change (percent) is one of the most common — and most consequential — reporting errors anywhere. Always ask which one is meant.
- **Ignoring the base rate / denominator.** "1 in 2,000" of *whom*? A rate is meaningless without its population. A big, scary *count* of events can still be a tiny *probability* if the population is huge — and vice versa. This is the exact trap the disease puzzle exploited.
- **Trusting a frequency from too little data.** "3 of our last 5 users churned, so churn is 60%!" Five users is noise, not a rate. Small samples give wild estimates — the same small-sample overconfidence from the very first topic, now dressed as a business metric.

---

## 6. 🔁 Before you move on

1. Convert the probability 0.75 into (a) a percentage, (b) odds in favour, (c) a "so many out of 8" natural frequency.
2. A team is "3-to-2 against" winning. Using $P = \text{odds}/(\text{odds}+1)$ carefully, what is their probability of winning?
3. In your own words, *why* do natural frequencies ("11 out of 1,000") make conditional-probability puzzles easier than the same facts stated as decimals?
4. A report says signups went from 4% to 5%. State that change both as percentage points and as a relative percent increase.
5. A dashboard shows a 25% conversion rate based on 8 visitors. Why should you be cautious quoting that number — and which earlier idea does this connect to?

> ✍️ **Explain it back:** Take any probability from your own life (chance of rain, a sports result, a bug rate) and state it out loud in all four dialects — probability, percentage, odds, and "so many out of a crowd." If you can move between them without hesitating, this topic — and the whole Foundations module — is ✅. You're ready for Module 01.

---

*Module complete. Head to the exercises, then advance to Module 01 — Probability Core.*
