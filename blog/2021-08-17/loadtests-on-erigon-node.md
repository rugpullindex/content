title: Loadtests on Erigon Node
oldTitle: LoadtestsonErigonNode
keywords: ethereum, full node, benchmark
authors: Tim Daubenschütz
---

Since we're dogfooding our latest addition to the RPI API, namely its [shared
Erigon node](/docs#AccessToOurEthereumErigonNode), we found a performance
bottleneck when rapidly requesting transactions. A multi-day optimization effort
identified the following issues:

- The file descriptors of a client's operating system need to be tuned towards
  ideal performance (more := better).
- The API authentication mechanism using Bearer tokens ended up slowing  down
  all of RPI's infrastructure as any request ended up being manually
  authenticated. We've added caching on August 5, 2021.
- For benchmarking Erigon or other Ethereum nodes, it makes sense
  differentiating between "hot" and "cold" data. "Hot data" is in blocks that
  have just been requested or created. "Cold data" is in blocks that are hardly
  ever in the server's memory.
- RPI's internal infrastructure communicates through Cloudflare, which ends up
  being the currently last remaining bottleneck. We're investigating solutions.

Below a benchmark's summary using Apache `ab`:

```bash
Server Software:        nginx/1.18.0                                                                                         [11/2806]
Server Hostname:        node.rugpullindex.com
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES256-GCM-SHA384,2048,256
Server Temp Key:        X25519 253 bits
TLS Server Name:        node.rugpullindex.com

Document Path:          /
Document Length:        103 bytes

Concurrency Level:      100
Time taken for tests:   8.536 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      2620000 bytes
Total body sent:        3500000
HTML transferred:       1030000 bytes
Requests per second:    1171.46 [#/sec] (mean)
Time per request:       85.364 [ms] (mean)
Time per request:       0.854 [ms] (mean, across all concurrent requests)
Transfer rate:          299.73 [Kbytes/sec] received
                        400.40 kb/s sent
                        700.13 kb/s total
```

- **Note:** We request `eth_blockNumber` ("hot data").

### Separating Crawler Code

- We're in the process of separating all crawler related code in the RPI
  backend into a standalone package. The process is on-going but should allow a
  better performing acquisition of data. Please stay tuned.

### Other

- Add [/security.txt](/security.txt)
