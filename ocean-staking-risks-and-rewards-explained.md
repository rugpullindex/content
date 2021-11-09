# Ocean Staking Risks & Rewards Explained

## About Ocean Token Staking

If you’re reading this then you have likely done your research on Ocean
Protocol and are excited about the potential for tokenizing access to data
sets using the Ethereum blockchain.

Ocean staking plays a key role in the system design of Ocean Protocol and
Ocean stakers can be rewarded for their contributions. But, these rewards
don’t come without their risks. 

In Ocean Protocol, staking Ocean tokens means providing liquidity to a
liquidity pool.
 
## RISKS - Staking Ocean Tokens
### RISK - Rugpull

In general, data tokens with more concentrated ownership have a higher
rugpull risk. 

In Ocean markets, a rugpull is when the owner of a data set intentionally
devalues its data token in an attempt to acquire more OCEAN.

This can be achieved by minting a lot more data tokens and decreasing the data
token’s value in OCEAN terms, or selling the many data tokens they own in
return for acquiring more OCEAN. 

In both scenarios, the value of the data token drops significantly (in some
cases to $0) and the ‘issuer’ of the data token leaves with more OCEAN than
they started with. If you are staking on a data set when this happens, the
value of your stake will decrease.

To help you manage this risk, you can check how widely distributed the
ownership of a data token is on rugpullindex.com. This data is collected
directly from the Ethereum blockchain.

### RISK - Staking/Unstaking (Swap Fee)

When you begin staking OCEAN on a dataset you will be charged a ‘swap fee’.
This swap fee is set by the data token’s publisher.

The swap fee that’s taken is then distributed to the staking pool
proportionally to the ownership of the stakers within that pool. For example,
if you have a 10% stake in a pool, you will receive 10% of the swap fee. 

Likewise, when you exit a liquidity pool you will be charged a swap fee again. 

It’s important to pay attention to the swap fees when you are considering
which data set to stake your OCEAN on. These swap fees will be made available
on rugpullindex.com soon.

*You may be wondering why these swap fees exist.*

These swap fees are designed to incentivise stakers to discover and begin
staking on good data sets early. If you are one of the stakers who begins
staking on a data set early and it later becomes popular, you will receive
more rewards than those who join later. 

Swap fees on exit are also designed to discourage people from manipulating the
prices of data tokens by moving in and out of data tokens quickly. 

The overall intention of this is to encourage Ocean stakers to seek out and
stake their ocean tokens on high quality data sets, acting as a valuable
signal for the network to know which data sets are *potentially* more
valuable.

### RISK - Impermanent Loss

When you stake Ocean tokens you are providing liquidity to a pool of data
tokens and Ocean tokens. This pool is made up of 50% data tokens and 50% Ocean
tokens and automatically determines the price of the data token through
[Automated Market
Makers.](https://coinmarketcap.com/alexandria/article/what-are-automated-market-makers)  

Impermanent loss can be described as the difference between what you would get
if you just hodl an asset vs acting as a liquidity provider for that asset. 

Because staking Ocean tokens is essentially acting as a liquidity provider for
that data token, the same impermanent loss risks that you would get on other
platforms exist for Ocean data tokens too. 

If you stake 100 Ocean tokens in a data set and someone else were to remove
200 Ocean tokens from the same data set, the total number of Ocean tokens
would now have gone down (e.g. your 100 - someone else’s 200 = -100 overall). 

There are now less Ocean tokens in the liquidity pool than when you started.
Because of this, if you were to attempt to remove your staked OCEAN tokens
you will now have less Ocean tokens than when you started. 

*Let’s use the following example to explain.*

*You add 100 OCEAN to a Data token liquidity pool which had 900 OCEAN already.*

*Total Pool = 1,000 OCEAN. You now have 10% of the liquidity pool (100 OCEAN).*

*Someone else removes 200 OCEAN.*

*Total Pool = 800 OCEAN. You now have 10% of 800 OCEAN (80 OCEAN).*

*This is an impermanent loss of -20 OCEAN.*

It’s an impermanent loss because someone could come along and stake another
200 OCEAN bringing the total back up to where you started, or they could stake
a further 500 OCEAN taking the total pool up to 1,500 OCEAN. If this happens,
you would now have 10% of 1,500 OCEAN = 150 OCEAN.

Unfortunately it does get a little more complicated. The price of OCEAN
relative to your currency of choice (e.g. EURO) will also be changing. So
calculating the impermanent loss in the currency of your choice will also have
an impact. 

## REWARDS - Staking Ocean Tokens
### REWARD - Data Purchasing (Swap Fees) 

If a data purchaser buys a data token, this generates a swap fee which is
distributed proportionally to the Ocean stakers within that pool. 

As a staker you want to find high quality data sets with a higher likelihood
of being sold because that means more swap fees being distributed among your
liquidity pool. 

When a data set is purchased the buyer spends 1 data token in exchange for
access to that data set.

No additional reward is given to stakers when the data token is 'consumed'.
For example, a data consumer may purchase a data token (generating a swap fee
for the pool) and not consume it for another 3 weeks. When this happens,
stakers receive no additional rewards.

### REWARD - Staking/Unstaking Activities (Swap Fees)

As we saw in the RISKS section above, a Swap Fee can be a risk when
joining/leaving a liquidity pool. 

However, when you are already staking in a liquidity pool you are a benefactor
of these rewards.

Swap fees are distributed to the liquidity providers (stakers) within a pool
relative to their stake within that pool. For example, if your stake
represents 10% of a pool then you will receive 10% of the staking rewards. 

So depending on whether you are receiving a portion of the swap fees, or you
are being charged a swap fee, it can be thought of as being both a risk and a
reward. 

### REWARD - Data Farming

[Data
farming](https://blog.oceanprotocol.com/announcing-ocean-data-farming-26c036d12f20)
is a new feature that will be coming to Ocean Protocol soon. 

It’s designed to encourage users to publish high quality datasets on Ocean
Protocol. 

What we know about data farming so far, is that it will reward Ocean stakers
with Ocean tokens and favour those with a higher consume volume (purchasing
the data sets they are staking on).

**For more,** see [Ocean Staking
FAQ.](/ocean-staking-faq-everything-you-should-know-about-staking-your-ocean-tokens)
