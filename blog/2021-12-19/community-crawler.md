title: Community Crawler
authors: Tim Daubenschütz
keywords: crawler, decentralization, closed source, open source, ethereum
---

The community crawler is a project by rugpullindex.com making use of Ethereum's
unique property of sending random strangers on the Internet money.

As you can see on our current website, for any given hour of the day, we crawl
a number of sources available on the Internet to always display the latest
information on our website.

For that, the website's owner (me) rents out numerous cloud services and has to
pay numerous fiat bills on a monthly basis. I also have to be online relatively
often such that everything stays functional and online.

This is not only bad as it is centralizing myself as the single point of
failure.  In an internet project setting like ours where anyone can participate
and get paid to work with us; it has caused some major headaches too.

With blockchain I can just create issues on GitHub and have random other people
that I've never met solve them with PRs and then pay them in magic internet
money. But at the same time, I can't do any of that with a closed source code
base.

To work with a closed source code base, I'd then have to resort to everyone
signing contracts and NDAs before gaining access. By open sourcing my code
base, we'd be running the risk of our work getting stolen despite making use of
open source licensing.

So truly, at rugpullindex.com, for the last few months, we have been facing a
dilemma. We had an awesome and engaged team of engineers that wanted to make
things happen: But besides a library to draw graphs, none of the core
business-tangenting code was openly available.

Enter the community crawler.

Clearly, at this point we could have just open sourced part of the backend and
have everyone work on it. After all, what's the worth of a code base of a
failed startup. However, I think it makes much more sense to stay with the
trouble and face the challenge - as it's at the same time a unique opportunity.

The open and close source dilemma we're facing is one fundamental to the
blockchain space. True DAOs that can mainly take enforcing actions through
on-chain messages will continue to face the challenge of not being able to
limit their member's speech. NDAs and closed source software just won't work
indefinitely and so there are only a limited set of other options to make
money: Speculate by launching a token or trust everyone's compliance towards
open source licensing.

But by establishing the _community crawler_ as a network of collective
information gathering, localization and trading, we're now making a first step
towards segmenting rugpullindex.com's monolithic code base into
individual-contributor-sized chunks. Ideally, we're converting our remaining
operating costs from fiat into crypto and help to scale the development
process.

Here's what a future sourcing of data will look like:

### 1. For each new day or hourly update interval, Rug Pull Index' community crawler will post a data bounty on their API. 

Any user can pull the community crawler's API and seek to get the latest data
bounties. A __data bounty__ is a bid for providing a specific set of
information or data. Any user (we'll call them **bounty hunters**) reading the
API can start working on fulfillment of a bounty as successful submission
promises prize money.

### 2. A data bounty will include an exact identity and resource locator.

An valid data bounty will always be precisely specified such that its
submissions are ideally deterministic. Ideally, we'll get as little variance as
possible.

A big part of the community crawler operator will be to correctly specifiy,
identify and locate specific data sources such that it becomes obvious for
bounty hunters which data to submit.

As for rugpullindex.com's first data source, it'll likely be the Ethereum
mainchain and use precise identifiers like
[CAIP-22](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-22.md)
and beyond.

We're showing an example of how this may look below. Here, we're asking how
many CryptoKitties (contract: `0x06012...`) are owned by the address
`0x00524...` and we want a `uint256` back.

```
GET eip155:1/erc721:0x06012c8cf97BEaD5deAe237070F9587f8E7A266d balanceOf(address 0x005241438cAF3eaCb05bB6543151f7AF894C5B58) returns (uint256)
```

### 3. A bounty is created by a bounty proposer

Initially, we'll limit proposing data bounties to ourselves. To get started,
we'd like users to contribute to our Rug Pull Index data set by submitting
information on an hourly or daily basis. We'll pay for it on Ethereum's
[cheap](https://l2fees.info/) L2 infrastructure.

Eventually though, we'd like to model a network of **bounty proposers** and
data supply chains connecting all the way from small data bounty hunters to
mighting bounty proposers.

### 4. The community crawler is a peer to peer network

We'll design the community crawler network as a graph of flat-hierarchy nodes
that connect to each other peer to peer. We want to get away from the notion of
"servers" and "clients" and instead impose a flat hierarchy of responsibilities
and accountability.

Blockchain tooling has matured immensely over the last years and so libraries
like [libp2p](https://libp2p.io/) from Protocol Labs have become rather amazing
and reliable to work with.

### 5. A bounty hunter's payout is determined by competition.

Modeling accountabilities, trust and responsability in peer to peer networks is
rather challenging as we can't rely on designed authority. To tell which bounty
submissions shall receive payment and which ones shouldn't will probably be
rather challenging. A bounty proposer may not know which submissions to trust:
After all, everyone could have just submitted random sequences of numbers. 

However, since the bounty proposer has the money and also the interest of
building a long-lasting relationship with bounty hunters, to overcome the empty
network effect, they'll employ various validation techniques.

It may be that for getting started, the bounty proposer will run the submission
challenge too (as a bounty hunter) and, hence, consult the bounty proposer in
private. This would largely eliminate the incentive for submitting random
numbers as there'd be no pay day.

For now, even running our own validator to a degree may be a viable option; and
a business achievement.

We want to shift our product's value away from the closed source backend onto a
network of providers. Additionally, paying expenses in crypto would make a
difference too - particularly with our goal of becoming more and more
crypto-centered organization.


### 6. rugpulld is alive

In the [rugpulld network](https://github.com/rugpullindex/rugpulld), we want
Rug Pull Index to become the first bounty proposer. One day, we just want to
pay crypto to source all our data. I want to stop paying cloud providers for
the crawl and I want a more reliable and robust network that's not centralized
through me as the operator.

Follow this blog for future updates about the project.
