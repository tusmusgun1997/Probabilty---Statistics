# 02.1 — Bernoulli & Binomial

> The starting point of the distribution zoo: a single yes/no trial, and what happens when you repeat it. Master this one shape and you've modelled conversions, clicks, defects, and coin flips all at once.

---

## 1. 🎣 Counting the conversions

A landing page converts **20%** of the people who visit it. Ten people visit today.

**What's the chance that exactly 3 of them convert?**

Not "about 2, since 20% of 10 is 2" — the *exact* probability of landing on 3. You can feel that it should be fairly likely (3 is close to 2) but you can't yet put a number on it. That number is the bread and butter of every A/B test, every conversion report, every "did this change actually help?" And it comes from one of the most useful distributions in all of data science.

---

## 2. 💡 From one coin to a handful

Start with the simplest random thing there is: **a single yes/no trial.** A coin flip, a visitor who either converts or doesn't, a part that's either defective or fine. One trial, two outcomes, with probability **p** of "success." That's a **Bernoulli** trial — a labelled coin, where p need not be ½.

Now repeat it. Flip that same coin **n** independent times and **count the successes.** That count is a **Binomial**. The three coins from the last module (counting heads) were exactly this — a Binomial with n = 3 and p = ½, giving the PMF 1/8, 3/8, 3/8, 1/8.

🖼️ *Picture:* a row of n coins, each landing heads with probability p. The Binomial is the distribution of *how many* heads you see — a bar chart that humps around n·p. With n = 10 and p = 0.2 it humps around 2; push p toward ½ and the hump slides to the middle and turns symmetric.

The key question the Binomial answers is always the same: **"out of n independent tries, how likely is exactly k successes?"**

---

## 3. 📐 The formula, and why it has three pieces

A **Bernoulli(p)** variable is as simple as it gets:

$$P(X = 1) = p, \qquad P(X = 0) = 1 - p.$$

A **Binomial(n, p)** variable counts successes across n independent Bernoulli(p) trials:

$$P(X = k) = \binom{n}{k}\, p^{k}\, (1-p)^{\,n-k}, \qquad k = 0, 1, \dots, n.$$

Read it as three pieces multiplied together:

- $p^{k}$ — the k successes each happen with probability p.
- $(1-p)^{\,n-k}$ — the other n − k trials are failures.
- $\binom{n}{k}$ — the number of *different arrangements* of those k successes among n slots (the "choose" from the counting topic). Without it you'd only count *one* ordering.

Its centre and spread:

$$\text{mean} = np, \qquad \text{variance} = np(1-p).$$

**Worked example — the hook.** n = 10, p = 0.2, k = 3:

$$P(X = 3) = \binom{10}{3}(0.2)^3(0.8)^7 = 120 \times 0.008 \times 0.2097 \approx \mathbf{0.201}.$$

So about a **20%** chance of exactly 3 conversions — and the average is np = 2, exactly as intuition guessed.

---

## 4. 🎯 Where the Binomial shows up

- **A/B testing lives here.** "Variant B converted 340 of 2,000 visitors" is a Binomial count. Asking whether B truly beats A is asking whether two Binomial rates differ by more than chance — the foundation of every conversion experiment.
- **Rates and proportions everywhere:** defective items in a batch, emails that bounce, users who churn this month, correct predictions a classifier makes on n test cases. Any "k out of n succeeded" is Binomial.
- **It's the model behind logistic regression.** A classifier predicting a yes/no label is modelling a Bernoulli outcome whose success probability p depends on the features. The Binomial is the group-level version of that.
- **Sanity-checking "is this surprising?"** If a coin you believe is fair shows 8 heads in 10 flips, the Binomial tells you how rare that is — the seed of hypothesis testing later in the course.

---

## 5. ⚠️ The classic slips

- **Forgetting the count term.** $p^k(1-p)^{n-k}$ alone is the probability of *one specific sequence*. You almost always want *any* arrangement of k successes, which needs the $\binom{n}{k}$.
- **Using it when trials aren't independent or p drifts.** The Binomial assumes n *fixed*, trials *independent*, and p *constant*. Visitors during a rush hour, or sampling without replacement from a small pool, break these.
- **Confusing "count of successes" with "trials until the first success."** The Binomial counts successes in a fixed n; the number of trials you wait for a success is a *different* distribution (geometric).
- **Mixing up p and k.** p is the per-trial probability; k is the number of successes. "20% convert" is p, not a count.

> 🔭 *A teaser:* when n is huge and p is tiny (rare events, many chances), the Binomial becomes awkward — and morphs into the next topic's distribution.

---

## 6. 🔁 Before you move on

1. Define a Bernoulli trial and a Binomial in one sentence each. How are they related?
2. What do the three pieces of the Binomial formula each represent?
3. Why is the $\binom{n}{k}$ term necessary — what goes wrong without it?
4. A treatment works on 70% of patients. Of 5 patients, what's the probability all 5 improve? (Set it up.)
5. Name the three assumptions the Binomial requires, and give one real situation that breaks each.

> ✍️ **Explain it back:** A teammate says "our page converts 20%, so out of 10 visitors we'll get 2 conversions." Explain why that's only the *average*, and how the Binomial describes the whole spread of what could actually happen. If they see why "exactly 2" is not guaranteed, this topic is ✅.

---

*Next → 02.2 — The Poisson Distribution*
