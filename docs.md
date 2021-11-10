
# API

1. [Introduction](#Introduction)
2. [Basics](#Basics)
2. [Authorization](#Authorization)
3. [Get rank by DID](#GETrankbyDID)
4. [GET List of Top 25 Data Sets](#GETListofTop25DataSets)
5. [GET Historical Price Data by DID](#GETHistoricalPriceDatabyDID)
6. [Access to a shared Ethereum (Erigon) node](#AccessToOurEthereumErigonNode)

## Introduction

rugpullindex provides daily insights into data markets like Ocean Protocol and
Big Data Protocol. In addition to the stats on our website, this data and more
is also available for developers through our RESTful API.

**Please note** that rugpullindex's API is a work in progress for the time
being. You can reach me (tim at daubenschuetz dot de) unbureauratically by
sending me an email in case the API doesn't work or when you need better
functionality.

## Basics

Here's a few data points about the API:

|name|value|
|---|---|
|root|`https://rugpullindex.com/api/v1/`|
|structure|RESTful|

## Authorization

Most endpoints on this page require authorization in form of a HTTP
`Authorization` header. For now, we're giving out `API_KEY`s (e.g. "Qab0cE") to
anyone that manually contacts us for free. To use your key with methods of this
API that require authorization add the following HTTP header:

```http
Authorization: Bearer your-key

OR e.g. with a fake key:

Authorization: Bearer Qab0cE
```

## GET rank by DID

- Endpoint: `/indices/:indexid/ranks/:did`
  - NOTE: There's only a single `:indexid` called `OP-COMPOSITE-V1` for now.
- Authorization required: no
- Rate limiting: no

**Description:** Given an index's identifier `indexid` and a `did`, this
endpoint returns an asset's current rank on rugpullindex.com.

**Request:**
```bash
$ curl https://rugpullindex.com/api/v1/indices/OP-COMPOSITE-V1/ranks/did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38
```

**Response:**
```
{"rank":1}
```

## GET List of Top 25 Data Sets

- Endpoint: `/indices/:indexid/assets`
  - NOTE: There's only a single `:indexid` called `OP-COMPOSITE-V1` for now.
- Authorization required: yes, **but please reach out if you want to use it.**
- Rate limiting: no

**Description:** Given an index's identifier `indexid`, this endpoints returns
a sorted list of today's top 25 data set assets.

**Request:**
```bash
$ curl \
  -H "Authorization: Bearer <token>" \
  https://rugpullindex.com/api/v1/indices/OP-COMPOSITE-V1/assets
```

**Response:**
```
[
  {
    "rank":1,
    "pastDayRank":1,
    "symbol":"QUICRA-0",
    "score":7.43268251888556,
    "gini":0.92779637799532,
    "lastCrawl":"2021-05-26T00:01:03.791Z",
    "price":559.2332015220464,
    "address":"0xAAB9EaBa1AA2653c1Dda9846334700b9F5e14E44",
    "did":"did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38",
    "liquidity":585117.4974810262,
    "banned":0,
    "currency":"ocean-protocol"
  },
  {"...", "and so on"}
]
```

## GET Historical Price Data by DID

- Endpoint: `/prices?did=&start=&end=&currency=&resolution=`
- Authorization required: yes, **but please reach out if you want to use it.**
- Rate limiting: no

**Description:** Given an asset's DID, this endpoint returns a list of prices
for a date range (between `start` and `end`). rugpullindex has recorded 

- the daily prices of all OCEAN assets since January 1, 2021;
- the daily prices of all BDP assets since May 5, 2021
- the hourly prices of all OCEAN & BDP assets since November 8, 2021.

We fetch price data hourly. Prices can be displayed in EUR, USD or the
protocol's base currency `ocean-protocol` and `big-data-protocol`.

**Notes:**

- `currency` must be either `usd`, `eur`, `ocean-protocol` or
  `big-data-protocol`.
- `start` and `end` MUST be ISO8601-compliant dates
- `resolution` must be either `1h` or `1d`. It can also be omitted, but the
  default value is then `1d`.

**Request:**
```bash
curl -H "Authorization: Bearer <token>" \
https://rugpullindex.com/api/v1/prices?did=did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38&start=2021-01-01T00:00:01.000Z&end=2021-01-03T00:00:00.000Z
```

**Response:**
```
{
  "prices":[
    118.55482966673834,
    113.07937595324407,
    133.5169688664073
  ],
  "dates":[
    "2021-01-01T23:01:03.419Z",
    "2021-01-02T23:01:03.438Z",
    "2021-01-03T23:01:42.826Z"
  ]
}
```

## Access To Our Ethereum Erigon Node

If you are in possession of an `API_KEY`, you're also eligible to query our
Ethereum [Erigon](https://github.com/ledgerwatch/erigon) full node RPC
endpoints. The node is reverse-proxied, hence adding a HTTP `Authorization:
Bearer key` header with your `API_KEY` is mandatory.  To find out which
json-rpc endpoints you can query and how, please refer to the reference
documentation of geth, erigon or the [Ethereum
Wiki](https://eth.wiki/json-rpc/API).

|name|value|
|---|---|
|url|`https://node.rugpullindex.com`|
|authorization required?|yes|
|rate limited?|no|
|geth apis exposed|eth,web3,net|

Finally, an example using `curl`:

```bash
curl -X POST \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  https://node.rugpullindex.com/
```
