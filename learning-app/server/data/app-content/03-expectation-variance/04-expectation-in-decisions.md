# 03.4 — Expectation in the Wild: Decisions, Loss & Risk

> Everything so far described uncertainty. This topic *uses* it — to choose. Weighing outcomes by their probabilities turns a fog of possibilities into a single best action, and it's the exact principle a machine-learning model follows billions of times while it trains.

---

## 1. 🎣 One rule behind a thousand decisions

Should you buy the extended warranty? Should the fraud model block this transaction? Should you ship variant B? Should the self-driving car brake now?

Every one of these is a decision made under uncertainty, with costs on one side and payoffs on the other. It turns out they're all the *same* problem, and there's one principled way to solve it — the very same principle that a model quietly applies every time it updates its weights. Learn it once and you can reason about warranties, fraud thresholds, business bets, and loss functions with a single mental tool.

---

## 2. 💡 Weigh the outcomes, then pick

When your choices lead to outcomes that have both a **value** (money, cost, benefit) and a **probability**, the rational choice — over many repetitions — is the one with the best **expected value**: weigh each outcome by its probability, add them up, and compare your options. Framed as costs, you pick the action with the lowest **expected cost (or expected loss)**.

That's it. Insurance, warranties, medical treatment choices, and business bets all reduce to "compute the expected value of each option and take the best one."

Two honest caveats keep this from being naïve:

- **Variance matters for one-shot, high-stakes bets.** A coin flip that pays +₹10 lakh or −₹9 lakh has a great expected value, but if losing bankrupts you and you only play once, expected value alone is reckless. When you can't average over many tries, *spread* (last two topics) re-enters the decision.
- **People value outcomes, not raw rupees.** A guaranteed ₹1 crore usually beats a 50% shot at ₹3 crore even though the gamble has higher expected value — because the *usefulness* of money grows slower than the amount (this is "utility"). Expected value is the baseline; utility refines it.

---

## 3. 📐 Expected value as a decision rule

For each action, the expected value is the probability-weighted sum of its outcomes:

$$\text{EV} = \sum (\text{probability} \times \text{payoff}), \qquad \text{choose the action with the best EV.}$$

**Worked example — the warranty.** A warranty costs **₹2,000**. Without it, the device fails with probability **0.05**, costing **₹20,000** to repair. Your expected cost *without* the warranty is:

$$0.05 \times 20{,}000 = ₹1{,}000.$$

That's **less** than the ₹2,000 warranty, so on average you should **skip it** — the warranty is priced above your expected loss (as insurance usually is). Unless a ₹20,000 hit would genuinely wreck you, in which case you're buying peace from variance, not expected value.

**The same rule trains models.** A model chooses predictions to **minimise expected loss** — and the loss function you pick decides *what* it predicts: minimising expected **squared error** yields the **mean**, minimising expected **absolute error** yields the **median**, and minimising **cross-entropy** yields calibrated **probabilities**. Choosing a loss function *is* choosing which expectation to optimise.

---

## 4. 🎯 Where decision-by-expectation shows up

- **It is the core of machine learning.** Training a model = minimising expected loss (statisticians call it *risk*). Every gradient step nudges parameters to lower the expected loss over the data. This topic is the objective that all of supervised learning is chasing.
- **Classification thresholds are cost decisions.** Missing a fraud (false negative) may cost far more than a false alarm (false positive). The optimal decision threshold isn't 0.5 — it's wherever the *expected cost* of the two error types balances. Cost-sensitive thresholding is expected value, applied.
- **Business and bidding.** Customer lifetime value, whether to launch, how much to bid in an ad auction — all are expected-value comparisons. Ad systems literally bid the expected value of a click.
- **Reinforcement learning** picks actions to maximise *expected future reward* — this exact rule, extended over time.

---

## 5. ⚠️ The classic slips

- **Using raw expected value for ruinous one-shot bets.** A positive-EV gamble can still ruin you if a single bad outcome is catastrophic and you can't repeat. Expected value assumes you survive to play the average out — factor in variance and the risk of ruin.
- **Ignoring utility.** Treating ₹1 as always worth the same ignores that losses and gains feel different and that money has diminishing usefulness. Expected *monetary* value and expected *utility* can point to different choices.
- **Underweighting rare catastrophes.** A tiny probability times an enormous cost can dominate the decision — and those tail probabilities are the hardest to estimate. "It almost never happens" is not the same as "ignore it."
- **Garbage in.** An expected value is only as trustworthy as the probabilities and payoffs you feed it. Confident decisions built on guessed inputs are false confidence.

---

## 6. 🔁 Before you move on

1. State the expected-value decision rule in one sentence.
2. Redo the warranty example with a failure probability of 0.15 — should you buy it now?
3. Why is "highest expected value" sometimes the *wrong* choice for a single, high-stakes decision?
4. How does the choice of loss function change what a model predicts? Give one example.
5. In fraud detection, why is the best decision threshold usually not 0.5?

> ✍️ **Explain it back:** Explain to a friend how deciding whether to buy an extended warranty and how training a machine-learning model are, deep down, the same calculation. If they see "minimise expected cost" underneath both, this topic — and the whole Expectation & Variance module — is ✅.

---

*Module complete. Head to the exercises, then onward to Phase III — where these tools meet the two theorems that make statistics work.*
