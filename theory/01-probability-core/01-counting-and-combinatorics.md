# 01.1 — Counting & Combinatorics

> When outcomes are equally likely, probability is just counting. The catch: the sets are too big to list, and human intuition about "how many" is famously terrible. Here's the system that fixes both.

---

## 1. 🎣 A shuffle nobody has ever seen

Shuffle a deck of cards properly. Here's a claim that sounds absurd: **the exact ordering of the deck in your hands has almost certainly never existed before in human history** — not in any casino, not in any card game ever played.

The number of ways to order 52 cards is $52!$ — a number with **68 digits**. If every human who ever lived had shuffled a deck every second since the Big Bang, we'd have covered a laughably tiny fraction of the possibilities. Your shuffle is, with near certainty, a first.

Counting is where probability gets its numbers. And as you just saw, human intuition about counting is *catastrophically* bad — which is exactly why we need a system.

---

## 2. 💡 Three shortcuts for "how many"

For equally likely outcomes, Module 00 gave us:

$$P(A) = \frac{\text{outcomes in } A}{\text{outcomes in } \Omega}$$

So computing probabilities reduces to **counting two sets**. The problem: the sets are usually too big to list. Three shortcuts cover almost everything.

### Shortcut 1 — The multiplication principle (the tree 🌳)

If a choice happens in stages — 3 shirts, then 2 pants — the total count is $3 \times 2 = 6$ outfits. Picture a tree: 3 branches, each splitting into 2. **Stages multiply.** That's the whole principle, and it's the parent of everything below.

### Shortcut 2 — Permutations: order matters (the podium 🥇🥈🥉)

How many ways can 10 sprinters fill gold–silver–bronze? Gold: 10 choices. Silver: 9 left. Bronze: 8 left. So $10 \times 9 \times 8 = 720$. An **arrangement where order matters** is a *permutation* — a falling product of choices.

### Shortcut 3 — Combinations: order doesn't matter (the committee 🤝)

How many ways to pick a *committee* of 3 from 10 people? Committees have no gold/silver/bronze — picking {Asha, Ben, Chen} is the same committee in any order. The podium count of 720 counted each trio $3! = 6$ times (once per internal ordering). So divide the double-count away: $720 / 6 = 120$.

> 🔑 **The master question:** *"Does order matter?"*
> Order matters → permutation (just multiply falling choices).
> Order doesn't → combination (permutation ÷ the orderings you over-counted).

---

## 3. 📐 Factorials, permutations, choose

| Object | Notation | Formula | Counts... |
|--------|----------|---------|-----------|
| Factorial | $n!$ | $n \cdot (n-1) \cdots 1$ | orderings of $n$ distinct things |
| Permutations | $^nP_k$ | $\dfrac{n!}{(n-k)!}$ | ordered arrangements of $k$ out of $n$ |
| Combinations | $\binom{n}{k}$ | $\dfrac{n!}{k!\,(n-k)!}$ | unordered selections of $k$ out of $n$ |

The combination symbol $\binom{n}{k}$ is read **"n choose k"** and will follow you for the rest of this course (it's the heart of the binomial distribution in Module 02).

Classical probability then becomes:

$$P(A) = \frac{|A|}{|\Omega|} \qquad \text{(both counted with the shortcuts above)}$$

**Worked example.** Draw 2 cards from a 52-card deck. $P(\text{both aces})$?
- Total 2-card hands: $\binom{52}{2} = 1326$ (order doesn't matter).
- Hands that are two aces: $\binom{4}{2} = 6$.
- $P = 6/1326 \approx 0.0045$ — about 1 in 221.

And the hook's claim, made honest: $52!$ has **68 digits**, while the number of seconds since the Big Bang has only about **18**. Even a hundred billion people shuffling once a second since the dawn of time wouldn't dent the space of orderings. The formula doesn't just answer the puzzle — it makes the impossible-sounding claim precise.

---

## 4. 🎯 Where counting earns its keep

- **The binomial coefficient is about to become your daily bread.** "Probability of exactly $k$ successes in $n$ trials" — conversions, clicks, defects — is built directly on $\binom{n}{k}$ (Module 02).
- **Combinatorial explosion is why ML is hard.** Feature selection over 50 features has $2^{50}$ subsets; hyperparameter grids multiply (the multiplication principle working against you); trying all is impossible — which is *why* greedy algorithms, random search, and regularization exist. Recognizing "this space is combinatorially huge" is a core engineering instinct.
- **Cross-validation and A/B assignment are counting problems.** "How many ways to split 1000 users into two equal groups?" — $\binom{1000}{500}$, a number so large that random assignment is effectively never repeated.
- **Careful counting = correct baselines.** "What's the chance two users in a 30-person beta share a birthday?" Intuition says tiny; counting says ~70%. Data scientists who can count don't get fooled by "surprising" coincidences in data.

---

## 5. ⚠️ The classic slips

- **Using permutations when order doesn't matter** (or vice versa). Always ask the master question first. A poker hand is a combination; a password is a permutation.
- **Double-counting.** The committee example: 720 counts each committee 6 times. If your count feels too big by a suspiciously round factor, you've probably counted orderings of identical things.
- **Factorials explode.** They grow faster than exponentials — $13!$ already passes 6 billion. Cancel them *before* multiplying (in $\binom{n}{k}$, the $(n-k)!$ cancels most of the $n!$), rather than computing giant factorials just to divide them away.
- **Assuming equally likely when it isn't.** Counting only gives probabilities when outcomes are *equally likely*. "I either win the lottery or I don't — 50/50" is the canonical abuse.

---

## 6. 🔁 Before you move on

1. State the multiplication principle and give a two-stage example of your own.
2. What's the master question that decides permutation vs. combination?
3. Why does the combination formula divide by $k!$? Explain with the committee story, not the formula.
4. Compute: how many distinct 3-letter codes can you make from 26 letters (a) if letters can repeat, (b) if they can't?
5. A colleague says "we tested 8 features in all combinations of 3 — that's $8 \times 7 \times 6 = 336$ tests." What did they get wrong, and what's the right count?

> ✍️ **Explain it back:** Your friend asks why a poker app says there are "only" 2,598,960 possible 5-card hands when 52 × 51 × 50 × 49 × 48 is over 300 million. Explain the gap in plain English. If you can name exactly what the big number over-counts, this topic is ✅.

---

*Next → [02 — Conditional Probability](02-conditional-probability.md)*
