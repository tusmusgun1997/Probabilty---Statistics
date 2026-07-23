# 00.2 — The Language of Sets & Events

> The vocabulary every later idea is spoken in. Get genuinely fluent here — not just familiar — and Bayes, distributions, and the rest stop feeling like magic and start feeling like sentences you can read.

---

## 1. 🎣 The "or" that breaks addition

Roll a single fair die. What's the probability you get **"an even number OR a number greater than 3"**?

Here's the tempting shortcut. The evens are {2, 4, 6}, so P(even) = 3/6. The numbers greater than 3 are {4, 5, 6}, so P(greater than 3) = 3/6. "Or" sounds like "add," so we add: 3/6 + 3/6 = 6/6 = 1. The answer is *certainty* — every roll must satisfy at least one of the two conditions.

Now test that against reality. Roll a **1**. It's not even, and it's not greater than 3. So the event *failed*, which is impossible if the probability were truly 1. Our answer is flatly wrong, and the roll of a 1 proves it.

The fix is not a formula to memorise. It's a way of *seeing* the question — as a picture of two overlapping groups — that makes the mistake impossible to make again. Building that picture is the entire job of this topic, and it's the picture underneath every probability calculation you will ever do.

---

## 2. 💡 Every question is secretly about sets

Here is the idea that makes probability click: **every probability question is really a question about groups of outcomes — that is, about sets.**

Let's define the three words we need, carefully.

- The **sample space** is the collection of *all possible outcomes* of an experiment — the complete list of everything that could happen. For one die, it's the group {1, 2, 3, 4, 5, 6}. Nothing outside this list can occur; everything inside it can.
- An **outcome** is a single member of that list — one specific result, like rolling a 4.
- An **event** is any *sub-group* of the sample space — a selection of outcomes you happen to care about. "Even" is the event {2, 4, 6}. "Greater than 3" is the event {4, 5, 6}. An event is satisfied when the actual outcome is one of its members.

With those in hand, here's the punchline: **a probability is just a measure of how big a sub-group is, relative to the whole.** For equally likely outcomes, "the probability of even" is simply "how many outcomes are even (three), out of how many total (six)" = 3/6. Probability becomes *counting and comparing groups.*

And now the everyday words "and," "or," "not" reveal themselves as operations on those groups:

| English phrase | What it does to the groups | The name |
|---|---|---|
| "A **and** B" — both happen | keep only outcomes in *both* groups (the overlap) | **intersection** |
| "A **or** B" — at least one happens | keep every outcome in *either* group | **union** |
| "**not** A" | keep every outcome *outside* A | **complement** |
| "A and B **can't both happen**" | the two groups share no outcomes | **disjoint** (mutually exclusive) |

🖼️ **The master picture — the Venn diagram.** Draw a rectangle; that's the whole sample space, the bag of all outcomes. Draw two overlapping circles inside it, A and B. Every "and / or / not" question now becomes a single visual question: *which region do I shade?* "And" is the lens-shaped overlap where the circles cross. "Or" is everything either circle covers. "Not A" is the whole rectangle minus circle A.

Return now to the broken hook, with the picture in hand. "Even OR greater than 3" is the **union** of {2, 4, 6} and {4, 5, 6}. Combine the two groups but list each outcome only *once*: {2, 4, 5, 6}. That's **four** outcomes out of six, so the true answer is **4/6** — not the impossible 6/6. What went wrong before is now obvious: 4 and 6 belong to *both* groups (they're in the overlap), and blindly adding 3/6 + 3/6 counted each of them **twice**. Seeing the overlap — and refusing to double-count it — is the whole game.

---

## 3. 📐 Naming the pieces precisely

Intuition in hand, let's fix the notation, because these symbols are the alphabet of everything ahead.

- **Sample space** $\Omega$ — the capital Greek letter *Omega*, the traditional name for "the set of all possible outcomes."
- **Outcome** $\omega$ — lowercase *omega*, a single element of $\Omega$.
- **Event** $A$ — any subset of $\Omega$. We write $A \subseteq \Omega$, where "$\subseteq$" means *"is a subset of"* (every member of A is also a member of $\Omega$).

The operations, with their symbols:

| Name | Notation | Read as | Meaning |
|------|----------|---------|---------|
| Union | $A \cup B$ | "A union B" | outcomes in A **or** B (or both) |
| Intersection | $A \cap B$ | "A intersect B" | outcomes in A **and** B |
| Complement | $A^c$ (also $\bar{A}$) | "A complement" / "not A" | outcomes **not** in A |
| Empty set | $\varnothing$ | "the empty set" | the event with *no* outcomes — the impossible event |
| Disjoint | $A \cap B = \varnothing$ | "A and B are disjoint" | A and B share no outcomes |

A quick memory aid for the two easily-confused symbols: **$\cup$** looks like a **cup** that holds *everything* you pour in from both sets (union); **$\cap$** is the upside-down "cap," the small piece where the two sets *cap over* each other (intersection).

Two identities are worth knowing cold, because they let you rewrite an awkward probability into an easy one. They're called **De Morgan's laws**:

$$(A \cup B)^c = A^c \cap B^c \qquad\qquad (A \cap B)^c = A^c \cup B^c$$

Don't just memorise them — *feel* why they're true. Take the first. The left side, $(A \cup B)^c$, is "not (A or B)" — i.e. **neither** A nor B happened. Well, if neither happened, then A didn't happen ($A^c$) **and** B didn't happen ($B^c$) — which is precisely $A^c \cap B^c$, the right side. In plain words: *"It's not the case that it's raining or snowing"* means exactly *"it's not raining AND it's not snowing."* The second law is the same idea with "and" and "or" swapped. Notice the pattern the laws encode: pushing a "not" inside a bracket **flips union into intersection and vice versa**. You'll reach for this constantly, because "not (this or that)" problems are often much easier to compute as "(not this) and (not that)."

---

## 4. 🎯 This is how you slice a dataset

None of this is abstract — it is *literally* how you carve up data every working day, whether or not anyone says the word "event."

- Filtering a table to the rows where **age > 30 AND country = "IN"** is an **intersection** of two events. The "and / or / not" you use to subset data are the intersection, union, and complement from this page, wearing work clothes.
- A query condition like **age > 30 OR spend > 1000** is a **union**.
- "What fraction of rows satisfy the condition?" is exactly the *size-of-a-subgroup-over-the-whole* definition of probability from Section 2, computed on real data.

Here's where it bites. Suppose you want *"the fraction of users who churned **or** filed a support ticket."* If you naively add "fraction who churned" and "fraction who filed a ticket," you double-count every user who did *both* — the identical mistake as the die hook, now inflating a real business metric. Fluency here means you instinctively reach for the overlap and handle it correctly. Reasoning about data filters — especially where conditions overlap — *is* set theory, and getting it right is a daily, money-relevant skill.

---

## 5. ⚠️ The classic slips

- **Adding probabilities that overlap.** The hook's entire lesson: $P(A \cup B) \ne P(A) + P(B)$ *unless the two events are disjoint.* When they overlap, plain addition double-counts the shared region. (The next topic gives the exact correction, but the reflex to build first is: *"do these two groups overlap?"*)
- **Confusing "mutually exclusive" with "independent."** These sound like cousins and are *completely different ideas*. "Mutually exclusive" (disjoint) means the two events *can't both happen*. "Independent" (defined a couple of modules from now) means knowing one *tells you nothing* about the other. Keep them in separate mental boxes from the very first day; conflating them causes real errors later.
- **Forgetting to pin down the sample space.** "The probability of an even number" is meaningless until you answer *even out of what?* A six-sided die? A roulette wheel? A random integer? The sample space $\Omega$ is the silent foundation of every probability, and stating it first prevents a surprising amount of confusion.
- **Reading "or" as exclusive.** In everyday speech, "coffee or tea?" usually means *one, not both*. In probability, "A or B" **includes** the both-happen case unless you explicitly say otherwise. That single default, quietly assumed, is the difference between the union {2,4,5,6} and something smaller.

---

## 6. 🔁 Before you move on

1. Define *sample space*, *outcome*, and *event*, and say how an event relates to the sample space (including the symbol for "is a subset of").
2. Translate into set notation: "neither A nor B happens." Which De Morgan law did you just use?
3. State both De Morgan's laws and explain, in the rain/snow style, *why* the first one is true.
4. When *exactly* does $P(A \cup B) = P(A) + P(B)$ hold, and what is that situation called?
5. "What fraction of users who churned also filed a support ticket?" — which set operation is hiding inside that question, and which one hides inside "churned *or* filed a ticket"?

> ✍️ **Explain it back:** On paper, draw a Venn diagram of two overlapping events A and B inside a box $\Omega$. Shade the region for "A or B but not both," and then write that region in set notation. If your picture and your notation agree, this topic is ✅.

---

*Next → 03 — The Three Axioms & the Rules They Give You*
