# 04.4 — Conditional Expectation & the Best Prediction

> The payoff of the whole module — and a quiet definition of what supervised machine learning actually is. The average of Y for each value of X turns out to be the single best prediction you can make, and estimating it *is* regression.

---

## 1. 🎣 Not the average — the average for people like this

You want to predict someone's weight from their height. The overall average weight is a weak guess — it ignores the height you were just told. What you really want is a **height-specific** average: among people who are 180 cm tall, what's the typical weight? Among 160 cm, what's *their* typical weight?

That "average of Y among everyone with this particular X" is the most useful object in all of predictive modelling. It has a name — the **conditional expectation** — and a remarkable property: it is provably the **best possible prediction** of Y from X. Nearly every regression model you'll ever train is an attempt to estimate it.

---

## 2. 💡 A different average for every slice

Conditioning (Module 01) meant *shrinking the universe*. Apply that to an average: **E[Y | X = x]** is the mean of Y computed *only over the slice of data where X = x.* Slice the population at height 180, average the weights in that slice — that's E[weight | height = 180].

As x sweeps across its values, this slice-average traces out a **curve**: how the typical Y shifts as X changes. Statisticians call it the **regression function**, and it's the shape a scatter plot's "trend line" is trying to follow.

Two facts make it central:

- **It's the best predictor.** If you must guess Y from X and you're judged on squared error, no function of X beats E[Y | X]. This is *why* regression exists — it estimates this curve.
- **It reveals dependence directly.** If X and Y are **independent**, the slice-average never moves: E[Y | X] = E[Y], because knowing X tells you nothing. If they're dependent, the conditional mean *bends* with X. And unlike correlation, this catches **nonlinear** dependence too — a U-shaped conditional mean screams "related" even when correlation reads zero.

---

## 3. 📐 The slice-average, and the tower rule

For discrete variables, the conditional expectation is an ordinary expectation taken inside the conditional distribution:

$$E[Y \mid X = x] = \sum_y y \cdot P(Y = y \mid X = x).$$

It is a **function of x** — one number for each slice — not a single constant like $E[Y]$.

A beautiful identity connects the slices back to the whole, the **law of total expectation** (or "tower rule"):

$$E[Y] = E\big[\,E[Y \mid X]\,\big].$$

In words: average the slice-averages (weighted by how common each slice is) and you recover the overall average — the expectation cousin of the law of total probability from Module 01.

And the headline property, stated precisely: among *all* possible prediction functions g(X), the conditional expectation is the one that minimises the expected squared error,

$$E[Y \mid X] = \arg\min_{g}\ E\big[(Y - g(X))^2\big].$$

**Worked example.** A joint table of study-hours X ∈ {1, 2} and a pass-score Y:

| | Y = 40 | Y = 60 | Y = 80 |
|---|---|---|---|
| **X = 1 hr** | 0.20 | 0.10 | 0.00 |
| **X = 2 hr** | 0.05 | 0.25 | 0.40 |

Slice X = 1 (row total 0.30): the conditional probabilities are $\left(\tfrac{0.20}{0.30}, \tfrac{0.10}{0.30}\right) = \left(\tfrac23, \tfrac13\right)$, so $E[Y \mid X{=}1] = \tfrac23(40) + \tfrac13(60) = \mathbf{46.7}$.
Slice X = 2 (row total 0.70): the conditional probabilities are $\left(\tfrac{0.05}{0.70}, \tfrac{0.25}{0.70}, \tfrac{0.40}{0.70}\right)$, so $E[Y \mid X{=}2] \approx 0.071(40) + 0.357(60) + 0.571(80) = \mathbf{70.9}$.

The conditional mean jumps from 46.7 to 70.9 as study hours rise — that upward movement *is* the dependence, and a regression model's whole job is to learn that curve.

---

## 4. 🎯 Where conditional expectation shows up

- **It is supervised regression, full stop.** A regression model is an estimate of E[Y | X]. Linear regression assumes that curve is a straight line; trees, forests, and neural networks estimate it more flexibly. When someone says "predict the target from the features," they mean *estimate the conditional expectation*.
- **Classification is the same idea.** With a 0/1 label, E[Y | X] = P(Y = 1 | X) — the class probability a classifier outputs. Predicting a probability is predicting a conditional mean.
- **"Controlling for" a variable** — the phrase from every research paper — is conditioning: looking at E[Y | X] within levels of a third factor to strip out its influence.
- **The tower rule powers decompositions** you'll meet again in bias–variance analysis and in reasoning about nested expectations.

This single object — "the average outcome given what you know" — is the cleanest one-sentence definition of what predictive modelling is trying to compute.

---

## 5. ⚠️ The classic slips

- **Confusing E[Y | X] with E[Y].** One is a *curve* (a different prediction for every X); the other is a single number. The whole value of features is that the conditional mean *moves*.
- **Reading "uncorrelated" as "conditional mean is flat."** A zero correlation only rules out a *linear* trend. A U-shaped conditional mean has correlation ≈ 0 yet is strongly non-constant — the conditional expectation sees dependence that correlation misses.
- **Forgetting the loss function sets the target.** E[Y | X] is best under *squared* error. Under absolute error, the best predictor is the conditional *median* (callback to Module 03.4). "Best prediction" always presumes a loss.
- **Extrapolating the curve.** The conditional mean is only trustworthy inside the range of X you actually observed; predicting Y for heights no one in your data has is a guess dressed as a model. And when Y is very spread or multi-modal within a slice, its mean can be a poor summary of any individual.

---

## 6. 🔁 Before you move on

1. Define E[Y | X = x] in words. Why is it a function of x rather than a single number?
2. What is the "best prediction" property of the conditional expectation, and under which loss does it hold?
3. State the tower rule and say what it means intuitively.
4. From the study-hours table, confirm that the conditional mean increases with X — and explain why that reflects dependence.
5. Why can a relationship have correlation ≈ 0 yet a strongly non-constant conditional mean?

> ✍️ **Explain it back:** Explain to a friend why "training a model to predict Y from X" is really "estimating the average Y for each value of X." If they connect regression to the conditional expectation — and see that it's the best guess under squared error — this topic, and the whole Dependence module, is ✅.

---

*Module complete. Head to the exercises, then onward — next comes Phase III's finale: the two limit theorems that turn all of this into working statistics.*
