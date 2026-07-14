# 01.5 — Random Variables

> The bridge from outcomes to numbers. The moment a coin flip becomes a "1" instead of "heads," you can average it, chart it, and compute with it — and the entire rest of the course walks across this bridge.

---

## 1. 🎣 A bet worth ₹120?

Here's a bet. I flip 3 fair coins and pay you **₹100 per head**.

Quick questions you *can't* answer with the tools so far: What are your possible winnings? How likely is each amount? Is this bet worth an entry fee of ₹120?

Notice what just happened: the outcomes stopped being *things* ("HTH") and became **numbers** (₹200). And the moment outcomes become numbers, a whole new world opens — averages, spreads, expectations, "is this bet fair?" You cannot take the average of `{heads, tails}`. You *can* take the average of `{0, 100, 200, 300}`.

That bridge — from outcomes to numbers — is the **random variable**, and it's the doorway to everything in the rest of this course.

---

## 2. 💡 A machine that numbers outcomes

### A random variable is a numbering machine 🎰→🔢

A random variable (RV) is **a rule that attaches a number to every outcome** of an experiment.

```
Outcome (Ω):   TTT   TTH   THT   HTT   THH   HTH   HHT   HHH
                │     │     │     │     │     │     │     │
X = # heads:    0     1     1     1     2     2     2     3
Winnings 100X:  0    100   100   100   200   200   200   300
```

The randomness lives in *which outcome happens*; the variable just relabels it. Same experiment, new lens. (And note: several outcomes can map to the same number — three different outcomes all give X = 1.)

### The PMF: where the probability piles up 📊

Once outcomes are numbered, the natural question is: **how much probability lands on each number?** Count the outcomes feeding each value (all 8 equally likely):

| x (heads) | outcomes mapping to it | P(X = x) |
|-----------|------------------------|----------|
| 0 | TTT | 1/8 |
| 1 | TTH, THT, HTT | 3/8 |
| 2 | THH, HTH, HHT | 3/8 |
| 3 | HHH | 1/8 |

This table is the **probability mass function (PMF)** — the complete profile of X's randomness. Picture it as a bar chart: probability "mass" piled on each value. Symmetric, humped in the middle — you're already looking at a baby binomial distribution (Module 02 grows it up).

And the bet? P(winning ≥ ₹200) = 3/8 + 1/8 = 1/2. Whether ₹120 entry is *fair* needs one more tool — expectation, the opening act of the next phase. The cliffhanger is deliberate.

---

## 3. 📐 The formal definition and the PMF

A **random variable** is a function from the sample space to the reals:

$$X : \Omega \to \mathbb{R}$$

For a **discrete** RV (countable values), the **probability mass function** is

$$p_X(x) = P(X = x) = P(\{\omega \in \Omega : X(\omega) = x\})$$

— the probability of the *set of outcomes* that map to $x$. Requirements (inherited straight from the axioms):

$$p_X(x) \ge 0 \qquad \text{and} \qquad \sum_x p_X(x) = 1$$

Statements like $\{X \ge 2\}$ are just **events** — sets of outcomes — so everything from Modules 00–01 (conditioning, Bayes, independence) applies to random variables unchanged. Two RVs are independent iff every $\{X = x\}$ is independent of every $\{Y = y\}$.

One more object worth meeting (it stars in the next module): the **CDF**, $F(x) = P(X \le x)$ — the running total of the PMF. It exists for *every* RV, including the continuous ones where PMFs fail.

**Reading the PMF as a picture.** Lay the four probabilities out as bars over 0, 1, 2, 3: a short bar (1/8), a tall one (3/8), a tall one (3/8), a short one (1/8). It's a symmetric hill, humped in the middle — you are already looking at a baby **binomial distribution**, which the next module grows up into its full form. Push to 10 coins instead of 3 and the hill gets smoother and more bell-shaped; use a *biased* coin and the hill leans to one side. The shape of a PMF *is* the personality of the randomness.

---

## 4. 🎯 Why everything downstream is a random variable

- **Every column of every dataset is modeled as a random variable.** User age, session length, churn flag, pixel intensity — the entire statistical worldview of data science is "my data are realizations of random variables." This topic is where that worldview begins.
- **Labels are RVs, and classifiers predict their PMFs.** A recommendation model's output like "0.1, 0.7, 0.2" over three classes is literally a predicted PMF over a class-valued random variable. The loss functions that train classifiers (later in the course) measure how good that predicted PMF is.
- **"A function of an RV is another RV"** is the quiet workhorse: revenue is a function of conversions, a log-transformed feature is a function of the raw one, a loss is a function of prediction and label. You turned "number of heads" into "winnings" with one multiplication; feature engineering is that move, repeated.
- **Tallying how often each value occurs** — building an empirical PMF — is exactly what a histogram, a category count, and a class-balance check all do. You'll do it, in some form, nearly every working day.

---

## 5. ⚠️ The classic slips

- **An RV is a function, not a number.** "X = number of heads" is the *rule*; the number (2, say) is one *realization* of it. Sloppiness here makes later notation (E[X], the sample mean, estimators) incomprehensible. The RV is the machine; a data point is one thing the machine produced.
- **"Random" ≠ "uniform."** X's values 0–3 are *not* equally likely (1/8, 3/8, 3/8, 1/8). Assuming every listed value is equally probable is the same abuse as "lottery: win or lose, 50/50."
- **A PMF must sum to exactly 1.** If your hand-built table sums to 0.95, you dropped an outcome; 1.2, you double-counted. It's the axioms' built-in error detector — use it every time.
- **Discrete tools don't survive the jump to continuous.** For a continuous RV (height, time), P(X = any exact value) = 0 and the PMF dies; densities replace it in the next module. If that sounds paradoxical, good — it's the cliffhanger.

---

## 6. 🔁 Before you move on

1. Define a random variable in one sentence. What part is random, and what part is deterministic?
2. Rebuild the 3-coin PMF table from scratch (outcomes → values → probabilities).
3. What two conditions must any PMF satisfy, and which axiom does each come from?
4. X is the *larger* of two dice rolls. Compute P(X = 6) by counting.
5. Why is a model's class-probability output "a predicted PMF"? What must its entries do to be legal?

> ✍️ **Explain it back:** Explain to a friend why we bother converting "HTH" into "2" — what does turning outcomes into numbers make possible that was impossible before? (Your answer should mention averaging, and the bet's unanswered question.) If it leaves them wanting the next module, this topic — and Module 01 — is ✅.

---

*Module complete. Consolidate with the [cheatsheet](cheatsheet.md) and [problems](problems.md), then advance to `02-distributions/`.*
