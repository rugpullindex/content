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

Finally, with blockchain I can just create issues on GitHub and have random
other people that I've never met solve them with PRs and then pay them in magic
internet money. But, on the same hand, I can't do any of that with a closed
source code base.

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
blockchain space. True DAO companies that can mainly take enforcing actions
through on-chain messages will continue to face the challenge of not being able
to limit their member's speech. NDAs and closed source software just won't work
indefinitely and so there's only a limited set of other options: Speculate by
launching a token or trust everyone's compliance towards open source licensing.

But establishing the community crawler as a network of collective information
gathering, localization and trading, however, we're now making the first step
towards segmenting rugpullindex.com's monolithic code base into
individual-contributor-sized chunks.

Here's what a future sourcing of data will look like:

### 1. For each new day or hourly update interval, rugpullindex.com will post a data bounty on their API. 

Any user can pull the rugpullindex.com API and seek to get the latest data
bounties. A data bounty is always a request to a user for crawling and sending
in a specific set of information or data. A data bounty promises a bounty hunter a prize
money in case the request was orderly executed.

### 2. A data bounty will include an exact identity and resource locator.

An executable data bounty will always be precise such that its result will be
deterministic. A big part of the community crawler operator will be to
correctly specifiy, identify and locate specific data sources such that it
becomes obvious for bounty hunters which data to submit.

As for rugpullindex.com's first domain, the first data bounty will likely come
directly from Ethereum and will use specifiers like
[CAIP-22](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-22.md)
and beyond, where in the following case, we're asking how many CryptoKitties
(`0x06012...`) on Ethereum are owned by the address `0x00524...` and we want a
`uint256` back.

```
GET eip155:1/erc721:0x06012c8cf97BEaD5deAe237070F9587f8E7A266d balanceOf(address 0x005241438cAF3eaCb05bB6543151f7AF894C5B58) returns (uint256)
```

### 3. A data bounty hunter's payout is determined by competition.

A data bounty creator may not know which submissions to trust: After all,
everyone could have just submitted random sequences of numbers. However, since
the data bounty hunter has the money and also the interest of building a
long-lasting relationship with data bounty hunters, to overcome the empty
network effect, they'll employ validation techniques.

So it may be that for getting started, the data bounty proposer will also
participate as a data bounty hunter for their own challenges only to expose the
bad apple submitters after each challenge's submission.

It is, however, exactly this type of problem domain that we deem is important
to start exposing ourselves to: We want to become a data bounty proposer and
start paying others for crawling rugpullindex.com collectively. Finally, it's
time to decentralize.

Follow this blog for future updates about the project.
