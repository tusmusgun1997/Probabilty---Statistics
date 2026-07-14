# 00.1 — What Is Probability, Really?

> Every topic moves the same way: a puzzle you can't yet answer → the picture that resolves it → the precise version → where it earns its keep in data science → the traps → a self-check.

---

## 1. 🎣 The coin already landed

I flip a fair coin, catch it, and slap it onto the back of my hand — **covered**. It has already landed. It is *definitely* either heads or tails right now.

**What is the probability it's heads?**

Most people say "1/2" without hesitation. But notice something weird: nothing is random anymore. The outcome is already fixed. So what does "1/2" even *mean* for an event that has already happened?

Hold that discomfort. Answering it properly is the difference between someone who plugs into formulas and someone who *understands*.

---

## 2. 💡 A number for how sure you are

A **probability is a number between 0 and 1 that measures how uncertain we are about something.**

- `0` = "impossible / I'm certain it won't happen"
- `1` = "certain / it will definitely happen"
- `0.5` = "maximally unsure — could go either way"

That's it. Probability is the mathematics of *not knowing*. And here's the punchline to the coin puzzle: there are **two legitimate ways to read that number**, and they resolve the paradox differently.

### View A — Frequentist: "probability = long-run frequency"

A probability is the fraction of times an event happens **if you could repeat the experiment forever**. "Heads has probability 1/2" means: flip this coin a billion times, and about half will be heads. Probability is a property of *the repeatable process*.

🖼️ *Picture:* a giant tally sheet. You keep flipping, and the running fraction of heads settles down toward 0.5 — wild and jumpy for the first few dozen flips, then tightening onto 0.5 like a marble settling into a bowl.

### View B — Bayesian: "probability = degree of belief"

A probability is a measure of **your personal certainty**, given what you know. The covered coin *has* a fixed value, but *you* don't know it — so from your state of knowledge, heads is a 50/50 belief. Probability is a property of *your information*, not of the object.

🖼️ *Picture:* a dial in your head labeled "how much do I believe this?" New evidence turns the dial.

### Which is right?

**Both.** They're two lenses, not two teams to pick between.
- The frequentist lens is perfect when you *can* repeat things: dice, servers handling requests, users clicking buttons.
- The Bayesian lens is perfect for one-off, "already determined but unknown" situations: *Will this specific startup succeed? Is this particular email spam?* You can't rerun history, but you can hold a belief and update it.

Modern data science uses **both**, constantly. Knowing which lens you're wearing is a genuine professional skill.

---

## 3. 📐 Pinning the number down

We give a name to "the number attached to an event." A **probability** is a function `P` that takes an event and returns a number, satisfying:

$$0 \le P(A) \le 1$$

- $P(A) = 0$ → $A$ is (effectively) impossible
- $P(A) = 1$ → $A$ is (effectively) certain

The frequentist reading defines this number as the limit of a frequency; the Bayesian reading defines it as a coherent degree of belief. **The math that follows is identical either way** — which is why the whole field works regardless of which lens you prefer.

A concrete anchor for the frequentist view: imagine tallying heads as you flip. After 10 flips you might have 7 heads (0.70 — noisy!). After 1,000 flips you're around 0.505. After 100,000 you're at 0.4998. The *destination* of that running fraction — not any single stretch of it — is the probability. That settling-down has a name, the **Law of Large Numbers**, and it gets a full treatment later in the course.

---

## 4. 🎯 What a model's 0.92 really promises

Every classifier you'll ever build outputs probabilities:

- A spam filter says an email is spam with probability **0.92**.
- A fraud model scores a transaction at **0.03**.
- A recommendation model rates three items **0.1, 0.7, 0.2**.

**What do those numbers mean?** The frequentist reading gives you a testable promise: *of all the emails my model scored around 0.92, about 92% should truly be spam.* When that's true, we say the model is **calibrated** — a hugely important, often-ignored property. When a model says "0.92" but is right only 60% of the time, it's *miscalibrated*, and you now have the vocabulary to diagnose that.

The Bayesian reading, meanwhile, is the entire foundation of honest uncertainty estimates, A/B-test analysis, and Bayesian machine learning later in the course. Both lenses, both essential.

---

## 5. ⚠️ Where the number fools people

- **"Probability is a property of the object."** No — it's a property of *the process* (frequentist) or *your knowledge* (Bayesian). The covered coin has no "0.5" painted on it; the 0.5 lives in the repetition or in you.
- **The gambler's fallacy.** "Five heads in a row, so tails is due." False. A fair coin has no memory; the next flip is still 0.5. Convergence to 0.5 happens because early noise gets *diluted* by later volume, not because the coin "corrects" itself.
- **Confusing "probability 0" with "impossible."** For quantities that vary continuously (a person's exact height), a specific value can have probability 0 yet still be possible. File that away for later.
- **Small-sample overconfidence.** Ten flips giving 7 heads does **not** mean the coin is biased. Short runs are wildly noisy. This mistake, at scale, is most bad data analysis.

---

## 6. 🔁 Before you move on

1. In one sentence each, define probability the frequentist way and the Bayesian way.
2. The covered-coin puzzle: which view most comfortably assigns it a probability of 0.5, and why?
3. Why does the running fraction of heads get *smoother* as flips increase, even though each individual flip stays perfectly random?
4. What does it mean for a spam classifier to be "calibrated"?
5. A friend says "the roulette wheel hit red 6 times, so black is due." Name the fallacy and explain the flaw in two sentences.

> ✍️ **Explain it back:** Your friend, who has never studied probability, asks "what does it even mean to say there's a 70% chance of rain tomorrow — it either rains or it doesn't?" Answer them in plain English using *both* lenses. If you can do this convincingly, this topic is ✅.

---

*Next → [02 — The Language of Sets & Events](02-language-of-sets-and-events.md)*
