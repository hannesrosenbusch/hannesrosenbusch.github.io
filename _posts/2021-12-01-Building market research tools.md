---
title: "Tools!"
date: 2021-12-01
tags: [Applications]
excerpt: "Building a bunch of analytical tools for a market research company"
---
My new employer conducts market research worldwide. Business clients approaching the company occasionally asked for specific methods and market insights which were unfortunately not offered at that point. Thus, I started devising a set of new analytical tools for our team of consultants to simplify and standardize the implementation of these methods. These tools now implement TURF analyses, automatic freetext analyses, and conjoint analyses and are available in various formats (shiny apps, google colab notebooks, and dashboards on the company website). It was very fun and educative to implement these projects at the intersection of the data science, IT, and consulting teams.

I am especially proud of the conjoint analyses webapp which allows consultants to conduct fairly complex operations through a multi-step process. The webapp functionality encompasses the development of an orthogonalized study design, the lay-outing of the stimuli, as well as the final data analysis using Bayesian multilevel models and market simulations. Despite the complexity of the procedure, any research consultant can essentially click through the process autonomously and export results in a format that can be forwarded to business clients. Check out some screenshots from a study on chocolate products below. 

<img src="{{site.baseurl}}/assets/chocolate stimuli.png">

Silly as I am, I tested the app with a choice-based conjoint study identifying the most important features of dating profiles (Spoiler alert: facial attractiveness trumps job status or facial expression). Sorry to all English readers for the screenshot below. This was a study in Germany.


<img src="{{site.baseurl}}/assets/attractiveness conjoint.png">
