# 07.3 — Two Ways to Be Wrong: Errors & Power

> A test can fail in two opposite directions, and squeezing one usually inflates the other. Understanding that tension — and the "power" to catch a real effect — is what lets you design an experiment that can actually find what you're looking for.

---

## 1. 🎣 The smoke detector's dilemma

A smoke detector can fail two ways. It can **scream when there's no fire** — a false alarm that has you fanning it with a towel at 3 a.m. Or it can **stay silent during a real fire** — a miss that's genuinely dangerous.

A hypothesis test has the *exact* same two failure modes. And here's the cruel part: for a fixed amount of data, making the detector less trigger-happy (fewer false alarms) makes it slower to catch real fires (more misses). You cannot drive both errors to zero at once. Learning to manage that tradeoff is the difference between an experiment that can detect your effect and one that was doomed before it started.

---

## 2. 💡 Two errors, and the power to avoid the worse one

Line up the two ways a test goes wrong:

- **Type I error (false positive):** you reject H₀ when it's actually true — you "discover" an effect that isn't there. That's the **false alarm.** Its probability is exactly the significance level **α** you chose (usually 0.05).
- **Type II error (false negative):** you fail to reject H₀ when a real effect exists — you **miss** it. Its probability is called **β**.

And the number that matters most in planning:

- **Power = 1 − β** — the probability of **correctly detecting a real effect** when one truly exists. High power = a sensitive detector.

The tension: for a *fixed sample*, tightening α (demanding stronger evidence, fewer false alarms) raises β (more misses) — you've made the detector harder to trip, so it trips late. The way to improve *both* at once is **more data**: a larger n shrinks the sampling distributions (the √n effect, Module 03), pulling the two error rates down together. Power also rises when the true effect is **bigger** or the noise is **smaller**.

The practical punchline: a **low-power test that returns "not significant" tells you almost nothing** — it may have missed a real effect. That's why a null result is only meaningful if the test *could* have found the effect.

---

## 3. 📐 The 2×2 of truth and decision

$$\alpha = P(\text{Type I}) = P(\text{reject } H_0 \mid H_0 \text{ true}), \qquad \beta = P(\text{Type II}) = P(\text{fail to reject} \mid H_1 \text{ true}), \qquad \text{Power} = 1 - \beta.$$

Every test outcome is one of four cells:

| | H₀ actually true | H₁ actually true |
|---|---|---|
| **Reject H₀** | Type I error (α) | ✓ correct detection (power) |
| **Fail to reject** | ✓ correct | Type II error (β) |

**Power depends on four things:** the significance level α, the **effect size** (how big the real effect is), the **noise** σ, and the **sample size** n. The standard convention is to design for **power ≥ 0.80** at the smallest effect worth caring about.

**Worked example (the intuition, no heavy arithmetic).** Detecting a *huge* 20% conversion lift takes very few users — it leaps out of the noise. Detecting a *subtle* 1% lift takes an enormous sample, because it barely peeks above the sampling wobble. **Sample-size planning** works backwards from this: given a target effect, target power, and α, solve for the n that makes the standard error (σ/√n) small enough. Skip this step and you may run a test that never had a chance of detecting your effect.

---

## 4. 🎯 Where errors & power show up

- **Power analysis plans every serious experiment.** "How many users do I need to reliably detect a 1% lift?" is answered *before* launch, from α, the target effect, and the noise. It's a core, expected data-science skill.
- **It explains the empty A/B test.** "We ran it a week, no significant difference" very often means "the test was underpowered and couldn't have found the effect anyway" — a null result that gets misread as "B doesn't work."
- **Choosing α is a cost decision.** Which error do you fear more? A false alarm or a miss? That's the expected-cost thinking from Module 03.4: for a cheap, reversible change you might tolerate more Type I error; for an irreversible, expensive one you tighten α.
- **Multiple tests multiply false alarms.** Run 20 independent tests at α = 0.05 and you *expect* about one false positive by pure chance — the seed of multiple-comparison corrections (next topic).

---

## 5. ⚠️ The classic slips

- **Concluding "no effect" from an underpowered test.** If the test couldn't have detected the effect, its silence is uninformative — not evidence of absence.
- **Forgetting α is per-test.** Twenty tests at 0.05 give roughly a 64% chance of *at least one* false positive. Testing many metrics or variants without correction manufactures "discoveries."
- **Chasing a tiny α without more data.** Demanding α = 0.001 with a small sample crushes your power — you'll miss almost everything real.
- **Skipping the power analysis.** The single most common real-world failure: launching a test with no idea whether it *could* detect the effect you care about.
- **Assuming power fixes bias.** Power is about *random* error only. A biased experiment is wrong no matter how large or sensitive.

---

## 6. 🔁 Before you move on

1. Define Type I and Type II errors, and match each to the smoke detector's two failures.
2. What is statistical power, and why is a null result from a low-power test nearly uninformative?
3. For a fixed sample, why does lowering α raise β — and what improves both at once?
4. Name the four things power depends on.
5. You run 40 A/B tests at α = 0.05 and find 2 "significant." Why should you be cautious?

> ✍️ **Explain it back:** Explain to a friend why a week-long A/B test that finds "no significant difference" might not mean the variant is useless — using the idea of statistical power. If they connect it to "the test may have been too small to detect the effect," this topic is ✅.

---

*Next → 07.4 — A/B Testing in Practice*
