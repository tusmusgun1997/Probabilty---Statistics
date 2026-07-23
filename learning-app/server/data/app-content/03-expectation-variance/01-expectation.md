# 03.1 — Expectation

> The single most useful number you can pull out of a distribution: its long-run average. Fair prices, expected revenue, and the simplest possible prediction all live here.

---

## 1. 🎣 Is the ₹120 bet worth it?

Back in Module 01 we left a bet unfinished. I flip 3 fair coins and pay you **₹100 per head**; the entry fee is **₹120**. We worked out that you win ₹200 or more half the time — but we *couldn't* say whether the bet is actually worth playing.

The missing tool is one number: **what you'd win on average if you played the game over and over.** If that average beats ₹120, you play; if not, you walk. That same number decides insurance premiums, whether a business launches a feature, and what a fair price for *anything* uncertain is. It's called the **expectation**, and it's the heartbeat of this module.

---

## 2. 💡 The long-run average, and the balance point

The **expectation** (or expected value, or mean) of a random variable is the average you'd get if you repeated the experiment a huge number of times. You compute it by **weighting each outcome by how likely it is** — common outcomes count more, rare ones count less.

🖼️ *Picture — the balance point.* Lay the PMF out as bars on a see-saw. The expectation is the **fulcrum where the bars balance.** Tall bars near a value pull the balance point toward them. For a fair die, the bars are equal across 1–6, so it balances dead centre at **3.5**.

Notice something important there: **3.5 is not a value the die can ever show.** The expectation is not "the most likely outcome" and not "what will happen" — it's the *centre of mass* of all the possibilities. It's where reality clusters *on average*, not on any single roll.

---

## 3. 📐 Weighting outcomes by probability

For a discrete variable, sum each value times its probability:

$$E[X] = \sum_x x \cdot p(x).$$

For a continuous variable, the sum becomes an area-weighted integral, $E[X] = \int x\, f(x)\, dx$ — same idea, smooth version.

**Worked example — the die.** $E[X] = \tfrac{1}{6}(1+2+3+4+5+6) = \tfrac{21}{6} = \mathbf{3.5}.$

**Worked example — the bet, finally settled.** Winnings are ₹100 × (number of heads), with the 3-coin probabilities 1/8, 3/8, 3/8, 1/8:

$$E[\text{winnings}] = 0\cdot\tfrac18 + 100\cdot\tfrac38 + 200\cdot\tfrac38 + 300\cdot\tfrac18 = \frac{1200}{8} = \mathbf{₹150}.$$

₹150 average payout against a ₹120 entry → the bet is **favorable**, worth about **+₹30 per play** in the long run. Cliffhanger resolved.

The distributions from Module 02 have clean expectations worth memorising: **Bernoulli(p) → p**, **Binomial(n, p) → np**, **Poisson(λ) → λ**. (Ten visitors at a 20% conversion rate → an expected 2 conversions, exactly as intuition said.)

---

## 4. 🎯 Where expectation shows up

- **"Expected everything" runs the business.** Expected revenue, expected customer lifetime value (LTV), expected cost — every forecast and every "is this worth doing?" case is an expectation.
- **Fair pricing and insurance.** A premium is essentially the expected payout plus a margin. Bets, warranties, and options are all priced off expected value.
- **The mean is the simplest predictor.** If you must guess a number and you'll be graded on squared error, the expectation is the single best guess. Predicting "the average" is the baseline every model must beat.
- **Your data's average estimates it.** The sample mean you compute on a column of data is an *estimate* of that variable's true expectation — the bridge from data to the underlying distribution (and the whole basis of estimation later in the course).

---

## 5. ⚠️ The classic slips

- **Treating the expectation as a guaranteed or typical result.** The die never shows 3.5; a "+₹30 expected" bet still loses on plenty of individual plays. Expectation describes the *long run*, not the next trial.
- **Trusting it blindly with huge variance.** A bet with positive expected value can still bankrupt you if the swings are wild and you can't play many times — expectation alone is half the story (the other half, variance, is next).
- **Forgetting skew.** For a right-skewed variable (income, wait times), a few extreme values drag the mean above the "typical" case, so the expectation can misrepresent a normal experience. The median may describe people better.
- **Reading "expected" as "expected to happen."** It's a technical average, not a prediction of the next outcome.

---

## 6. 🔁 Before you move on

1. Define expectation in one plain sentence, and give the balance-point picture.
2. Why can the expectation be a value the variable can never actually take?
3. Compute the expected value of a single roll of a fair four-sided die (faces 1–4).
4. A lottery ticket costs ₹100 and pays ₹10,000 with probability 0.005 (otherwise nothing). What's the expected value of buying one, and is it favorable?
5. Give one situation where the expectation is a *misleading* summary of what to actually expect.

> ✍️ **Explain it back:** A friend says "the average roll of a die is 3.5, but that's impossible — you can't roll 3.5." Explain what the 3.5 really means. If they get that it's a long-run balance point, not a prediction, this topic is ✅.

---

*Next → 03.2 — Variance & Standard Deviation*
