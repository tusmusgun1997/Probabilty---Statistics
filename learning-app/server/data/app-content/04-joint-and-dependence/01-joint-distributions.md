# 04.1 — Joint Distributions: Two Variables at Once

> Until now, one random variable at a time. But real data comes in columns that *relate* — and the whole point of prediction is exploiting those relationships. This is the machinery for describing two variables together.

---

## 1. 🎣 Height knows something about weight

Height has its own distribution — a bell curve. Weight has its own distribution — also a bell. Studied separately, that's the whole story.

Except it isn't. Tell me someone is unusually **tall**, and you immediately expect them to be **heavier** than average. The two variables carry information about each other. Neither bell curve, on its own, can express that link — a single-variable distribution is blind to relationships. To capture "tall tends to go with heavy," we need to describe the two variables *jointly*, and that opens the door to nearly all of predictive modelling.

---

## 2. 💡 A table over combinations

A **joint distribution** assigns probability to *combinations* of values — not "how likely is X = tall" but "how likely is X = tall **and** Y = heavy."

🖼️ *Picture — a grid.* Rows are values of X, columns are values of Y, and each cell holds the probability of that exact pair. Every cell is ≥ 0 and the whole grid sums to 1. This grid is the complete description of the two variables together.

From the grid you can always recover each variable on its own: **sum across a whole row** to get the probability of that X value (pooling over every possible Y). These row and column totals are the **marginal** distributions — literally the numbers you'd write in the *margins* of the table. The marginals are just the individual bell curves from the hook.

Here's the crucial asymmetry: the joint gives you the marginals, but the **marginals do not give you back the joint.** Two datasets can have identical height distributions and identical weight distributions, yet in one, tall-goes-with-heavy, and in the other, tall-goes-with-light. The relationship lives *only* in the joint, never in the two histograms alone.

---

## 3. 📐 Joint, marginal, and independence

For discrete X and Y, the **joint PMF** is $p(x, y) = P(X = x,\ Y = y)$, with $p(x,y) \ge 0$ and $\sum_x \sum_y p(x,y) = 1$.

The **marginals** come from summing out the other variable:

$$p_X(x) = \sum_y p(x, y), \qquad p_Y(y) = \sum_x p(x, y).$$

X and Y are **independent** exactly when the joint factors into the marginals — the product rule from Module 01, now for whole variables:

$$X \perp Y \iff p(x, y) = p_X(x)\, p_Y(y) \ \text{for every } x, y.$$

**Worked example — umbrellas and rain.** A joint table of P(weather, umbrella):

| | Umbrella | No umbrella | **Row total (Rain)** |
|---|---|---|---|
| **Rain** | 0.30 | 0.10 | **0.40** |
| **No rain** | 0.15 | 0.45 | **0.60** |
| **Column total** | **0.45** | **0.55** | 1.00 |

Marginals (the margins): P(rain) = 0.40, P(umbrella) = 0.45. Are they independent? If they were, P(rain, umbrella) would equal 0.40 × 0.45 = 0.18. But the table says **0.30** ≠ 0.18 — so rain and umbrellas are **dependent** (of course: people carry umbrellas *because* it rains). The gap between 0.30 and 0.18 is the relationship the marginals can't see.

(For continuous variables the grid becomes a smooth **joint density** surface — a hill over the X–Y plane — where probability is *volume* over a region, and marginals come from integrating out the other variable.)

---

## 4. 🎯 Where joint distributions show up

- **Every dataset with two or more columns is a sample from a joint distribution.** The entire enterprise of machine learning is exploiting the *joint* structure between features and a target — the relationships a single column can never reveal.
- **Marginalising is everyday exploration.** Making a histogram of one column is reading a marginal. Cross-tabs, contingency tables, and heatmaps are empirical joint distributions you build without naming them.
- **Dependence is what makes prediction possible.** A feature that's *independent* of the target is useless — its marginal tells you nothing extra. Every useful feature is one whose joint relationship with the target lets you narrow Y down once you know X.
- **It's the foundation for everything in this module** — covariance, correlation, and conditional expectation are all summaries of the joint.

---

## 5. ⚠️ The classic slips

- **Trying to rebuild the joint from the marginals.** You can't. Same two histograms can hide wildly different relationships; you must look at the pairs, not the two columns separately.
- **Assuming independence to multiply.** $P(X, Y) = P(X)P(Y)$ *only* under independence. Multiplying linked variables' probabilities (rain × umbrella) gives the wrong answer, as the example showed.
- **Confusing joint with conditional.** "P(rain and umbrella)" (a joint cell, 0.30) is not "P(umbrella given rain)" (a conditional, 0.30/0.40 = 0.75). Keep the two straight — the conditional rescales to the slice.
- **Judging variables only one at a time.** Two columns can each look perfectly normal alone yet combine into something misleading — a preview of Simpson's paradox, where a trend within every group reverses when the groups are pooled.

---

## 6. 🔁 Before you move on

1. What does a joint distribution describe that two separate distributions cannot?
2. How do you get a marginal distribution from a joint table?
3. Why can't you reconstruct the joint distribution from the two marginals?
4. From the umbrella table, compute P(no rain, no umbrella) and the marginal P(no umbrella). Are weather and umbrella independent?
5. State the independence condition for two variables in terms of the joint and the marginals.

> ✍️ **Explain it back:** Explain to a friend why knowing the distribution of heights and (separately) the distribution of weights still doesn't tell you whether tall people tend to be heavier. If they see that the relationship lives only in the joint, this topic is ✅.

---

*Next → 04.2 — Covariance: Do They Move Together?*
