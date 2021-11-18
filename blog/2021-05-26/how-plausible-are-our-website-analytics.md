title: How "Plausible" are Our Website Analytics
---

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
