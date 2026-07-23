# 00.1 — What Is Probability, Really?

> Every topic moves the same way: a puzzle you can't yet answer → the picture that resolves it → the precise version, with every symbol explained → where it earns its keep in data science → the traps → a self-check.

---

## 1. 🎣 The coin already landed

Here is a scene worth sitting with, because your honest reaction to it is the doorway to the entire subject.

I take an ordinary coin, flip it high into the air, catch it, and slap it flat onto the back of my hand — then cover it completely with my other hand. Neither of us can see it. But notice carefully: the coin has **already landed**. Right now, under my hand, it is resting as either heads or tails. Nothing about it is still spinning, still undecided, still "in the air." The outcome is a finished, physical fact.

Now I ask you: **what is the probability it's heads?**

Almost everyone answers "one half" instantly. And that answer is completely reasonable — so hold on to it. But look at what it seems to claim. Probability is supposed to be about *chance*, about things that could still go one way or the other. Yet here there is no chance left: the coin is not going to re-decide itself under my hand. It **is** heads, or it **is** tails. So in what sense is there a "one-half" of anything?

You might try to escape by saying, "well, before you flipped it, it was 50/50." But that only relocates the puzzle, because you are still perfectly comfortable saying "one half" *right now*, with the coin already at rest. So your number is describing something about the **present moment** — a present in which the physical outcome is already fixed and only *your knowledge* is missing.

Sit in that discomfort for a moment, because resolving it is not trivia. It is the difference between someone who can only plug numbers into formulas and someone who understands what those numbers *mean*. This topic answers the question — and the answer, it turns out, comes in two equally valid forms that you will use for the rest of your career.

---

## 2. 💡 A number for how sure you are

Let's build the idea up from the simplest possible starting point, taking nothing on faith.

**A probability is a single number, between 0 and 1, that measures how uncertain we are about whether something is true.**

Why a number *between 0 and 1* specifically? Because we need a scale for "how sure," and this scale has two natural anchors:

- A probability of **0** means *"I'm certain this will not happen"* — the bottom of the scale, total confidence in "no."
- A probability of **1** means *"I'm certain this will happen"* — the top, total confidence in "yes."
- Everything in between measures partial belief. **0.5** sits exactly in the middle: maximally unsure, leaning neither way. **0.9** means "very likely, but I'm leaving room to be wrong." **0.01** means "almost surely not — but not flatly impossible."

Using 0 and 1 as the endpoints is a convention (we could have picked 0 to 100, which is exactly what percentages do). But it's a convention with a deep payoff you'll cash in later: on this particular scale, probabilities *combine* through clean multiplication and addition. File that away.

So at its core, probability is **the mathematics of not knowing.** That already dissolves half of the coin puzzle: the "one half" was never a claim that the coin is physically half-heads. It's a statement about a *state of knowledge.* But that sharpens the real question — knowledge belonging to *whom*, and measured *how*? There are two honest answers, and a good data scientist keeps both.

### View A — Frequentist: probability is long-run frequency

The first answer: **a probability is the fraction of times an event would happen if you could repeat the situation over and over, forever.**

Under this view, "the probability of heads is one half" means something concrete and testable: *if you flipped this coin a hundred, a thousand, a billion times, the fraction coming up heads would settle closer and closer to one half.* The probability is a property not of any single flip, but of the **repeatable process** that produces flips.

🖼️ *Picture a giant tally sheet.* You flip, and flip, and flip, tracking the running fraction of "heads so far." Early on it lurches around wildly — after 4 flips you might sit at 3 heads, a fraction of 0.75. But as the flips pile up, that running fraction stops lurching and tightens onto 0.5, like a marble spiralling down into the bottom of a bowl and coming to rest. The **destination** of that settling is what the frequentist calls the probability.

This lens is ideal whenever the situation genuinely repeats: dice you can roll again, servers handling millions of requests, a button shown to a hundred thousand users.

### View B — Bayesian: probability is degree of belief

The second answer: **a probability measures how strongly *you* believe something, given everything you currently know.**

Under this view, the covered coin has a fixed-but-unknown-to-you value, and your "one half" describes *your information*: you have no reason to favour heads over tails, so you split your belief evenly. Probability here is a property not of the coin, but of **your knowledge about the coin.**

🖼️ *Picture a dial in your head* labelled "how much do I believe this?", running from 0 to 1. Every new piece of evidence turns the dial. If I let you glimpse a sliver of the coin's edge, your dial swings. The number lives in *you*, not in the metal.

This is the lens that comfortably handles the covered coin — and, more importantly, every one-off situation where "repeat it forever" is meaningless: *Will this particular startup succeed? Is this specific email spam? Will it rain here tomorrow?* You cannot re-run history a thousand times, but you can absolutely hold a graded belief and update it as evidence arrives.

### So which one is correct?

**Both.** This is the crucial professional point, so resist the urge to pick a team. They are two lenses for reading the same number, each suited to different situations:

- When the thing genuinely repeats, wear the **frequentist** lens — the long-run-frequency reading is concrete and checkable.
- When the thing is a one-off, or already decided but unknown to you, wear the **Bayesian** lens — the degree-of-belief reading still makes sense where frequencies don't.

Modern data science uses both constantly, often within the same afternoon. Knowing which lens you have on — and therefore what your "0.92" actually claims — is a genuine skill, and this course will keep sharpening it.

---

## 3. 📐 Pinning the number down

We now have a solid intuition. Let's make it precise, because precision is what lets us *compute* rather than just gesture.

We give a name to "the number attached to a statement." We call it **P**, and we write:

$$P(A)$$

Read this aloud as *"the probability of A."* Two symbols, each with a specific job:

- **A** stands for the **event** — the thing we're uncertain about, like "the coin shows heads" or "the die shows an even number." (The next topic defines exactly what an event is; for now, read it as "a statement that becomes true or false once the outcome is known.")
- **P** is a **function** — think of it as a machine that takes an event in and hands a number back. Writing $P(A)$ means "feed the event A into the machine P, and read off the number that comes out."

That output number must obey one basic rule, which simply restates our 0-to-1 scale:

$$0 \le P(A) \le 1$$

Symbol by symbol: the "$\le$" signs mean "less than or equal to," so the whole line reads *"P(A) is at least 0 and at most 1."* The two ends are the anchors from before — $P(A) = 0$ means A is (effectively) impossible; $P(A) = 1$ means A is (effectively) certain. Every legitimate probability lands inside this range, which means it doubles as a **free error-check**: if a calculation ever hands you 1.3 or −0.2, you have made a mistake, guaranteed.

Now — what *is* the number $P(A)$ underneath? Here the two lenses give two definitions that, remarkably, feed into all the same machinery.

The **frequentist** definition writes the long-run frequency as a limit:

$$P(A) = \lim_{n \to \infty} \frac{N_A(n)}{n}$$

Let's unpack every piece, because a formula you can't read is useless:

- **n** — the number of times you repeat the experiment (the number of flips).
- **$N_A(n)$** — how many of those n repetitions the event A actually happened (the number of heads in n flips). It's written as a function of n because it grows as you keep flipping.
- **$\dfrac{N_A(n)}{n}$** — *"times A happened, divided by number of tries"* — the **relative frequency**, i.e. the running fraction from the tally-sheet picture.
- **$\lim_{n \to \infty}$** — "the value this fraction settles toward as n grows without bound." The "$n \to \infty$" underneath reads "as n goes to infinity," i.e. as you keep repeating forever.

Assembled, the formula says exactly what View A said in words: *the probability is the number the relative frequency converges to as you repeat endlessly.* The **Bayesian** definition instead takes $P(A)$ to be a coherent degree of belief — a number you assign to reflect your information, obeying the very same rule $0 \le P(A) \le 1$. The beautiful fact that makes this whole field hang together: **every formula we derive from here on works identically under either definition.**

A concrete anchor for the frequentist picture: tally heads as you flip a fair coin. After 10 flips you might have 7 heads — a fraction of 0.70, wildly off. After 1,000 flips you're around 0.505. After 100,000 you're at roughly 0.4998. The individual flips never stop being random, yet the *fraction* marches steadily toward 0.5. That march has a name — the **Law of Large Numbers** — and it's important enough to earn its own module later. For now, just register that the settling-down you keep picturing is a genuine theorem, not wishful thinking.

---

## 4. 🎯 What a model's 0.92 really promises

Everything above might feel philosophical. It is not — it's the difference between using a machine-learning model correctly and being fooled by it.

Every predictive model you will build eventually boils down to emitting probabilities. A spam filter reads an email and outputs "spam with probability 0.92." A fraud system scores a transaction at 0.03. A medical model estimates a 0.15 chance of a condition. The value of the whole product often rides on trusting those numbers — so "what does 0.92 actually mean?" is not academic; it's operational.

Put on the frequentist lens and the number makes a concrete, testable promise. "Spam with probability 0.92" should mean: *among all the emails this model tags around 0.92, about 92% really are spam.* And you can **check** that. Gather every email the model scored near 0.92, look at how many were truly spam, and see whether it's close to 92%. When a model's stated probabilities line up with the real-world frequencies like this, we say the model is **calibrated** — its 0.92 means what it says.

Models are frequently *not* calibrated, and that's exactly where the danger hides. Suppose you audit those 0.92-scored emails and find only 60% were actually spam. The model is **overconfident**: it announces 0.92 but is right just 60% of the time. Crucially, a model's overall accuracy score won't necessarily reveal this — a model can be decently accurate on average while systematically *overstating* its confidence. If you then auto-delete everything scored above 0.9, taking the number at face value, you'll bin far more real mail than you intended. The single concept of calibration — which is *nothing but* the frequentist definition of probability applied to a model's outputs — is what lets you name and catch this failure. Without the vocabulary, you couldn't even describe what went wrong.

The Bayesian lens does real work here too: it's the foundation of models that report honest *uncertainty* ("I predict 0.7, but I'm not sure"), which becomes essential for the high-stakes decisions later in the course. Both readings, again, pulling their weight.

---

## 5. ⚠️ Where the number fools people

Because probability is about knowledge rather than physical stuff, it invites a specific family of mistakes. Knowing them in advance is half the battle.

- **Treating probability as a property of the object.** People say "this coin *is* 50/50," as if 0.5 were stamped on the metal. It isn't. The 0.5 lives in the repeatable process (frequentist) or in your state of knowledge (Bayesian). The covered coin holds no "0.5" — it's simply heads or tails; the 0.5 is *yours*. That's precisely what the opening puzzle was teaching.

- **The gambler's fallacy.** After five heads in a row, it *feels* like tails is "due." It is not: a fair coin has no memory, so the next flip is still exactly 0.5. Then why does the long-run fraction head toward 0.5 (View A)? Not because the coin *corrects* past imbalances, but because as you pile on more flips, any early streak becomes a smaller and smaller *fraction* of the growing total — it gets **diluted** into insignificance, never actively cancelled. Mistaking "diluted over the long run" for "corrected on the next flip" is the whole fallacy, and it has emptied many wallets.

- **Confusing "probability 0" with "impossible."** For quantities that vary continuously — a person's exact height in metres — every precise value carries probability 0, yet one of them is nonetheless true. "Probability 0" turns out to mean "negligibly rare," not strictly "cannot happen." We'll make this rigorous at continuous distributions; for now, just don't equate the two.

- **Small-sample overconfidence.** Ten flips landing 7 heads does *not* show the coin is biased. Short runs are wildly noisy — the settling-down only kicks in over *many* repetitions. Reading a real signal into a handful of data points is, at industrial scale, the most common error in bad data analysis. The Law of Large Numbers is a statement about the **long** run, and forgetting that one word is expensive.

---

## 6. 🔁 Before you move on

1. In one sentence each, define probability the frequentist way and the Bayesian way.
2. The covered-coin puzzle: which view most comfortably assigns it a probability of 0.5, and *why* does the other view struggle?
3. In the frequentist limit $P(A) = \lim_{n\to\infty} N_A(n)/n$, say in words what each of $n$ and $N_A(n)$ is, and what the whole expression means.
4. What does it mean for a spam classifier to be "calibrated," and how would you test it?
5. A friend says "the roulette wheel hit red 6 times, so black is due." Name the fallacy and explain — using the word *diluted* — why the reasoning fails.

> ✍️ **Explain it back:** Your friend, who has never studied probability, asks: "what does it even mean to say there's a 70% chance of rain tomorrow — it either rains or it doesn't?" Answer them in plain English using *both* lenses, and say which one fits a one-off day like tomorrow better. If you can do this convincingly, this topic is ✅.

---

*Next → 02 — The Language of Sets & Events*
