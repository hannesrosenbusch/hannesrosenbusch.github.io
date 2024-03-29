---
title: "How well can psychological science predict laughter?"
date: 2024-03-03
tags: [Psychological Science, Machine Learning]
excerpt: "Many scholars have written about humor, but how well can we actually predict joke appreciation?"
---

Since the earliest philosophers, sientists have amassed predictors and theories about when and why someone laughs. What makes one joke funnier than the other? Is humor mostly in the eye of the beholder or are some jokes simply funnier than others?

Many prominent psychological constructs, including a person's character, mood, attitudes, and skills, have been suggested to predict whether they will laugh at a joke.
Similarly, the interaction between a joke's content (e.g., political commentary) and the listener's traits (e.g., political orientation) was suggested to be most useful for prediction. The latter is reflected in most modern content recommendation systems.

In our study, we threw a large collection of predictors from the science of humor at the problem of predicting joke ratings and found...

IT WORKS!

Responses to humor can be predicted with an accuracy that even surpasses the retest-stability of the humor responses themselves, meaning our predictions were closer to people's true reactions than their own reactions at a later time. Note that repeated exposure is a bit of a hot topic in humor appreciation research.

When we look at which of the many psychological predictors enables these predictions, we observed the most classic finding at the intersection of ML and behavioral science: Past behavior is by far the best predictor, and should form part of any recommendation system.

The plot below shows a breakdown of a bunch of the psychological constructs which, despite being associated with humor appreciation, only provided marginal gains over past behavior.

<img src="{{site.baseurl}}/assets/ml humor predictions.png">

If you're interested in the full paper, click [here.](https://www.nature.com/articles/s41598-023-45935-1){:target="_blank"}