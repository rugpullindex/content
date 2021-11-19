title: Scaling Ethereum One Tx At A Time
oldTitle: ScalingEthereumOneTxAtATime
---

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

![](/instant-screencap.png)

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
