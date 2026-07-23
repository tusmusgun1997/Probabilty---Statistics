# 00.3 — The Three Axioms & the Rules They Give You

> Three plain statements, written down in 1933, that the entire tower of probability rests on. Truly own these and you can *rebuild* forgotten formulas from scratch instead of frantically searching for them.

---

## 1. 🎣 The whole subject from three rules

Here is a claim that sounds like marketing: **every formula in this entire course — Bayes' theorem, the binomial distribution, the machinery behind p-values, all of it — is squeezed out of just three short rules that a Russian mathematician, Andrey Kolmogorov, wrote down in 1933.**

It isn't marketing. In the early days, probability was a loose bag of clever tricks for gamblers, and it occasionally contradicted itself. Kolmogorov's move was to ask: *what is the smallest set of assumptions that makes probability behave sensibly?* He found three. Everything else — every rule, every theorem you'll ever use — is a **logical consequence** of those three, provable from them with no extra assumptions.

Why should you care about the foundations rather than just learning the formulas? Because when you understand *where a formula comes from*, you can re-derive it when you forget it, adapt it when a problem is slightly different, and immediately smell when a result is wrong. That is the difference between *renting* knowledge and *owning* it. This topic hands you the deed.

---

## 2. 💡 Three statements you already believe

Forget the intimidating word "axiom" — it just means *"a rule so basic that we agree to start from it, without proof."* We take a handful of obvious things as given, and build everything on top. Here are Kolmogorov's three, each explained with the picture from the last topic: probability as *how much of the sample-space box a region covers.*

**Axiom 1 — Probabilities are never negative.** You can't have "less than none" of the box shaded in. The least you can cover is nothing at all, which is zero. So every probability is at least 0. *Obvious — but we write it down anyway, because everything downstream leans on it.*

**Axiom 2 — The whole box has probability 1.** *Something* in the sample space must happen — the die shows *some* face. If you shade the entire rectangle (every possible outcome), you've shaded 100% of it, which on our 0-to-1 scale is 1. So the probability of "the sample space" is exactly 1. *Also obvious.*

**Axiom 3 — For non-overlapping regions, the areas add.** If two events *can't happen together* — disjoint circles that don't touch — then the chance of "one or the other" is just their two areas summed. Shading two separate, non-touching blobs covers exactly the sum of their areas, with nothing counted twice. *Obvious again — and notice the careful condition: **non-overlapping.** That word is doing all the work.*

That's the entire foundation. It is *deliberately* boring — that's the point. From these three unremarkable statements, a tower of remarkable, non-obvious results follows. Let's start pulling them out.

### The rules that fall out

**The complement rule.** Take any event A and its opposite, "not A" (written $A^c$). These two are disjoint — no outcome can be both in A and not in A — and together they fill the whole box (every outcome is either in A or not). So by Axiom 3 their probabilities add, and by Axiom 2 they add up to 1:

$$P(A) + P(A^c) = 1, \qquad \text{which rearranges to} \qquad P(A^c) = 1 - P(A).$$

🔑 This little rule is a **superpower.** Whenever computing an event directly is painful, computing its *opposite* is often easy — and then you just subtract from 1. "At least one head in 10 flips" is a nightmare to compute head-on (so many ways it can happen), but its opposite, "no heads at all" = "all ten tails," is a single easy calculation. Whenever you see the words **"at least one,"** your first thought should be *"...so let me find the probability of none, and subtract."*

**The general addition rule.** This is the exact fix for the die hook from the last topic. When two events *might* overlap, we cannot just add them (Axiom 3 forbids it — it only applies to disjoint events). The corrected rule is:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B).$$

🖼️ *Why subtract the last term?* Because when you add $P(A)$ and $P(B)$, every outcome sitting in the overlap $A \cap B$ gets counted **twice** — once as part of A, once as part of B. Subtracting $P(A \cap B)$ once removes exactly that double-count, leaving each outcome counted a single time. This move — "add the parts, then subtract the over-counted overlap" — is called **inclusion–exclusion**, and it's one of the most useful ideas in all of counting.

---

## 3. 📐 Kolmogorov's axioms, precisely

For a sample space $\Omega$ and events $A, B$ (subsets of $\Omega$):

$$
\textbf{(1)}\quad P(A) \ge 0
\qquad
\textbf{(2)}\quad P(\Omega) = 1
\qquad
\textbf{(3)}\quad A \cap B = \varnothing \ \Rightarrow\ P(A \cup B) = P(A) + P(B)
$$

Reading axiom (3) symbol by symbol: "$A \cap B = \varnothing$" says *A and B share no outcomes* (their intersection is the empty set — they're disjoint); the "$\Rightarrow$" means *"implies / therefore"*; and the right side says *their union's probability is the sum of their probabilities.* So the whole line reads: **"if A and B are disjoint, then the probability of A-or-B equals P(A) plus P(B)."**

Every everyday rule is a **theorem** derived from these three:

| Rule | Formula | In words |
|------|---------|----------|
| Complement | $P(A^c) = 1 - P(A)$ | probability of "not A" is 1 minus probability of A |
| Impossible event | $P(\varnothing) = 0$ | the event with no outcomes has probability 0 |
| Monotonicity | $A \subseteq B \Rightarrow P(A) \le P(B)$ | a bigger event is at least as likely |
| General addition | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | add the parts, subtract the overlap |
| Bounds | $0 \le P(A) \le 1$ | every probability sits between 0 and 1 |

> 🧠 **Do this proof once, by hand — it's two lines and it changes how the whole subject feels.** Claim: $P(A^c) = 1 - P(A)$. Proof: A and $A^c$ are disjoint (Axiom 3 applies) and their union is all of $\Omega$ (Axiom 2), so $P(A) + P(A^c) = P(\Omega) = 1$. Subtract $P(A)$ from both sides: $P(A^c) = 1 - P(A)$. ∎ *That* is what "everything follows from the axioms" feels like — do it yourself and the slogan turns into an experience.

**A fully worked overlap.** Roll a die. Let A = "even" = {2, 4, 6} and B = "greater than 3" = {4, 5, 6}. Naively adding gives $P(A) + P(B) = \tfrac36 + \tfrac36 = 1$ — impossible, since rolling a 1 satisfies neither. The overlap is $A \cap B = \{4, 6\}$, with probability $\tfrac26$. The general addition rule then gives $P(A \cup B) = \tfrac36 + \tfrac36 - \tfrac26 = \tfrac46$ — the correct answer from the last topic. The subtraction wasn't a formality; it was the difference between "certain" and the truth.

---

## 4. 🎯 Where these rules pay off

- **The complement trick is everywhere in engineering.** "What's the probability a system with 20 redundant servers has *at least one* alive?" Computing that directly is brutal (a huge tangle of cases). Computing the opposite — "all 20 are dead" — is one multiplication, and then you do 1 minus that. Reliability analysis, "at least one fraud in this batch," redundancy design: all of them lean on `P(at least one) = 1 − P(none)`.
- **Inclusion–exclusion drives de-duplication and reach.** "How many users did campaign A *or* campaign B reach?" You cannot add the two audiences — everyone reached by both would be double-counted (the die hook, at scale). You subtract the overlap. This is the exact logic behind computing unique reach, funnel overlaps, and any set-based metric.
- **The axioms are a smoke detector for buggy code.** If a multi-class model's predicted probabilities don't sum to 1 (violating Axiom 2), or any is negative (violating Axiom 1), something is broken *before* you even look at accuracy. The three rules give you free, instant sanity checks on any probabilistic output.

---

## 5. ⚠️ The classic slips

- **Applying Axiom 3 to overlapping events.** The naive `P(A) + P(B)` is valid *only* when the events are disjoint. The moment there's any overlap, you must use the general addition rule and subtract it. When in doubt, assume there's an overlap.
- **Probabilities that don't sum to 1.** Over a set of outcomes that are mutually exclusive *and* cover every possibility, the probabilities must total exactly 1 (Axioms 2 and 3 together). If your hand-built distribution sums to 1.2, you've made an error — and the axioms just caught it for you.
- **Forgetting the complement shortcut.** Any problem containing "at least one" is a flag to compute "none" and subtract. Beginners grind through the hard direct sum, make an arithmetic slip, and get a wrong answer that a two-second complement would have nailed.
- **Treating the axioms as trivia to memorise and discard.** They are not a list to recite — they are the *engine*. Re-deriving the complement rule by hand (Section 3) teaches you more than reading this page twice, because it turns "the rules imply everything" from a claim into a thing you've personally watched happen.

---

## 6. 🔁 Before you move on

1. State Kolmogorov's three axioms from memory, and for axiom 3 explain what the condition "$A \cap B = \varnothing$" is doing there.
2. Derive the complement rule $P(A^c) = 1 - P(A)$ using only the axioms. (Two lines — say which axiom justifies each step.)
3. Why does the general addition rule *subtract* $P(A \cap B)$? Answer with the double-counting picture, not the formula.
4. A model outputs class probabilities 0.5, 0.4, 0.3. Which axiom does this violate, and why is that a red flag before you even check accuracy?
5. "Probability of at least one defective item in a batch of 50, if each is defective with probability 0.02." Set up the calculation using the complement trick (you don't have to finish the arithmetic) and say why the direct approach is harder.

> ✍️ **Explain it back:** In your own words, defend the claim "all of probability follows from three rules" to a skeptic. Use the complement rule as your worked example of something non-obvious falling cleanly out of something obvious. If your explanation holds together, this topic is ✅.

---

*Next → 04 — Reading Chance in the Real World*
