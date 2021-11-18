title: The Algorithm; It's Working!
---

On Feb 18, 2021, the maintainer of the "[Oceancap - Datapool Evaluation and
Charting"
(ADASTA-60)](https://market.oceanprotocol.com/asset/did:op:C1e2dcCC25ed82AcF79e233780c0f613B1229F82)"
data set tweeted:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">1.) We decided to
close our Oceancap pool on 21/02 due to the market situation. We are pretty
sure that <a
href="https://twitter.com/oceanprotocol?ref_src=twsrc%5Etfw">@oceanprotocol</a>
is working hard on preparing an updated Marketplace in the near future. We are
waiting on the sidelines and take a break for now.</p>&mdash; Oceancap -
Datapool Evaluation and Charting (@OCharting) <a
href="https://twitter.com/OCharting/status/1362450997050761229?ref_src=twsrc%5Etfw">February
18, 2021</a></blockquote> <script async
src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Since rugpullindex.com listed ADASTA-60 in its TOP 25 index for a while, I was
curious how the ranking algorithm would react to the announcement. Remember,
the algorithm ranks a data set based on its market's performance. It works
"autonomously" and isn't capable of comprehending the statement—instead, it's
rating each data set by its market's performance. Our thesis is that if a data
set's market is strong, its value is high too and vice versa.

Here is ADASTA-60's performance within the context of the announcement:

| Date | Score | Gini | Liquidity (OCEAN) | Price (OCEAN) |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 2021-02-17T23:01:04.300Z | 0.62 | 0.98 | 38969 | 20.80 |
| 2021-02-18T23:01:03.913Z | 0.60 | 0.98 | 37664 | 19.60 |
| 2021-02-19T23:01:03.956Z | 0.55 | 0.98 | 37549 | 19.47 |
| 2021-02-20T23:01:04.073Z | 0.57 | 0.98 | 37549 | 19.47 |
| 2021-02-21T23:03:56.286Z | 0.45 | 0.97 | 21411 | 11.10 |
| 2021-02-22T23:01:03.474Z | 0.22 | 0.96 | 9148 | 4.74 |

Looking at the market's data, we can see the following:

- The share equality of liquidity providers to ADASTA-60's pool has historically
been somewhat on the centralized side, meaning a few LPs had lots of control.
The factor "Gini," close to 1, shows this clearly.
- Within just roughly a week, ADASTA-60's liquidity dried up, resulting in a 4x
  decrease.
- Its price tanked too; ADASTA-60 fell from 20 OCEAN last Wednesday to 4 OCEAN
  (5x).

#### Conclusion

rugpullindex.com's initial thesis that markets are a proxy for data sets has
found some evidence in this particular case. rugpullindex.com successfully
forecasted an investment risk (Gini-Index close to 1) before it manifested
itself. Its algorithm is now automatically decreasing ADASTA-60's stake as the
market reacts to the announcement.

I find this result excited as it's the first time we can see the
collected data and my work in action. 🥳

In the future, I want users to gain the same insights I was able to acquire
today. I'm excited to continue working on that.

Best, Tim
