# Specification

This document outlines how rug pull index's algorithm is ranking data sets.

## Data Acquisition

When ranking all data sets sold on Ethereum, the first step is acquiring meta
data of all markets on [Ocean Protocol](https://oceanprotocol.com) and [Big
Data Protocol](https://bigdataprotocol.com). Both projects host a version of
the [oceanprotocol/market](https://github.com/oceanprotocol/market). They take
their data from an off-chain meta data cache called
[Aquarius](https://github.com/oceanprotocol/aquarius) and a protocol-specific
subgraph implementation.

The following sources are used to collect all relevant data to generate a
ranking:

- From RPI's Ethereum Ergion node, we download the pool's metadata e.g. prices
and liquidity.
- From the Ocean and BDP subgraph, we get all data token addresses including
  their names and symbols.
- From [ethplorer.io](https://ethplorer.io/) and
  [covalent](https://www.covalenthq.com/), we download the top token holders
  for each liquidity pool.
- From
  [oceanprotocol/list-purgatory](https://github.com/oceanprotocol/list-purgatory),
  we download both the `list-accounts.json` and `list-assets.json`.
- From [coingecko](https://coingecko.com), we download the latest price of
  OCEAN/EUR and BDPToken/EUR.

We call the software that downloads all this meta data the
"[crawler](https://en.wikipedia.org/wiki/Web_crawler)". In the past, there have
been nights where the crawler failed. This was when the main page wasn't
showing any reasonable results. When the crawl fails an administrator can
manually login to fix the problem by e.g. re-running the crawl.

Once the crawl has finished, we perform a number of calculations that flow into
the final ranking.

## Calculating the Equality of Liquidity Providers in the Pool ("Gini coefficient")

The Ocean Protocol uses [Automated Market
Makers](https://coinmarketcap.com/alexandria/glossary/automated-market-maker-amm)
(or short: "pools") of [Balancer's](https://balancer.fi/) version 1. When
staking e.g. QUICRA-0/OCEAN, the balancer pool returns a separate
[ERC20](https://eips.ethereum.org/EIPS/eip-20) token that represents a staker's
liquidity in the pool.

As we want to rate a data set's factor of decentralization and hence the
potential (or risk) it has of a single user "pulling the rug" - for each data
set -, we calculate a [Gini
coefficent](https://en.wikipedia.org/w/index.php?title=Gini_coefficient&oldid=1017020580)
from the pool's population of liquidity providers.

In the following paragraphs, we define the Gini coefficent on an intuitive
basis rather than by deriving it from the Lorenz curve [1]. As matrix $M$, we
represent the differences of all stake pairs in the pool, with $d_{ij} = | x_i- x_j|$:

$$
M = \begin{bmatrix}
d_{11} & d_{12} & ... & d_{1n} \\
d_{21} & d_{22} & ... & d_{2n} \\
... & ... &  ... & ... \\
d_{n1} & ... & ... & d_{nn} \\
\end{bmatrix}
$$

As a formula, we can represent $M$ as $PD$, where $n$ represents the
population's size:

$$
PD = \frac{\displaystyle\sum_{i = 1}^n \sum_{j = 1}^n | x_i - x_j |}{n^2}
$$

However, for us to make a statement about the relative inequality of a data
set's pool, it requires us to put the absolute difference $PD$ in relationship
to the a population's worst case inequality. Namely a scenario where one member
earns all total income while others earn nothing. We define this case $M_T$
with $T$ being the population's total income as:

$$
M_{T} = \begin{bmatrix}
0 & 0 & ... & 0 & T \\
0 & 0 & ... & 0 & T \\
... & ... & ... & ...& ... \\
T & T & ... & T  & 0\\
\end{bmatrix}
$$

As a formula, we can represent it as $PD_{T}$:

$$
PD_{T} = \frac{2 (n - 1) T}{n^2}
$$

Where we define the Gini coefficient $G$ to be a relation between $PD$ and $PD_{T}$:

$$
G = \frac{PD}{PD_{T}}
$$

Additionally, since we've discovered [an unfair
advantage](/blog#AdjustmenttoGiniCoefficientCalculation) for pools with many
small liquidity providers, for data sets with **greater than** 100 liquidity
providers we only consider pool shares of **more than** 0.1% in the above
calculation. For pools with **less than** 100 LPs, a stake counts towards the
Gini coefficient $G$ only when its share is **more than** 1% of the pool.

## Determining the EURO Value of a Data Set

As outlined in the section "[Data Acquisition](#DataAcquisition)", a data sets
price in OCEAN or BDPToken is downloaded from Acquarius. The latest tickers for
OCEAN/EUR and BDPToken/EUR are downloaded from coingecko. The EUR value
$v$ of an OCEAN data asset which price is $p_{d}$ is then calculated by multiplying it by
the price of an OCEAN $p_{o}$:

$$
v = p_{d} \cdot p_{o}
$$


## Calculating the Daily Ranking of Data Sets

rug pull index fetches and calculates - as previously mentioned - a set of meta
data daily. Given an exemplary market of only two data sets $A$  and $B$, over a
timespan of two days, a fictional state of rug pull index's data base could
look like this:

|name|liquidity (EUR)|Gini coefficient|date|
|---|---|---|---|
|A|10|0.5|2021-06-22|
|B|2|1|2021-06-22|
|A|5|0.24|2021-06-23|
|B|7|1|2021-06-23|

To now calculate a daily ranking, considering the data of both days (June 22
and June 23), rug pull index does the following: In the "liquidity (EUR)"
column, the overall highest value ("max value") is selected by searching the
data base (it is "10" on June 22). Additionally the smallest Gini coefficient
("min value") is determined ("0.24" on June 23 for). These "min" (Gini
coefficient) and "max" (liquidity (EUR)) values are then used as benchmark to
evaluate the current day's data sets. Assuming the date to be June 23, 2021
we'd calculate the overall ranking of $A$ to be:

$$
A = \frac{5}{10} \cdot \frac{0.24}{0.24} \cdot 100 = 50\%
$$

and $B$:

$$
B = \frac{7}{10} \cdot \frac{1}{0.24} \cdot 100 = 2,91\%
$$

Hence, the main page's ranking would yield the following table for June 23,
2021:


|rank|name|ranking|liquidity (EUR)|Gini coefficient|
|---|---|---|---|---|
|1|A|50%|5|0.24|
|2|B|2.91%|7|1|

Generally speaking, on a day $d$ the rating $r_d$ of a data set, can be
calculated using the overall minimal Gini coefficient $g_{min}$, the overall
maximal liquidity in EUR $l_{max}$, the data set's current liquidity in EUR
$l_d$ and the data set's current coefficient $g_d$:

$$
r_d = \frac{l_d}{l_{max}} \cdot \frac{g_d}{g_{min}} \cdot 100
$$

## Changelog

We pledge to update this specification with every update made to rug pull
index's algorithm.

- 2021-09-05: We stopped using Aquarius entirely.
- 2021-08-09: We stopped retrieving price information from Aquarius and instead
  now use RPI's Ethereum node.
- 2021-08-02: We found a more intuitive and, for small populations fitting,
  derivation of the Gini coefficient from Walter Escudero [1] and replaced it
  with the original formula from Wikipedia.
- 2021-06-22: Specification document first published.

## Feedback and Questions

If you have questions or feedback with regards to this document, please contact
us.

## References

1. ESCUDERO, WALTER, 2018, A NOTE ON A SIMPLE INTERPRETATION OF THE GINI
   COEFFICIENT. Portal.amelica.org [online]. 2018. [Accessed 2  August  2021].
   Available from:
   http://portal.amelica.org/ameli/jatsRepo/196/196830001/html/index.html
