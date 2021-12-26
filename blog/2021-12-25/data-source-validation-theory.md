title: A Survey of Economic Theory For Validating Data
authors: Tim Daubenschütz
keywords: data, validation, oracles, network, peer to peer
---

As they should be, those last days were quite reflective and so I couldn't help
but also think about what I want to achieve with the [rugpulld
network](https://github.com/rugpullindex/rugpulld).

A small reminder for the uninitated: In my last post, titled "[Community
Crawler](https://rugpullindex.com/blog/2021-12-19/community-crawler)", I laid
out a number of goals to build a new generation data sourcing network. Instead
of launching already existing data sets as data tokens, the idea of the
rugpulld network is to make data a continuous commodity, essentially a signal
that you can turn on and off.

Shortly after formulating the idea as a post, the muse kissed me and I found
myself deeply down the peer to peer network rabbit hole. It's been an awesome
and exciting time. I love learning and so sing Protocol Lab's
[libp2p](https://github.com/libp2p/js-libp2p) was really an epiphany.  It's
matured greatly.

So far, I managed to create a client that, when booted, dials a bootstrap node
and connects itself to other nodes in the network. I've also started
experimenting with libp2p's gossip-based pubsub package and was able to
broadcast a message to all peers.

But during my time reading and learning, I overheard an engineer say that
working with trust and authority in p2p networks is particularly tricky and I
loved that. It's yet another type of network topology with a different power
dynamic.

## Web3 is Self-Certifying

I recently read Jay Grabers "[Web3 is
Self-Certifying](https://jaygraber.medium.com/web3-is-self-certifying-9dad77fd8d81)"
article, that points out the space's pinacle idea. And she uses authority as a
determining quality, which I find great as I've been exploring the idea of
deontic and epistemic authorities myself, when I wrote that "[On-chain, the
emperor wears no
clothes](https://timdaub.github.io/2021/10/21/on-chain-the-emperor-wears-no-clothes/)".
But going into her definitions, the different versions of the web have various
interesting characteristics that can be helpful to understand. She defines:

- Web 1.0 as *host-generated content and host-generated authority*
  meaning that, in its infancy, the web's peers were equally privileged and
  equipotent. Anyone could host a website and anyone had the same authority
  over what equates "the truth."
- Web 2.0 is about *user-generated content but host-generated authority*.
  Suddenly information-aggregating websites like Google, Facebook and others
  emerged that allowed users to attract and retain (larger) audiences. Content
  generating hosts became users or what we so modernly call "influencers."
  Meanwhile, those that remained hosts were forced and asked to take over
  responsibility and accountability for what was shown on their sites. That's
  why these days we ask Facebook to remove user-generated fake news whereas in
  Web 1.0 that distiniction couldn't have been made and neither could, hence,
  had the authorities been blamed.

Web3 then is *user-generated content and also user-generated authority*. The
tools to provide users with the responsibility, accountability and authority
over *what is correct* are gradually being rolled out. IPFS features
content-addressed data, Ethereum and Bitcoin educated a large user base to keep
signing keys safe and to trust in the Nakamoto Consensus. git gave programers
the ultimate provenance tool.

Graber's article ends with the idea that crypto currencies are really a subset
of protocols that are being built for Web3 and that its distinguishing quality
is *user-generated authority* or self-certification.

I found it interesting to mention her piece as it was a kind of catalist for
the problem space I want to explore with the community crawler and the
[rugpulld network](https://github.com/rugpullindex/rugpulld).

## Validating Data in an Equipotent p2p Network

So that's where the the most challenging part resides: in knowing what's write
but only having the responses of equals. 

Actually, introducing any kind of systematic authority is basically like a
get-out-of-jail card for any developer. If I can know how my code executes and
that it will ultimately reach conditions that I have control over - then I can
tightly sleep at night. 

In case I have a webserver that takes in market price data, I may only care
slightly about user submitted inputs. Sure, I don't want to get hacked to I try
sanitizing them. If I'm the server's owner and control the code, for most
things mathematical or deterministically-resolvable, I can make the rules and
adjust the code. I can be in control of deterministic outputs easily by
invoking authoritative power: I can ban bad actors or even make things right
again.

In a peer to peer network where everyone has the same power and authority, I
can't do that (alone). Combating bad behavior or even just controlling certain
outcomes can become mechanically challenging.

I've said in my last post, titled "[Community
Crawler](https://rugpullindex.com/blog/2021-12-19/community-crawler)", that I
wanted to source data or information via bounties. I said that I want to pay
bounty hunters for submitting data. I've been largely clueless how such things
could be achieved in a p2p network and when that realization hit me, I started
searching for information online. My idea, that I'm now also documenting below
was to survey existing solutions.

## Economic Data Validation Projects

### Chainlink V1 Price Oracles

Chainlink has their own token and to incentivize users to upload price
information into smart contracts, it employs a
"[stupid](https://ercwl.medium.com/whats-wrong-with-the-chainlink-2-0-whitepaper-for-simpletons-d50f27049464)"
implicit staking strategy. "Stupid" because Eric Wall claims that implicit
staking isn't cryptoeconomic. "Implicit" because truly Chainlink doesn't ask
for any sort of staking from price feed providers.

See, their idea is that they want to source the price of a ticker e.g. USD/ETH
frequently. In their topology, an *oracle* is a network node aggregating
price feed from providers. 

To get started, oracles announce bids for tickers. Incentivized price feed
providers then start sending data to the oracle. In a second step, the oracle
then aggregates the various prices by finding the most plausible value from the set.

Chainlink's whitepaper defines multiple approaches and they all sounds somewhat
like calculating a median - but I've see the term "quickselect" (selecting the
middle value) being used to. Interesting.

The overall idea is slightly more complicated than I outlined above and they've
also patched a bunch of stuff with their V2 whitepaper. But the essence of
their protocol is finding an aggregate out of a set of incentivzed price feed
provider submission. Their stake is "implicit" because only future revenue of a
price feed provider is at stake, because in the case of wrongdoing, they'll get
banned from submitting.

### Erasure Bay

[Erasurebay](https://erasurebay.org/) is probably most akin to Ocean Protocol
as it essentially is based on trading media blob data and centered around a
high-level end-user. It's the reverse process that OP has implemented and so it
allows a user to request data with tokens rather than offer it.

The protocol has some nice monetary incentives built in too and really, you
could ask for any type of information on Erasure Bay. Solutions for your
homework, a zero-day for Windows or the latest USD/BTC price.

What's great about it, is that the bounty hunter is equally bound to a bounty's
positive outcome as is its original proposer. It's because if the proposer isn't
satisfied with the submissions, they're free to partially destroy a submitter's
stake for punishment.

So don't submit shit to Erasure Bay as you might regret it.

### Numerai (Signals)

[Numerai](https://numer.ai/) is third on our list and also has an interesting
staking concept for their machine learning competition but also their platform
for sourcing original signals (called "[Numerai
Signals](https://signals.numer.ai/)").

In both cases, their validation algorithm isn't entirely clear (it's closed
source) but somehow weights submissions based on their attached staking value.
In their network, submitting a data model to the challenge and attaching $1.000
worth of [Numeraire](https://coinmarketcap.com/de/currencies/numeraire/) is of
higher quality than a model being submitted along with, for example, $5 worth
of stake.

Without really knowing what's going on behind the scenes, I've been in love
with their cryptoeconomic model from the first time I read their whitepaper:
They force submitters to stake in Numeraire, simultaneously not only making
them more likely to submit quality given their active stake - but also by being
more careful as they've become part of a financial collective holding the
Numeraire token. If everyone just submitted crap, they'd still be bonded
on-chain and they'd be making a loss on their Numeraire.

From what I know,however, Numerai doesn't slash stakers for wrong-doing.
Instead, they use positive enforcement and so that means they're paying
overachievers in their native token.

### Bitcoin & Nakamoto Consensus

I originally planned to evaluate [Band Protocol](https://bandprotocol.com/) in
this step, but during writing I decided to also give Bitcoin a shot.

I think Bitcoin, as the other protocols, can be seen, too, as an oracle machine
if we consider left-padding a nounce with zeros to be a data sourcing task.

In Nakamoto Consensus, the bounty is finding a random number given a
commonly-agreed-upon difficulty. The difficulty informs the amount of
left-padded zeros in a binary representation of the random number included in a
new block.

However, in contrast to Chainlink and Erasurebay, Bitcoin doesn't have to deal
with the continuous uncertainty of submissions being truthfully. In fact, the
consensus assumption of a nounce being correct is validatable by any one single
node by navigating the block sequence with the fork choice rule: The valid
chain tip with the most work is always preferred, meaning, that if we'd
unequivocably be able to tell valid data submissions from invalid ones (as e.g.
Bitcoin by counting the number of left-padded zeros in the binary
representation of the nounce), repurposing Nakamoto Consensus could be an
option.

### Band Protocol

The last such protocol that I've taken a look at was [Band
Protocol](https://docs.bandchain.org/whitepaper/).
Their whitepaper was also cool, albeit I haven't managed to take it in fully.

They too outlined interesting ideas, one of them being called "[Decentralized
Validator
Sampling](https://docs.bandchain.org/whitepaper/decentralized-validator-sampling.html)."
It's to connect stake to the likelyhood of being selected for validating a data
source. The avid crypto whitepaper reader knows, this is how Bitcoin's
sortition (or any other PoW chain) works as well. Mining rigs and graphic cards
are essentially just lottery tickers for increasing the chance of being
selected writer of a block and receiving the coinbase reward.

The block reward itself is, herein, an incentive to leave the chain tidily for
posterity.  Because if the chain isn't left tidily, fork choices might get
invoked by the next honest lottery winner and a malicious block submitter's
block rewards "uncled" out of existence.

I haven't gone too deep into Band Protocol's whitepaper but that's been the
main idea was able to comprehend.

## Conclusion

OK, this post was a bit of a deep dive into some of the protocols that make use
of data sourcing and economic validation. Web3 is about self-certification and
rugpulld ought to become such a program too. Albeit, ideally without its own
blockchain data structure as I'd be happy if, to keep complexity down, we could
leverage existing chains but spin up our own peer to peer network.

I think writing about these protocol helped some of my synapses to pathfind
better for next time and I'm hoping to be more eloquent next time when we talk
about those things. For the time being, I hope you also enjoyed the article and
were able to learn something too.

If you want to be part of the discussion or contribute, please consider joining
our [Discord](https://discord.com/invite/hBQVJY9Me6).
