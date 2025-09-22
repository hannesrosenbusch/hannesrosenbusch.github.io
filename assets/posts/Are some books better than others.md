<h1> Are some books better than others? </h1>

Debating whether a book is "good" or "bad" is a fun pastime, enjoyed by readers and academics alike.
It is undeniable that readers' attitudes about the same book often differ.
However, It is also undeniable that one can make a book better (e.g., by fixing typos), or worse (e.g., by adding irrelevant content).

The question that Luke Korthals and I tackled in this project was: To which <i>degree</i> are book ratings due to rater characterists vs actual book contents?

By analyzing over half a million book ratings from Goodreads, found that the tendencies of indiviual raters matter up to <b>ten times more</b> than book attributes for a given book rating.
<br>
<img src="assets/blog_images/rater vs book plot.png">
<br>
<i>  Top left: conditional probability of a book rating, given another reader’s rating of the same book (“If Rater A gave a book one star, there is a 50% chance that Rater B will give it five stars”). Bottom left: conditional probability of a book rating, given the same reader’s rating of another book. Top right: Consistency between average book ratings (Ns=3), all made about the same book. Bottom right: Consistency between average book ratings (Ns=3), all made by the same reader.</i>

As an aspiring writer, this was certainly a sobering insight. You can't get every reader to like your book. 
In fact, it's guaranteed that, for every book, there are readers who absolutely loathe it.
I could now verify this industry wisdom with my own eyes, using my own dataset.

We ran an additional analysis, checking whether people at least describe similar strengths and weaknesses when reviewing a book, but again, it seems like readers mostly talk about their personal pet peeves.
<br>
<img src="assets/blog_images/review_issue_agreement.png">
<br>
<i>The X axis shows various topics that were brought up in book reviews. The Y axis shows how much more likely it is that a review mentions this topic if it was mentioned in a reference review (i.e., 
Probability(Topic | mentioned in reference) / Probability(Topic | not mentioned in reference). For instance, the black triangular point on the left indicates that a review is twice as likely to mention that the reviewer felt addicted to the book, if the same reviewer made that claim about a different (randomly chosen) book. The gray circle below the triangle indicates that a review is about 1.5 times more likely to contain ‘feeling addicted’ if another (randomly chosen) reviewer made that statement about the same book.</i>

If you are interested in the full paper, check it out [here.](https://arxiv.org/abs/2503.02671)
