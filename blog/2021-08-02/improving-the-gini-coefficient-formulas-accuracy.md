title: Improving the Gini Coefficient Formula's Accuracy
oldTitle: ImprovingtheGiniCoefficientFormulasAccuracy
---

Just a few days ago, to my big surprise, Vitalik released a blog post about
a topic critical to the functioning of Rug Pull Index. A blog post titled:
"[Against overuse of the Gini
coefficient](https://vitalik.ca/general/2021/07/29/gini.html)."

While I'm super interested to learn more about V's thoughts - I haven't had any
time to read it yet. Still, a friend of mine, and also ex-BigchainDBer, [Ryan
Henderson](https://github.com/rhsimplex), first made me aware of an inaccuracy
in RPI's Gini coefficient calculation for small and/or extreme case populations
as e.g. a population of two with incomes of 0 and 1. He, too, had recently used
the Gini coefficient in a [paper on neural
networks](https://arxiv.org/abs/2105.04854).

Originally using [Wikipedia's
formula](https://en.wikipedia.org/w/index.php?title=Gini_coefficient&oldid=1017020580),
for a maximally inequal populalation e.g. of 0 and 1, the Gini coefficient
calculation ended up being $G=\frac{1}{2}$, where as we'd expect it to be $G = 1$.

However, after having some more discussions with Ryan and my friend [Jost
Arndt](https://github.com/Jostarndt), we settled on a more intuitive derivation
of the Gini coefficient for Rug Pull Index that should also produce reasonable
results for small or extreme populations. For anyone interested, I updated the
[/specification](/specification#CalculatingtheEqualityofLiquidityProvidersinthePoolGinicoefficient)
page with the latest formula.
