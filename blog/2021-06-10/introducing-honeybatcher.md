title: Introducing Honeybatcher
oldTitle: IntroducingHoneybatcher
keywords: ethereum, rollup, gas fees, pessimistic rollup, EVM
authors: Tim Daubenschütz
---

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
