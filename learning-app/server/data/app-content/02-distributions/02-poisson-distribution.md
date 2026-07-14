# 02.2 — The Poisson Distribution

> The distribution of *counts* when there's no fixed number of trials — just a steady rate and a lot of opportunities. Rare things, watched for long enough, add up in a very predictable way.

---

## 1. 🎣 How many, when there's no "how many tries"?

How many typos are on this page? How many support calls arrive in the next hour? How many errors will a server log in a minute?

The Binomial needed a fixed **n** — ten visitors, five patients. But here there's no obvious n. There isn't a fixed number of "typo opportunities" you can count; there's just a page, and a *rate* at which typos tend to occur. How do you model a count when all you know is "on average, about five per hour"?

---

## 2. 💡 Rare events, endless chances

Imagine the hour split into thousands of tiny slivers of time. In each sliver, an event (a call, a typo, an error) either happens or not — with a *tiny* probability. There are a *huge* number of slivers. That's a Binomial with **n enormous and p tiny**.

When you take that to the limit — n → ∞, p → 0, but their product **n·p = λ** staying moderate — the Binomial collapses into a cleaner shape that depends on just **one number: λ (lambda), the average count.** That shape is the **Poisson distribution.**

🖼️ *Picture:* emails arriving in your inbox, averaging 5 per hour. Some hours bring 2, some bring 8, occasionally 0 or 11 — but centred on 5, and never negative. The Poisson is the distribution of that count.

The one lever is λ: the average number of events per window. Everything about the distribution follows from it.

---

## 3. 📐 One rate runs everything

For a Poisson with average rate **λ**, the probability of seeing exactly k events is:

$$P(X = k) = \frac{e^{-\lambda}\, \lambda^{k}}{k!}, \qquad k = 0, 1, 2, \dots$$

There's no upper limit on k — unlike the Binomial, the count can (in principle) be any whole number. Its signature property:

$$\text{mean} = \lambda, \qquad \text{variance} = \lambda.$$

**The mean and the variance are equal.** That's a fingerprint you can actually check in data.

**Worked example.** Emails arrive at λ = 5 per hour. Probability of exactly 3 in the next hour:

$$P(X = 3) = \frac{e^{-5}\,5^{3}}{3!} = \frac{0.0067 \times 125}{6} \approx \mathbf{0.14}.$$

The assumptions behind it: events occur **independently**, at a **constant average rate**, and never two at exactly the same instant.

---

## 4. 🎯 Where the Poisson shows up

- **Modelling counts is its whole job:** arrivals at a queue, defects per batch, rare-disease cases per city, clicks per minute, goals in a match, mutations per genome. If your target is "a count of things," the Poisson is the first model to reach for (Poisson regression predicts count outcomes directly).
- **Anomaly detection.** If calls average λ = 5 an hour and suddenly you see 20, the Poisson tells you how astronomically unlikely that is under normal conditions — so it flags a real anomaly (an outage, an attack, a viral spike).
- **A built-in data check.** Because mean = variance for a true Poisson, you can test it: compute both from your counts. If the variance is *much* bigger than the mean ("overdispersion"), your data isn't really Poisson — events are clustering or the rate isn't constant, and you need a richer model.
- **It pairs with waiting times.** If *counts* per hour are Poisson, the *gaps between* events follow the exponential distribution — the bridge to the next topic.

---

## 5. ⚠️ The classic slips

- **Assuming a constant rate when it isn't.** Support calls spike at 9 a.m. and after outages; website traffic surges on launch day. A single λ can't describe a rate that changes through the day.
- **Ignoring clustering.** The Poisson assumes events are independent. If one earthquake triggers aftershocks, or one viral tweet triggers more, events clump — and real counts swing wider than Poisson predicts (overdispersion).
- **Forgetting to scale λ to the window.** λ is tied to a time (or space) window. If λ = 5 per hour, then over 30 minutes λ = 2.5, and over a day λ = 120. Match the rate to the window before computing.
- **Using Poisson for things with a natural ceiling.** "How many of my 10 visitors converted?" has a hard max of 10 — that's Binomial. Poisson is for counts with no fixed upper bound.

---

## 6. 🔁 Before you move on

1. In plain words, what situation does the Poisson describe, and what is λ?
2. How does the Poisson arise from the Binomial? What happens to n and p?
3. What is the Poisson's signature relationship between mean and variance, and how would you use it to check whether data is Poisson?
4. A shop averages 2 customers per minute. Set up the probability that 0 customers arrive in the next minute.
5. Give one real situation where the Poisson's assumptions break, and say which assumption fails.

> ✍️ **Explain it back:** A colleague models "number of fraud alerts per hour" and finds the variance is five times the mean. Explain what that mismatch tells them about whether the Poisson is the right model. If they understand *why* equal mean and variance matters, this topic is ✅.

---

*Next → 02.3 — From Bars to Curves: Continuous Distributions*
