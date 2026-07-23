# Module 03 — Expectation & Variance · Problem Set

> **How to use this:** Attempt each problem *closed-book* first, working it through on paper. Solutions are collapsed below each problem; open them only after a genuine attempt.
>
> Difficulty: 🟢 warm-up · 🟡 core · 🔴 stretch

---

## Part A — Expectation (topic 03.1)

**A1** 🟢 A game pays ₹5 if a fair die shows a 6, and nothing otherwise. What's the expected payout of one play?

<details><summary>Solution</summary>

$E[\text{payout}] = 5 \times \tfrac16 + 0 \times \tfrac56 = \tfrac{5}{6} \approx \mathbf{₹0.83}.$ So a fair entry fee would be about 83 paise.
</details>

**A2** 🟡 A carnival wheel pays ₹100 with probability 0.1, ₹20 with probability 0.3, and ₹0 otherwise. It costs ₹25 to play. Is it worth playing on average?

<details><summary>Solution</summary>

$E[\text{winnings}] = 100(0.1) + 20(0.3) + 0(0.6) = 10 + 6 = ₹16.$ That's **below** the ₹25 cost, so on average you lose about ₹9 per play — **not** worth it.
</details>

**A3** 🟡 Recall the distribution means from Module 02. A page converts each of 50 independent visitors with probability 0.08. What is the expected number of conversions?

<details><summary>Solution</summary>

This is Binomial(n = 50, p = 0.08), whose mean is $np = 50 \times 0.08 = \mathbf{4}$ conversions.
</details>

---

## Part B — Variance & standard deviation (topic 03.2)

**B1** 🟢 A fair coin is scored 1 for heads, 0 for tails. Find its variance and standard deviation.

<details><summary>Solution</summary>

$E[X] = 0.5$. $E[X^2] = 1^2(0.5) + 0^2(0.5) = 0.5$. So $\text{Var} = 0.5 - 0.5^2 = 0.25$ and $\text{SD} = \sqrt{0.25} = \mathbf{0.5}$. (Matches Bernoulli variance $p(1-p) = 0.25$.)
</details>

**B2** 🟡 A random variable takes values 0, 10, 20 each with probability 1/3. Compute its mean, variance, and standard deviation.

<details><summary>Solution</summary>

$E[X] = (0 + 10 + 20)/3 = 10$. $E[X^2] = (0 + 100 + 400)/3 = 500/3 \approx 166.7$.
$\text{Var} = 166.7 - 10^2 = 66.7$, so $\text{SD} = \sqrt{66.7} \approx \mathbf{8.16}$.
</details>

**B3** 🔴 Two datasets both have mean 50. Dataset X is {49, 50, 51}; dataset Y is {10, 50, 90}. Without full calculation, which has the larger standard deviation and why? Then confirm by computing both (treat each as equally likely).

<details><summary>Solution</summary>

Y, clearly — its values sit far from the mean while X's hug it.
X: deviations −1, 0, 1 → $\text{Var} = (1 + 0 + 1)/3 = 0.667$, SD ≈ **0.82**.
Y: deviations −40, 0, 40 → $\text{Var} = (1600 + 0 + 1600)/3 = 1066.7$, SD ≈ **32.7**.
Same mean, ~40× the spread — the mean alone would have called them identical.
</details>

---

## Part C — Combining variables & the √n effect (topic 03.3)

**C1** 🟢 X has mean 5 and Y has mean 8. What is E[X + Y]? Does your answer depend on whether X and Y are independent?

<details><summary>Solution</summary>

$E[X + Y] = 5 + 8 = \mathbf{13}$. It does **not** depend on independence — linearity of expectation always holds.
</details>

**C2** 🟡 A single measurement has a standard deviation of 8 mm. What is the standard error of the average of 64 independent measurements?

<details><summary>Solution</summary>

Standard error $= \sigma/\sqrt{n} = 8/\sqrt{64} = 8/8 = \mathbf{1}$ mm — an eightfold sharpening from averaging 64 readings.
</details>

**C3** 🔴 Your estimate currently has a standard error of 4 units from 100 samples. You want to get it down to 1 unit. How many samples do you need in total, and what principle sets that number?

<details><summary>Solution</summary>

Standard error scales as $1/\sqrt{n}$. To go from 4 to 1 is a **4× reduction**, which needs $4^2 = 16$ times the data: $100 \times 16 = \mathbf{1{,}600}$ samples. The √n effect means cutting error by a factor k costs $k^2$ times the data — diminishing returns.
</details>

---

## Part D — Expectation in decisions (topic 03.4)

**D1** 🟢 A ₹50 raffle ticket has a 1-in-100 chance of winning ₹3,000. Using expected value, is buying a ticket a good deal?

<details><summary>Solution</summary>

$E[\text{winnings}] = 0.01 \times 3000 = ₹30$, which is **less** than the ₹50 price — expected value is negative (−₹20 per ticket), so it's not a good deal on average. (People still buy for the utility/thrill, not the EV.)
</details>

**D2** 🟡 An extended warranty costs ₹3,000. Without it, a device fails with probability 0.2, costing ₹12,000 to repair. On an expected-cost basis, should you buy it? What real-world reason might override that answer?

<details><summary>Solution</summary>

Expected repair cost without warranty $= 0.2 \times 12{,}000 = ₹2{,}400$, which is **below** the ₹3,000 warranty — so on average, **skip it**. Override: if a sudden ₹12,000 hit would genuinely wreck your finances, paying ₹3,000 to remove that variance (risk) can still be rational. Expected value isn't the whole story for one-shot, painful losses.
</details>

**D3** 🔴 A fraud model can flag a transaction. A missed fraud (false negative) costs ₹10,000; a false alarm (false positive) costs ₹100 in review time. Intuitively, should the flagging threshold be higher or lower than a neutral 0.5, and why — in terms of expected cost?

<details><summary>Solution</summary>

**Lower** than 0.5. Because a missed fraud costs 100× more than a false alarm, the expected cost of *failing to flag* a borderline case is far higher than the expected cost of flagging it unnecessarily. Minimising expected cost therefore means flagging more aggressively — accepting many cheap false positives to avoid a few catastrophic false negatives. The optimal threshold sits where the expected costs of the two error types balance, which here is well below 0.5.
</details>

---

## ✅ Self-check before advancing to Phase III

From memory, you should be able to:
- Compute an expectation as a probability-weighted average, and say why it needn't be an achievable value.
- Compute a variance with the $E[X^2] - (E[X])^2$ shortcut, and report the standard deviation in real units.
- Apply linearity of expectation (always) and variance addition (independent only), and use the √n standard-error rule.
- Turn a decision with costs and probabilities into an expected-value comparison, and name when raw expected value is the wrong guide.

Anything shaky → revisit that topic. Expectation and variance are the two numbers the entire back half of the course manipulates.
