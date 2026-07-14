# 01.4 — Bayes' Theorem

> The crown jewel of the course. If you master one single idea in all of probability, make it this one: how to turn "the chance of the evidence given a cause" into the thing you actually want — "the chance of the cause given the evidence."

---

## 1. 🎣 The test that's usually wrong when it's right

A disease affects **1 in 1,000** people. There's a test for it that is **99% accurate** — it catches 99% of sick people, and it only false-alarms on 1% of healthy people.

You take the test. It comes back **positive**.

How worried should you be? What's the probability you actually have the disease?

Most people — including, in real published studies, **most physicians** — say somewhere around 99%. The correct answer is about **9%**. Not ninety. *Nine.* The test is positive and you are still more than 90% likely to be perfectly healthy.

If a number can be this counterintuitive to trained doctors, there's a missing mental tool. Here it is.

---

## 2. 💡 The 1,000-people picture

### The 1,000-people picture 🧑‍🤝‍🧑 (natural frequencies)

Forget formulas. Imagine 1,000 people taking the test:

| Out of 1,000 people… | The test says… | Positives produced |
|---|---|---|
| **1** is sick | caught 99% of the time | **~1 true positive** |
| **999** are healthy | false alarm on 1% of them | **~10 false positives** |

> Total positives ≈ **11** — and only **1** of them is actually sick.
> $P(\text{sick} \mid \text{positive}) \approx 1/11 \approx \textbf{9\%}$

That's the whole computation. The false positives **outnumber** the true positives ten to one — not because the test is bad, but because **healthy people are so much more numerous** that even a small error rate on them produces a crowd. The rare-disease prior (1/1000) drags the answer down, and ignoring it is called **base-rate neglect** — one of the most consequential reasoning errors in medicine, law, and data science.

### What Bayes' theorem *is*

You knew $P(\text{positive} \mid \text{sick}) = 0.99$. You *wanted* $P(\text{sick} \mid \text{positive})$. These are different numbers (topic 02's warning!), and **Bayes' theorem is the machine that converts one into the other** — at the price of supplying the base rate.

It's also a philosophy of learning:

$$\text{belief before} \;\xrightarrow{\text{evidence}}\; \text{belief after}$$

Prior → posterior. Evidence doesn't *replace* your prior belief; it *re-weights* it. A positive test moved you from 0.1% to 9% — a 90-fold update! — but 9% is still far from certain, because you started so low. Beliefs move *from where they were*.

---

## 3. 📐 Prior, likelihood, posterior

$$P(H \mid E) = \frac{P(E \mid H)\, P(H)}{P(E)}$$

with names you'll use for the rest of your career:

| Term | Name | In the disease story |
|------|------|----------------------|
| $P(H)$ | **prior** | 0.001 — belief before evidence |
| $P(E \mid H)$ | **likelihood** | 0.99 — how strongly the hypothesis predicts the evidence |
| $P(H \mid E)$ | **posterior** | ≈ 0.09 — belief after evidence |
| $P(E)$ | **evidence** | total probability of a positive, from *all* causes |

The denominator is the law of total probability (topic 02) doing its job:

$$P(E) = P(E \mid H)P(H) + P(E \mid H^c)P(H^c)$$

**The full computation:**

$$P(\text{sick} \mid +) = \frac{0.99 \times 0.001}{0.99 \times 0.001 + 0.01 \times 0.999} = \frac{0.00099}{0.00099 + 0.00999} \approx 0.090$$

Note the structure: the numerator is *one path to a positive* (sick-and-caught); the denominator is *every path to a positive* (sick-and-caught + healthy-and-false-alarmed). Bayes = **your path / all paths**.

**The prior is doing the heavy lifting — change it and watch.** Keep the *exact same test* (99% sensitive, 1% false alarms) and vary only the base rate:

| Prevalence (prior) | P(sick given a positive) |
|---|---|
| 1 in 10,000 | about **1%** — a positive is almost always a false alarm |
| 1 in 1,000 | about **9%** — the original puzzle |
| 1 in 10 (high-risk clinic) | about **92%** — now a positive is alarming |

Same test, three completely different meanings of the word "positive." A test result has no fixed meaning on its own; it only *re-weights where you started*. This single table is why "the model is 99% accurate" tells you almost nothing until you also know the base rate.

---

## 4. 🎯 Where Bayes runs the show

- **Precision vs. recall — you already know them by other names.** Recall *is* $P(+\mid \text{sick})$ (the likelihood, 99%); precision *is* $P(\text{sick} \mid +)$ (the posterior, 9%). The disease puzzle is literally the statement "high recall does not imply high precision under class imbalance" — the central headache of fraud detection, anomaly detection, and rare-event ML. You've now *derived* it.
- **Naive Bayes spam filtering** is this formula run per word: prior = spam base rate, likelihood = word frequencies per class, posterior = spam score. It's in production at planet scale.
- **Bayes is the backbone of modern ML reasoning:** MAP estimation (later in the course) is "maximize posterior = likelihood × prior"; regularization is a prior in disguise; A/B testing has a whole Bayesian school; even debates about fine-tuning a model are prior-vs-evidence debates.
- **Base-rate thinking is a daily defense.** "Model flags 2% of transactions, catches 90% of fraud" — is a flag meaningful? You now reflexively ask: *what's the fraud base rate?* That reflex prevents entire categories of dashboard misreadings.

---

## 5. ⚠️ The classic slips

- **Transposing the conditional** — reading $P(E \mid H)$ as $P(H \mid E)$. In court it's the *prosecutor's fallacy* ("the DNA match probability is 1 in a million, so he's guilty" — ignoring how many people were in the database). It's the same bug as the doctors' 99%.
- **Base-rate neglect.** Any time someone quotes a test/model accuracy without the prevalence, the number is uninterpretable. Demand the base rate.
- **"99% accurate" is ambiguous.** Sensitivity? Specificity? Overall accuracy? These differ, and under imbalance the differences are enormous (a "99.9% accurate" fraud model that predicts "never fraud" exists and is useless).
- **Priors are not optional.** Refusing to choose a prior just means silently choosing a uniform one — often the least defensible option. Make the prior explicit and argue about it in the open.

---

## 6. 🔁 Before you move on

1. Write Bayes' theorem and name all four pieces (prior, likelihood, posterior, evidence).
2. Recompute the disease puzzle from memory with the 1,000-people picture (no algebra allowed).
3. Why does the same positive test mean 9% in general screening but ~92% in a high-risk clinic?
4. Translate: which of precision/recall is the likelihood, and which is the posterior?
5. A spam filter knows P(word "lottery" | spam) = 0.10, P("lottery" | ham) = 0.001, and 50% of mail is spam. P(spam | "lottery")?

> ✍️ **Explain it back:** Explain to a smart friend why a positive result from a "99% accurate" test for a rare condition usually means you're *probably fine* — using only the 1,000-people picture. If they walk away able to repeat it to someone else, this topic is ✅.

---

*Next → [05 — Random Variables](05-random-variables.md)*
