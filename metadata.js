// @format
const { statSync } = require("fs");
const path = require("path");

module.exports = {
  sites: {
    _default: {
      title: "rugpullindex.com",
      description: "rugpullindex.com ranks the best data sets sold on Ethereum."
    },
    "/": {
      title: "Best Data Sets on Ethereum",
      description:
        "A list of data sets sold on Ethereum ranked by their popularity and decentralization.",
      sitemap: {
        lastMod: true,
        changeFreq: "hourly"
      }
    },
    "/changelog.txt": {
      sitemap: {
        lastMod: "never"
      }
    },
    "/changelog": {
      title: "Changelog",
      sitemap: {
        lastMod: statSync(path.resolve(__dirname, "changelog.md")).mtime,
        changeFreq: "daily"
      }
    },
    "/about": {
      title: "About Us",
      sitemap: {
        lastMod: statSync(path.resolve(__dirname, "about.md")).mtime,
        changeFreq: "daily"
      }
    },
    "/blog": {
      sitemap: {
        lastMod: "never"
      }
    },
    "/docs": {
      title: "API",
      sitemap: {
        lastMod: statSync(path.resolve(__dirname, "docs.md")).mtime,
        changeFreq: "daily"
      }
    },
    "/faq": {
      title: "FAQ",
      sitemap: {
        lastMod: statSync(path.resolve(__dirname, "faq.md")).mtime,
        changeFreq: "daily"
      }
    },
    "/specification": {
      title: "Specification - How is RPI ranking its data sets",
      katex: true,
      sitemap: {
        lastMod: statSync(path.resolve(__dirname, "specification.md")).mtime,
        changeFreq: "daily"
      }
    },
    "/ocean-staking-risks-and-rewards-explained": {
      title: "Ocean Staking Risks & Rewards Explained",
      katex: false,
      sitemap: {
        lastMod: statSync(
          path.resolve(
            __dirname,
            "ocean-staking-risks-and-rewards-explained.md"
          )
        ).mtime,
        changeFreq: "daily"
      }
    },
    "/ocean-staking-faq-everything-you-should-know-about-staking-your-ocean-tokens": {
      title:
        "Ocean Staking FAQ - Everything you should know about staking your OCEAN tokens",
      katex: false,
      sitemap: {
        lastMod: statSync(
          path.resolve(
            __dirname,
            "ocean-staking-faq-everything-you-should-know-about-staking-your-ocean-tokens.md"
          )
        ).mtime,
        changeFreq: "daily"
      }
    }
  }
};
