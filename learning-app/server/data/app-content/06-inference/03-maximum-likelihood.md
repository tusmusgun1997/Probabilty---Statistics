# 06.3 — Maximum Likelihood Estimation

> The single most important recipe for turning data into parameter estimates. Behind logistic regression, behind least squares, behind the training of nearly every model — it's all one idea: pick the parameter that makes what you actually saw the least surprising.

---

## 1. 🎣 Why does 7 heads scream "0.7"?

You flip a mystery coin 10 times and get **7 heads**. Nobody told you its bias. What's your best guess for its probability of landing heads?

"0.7" — instantly, and it's correct. But *why* 0.7? Why not 0.6, which is also plausible, or 0.65? Your brain did a calculation it can't quite explain. Making that instinct precise gives you **the** method behind how models are fit — from a two-parameter regression to a billion-parameter neural network. It all runs on the same logic your gut just used.

---

## 2. 💡 Which parameter makes the data least surprising?

Here's the flip in perspective. For any *candidate* value of the parameter, ask: **"if this were the true value, how probable would my observed data be?"** That number — the probability of the data, seen as a function of the parameter — is the **likelihood** of that candidate.

- A coin with p = 0.7 makes "7 heads in 10" quite probable — high likelihood.
- A coin with p = 0.1 makes "7 heads in 10" wildly improbable — tiny likelihood.
- A coin with p = 0.9 also makes it less likely than 0.7 does.

**Maximum Likelihood Estimation (MLE)** simply picks the parameter value with the **highest likelihood** — the value under which what actually happened is *least surprising*. Slide p from 0 to 1, compute the likelihood at each, and the curve rises, peaks, and falls; the peak sits exactly at **0.7**. Your instinct wasn't magic — it was finding the top of the likelihood curve.

The subtle but vital reframe: ordinary probability holds the parameter fixed and asks about varying data. The **likelihood holds the data fixed** (it already happened) and asks about varying the parameter. Same formula, read backwards.

---

## 3. 📐 Maximize the likelihood

The **likelihood** is the probability of the observed data as a function of the parameter $\theta$:

$$L(\theta) = P(\text{observed data} \mid \theta), \qquad \hat{\theta}_{\text{MLE}} = \arg\max_{\theta}\, L(\theta).$$

In practice we maximise the **log-likelihood** $\log L(\theta)$ — the logarithm turns awkward products into friendly sums and behaves better numerically, and since log is increasing, the peak is in the same place.

**Worked example — the coin.** With $k$ heads in $n$ flips, the probability of that exact result (up to a constant that doesn't depend on p) is:

$$L(p) = p^{\,k}\,(1-p)^{\,n-k}.$$

Maximising this over $p$ gives the clean answer $\hat{p} = k/n$. For 7 heads in 10 → $\hat{p} = \mathbf{0.7}$, exactly the gut answer.

And here's why the "obvious" estimators from the whole course keep reappearing: they are usually the MLEs. The MLE of a Normal distribution's mean is the **sample mean**; the MLE of a Poisson rate $\lambda$ is the **sample average count**. Maximum likelihood is the principle that *justifies* the natural estimators you'd have picked anyway — and, crucially, it also tells you what to do when the answer *isn't* obvious.

---

## 4. 🎯 Where maximum likelihood shows up

- **It is how models are trained.** "Fitting a model" almost always means "find the parameters that maximise the likelihood of the training data." Logistic regression, Poisson regression, and the training of neural-network classifiers are all MLE.
- **Least squares is secretly MLE.** Fitting a line by minimising squared errors is *exactly* maximum likelihood when the noise is assumed Normal. The most classic method in statistics is a special case of this one idea.
- **Loss functions are negative log-likelihoods.** The cross-entropy loss that trains classifiers is the negative log-likelihood of the labels — so "minimising the loss" and "maximising the likelihood" are the same act (connecting straight back to expected-loss minimisation from Module 03.4).
- **It demystifies "training."** Once you see training as climbing a likelihood surface to its peak, gradient descent, epochs, and loss curves all snap into a single clear picture.

---

## 5. ⚠️ The classic slips

- **Overfitting on little data.** MLE trusts the sample *completely*. Flip a coin 3 times, get 0 heads, and the MLE says p = 0 — "heads is impossible" — obviously too extreme. Tiny samples make MLE overconfident, which is exactly what priors and regularization (next module) exist to fix.
- **Confusing likelihood with the posterior.** The likelihood is $P(\text{data} \mid \theta)$, **not** $P(\theta \mid \text{data})$. Swapping them is the transposed-conditional error from Module 01 (Bayes) — turning one into the other requires a prior, which MLE deliberately omits.
- **Trusting a wrong model.** MLE finds the best parameter *within the model you assumed*. If the assumed distribution is wrong, the estimate is confidently wrong — garbage model in, garbage estimate out.
- **Sensitivity to outliers under the wrong noise model.** Least squares (Normal-noise MLE) is famously yanked around by outliers; a heavier-tailed likelihood would be more robust. The likelihood you choose *is* an assumption.

---

## 6. 🔁 Before you move on

1. Define the likelihood. How does it differ from an ordinary probability?
2. In words, what does maximum likelihood estimation choose, and why is that reasonable?
3. For k heads in n flips, what is the MLE of p, and why does it match intuition?
4. Why is fitting a line by least squares an example of MLE?
5. You flip a coin twice and get two tails. What does the MLE say, and why is that a warning sign?

> ✍️ **Explain it back:** Explain to a friend why "7 heads out of 10 means the coin is about 70% heads" is an application of maximum likelihood — and connect it to how a model gets "trained." If they grasp "pick the parameter that makes the data least surprising," this topic is ✅.

---

*Next → 06.4 — Confidence Intervals*
