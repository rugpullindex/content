title: Quick Update
oldTitle: QuickUpdate
keywords: update, development, rollups
authors: Tim Daubenschütz
---

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
