# Changelog

## January 13, 2022

First of all: Happy New Year.

Changes:

- We've added an endpoint to our API that allows you to request the historical
  liquidity of each Ocean Protocol and BDP data set starting from January 1,
  2021.
- The endpoint is functionally equivalent to the `GET /prices` endpoint in that
  e.g. the request's `resolution` and `currency` can be adjusted accordingly.
- Check the [docs](/docs#GETHistoricalLiquidityDatabyDID) for more information.

## December 19, 2021

- The historical price endpoint slowed down given the increase of data we have
  to process since crawling hourly. We've added additional indexes in our data
  base to make API retrievals performant again.

## December 17, 2021

- Asset price calculations were broken when requesting the historical price of
  a data token in e.g. the base currency `ocean-protocol`. We fixed the issue.

## December 1, 2021

- A missing price value on 2021-09-16 caused certain API requests in the
  historical price API to fail. We clean up the data set and re-enable querying
  for these time frames.

## November 19, 2021

- Introducing an all new blogging system
  - [/changelog](/changelog) is now separate from blog.
  - All blog posts are listed on [/blog](/blog).
  - Every post has their own site, e.g. [Heureka!](/blog/2021-11-02/Heureka).
  - For all posts, old links, e.g.
    [/blog#OnBuildingTheInfamousVersion2](/blog#OnBuildingTheInfamousVersion2)
    still work. Links to changelog entries were broken.
  - Post titles are now search engine optimized, e.g.
    `/blog/2021-11-15/marketing-week`.
  - All changes were also reflected in the [sitemap.xml](/sitemap.xml).
- In the frontpage's table, instead of color coding links to data sets,
  indicate marketplace with logo.
  [PR](https://github.com/rugpullindex/design-system/pull/21).

## November 15, 2021

- To increase a page's sharability, we're now getting its social preview
  description directly from the file's content.
- Visualize "Score" and "Inequality" column values on main page as circular
  spectrums. Thanks for the feedback to Andrei from Stuttgart and thanks to
  il3ven for the
  [implementation](https://github.com/rugpullindex/design-system/pull/14).

## November 10, 2021

- For [historical price API
  endpoint](/docs#GETHistoricalPriceDatabyDID):
  - allow querying with e.g. `currency=ocean-protocol`.
  - introduce `resolution=1d` and `resolution=1h` options.

## November 9, 2021

- We won the OceanDAO R11 🎊 thanks for voting.
- We've completely open sourced all our [content
  system](https://github.com/rugpullindex/content-system).
- Fix historical price API endpoint and [chart rendering
  issue](https://github.com/rugpullindex/svg-line-chart/issues/36).

## November 7, 2021

- Fix [font rendering
  issue](https://github.com/rugpullindex/design-system/issues/9).
- Remove simulated index chart when requesting default front page
- Increase crawl frequency from daily to hourly

## October 26, 2021

- `/` root endpoint was down as crawler produced faulty result which lead to a
  crash in the chart generation.
- The error is caused by the pricing calls to our Ethereum node being unstable.
  We're observing dropping connections as we had set up the crawl last night
  with unlimited concurrency. To address the problem, requests are being
  throttled to five concurrent requests.
- Parallelize retrieval of data token holder information

Through parallelization, we've now managed to speed up the entire crawl from a
total run time of 18 minutes to only 58 seconds. In simpler terms, this means
that the entire rugpullindex data base including all pricing records can now
get updated in under a minute.

This is the achievement I've been waiting for to increase crawling
frequency from daily to e.g. hourly. But more on that another time.

If you're using RPI to automate anything, please consider that from today
on our crawler stability may be worse over the next few days as we've done
a lot of changes. Fingers crossed that it all works well!

## October 25, 2021

- Speed-up crawling on-chain pricing of assets through parallelization

## October 20, 2021

- Connect
  [rugpullindex/design-system](https://github.com/rugpullindex/design-system)
  with backend server as a [git
  submodule](https://git-scm.com/book/de/v2/Git-Tools-Submodule).
- Publish svg-line-chart@0.3.1 and start using it in RPI backend
- Link on token symbol name now leads to token address page on Etherscan

## October 8, 2021

- We're in the process of [open
  sourcing](https://github.com/rugpullindex/design-system) our front end design
  system
- The website design changed

## September 29, 2021

- Add color theme

## September 28, 2021

- Increase estate to activate nagivation expansion on mobile
- Add prominent call to action to navigation bar ("join our Discord")
- Adjust position of currency switcher ("USD, EUR")

## September 20, 2021

- Shipped new [svg-line-chart](https://github.com/rugpullindex/svg-line-chart)
  features that were added from external and paid open source contributors.
  Awesome work guys!

## September 17, 2021

Here are the recent updates:

- We're in the middle of participating in Gitcoin GR11. We're looking for
  funding to sustain our operations. You can fund us through [this
  page](https://gitcoin.co/grants/2763/rugpullindexcom).
- We've paid our first two technical contributors today. With the help of our
  public
  [handbook](https://github.com/rugpullindex/documents/blob/master/handbook.md#how-to-get-an-offer-approved-to-start-working-on-rpi),
  we've now approved 3 offers and paid out two via
  [invoicing.request.network](https://invoicing.request.network/).
- Switching from EUR to USD is now possible on the main page and in the API.

## September 07, 2021

- Now showing the top 40 data sets (change of +15 from 25)

## September 05, 2021

- Successfully replaced a large part of the old crawler with the rewritten one.
- Remove reliance on Aquarius entirely. We now get data token addresses
  through the subgraphs.
- Adjust /specification to mention correct data sources

## August 28, 2021

- Fixed: Failing crawl

## August 27, 2021

- All Erigon versions before
  [v2021.08.04](https://github.com/ledgerwatch/erigon/releases/tag/v2021.08.04)
  are vulnerable to [a bug that leads to a network
  fork](https://www.theblockcrypto.com/post/115822/bug-impacting-over-50-of-ethereum-clients-leads-to-fork).
- We've fixed the problem in our node.
- Fixed: The Liquidity and Price column showed "NaN" prices

## August 26, 2021

- Add [Staking Risks & Rewards](/ocean-staking-risks-and-rewards-explained) page
- Add [Staking FAQ](/ocean-staking-faq-everything-you-should-know-about-staking-your-ocean-tokens) page

## August 9, 2021

- All pricing related data is now retrieved from RPI's erigon node.
- A list of curated meta data for the top data sets on OCEAN Protocol and Big
  Data Protocol is now available as [npm
  package](https://www.npmjs.com/package/@rugpullindex/list-metadata) or for
  [download on GitHub](https://github.com/rugpullindex/list-metadata). Our
  website makes use of those conciser names in the table view on the front
  page.

## August 5, 2021

- Speed-up `Authorization` header validation in API

## July 29, 2021

- Releasing a new product as part of our API offering. Rug Pull Index's
  [API](/docs) access now includes access to an ETH mainnet [Erigon
  node](https://github.com/ledgerwatch/erigon). Find more details in our API

### July 23, 2021

I finally managed to implement a minimal user system to handle more than one
user for the [API](/docs). I've now sent out two additional keys to community
members that asked for API access. If you, too, are interested in using the
API, please shot us a message on Discord or email.

### July 22, 2021

- Improved footer on website
- Started a Discord server
- Remove ad rows from front page

### July 7, 2021

- In the gini coefficient calculation for
  did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38, the addresses
  0x655efe6eb2021b8cefe22794d90293aec37bb325 and
  0xce7be31f48205c48a91a84e777a66252bba87f0b, their total share in the pool is
  summed up. Simply put, in the gini coefficient calculation they're now
  treated as the same address.
- The above mentioned method hasn't been applied to any potential all time low
  gini coefficients. To learn more, visit
  [/specification](https://rugpullindex.com/specification).
- RPI continues to be committed to bringing transparency to markets. By
  measuring and highlighting the qualities of OCEAN’s data sets, we improve the
  market’s overall health and performance.
  docs [here](/docs#AccessToOurEthereumErigonNode).

## June 29, 2021

- Improve real estate of index table by creating a customized cell to display
publisher, symbol and rank in one place.
- Allow checking out a data set's historical price between Jan 1,
  2021 and today. Click on the little chart icon next to the name.

## June 28, 2021

- Release [historial price API endpoint](/docs#GETHistoricalPriceDatabyDID).

## June 25, 2021

- Database controller refactor: Enable retrieval of e.g EUR prices of data set
  over a date range

## June 22, 2021

- Use [KaTex](https://katex.org/) in Markdown files. An example: $f(x) = x$
- Update old blogposts from [7/12/2020](#7122020) and [30/11/2020](#30112020)
  to use KaTex.
- Updates to [honeybatcher](https://github.com/rugpullindex/honeybatcher) since
intro blog post:
  - Implement and test `deposit` and `withdraw` functions
  - Construct `StateTree` library for handling state transitions
    using a Merkle tree.
  - Start testing unlucky paths.
  - Many discussions with other rollup developer about ideal
    architecture model.
- Add [/specification](/specification) to create more transparency on
  how rug pull index's algorithm ranks data sets on BDP and OP.

### June 18, 2021

- Release a [blog
  post](https://timdaub.github.io/2021/06/18/when-scope-blows-up/) on
  my personal blog about "scope" in software development. It's related to the
  experience I make with building rugpullindex.com and honeybatcher.

## June 8, 2021

- Add structured meta data for better search engine results

## June 4, 2021

The crawler failed tonight due to a potentially invalid assumption of mine.
Both the BDP marketplace as well as OCEAN's instance of Acquarius returned data
for
"[VORSTA-2](https://market.bigdataprotocol.com/asset/did:op:177311f057Bc9B56165947F7465E0E239024FD2d)",
when in my view only Big Data Protocol's instance should have returned anything
as the data set was launched there.

I addressed the problem in a workaround and filled [an
issue](https://github.com/oceanprotocol/market/issues/643) over on the Ocean
Protocol GitHub.

Finally, regarding the calculation of VORSTA-2's gini index, it's easy to see
that [its composition of liquidity
providers](https://etherscan.io/token/tokenholderchart/0x00c522b89e3B769BF47529e11C475E2e734A8A40)
shouldn't yield such a positive gini index of < 0.7 as it does today. If we
look at its balances, they're roughly equivalent to: 

a: 1000

b: 1

c: 1

I haven't had time to look into the math of why its such a positive gini index,
but I'm guessing that it has to do with the the small amount of LPs.  In the
upcoming days, it's likely that I'll, hence, increase the minimum amount of LPs
a data set pool needs to have (e.g. 5). I'll also look into how I can make the
gini index calculation favor popular pools over less populated ones.

## May 27, 2021

- Fix page layout towards better readability. `/` has `max-width: 70rem` while
other pages have `max-width: 50rem`.
- Include `<footer>` in all pages.
- Improve content pages system by allowing to write all pages in markdown.
- Refresh `/about` page and introduce `/faq` page.
- Ad slot prices on on rugpullindex.com are now up to 6x cheaper 300€ to 50€
  per week.

## May 26, 2021

- Release API docs over at [/docs](https://rugpullindex.com/docs).

## May 20, 2021

- Private API endpoint `/api/v1/indices/OP-COMPOSITE-V1/ranks/` was failing the
  daily integration tests. It's fixed. Starting to improve API tests
  structurally now.
- Improve tooltips logic on frontpage and on mobile, table doesn't break page
  layout anymore.
- [svg-line-chart](https://github.com/rugpullindex/svg-line-chart#012) started
  failing to scale the input data points recently such that the most recent
  poins were cut of on the right border of the chart. Should be fixed now.
  v0.1.2 released.

## May 11, 2021

- Send [a PR](https://github.com/emareg/classlesscss/pull/9) to
  [classless.de](https://classless.de/) to add tooltips.
- Add tooltips to explain some of the metrics on the front page. Thanks @Scotty
  for the suggestion!

## May 9, 2021

- Price and liquidity of BDP data sets was calculated incorrectly. Fixed.

## May 8, 2021

- API endpoint `GET /indices/OP-COMPOSITE-V1/ranks/:did` failed integration
  tests and is working again.
- Add multi marketplace support
- [Big Data Protocol](bigdataprotocol.com) assets are now listed. Note the
green and pink link color mapping on the listing.

## May 5, 2021

- A data set can now be priced in OCEAN or other currencies (e.g.
[BDP](https://www.coingecko.com/de/munze/big-data-protocol))

This is a backend change that you won't notice on the website currently.

## April 26, 2021

- Improve front page layout
- Curate extra information on front page

### April 20, 2021

- The crawler has started to fail more frequently again. I'm assuming that it's
  related to users accessing the website around the time of the crawl. I don't
  do any database connection management at the moment lol.
- I'm starting to think about a practical implementation of a smart contract
  index pool of assets. A major questions is how to use a little gas as
  possible. As an exercise, I did some research and published it on my blog:
  "[Saving Gas on the Ethereum
  Mainnet](https://timdaub.github.io/2021/04/19/ethereum-web3-saving-gas-mainnet/)."
- I'm still improving the implementation of
  [svg-line-chart](https://github.com/TimDaub/svg-line-chart/)
- The crawl has started to take longer. Hence, the page is now refreshed at 1am
  every midnight. This may change again in the future. I want to see if I can
  address the crawler's problems with this fix.

## April 13, 2021

- Got rid of dygraph.js by using a library I built myself with zero network
dependencies: [svg-line-chart](https://github.com/TimDaub/svg-line-chart/)

## April 8, 2021

- Received grant of OceanDAO Round 4 and swapped it to USDC
- Started work on [svg-line-chart](https://github.com/TimDaub/svg-line-chart/)
  to improve website performance and reliability.
- Started enabling `Cache-Control` headers for all static assets

## March 26, 2021
### The Interview

Last week, Kevin from datapeek.org asked me to do an interview with him. As I
found the idea fun, I said yes and we had an email-based chat. The interview
ended up being mostly about rug pull index and how I ended up working on it.
It was my first time ever being interviewed. And what can I say; I enjoyed
being in the limelight for once!

You can read it [here](https://datapeek.org/interview/rugpullindex).

That's all for this week. I'm wishing you a nice weekend. And hoping for
myself that the crawlers stay online this time around.

Best,
Tim

## March 23, 2021
### Minor Updates

When you garden plants, sometimes just a little trimming of one or two leaves
or branches is required to allow the plant to grow further. Today, after having
a call with one of my users, I felt the need for trimming.

I updated to the latest version of classless.de, my CSS framework, and I
rearranged the front page to show the information more quickly. Just a while
back I read an essay called ["Speed is the Killer
feature"](https://bdickason.com/posts/speed-is-the-killer-feature/). Today, I
feel like it reflects my principles for building web apps well.

I hope you like the updated front page.

Best,
Tim

## March 22, 2021
### The Crawler Crisis

Good morning,

oh how I wish to have a solution to the crawler problem that rugpullindex.com
is currently experiencing! As I said, I've switched from Ethplorer to Covalent
recently, as I had experienced a bug with Ethplorer. Well, now it turns out
that Covalent is less reliable than Ethplorer. In fact, Ethplorer came back
with a bug fix recently.

So since it seems that I shouldn't rely on neither of them 100%, I'm now
changing the code to use them both. Distributing my risks. Dogfooding my own
mantras. If one fails, I'll just use the other.  Hopefully that'll solve the
problem for good.

That's all for now. Planning to do some further updates this week.

Best,
Tim

## March 20, 2021

Tonight, the crawler broke when our service provider Covalent returned a
non-JSON response. I fixed it by now catching that error and by re-starting the
crawl.

## March 13, 2021

Good morning,

this whole deal with the service provider is turning into a bit of a disaster.
Since tonight, it's returning a 400 error for even more assets. I've received a
response to my email that I sent to support. "We will investigate the issue and
fix it in the case of a bug.", they told me on Thursday.

For me, the whole thing is starting to frustrate me. I knew the risk of being
dependent on a third-party service provider. And, I already had plans for my
own crawler in place. I feel I'm quite unlucky that this is happening now. But
it's not in my control and so I'm currently trying to fix the problem in
another way.

I've thought about building a crawler myself now. But I don't think I'll be
quick enough. Maybe, there's other providers with similar functionality
that I could use.

I'll keep you updated.

### Update 11:20 CET

I researched online and found a similar provider. I can't speak to its
reliability either, but using it addresses the problem for now. I've deleted
the crawl of tonight and re-crawled.  The website now displays the correct
ranking again. The issue is resolved.

## Mar 11, 2021

Tonight the crawler threw an error when retrieving the top holders of
`0x5e9939f6D959ffE9B328243DfaDBEED9C46ac197` (token: EXCANE-93). Below is an
image of the API service's logs.

![](/excane-93-error.jpg)

You can see that the request stopped working tonight and instead threw a 400
error. For now, I've added an exception route that allows the crawler to
continue when receiving such an error.

I've reached out to the service's support too. For the time being though it's
likely that EXCANE-93's information is displayed incorrectly.  I'll keep you
updated.

## Mar 10, 2021

- Working towards displaying the index' performance as a chart
- Improve structure of main data base query. A small portion had static
  data embedded. This was moved into prepared statements.

## Feb 24, 2021

- Bug fix: Yesterday, I added anchors to each headline on this page, e.g.
  [https://rugpullindex.com/blog#the-algorithm%3B-it's-working!](https://rugpullindex.com/blog#the-algorithm%3B-it's-working!).
  However, for links that have a punctuation character at the end, Whatsapp and
  Telegram didn't end up making them clickable. They think a user wants to end
  a sentence with the exclamation mark character and not that it's part of the
  link. I now fixed the problem by removing all special characters from anchor
  links.
- I designed and added the rugpullindex.com logo. It's a rug with a `#` :)
- I submitted [my
  proposal](https://port.oceanprotocol.com/t/rugpullindex-com-round-3-proposal/434)
  to the OceanDAO's Round 3
- Bug fix: Crawler used to run at midnight in "Europe/Berlin" time zone and not
  UTC. That has caused numerous problems in the past. To make it all work, I
  had to perform an unscheduled crawl before relaunching the server. It could
  have been that the site was down for a few minutes. Anyways, now working in
  the backend should go more smooth.

## Feb 17, 2021

- Further adjustment of ranking algorithm. I had forgotten adding liquidity in
  EUR in one subquery.
- Added data base index to improve performance of uncached request to root `/`

## Feb 16, 2021

- Refactor some code: I simplified the query that constructs the index ranking.
  Over the long term, this change will allow me to make adjustments with more
  confidence about the system's correctness.
- Ranking now uses Liquidity in EUR to create a relative ranking among data
  sets.  See post from Feb 12, 2021 for details.

## Feb 15, 2021

As announced on Feb 12, 2021, liquidity and price are now displayed in EUR.
However, EUR values are not yet used within the ranking algorithm.

## Feb 14, 2021

Midnight: After months, I made some changes to the crawler again which lead the
page to be down the last two nights. The reason was a bug in the price crawler.

I was trying to get OCEAN's current EUR price and I was using Coingecko's
[historical
API](https://www.coingecko.com/api/documentations/v3#/coins/get_coins__id__history),
that didn't send back any results (because it's "historical" and not
"present" time). The crawler is now using Coingecko's [simple
API](https://www.coingecko.com/api/documentations/v3#/operations/simple/get_simple_price)
to get the price.

A few reflections on what I learned by having to open my
laptop before breakfast and before going to bed on a Saturday:

- Having to be responsible for a website on the weekend is painful.
- Running a crawling script at midnight is good for the user and bad for me. I
  only ever find production bugs at night or in the morning. The users probably
  never notice...

Working on a website that always displays new information is fun. I check
rugpullindex.com myself daily. I like the feeling of gardening the website.
But soon I want to find ways to improve upon the above mentioned issues. It may
just be a matter of improving the crawler's tests.

Best,
Tim

## Feb 12, 2021

Today marks an important day in the life of rugpullindex.com and OCEAN. When I
was trying to compartmentalize the crawler's myriad subqueries, I noticed that,
as intended, all data sets are normalized based on the all-time highest
liquidity a data set pool reached.

What I had neglected was that I used OCEAN as the unit of liquidity. It makes
no sense, though, as the goal is to compare any data set relative to the
all-time best performing data set. With a fluctuating token, however, this may
not work well.

Consider the data set QUICRA-0 that had 499,296 OCEAN in its pool
yesterday—assuming that OCEAN/EUR traded at 0.5 EUR yesterday, QUICRA-0 had
roughly 250,000 EUR liquidity in its pool. Now, consider that today the price
of OCEAN increased by another 0.5 EUR to 1 EUR. But no change has occurred in
QUICRA-0's liquidity pool. It means that while the number of OCEANs backing
QUICRA-0 didn't change, its performance increased as the price of OCEAN
doubled. Compared to yesterday QUICRA-0 is doing 2x as good!

Hence, I plan to measure a data set's liquidity now in fiat or specifically
EUR. I've already finished the adjustment of the crawler. I wasn't able to
finish integrating the change into the UI. But once the update is live, I'll
inform you about it in detail.

Best, Tim

## Feb 8, 2021

👋
Today marks the first day that I'm "getting paid" for working on
rugpullindex.com. It's because I came in seventh place in OceanDAO's round 2 of
grant proposals and was rewarded 10k OCEAN. My original plan was to use the
DAO's grant as a freelance budget to work on rugpullindex.com properly. Hence,
I swapped them to USDC.

Having a stable supply of digital currency now means I can "invoice"
rugpullindex for the work I'm doing. It's really just a fancy way of doing
accounting. There's no official company or anything. Still, it's a big step as
it means that I'm now able to justify spending time on the project during "my
working hours."

And it shows because I've been already working on it for a day. I've expanded
the navigation and slimmed down the landing page. I've done it to get better
results on PageSpeed Insights and make rugpullindex.com perform better in
search engine results. As a result, there's now an about page and this blog.
I'm planning to deprecate the old /changelog.txt.

Another SEO-thing I've done is that I've added a /sitemap.xml for crawlers. I'm
tracking the website's performance on Google's Search Console now too. My plan
is to make the website more informative over time.

And that's all I've to say for today. I hope you like the changes. And I also
wanted to thank everyone that voted for me in the OceanDAO too. Thanks!

Hoping to see you around here soon again.

Best,
Tim

## 01/02/2021

- Renew SSL certificate

## 20/01/2021

- Add Substack widget for newsletter subscription to website.

## 20/01/2021

Wow, it's been a while since I wrote something here. Still, I was busy
thinking about next steps for rugpullindex.com. Mainly, about receiving
funding to being able to continue the project.

And, indeed, I'm recognizing a promising opportunity ahead with Ocean
Protocol's "OceanDAO" [1] having its second grants funding round on Feb 1,
2021. On Monday, it lead me to write a first draft for a grants proposal [2].
OceanDAO recommends submitting an "Expected ROI calculation" in the
grants proposal to make voters understand the potential and future returns of
the project[5]. However, it turned out, that DeFi Pulse Index isn't able to
capture a significant market share within the DeFi ecosystem (0.03% or $55M).
When applying the percentage to rugpullindex, the prospect became even
bleaker as 0.03% of $600k would only amount to $183 of market capture for
rugpullindex.com

Even though, it did disappoint me that the math wasn't working it, I'm still
bullish as ever towards the project. Especially, as I recently read in one of
Matt Lavine's "Money Stuff" newsletter posts, that tradiitonal index funds can
become huge anti trust problems as soon as they start to hold majority shares
in certain market segments [3]. When, for example, the S&P500 is suddenly
capable of voting on board decisions of FAANG (Facebook, Amazon, Apple,
Netflix, Google), I think it's no surprise that they wouldn't incite any of
those companies against each other. After all, that could lead to a decrease
in the index's value.

To me, that truly sounds like an antiquated problem. Technology allows the
sensing of a crowds opinion already. Within blockchain, such governance
scenarios have long been a topic of discussion. Actually, they work today [4].
And that's why I think that building indexes on blockchains is a cool problem
that can address real-life problems.

In conclusion, I would like to say that I'm still eager to continue
development here. I hope to receive a grant. So if you're reading this, make
sure to vote!

That's all. Have a nice day.

### References

- 1: https://github.com/oceanprotocol/oceandao/wiki
- 2: https://hackmd.io/uli0VPaVQiGtww5FoUWKrA
- 3:
https://www.bloomberg.com/opinion/articles/2021-01-19/maybe-the-index-funds-don-t-vote
- 4: https://uniswap.org/blog/sybil/
- 5: https://github.com/oceanprotocol/oceandao/wiki/On-ROI

## 02/01/2021

- Research how to draw interactive plots on website (SVG is a nice option)
- Compartmentalize data base (sub) queries. Test them individually.

## 01/01/2021

- Update copywriting of main page after user feedback (add more explanation).
- Add tests to parts of the private API that were previously untested.
- Truely always get all data sets by using unfiltered Aquarius query

## 16/12/2020

To increase virality of the service, I've decided that I want to have some
type of badge for a data set provider. I ended up using shields.io. By
visiting the FAQ, you can now add a badge for your own data set. It's a beta
features that I haven't testet too much. So I'm curious on how it goes.

## 11/12/2020

Released the rugpullindex.com launch blog post on my personal website:
https://timdaub.github.io/2020/12/11/rugpullindex/

It got lots of attention which made me happy. Lots of people have reached out
since then.

## 09/12/2020

- Proposed new ranking is live. Will give more details another day.
- Added REST API for first customer. More information about that too another
day

## 7/12/2020

This morning, when I had my coffee in the park, I thought again about what I
wrote last week regarding the inclusion of liquidity into my risk model. I'm
specifically referring to the changelog.txt entry on the 30/11/2020, where I
proposed to use the absolute currency value of liquidity within a pool to
multiply it with the Gini score.

Thinking about it again, I realized that I don't like the approach I proposed
then anymore. The reason being, that by using e.g. the EURO value of a pool's
liquidity in a multiplication seems fairly arbitrary. Why e.g.

- should we denote a value that gives information about a pool's liquidity
provision equality in an EURO value? And why
- should we multiply the amount of liqudity by the Gini index when neither are
put into relation within comparable markets?

After all, the Gini score and each market's liqudity are
independently-provisioned quality measurements. Hence, this morning, I started
thinking about how to improve what I proposed last week.

I believe that a relative quality measure that is a combination of liquidity
and equality distribution is still useful for investors. I think it should not
be denoted in a commonly known unit, unless is makes a specific quality
statement about it.

For example, in the future, I could imagine a quality measure called "Safe
liqudity" that is denoted in OCEAN, EUR or USD and that gives information
about the absolute amount of liqudity that is safely distributed within a
pool.

However, for now I'm not interested in that measure. Instead, I'd like to use
a comprehensive and relative measure of liqudity over all markets as a measure
of an indivdual pool's liquidity. Actually, my friend Jost Arndt proposed a
simple algorithm to find a relative measure for all pools' liquidity:

1. Among all pools, find the one with the highest liquidity: $L$
2. For each pool, where a pool's liquidity is $l$ and the relative liquidity
score is $Rl$, $Rl = L / l$

His argument was that now, since all pools' liquidity is within the bountries
of $0 < Rl < 1$, this measure could be used to find an overall score s to rank
all data sets:

$$
s = Rl * (1 - gini)
$$

The properties of this model are great because:

- For a data set with a large amount of liquidity ($Rl = 1$) and high
  inequality ($gini >= 1$), the score $s <= 0$ and so really low on the index.
- For a data set with a mid-sized amount of liquidity ($Rl = 0.5$) and good
equality ($gini <= 0.5$), the score $s >= 0.5$ and so moderately high on the
index.

However, I'm not only a fan of the algorithms properties. From the get-go of
this project, I've been convinced that a simple measure is key for the
meaningfulness and utility of the index. I believe that the above formula
passes those criteria.
Hence, for the upcoming weeks, I'm planning to integrate it into the website.

And that's all for today's thoughts on rugpullindex.com. If you've found this
entry useful or have feedback, feel free to reach out via tim@daubenschuetz.de

Best,
Tim

## 1/12/2020

The root endpoint `/` now includes a "Cache-Control" header with a maxAge
around the time of rugpullindex.com's daily crawl. This means that a user's
browser is now caching the site. But additionally this allows a CDN or reverse
proxy to cache the site too. For now, I've configured my reverse proxy to
cache according to "Cache-Control" headers which speed up page loads
significantly. Since for most of the day, statically-cached content is served
up now, this should allow handling lots of traffic too.

## 30/11/2020

Currently, I'm still thinking a lot about rugpullindex.com and how to grow its
audience. I believe that in the future, it will be really important to be able
to automatically filter and sort blockchain-based markets on some sort of
metric, similar to how the Web is sorted by algorithms today (social media
algorithms, Google's page-rank, etc.).

In terms of improving the site in the short term, I'm hence driven to do two
things in particular:

1. Improving the scoring method;
2. Improving the site's documentation and transparency.

Regarding (1), improving the scoring method, I already had a particular idea
that I'd like to motivate briefly.

Most decentralized exchanges using automated market makers currently use
liquidity to measure a pool's overall performance. However, as we've discussed
already, this ignores the fact that distinct liquidity can have distinct
quality. As we've assumed from the beginning, the distribution of liqudity
shares within the pool can be used as a qualitative metric. Some examples:

- A pool can have lots of liquidity, provided by one incompetent liquidity
provider that doesn't get arbitraged because the asset isn't widely used.
- A pool can have lots of liquidity with lots of small and large LPs that are
each competing for the pool's arbitrage opportunity.
- A pool can a mediocre amount of liqudity that is equally-distributed among
its providers such that there's perfect competition and arbitrage
opportunities become seldom.

Hence, instead of sorting the index only by a pool's liquidity distribution,
I'm now thinking of using the score as a weight on the pool's liquidity:

$$
Score_{new} = Liquidity(pool) * (1 - Gini(pool-shares))
$$

For a pool like TREPEL-36, this would mean the following (values from today):
At a score of 0.69 and a total liquidity of 40900.54€, its new score is:

$$
40900.54€ * (1 - 0.69) = 12679,17€
$$

whereas for TASLOB-45, having a score of 0.88 with a total liquidity of
224665.20€, it meant:

$$
224665.20€ * (1 - 0.88) = 26959,82€
$$

This change, as can be seen above, would then favor large pools over small
ones, while still being significantly biased towards an equal distribution
of shares.

If you've made it so far: Thanks for reading! And if you have feedback on this
idea, feel free to contact me! My email is tim@daubenschuetz.de

That's all for today.

Best,
Tim

## 27/11/2020

- I noticed that query the page is kinda slow (up to 900ms), so I started to
look into database indexes. I've prepared a performance-measuring test
internally, but so far wasn't able to produce any improving results by adding
indices.

## 24/11/2020

- Started conducting user interviews. I've asked a few people what they'd
improve on rugpullindex.com. I'm trying to gather a list of possible features
to add in the next few weeks.
- Added a 1 day difference/delta of rank to the overview (the colorful value
next to the rank value)

## 21/11/2020

- No new changes since Thursday. Just a status update that the crawler now ran
automatically for the last two nights. I did have to fix any bugs right after
getting up. Seems the application is overall now running quite stable.
- I keep looking at the website and its stats (check them out:
https://plausible.io/rugpullindex.com), and I'm wondering what features my
users would wish for.
- Personally, I'd want an additional column that shows me the difference of
"Rank" and "Score" from the last day.
- I'd also find it nice to display the data set's name directly and not only
its token name.
- What immediate changes are you wishing for? Write them to me
tim(at)daubenschuetz.de!

## 19/11/2020

- Crawl performed reliable this night. However, data sets still weren't shown.
Below is description of bug.
- Fix bug: Data sets for a day weren't shown because crawl was at midnight but
on retrieval, sqlite3 was working in UTC time. This lead to two different
dates, the UTC one always being in the past.

## 18/11/2020

- Improve crawler's reliability
- Improve main page reliability (even when there's no data)
- Start backing up data in a simple way

## 17/11/2020

- Fix bug that stalled last night's crawl
- Add token holder chart link to index list
- Change order of "Price" and "Score"

## 16/11/2020

- Set scaling header in HTML to render website nicely on mobile devices
- Setup a daily cronjob that re-downloads all data and re-calulates the score
- Integrate purgatory data in crawl
- Change "Token name" for "symbol" in index list page
- Start hosting changelog.txt
- Exclude data sets from index that have less than 35 liquidity providers
- Did some copywriting for the landing page
- Re-integrated Plausible Analytics script
- Include rank as column on index table

## 14/11/2020

- Adjust data set queries so that only the latest crawl is shown to a website
  visitor

## 13/11/2020

- Launch rugpullindex.com
