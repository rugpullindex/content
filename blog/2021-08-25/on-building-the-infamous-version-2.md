title: On Building The Infamous "Version 2"
oldTitle: OnBuildingTheInfamousVersion2
keywords: version 2, v2, todo
authors: Tim Daubenschütz
---

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
