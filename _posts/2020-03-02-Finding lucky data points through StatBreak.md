---
title: "R package: StatBreak"
date: 2020-3-02
tags: [Machine Learning, Applications]
excerpt: "An R package allowing users to find the luckiest, conclusion-relevant data points in their data"
---

This project is a reaction to the burdensome and neglected practice of searching datsets for influential and maybe even crucial data points. Practitioners and researchers might overlook that a one or two observations shift their data-based conclusions. On the other hand, people who do report excluding outliers are often seen as suspicious, because they might have done so to actively tweak their results. Even when trying to exclude outliers in good faith, people are faced with a huge mass of alternative procedures, unfamiliar metrics, and arbitrary decision rules. So all in all, outlier analyses are currently very awkward in the social sciences.

I wanted to design a universal tool that circumvents most of this awkwardness while checking whether one or two outliers changed an initial conclusion from the data. The tool's output should take the form of: "Removing observation 5 and 42 leads to a more conservative finding. Please make this explicit and openly weigh including versus excluding these cases". This method would always forward less spectacular findings (i.e., cannot be exploited for QRPs), does not forward an obscure outlier metric, and can be applied to any sample metric. So regardless whether you base your conclusion on a p-value, Bayes Factor, number of extracted dimensions, or local model fit metrics (...), the tool would show you which cases most strongly contributed to your finding, and how many cases would need to be removed for a more conservative finding.

Given the computational challenges of finding specific data subsets (there are many combinations) and wanting to make the tool applicable to any data-based method, I built the tool using genetic algorithms. Genetic algorithms are good at finding optimal combinations of entities (originally: genes, here: observations) and follow a very generalizable recipe. 

So the tool turned out as an R package called StatBreak that gives users a simple function/interface to input their data and analyses. In response, the function returns which and how many observations were crucial for the user's original conclusion.

If you are interested in the details, please read the postprint here: [Open access publication in AMPPS](https://osf.io/fmnxp/){:target="_blank"}