# 08.4 — Bayesian vs Frequentist: When to Use Which

> Two schools, one toolkit. They answer genuinely different questions — "how would my procedure behave over many repeats?" versus "what should I believe right now?" — and a mature data scientist reaches for whichever fits the problem, without joining a tribe.

---

## 1. 🎣 Not a holy war

You've now lived in both worlds. Module 00 introduced the two views of probability — frequentist ("long-run frequency") and Bayesian ("degree of belief"). Modules 06–07 built the frequentist machinery: estimators, p-values, confidence intervals. This module built the Bayesian one: priors, posteriors, credible intervals.

Online you'll find people treating this as a religious war, complete with tribes and insults. That's noise. The two frameworks are **two lenses answering two different questions**, each better suited to different situations. Knowing which to pick — and being fluent in both — is a genuine mark of statistical maturity. So let's put them side by side and settle when to use which.

---

## 2. 💡 Two questions, two lenses

- **Frequentist.** The parameter is a **fixed** unknown; the *data* is random. It asks: *"how would my procedure behave if I repeated this experiment many times?"* You get estimators, p-values, and confidence intervals — no prior required. It feels objective, dominates classical science, and is the default for standard A/B testing.
- **Bayesian.** The parameter is **uncertain** — it has a belief distribution; the data is simply what you observed. It asks: *"given my prior and this data, what should I believe now?"* You get posteriors, credible intervals, and direct probability statements — at the cost of choosing a prior. It's natural for folding in knowledge, handling small data, and updating as evidence streams in.

The **MLE-versus-MAP** pairing captures the whole distinction in miniature: maximum likelihood maximizes the likelihood alone (frequentist, no prior); MAP maximizes likelihood × prior (Bayesian). And here's the reassuring part: when data is **plentiful, the two converge** — the prior washes out and both schools land on nearly the same numbers. They diverge most when **data is scarce or prior knowledge is strong.** Neither is "correct"; they're built for different circumstances.

---

## 3. 📐 A side-by-side, and a rule of thumb

| | Frequentist | Bayesian |
|---|---|---|
| The parameter is… | fixed, unknown | uncertain (a belief distribution) |
| Needs a prior? | no | yes |
| Main output | point estimate + confidence interval, p-value | posterior distribution + credible interval |
| Interval means… | the *procedure's* long-run coverage | *probability* about the parameter |
| Point estimate | MLE | MAP / posterior mean |
| Shines when… | lots of data, no strong prior, publication/regulatory norms | small data, real prior knowledge, sequential updating, decision-friendly probabilities |
| Watch out for… | misread p-values & CIs, ignores prior knowledge | prior-dependent, can be gamed via the prior |

**Rule of thumb.** Reach **frequentist** for standard experiments with ample data, when stakeholders or regulators expect p-values and confidence intervals, and when you have no defensible prior. Reach **Bayesian** for small samples, genuine domain knowledge worth encoding, online/sequential updating, or when you need a *direct* probability statement for a decision ("97% chance B wins; expected loss ₹X"). And remember: with big data they largely agree, so don't argue philosophy when it won't change the numbers.

---

## 4. 🎯 Where each shows up

- **Classic A/B testing → usually frequentist:** p-values and confidence intervals are the lingua franca, and many organizations expect them.
- **Bayesian A/B testing → increasingly popular:** reporting "P(B > A) = 0.97" and expected loss is more decision-friendly than a p-value, and handles ongoing monitoring more gracefully (with its own caveats).
- **Machine learning blends both, constantly.** Cross-validation and the bootstrap are frequentist; regularization, probabilistic models, and Bayesian optimization are Bayesian. Nobody in practice is purely one or the other.
- **The real meta-skill:** before choosing a method, identify *which question you're actually asking* — "how does my method behave over repeats?" or "what should I believe given this evidence?" — and pick the tool that answers that question.

---

## 5. ⚠️ The classic slips

- **Being dogmatic.** Treating one school as universally right is amateurish. They're tools; tribalism just narrows your toolbox.
- **Sneaking in a convenient prior.** Choosing a prior to nudge the answer where you wanted it is p-hacking in a Bayesian costume — priors must be defensible.
- **Misreporting intervals across schools.** Calling a confidence interval "credible" (or vice versa) imports the wrong interpretation — the trap from the last topic.
- **Assuming Bayesian "cures" p-hacking.** Continuous monitoring is *less* punishing under Bayesian methods, but priors can still be gamed and multiplicity still bites. No framework replaces honesty.
- **Debating philosophy when data is abundant.** With lots of data the two agree; arguing the interpretation then changes nothing but your afternoon.

---

## 6. 🔁 Before you move on

1. State the different core question each framework answers.
2. How does the MLE-vs-MAP contrast capture the frequentist-vs-Bayesian distinction?
3. Under what conditions do the two approaches give nearly the same numbers?
4. Give one situation where you'd clearly prefer frequentist tools, and one where you'd clearly prefer Bayesian.
5. Why is it a mistake to be dogmatically loyal to one school?

> ✍️ **Explain it back:** Explain to a friend that "how would my method behave over many repeats?" and "what should I believe given this data?" are different questions — and that frequentist and Bayesian tools each answer one of them. If they stop seeing it as a war, this topic — and the Bayesian module — is ✅.

---

*Module complete. Head to the exercises. Next comes Phase V — the data-science frontier: entropy, KL divergence, and the probability ideas that live inside machine learning itself.*
