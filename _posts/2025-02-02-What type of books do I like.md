---
title: "What books do I like?"
date: 2025-02-02
tags: [Fiction, Writing, Psychological Theory]
excerpt: "Analyzing patterns in my own reading enjoyment"
---

Despite keeping track of my own book ratings and writing short reviews for every book that I read (incl. DNFs), I find it difficult to pinpoint my own literary preferences.

I am not alone in this as many people have no personal niche, and often struggle to decide which book would likely make for an enjoyable read.

With about a hundred book ratings in my spreadsheet, I started to look for statistical patterns. Specifically, I built an AI-enhanced pipeline to discover regularities in my reading enjoyment.

<img src="{{site.baseurl}}/assets/isaac_flowchart.png">
<i>The ISAAC pipeline retrieves book-relevant information from the internet, feeds this information into an LLM prompt which outputs binary labels for a range of predetermined book dimensions (e.g., target groups, themes, attributes of main characters).</i>

The AI pipeline worked very well, and I could now examine how individual book characteristics predict my reading enjoyment. Unfortunately, most effects were rather small and uncertainty remained large. This was to be expected, as many book characteristics have only appeared a handfull of times in the books I have read/rated.

<img src="{{site.baseurl}}/assets/isaac_effect sizes.png">
<i></i>

I still got some interesting nudges from this analysis (my enjoyment correlates .29 with the mainstream, and maybe I don't dislike the crime genres as much as I had thought). Naturally, I followed up by training a personal book recommendation model.

<img src="{{site.baseurl}}/assets/isaac_model performance.png">
<i></i>

It appears like the annotation-based recommendation system works reasonably well, gets better as I continue reading, and definitely beats the baseline heuristics of ranking books based on average review scores or genres.

If you are interested in the full paper (co-authored by Erdem O. Meral), please check it out [here](https://arxiv.org/abs/2503.03300){:target="_blank"} 
