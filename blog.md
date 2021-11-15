# Blog

## Marketing Week
### November 15, 2021

It's "Marketing Week", y'all!

What that means? It means that for the whole week, I'll plan to lay down the
coding utensils and work on things completely out of my comfort zone. How come?

It's because I had a minor epiphany on the weekend when reading and commenting
on HN's "Ask HN" page. Someone posted, ["Tips For Making a Popular Open Source
Project in 2021"](https://news.ycombinator.com/item?id=29197806) which led me
to write the following
[comment](https://news.ycombinator.com/item?id=29198039):

> Wow, this looks like a great resource for a difficulty I've been struggling
> with for myself for a long time.
>
> For the love of it, I can't understand what makes other GitHub repositories
> stand out over mine.
>
> I'm blogging about my work, I've added more information in the readme and
> over the course of a few years, I've also gradually shifted course to a more
> appropriate process. I always wanted to be the owner of a busy open source
> repo. I find the idea of making this experience fascinating.
>
> But many of my repos are still stale though I think my code is good enough.
>
> Actually, seeing that the repository probably needs a much better-designed
> readme makes me sad to realize that also for something so deeply rational:
> it's the looks that count.
>
> On the other hand, it's true. Deeply living with a problem and solving it in
> code is a tough challenge and I'm not sure I'm committing enough for my work
> to be popular.
>
> But I'm anyways happy to now realize that I'll have to market my repos better
> too. 

An interesting discussion between a fellow HN user and me ensued and it kind of
threw me back to when I read "Start Small, Stay Small: A Developer's Guide to
Launching a Startup" by Rob Walling. In a post from July this year, titled ["On
The Value Of Product And
Distribution"](#OnTheValueOfProductAndDistribution) I
had even written about some of those ideas. Given that our recent SEO had high
efficacy, I want to double down on those efforts now.

According to Rob's book, prioritizing the "Top shelf" traffic strategies is key
and I agree with is rationale in the book. He argues that the most sustainable
strategies are to: 

- Maintain a mailing list
- Write a blog; and
- Improve organic search.

I also agree with him that "second shelf" strategies are social media and
pay-to-click advertisement. They can help growth, but they aren't sustainable.
Only finding and retaining a target audience can be.

So this week, I want to commit myself to do something that's VERY
counterintuitive to me: I want to *avoid coding* and instead focus on how I can
improve and scale my communication. A few preliminary goals:

- I want to split up this giant blog page into separate pages to improve SEO
- I want to create a mailing list for RPI
- I want to help improve the overall website copy and e.g. move on from text to
  potentially interactive graphical pages too.
- I want to help communicate the new RPI vision.

I'm excited to try something else this week and I hope you can share my
enthusiasm.  In case you have time and want to help, hop on our Discord and
reach out.

Best,
Tim

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

## Heureka!
### November 2, 2021

Countless times throughout maintaining this document, I've worried about the
sustainability of our project. I said that I'd like to diversify income streams
and that generally, we're struggling to understand where we should be
extracting value. We've talked to many potential customers and people
interested in our project - some that understood what we were doing and some
that didn't get it at all.

Today, I'd like to proudly say that I think we have found the strongest
rationale for continuing the project so far. But first, the context:

Already in [December 2020](#16122020), I decided to add badges to
rugpullindex.com that'd allow a data publisher to include their rank in the
description on the Ocean Protocol marketplace. Here's how that badge looks:

[![rugpullindex.com rank](https://img.shields.io/badge/dynamic/json?url=https://rugpullindex.com/api/v1/indices/OP-COMPOSITE-V1/ranks/did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38&label=rugpullindex.com&query=rank&color=blue&prefix=%23)](https://rugpullindex.com)

And here is its code:

```
[![rugpullindex.com rank](https://img.shields.io/badge/dynamic/json?url=https://rugpullindex.com/api/v1/indices/OP-COMPOSITE-V1/ranks/did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38&label=rugpullindex.com&query=rank&color=blue&prefix=%23)](https://rugpullindex.com)
```

As you can see, the badge is making use of the RPI API by [requesting a data
set's current rank](/docs#GETrankbyDID) in the `url` query string parameter:
`url=https://rugpullindex.com/api/v1/indices/OP-COMPOSITE-V1/ranks/did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38`;
In this case, it's requesting the rank for DataUnion's QUICRA-0.

I had long forgotten about this feature myself, and indeed, months ago, we even
decided to de-prioritize the [FAQ page](/faq) including the badge manual.  

But then, days ago I remembereed reading Brian Schrader's ["Why All My Servers
Have An 8GB Empty
File"](https://brianschrader.com/archive/why-all-my-servers-have-an-8gb-empty-file/)
article and ended up anxiously `df`ing around the RPI backend server to make
sure we still had enough storage space available. And when I did that, I
discovered something.

```bash
ls -ahl /root/.pm2/logs/
total 1.6G
drwxr-xr-x 2 root root 4.0K Nov 18  2020 .
drwxr-xr-x 5 root root 4.0K Apr  8  2021 ..
-rw-r--r-- 1 root root  26K Aug 29 02:01 crawler-error.log
-rw-r--r-- 1 root root  27M Nov  2 01:02 crawler-out.log
-rw-r--r-- 1 root root  35M Nov  2 13:45 rugpullindex.com-error.log
-rw-r--r-- 1 root root 1.5G Nov  2 13:45 rugpullindex.com-out.log
```

I found that since last year, we had logged every single request to our website
in a text file for debugging purposes. A whopping 1.5GB of logs that contained
everything from when users had requested specific information about a data set
and to all API usages.

#### Discovery!

Then it hit me: "The server must have also logged all requests from
[shields.io](https://shields.io).", meaning that there was a chance we had real
data about the Ocean Protocol marketplace website visitors.

Given that I had just recently called to [rationalize the ROI calculations in
the OceanDAO](https://hackmd.io/OFp3-Ph_RcyJGlQepi15zQ), these numbers struck
me as immensely important. My immediate thoughts were that we'd now finally
be able to understand our website's impact on the global web3 data market.

And indeed, that's what I managed to conclude today. In the following passages,
you'll find a shallow evaluation of our data and what it means for the
continued existence of our product.

We've open sourced all of it in a [Google
Sheet](https://docs.google.com/spreadsheets/d/14eOKudNa5He0CuAOQ0UYuhL3jhWoqaRCtd8gRAKi5ro/edit#gid=1949840441)
and we're curious to see if the community can extract further findings.

#### Methodology

Inspecting the data, you'll see that only a handful of data publishers had
included the badge; those being: INVBAR-10, INCSQU-53, EXCANE-93, QUICRA-0
(only for a limited amount of time). The biggest contributor is EXCANE-93. 

We can plot all shields.io requests vs time in a graph:

![Shields.io Ocean Protocol Marketplace Visitors](shieldio-requests-op-marketplace.png)

With this, I think we can already classify the popularity of
[market.oceanprotocol.com](https://market.oceanprotocol.com) website relatively
to others. E.g. we have additional data from
[plausible.io/rugpullindex.com](https://plausible.io/rugpullindex.com) and
[plausible.io/oceanpearl.io](https://plausible.io/oceanpearl.io).

Given that EXACANE-93 is in third place for the most liquid asset ("Highest
Liquidity") on the OP marketplace front page, we could start speculating about
its total daily visitors, assuming a rough bounce rate.

But, at the time, that didn't seem useful to me. I wanted to understand if
rugpullindex.com had an impact on the view count of the Ocean Protocol
marketplace. And given that the shields.io data set was independently collected
from the web analytics we gather with plausible, I figured some statistical
math could yield insights.

#### Evaluation

By normalizing all data to an hourly resolution, I ended up being able to
calculate a Pearson correlation between the rugpullindex.com hourly visitors
and the shields.io requests arriving at our end. I was disappointed to see that
they were only connected by 0.07 and was about to call it a day. But then I
remembered that on plausible.io, we had also collected all outbound clicks
since April 2021.

See, when you visit our website, and click away from our domain, then
plausible.io will record this as an "Outbound Click" event and log the specific
path you left towards.

Looking at the [yearly outbound clicks
stats](https://plausible.io/rugpullindex.com?goal=Outbound+Link%3A+Click), I
was quick to determine that only 14 outbound clicks towards EXACANE-93 had
happened. I, hence, concluded that just correlating the shields.io data set and
the visitors from RPI might not cut it. It may not show the full picture.

And so, I ended up
[downloading](https://github.com/rugpullindex/plausible-crawler) the high-res
version of the outbound click data set from plausible. My thoughts were that we
could additionally model
[market.oceanprotocol.com](https://market.oceanprotocol.com)'s visitor stats by
assuming that each outbound click towards them also meant an active visitor on 
their site.

So I downloaded the data and plotted it too:

![Outbound clicks from rugpullindex.com to Ocean Protocol marketplace](outbound-clicks-op-marketplace.png)

We can see that it's much sparser. Initially, I was like: "OK, now that we have
two independent data sets: Why don't we just assume that their addition is the
total amount of hourly visitors to the Ocean Protocol marketplace." 

I created another column and called it "Inferred OP marketplace visitors." For
each row, it adds the outbound clicks and the shield.io requests for a "fuller"
distribution of the simulated Ocean marketplace website visitor data set.
Here's it plotted too:

![Inferred OP marketplace visitors](inferred-op-marketplace-visitors.png)

I was happy as it ended up looking much better, and so, logically, I then
continued by trying to extract the hourly visitors to rugpullindex.com's main
page "/". The next graph gives an overview of that:

![rugpullindex.com "/" page visitors](rpi-root-page-visitors.png)

Lastly, I wanted to find out how strongly Ocean Protocol's marketplace and
rugpullindex.com visitors are connected. I calculated a Pearson correlation
between rugpullindex.com's "/" root site visitors and the inferred Ocean
Protocol marketplace visitor data set. 

I found that it correlates by roughly 0.4. At 4000 samples (we're logging since
the end of April), and a significance level of 0.05, this correlation ends up
being a [significant
finding](https://www.socscistatistics.com/pvalues/pearsondistribution.aspx).

> The P-Value is < .00001. The result is significant at p < .05.

Now, to understand if RPI independently contributed to the above-stated amount
of visitors to the Ocean Marketplace, for completeness, we'd probably have to
repeat the process with an additional control website. That is, in academia,
we'd have to do that.

But I ain't no scientist and what I see here is good enough. 0.4 isn't the best
correlation ever, but considering that we're dealing with noisy distributions
and mostly an assumed visitor model - I'm pretty happy about our findings.

#### Conclusion

I'm also convinced that this kind of data-driven practice ought to be the
default method for OceanDAO projects to create a fundraising rationale (or ROI
calculation). I don't want to stop here: We already have plans to extend this
modeling for the next round. Simply because all data buying and consuming on
the Ocean Protocol marketplace takes place on-chain and is, hence, potentially
useful for us too.

Imagine if we could correlate website visitors to on-chain new-money
transactions! That'd be something, I think would, product-offering-wise, not
only be interesting for us - but also others. It'd be Google Analytics but with
blockchain insights.

But those things are future stuff and we've pledged to be present in the
presence. So for all OCEAN holders reading this, I'd like to ask for your votes
and attention in OceanDAO round 11. If you like our product, website, blog and
Discord, please consider voting for us. And thanks for reading.

Best,
Tim

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

## Thank you, next (problem)!
### October 23, 2021
It's an incredible thing to say, but I think we're getting close to our first
anniversary. That's incredible but serves in this post merely as a hook for the
topic I'd like to write about.

This being the increasing throughput of problems I have to face on a daily
basis to drive the project further. 

Just last year, there weren't merely any. I was working on
the thing myself, and also, for the first few months, I
didn't even get paid to host the site.

Now, this has changed drastically and so today RPI contracts a surprising 4
people part-time. We have 49 members on our Discord - and even without me
ranting on Telegram - we have a steady influx of users to our site.
We've got about 15 applications for a more than sparse hiring appeal on HN's
"who's hiring?" thread, and last round, something like 5 million USD voted YES
on us.

All of this is pretty bonkers, particularly when scrolling down and looking at
some of the old posts and the sentiment I had just months ago.

But in that time, and especially now that the dust has settled after last
month's round, I've come to realize (or accept) my faith as a project founder.
Building and shipping, keeping things going is basically just handling a stream
of never-ending problems flying towards you.

It's daunting. Sometimes it's crazy scary. But also, many times, it's
incredibly rewarding and fun.

For me, when I don't code: It has also become more difficult to track and
understand progress. It's almost like being the frog in the pan that gets
boiled. Without the boiling part, maybe (/hopefully).

You solve problems and work to make things happen, and those things do happen,
but somehow you also don't understand what changed. It's almost like being
blind.  Worse, it's like seeing but not being able to interpret. Dream-ish.

I don't dread this experience - so far, I've come to enjoy it. But I've become
more anxious about the project's future and the fact that I seem to carry much
more responsibility than I had imagined.

It's really weird and may also sound tone-deaf for some users not being
involved in our production process. The website's still the same. Everything
looks as it "always has."

But looking internally, things are shifting at incredible speed, and measures
are being taken daily to grow and improve. 

I'm overwhelmed by the passion and precision of our contributors and by how
they pump out knowledge, insights, and code continuously. It's nuts!

So maybe all these words had the following purpose: To thank everyone that has
helped and believed in Rug Pull Index over the last year.

I'm grateful for you to be with us, and I'm in joy seeing that we share ideas
and goals. I'm curious as ever to see where we'll go!

Thank you!

## October 20, 2021

- Connect
  [rugpullindex/design-system](https://github.com/rugpullindex/design-system)
  with backend server as a [git
  submodule](https://git-scm.com/book/de/v2/Git-Tools-Submodule).
- Publish svg-line-chart@0.3.1 and start using it in RPI backend
- Link on token symbol name now leads to token address page on Etherscan

## User Profiles & Motivations in the Ocean Ecosystem
### October 18, 2021

The below outlines 8 types of users for rugpullindex.com. 

Some users may represent one or more of these profiles at any one time however
we have segmented them into different groups for easier analysis.

The 8 user profiles are:
1. Ocean Stakers
2. Data Token Investors
3. RPI Community Members
4. RPI API Users
5. Other Data token platforms
6. Ocean DAO Members
7. Data Providers
8. Data Buyers

*Written by [Scott Milat](https://www.scottmilat.com) & [Tim
Daubenschuetz](https://timdaub.github.io/)*

#### Ocean Stakers

**Context** 

As these users have gotten to know more about Ocean Protocol they have realised
it could be beneficial for them to stake their Ocean tokens on data sets. They
have discovered RPI as a potential tool to help them with this decision making
process.

**Motivation**

They are trying to maximise their rewards for staking Ocean tokens. 

**Pain Points**

There’s both a high learning barrier to overcome and a lack of accessible,
clear information. There also may be some uncertainty when it comes to the
quality of information and likelihood of generating an ROI on what is a new and
volatile asset.

**Mental Models**

The user has so many options when it comes to allocating their capital within
new crypto projects. If they have gotten this far they probably understand the
value proposition and vision of Ocean Protocol quite well and are wanting to
get into something in the hopes of generating a good ROI. 

**What I want from RPI:**

* What are the staking rewards?
* What are historic staking returns?
* What’s the risk level (rugpull, other)?

**Questions I might have when landing on RPI now:**

* What does this chart mean?
* What do these columns mean?
* Which columns do I care about?
* How can I learn more about this?

#### Data Token Investors

**Context**

As these users have gotten to know more about Ocean protocol they have realised
it could be beneficial for them to invest in data tokens. They have discovered
RPI as a potential tool to help them with this decision making process.

**Motivation**

They are trying to find valuable data tokens to invest in assuming that both
Ocean and the data set will do well over the long term. 

**Pain Points**

It’s really time consuming to go through each dataset and try to find the ones
that are most valuable. It’s also unclear exactly how to ‘value’ a data set as
there are many factors to consider i.e. data provider’s reputation, number of
sales, staking rewards, is the data set being maintained, does the dataset have
buyers, who is the dataset targeting, is the data actually valuable etc etc...

**Mental Models** 

The user has so many options when it comes to allocating their capital within
new crypto projects. If they have gotten this far they probably understand the
value proposition and vision of Ocean Protocol quite well and are wanting to
get into something in the hopes of generating a good ROI.

**What I want from RPI:**

* Where are the good datasets?
* How many purchases have there been for this dataset?
* What are data tokens? (for converting ‘potential’ data token investors)

**Questions I might have when landing on RPI now:**

* What does this chart mean?
* What do these columns mean?
* Which columns do I care about?
* How can I learn more about this?

#### RPI Community Members

**Context**

These users are active or thinking about becoming active in the Web3 ecosystem. 

**Motivation**

These users are looking for cool/interesting projects to work on &/or become an
early adopter of something which could grow into being much bigger in the
future presenting a potentially high economic incentive. 

**Pain Points**

Hard to find quality projects with good teams to collaborate with/active
engaged communities that I can become more engaged with.

**Mental Models**

If this is a cool project or something which I believe could grow into
something much bigger, then I would like to keep engaged with the community,
potentially help out or get more involved as the project grows. 

#### API Users

**Context**

These users are developers &/or business people looking to integrate the RPI
API into their work/product. 

**Motivation**

They want to build a product using our data. RPI has more than 9 months worth
of pricing data. By querying this data directly from our API, they can save
time and money building a custom solution.

**Pain Points**

Some users are coming to RPI because they’ve been left behind by Ocean
Protocol. We’re a technically driven product that’s quite approachable by
developers. They know what they get from RPI when compared to the more
advanced-looking tech stack of the Ocean Protocol.

**Mental Models**

API users's way of thinking is highly utilitarian. They want to build something
and so they’re looking for the most cost-effective way of getting it done.
RPI’s simple and approachable API gives them a dopamine hit because they
immediately get it.

#### Other Data Token Platforms

**Context**

Other platforms have forked/created their own data marketplaces and data
platforms (separate to the Ocean ecosystem). They too are looking to acquire
users/investors/contributors to their platforms. They see RPI as targeting the
same audience they are interested in.

**Motivation**

They understand the value of data marketplaces naturally and by getting listed
by the Rug Pull Index, they see it as a way to acquire new customers and push
their data consume revenue up.

**Pain Points**

Accessing the right target audience can be time consuming and difficult. First
you need to find where the target users are, next you need to collaborate with
the platform to negotiate terms and execute the plan/integration. The data
investor community is very small. So far, only Ocean has managed to grow a
little community of early adopters. So anyone that’s in this market too has to
either associate themselves with the OCEAN community or seek out to create one
by themselves.

**Mental Models**

Other Data Platforms are motivated to join RPI if the value proposition is
right. They are interested, have budget and an aligned interest to be on RPI
and to leverage the network that’s already there and that will hopefully be
there in the future. Still, currently Other Data Platforms are struggling to
partner with RPI as it's not a legally incorporated company and since the value
proposition of their investment is unclear.

#### Ocean DAO Members

**Context**

Ocean DAO members have varying levels of interest/engagement in Ocean Protocol
but a number of influential players have a much larger influence relatively
speaking. 

**Motivation**

Important OceanDAO members are primarily big holders of Ocean tokens. They want
the Ocean Protocol Ecosystem to flourish. They are looking for projects that
have a good ROI and will continue to support the ones they believe do. 

**Pain Points**

OceanDAO members are mostly concerned about the OCEANs that they hold. They
want as many well-maintained projects arising from the OceanDAO as possible.
Their interest is less in the survival of individual projects and more in the
correct strategic functioning of the OceanDAO’s funding mechanism. Their
ultimate goal is to make a return on their initial OCEAN investment. OceanDAO
members have limited time to do due diligence given the sheer amount of
projects. Hence it’s often hard for them to keep on top of projects and see
which are adding value.

**Mental Models**

OceanDAO members want to see RPI succeed given that it continues to make
technical process and helps guide the Ocean Protocol mission. With the rising
number of participants in the OceanDAO, members are starting to get less chance
to do proper due diligence. They may also simply vote to burn Oceans if they
see no proper engagement.

#### Data Providers

**Context**

Data Providers are looking for ways to make their datasets more appealing to
potential stakers, investors, buyers. Data Providers want to make money. If RPI
is seen as a key source of ‘quality datasets’ within the Ocean ecosystem then
they want to know how they can be a part of the action and make their datasets
‘better’ or rank higher. 

**Motivation**

To get more Ocean staked on their datasets, increase the discoverability of
their datasets and increase number of sales.

**Pain Points**

Data providers' biggest problem is that they can't make a good value
proposition to data consumers. Data consumers always face the risk of buying a
rug pull in disguise.

No Data Provider has made a return on a tokenized piece of data yet. It is
difficult to understand if a single sale can make a data set worthless. It's
hard to find stakers and buyers for data sets, expecially when purely focus on
technical innovation and e.g. not marketing.

**Mental Models**

RPI allows a data provider to get (relatively speaking) many eyes on their data
token. For the top data providers, being listed as a top project on RPI is of
significance as it directs lots of attention and clicks to their web presence
(Click through rate). Additionally, RPI can serve as an additional benchmark
for how well a data provider's token is doing in the overall market.

#### Data Buyers

**Context**

Data buyers are likely still far and few between but when they do arrive to the
ecosystem they will be looking for a quick and easy way to find/browse the
datasets that they need (or might need). 

**Motivation**

They will have a specific use case in mind and be looking for data to help
address that use case. We speculate that Data Buyers have highly utilitarian
motivations too. If they know they can make more money through buying a data
set, they'll pay its price.

**Pain Points**

The problem with finding data is that it almost directly has to be created for
your specific use case for it to be relevant or valuable. Already when having a
hypothesis, we humans tend to solve it “by proxy”, meaning we answer different
questions and not the original one instead. For data sets, this is the same
problem. A data set’s value is not universally the same for any one as some
buyers are able to extract significantly more value from it than others.

E.g., if you had gotten ahold of the Cambridge Analytical data set before the
2016 US election, would it have provided you the same level of utility as it
did to the Trump campaign team?

Finding the data set they require is an immense and time consuming challenge
for data buyers.

**Mental Models**

If I find a dataset that might be useful: How do I know it's
useful/trustworthy/valuable? How do I know that the Ocean Protocol works as I
expected it? What information can I access to give myself a high level of
confidence that this thing is even worth purchasing and that I'm not getting
scammed.


## Focus
### October 15, 2021

In turbulent times, I sometimes tend to undervalue focus. Some people value
focus much more than I do. I think focus is worthless when there's no
confidence in knowing the right direction. Figuring out what to do next is more
important than focusing, sometimes.

But now, it's time to build (and focus). And here's what we want to spend time
on:

- We want to further annotate Ocean Protocol data sets through
  [@rugpullindex/list-metadata](https://github.com/rugpullindex/list-metadata).
  Our overarching goal here is to create trust through transparency. We think
  [l2beat.com](https://l2beat.com) does a fantastic job on that with L2
  infrastructure. For as long as [Ocean's provider
  mechanism](https://github.com/oceanprotocol/provider) is unsafe, we must
  promote the option to enable recourse through traditional means (e.g. the
  law) to increase [Data Consume
  Volume](https://github.com/oceanprotocol/oceandao/wiki/On-Roi#whats-a-good-metric-for-bang).
- We want to create a smart contract consumable version of the Rug Pull Index
  API. We don't care for "write" yet. We aspire to do "read" _really_ well. An
  inspiration is [zeriontech/defi-sdk](https://github.com/zeriontech/defi-sdk).
- We want to spend significantly less time on raising funds. Since 2021-10-01,
  I (Tim) spent a total of > 40h on campaigning, fundraising and updating the
  project standing. This ended up being necessary given the OceanDAO process.
  We want to short-circuit that process to spend less time and get the same
  amount of money to build more and do less politics.

That's all. Thanks for reading.

Best,
Tim

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

## Is Competition For Losers?
### September 27, 2021

A common believe in the startup scene is that competition is for losers and
that one always should setup shop in a "[blue
ocean](https://en.wikipedia.org/w/index.php?title=Blue_Ocean_Strategy&oldid=1029136391)"
rather than a "red ocean."

There are countless famous proponents like Peter Thiel arguing publicly about
the virtues of positioning oneself in a competitionless market rather than
trying to fight for scarce resources.

But "is competition _really_ for losers?", I asked myself when swimming
in one of the croweded and fast-paced lanes of a public pool today.

See, for the first time in months, this morning I visited a public swimming
pool again.  Given that during the pandemic those only had limited
availability, my summer consisted mostly swimming in many of the nice lakes
around Berlin. Now that fall and winter are around the corner, today I thought:
Why not train indoor again.

If you've ever swum freestyle in the fast lane of a public swimming pool, you
probably know your fellow swimmers aren't joking around. They're usually super
fit, have amazing technique and they absolutely don't shy back from overtaking
you mid-lane. They don't do it for a prize or praise. They just do it. To train
I guess.

To me, just the hecticness of that situation makes swimming and training quite
intense. Just a few strokes after entering the lane, I start keeping an eye on
my back and I start to feel anxious to get overpassed.

However, other than a competitive zero sum game would suggest, I actually don't
get sad about losing to others in the pool. Instead, being passed by others
makes me want to improve my technique and breathing. They motivate me. So
logically afterwards, I ended up thinking about the concept of competition.

In many of my previous jobs, competition has been a complete turn-off.  It's
when I feel that I don't want to engage in aggression and extra effort just to
reach a goal that usually requires less engagement. In those moments, I feel
that competition is wasteful and for losers.

And in many startup self-help books, like Peter Thiel's famous "Zero to One",
that line of thinking is thoroughly confirmed. But is it universally true that
"competition is for losers"?

A nice theoretic resolution to the anecdote would be to introduce and define
the different kind of theoretic games. Through simplifiying the swimmers to a
length, speed and comparing them to the physical properties of the pool -
surely we could find an optimal strategy, e.g. one that minimizes overtaking
and maximizes the distance swum.

However, exactly that thought would require assuming that all actors
fundamentally behaved completely rational to either increase their economic
status or gain some form of homogenious utility. But specifically in the swim
lane, I'd argue that everyone's motivations are so fastly different that a
simplifying model could only poorly capture everybody's real intents. It
wouldn't produce an effective strategy.

It's because I, for example, liked today's hectic "vibe" as it allowed me to
have a more intense training. Other swimmers could have had similar intention
or their's could have been totally uncorrelated.  For me, it was to swim faster
and to compare my fitness. Next time it may already be different. And why not -
there's entirely nothing at stake either.

I'll admit; closing this essay now with a logical conclusion about what I've
learned is difficult. But I'll say this: "competition is for losers" is an
unnecessary broad generalization and it's most definitely not universally true
(who would have guessed). Rather, today's experience suggests that some
competition is worth and fun engaging with.

## We're NOT A Startup
### September 21, 2021

In less than two months, on November 13, 2021, RPI will celebrate its first
anniversary. Being someone that loves playing around with ideas and never
having the patience to commit to any project long-term: Rug Pull Index is
special.

But it started as was typical for any side project of mine: I read an issue on
GitHub and thought, "[Hey, that's something I wanna work
on.](https://github.com/oceanprotocol/multi-repo-issue/issues/30#issuecomment-726857582)"
And so, just a few days later, the first version of rugpullindex.com went
online. In fact, if you keep scrolling down on this page, you'll find that
[very first entry](#13112020) I made on November 13, 2021, on this document.

During those days, I set out to solve a specific problem that the Ocean
Protocol community had: I wanted to enable users to stake OCEAN with less rug
pull anxiety. And so, from day zero, when I first launched the app: I ended up
doing exactly that. I hosted a website where Ocean Protocol stakers could go to
compare data sets using the Gini coefficient.

I'm expanding the context of what my goal was here to highlight a particular
property: I shipped a viable solution to users from day zero. I chose an
ultra-iterative approach towards building product. I find it important to make
this distinction as I'm now seeing more and more people discover the
speculative value of a product like Rug Pull Index.

Others ask me what the company's vision and mission are. There's an expectation
of raising funds from venture capital. And in general: I've been confronted
with the idea that the project's future value is influenceable by taking more
risk now and investing funds into its growth.

But I'd like to vehemently push back on these ideas: Rug Pull Index is **not**
a startup. It needs no vision, no mission, and no explosive growth. The last
thing I want is to be a spineless digital coordinator of yet another tech
startup.

I'll admit; I've fallen prey to these ideas too. I've raised money over the
last year by over-focusing on vision rather than execution. Now I regret doing
so. I should have known that predictively galvanizing others with potential
can't satisfy my ideals.

What I'm doing now is backtracking. Changing course. 

I don't have a name for what I want Rug Pull Index to be and in which direction
I want to steer it. I know the path; I just don't know what it's called.

For the dramatic purposes of this article, I think calling Rug Pull Index an
**anti-company** may provoke some interesting thoughts. And no, I haven't done
any Googling for the existing definition of what an "anti-company" describes;
I'm assuming to be the original creator of that term, and I'll now go ahead and
explain what it means to me:

An anti-company has no employees; ultra-lean operating costs, and technically
it doesn't even exist on paper. An anti-company measures the value it creates
in the present; it doesn't leverage the future for growth. It has no salaried
employees because it hates liability and unbalanced risk. It minimizes
liabilities.

An anti-company manages risk very carefully: Its major goal is to guarantee
ongoing operations over a very long period. It creates value now. That's why
the anti-company has no sense of urgency, deadlines, or future expectations. It
just **is and was**; it never _will be_.

An anti-company is not a startup.

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

## On Building The Infamous "Version 2"
### August 25, 2021

The last month or so has been frustrating to develop RPI. I'd say there are a
couple of reasons that I'd like to pinpoint and address in this post. Firstly,
I think that with the current structure of the RPI backend, we're somewhere in
the middle of an upgrade to a "version 2". If you're building software
professionally, you might be able to relate to what I mean. But let me explain.

If you scroll on this page all the way down, you'll see that I've laid the
groundwork for this codebase sometime in November. This markdown document is
still the same as the initial "changelog.txt" file. 

So far, I've worked on RPI with a rather conservative midset. My goal was to
arrive at something focused, stable, and functionally useful. It usually meant
squeezing the solution into an existing legacy codebase for extra features or
addressing immediate problems.

See, I shied away from bigger refactors of the code base's structure as I
generally don't see much value in that. Hardly any customer gets value simply
because I renamed a variable or introduced an internal abstraction.

As we see now, that's a rather short-term biased view. Namely, as the time to
make changes to the code base has increased. Its overall complexity has risen
too. However, I can't even remember the last time the site was down either. So
arguably, the original stability and reliability I've set out to produce have
been achieved at the cost of stagnation.

Still, since in June and July, I had the chance to dig into the unknowns of
building rugpullindex, I'm now REALLY discontent with its current architecture
and where the project's standing overall. I'd love to ragequit, and I have to
resist the urge daily.

Here are some of the known unknowns I dug into over the last two months:

- In Germany, can I launch any ERC20 token without much legal hassle? Also; How
  much would it be to incorporate here, and what are the benefits/risks? What
  are the benefits of incorporating elsewhere?
- How is it to have employees? Am I even capable of managing them? Will I be
  able to pay them in time? Will, they immediately rage quit because I'm
  annoying them?
- To build honeybatcher, how would an architecture look like? E.g., to get all
  L1 transaction's call data, what infrastructure would a sequencer require? An
  L1 full node?
- Is it even practically feasible to build a product akin to the idea of a
  pessimistic rollup, or is it just a pipedream of mine?
- For rugpullindex to make money in the short term without too much risk: What
  are the options towards monetization, and where and how should we position
  ourselves in the market?  (and many more).

You wouldn't believe how time-intensive and challenging it has been to answer
all of these questions. Additionally, when looking at the project's progress
over the last few months, I still cringe. From the outside, we haven't "shipped
much." But now also, since we've learned about our known unknowns, we'd now
like to change more than is realistically possible with our resources at hand.
Like very few shiny new features and nearly none of the original goals that
came from the initial market research by Scott, we have been able to implement
over the course of the last two months. A list:

- Report on the number of swap fees any data token can capture, e.g., monthly
- Report on the number of "data consumes" a data token can capture
- Improved the graphs on the main website to e.g. compare prices
- Optionally show the USD value or other fiat currencies
- Have more sophisticated methods on our API that attract paying customers and
  track any metrics on API usage.

Seeing that we can do none of this yet is frustrating. There's never been more
TODOs on RPI than today. Did I have ten people to hand out tasks? I probably
could make them all work half a year! Realistically, that's, of course, not
feasible:

- Right now: I can't pay them
- I'm not sure I could manage them all myself
- Why would they be interested in contributing in the first place.

So here we are, a project of almost a year of age with lots of untied loose
ends and some minor amount of money left in the bank. Next oceanDAO round
incoming, right? Actually: no.

Instead, let me tell you how I want to tighten things up:

- RPI won't try to raise funds from the oceanDAO in round 9. I don't want to
  spend time fund raising.
- RPI has sold all its remaining OCEAN to establish a runway of roughly another
  month or so.
- RPI is actively seeking collaborators that are willing to pay, e.g., API
  addons or other features.
- I want to deliberately distinguish between spending time on RPI vs. spending
  time working in the oceanDAO. I'll invoice the oceanDAO via proposals
  separately if necessary.
- I want to onboard one technical contributor who can help so that I'm less
  thinly spread.

In addition to that, I'm also looking forward to a month without having access
to an Ethereum account full of money.

I mean, consider that I've tried to consume as many funds as possible by
continuously applying to the oceanDAO since February. And since I won't have
more money in September, I also won't be motivated to do more. To me that
sounds like a great plan to focus some development to correct course. And it,
of course, isn't to say that I'm quitting the oceanDAO funding permanently.

I'd rather say it's an effort to relax development, correct course, and
generally improve navigation. Maybe I'll reapply in round 10. But mainly, I
hope to have more time to finally finish the crawler rewrite and show how awesome
"version 2" of rugpullindex can be. Knock on wood!

## August 17, 2021

### Loadtests on Erigon Node

Since we're dogfooding our latest addition to the RPI API, namely its [shared
Erigon node](/docs#AccessToOurEthereumErigonNode), we found a performance
bottleneck when rapidly requesting transactions. A multi-day optimization effort
identified the following issues:

- The file descriptors of a client's operating system need to be tuned towards
  ideal performance (more := better).
- The API authentication mechanism using Bearer tokens ended up slowing  down
  all of RPI's infrastructure as any request ended up being manually
  authenticated. We've added caching on August 5, 2021.
- For benchmarking Erigon or other Ethereum nodes, it makes sense
  differentiating between "hot" and "cold" data. "Hot data" is in blocks that
  have just been requested or created. "Cold data" is in blocks that are hardly
  ever in the server's memory.
- RPI's internal infrastructure communicates through Cloudflare, which ends up
  being the currently last remaining bottleneck. We're investigating solutions.

Below a benchmark's summary using Apache `ab`:

```bash
Server Software:        nginx/1.18.0                                                                                         [11/2806]
Server Hostname:        node.rugpullindex.com
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES256-GCM-SHA384,2048,256
Server Temp Key:        X25519 253 bits
TLS Server Name:        node.rugpullindex.com

Document Path:          /
Document Length:        103 bytes

Concurrency Level:      100
Time taken for tests:   8.536 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      2620000 bytes
Total body sent:        3500000
HTML transferred:       1030000 bytes
Requests per second:    1171.46 [#/sec] (mean)
Time per request:       85.364 [ms] (mean)
Time per request:       0.854 [ms] (mean, across all concurrent requests)
Transfer rate:          299.73 [Kbytes/sec] received
                        400.40 kb/s sent
                        700.13 kb/s total
```

- **Note:** We request `eth_blockNumber` ("hot data").

### Separating Crawler Code

- We're in the process of separating all crawler related code in the RPI
  backend into a standalone package. The process is on-going but should allow a
  better performing acquisition of data. Please stay tuned.

### Other

- Add [/security.txt](/security.txt)

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

## Improving the Gini Coefficient Formula's Accuracy
### August 2, 2021

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

## July 29, 2021

- Releasing a new product as part of our API offering. Rug Pull Index's
  [API](/docs) access now includes access to an ETH mainnet [Erigon
  node](https://github.com/ledgerwatch/erigon). Find more details in our API
  docs [here](/docs#AccessToOurEthereumErigonNode).

## On The Value Of Product And Distribution
### July 29, 2021

Quite some time has passed since I last wrote a coherent article on this blog.
Most updates since the big "[Build on Stolen Data](#BuiltonStolenData) " post
have been minor development updates. And so, I'm scared that it may look like
the project has stalled from an external point of view. No new blog posts, no
new software updates - It must mean the project's dead.

But, of course, it's not. However, I've been more hesitant to build over the
last month. It's been another one of those moments where I deliberately took
quite a step back to think thoroughly about what should and can be next.

Already during oceanDAO's R7 vote, I sneaked out - caught a plane to Italy, and
had a week of holiday relaxing on Mediterranean beaches. That vacation was
direly needed and super nice - but I'm not going to lie - the week before
boarding the plane ended up being quite stressful, particularly as I had to
make an extraordinary decision: 

1. Take the laptop with me and potentially ruin the vacation.
2. Leave the laptop at home and hope for the best.

See, running a web server is no joke and not something "fun". On the contrary,
it's a duty that requires a large capacity of time and mental commitment. For
example, there's my [personal blog](https://timdaub.github.io/) that I've
hosted on GitHub Pages. I honestly never worry about it as it consists purely
of static pages hosted by GitHub. I don't use a custom domain, so its online
status is almost fully in the hands of GitHub's engineers. However, I also
don't try to sell things on there, and I'm not trying to build business
relationships on it either. It's personal.

That's quite different for rugpullindex.com. It's all self-hosted and I've
deliberately framed it as a highly reliable and performant service. Of course,
I could choose to frame it differently. I could even choose to build it the
easy way too.  But I like to think that I'm gaining a competitive edge by
DIY'ing my infrastructure.  Additionally, I take quite some pride and gain
motivation because I'm able to deliver on these personal goals.

But then what to do in case I direly need some vacation from my
[1-dev](https://en.wikipedia.org/w/index.php?title=Bus_factor&oldid=1035432949)
startup?  And indeed, that was the dilemma I found myself in before going on
vacation. So the short answer to a rather long story is that I've prepared
myself to go without my laptop:

I messaged some of my data providers and asked for planned breaking changes in
the upcoming weeks. For months now, I've improved the crawler's reliability by
building redundancies. In addition, I made sure to have some backup plans for
some of the worst-case scenarios.

And what can I say: It all worked out (gladly). I ended up being in Italy for
one full week on a fantastic and relaxing vacation while rugpullindex.com
continued to deliver its service. So that made me happy. But then also
recently, and thanks to the fact that I could step away for one week, I've also
started to reflect more on what's important for a project like RPI.

Historically, and that's true for many of my prior projects, I've prioritized
building product and utility before anything else. My idea had always been that
a great product distributes itself through, e.g., word-of-mouth marketing. And
while I don't doubt the existence of such a distribution effect - I also don't
believe it to be a very effective marketing strategy for a product's audience
of RPI's size.

Indeed, over months of observation and testing, I've learned that mostly the
opposite is true. The attention economy is real, and this blog's reach is tiny,
especially when compared to what huge quantities of media we consume elsewhere.

And that's why, after my vacation, I've prioritized "softer" goals over
"hardcore" product development.

1. Thanks to Scott's work, we gained valuable insights into how we want to
   position rugpullindex on the landscape of online data and finance companies.
2. I've opened a [Discord server](https://discord.com/invite/qrtrqsQa) with the
   mission of knitting the RPI community more tightly.
3. I'm starting to work on "professionalizing" our web presence by, e.g.,
   aesthetically improving the website.
4. I'm trying to improve RPI's API UX and by serving our customers directly.
4. I've started committing more to business partnerships, and I'm trying to
   explore where collaborations are possible.

If you'd picture me a month ago, I'd probably be this guy with a wrench in his
hand and a hardhat on his head. Today, I'd suggest that I'm at least wearing a
tie or a fancy shirt. I'd probably look pretty weird, wearing both tie and
hardhat. But whatever, both are valuable roles for sure - sometimes, one is
more important than the other.

To conclude this rather complex post, I'd like to leave you with something more
simplistic from yet another self-help startup book I've recently discovered.
It's called "Start Small, Stay Small: A Developer's Guide to Launching a
Startup" by Rob Walling. On an early business's priorities, he claims that:

> "Market comes first, marketing second, aesthetic third, and functionality a
distant fourth."

## Multiuser API support
### July 23, 2021

Hi,

I finally managed to implement a minimal user system to handle more than one
user for the [API](/docs). I've now sent out two additional keys to community
members that asked for API access. If you, too, are interested in using the
API, please shot us a message on Discord or email.

Best,
Tim

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

## Built on Stolen Data
### July 2, 2021

A few days ago, GitHub released a new tool for developers called
[CoPilot](https://copilot.github.com/).  It's a software plugin for text
editors as [VSCode](https://code.visualstudio.com/) that allows developers to
"Just Hit Enter" to autocomplete the code they've written so far. I recommend
checking out CoPilot's [website](https://copilot.github.com/). Their showcases
are pretty incredible.

In fact, they're so awe-inspiring that I had a few chats with people about it
in recent days. "Man! We're the next to get replaced by AI!" and so on, where
the initial reactions. I'm sympathizing with those emotions - but I was also
fairly skeptical. I immediately had doubts about that bot helping me write
helpful unit tests - which I find the most tedious and analytically-laborious
task in writing software. I don't think it'll understand different testing
contexts.

But some people on the Internet managed to get ahold of this program quickly
and started exploring its outputs. Suddenly it became conceivable that the
"public" data GitHub had used to train CoPilot may include restrictively
licensed code like those residing under ,e.g., the
[GPL](https://www.gnu.org/licenses/gpl-3.0.de.html).

Someone pointed out on Twitter:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">github copilot has, by
their own admission, been trained on mountains of gpl code, so i&#39;m unclear
on how it&#39;s not a form of laundering open source code into commercial
works. the handwave of &quot;it usually doesn&#39;t reproduce exact
chunks&quot; is not very satisfying <a
href="https://t.co/IzqtK2kGGo">pic.twitter.com/IzqtK2kGGo</a></p>&mdash; eevee
(@eevee) <a
href="https://twitter.com/eevee/status/1410037309848752128?ref_src=twsrc%5Etfw">June
30, 2021</a></blockquote> <script async
src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Shortly after, another person followed up by having CoPilot generate the
infamous [fast square root
algorithm](https://github.com/id-Software/Quake-III-Arena/blob/dbe4ddb10315479fc00086f08e25d968b4b43c49/code/game/q_math.c#L552)
from Quake III ([GPL
licensed](https://github.com/id-Software/Quake-III-Arena)).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I don&#39;t want to say anything but that&#39;s not the right license Mr Copilot. <a href="https://t.co/hs8JRVQ7xJ">pic.twitter.com/hs8JRVQ7xJ</a></p>&mdash; Armin Ronacher (@mitsuhiko) <a href="https://twitter.com/mitsuhiko/status/1410886329924194309?ref_src=twsrc%5Etfw">July 2, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Indeed, the later tweet author even tricked the auto-completion algorithm into
suggesting a license for the code as well.

Now, I think it shouldn't come as too big of a surprise that the inputs of a
machine learning algorithm can reappear as fragments in output later. I guess
that for ML-generated images, our brains are just not good enough to compute
matches. Hence, we credit most contemporary algorithms as "pretty original". In
contrast, it seems relatively easy for code-copy-cats to be debunked.
Particularily, when this one suspicious-looking random-ass hex value
"0x5f3759df" is auto-suggested.

For me, what I found much more scandalous is, however, this other dimension
where it appears we've caught Microsoft stealing from all GitHub users. Could
it be that it simply had dumped all sorts of restrictively licensed open source
code (including MINE!) into their model? Could it be true that they're now
profiting by stealing from my work?

That'd be outrageous!  And so, as I was informing myself some more, this subtle
anger - triggered by my sense of justice feeling hurt - started growing. 

It only got worse when I read more Hacker News comments. Specifically, one
which claimed that many image recognition algorithms were likely just trained
with copyrighted image data too. I mean, I don't even know what to say about
that. 

Indeed, now when I'm writing these lines - it's so absurd - I feel like
doubting myself. Is it really that bad? But see, for me, it didn't even occur
until now that training a model on copyright-protected images is *an option*.
My most prolonged understanding of how these models were built was: (1) Launch
a successful social network. (2) Setup shitty T&Cs.  (3) Harvest data from
users *legally* (but maybe immorally).

However, to now learn that a giant like Microsoft dares to just release a
product built on looting is genuinely a shock. Particularly when considering
that I could be part of the wronged ones. Or; that I could be part of the damaging
party by having accidentially used such an illicit algorithm .

Right now, it feels absurd. I'm classifiying the usage of copyrighted content
in machine learning as deeply immoral and illicit. Involuntarily, an image of a
blood diamond comes to mind.

I think it should be illegal and pursued to distribute such a piece of code.

**Edit on July 8, 2021:**

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">oh my gods. they literally have no shame about this.<br><br>GitHub Support just straight up confirmed in an email that yes, they used all public GitHub code, for Codex/Copilot regardless of license. <a href="https://t.co/pFTqbvnTEK">pic.twitter.com/pFTqbvnTEK</a></p>&mdash; ✨ Nora Tindall 🪐 (@NoraDotCodes) <a href="https://twitter.com/NoraDotCodes/status/1412741339771461635?ref_src=twsrc%5Etfw">July 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


## June 29, 2021

- Improve real estate of index table by creating a customized cell to display
publisher, symbol and rank in one place.
- Allow checking out a data set's historical price between Jan 1,
  2021 and today. Click on the little chart icon next to the name.

## June 28, 2021

- Release [historial price API endpoint](/docs#GETHistoricalPriceDatabyDID).

## Generating valuable insights from speaking with RPI users
### June 25, 2021

#### Long time listener, first time caller

I only just entered the blockchain world professionally having watched closely
from the sidelines for a number of years.

I've worked in corporate Advertising and Tech consultancies over the last 10
years and tried my hand in a number of different startups.

I recently joined the Ocean DAO and met Tim. I could see that what he was doing
would be successful if Ocean is successful and while the index was technically
sound, I knew I could contribute to its development by helping to round out
Tim's strong technical skillset by paying special attention to user's needs.

#### The Approach

Firstly, I wanted to identify the opportunity available to the index and answer
the following questions; 

##### How were users using it and how where they thinking about it?

Knowing this gives us a much clearer idea of what we're building and why we're
building it. Opinions are great, but it's better to have actual feedback from
real users. That way you know you're building something for real people and not
just building the thing you want to build (something I've been guilty of doing
in the past!).

##### We collected 77 pieces of feedback from users

Some were simple suggestions like 'I think you should change the name' while
others were more illuminating and got to the core value proposition from the
user's perspective like, "I don't currently use the site because I'm not
looking to invest in data tokens."

After adding all 77 one liners to a spreadsheet I went through and tagged an
associated theme to each piece of feedback (e.g. Risk, Education, Marketing
etc).

##### A macro trend emergered where 64% of comments were 'investment' related, 16% were 'educational' while 20% were 'other'.

I made a note of these finding and plan to feed them into marketing initiatives
and prioritisation decisions in the future. 

##### Unearthering new ways to help users

After digging deeper into the findings it became clear that an imediate
opportunity exists to help users make better $OCEAN staking decisions. 

I personally wouldn't have seen this as being RPI's primary opportunity to
begin with but approaching users with an open mind and enabling insights to
emerge from speaking with them is a great way to unearth hidden jems.

The secondary objective was to help users make better data token investment
decisions which was more in line with my expectations.

##### Sorting the wood from the trees

After breaking the raw user feedback data down further I identified 9 key
action items.  

I then added these to the table below and prioritised them using the [RICE
prioritisation
framework](https://blog.intercom.io/rice-simple-prioritization-for-product-managers). 

![](rice1.png)

This helped us identify the relative priority of the various tasks at hand and
plan accordingly. 

The 9 items have been broken down further into a Now, Next, Later table
enabling us to be clear on the areas of focus. 

![](rice2.png)

It's unlikely we will follow this table completely as things will inevitably
change over time. However, this does give us a great foundation to build upon
and start delivering value to users soon. 

Tim was able to publish an [article](specification)
explaining how the ranking algortihm works already. You may need a PhD in
Mathematics to understand it but that's besides the point.

We've got more work to do in order to break down these one liners into
actionable user stories. For now though, we have a new and refined focus -
helping users make better $OCEAN staking and datatoken investment decisions.

...watch this space.

*Written by: Scott Milat*

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

## Blog Post: "When Scope Blows Up"
### June 18, 2021

- Release a [blog
  post](https://timdaub.github.io/2021/06/18/when-scope-blows-up/) on
  my personal blog about "scope" in software development. It's related to the
  experience I make with building rugpullindex.com and honeybatcher.

## June 17, 2021

- Create [Gitcoin grant
  site](https://gitcoin.co/grants/2763/rugpullindexcom) for GR10
  matching. Please consider contributing.

## Introducing Honeybatcher
### June 10, 2021

In several previous updates, I talked about how difficult it is for RPI to
monetize considering the uncertainty surrounding Ethereum gas prices. A few
weeks ago, I said that deciding on a scaling solution is
[difficult](https://timdaub.github.io/2021/05/22/ethereum-layer2-scaling-rollups-dapps-sidechains/).
I mentioned that I'm doing my own research too.

Today, an important moment in this process has come. I've been able to put a
tiny amount of my idea into code. Introducing
[honeybatcher](https://github.com/rugpullindex/honeybatcher), a
[pessimistic](https://ethresear.ch/t/pessimistic-rollup-scalable-batched-smart-contract-interactions/7765)
(or as I'd prefer: "strongly-consistent") rollup.

Now what's the idea here? The idea is that both zero knowledge proofs as well as
building optimistic consensus mechanisms is incredibly difficult. Hence, instead
of using cryptographic proofs or building my own distributed system, I thought
about what I could leverage today to minimize gas costs and complexity.

First of: The EVM - it's awesome. It allows to run completely deterministic
code. That's useful, as the complexity of our system is reduced immensely if we
just assume a smart contract to be the permantent leader within our distributed
L2 network. Not only does it make writing sequencer code easier, as just a
single contract has to be monitored, it also allows a user to withdraw their
funds at any time. If the an Ethereum smart contract is the leader of our
distributed L2 system, any possible write or read can be done at any time
without losing a consistent view over the system's state. This is different
from optimistic rollups where consistency emerges from delayed economic
finality mechanism that is incentivized for using fraud proofs.

Now with regard to minimizing gas cost, I found that a single Ethereum
transaction costs at least 21k gas. More is required for special EVM
executions. If we observe transactions on Ethereum, however, we'll see that
many addresses do the same thing: they either swap or transfer their tokens.
Hence, if we'd be able to batch-execute multiple transactions in one, we could
safe a second user up to 10.5k gas and a third user 14k, and so on.
Furthermore, by building the rollup in a usecase-specific manner, we could safe
further gas (e.g.  by tracking balances in Merkle trees and by authorizing
ERC20 transfers using `ecrecover` (only 3k gas)).

Now, for the code I've published today - it's **not** a big deal. As you may be
able to infer from the above-linked repo, the contract merely a single
function.  There's not even a repository for a sequencer node yet.

Still, I created a new entry in this blog to celebrate my achievement. It's
with its existence and the
[honeybatcher](https://github.com/rugpullindex/honeybatcher) GitHub repository,
that I'm finally able to share an idea that so far has been purely stored in my
head. Today, I'm happy because I managed to express a complex thought in words
and code. I'm happy as judging from my experience, it means that the amount of
complex thought I'll have to go through from now on, will be less than today.
It'll be downhill from here.

So what's next? Next is that I'll continue contributing code to the
honeybatcher repository. I'll keep you posted on my progress here.

Best,
Tim

PS: This blog post was written in Berlin's pitiless June heat. I'm, hence,
hoping that what I wrote can be considered a coherent thought and not some
brain melted icecream lol 🍨

## June 8, 2021

- Add structured meta data for better search engine results

## Adjustment to Gini Coefficient Calculation
### June 7, 2021

Hi there,

I mentioned in my last entry that the gini coefficient seemed too positive for
some data sets. In particular I talked about
[VORSTA-2](https://etherscan.io/token/tokenholderchart/0x00c522b89e3B769BF47529e11C475E2e734A8A40)
and how was able to enter in rank #3 with only 3 token holders, the richest one
owning 98% of its pool. Below is a picture of VORSTA-2's share distribution. I
don't think there's a lot of math needed to understand that this pool has no
equal distribution of liquidity.

![](./vorsta2.png)

When I implemented the gini coefficient score at the end of last year, I
defaulted to [a formula from
Wikipedia](https://en.wikipedia.org/w/index.php?title=Gini_coefficient&oldid=1017020580)
that uses the income distribution of a population and a relative mean for the
incomes' absolute differences (see below).

![](./giniformula.png)

Essentially, it compares each LP's stake in the pool and then divides (roughly)
by the mean stake. For VORSTA-2 (and similar ones), the formula allowed it to
rank highly on rugpullindex.com as any small share in the pool counted. For
VORSTA-2, [0xda2d9's
stake](https://etherscan.io/tx/0x5a4ca7aeab948675eb20b6dc98e8d54d5ea660724e82ac07f3274c4e38213422)
(roughly $35) contributed as much to the calculation as the stake of
[0x89717](https://etherscan.io/tx/0xf04236926ce7f34635a454599900b300fe0a391471107da8f29736ac60578139)
($12k).

Using pen and paper, I sat down to think about a solution. I think I found
a simple one that I'd like to share now:

- For a data set with more than 100 LPs, any share that's greater than 0.1% is
  considered in the gini coefficient calculation; and
- For any data set with less than 100 LPs, only shares that are greater than 1%
  are considered.

The new ranking went live before this blog post. You can check it out on the
front page. In my opinion, the solution improves the ranking's results. Small
sets with an _apparently_ positive gini coefficient are filtered, while we're
still giving data sets with a bigger community a fair chance.

Looking at the results, I found it curious how many data sets had "sneaked up"
in the ranking over time. Obviously, I can't say anything about any publisher's
intentions. It could have been that some moved some liquidity to improve their
scores. It could have also just been regular liquditiy providing. It could have
been chance.

In any case, however, I'm now motivated to further improve the gini
coefficient's safety by tracking data that's capital-inefficient to manipulate.
I already have some ideas. Until then, feel free to continue playing mouse if
you dare :)

Best,
Tim

PS: Thanks so much for voting in OceanDAO's Round 6!

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

## May 26, 2021 Changelog

- Release API docs over at [/docs](https://rugpullindex.com/docs).

## How "Plausible" are Our Website Analytics
### May 26, 2021

From rugpullindex's first days, I made its website analytics
[public](https://github.com/oceanprotocol/multi-repo-issue/issues/30#issuecomment-726857582)
by using [plausible.io](https://plausible.io). I'm a huge fan and paying
customer of their service. I like the idea of making my website's stats public.
And, I'm  a fan of using a solution that's
[privacy-friendly](https://plausible.io/privacy-focused-web-analytics).
Actually, I liked plausible's product so much that I've presented this website's
stats as a voting criteria in all OceanDAO rounds.

Recently, however, I became aware of a problem with plausible's web analytics,
that I believe is important to share here. It has to do with the fact that
many ad blockers are now blocking plausible's tracking script.

If we take a look to [RPI's six month unique visitors](https://plausible.io/privacy-focused-web-analytics),
we just see that its been fairly stable. Between February and May, there's been
roughly the same amount of unique users per month (around 500).

![](./plausiblesixmonths.png)

We can also look at pausible's 30 day view to get a feeling of how many unique
users visited in the last 30 days:


![](./plausiblemonthly.png)

Indeed, the stats look plausible. Since I started to deliver my website through
[Cloudflare on April 21,
2021](https://rugpullindex.com/blog#MajorPerformanceImprovementisLive),
however, I noticed a large deviation on _their_ website analytics frontend for
the same timeframe.

![](./cloudflaremonthly.png)

While plausible logs 596 unique visitors, Cloudflare displays 2,81k! I found
this difference quite interesting, given that both services use a completely
different technique of tracking unique website visitors.

Here's how they differ: (1) As Cloudflare is a content delivery network (short
CDN), it can track unique visitors e.g. by checking everyone's IP on a request
level. (2) Plausible, since it's not part of RPI's infrastructure, has to rely
on an embedded JavaScript to send data to its servers.

And though plausible is a publicly-committed company towards
privacy-friendliness, they've [publicly
stated](https://plausible.io/privacy-focused-web-analytics) that their script
has started to appear on blocklists. This means, that for any ad blocking
browser, their users might now show up as unique visitor in our plausible.io
stats.

Seeing this, I thought it may be interesting to compare both sets of data
side-by-side and so I did using a [Google
Spreadsheet](https://docs.google.com/spreadsheets/d/11yuzMx6os9cH2KJwMKmEvpNOy1vIABl--EqklYgxnDE/edit#gid=0):

![](plausiblestatschart.png)

And, indeed, the difference is huge. But it makes sense. According to some
napkin math, Cloudflare has counted 87% more unique daily users on average than
plausible.io.

Plausible's co-founder Marco Saric came to a similar conclusion when a year
ago, [he blogged about an
observation](https://plausible.io/privacy-focused-web-analytics) that 26% of a
tech-savy audience blocks Google Analytics over plausible.io's tracking script.

Seeing these facts, I found it reasonable to assume that a similar effect may
happen to rugpullindex. And that's what I was able to confirm with my napkin
math.

Given that users can't directly influence Cloudflare's unique visitors metric
by e.g. installing an ad blocker, we can assume that on average, the daily
count of unique visitors from plausible.io deviated by a wopping -87%. Instead
of plausible's 590 unique visitors since April 26, 2021, it's more likely that
rugpullindex had a total of 3767 unique visitors.

Plausible has reacted to the problem by allowing users to [submit stats through
a proxy](https://plausible.io/docs/proxy/introduction). As rugpullindex's stats
are vital for its community to determine its future funding and value, it has
hence become my recent priority to address the problem. Step one was writing
this post to inform everyone.

Finally, I'd like to say that I'm a bit sad about this situation. I personally
care about my privacy online and I hate that tracking has become a sound
business model for many tech companies. It's the reason I've always been
excited about data sovereignty, OP and rugpullindex. I find it stupid that my
project's stats are distorted because others are extracting millions through
non-consensual tracking. Is this why we can't have nice things?

Additionally, I believe that merely tracking user flow isn't falling into the
category of "privacy-invading" technology and I'd therefore like to say that
blocklist maintainers should start offering more opinionated views (e.g.
support plausible.io but not GA).

Finally, I'd like to say that I don't want to blame anyone directly for the
situation.  Rather, I believe that it's a systemic issue may be addressed by
finding better business models for cyberspace that don't rely on ads.

I'm hoping to correct the stats tracking soon. And, that's all for today.

Best,
Tim

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


## Quick Update
### May 13, 2021

Here's a quick update on the things that I've been up to in the last few
days:

- I've taken a deep dive into Ethereum rollups. I want to understand rollup's
  readiness and if I could use one for RPI.
- I've created an official GitHub organisation:
  [github.com/rugpullindex](https://github.com/rugpullindex) and I transferred
  all existing projects to it.
- I tested compressing simulated rollup data with brotli. I thought, if rollups
  are about compression, why not use the tools we already have. Find the
  benchmark
  [here](https://github.com/rugpullindex/rollups-calldata-compression).
- I've started a project to [download a contract's storage fast and for
  free](https://github.com/rugpullindex/contract-storage-downloader). I want to
  look into the balances of e.g. DAI or USDC and I want to research user
  behaviors.

From the outside, these projects might look arbitrary. To me, however, they're
helpful to gather more information about the state of scalability. I want to
find out: Can we truly build scalable dapps today?  Dapps that don't have
insane gas costs. And if so, how?

The reason for taking a closer look is to have clarity that building a scalable
dapp is possible today. You see, I'm sceptical as I've been burned with scaling
promises both in the "permissioned blockchain" era as well as when "Ethereum
Plasma" was a thing. Now, rollups seem to make a lot of sense from a
scalability perspective. But let's not forget that previous scaling concepts
made sense too. In the end, what matters is the rollups going into production
and how much throughput they'll truely able to have.

I'm looking into rollups, as for me, there's no point in having my users trade
assets for $100 transaction fee. But not only that. I think that it's starting
to become an obligation to stand up as blockchain developer and take
responsibility for the terrible pollutive nature of PoW chains. Sure, mining
*could* be done with clean energy. But is it?

To have a positive impact, I think it's important optimizing for efficiency.
Any tx that can be shaved off should be. And, hence, just building yet another
simple Dapp simply doesn't cut it for me this time. It'll have to scale.

And so yeah, hence the research into rollups. It's been fun and I'm excited to
continue improving the project.

Cheers,
Tim

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

## Meditations on Monetizations
### May 3, 2021

Hi yall,

I feel like its been a long time I made time to write something in this journal.
That's because, as I may have mentioned, I favored building over communicating
in April. I saw a strong need to do so and now that I've been able to speed
up the page, I'm enjoying the fruits of my work.

However, there's a certain thing that's been on my mind a lot recently. As you
may have seen from the front page, OceanDAO's Round 5 is in progress. And with
that, there's another opportunity for rug pull index to receive income so that
I can pay rent.

In the beginning, I shrugged of the vote easily as the project was young and
since I wasn't convinced in its importance. In the recent weeks, I've realized
that it, too, became an important part of my online expression and a regular
part of my life. I love doing things my way. I feel empowered. Working for RPI
feels great.

But with that additionally gained freedom, as usually in life, there also comes
a fear of losing it. I learned that when applying for OceanDAO R5 the last
week. Simply put, I've been surprised to see that through its competitive
nature, most proposals have risen in quality. The fund raising, too, has become
more complex and time-consuming. There's now more capital voting than before.

And while I have no doubt that this capital can also work in RPI's favor, it
makes me anxious to see that its existence is directly coupled to vote's
outcome. That makes me anxious as, if I ran out of money, justification for
spending time here would become difficult as I'd earn more from serving
freelance clients.

This leads me to the point of this article, which is monetization. Or shall I
say diversification and the spreading of risks? In Peter Thiel's "Zero to One"
there's a section where he goes on to say that building a business is mainly
about surviving throught progress and time. Along with that he states that
PayPal has made more money in its recent last year than all other years of its
existence combined. For him, it's all about continuity. I feel the same about
starting a project.

Service and its quality is 99% about showing up and about consistency. Its
about continuing to build trust. I know this as I've been part of BigchainDB
GmbH and ascribe in their first years. I've witnessed the doubts from potential
customers first hand. Sure, we faced problems building the product. But
convincing customers to commit to our product was more than just writing code.
It was about the team's quality, committment and the perceived chance of the
company's survival. A customer trusting in us was a customer buying from us.

I've made that experience in 2015 - 2017. I realize it now and I want to act on
it by making time and external progress the friends of rug pull index. It shall
have limited downside and unlimited upside. Practically speaking, I can execute
on that by removing weak parts and by improving the good parts. A weak part I've
discovered is its dependence income through the OceanDAO.

Hence, for the future, I want to commit myself not only towards building and
communicating but also towards to the goal of increasing and diversifying the
project's income and funding.

A preliminary idea: Sell ads. Because why not? Building the ad spots took me 5
minutes. I've added outbound click tracking too and the results are starting to
come in. Last week, there was a [32%
chance](https://plausible.io/rugpullindex.com?period=7d&goal=Outbound+Link%3A+Click)
that a user clicked a link on rugpullindex.com. At least for last week, it
confirms that this newly created estate holds value. I'm open to discuss rates.
Contact me.

Additionally, it means opening my wallet else where. It's not by accident that
[I've recently toyed around with web components and packaging web3 into a
minimal JavaScript bundle](https://github.com/TimDaub/web3-sign-msg). A
web3-based signature feature is coming. Conviction voting sounds appealing. And
with that, a new opportunity for revenue opens for me too.

Es bleibt also spannend!

To conclude: yes, you've heard it right I need the cash (to) flow! I need it
now.  If you have ideas too, please get in touch!

Best,
Tim


## April 26, 2021

- Improve front page layout
- Curate extra information on front page

## Major Performance Improvement is Live
### April 21, 2021

Hey,

over the last month or so, the site had started to slow down significantly for
a few reasons:

- I've included an additional library to draw the graph on the front page,
- I did not cache the site globally through a CDN,
- By adding the chart, I had to do even more database queries
- And finally, I was still computing the scoring upon delivery of each request.

That last one ended up taking 4-6 seconds uncached now. You may never notice it
as I'm using `Cache-Control,` NGINX cache, and now also Cloudflare's CDN for
caching the page all day.

However, I noticed the annoyingly slow page loads, so I decided to do something
about them. Not only were they a problem for general usability, but they also
stood in the way of adding other features, e.g.:

- Looking at indexes in the past
- Looking at individual assets and their ranks in the past
- Retrieving assets from private API.

Hence, on Monday, I decided that computing scores on the fly have to stop!
And since then, I've been heads down adjusting the database such that we get
sub-second latencies for loading / on an uncached browser window.

Last week, I already took care of reducing the number of extra round trips by
also finalizing a specially made library for drawing SVG line charts.
[svg-line-chart](https://github.com/TimDaub/svg-line-chart) is integrated
server-side and hence adds no additional overhead on delivery.

We end up with the following: The delivered data when accessing
rugpullindex.com has a total footprint of 50KB, making it fastly available from
almost any network!

Speed is a killer feature. I truly believe in that, and I hope you now come to
rug pull index happily, knowing that the browser will load the page in no time.

Best,
Tim

## Recent Updates
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

## Termux Maintenance
### April 5, 2021

I felt stressed before easter. Through COVID lockdowns and all, I ended up
mostly working anyways. I mean, there isn't much more to do really. But then
for easter, I decided that I don't want to spend time on the computer. I felt
like wanting to do a small digital detox when visiting my parents in the south.

So instead of my computer, I ended up packing lots of books and even some
utensils for drawing. Now that easter's done, I'm happy I've tried!

The main reason, I wanted to bring the computer was indeed rugpullindex. What
was I supposed to do when the crawler went down or when other problems arose?

"For one, the crawler works fairly stable now," I thought. But another reason I
felt comfortable leaving the Macbook Pro at home was that dev tools on Android
are starting to become interesting.

To be able to maintain the rugpullindex server, I ended up generating a ed25591
SSH key on Termux and uploaded it. I tried SSH'ing into it and it seemed to
work perfectly.

I also played around with Termux and related apps in the F-Droid store. They
start to look quite promising. It's like having a full-featured shell on your
phone. Some people even use it with a Bluetooth keyboard.

It sounds like such a cool idea for a product. Make phones more like computers.
SSH over mobile internet. Anywhere!

Anyways, apart from some minor edits to the page, I didn't have much to
maintain, fortunately. But using vim and SSH, I managed to write this little
post, reflecting on this experience.

Happy Holidays everybody!

## Recording from Town Hall Meeting
### March 30, 2021

In the last OceanDAO town hall, I talked about rug pull index. Here is the
recording:

<iframe width="560" height="315" src="https://www.youtube.com/embed/t2ukBvdwC3s?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Interview
### March 26, 2021

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

## Minor Updates
### March 23, 2021

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

## The Crawler Crisis
### March 22, 2021

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

## The Performance Graph
### March 15, 2021

In [OceanDAO Round
3](https://port.oceanprotocol.com/t/rugpullindex-com-round-3-proposal/434), I
announced building towards a graph that shows the index's historical
performance. But for the last month or so, most of the changelog I published on
the blog was about improving database queries. Indeed, I had to adjust all of
those to show the following graph today:

![](./firstperformancetry.png)

Here, you can see a first try at displaying the index's performance starting on
February 15, 2021, to March 15, 2021. X-axis showing the dates of measurement,
y-axis the index's price in EUR. Please note that I haven't had time to confirm
its correctness yet. However, it looks roughly correct. So how did I create
this graph?

- I assume an index value `target = 100` (in EUR)
- For each data set's score, I calculate a relative score `relative_score =
  score / SUM(scores)`
- For each data set, I then calculate a share amount `share = relative_score *
  target / price`
- A `share` represents the number of tokens the index holds for a
  given data set. After buying a target of 100€ in tokens, all I do is note
  down daily all token prices. By summing all token prices per day, I get the
  index value per day. And those values, I plotted in this graph.

I know, for now, that might sound not very easy. But I've plans to improve this
communication. Anyways, that's today's update.

Best,
Tim

PS: Another change I made today:

- Continue improving ranking algorithm's data base queries. It should now
  finally be possible to get a reliable ranking querying the data base by any
  past date. Next up is aggregating all these results and dumping them in a
  chart.

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

![](./excane-93-error.jpg)

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

## Thank You For Voting
### Mar 7, 2021

On Friday, March 5, 2021, OceanDAO's round 3 vote finished. If you browsed the
website last week, you might have noticed the yellow call-for-votes I had put
on the front page. I can't prove that it had much of an effect on the voting
outcome, but I can say that there's an essential difference between the votes
of rounds two and three. Let's look at the data.

In round 2, 63.08k OCEAN tokens or three addresses voted for rugpullindex.
That's 5.28% of all votes. This time around, 233.54k OCEAN tokens or two
addresses voted, making it 7.73% (+2,48% or an increase of 47%, relative to
round 2) of all tickets that voted.

I doubt that we can draw many insights from the above-presented data. Still, in
the spirit of gathering data for self-improvement and record some insights for
posterity, let's look at what deliberate optimizations I made between rounds 2
and 3:

- I approached potential voters directly by adding a little yellow note to the
front page. I also reached out to voters directly.
- I spent more time working on rugpullindex.com in February than any month
before.
- I actively wrote about the project on this blog and circulated my thoughts on
social media.
- I kept my R3 proposal concise and clear.
- As I said, I don't think there's much meaning behind these statements yet.
But I wanted to note them down anyways and maybe come back to this post in the
future.

Lastly, I'd like to thank all of my voters! Your vote allows me to spend
quality time on issues that I think are worth exploring, thinking about, and
fixing. Thank you! That's all for today.

Best,
Tim

## Scaling Ethereum One Tx At A Time
### Mar 1, 2021

With regards to building rugpullindex.com, there are currently two problems
bugging me. One is that gas prices on the main net are insanely high right
now. And two is that the Ethereum front end space has become even more
hostile than what I was used to before.

In a recent post over on my blog, I've made the argument that "[Ethereum isn't
fun anymore](https://timdaub.github.io/2021/02/22/ethereum-isnt-fun-anymore/)"
and that "[web3 is a stupid idea](https://timdaub.github.io/2020/09/08/web3/)".
Though I've earned some criticism for these posts, I'd now like to double down.
I have an alternative vision for web3. Purely from a pragmatic, architectural
point of view.

I've written it in long-form over in the [Ethereum/EIPs issue
section](https://github.com/ethereum/EIPs/issues/3304) already.  We need to
start thinking practically about light clients now. Ironically, full nodes are
costing developers real dollars today. And building truly decentralized
applications is hardly possible anymore without a credit card—the irony.

I guess nobody designed the Ethereum protocol with light clients in mind.
Still, I think there are small fixes, applied here and there, that could help
dramatically improving user experiences in web3's front ends. So what's the
plan?

#### Scaling Web3 via WebRTC

Just recently, [WebRTC was made a W3C and IETF
standard](https://web.dev/webrtc-standard-announcement/). WebRTC (or Web
Real-Time Communication) is a concept for sharing data directly between users'
web browsers without going through middlemen like servers. "Over the past year,
WebRTC has seen a 100X increase of usage in Chrome due to increased video
calling from within the browser.", the article states. But WebRTC cannot only
be used for distributing video. Reasonably, we can use it to spread any data.
And one data that I've ranted about not being distributed well enough is that
of the Ethereum blockchain.

#### ... and Via WebTorrents

WebTorrents allow us to download torrent files directly from the web.
[instant.io](https://instant.io), for example, enables a user to paste in a
magnet link to download it within the browser instantly. A client could now
easily send a [magnet
link](https://en.wikipedia.org/w/index.php?title=Magnet_URI_scheme&oldid=999476988)
to start syndicating files.

![](./instant-screencap.png)

In general, torrents have a rather bad reputation, mainly as they've been a
driver of piracy in the past. However, speaking of their technical properties,
torrents are like one of the coolest technologies around.

- They guarantee file integrity through hashing (similar to content-addressing)
- They have built-in incentivization that can drive seeding
- Their scale increases with the number of participants (or seeders) increasing
- They are "proven" technology.

So how does WebRTC, WebTorrents and Web3 fit together?

#### ethtorrent, A Decentralized Web3 Provider

WebTorrent utilizes WebRTC in browser environments. It can fall back into a
[webtorrent-hybrid](https://github.com/webtorrent/webtorrent-hybrid) for
server-side usage. What's fantastic is that WebTorrent has a [distributed hash
table built-in](https://github.com/webtorrent/bittorrent-dht). It even allows
specifying a custom hash function. So what's the plan?

For now, the plan is to democratize the access of blockchain data for regular
web3 apps again. The first step towards this will be creating a lean component
that we can use with web3.js. Its goal is to cache and store all requests from
web3.js that have to do with a full transaction or an entire block. We will
await the response, cached for these requests, and offer it for download on
WebTorrent via a custom DHT.


If a second client comes along, for each request they make towards the full
node's RPC endpoint, it will be interrupted, and instead, will consult the
WebTorrent's DHT first. In case the retrieval of a transaction is possible via
torrents, it will make no RPC endpoint call.  That is good for a few reasons:

- Infura and others bill by requests/day. For an application that needs scale,
  this can incur relatively high costs. Decentralized applications shouldn't be
  bound to the creator's solvency. After all, smart contracts aren't.
- Infura is centralized. If it stops working, the reliant dapp starts working
  too.
- Many dapps need to send the same data to the same users. It's mostly related
  to the application's state at a specific moment. If all users could come in
  sync quickly when starting up the application, that'd improve a dapp's user
  experience dramatically.

#### What Needs to Happen Now?

I'm not sure if I'll handle this project as part of rugpullindex.com. However,
only through it, I had the idea for it. In any case, I think building the
project shouldn't be too much of a hassle as WebTorrent comes with batteries
included. As a start, I'll attempt to create a library that can bootstrap the
Ethereum WebTorrent network for sharing transactions and blocks. Then, I'll
build a simple bootstrapping node capable of talking back to an archive node
for eventually missing transactions or blocks in the DHT.

Then, I think it's a question of whether the idea is accepted and used by the
Ethereum community. However, a web3 provider could significantly reduce the
number of requests a dapp does daily; I could imagine there be a will to give
it a try.

And that's how I want to contribute to scaling Ethereum for now. I hope you
enjoyed reading. Feel free to let me know your thoughts by reaching out to me.
My email is on my blog.

That's all for today.

Best, Tim

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

## The Algorithm; It's Working!
### Feb 23, 2021

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
