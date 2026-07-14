# 00.2 — The Language of Sets & Events

> The vocabulary every later idea is spoken in. Get fluent here and Bayes, distributions, and the rest stop feeling like magic.

---

## 1. 🎣 The "or" that breaks addition

Roll a single die. What's the probability you get **"an even number OR a number greater than 3"**?

If your instinct is to add P(even) = 3/6 and P(>3) = 3/6 to get 6/6 = *certain*... try it. Roll a 1. That's neither even nor greater than 3. So the answer **can't** be 1. Something about naive adding is broken.

The fix isn't a formula to memorize. It's learning to *see the question as a picture of overlapping sets*. Once you can draw it, you can never get it wrong again.

---

## 2. 💡 Every question is secretly about sets

Here's the secret that makes probability click: **every probability question is really a question about sets.**

- The **sample space** is the bag of *all possible outcomes*. For a die: `{1, 2, 3, 4, 5, 6}`.
- An **event** is just a *subset* of that bag — a group of outcomes you care about. "Even" is the subset `{2, 4, 6}`.
- Probability, then, is just **measuring the size of a subset relative to the whole bag.**

And the words "and," "or," "not" are just set operations:

| English | Set idea | Picture |
|---------|----------|---------|
| "A **and** B" (both happen) | **Intersection** — the overlap | the middle slice |
| "A **or** B" (at least one) | **Union** — everything covered by either circle | both circles combined |
| "**not** A" | **Complement** — everything *outside* A | the rest of the box |
| "A and B **can't both happen**" | **Disjoint / mutually exclusive** — circles don't touch | no overlap |

🖼️ **The master picture — a Venn diagram:** draw a rectangle (that's the whole sample space Ω). Draw two overlapping circles inside it (A and B). *Every* "and/or/not" question is now just: *which regions do I shade?*

Back to the hook: "even OR >3" is the **union** of `{2,4,6}` and `{4,5,6}`. Writing out the union without double-counting: `{2, 4, 5, 6}` — that's **4** outcomes, so the answer is **4/6**, not 6/6. The naive add double-counted the overlap `{4, 6}`. *Seeing the overlap* is the whole game.

---

## 3. 📐 Naming the pieces

- **Sample space** $\Omega$ (Omega): the set of all possible outcomes.
- **Outcome** $\omega$: a single element of $\Omega$.
- **Event** $A$: any subset, $A \subseteq \Omega$.

The operations:

| Name | Notation | Meaning |
|------|----------|---------|
| Union | $A \cup B$ | outcomes in A **or** B (or both) |
| Intersection | $A \cap B$ | outcomes in A **and** B |
| Complement | $A^c$ (or $\bar{A}$) | outcomes **not** in A |
| Empty set | $\varnothing$ | the impossible event (no outcomes) |
| Subset | $A \subseteq B$ | every outcome of A is also in B |
| Disjoint | $A \cap B = \varnothing$ | A and B share no outcomes |

Two identities worth knowing cold (**De Morgan's laws**) — they let you swap "and ↔ or" by flipping to complements:

$$(A \cup B)^c = A^c \cap B^c \qquad (A \cap B)^c = A^c \cup B^c$$

In English: *"not (A or B)" = "not-A and not-B."* ("It's not the case that it's raining or snowing" = "it's not raining AND it's not snowing.") You'll use this constantly to rewrite awkward probabilities into easy ones.

---

## 4. 🎯 This is how you slice a dataset

The set language isn't abstract — it's exactly how you carve up data every single day.

- Filtering a table to the rows where **age > 30 AND country = "IN"** is an **intersection of two events**. The "and / or / not" you use to subset data are the intersection, union, and complement from this page.
- A query condition like **age > 30 OR spend > 1000** is a **union**.
- "What fraction of rows satisfy the condition?" is the definition of probability from the intuition section, applied to real data.

When you compute "what fraction of users who churned had *also* filed a support ticket?", you are computing a probability over the **intersection** of two events — whether or not anyone calls it that. Fluency here means you reason about data filters *correctly*, especially the overlaps, instead of double-counting like the broken hook.

---

## 5. ⚠️ The classic slips

- **Adding probabilities that overlap.** The hook's whole lesson: $P(A \cup B) \ne P(A) + P(B)$ *unless A and B are disjoint*. The correct rule (next topic) subtracts the overlap. Double-counting the intersection is the #1 beginner error.
- **Confusing "mutually exclusive" with "independent."** They sound similar and are *completely different* (independence comes later). Mutually exclusive = *can't happen together*. Keep them in separate mental boxes from day one.
- **Forgetting the sample space.** "Probability of an even number" is meaningless until you say *even out of what?* A die? A roulette wheel? Always pin down Ω first.
- **Vague "or".** In everyday speech "or" sometimes means "one or the other but not both." In probability, "A or B" **includes** both unless you say otherwise. Precision prevents errors.

---

## 6. 🔁 Before you move on

1. Define *sample space*, *outcome*, and *event*. How does an event relate to the sample space?
2. Translate to set notation: "neither A nor B happens."
3. State both of De Morgan's laws and give a plain-English example of one.
4. When *does* $P(A \cup B) = P(A) + P(B)$ hold? What's the name for that situation?
5. "What fraction of users who churned had also filed a support ticket?" — which set operation is hiding inside that question?

> ✍️ **Explain it back:** Draw (on paper) a Venn diagram of two overlapping events A and B inside a box Ω. Shade the region for "A or B but not both," and write it in set notation. If the picture and the notation agree, this topic is ✅.

---

*Next → [03 — The Three Axioms & the Rules They Give You](03-axioms-and-rules.md)*
