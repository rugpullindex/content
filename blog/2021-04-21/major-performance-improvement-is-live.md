title: Major Performance Improvement is Live
oldTitle: MajorPerformanceImprovementisLive
---

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
