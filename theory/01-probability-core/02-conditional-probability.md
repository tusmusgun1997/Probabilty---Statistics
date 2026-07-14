# 01.2 — Conditional Probability

> The single most important skill in applied probability: recomputing what you believe the instant new information arrives. Almost every question a data scientist faces has this shape.

---

## 1. 🎣 The two-children puzzle

A family has two children. You learn one fact: **at least one of them is a boy.**

What's the probability *both* are boys?

Almost everyone says 1/2 — "the other kid is a boy or a girl, 50/50." The correct answer is **1/3**. Not approximately. Exactly.

If that feels wrong, good — your intuition is about to get upgraded. The resolution isn't a trick; it's the single most important skill in this course: **recomputing probabilities after information arrives.**

---

## 2. 💡 Shrinking the universe

### Conditioning = shrinking the universe 🌍→🔍

Before any information, the two-children sample space has four equally likely outcomes:

> **BB** &nbsp;·&nbsp; **BG** &nbsp;·&nbsp; **GB** &nbsp;·&nbsp; **GG**

Now the information lands: *at least one is a boy*. This **kills GG**. The universe shrinks to three survivors:

> **BB** &nbsp;·&nbsp; **BG** &nbsp;·&nbsp; **GB** &nbsp;·&nbsp; ~~GG~~ *(gone)*

Among the survivors, exactly one is BB. So P(both boys | at least one boy) = **1/3**. That's all conditioning is:

> **Throw away every outcome that contradicts what you learned, then recount inside what's left.**

The 1/2-answer fails because it silently answers a *different* question ("the *first* child is a boy" — which kills GG *and* GB, leaving BB out of {BB, BG} = 1/2). Precision about *what exactly you learned* is everything.

### The Venn picture

Draw events A and B as overlapping circles. Learning "B happened" means **B is your new universe**. The probability of A is now just: *what fraction of B's area does A∩B cover?*

$$P(A \mid B) = \frac{\text{area of } A \cap B}{\text{area of } B}$$

### The data view (this one pays your salary)

Conditioning is a **filter**. "P(churn | clicked twice)" = *keep only the users who clicked twice, then compute the churn rate within that subset.* Every segmented rate you've ever computed — conversion among mobile users, defect rate for a supplier — was a conditional probability.

---

## 3. 📐 The formula, and two rules that flow from it

For $P(B) > 0$:

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

Read "$P(A \mid B)$" as *"probability of A given B."* Rearranged, it gives the **chain rule** (multiplication rule):

$$P(A \cap B) = P(A \mid B)\, P(B)$$

— "for both to happen: B happens, then A happens *in B's world*." Chains extend: $P(A \cap B \cap C) = P(A)\,P(B \mid A)\,P(C \mid A \cap B)$.

And if events $B_1, \dots, B_n$ split the world into disjoint pieces (a *partition*), the **law of total probability** rebuilds an overall probability from conditional slices:

$$P(A) = \sum_i P(A \mid B_i)\, P(B_i)$$

— a weighted average of A's probability across the scenarios. (This is the denominator machine inside Bayes' theorem, next topic.)

**Check with the hook:** $P(BB \mid \ge 1\text{ boy}) = \frac{P(BB)}{P(\ge 1 \text{ boy})} = \frac{1/4}{3/4} = \frac{1}{3}$ ✓

**Contrast the two conditionings side by side.** "At least one boy" keeps {BB, BG, GB} → 1 of 3 is BB → **1/3**. "The *first* child is a boy" keeps only {BB, BG} → 1 of 2 is BB → **1/2**. Same family, same "a boy," but a different *filter* — and that alone moves the answer. The paradox was never about probability; it was about which universe you shrank to.

---

## 4. 🎯 The `|` that runs data science

- **Every supervised model outputs conditional probabilities.** A classifier *is* an estimate of $P(y \mid \text{features})$. The bar in that expression is the entire reason features help — each one shrinks the universe toward the answer.
- **Segmenting data is conditioning.** "Churn rate among users who clicked twice" is $P(\text{churn} \mid \text{clicked twice})$, literally. You already condition dozens of times a day — now you know its algebra (and its traps).
- **The chain rule is how language models factor text:** $P(w_1, w_2, w_3, ...) = P(w_1) P(w_2 \mid w_1) P(w_3 \mid w_1,w_2)\cdots$ — next-token prediction is the chain rule, industrialized.
- **The law of total probability is the "segment and reassemble" move:** overall conversion = Σ (conversion per segment × segment share). Every weighted-average metric decomposition you've built is this law.

---

## 5. ⚠️ The classic slips

- **Confusing $P(A \mid B)$ with $P(B \mid A)$.** "The test is 99% likely to be positive given the disease" does *not* mean "you're 99% likely to have the disease given a positive test." This single confusion has a body count (courtrooms, clinics). It's the entire subject of the next topic.
- **Answering the wrong conditioning.** "At least one boy" vs. "the first is a boy" — different filters, different answers. Before computing, write down *exactly* what was learned.
- **Conditioning on the event you're predicting** (data leakage). If a feature secretly encodes the label — like an "account-closed date" when predicting churn — you've conditioned on the future. Models with suspiciously perfect accuracy usually have a bar in the wrong place.
- **Forgetting that conditioning changes everything downstream.** After filtering to B, *all* probabilities live in B's world — including the base rates you carried in from outside. Recompute them.

---

## 6. 🔁 Before you move on

1. Define $P(A \mid B)$ two ways: as a formula, and as a picture/story.
2. Solve the two-children puzzle from scratch, both conditionings (at least one boy / the first is a boy), and explain *why* they differ.
3. State the chain rule and use it: P(drawing two aces from a deck, in two draws without replacement).
4. State the law of total probability. Then: 30% of users are mobile with 2% conversion, 70% desktop with 4% — overall conversion?
5. Describe, in words, the recipe for computing a conditional probability from a table of data.

> ✍️ **Explain it back:** Explain to a friend why "P(A given B)" and "P(B given A)" are different numbers, using a concrete example (e.g., P(wet ground | rain) vs. P(rain | wet ground)). If your example makes the asymmetry *obvious*, this topic is ✅.

---

*Next → [03 — Independence](03-independence.md)*
