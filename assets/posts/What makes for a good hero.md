<h1> What makes for a good hero? </h1>

When I read a book or watch a movie, I often wonder why I like or dislike certain characters. There are many theories about likeable characterists in fictional (and real) characters.

Two alleged predictors are the character's warmth (i.e., friendliness) and their competence.

Thus, I used my new python package (see previous blog post) to annotate the behaviors of characters in 2000+ movies, to score how warm and competent they appear and also collected the IMDB ratings:

<img src="assets/blog_images/warmth competence annotate.png" width="600">


Next, I correlated the personality traits of the protagonists to the audience ratings and, in line with previous theories, movie ratings were higher for warm/competent protagonists.

However, the effects were extremely small. Even when characters scored very high (> 90th percentile) on the respective traits, the relative benefit for movie ratings was more than three times smaller than, for instance, the effect of protagonist gender.

If you're interested, please check out this [preprint](https://arxiv.org/abs/2601.06658)
