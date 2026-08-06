# Awesome FinTech Algorithms [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated, structured index of every algorithm in **[The Fintech Builder](https://thefintechbuilder.com)** —
> the open knowledge library of production-grade financial algorithms, organized by
> **domain → family → algorithm**, from market-data engineering to fair-value measurement.

<p>
  <img alt="Domains" src="https://img.shields.io/badge/domains-49-2b6cb0">
  <img alt="Families" src="https://img.shields.io/badge/families-248-2b6cb0">
  <img alt="Algorithms" src="https://img.shields.io/badge/algorithms-1399-2b6cb0">
  <img alt="Published" src="https://img.shields.io/badge/published%20articles-103-brightgreen">
  <img alt="On npm" src="https://img.shields.io/badge/on%20npm-324-cb3837">
</p>

🌐 **Website:** [thefintechbuilder.com](https://thefintechbuilder.com)  ·  📚 **Library:** [https://thefintechbuilder.com/library/](https://thefintechbuilder.com/library/)

📥 **Install the whole library:** [`fintech-algorithms`](https://www.npmjs.com/package/fintech-algorithms) (v0.12.0, **324** algorithms) · [source](https://github.com/IslamBaraka90/Fintech-Algorithms-Library)

```bash
npm install fintech-algorithms
```

**Legend**

| mark | meaning |
|---|---|
| 🟢 | article published — the title links to it |
| ⚪ | planned — no article yet |
| 📥 | **implemented in the [`fintech-algorithms`](https://www.npmjs.com/package/fintech-algorithms) npm package** — installable today; hover the mark for its import subpath |
| 📦 | has its own dedicated open-source repo (Python + TypeScript, deeper implementation) |

Three independent signals, so a row tells you exactly what exists: 🟢 is the
*explanation*, 📥 is the *quickest way to run it*, and 📦 is the *deep dive*. A
planned topic can still be on npm, and a topic on npm may not have its own repo.

---

## Why I built this

When I first stepped into fintech, I kept hitting the same wall: the field is *enormous*, and its
algorithms are scattered everywhere — a formula in one paper, a snippet in another repo, half an
explanation buried in a forum thread. I could never find a single place that laid out **all** of it,
with a clear path from *"what is this?"* to *"here's the working code."* No map. No learning path
through the whole rich, sprawling landscape of financial algorithms.

So I decided to build that place. First for **myself** — to actually learn this field by implementing
every piece of it end to end, not just reading about it — and then for **every other developer**
walking the same road. The Fintech Builder is that continuous learning journey: one algorithm at a
time, explained, visualized, and shipped as real, runnable code you can install and build on.

This index is the map. It keeps growing, because that's the whole point — applying everything, for
myself and for anyone learning alongside me. **The journey never stops.** 🚀

— *Islam, The Fintech Builder*

---

## Contents

- **Market Data, Analysis, and Trading**
  - [D01 — Market Data Engineering](#d01--market-data-engineering)
  - [D02 — Corporate Actions and Security Master Data](#d02--corporate-actions-and-security-master-data)
  - [D03 — Index and Benchmark Engineering](#d03--index-and-benchmark-engineering)
  - [D04 — Market Breadth and Internals](#d04--market-breadth-and-internals)
  - [D05 — Correlation, Dependence, and Networks](#d05--correlation-dependence-and-networks)
  - [D06 — Price Action and Candlesticks](#d06--price-action-and-candlesticks)
  - [D07 — Technical Indicators](#d07--technical-indicators)
  - [D08 — Geometric Chart Patterns](#d08--geometric-chart-patterns)
  - [D09 — Statistical Time Series](#d09--statistical-time-series)
  - [D10 — Volatility and Covariance](#d10--volatility-and-covariance)
  - [D11 — Market Microstructure](#d11--market-microstructure)
  - [D12 — Matching Engines and Venue Logic](#d12--matching-engines-and-venue-logic)
  - [D13 — Execution and Transaction Cost Analysis](#d13--execution-and-transaction-cost-analysis)
- **Investment Management and Company Analysis**
  - [D14 — Portfolio Construction](#d14--portfolio-construction)
  - [D15 — Investment Risk](#d15--investment-risk)
  - [D16 — Performance and Attribution](#d16--performance-and-attribution)
  - [D17 — Factor Investing and Asset Pricing](#d17--factor-investing-and-asset-pricing)
  - [D18 — Fundamental Analysis and Valuation](#d18--fundamental-analysis-and-valuation)
  - [D19 — Financial Statement Intelligence](#d19--financial-statement-intelligence)
- **Instruments, Credit, and Specialized Finance**
  - [D20 — Fixed Income and Interest Rates](#d20--fixed-income-and-interest-rates)
  - [D21 — Credit Risk and Default](#d21--credit-risk-and-default)
  - [D22 — Derivatives and Options](#d22--derivatives-and-options)
  - [D23 — Commodities and Futures](#d23--commodities-and-futures)
  - [D24 — Foreign Exchange](#d24--foreign-exchange)
  - [D25 — Digital Assets and On-Chain Finance](#d25--digital-assets-and-on-chain-finance)
  - [D26 — Islamic Finance and Sharia Screening](#d26--islamic-finance-and-sharia-screening)
- **FinTech Products and Financial Operations**
  - [D27 — Lending and Underwriting](#d27--lending-and-underwriting)
  - [D28 — Payments and Money Movement](#d28--payments-and-money-movement)
  - [D29 — Fraud, AML, and Financial Crime](#d29--fraud-aml-and-financial-crime)
  - [D30 — Banking Ledger and Reconciliation](#d30--banking-ledger-and-reconciliation)
  - [D31 — Treasury, Liquidity, and Asset-Liability Management](#d31--treasury-liquidity-and-asset-liability-management)
  - [D32 — Insurance and Actuarial Science](#d32--insurance-and-actuarial-science)
  - [D33 — Wealth and Robo-Advice](#d33--wealth-and-robo-advice)
  - [D34 — Tax-Lot and Accounting Optimization](#d34--tax-lot-and-accounting-optimization)
  - [D35 — Financial NLP and Document Intelligence](#d35--financial-nlp-and-document-intelligence)
  - [D36 — Alternative Data Analytics](#d36--alternative-data-analytics)
- **Decision Science, Governance, and Infrastructure**
  - [D37 — Forecasting and Machine Learning](#d37--forecasting-and-machine-learning)
  - [D38 — Causal Inference and Experimentation](#d38--causal-inference-and-experimentation)
  - [D39 — Optimization and Simulation](#d39--optimization-and-simulation)
  - [D40 — Model Validation and Backtesting](#d40--model-validation-and-backtesting)
  - [D41 — Explainability, Fairness, and Governance](#d41--explainability-fairness-and-governance)
  - [D42 — Digital Identity and Trust](#d42--digital-identity-and-trust)
  - [D43 — Clearing, Settlement, and Custody](#d43--clearing-settlement-and-custody)
  - [D44 — Product Pricing and Unit Economics](#d44--product-pricing-and-unit-economics)
  - [D45 — Regulatory and Compliance Automation](#d45--regulatory-and-compliance-automation)
- **Earnings, Forecasting, and Fair Value**
  - [D46 — Earnings and Per-Share Analytics](#d46--earnings-and-per-share-analytics)
  - [D47 — Corporate Forecasting and Financial Model Engineering](#d47--corporate-forecasting-and-financial-model-engineering)
  - [D48 — Fair Value Measurement and Valuation Control](#d48--fair-value-measurement-and-valuation-control)
- **Financial Cybersecurity Engineering**
  - [D49 — Financial Cybersecurity Engineering](#d49--financial-cybersecurity-engineering)

---

# Market Data, Analysis, and Trading

## D01 — Market Data Engineering

_Transform raw trades, quotes, and reference feeds into trustworthy, analysis-ready market data._

**Domain page:** [thefintechbuilder.com/domains/market-data-engineering/](https://thefintechbuilder.com/domains/market-data-engineering/)  ·  **5** families  ·  **23/31** published  ·  **31/31** on npm

### Bar Construction  `D01-F01`

- 🟢 [Time Bars](https://thefintechbuilder.com/market-data-engineering/bar-construction/time-bars/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/bar-construction/time-bars") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Time-Bars-Bar-Construction-algorithm)  `D01-F01-A01`
- 🟢 [Tick Bars](https://thefintechbuilder.com/market-data-engineering/bar-construction/tick-bars/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/bar-construction/tick-bars") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Tick-Bars-Bar-Construction-algorithm)  `D01-F01-A02`
- 🟢 [Volume Bars](https://thefintechbuilder.com/market-data-engineering/bar-construction/volume-bars/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/bar-construction/volume-bars") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Volume-Bars-Bar-Construction-algorithm)  `D01-F01-A03`
- 🟢 [Dollar Bars](https://thefintechbuilder.com/market-data-engineering/bar-construction/dollar-bars/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/bar-construction/dollar-bars") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Dollar-Bars-Bar-Construction-algorithm)  `D01-F01-A04`
- 🟢 [Tick-Imbalance Bars](https://thefintechbuilder.com/market-data-engineering/bar-construction/tick-imbalance-bars/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/bar-construction/tick-imbalance-bars") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Tick-Imbalance-Bars-Bar-Construction-algorithm)  `D01-F01-A05`
- 🟢 [Volume-Imbalance Bars](https://thefintechbuilder.com/market-data-engineering/bar-construction/volume-imbalance-bars/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/bar-construction/volume-imbalance-bars") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Volume-Imbalance-Bars-Bar-Construction-algorithm)  `D01-F01-A06`
- 🟢 [Tick-Run Bars](https://thefintechbuilder.com/market-data-engineering/bar-construction/tick-run-bars/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/bar-construction/tick-run-bars") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Tick-Run-Bars-Bar-Construction-algorithm)  `D01-F01-A07`

### Cleaning and Validation  `D01-F02`

- 🟢 [OHLC Consistency Validator](https://thefintechbuilder.com/market-data-engineering/cleaning-and-validation/ohlc-consistency-validator/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/cleaning-and-validation/ohlc-consistency-validator") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-OHLC-Consistency-Validator-Data-Quality-algorithm)  `D01-F02-A01`
- 🟢 [Hampel Bad-Tick Filter](https://thefintechbuilder.com/market-data-engineering/cleaning-and-validation/hampel-bad-tick-filter/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/cleaning-and-validation/hampel-bad-tick-filter") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Hampel-Bad-Tick-Filter-Data-Quality-algorithm)  `D01-F02-A02`
- 🟢 [Median Absolute Deviation Outlier Filter](https://thefintechbuilder.com/market-data-engineering/cleaning-and-validation/median-absolute-deviation-outlier-filter/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/cleaning-and-validation/median-absolute-deviation-outlier-filter") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-MAD-Median-Absolute-Deviation-Outlier-Filter-algorithm)  `D01-F02-A03`
- 🟢 [Stale-Quote Detector](https://thefintechbuilder.com/market-data-engineering/cleaning-and-validation/stale-quote-detector/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/cleaning-and-validation/stale-quote-detector") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Stale-Quote-Detector-Data-Quality-algorithm)  `D01-F02-A04`
- 🟢 [Duplicate-Trade Resolver](https://thefintechbuilder.com/market-data-engineering/cleaning-and-validation/duplicate-trade-resolver/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/cleaning-and-validation/duplicate-trade-resolver") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Duplicate-Trade-Resolver-Data-Quality-algorithm)  `D01-F02-A05`
- 🟢 [Crossed/Locked Market Detector](https://thefintechbuilder.com/market-data-engineering/cleaning-and-validation/crossed-locked-market-detector/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/cleaning-and-validation/crossed-locked-market-detector") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Crossed-Locked-Market-Detector-Data-Quality-algorithm)  `D01-F02-A06`

### Time Synchronization  `D01-F03`

- 🟢 [Previous-Tick Interpolation](https://thefintechbuilder.com/market-data-engineering/time-synchronization/previous-tick-interpolation/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/time-synchronization/previous-tick-interpolation") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Previous-Tick-Interpolation-Time-Synchronization-algorithm)  `D01-F03-A01`
- 🟢 [Linear Quote Interpolation](https://thefintechbuilder.com/market-data-engineering/time-synchronization/linear-quote-interpolation/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/time-synchronization/linear-quote-interpolation") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Linear-Quote-Interpolation-Time-Synchronization-algorithm)  `D01-F03-A02`
- 🟢 [Refresh-Time Sampling](https://thefintechbuilder.com/market-data-engineering/time-synchronization/refresh-time-sampling/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/time-synchronization/refresh-time-sampling") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Refresh-Time-Sampling-Time-Synchronization-algorithm)  `D01-F03-A03`
- 🟢 [Exchange-Calendar Alignment](https://thefintechbuilder.com/market-data-engineering/time-synchronization/exchange-calendar-alignment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/time-synchronization/exchange-calendar-alignment") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Exchange-Calendar-Alignment-Time-Synchronization-algorithm)  `D01-F03-A04`
- 🟢 [Asynchronous Return Alignment](https://thefintechbuilder.com/market-data-engineering/time-synchronization/asynchronous-return-alignment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/time-synchronization/asynchronous-return-alignment") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Asynchronous-Return-Alignment-Time-Synchronization-algorithm)  `D01-F03-A05`

### Data Quality  `D01-F04`

- 🟢 [Missing-Bar Gap Classifier](https://thefintechbuilder.com/market-data-engineering/data-quality/missing-bar-gap-classifier/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/data-quality/missing-bar-gap-classifier") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Missing-Bar-Gap-Classifier-algorithm)  `D01-F04-A01`
- 🟢 [Feed-Latency Monitor](https://thefintechbuilder.com/market-data-engineering/data-quality/feed-latency-monitor/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/data-quality/feed-latency-monitor") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Feed-Latency-Monitor-Data-Quality-algorithm)  `D01-F04-A02`
- 🟢 [Price-Source Consensus Check](https://thefintechbuilder.com/market-data-engineering/data-quality/price-source-consensus-check/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/data-quality/price-source-consensus-check") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Price-Source-Consensus-Check-Data-Quality-algorithm)  `D01-F04-A03`
- 🟢 [Schema-Drift Detector](https://thefintechbuilder.com/market-data-engineering/data-quality/schema-drift-detector/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/data-quality/schema-drift-detector") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Schema-Drift-Detector-Data-Quality-algorithm)  `D01-F04-A04`
- 🟢 [Point-in-Time Availability Guard](https://thefintechbuilder.com/market-data-engineering/data-quality/point-in-time-availability-guard/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/data-quality/point-in-time-availability-guard") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Point-In-Time-Availability-Guard-Data-Quality-algorithm)  `D01-F04-A05`
- ⚪ Provider Adjustment-Basis Drift Detector — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/data-quality/provider-adjustment-basis-drift-detector")  `D01-F04-A06`

### Order-Book Feed Engineering  `D01-F05`

- ⚪ Trade-and-Quote Event Normalization — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/order-book-feed-engineering/trade-and-quote-event-normalization")  `D01-F05-A01`
- ⚪ Level-2 Snapshot-and-Delta Reconstruction — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/order-book-feed-engineering/level-2-snapshot-and-delta-reconstruction")  `D01-F05-A02`
- ⚪ Level-3 Order-by-Order Reconstruction — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/order-book-feed-engineering/level-3-order-by-order-reconstruction")  `D01-F05-A03`
- ⚪ Sequence-Gap Detection and Recovery — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/order-book-feed-engineering/sequence-gap-detection-and-recovery")  `D01-F05-A04`
- ⚪ Price-Level Quantity Aggregation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/order-book-feed-engineering/price-level-quantity-aggregation")  `D01-F05-A05`
- ⚪ Snapshot/Incremental-Feed Reconciliation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/order-book-feed-engineering/snapshot-incremental-feed-reconciliation")  `D01-F05-A06`
- ⚪ Multi-Venue Best-Quote and Book Consolidation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-data-engineering/order-book-feed-engineering/multi-venue-best-quote-and-book-consolidation")  `D01-F05-A07`

---

## D02 — Corporate Actions and Security Master Data

_Preserve instrument identity and create economically comparable histories across corporate events._

**Domain page:** [thefintechbuilder.com/domains/corporate-actions-and-security-master-data/](https://thefintechbuilder.com/domains/corporate-actions-and-security-master-data/)  ·  **4** families  ·  **19/20** published  ·  **20/20** on npm

### Adjustment Factors  `D02-F01`

- 🟢 [Backward Split Adjustment](https://thefintechbuilder.com/corporate-actions-and-security-master-data/adjustment-factors/backward-split-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/adjustment-factors/backward-split-adjustment") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Backward-Split-Adjustment-Corporate-Actions-algorithm)  `D02-F01-A01`
- 🟢 [Forward Split Adjustment](https://thefintechbuilder.com/corporate-actions-and-security-master-data/adjustment-factors/forward-split-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/adjustment-factors/forward-split-adjustment") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Forward-Split-Adjustment-Corporate-Actions-algorithm)  `D02-F01-A02`
- 🟢 [Cash-Dividend Total-Return Adjustment](https://thefintechbuilder.com/corporate-actions-and-security-master-data/adjustment-factors/cash-dividend-total-return-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/adjustment-factors/cash-dividend-total-return-adjustment") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Cash-Dividend-Total-Return-Adjustment-Corporate-Actions-algorithm)  `D02-F01-A03`
- 🟢 [CRSP Cumulative Price Adjustment](https://thefintechbuilder.com/corporate-actions-and-security-master-data/adjustment-factors/crsp-cumulative-price-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/adjustment-factors/crsp-cumulative-price-adjustment") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-CRSP-Cumulative-Price-Adjustment-Corporate-Actions-algorithm)  `D02-F01-A04`
- 🟢 [CRSP Cumulative Share/Volume Adjustment](https://thefintechbuilder.com/corporate-actions-and-security-master-data/adjustment-factors/crsp-cumulative-share-volume-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/adjustment-factors/crsp-cumulative-share-volume-adjustment") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-CRSP-Cumulative-Share-Volume-Adjustment-Corporate-Actions-algorithm)  `D02-F01-A05`

### Complex Distributions  `D02-F02`

- 🟢 [Rights-Issue TERP Adjustment](https://thefintechbuilder.com/corporate-actions-and-security-master-data/complex-distributions/rights-issue-terp-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/complex-distributions/rights-issue-terp-adjustment") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Rights-Issue-TERP-Adjustment-Corporate-Actions-algorithm)  `D02-F02-A01`
- 🟢 [Spin-Off Price Adjustment](https://thefintechbuilder.com/corporate-actions-and-security-master-data/complex-distributions/spin-off-price-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/complex-distributions/spin-off-price-adjustment")  `D02-F02-A02`
- 🟢 [Stock-Dividend Adjustment](https://thefintechbuilder.com/corporate-actions-and-security-master-data/complex-distributions/stock-dividend-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/complex-distributions/stock-dividend-adjustment")  `D02-F02-A03`
- 🟢 [Special-Dividend Adjustment](https://thefintechbuilder.com/corporate-actions-and-security-master-data/complex-distributions/special-dividend-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/complex-distributions/special-dividend-adjustment")  `D02-F02-A04`
- 🟢 [Return-of-Capital Adjustment](https://thefintechbuilder.com/corporate-actions-and-security-master-data/complex-distributions/return-of-capital-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/complex-distributions/return-of-capital-adjustment")  `D02-F02-A05`

### Identity Continuity  `D02-F03`

- 🟢 [Permanent Security Identifier Mapping](https://thefintechbuilder.com/corporate-actions-and-security-master-data/identity-continuity/permanent-security-identifier-mapping/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/identity-continuity/permanent-security-identifier-mapping")  `D02-F03-A01`
- 🟢 [Ticker-Change Chain Resolution](https://thefintechbuilder.com/corporate-actions-and-security-master-data/identity-continuity/ticker-change-chain-resolution/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/identity-continuity/ticker-change-chain-resolution")  `D02-F03-A02`
- 🟢 [Share-Class Relationship Mapping](https://thefintechbuilder.com/corporate-actions-and-security-master-data/identity-continuity/share-class-relationship-mapping/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/identity-continuity/share-class-relationship-mapping")  `D02-F03-A03`
- 🟢 [Merger Predecessor/Successor Mapping](https://thefintechbuilder.com/corporate-actions-and-security-master-data/identity-continuity/merger-predecessor-successor-mapping/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/identity-continuity/merger-predecessor-successor-mapping")  `D02-F03-A04`
- 🟢 [Delisting Return Reconstruction](https://thefintechbuilder.com/corporate-actions-and-security-master-data/identity-continuity/delisting-return-reconstruction/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/identity-continuity/delisting-return-reconstruction")  `D02-F03-A05`

### Point-in-Time Universe  `D02-F04`

- 🟢 [Historical Constituent Reconstruction](https://thefintechbuilder.com/corporate-actions-and-security-master-data/point-in-time-universe/historical-constituent-reconstruction/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/point-in-time-universe/historical-constituent-reconstruction")  `D02-F04-A01`
- 🟢 [Survivorship-Bias Guard](https://thefintechbuilder.com/corporate-actions-and-security-master-data/point-in-time-universe/survivorship-bias-guard/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/point-in-time-universe/survivorship-bias-guard")  `D02-F04-A02`
- 🟢 [IPO Availability Timestamping](https://thefintechbuilder.com/corporate-actions-and-security-master-data/point-in-time-universe/ipo-availability-timestamping/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/point-in-time-universe/ipo-availability-timestamping")  `D02-F04-A03`
- 🟢 [Filing-Revision Versioning](https://thefintechbuilder.com/corporate-actions-and-security-master-data/point-in-time-universe/filing-revision-versioning/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/point-in-time-universe/filing-revision-versioning")  `D02-F04-A04`
- ⚪ Corporate-Action Status and Effective-Date Reconciliation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/corporate-actions-and-security-master-data/point-in-time-universe/corporate-action-status-and-effective-date-reconciliation")  `D02-F04-A05`

---

## D03 — Index and Benchmark Engineering

_Design, calculate, and maintain transparent benchmarks, from constituent selection to published index levels._

**Domain page:** [thefintechbuilder.com/domains/index-and-benchmark-engineering/](https://thefintechbuilder.com/domains/index-and-benchmark-engineering/)  ·  **6** families  ·  **40/40** published  ·  **40/40** on npm

### Index Initialization and Continuity  `D03-F01`

- 🟢 [Base-Date/Base-Value Initialization](https://thefintechbuilder.com/index-and-benchmark-engineering/index-initialization-and-continuity/base-date-base-value-initialization/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/index-initialization-and-continuity/base-date-base-value-initialization")  `D03-F01-A01`
- 🟢 [Index Divisor Initialization](https://thefintechbuilder.com/index-and-benchmark-engineering/index-initialization-and-continuity/index-divisor-initialization/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/index-initialization-and-continuity/index-divisor-initialization")  `D03-F01-A02`
- 🟢 [Divisor Continuity Adjustment](https://thefintechbuilder.com/index-and-benchmark-engineering/index-initialization-and-continuity/divisor-continuity-adjustment/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/index-initialization-and-continuity/divisor-continuity-adjustment")  `D03-F01-A03`
- 🟢 [Corporate-Action Divisor Bridge](https://thefintechbuilder.com/index-and-benchmark-engineering/index-initialization-and-continuity/corporate-action-divisor-bridge/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/index-initialization-and-continuity/corporate-action-divisor-bridge")  `D03-F01-A04`
- 🟢 [Intraday Index-Level Calculation](https://thefintechbuilder.com/index-and-benchmark-engineering/index-initialization-and-continuity/intraday-index-level-calculation/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/index-initialization-and-continuity/intraday-index-level-calculation")  `D03-F01-A05`

### Weighting and Capping  `D03-F02`

- 🟢 [Price-Weighted Index](https://thefintechbuilder.com/index-and-benchmark-engineering/weighting-and-capping/price-weighted-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/weighting-and-capping/price-weighted-index")  `D03-F02-A01`
- 🟢 [Total-Market-Cap Index](https://thefintechbuilder.com/index-and-benchmark-engineering/weighting-and-capping/total-market-cap-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/weighting-and-capping/total-market-cap-index")  `D03-F02-A02`
- 🟢 [Free-Float Market-Cap Index](https://thefintechbuilder.com/index-and-benchmark-engineering/weighting-and-capping/free-float-market-cap-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/weighting-and-capping/free-float-market-cap-index")  `D03-F02-A03`
- 🟢 [Capped Free-Float Market-Cap Index](https://thefintechbuilder.com/index-and-benchmark-engineering/weighting-and-capping/capped-free-float-market-cap-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/weighting-and-capping/capped-free-float-market-cap-index")  `D03-F02-A04`
- 🟢 [Modified Market-Cap Index](https://thefintechbuilder.com/index-and-benchmark-engineering/weighting-and-capping/modified-market-cap-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/weighting-and-capping/modified-market-cap-index")  `D03-F02-A05`
- 🟢 [Equal-Weight Index](https://thefintechbuilder.com/index-and-benchmark-engineering/weighting-and-capping/equal-weight-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/weighting-and-capping/equal-weight-index")  `D03-F02-A06`
- 🟢 [Iterative Cap Redistribution](https://thefintechbuilder.com/index-and-benchmark-engineering/weighting-and-capping/iterative-cap-redistribution/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/weighting-and-capping/iterative-cap-redistribution")  `D03-F02-A07`
- 🟢 [Group-Level Capping](https://thefintechbuilder.com/index-and-benchmark-engineering/weighting-and-capping/group-level-capping/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/weighting-and-capping/group-level-capping")  `D03-F02-A08`

### Alternative Weighting  `D03-F03`

- 🟢 [Fundamental-Weighted Index](https://thefintechbuilder.com/index-and-benchmark-engineering/alternative-weighting/fundamental-weighted-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/alternative-weighting/fundamental-weighted-index")  `D03-F03-A01`
- 🟢 [Dividend-Yield-Weighted Index](https://thefintechbuilder.com/index-and-benchmark-engineering/alternative-weighting/dividend-yield-weighted-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/alternative-weighting/dividend-yield-weighted-index")  `D03-F03-A02`
- 🟢 [Factor-Score-Weighted Index](https://thefintechbuilder.com/index-and-benchmark-engineering/alternative-weighting/factor-score-weighted-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/alternative-weighting/factor-score-weighted-index")  `D03-F03-A03`
- 🟢 [Minimum-Volatility Index](https://thefintechbuilder.com/index-and-benchmark-engineering/alternative-weighting/minimum-volatility-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/alternative-weighting/minimum-volatility-index")  `D03-F03-A04`
- 🟢 [Equal-Risk-Contribution Index](https://thefintechbuilder.com/index-and-benchmark-engineering/alternative-weighting/equal-risk-contribution-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/alternative-weighting/equal-risk-contribution-index")  `D03-F03-A05`
- 🟢 [Thematic-Tilt Index](https://thefintechbuilder.com/index-and-benchmark-engineering/alternative-weighting/thematic-tilt-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/alternative-weighting/thematic-tilt-index")  `D03-F03-A06`

### Return Variants  `D03-F04`

- 🟢 [Price-Return Index](https://thefintechbuilder.com/index-and-benchmark-engineering/return-variants/price-return-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/return-variants/price-return-index")  `D03-F04-A01`
- 🟢 [Gross Total-Return Index](https://thefintechbuilder.com/index-and-benchmark-engineering/return-variants/gross-total-return-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/return-variants/gross-total-return-index")  `D03-F04-A02`
- 🟢 [Net Total-Return Index](https://thefintechbuilder.com/index-and-benchmark-engineering/return-variants/net-total-return-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/return-variants/net-total-return-index")  `D03-F04-A03`
- 🟢 [Excess-Return Index](https://thefintechbuilder.com/index-and-benchmark-engineering/return-variants/excess-return-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/return-variants/excess-return-index")  `D03-F04-A04`
- 🟢 [Dividend-Point Index](https://thefintechbuilder.com/index-and-benchmark-engineering/return-variants/dividend-point-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/return-variants/dividend-point-index")  `D03-F04-A05`
- 🟢 [Currency-Converted Index](https://thefintechbuilder.com/index-and-benchmark-engineering/return-variants/currency-converted-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/return-variants/currency-converted-index")  `D03-F04-A06`
- 🟢 [Currency-Hedged Index](https://thefintechbuilder.com/index-and-benchmark-engineering/return-variants/currency-hedged-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/return-variants/currency-hedged-index")  `D03-F04-A07`

### Strategy Indices  `D03-F05`

- 🟢 [Leveraged Daily-Reset Index](https://thefintechbuilder.com/index-and-benchmark-engineering/strategy-indices/leveraged-daily-reset-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/strategy-indices/leveraged-daily-reset-index")  `D03-F05-A01`
- 🟢 [Inverse Daily-Reset Index](https://thefintechbuilder.com/index-and-benchmark-engineering/strategy-indices/inverse-daily-reset-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/strategy-indices/inverse-daily-reset-index")  `D03-F05-A02`
- 🟢 [Volatility-Control Index](https://thefintechbuilder.com/index-and-benchmark-engineering/strategy-indices/volatility-control-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/strategy-indices/volatility-control-index")  `D03-F05-A03`
- 🟢 [Fixed-Decrement Index](https://thefintechbuilder.com/index-and-benchmark-engineering/strategy-indices/fixed-decrement-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/strategy-indices/fixed-decrement-index")  `D03-F05-A04`
- 🟢 [Percentage-Decrement Index](https://thefintechbuilder.com/index-and-benchmark-engineering/strategy-indices/percentage-decrement-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/strategy-indices/percentage-decrement-index")  `D03-F05-A05`
- 🟢 [Index-of-Indices](https://thefintechbuilder.com/index-and-benchmark-engineering/strategy-indices/index-of-indices/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/strategy-indices/index-of-indices")  `D03-F05-A06`

### Governance and Maintenance  `D03-F06`

- 🟢 [Eligibility Screen](https://thefintechbuilder.com/index-and-benchmark-engineering/governance-and-maintenance/eligibility-screen/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/governance-and-maintenance/eligibility-screen")  `D03-F06-A01`
- 🟢 [Liquidity Screen](https://thefintechbuilder.com/index-and-benchmark-engineering/governance-and-maintenance/liquidity-screen/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/governance-and-maintenance/liquidity-screen")  `D03-F06-A02`
- 🟢 [Free-Float Factor Calculation](https://thefintechbuilder.com/index-and-benchmark-engineering/governance-and-maintenance/free-float-factor-calculation/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/governance-and-maintenance/free-float-factor-calculation")  `D03-F06-A03`
- 🟢 [IPO Fast-Entry Rule](https://thefintechbuilder.com/index-and-benchmark-engineering/governance-and-maintenance/ipo-fast-entry-rule/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/governance-and-maintenance/ipo-fast-entry-rule")  `D03-F06-A04`
- 🟢 [Reconstitution Algorithm](https://thefintechbuilder.com/index-and-benchmark-engineering/governance-and-maintenance/reconstitution-algorithm/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/governance-and-maintenance/reconstitution-algorithm")  `D03-F06-A05`
- 🟢 [Rebalancing Algorithm](https://thefintechbuilder.com/index-and-benchmark-engineering/governance-and-maintenance/rebalancing-algorithm/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/governance-and-maintenance/rebalancing-algorithm")  `D03-F06-A06`
- 🟢 [Turnover Buffer Rule](https://thefintechbuilder.com/index-and-benchmark-engineering/governance-and-maintenance/turnover-buffer-rule/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/governance-and-maintenance/turnover-buffer-rule")  `D03-F06-A07`
- 🟢 [Index Replication-Cost Estimator](https://thefintechbuilder.com/index-and-benchmark-engineering/governance-and-maintenance/index-replication-cost-estimator/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/index-and-benchmark-engineering/governance-and-maintenance/index-replication-cost-estimator")  `D03-F06-A08`

---

## D04 — Market Breadth and Internals

_Measure the participation, strength, and concentration hidden beneath headline market movements._

**Domain page:** [thefintechbuilder.com/domains/market-breadth-and-internals/](https://thefintechbuilder.com/domains/market-breadth-and-internals/)  ·  **5** families  ·  **6/28** published  ·  **28/28** on npm

### Advance/Decline Breadth  `D04-F01`

- 🟢 [Net Advances](https://thefintechbuilder.com/market-breadth-and-internals/advance-decline-breadth/net-advances/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/advance-decline-breadth/net-advances") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Net-Advances-Market-Breadth-algorithm)  `D04-F01-A01`
- 🟢 [Advance/Decline Ratio](https://thefintechbuilder.com/market-breadth-and-internals/advance-decline-breadth/advance-decline-ratio/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/advance-decline-breadth/advance-decline-ratio") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Advance-Decline-Ratio-Market-Breadth-algorithm)  `D04-F01-A02`
- 🟢 [Cumulative Advance/Decline Line](https://thefintechbuilder.com/market-breadth-and-internals/advance-decline-breadth/cumulative-advance-decline-line/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/advance-decline-breadth/cumulative-advance-decline-line") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Cumulative-Advance-Decline-Line-Market-Breadth-algorithm)  `D04-F01-A03`
- 🟢 [Normalized Advance/Decline Line](https://thefintechbuilder.com/market-breadth-and-internals/advance-decline-breadth/normalized-advance-decline-line/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/advance-decline-breadth/normalized-advance-decline-line") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Normalized-Advance-Decline-Line-Market-Breadth-algorithm)  `D04-F01-A04`
- 🟢 [Absolute Breadth Index](https://thefintechbuilder.com/market-breadth-and-internals/advance-decline-breadth/absolute-breadth-index/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/advance-decline-breadth/absolute-breadth-index") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Absolute-Breadth-Index-Market-Breadth-algorithm)  `D04-F01-A05`

### McClellan Family  `D04-F02`

- 🟢 [Traditional McClellan Oscillator](https://thefintechbuilder.com/market-breadth-and-internals/mcclellan-family/traditional-mcclellan-oscillator/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/mcclellan-family/traditional-mcclellan-oscillator") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-McClellan-Oscillator-Market-Breadth-algorithm)  `D04-F02-A01`
- ⚪ Ratio-Adjusted McClellan Oscillator — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/mcclellan-family/ratio-adjusted-mcclellan-oscillator")  `D04-F02-A02`
- ⚪ Traditional McClellan Summation Index — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/mcclellan-family/traditional-mcclellan-summation-index")  `D04-F02-A03`
- ⚪ Ratio-Adjusted Summation Index (RASI) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/mcclellan-family/ratio-adjusted-summation-index-rasi")  `D04-F02-A04`
- ⚪ McClellan Volume Oscillator — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/mcclellan-family/mcclellan-volume-oscillator")  `D04-F02-A05`
- ⚪ McClellan Volume Summation Index — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/mcclellan-family/mcclellan-volume-summation-index")  `D04-F02-A06`

### High/Low and Trend Breadth  `D04-F03`

- ⚪ New Highs–New Lows — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/high-low-and-trend-breadth/new-highs-new-lows")  `D04-F03-A01`
- ⚪ High-Low Ratio — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/high-low-and-trend-breadth/high-low-ratio")  `D04-F03-A02`
- ⚪ High-Low Index — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/high-low-and-trend-breadth/high-low-index")  `D04-F03-A03`
- ⚪ Percent Above 20-Day MA — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/high-low-and-trend-breadth/percent-above-20-day-ma")  `D04-F03-A04`
- ⚪ Percent Above 50-Day MA — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/high-low-and-trend-breadth/percent-above-50-day-ma")  `D04-F03-A05`
- ⚪ Percent Above 200-Day MA — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/high-low-and-trend-breadth/percent-above-200-day-ma")  `D04-F03-A06`

### Thrust and Pressure  `D04-F04`

- ⚪ Zweig Breadth Thrust — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/thrust-and-pressure/zweig-breadth-thrust")  `D04-F04-A01`
- ⚪ Arms Index (TRIN) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/thrust-and-pressure/arms-index-trin")  `D04-F04-A02`
- ⚪ Advance/Decline Volume Line — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/thrust-and-pressure/advance-decline-volume-line")  `D04-F04-A03`
- ⚪ Upside/Downside Volume Ratio — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/thrust-and-pressure/upside-downside-volume-ratio")  `D04-F04-A04`
- ⚪ Cumulative TICK — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/thrust-and-pressure/cumulative-tick")  `D04-F04-A05`
- ⚪ Breadth-Divergence Detector — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/thrust-and-pressure/breadth-divergence-detector")  `D04-F04-A06`

### Concentration and Diffusion  `D04-F05`

- ⚪ Top-N Index Contribution — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/concentration-and-diffusion/top-n-index-contribution")  `D04-F05-A01`
- ⚪ Herfindahl Constituent Concentration — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/concentration-and-diffusion/herfindahl-constituent-concentration")  `D04-F05-A02`
- ⚪ Effective Number of Constituents — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/concentration-and-diffusion/effective-number-of-constituents")  `D04-F05-A03`
- ⚪ Sector Diffusion Index — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/concentration-and-diffusion/sector-diffusion-index")  `D04-F05-A04`
- ⚪ Factor Diffusion Index — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-breadth-and-internals/concentration-and-diffusion/factor-diffusion-index")  `D04-F05-A05`

---

## D05 — Correlation, Dependence, and Networks

_Quantify linear, nonlinear, dynamic, and tail relationships among financial variables and market participants._

**Domain page:** [thefintechbuilder.com/domains/correlation-dependence-and-networks/](https://thefintechbuilder.com/domains/correlation-dependence-and-networks/)  ·  **7** families  ·  **0/40** published  ·  **0/40** on npm

### Linear and Rank Dependence  `D05-F01`

- ⚪ Covariance  `D05-F01-A01`
- ⚪ Pearson Correlation  `D05-F01-A02`
- ⚪ Spearman Rank Correlation  `D05-F01-A03`
- ⚪ Kendall Tau  `D05-F01-A04`
- ⚪ Rolling Correlation  `D05-F01-A05`
- ⚪ EWMA Correlation  `D05-F01-A06`

### Conditional and Robust Dependence  `D05-F02`

- ⚪ Partial Correlation  `D05-F02-A01`
- ⚪ Precision-Matrix Correlation  `D05-F02-A02`
- ⚪ Graphical Lasso  `D05-F02-A03`
- ⚪ Biweight Midcorrelation  `D05-F02-A04`
- ⚪ Minimum Covariance Determinant  `D05-F02-A05`
- ⚪ Ledoit-Wolf Shrinkage  `D05-F02-A06`

### Nonlinear Dependence  `D05-F03`

- ⚪ Distance Correlation  `D05-F03-A01`
- ⚪ Mutual Information  `D05-F03-A02`
- ⚪ Chatterjee Xi  `D05-F03-A03`
- ⚪ Hilbert-Schmidt Independence Criterion  `D05-F03-A04`
- ⚪ Maximal Information Coefficient  `D05-F03-A05`

### Tail and Asymmetric Dependence  `D05-F04`

- ⚪ Downside Correlation  `D05-F04-A01`
- ⚪ Upside Correlation  `D05-F04-A02`
- ⚪ Exceedance Correlation  `D05-F04-A03`
- ⚪ Lower-Tail Dependence  `D05-F04-A04`
- ⚪ Upper-Tail Dependence  `D05-F04-A05`
- ⚪ Quantile Correlation  `D05-F04-A06`

### Dynamic and High-Frequency  `D05-F05`

- ⚪ DCC-GARCH Correlation  `D05-F05-A01`
- ⚪ Regime-Conditioned Correlation  `D05-F05-A02`
- ⚪ State-Space Dynamic Correlation  `D05-F05-A03`
- ⚪ Realized Covariance  `D05-F05-A04`
- ⚪ Hayashi-Yoshida Covariance  `D05-F05-A05`

### Copulas and Networks  `D05-F06`

- ⚪ Gaussian Copula  `D05-F06-A01`
- ⚪ Student-t Copula  `D05-F06-A02`
- ⚪ Clayton Copula  `D05-F06-A03`
- ⚪ Gumbel Copula  `D05-F06-A04`
- ⚪ Vine Copula  `D05-F06-A05`
- ⚪ Correlation-Distance Clustering  `D05-F06-A06`
- ⚪ Minimum-Spanning-Tree Network  `D05-F06-A07`

### Lead-Lag and Equilibrium  `D05-F07`

- ⚪ Cross-Correlation Function  `D05-F07-A01`
- ⚪ Granger Causality  `D05-F07-A02`
- ⚪ Transfer Entropy  `D05-F07-A03`
- ⚪ Engle-Granger Cointegration  `D05-F07-A04`
- ⚪ Johansen Cointegration  `D05-F07-A05`

---

## D06 — Price Action and Candlesticks

_Convert candlestick geometry and market context into precise, testable price-action events._

**Domain page:** [thefintechbuilder.com/domains/price-action-and-candlesticks/](https://thefintechbuilder.com/domains/price-action-and-candlesticks/)  ·  **5** families  ·  **2/38** published  ·  **38/38** on npm

### Candle Foundations  `D06-F01`

- 🟢 [Candle Anatomy](https://thefintechbuilder.com/price-action-and-candlesticks/candle-foundations/candle-anatomy/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candle-foundations/candle-anatomy")  `D06-F01-A01`
- 🟢 [Scale-Aware Body Classification](https://thefintechbuilder.com/price-action-and-candlesticks/candle-foundations/scale-aware-body-classification/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candle-foundations/scale-aware-body-classification")  `D06-F01-A02`
- ⚪ Shadow-to-Body Ratio — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candle-foundations/shadow-to-body-ratio")  `D06-F01-A03`
- ⚪ Gap Classification — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candle-foundations/gap-classification")  `D06-F01-A04`
- ⚪ Trend-Context Filter — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candle-foundations/trend-context-filter")  `D06-F01-A05`

### Single-Candle Patterns  `D06-F02`

- ⚪ Doji — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/single-candle-patterns/doji")  `D06-F02-A01`
- ⚪ Dragonfly Doji — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/single-candle-patterns/dragonfly-doji")  `D06-F02-A02`
- ⚪ Gravestone Doji — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/single-candle-patterns/gravestone-doji")  `D06-F02-A03`
- ⚪ Marubozu — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/single-candle-patterns/marubozu")  `D06-F02-A04`
- ⚪ Spinning Top — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/single-candle-patterns/spinning-top")  `D06-F02-A05`
- ⚪ Hammer — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/single-candle-patterns/hammer")  `D06-F02-A06`
- ⚪ Hanging Man — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/single-candle-patterns/hanging-man")  `D06-F02-A07`
- ⚪ Inverted Hammer — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/single-candle-patterns/inverted-hammer")  `D06-F02-A08`
- ⚪ Shooting Star — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/single-candle-patterns/shooting-star")  `D06-F02-A09`

### Two-Candle Patterns  `D06-F03`

- ⚪ Bullish Engulfing — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/two-candle-patterns/bullish-engulfing")  `D06-F03-A01`
- ⚪ Bearish Engulfing — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/two-candle-patterns/bearish-engulfing")  `D06-F03-A02`
- ⚪ Bullish Harami — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/two-candle-patterns/bullish-harami")  `D06-F03-A03`
- ⚪ Bearish Harami — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/two-candle-patterns/bearish-harami")  `D06-F03-A04`
- ⚪ Piercing Line — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/two-candle-patterns/piercing-line")  `D06-F03-A05`
- ⚪ Dark Cloud Cover — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/two-candle-patterns/dark-cloud-cover")  `D06-F03-A06`
- ⚪ Tweezer Top — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/two-candle-patterns/tweezer-top")  `D06-F03-A07`
- ⚪ Tweezer Bottom — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/two-candle-patterns/tweezer-bottom")  `D06-F03-A08`

### Multi-Candle Patterns  `D06-F04`

- ⚪ Morning Star — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/multi-candle-patterns/morning-star")  `D06-F04-A01`
- ⚪ Evening Star — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/multi-candle-patterns/evening-star")  `D06-F04-A02`
- ⚪ Three White Soldiers — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/multi-candle-patterns/three-white-soldiers")  `D06-F04-A03`
- ⚪ Three Black Crows — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/multi-candle-patterns/three-black-crows")  `D06-F04-A04`
- ⚪ Three Inside Up/Down — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/multi-candle-patterns/three-inside-up-down")  `D06-F04-A05`
- ⚪ Three Outside Up/Down — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/multi-candle-patterns/three-outside-up-down")  `D06-F04-A06`
- ⚪ Abandoned Baby — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/multi-candle-patterns/abandoned-baby")  `D06-F04-A07`

### Candlestick Scanning and Context  `D06-F05`

- ⚪ Unified Candlestick Pattern Registry — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candlestick-scanning-and-context/unified-candlestick-pattern-registry")  `D06-F05-A01`
- ⚪ Candlestick Pattern Occurrence Contract — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candlestick-scanning-and-context/candlestick-pattern-occurrence-contract")  `D06-F05-A02`
- ⚪ Market-Wide Candlestick Pattern Scanner — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candlestick-scanning-and-context/market-wide-candlestick-pattern-scanner")  `D06-F05-A03`
- ⚪ Contextual Candlestick Confidence Score — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candlestick-scanning-and-context/contextual-candlestick-confidence-score")  `D06-F05-A04`
- ⚪ Support/Resistance Pattern Context — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candlestick-scanning-and-context/support-resistance-pattern-context")  `D06-F05-A05`
- ⚪ Trend, Volatility, and Volume Pattern Context — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candlestick-scanning-and-context/trend-volatility-and-volume-pattern-context")  `D06-F05-A06`
- ⚪ Overlapping-Pattern Conflict Resolver — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candlestick-scanning-and-context/overlapping-pattern-conflict-resolver")  `D06-F05-A07`
- ⚪ Candlestick Confirmation and Invalidation State Machine — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candlestick-scanning-and-context/candlestick-confirmation-and-invalidation-state-machine")  `D06-F05-A08`
- ⚪ Candlestick Scanner Ranking and Deduplication — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/price-action-and-candlesticks/candlestick-scanning-and-context/candlestick-scanner-ranking-and-deduplication")  `D06-F05-A09`

---

## D07 — Technical Indicators

_Summarize trend, momentum, volatility, and volume through reproducible indicator calculations._

**Domain page:** [thefintechbuilder.com/domains/technical-indicators/](https://thefintechbuilder.com/domains/technical-indicators/)  ·  **5** families  ·  **8/37** published  ·  **37/37** on npm

### Trend Smoothing  `D07-F01`

- 🟢 [SMA](https://thefintechbuilder.com/technical-indicators/trend-smoothing/sma/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-smoothing/sma") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-SMA-Simple-Moving-Average-algorithm)  `D07-F01-A01`
- 🟢 [EMA](https://thefintechbuilder.com/technical-indicators/trend-smoothing/ema/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-smoothing/ema") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-EMA-Exponential-Moving-Average-algorithm)  `D07-F01-A02`
- 🟢 [WMA](https://thefintechbuilder.com/technical-indicators/trend-smoothing/wma/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-smoothing/wma") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-WMA-Weighted-Moving-Average-algorithm)  `D07-F01-A03`
- 🟢 [Wilder RMA](https://thefintechbuilder.com/technical-indicators/trend-smoothing/wilder-rma/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-smoothing/wilder-rma") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-Wilder-RMA-Smoothing-algorithm)  `D07-F01-A04`
- 🟢 [DEMA](https://thefintechbuilder.com/technical-indicators/trend-smoothing/dema/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-smoothing/dema") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-DEMA-Double-Exponential-Moving-Average-algorithm)  `D07-F01-A05`
- 🟢 [TEMA](https://thefintechbuilder.com/technical-indicators/trend-smoothing/tema/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-smoothing/tema") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-TEMA-Triple-Exponential-Moving-Average-algorithm)  `D07-F01-A06`
- 🟢 [Hull MA](https://thefintechbuilder.com/technical-indicators/trend-smoothing/hull-ma/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-smoothing/hull-ma") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-HMA-Hull-Moving-Average-algorithm)  `D07-F01-A07`
- ⚪ KAMA — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-smoothing/kama")  `D07-F01-A08`
- ⚪ MAMA — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-smoothing/mama")  `D07-F01-A09`

### Trend Systems  `D07-F02`

- 🟢 [MACD](https://thefintechbuilder.com/technical-indicators/trend-systems/macd/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-systems/macd") · 📦 [repo](https://github.com/IslamBaraka90/Fintech-MACD-Moving-Average-Convergence-Divergence-algorithm)  `D07-F02-A01`
- ⚪ Percentage Price Oscillator — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-systems/percentage-price-oscillator")  `D07-F02-A02`
- ⚪ Aroon — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-systems/aroon")  `D07-F02-A03`
- ⚪ Directional Movement — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-systems/directional-movement")  `D07-F02-A04`
- ⚪ ADX — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-systems/adx")  `D07-F02-A05`
- ⚪ Ichimoku Cloud — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-systems/ichimoku-cloud")  `D07-F02-A06`
- ⚪ Parabolic SAR — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-systems/parabolic-sar")  `D07-F02-A07`
- ⚪ Supertrend — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/trend-systems/supertrend")  `D07-F02-A08`

### Momentum  `D07-F03`

- ⚪ RSI — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/momentum/rsi")  `D07-F03-A01`
- ⚪ Stochastic Oscillator — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/momentum/stochastic-oscillator")  `D07-F03-A02`
- ⚪ Stochastic RSI — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/momentum/stochastic-rsi")  `D07-F03-A03`
- ⚪ Williams %R — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/momentum/williams-r")  `D07-F03-A04`
- ⚪ CCI — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/momentum/cci")  `D07-F03-A05`
- ⚪ Ultimate Oscillator — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/momentum/ultimate-oscillator")  `D07-F03-A06`
- ⚪ TSI — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/momentum/tsi")  `D07-F03-A07`
- ⚪ Connors RSI — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/momentum/connors-rsi")  `D07-F03-A08`

### Volatility and Channels  `D07-F04`

- ⚪ True Range — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volatility-and-channels/true-range")  `D07-F04-A01`
- ⚪ ATR — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volatility-and-channels/atr")  `D07-F04-A02`
- ⚪ Bollinger Bands — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volatility-and-channels/bollinger-bands")  `D07-F04-A03`
- ⚪ Keltner Channels — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volatility-and-channels/keltner-channels")  `D07-F04-A04`
- ⚪ Donchian Channels — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volatility-and-channels/donchian-channels")  `D07-F04-A05`
- ⚪ Bollinger Bandwidth — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volatility-and-channels/bollinger-bandwidth")  `D07-F04-A06`

### Volume Indicators  `D07-F05`

- ⚪ OBV — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volume-indicators/obv")  `D07-F05-A01`
- ⚪ Accumulation/Distribution Line — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volume-indicators/accumulation-distribution-line")  `D07-F05-A02`
- ⚪ Chaikin Money Flow — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volume-indicators/chaikin-money-flow")  `D07-F05-A03`
- ⚪ Money Flow Index — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volume-indicators/money-flow-index")  `D07-F05-A04`
- ⚪ Volume Price Trend — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volume-indicators/volume-price-trend")  `D07-F05-A05`
- ⚪ Force Index — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/technical-indicators/volume-indicators/force-index")  `D07-F05-A06`

---

## D08 — Geometric Chart Patterns

_Detect recurring price structures with causal pivots, geometric rules, and statistical pattern matching._

**Domain page:** [thefintechbuilder.com/domains/geometric-chart-patterns/](https://thefintechbuilder.com/domains/geometric-chart-patterns/)  ·  **6** families  ·  **0/37** published  ·  **27/37** on npm

### Pivots and Levels  `D08-F01`

- ⚪ Causal Pivot Detection — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/pivots-and-levels/causal-pivot-detection")  `D08-F01-A01`
- ⚪ ZigZag Segmentation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/pivots-and-levels/zigzag-segmentation")  `D08-F01-A02`
- ⚪ Support/Resistance Clustering — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/pivots-and-levels/support-resistance-clustering")  `D08-F01-A03`
- ⚪ Robust Trendline Fitting — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/pivots-and-levels/robust-trendline-fitting")  `D08-F01-A04`

### Reversal Structures  `D08-F02`

- ⚪ Double Top — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/reversal-structures/double-top")  `D08-F02-A01`
- ⚪ Double Bottom — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/reversal-structures/double-bottom")  `D08-F02-A02`
- ⚪ Triple Top — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/reversal-structures/triple-top")  `D08-F02-A03`
- ⚪ Triple Bottom — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/reversal-structures/triple-bottom")  `D08-F02-A04`
- ⚪ Head and Shoulders — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/reversal-structures/head-and-shoulders")  `D08-F02-A05`
- ⚪ Inverse Head and Shoulders — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/reversal-structures/inverse-head-and-shoulders")  `D08-F02-A06`

### Continuation Structures  `D08-F03`

- ⚪ Ascending Triangle  `D08-F03-A01`
- ⚪ Descending Triangle  `D08-F03-A02`
- ⚪ Symmetrical Triangle  `D08-F03-A03`
- ⚪ Flag  `D08-F03-A04`
- ⚪ Pennant  `D08-F03-A05`
- ⚪ Rising/Falling Wedge  `D08-F03-A06`

### Pattern Matching  `D08-F04`

- ⚪ Normalized Template Matching  `D08-F04-A01`
- ⚪ Dynamic-Time-Warping Pattern Match  `D08-F04-A02`
- ⚪ Matrix-Profile Motif Discovery  `D08-F04-A03`
- ⚪ Shapelet Pattern Classifier  `D08-F04-A04`

### Indicator Divergence Detection  `D08-F05`

- ⚪ Price–Indicator Pivot Alignment — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/indicator-divergence-detection/price-indicator-pivot-alignment")  `D08-F05-A01`
- ⚪ Regular Bullish/Bearish Divergence Detection — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/indicator-divergence-detection/regular-bullish-bearish-divergence-detection")  `D08-F05-A02`
- ⚪ Hidden Bullish/Bearish Divergence Detection — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/indicator-divergence-detection/hidden-bullish-bearish-divergence-detection")  `D08-F05-A03`
- ⚪ Multi-Indicator Divergence Adapters — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/indicator-divergence-detection/multi-indicator-divergence-adapters")  `D08-F05-A04`
- ⚪ Divergence Strength and Quality Scoring — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/indicator-divergence-detection/divergence-strength-and-quality-scoring")  `D08-F05-A05`
- ⚪ Divergence Confirmation and Invalidation State Machine — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/indicator-divergence-detection/divergence-confirmation-and-invalidation-state-machine")  `D08-F05-A06`
- ⚪ Multi-Indicator Divergence Confluence — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/indicator-divergence-detection/multi-indicator-divergence-confluence")  `D08-F05-A07`
- ⚪ Market-Wide Divergence Scanner and Ranking — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/indicator-divergence-detection/market-wide-divergence-scanner-and-ranking")  `D08-F05-A08`

### Level Confluence and Zone Scoring  `D08-F06`

- ⚪ Price-by-Volume Profile Construction — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/level-confluence-and-zone-scoring/price-by-volume-profile-construction")  `D08-F06-A01`
- ⚪ Point of Control, Value Area, HVN, and LVN Detection — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/level-confluence-and-zone-scoring/poc-value-area-hvn-lvn-detection")  `D08-F06-A02`
- ⚪ Fibonacci Retracement and Extension Projection — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/level-confluence-and-zone-scoring/fibonacci-retracement-extension-projection")  `D08-F06-A03`
- ⚪ Psychological Round-Number Level Generation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/level-confluence-and-zone-scoring/psychological-round-number-level-generation")  `D08-F06-A04`
- ⚪ Multi-Source Support/Resistance Zone Fusion — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/level-confluence-and-zone-scoring/multi-source-support-resistance-zone-fusion")  `D08-F06-A05`
- ⚪ Support/Resistance Zone Strength and Decay Scoring — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/level-confluence-and-zone-scoring/support-resistance-zone-strength-decay-scoring")  `D08-F06-A06`
- ⚪ Support/Resistance Role-Reversal State Machine — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/level-confluence-and-zone-scoring/support-resistance-role-reversal-state-machine")  `D08-F06-A07`
- ⚪ Breakout and Retest Detection — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/level-confluence-and-zone-scoring/breakout-and-retest-detection")  `D08-F06-A08`
- ⚪ Market-Wide Zone-Proximity Scanner and Ranking — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/geometric-chart-patterns/level-confluence-and-zone-scoring/market-wide-zone-proximity-scanner-ranking")  `D08-F06-A09`

---

## D09 — Statistical Time Series

_Diagnose, model, decompose, and forecast financial sequences while respecting their temporal structure._

**Domain page:** [thefintechbuilder.com/domains/statistical-time-series/](https://thefintechbuilder.com/domains/statistical-time-series/)  ·  **5** families  ·  **0/29** published  ·  **29/29** on npm

### Diagnostics  `D09-F01`

- ⚪ ACF — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/diagnostics/acf")  `D09-F01-A01`
- ⚪ PACF — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/diagnostics/pacf")  `D09-F01-A02`
- ⚪ Augmented Dickey-Fuller — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/diagnostics/augmented-dickey-fuller")  `D09-F01-A03`
- ⚪ KPSS — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/diagnostics/kpss")  `D09-F01-A04`
- ⚪ Ljung-Box — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/diagnostics/ljung-box")  `D09-F01-A05`
- ⚪ Zivot-Andrews Break Test — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/diagnostics/zivot-andrews-break-test")  `D09-F01-A06`

### Forecast Models  `D09-F02`

- ⚪ AutoReg — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/forecast-models/autoreg")  `D09-F02-A01`
- ⚪ ARMA — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/forecast-models/arma")  `D09-F02-A02`
- ⚪ ARIMA — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/forecast-models/arima")  `D09-F02-A03`
- ⚪ SARIMA/SARIMAX — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/forecast-models/sarima-sarimax")  `D09-F02-A04`
- ⚪ Holt-Winters — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/forecast-models/holt-winters")  `D09-F02-A05`
- ⚪ Theta Forecast — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/forecast-models/theta-forecast")  `D09-F02-A06`

### Multivariate Systems  `D09-F03`

- ⚪ VAR — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/multivariate-systems/var")  `D09-F03-A01`
- ⚪ Structural VAR — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/multivariate-systems/structural-var")  `D09-F03-A02`
- ⚪ VECM — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/multivariate-systems/vecm")  `D09-F03-A03`
- ⚪ Impulse-Response Analysis — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/multivariate-systems/impulse-response-analysis")  `D09-F03-A04`
- ⚪ Forecast-Error Variance Decomposition — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/multivariate-systems/forecast-error-variance-decomposition")  `D09-F03-A05`

### State and Regime Models  `D09-F04`

- ⚪ Kalman Filter — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/state-and-regime-models/kalman-filter")  `D09-F04-A01`
- ⚪ Extended Kalman Filter — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/state-and-regime-models/extended-kalman-filter")  `D09-F04-A02`
- ⚪ Unscented Kalman Filter — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/state-and-regime-models/unscented-kalman-filter")  `D09-F04-A03`
- ⚪ Hidden Markov Model — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/state-and-regime-models/hidden-markov-model")  `D09-F04-A04`
- ⚪ Markov-Switching Autoregression — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/state-and-regime-models/markov-switching-autoregression")  `D09-F04-A05`
- ⚪ Bayesian Change-Point Detection — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/state-and-regime-models/bayesian-change-point-detection")  `D09-F04-A06`

### Decomposition and Cycles  `D09-F05`

- ⚪ STL Decomposition — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/decomposition-and-cycles/stl-decomposition")  `D09-F05-A01`
- ⚪ Hodrick-Prescott Filter — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/decomposition-and-cycles/hodrick-prescott-filter")  `D09-F05-A02`
- ⚪ Baxter-King Filter — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/decomposition-and-cycles/baxter-king-filter")  `D09-F05-A03`
- ⚪ Christiano-Fitzgerald Filter — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/decomposition-and-cycles/christiano-fitzgerald-filter")  `D09-F05-A04`
- ⚪ Fast Fourier Transform Periodogram — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/decomposition-and-cycles/fast-fourier-transform-periodogram")  `D09-F05-A05`
- ⚪ Wavelet Decomposition — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/statistical-time-series/decomposition-and-cycles/wavelet-decomposition")  `D09-F05-A06`

---

## D10 — Volatility and Covariance

_Estimate changing dispersion and co-movement using historical, realized, conditional, and shrinkage methods._

**Domain page:** [thefintechbuilder.com/domains/volatility-and-covariance/](https://thefintechbuilder.com/domains/volatility-and-covariance/)  ·  **4** families  ·  **0/22** published  ·  **0/22** on npm

### Historical Estimators  `D10-F01`

- ⚪ Close-to-Close Volatility  `D10-F01-A01`
- ⚪ Parkinson Volatility  `D10-F01-A02`
- ⚪ Garman-Klass Volatility  `D10-F01-A03`
- ⚪ Rogers-Satchell Volatility  `D10-F01-A04`
- ⚪ Yang-Zhang Volatility  `D10-F01-A05`

### Realized Measures  `D10-F02`

- ⚪ Realized Variance  `D10-F02-A01`
- ⚪ Realized Covariance  `D10-F02-A02`
- ⚪ Bipower Variation  `D10-F02-A03`
- ⚪ Jump-Variation Detector  `D10-F02-A04`
- ⚪ Realized Kernel  `D10-F02-A05`

### Conditional Volatility  `D10-F03`

- ⚪ ARCH  `D10-F03-A01`
- ⚪ GARCH  `D10-F03-A02`
- ⚪ EGARCH  `D10-F03-A03`
- ⚪ GJR-GARCH  `D10-F03-A04`
- ⚪ FIGARCH  `D10-F03-A05`
- ⚪ HAR-RV  `D10-F03-A06`

### Covariance Estimation  `D10-F04`

- ⚪ Sample Covariance  `D10-F04-A01`
- ⚪ EWMA Covariance  `D10-F04-A02`
- ⚪ Ledoit-Wolf Shrinkage  `D10-F04-A03`
- ⚪ Oracle Approximating Shrinkage  `D10-F04-A04`
- ⚪ Factor-Model Covariance  `D10-F04-A05`
- ⚪ Graphical-Lasso Covariance  `D10-F04-A06`

---

## D11 — Market Microstructure

_Study how trades, quotes, liquidity, order flow, and information interact to form market prices._

**Domain page:** [thefintechbuilder.com/domains/market-microstructure/](https://thefintechbuilder.com/domains/market-microstructure/)  ·  **5** families  ·  **0/29** published  ·  **29/29** on npm

### Trade Classification  `D11-F01`

- ⚪ Tick Test — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/trade-classification/tick-test")  `D11-F01-A01`
- ⚪ Quote Test — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/trade-classification/quote-test")  `D11-F01-A02`
- ⚪ Lee-Ready Trade Signing — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/trade-classification/lee-ready-trade-signing")  `D11-F01-A03`
- ⚪ Bulk Volume Classification — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/trade-classification/bulk-volume-classification")  `D11-F01-A04`

### Liquidity and Spreads  `D11-F02`

- ⚪ Quoted Spread — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/liquidity-and-spreads/quoted-spread")  `D11-F02-A01`
- ⚪ Effective Spread — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/liquidity-and-spreads/effective-spread")  `D11-F02-A02`
- ⚪ Realized Spread — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/liquidity-and-spreads/realized-spread")  `D11-F02-A03`
- ⚪ Roll Spread Estimator — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/liquidity-and-spreads/roll-spread-estimator")  `D11-F02-A04`
- ⚪ Amihud Illiquidity Ratio — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/liquidity-and-spreads/amihud-illiquidity-ratio")  `D11-F02-A05`
- ⚪ Corwin-Schultz Spread Estimator — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/liquidity-and-spreads/corwin-schultz-spread-estimator")  `D11-F02-A06`

### Order-Flow and Impact  `D11-F03`

- ⚪ Order Flow Imbalance — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-flow-and-impact/order-flow-imbalance")  `D11-F03-A01`
- ⚪ Queue Imbalance — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-flow-and-impact/queue-imbalance")  `D11-F03-A02`
- ⚪ Kyle Lambda — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-flow-and-impact/kyle-lambda")  `D11-F03-A03`
- ⚪ Hasbrouck Price Impact — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-flow-and-impact/hasbrouck-price-impact")  `D11-F03-A04`
- ⚪ PIN — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-flow-and-impact/pin")  `D11-F03-A05`
- ⚪ VPIN — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-flow-and-impact/vpin")  `D11-F03-A06`

### Order-Book Dynamics  `D11-F04`

- ⚪ Order-Book Slope — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-book-dynamics/order-book-slope")  `D11-F04-A01`
- ⚪ Depth-Weighted Midprice — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-book-dynamics/depth-weighted-midprice")  `D11-F04-A02`
- ⚪ Microprice — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-book-dynamics/microprice")  `D11-F04-A03`
- ⚪ Order-Book Resiliency — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-book-dynamics/order-book-resiliency")  `D11-F04-A04`
- ⚪ Hawkes Order-Arrival Model — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/order-book-dynamics/hawkes-order-arrival-model")  `D11-F04-A05`

### Market-Depth Analytics  `D11-F05`

- ⚪ Cumulative Bid/Ask Depth — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/market-depth-analytics/cumulative-bid-ask-depth")  `D11-F05-A01`
- ⚪ Top-N Depth Imbalance — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/market-depth-analytics/top-n-depth-imbalance")  `D11-F05-A02`
- ⚪ Depth-at-Distance Profile — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/market-depth-analytics/depth-at-distance-profile")  `D11-F05-A03`
- ⚪ Expected Market-Order Fill Price — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/market-depth-analytics/expected-market-order-fill-price")  `D11-F05-A04`
- ⚪ Multi-Level Sweep Cost and Slippage — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/market-depth-analytics/multi-level-sweep-cost-and-slippage")  `D11-F05-A05`
- ⚪ Liquidity-Wall and Concentration Detection — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/market-depth-analytics/liquidity-wall-and-concentration-detection")  `D11-F05-A06`
- ⚪ Depth Depletion and Replenishment — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/market-depth-analytics/depth-depletion-and-replenishment")  `D11-F05-A07`
- ⚪ Market-Depth Heatmap Aggregation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/market-microstructure/market-depth-analytics/market-depth-heatmap-aggregation")  `D11-F05-A08`

---

## D12 — Matching Engines and Venue Logic

_Explain how trading venues prioritize orders, determine auction prices, and enforce market controls._

**Domain page:** [thefintechbuilder.com/domains/matching-engines-and-venue-logic/](https://thefintechbuilder.com/domains/matching-engines-and-venue-logic/)  ·  **4** families  ·  **0/21** published  ·  **21/21** on npm

### Continuous Matching  `D12-F01`

- ⚪ Price-Time Priority — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/continuous-matching/price-time-priority")  `D12-F01-A01`
- ⚪ Pro-Rata Matching — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/continuous-matching/pro-rata-matching")  `D12-F01-A02`
- ⚪ Size-Time Priority — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/continuous-matching/size-time-priority")  `D12-F01-A03`
- ⚪ Hybrid Pro-Rata/Time Matching — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/continuous-matching/hybrid-pro-rata-time-matching")  `D12-F01-A04`

### Auctions  `D12-F02`

- ⚪ Maximum-Executable-Volume Auction — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/auctions/maximum-executable-volume-auction")  `D12-F02-A01`
- ⚪ Minimum-Imbalance Tie-Break — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/auctions/minimum-imbalance-tie-break")  `D12-F02-A02`
- ⚪ Opening-Cross Price — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/auctions/opening-cross-price")  `D12-F02-A03`
- ⚪ Closing-Cross Price — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/auctions/closing-cross-price")  `D12-F02-A04`
- ⚪ Volatility-Auction Reopening — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/auctions/volatility-auction-reopening")  `D12-F02-A05`

### Order Controls  `D12-F03`

- ⚪ Tick-Size Validation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-controls/tick-size-validation")  `D12-F03-A01`
- ⚪ Price-Band Validation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-controls/price-band-validation")  `D12-F03-A02`
- ⚪ Self-Trade Prevention — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-controls/self-trade-prevention")  `D12-F03-A03`
- ⚪ Cancel-on-Disconnect — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-controls/cancel-on-disconnect")  `D12-F03-A04`
- ⚪ Fat-Finger Limit — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-controls/fat-finger-limit")  `D12-F03-A05`
- ⚪ Circuit-Breaker Trigger — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-controls/circuit-breaker-trigger")  `D12-F03-A06`

### Order Lifecycle and Queue State  `D12-F04`

- ⚪ Limit-Order Lifecycle State Machine — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-lifecycle-and-queue-state/limit-order-lifecycle-state-machine")  `D12-F04-A01`
- ⚪ Cancel/Replace Priority Rule — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-lifecycle-and-queue-state/cancel-replace-priority-rule")  `D12-F04-A02`
- ⚪ Partial-Fill and Residual-Quantity Processing — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-lifecycle-and-queue-state/partial-fill-and-residual-quantity-processing")  `D12-F04-A03`
- ⚪ Queue Position and Ahead-Volume Calculation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-lifecycle-and-queue-state/queue-position-and-ahead-volume-calculation")  `D12-F04-A04`
- ⚪ Iceberg/Reserve-Order Replenishment — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-lifecycle-and-queue-state/iceberg-reserve-order-replenishment")  `D12-F04-A05`
- ⚪ Marketable-Order Multi-Level Sweep — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/matching-engines-and-venue-logic/order-lifecycle-and-queue-state/marketable-order-multi-level-sweep")  `D12-F04-A06`

---

## D13 — Execution and Transaction Cost Analysis

_Plan and evaluate execution so that target trades balance cost, market impact, timing, and completion risk._

**Domain page:** [thefintechbuilder.com/domains/execution-and-transaction-cost-analysis/](https://thefintechbuilder.com/domains/execution-and-transaction-cost-analysis/)  ·  **4** families  ·  **0/19** published  ·  **9/19** on npm

### Schedule-Based Execution  `D13-F01`

- ⚪ TWAP Execution — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/execution-and-transaction-cost-analysis/schedule-based-execution/twap-execution")  `D13-F01-A01`
- ⚪ Historical VWAP Execution — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/execution-and-transaction-cost-analysis/schedule-based-execution/historical-vwap-execution")  `D13-F01-A02`
- ⚪ Adaptive VWAP Execution — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/execution-and-transaction-cost-analysis/schedule-based-execution/adaptive-vwap-execution")  `D13-F01-A03`
- ⚪ Percentage-of-Volume Execution — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/execution-and-transaction-cost-analysis/schedule-based-execution/percentage-of-volume-execution")  `D13-F01-A04`

### Cost/Risk Optimization  `D13-F02`

- ⚪ Almgren-Chriss Optimal Execution — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/execution-and-transaction-cost-analysis/cost-risk-optimization/almgren-chriss-optimal-execution")  `D13-F02-A01`
- ⚪ Implementation-Shortfall Execution — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/execution-and-transaction-cost-analysis/cost-risk-optimization/implementation-shortfall-execution")  `D13-F02-A02`
- ⚪ Arrival-Price Execution — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/execution-and-transaction-cost-analysis/cost-risk-optimization/arrival-price-execution")  `D13-F02-A03`
- ⚪ Liquidity-Seeking Execution — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/execution-and-transaction-cost-analysis/cost-risk-optimization/liquidity-seeking-execution")  `D13-F02-A04`
- ⚪ Opportunistic Dark-Pool Execution — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/execution-and-transaction-cost-analysis/cost-risk-optimization/opportunistic-dark-pool-execution")  `D13-F02-A05`

### Routing  `D13-F03`

- ⚪ Best-Price Smart Order Router  `D13-F03-A01`
- ⚪ Fee/Rebate-Aware Router  `D13-F03-A02`
- ⚪ Fill-Probability Router  `D13-F03-A03`
- ⚪ Latency-Aware Router  `D13-F03-A04`
- ⚪ Venue-Toxicity Router  `D13-F03-A05`

### Transaction-Cost Analysis (TCA)  `D13-F04`

- ⚪ Slippage Decomposition  `D13-F04-A01`
- ⚪ Market-Impact Estimation  `D13-F04-A02`
- ⚪ Timing-Cost Attribution  `D13-F04-A03`
- ⚪ Opportunity-Cost Estimation  `D13-F04-A04`
- ⚪ Post-Trade Markout  `D13-F04-A05`

---

# Investment Management and Company Analysis

## D14 — Portfolio Construction

_Convert forecasts, risk estimates, objectives, and real-world constraints into investable portfolios._

**Domain page:** [thefintechbuilder.com/domains/portfolio-construction/](https://thefintechbuilder.com/domains/portfolio-construction/)  ·  **4** families  ·  **0/20** published  ·  **0/20** on npm

### Mean-Risk Optimization  `D14-F01`

- ⚪ Markowitz Mean-Variance  `D14-F01-A01`
- ⚪ Global Minimum Variance  `D14-F01-A02`
- ⚪ Maximum Sharpe Ratio  `D14-F01-A03`
- ⚪ Mean-CVaR Optimization  `D14-F01-A04`
- ⚪ Mean-Absolute-Deviation Optimization  `D14-F01-A05`

### Risk Allocation  `D14-F02`

- ⚪ Inverse-Volatility Weighting  `D14-F02-A01`
- ⚪ Equal Risk Contribution  `D14-F02-A02`
- ⚪ Risk Budgeting  `D14-F02-A03`
- ⚪ Hierarchical Risk Parity  `D14-F02-A04`
- ⚪ Hierarchical Equal Risk Contribution  `D14-F02-A05`

### Bayesian and Robust Allocation  `D14-F03`

- ⚪ Black-Litterman  `D14-F03-A01`
- ⚪ Resampled Efficient Frontier  `D14-F03-A02`
- ⚪ Robust Mean-Variance  `D14-F03-A03`
- ⚪ Distributionally Robust Portfolio  `D14-F03-A04`
- ⚪ Kelly Allocation  `D14-F03-A05`

### Practical Constraints  `D14-F04`

- ⚪ Turnover-Constrained Optimization  `D14-F04-A01`
- ⚪ Transaction-Cost-Aware Optimization  `D14-F04-A02`
- ⚪ Cardinality-Constrained Portfolio  `D14-F04-A03`
- ⚪ Long/Short Gross-Net Constraints  `D14-F04-A04`
- ⚪ Tax-Aware Portfolio Optimization  `D14-F04-A05`

---

## D15 — Investment Risk

_Measure ordinary and extreme portfolio losses, identify their sources, and test resilience under stress._

**Domain page:** [thefintechbuilder.com/domains/investment-risk/](https://thefintechbuilder.com/domains/investment-risk/)  ·  **4** families  ·  **0/20** published  ·  **0/20** on npm

### Loss Quantiles  `D15-F01`

- ⚪ Historical VaR  `D15-F01-A01`
- ⚪ Variance-Covariance VaR  `D15-F01-A02`
- ⚪ Monte Carlo VaR  `D15-F01-A03`
- ⚪ Cornish-Fisher VaR  `D15-F01-A04`
- ⚪ Filtered Historical Simulation  `D15-F01-A05`

### Tail Risk  `D15-F02`

- ⚪ Expected Shortfall  `D15-F02-A01`
- ⚪ Peaks-over-Threshold EVT  `D15-F02-A02`
- ⚪ Generalized Pareto Tail Fit  `D15-F02-A03`
- ⚪ Tail Conditional Expectation  `D15-F02-A04`
- ⚪ CoVaR  `D15-F02-A05`

### Risk Decomposition  `D15-F03`

- ⚪ Marginal VaR  `D15-F03-A01`
- ⚪ Component VaR  `D15-F03-A02`
- ⚪ Incremental VaR  `D15-F03-A03`
- ⚪ Euler Risk Contribution  `D15-F03-A04`
- ⚪ Factor Risk Decomposition  `D15-F03-A05`

### Stress and Drawdown  `D15-F04`

- ⚪ Historical Stress Replay  `D15-F04-A01`
- ⚪ Hypothetical Scenario Shock  `D15-F04-A02`
- ⚪ Reverse Stress Test  `D15-F04-A03`
- ⚪ Maximum Drawdown  `D15-F04-A04`
- ⚪ Conditional Drawdown at Risk  `D15-F04-A05`

---

## D16 — Performance and Attribution

_Calculate portfolio performance and explain which decisions, exposures, and risks produced the result._

**Domain page:** [thefintechbuilder.com/domains/performance-and-attribution/](https://thefintechbuilder.com/domains/performance-and-attribution/)  ·  **4** families  ·  **0/20** published  ·  **0/20** on npm

### Return Measurement  `D16-F01`

- ⚪ Time-Weighted Return  `D16-F01-A01`
- ⚪ Money-Weighted Return (IRR)  `D16-F01-A02`
- ⚪ Modified Dietz Return  `D16-F01-A03`
- ⚪ Geometric Return Linking  `D16-F01-A04`
- ⚪ Annualized Return  `D16-F01-A05`

### Equity Attribution  `D16-F02`

- ⚪ Brinson-Hood-Beebower Attribution  `D16-F02-A01`
- ⚪ Brinson-Fachler Attribution  `D16-F02-A02`
- ⚪ Allocation Effect  `D16-F02-A03`
- ⚪ Selection Effect  `D16-F02-A04`
- ⚪ Interaction Effect  `D16-F02-A05`

### Factor and Risk Attribution  `D16-F03`

- ⚪ Return-Based Style Analysis  `D16-F03-A01`
- ⚪ Factor Return Attribution  `D16-F03-A02`
- ⚪ Factor Risk Attribution  `D16-F03-A03`
- ⚪ Tracking-Error Attribution  `D16-F03-A04`
- ⚪ Drawdown Attribution  `D16-F03-A05`

### Performance Diagnostics  `D16-F04`

- ⚪ Sharpe Ratio  `D16-F04-A01`
- ⚪ Sortino Ratio  `D16-F04-A02`
- ⚪ Information Ratio  `D16-F04-A03`
- ⚪ Calmar Ratio  `D16-F04-A04`
- ⚪ Omega Ratio  `D16-F04-A05`

---

## D17 — Factor Investing and Asset Pricing

_Construct, neutralize, and evaluate systematic return factors and asset-pricing relationships._

**Domain page:** [thefintechbuilder.com/domains/factor-investing-and-asset-pricing/](https://thefintechbuilder.com/domains/factor-investing-and-asset-pricing/)  ·  **4** families  ·  **0/22** published  ·  **0/22** on npm

### Asset-Pricing Models  `D17-F01`

- ⚪ CAPM Beta  `D17-F01-A01`
- ⚪ Fama-French Three-Factor Model  `D17-F01-A02`
- ⚪ Carhart Four-Factor Model  `D17-F01-A03`
- ⚪ Fama-French Five-Factor Model  `D17-F01-A04`
- ⚪ Arbitrage Pricing Theory  `D17-F01-A05`

### Cross-Sectional Factors  `D17-F02`

- ⚪ Value Factor Score  `D17-F02-A01`
- ⚪ Size Factor Score  `D17-F02-A02`
- ⚪ Momentum Factor Score  `D17-F02-A03`
- ⚪ Quality Factor Score  `D17-F02-A04`
- ⚪ Low-Volatility Factor Score  `D17-F02-A05`
- ⚪ Profitability Factor Score  `D17-F02-A06`

### Factor Construction  `D17-F03`

- ⚪ Quantile Portfolio Sort  `D17-F03-A01`
- ⚪ Z-Score Composite Factor  `D17-F03-A02`
- ⚪ Sector-Neutral Factor  `D17-F03-A03`
- ⚪ Beta-Neutral Factor  `D17-F03-A04`
- ⚪ Residualized Factor  `D17-F03-A05`
- ⚪ Winsorized Rank Factor  `D17-F03-A06`

### Factor Evaluation  `D17-F04`

- ⚪ Information Coefficient  `D17-F04-A01`
- ⚪ Rank Information Coefficient  `D17-F04-A02`
- ⚪ Factor Turnover  `D17-F04-A03`
- ⚪ Quantile Spread Return  `D17-F04-A04`
- ⚪ Factor Decay Curve  `D17-F04-A05`

---

## D18 — Fundamental Analysis and Valuation

_Turn company fundamentals into normalized diagnostics, intrinsic values, relative values, and distress signals._

**Domain page:** [thefintechbuilder.com/domains/fundamental-analysis-and-valuation/](https://thefintechbuilder.com/domains/fundamental-analysis-and-valuation/)  ·  **10** families  ·  **0/89** published  ·  **0/89** on npm

### Statement Ratios  `D18-F01`

- ⚪ DuPont Decomposition  `D18-F01-A01`
- ⚪ ROIC Calculation  `D18-F01-A02`
- ⚪ Cash Conversion Cycle  `D18-F01-A03`
- ⚪ Interest-Coverage Ratio  `D18-F01-A04`
- ⚪ Net-Debt/EBITDA  `D18-F01-A05`
- ⚪ Common-Size Statements  `D18-F01-A06`

### Intrinsic Valuation  `D18-F02`

- ⚪ Free-Cash-Flow DCF  `D18-F02-A01`
- ⚪ Dividend Discount Model  `D18-F02-A02`
- ⚪ Gordon Growth Model  `D18-F02-A03`
- ⚪ Residual-Income Model  `D18-F02-A04`
- ⚪ Economic Value Added  `D18-F02-A05`

### Relative Valuation  `D18-F03`

- ⚪ P/E Comparable Valuation  `D18-F03-A01`
- ⚪ EV/EBITDA Comparable Valuation  `D18-F03-A02`
- ⚪ Price-to-Book Valuation  `D18-F03-A03`
- ⚪ PEG Ratio  `D18-F03-A04`
- ⚪ Peer-Multiple Regression  `D18-F03-A05`

### Quality and Distress  `D18-F04`

- ⚪ Altman Z-Score  `D18-F04-A01`
- ⚪ Piotroski F-Score  `D18-F04-A02`
- ⚪ Beneish M-Score  `D18-F04-A03`
- ⚪ Sloan Accrual Measure  `D18-F04-A04`
- ⚪ Ohlson O-Score  `D18-F04-A05`
- ⚪ Zmijewski X-Score  `D18-F04-A06`
- ⚪ Springate S-Score  `D18-F04-A07`
- ⚪ Taffler Z-Score  `D18-F04-A08`
- ⚪ Fulmer H-Score  `D18-F04-A09`
- ⚪ Grover G-Score  `D18-F04-A10`
- ⚪ Dechow F-Score for Misstatement Risk  `D18-F04-A11`
- ⚪ Dechow-Dichev Accrual Quality  `D18-F04-A12`
- ⚪ Modified Jones Discretionary Accrual Model  `D18-F04-A13`

### Cost of Capital and Discount Rates  `D18-F05`

- ⚪ Risk-Free Rate Selection  `D18-F05-A01`
- ⚪ Equity Risk Premium  `D18-F05-A02`
- ⚪ Bottom-Up Beta  `D18-F05-A03`
- ⚪ Beta Levering and Unlevering  `D18-F05-A04`
- ⚪ CAPM Cost of Equity  `D18-F05-A05`
- ⚪ Country-Risk Premium  `D18-F05-A06`
- ⚪ Pre-Tax and After-Tax Cost of Debt  `D18-F05-A07`
- ⚪ Weighted Average Cost of Capital  `D18-F05-A08`
- ⚪ Nominal/Real Rate Consistency  `D18-F05-A09`
- ⚪ Currency and Inflation Consistency  `D18-F05-A10`

### Advanced Cash-Flow Valuation  `D18-F06`

- ⚪ FCFF Valuation  `D18-F06-A01`
- ⚪ FCFE Valuation  `D18-F06-A02`
- ⚪ Adjusted Present Value  `D18-F06-A03`
- ⚪ Mid-Year Discounting Convention  `D18-F06-A04`
- ⚪ Perpetual-Growth Terminal Value  `D18-F06-A05`
- ⚪ Exit-Multiple Terminal Value  `D18-F06-A06`
- ⚪ Reverse DCF  `D18-F06-A07`
- ⚪ Scenario-Weighted DCF  `D18-F06-A08`
- ⚪ Monte Carlo DCF  `D18-F06-A09`
- ⚪ Earnings Power Value  `D18-F06-A10`

### Asset, Segment, and Transaction Valuation  `D18-F07`

- ⚪ Sum-of-the-Parts Valuation  `D18-F07-A01`
- ⚪ Adjusted Net Asset Value  `D18-F07-A02`
- ⚪ Liquidation Value  `D18-F07-A03`
- ⚪ Replacement-Cost Value  `D18-F07-A04`
- ⚪ Precedent-Transaction Valuation  `D18-F07-A05`
- ⚪ M&A Accretion/Dilution  `D18-F07-A06`
- ⚪ Synergy Valuation  `D18-F07-A07`
- ⚪ Leveraged-Buyout Valuation  `D18-F07-A08`
- ⚪ Real-Options Valuation  `D18-F07-A09`

### Valuation Uncertainty and Reconciliation  `D18-F08`

- ⚪ Two-Way Valuation Sensitivity Table  `D18-F08-A01`
- ⚪ Tornado Valuation Sensitivity  `D18-F08-A02`
- ⚪ Fair-Value Range  `D18-F08-A03`
- ⚪ Probability-Weighted Fair Value  `D18-F08-A04`
- ⚪ Margin-of-Safety Calculation  `D18-F08-A05`
- ⚪ Valuation-Method Reconciliation  `D18-F08-A06`
- ⚪ Implied-Expectation Analysis  `D18-F08-A07`
- ⚪ Valuation Confidence Score  `D18-F08-A08`

### Integrated Equity Scoring  `D18-F09`

- ⚪ Point-in-Time Stock-Scoring Input Assembly  `D18-F09-A01`
- ⚪ Stock-Scoring Peer Cohort Resolver  `D18-F09-A02`
- ⚪ Fundamental Metric Direction and Peer Normalization  `D18-F09-A03`
- ⚪ Model Applicability and Variant Router  `D18-F09-A04`
- ⚪ Accounting Financial-Health Composite  `D18-F09-A05`
- ⚪ Earnings-Quality Composite  `D18-F09-A06`
- ⚪ Dividend Safety Score  `D18-F09-A07`
- ⚪ Balance-Sheet Resilience Score  `D18-F09-A08`
- ⚪ Distress-Model Ensemble  `D18-F09-A09`
- ⚪ Cross-Model Conflict and Double-Counting Resolver  `D18-F09-A10`
- ⚪ Overall Explainable Stock Score  `D18-F09-A11`
- ⚪ Score Confidence, Missing-Data Penalty, and Abstention  `D18-F09-A12`
- ⚪ Market-Wide Stock Screening and Ranking  `D18-F09-A13`
- ⚪ Stock Score History, Migration, and Change Attribution  `D18-F09-A14`

### Sector-Specific Equity Scoring  `D18-F10`

- ⚪ Bank Fundamental Score  `D18-F10-A01`
- ⚪ Insurance Fundamental Score  `D18-F10-A02`
- ⚪ REIT Fundamental Score  `D18-F10-A03`
- ⚪ Utility Fundamental Score  `D18-F10-A04`
- ⚪ Early-Stage Liquidity and Runway Score  `D18-F10-A05`
- ⚪ Cyclical and Commodity-Cycle Normalization  `D18-F10-A06`
- ⚪ Holding-Company Look-Through Score  `D18-F10-A07`
- ⚪ Sector-Specific Weight Calibration  `D18-F10-A08`
- ⚪ Unsupported-Scope and Coverage Decision  `D18-F10-A09`

---

## D19 — Financial Statement Intelligence

_Extract, reconstruct, compare, and validate financial statements and their underlying reported facts._

**Domain page:** [thefintechbuilder.com/domains/financial-statement-intelligence/](https://thefintechbuilder.com/domains/financial-statement-intelligence/)  ·  **6** families  ·  **0/37** published  ·  **0/37** on npm

### Taxonomy and Mapping  `D19-F01`

- ⚪ XBRL Concept Mapping  `D19-F01-A01`
- ⚪ Calculation-Linkbase Validation  `D19-F01-A02`
- ⚪ Extension-Taxonomy Resolver  `D19-F01-A03`
- ⚪ Unit/Scale Normalization  `D19-F01-A04`
- ⚪ Fiscal-Period Alignment  `D19-F01-A05`

### Statement Reconstruction  `D19-F02`

- ⚪ Balance-Sheet Equation Check  `D19-F02-A01`
- ⚪ Cash-Flow Roll-Forward  `D19-F02-A02`
- ⚪ Retained-Earnings Bridge  `D19-F02-A03`
- ⚪ Debt-Maturity Reconstruction  `D19-F02-A04`
- ⚪ Shares-Weighted-Average Reconstruction  `D19-F02-A05`

### Filing Change Detection  `D19-F03`

- ⚪ Restatement Detector  `D19-F03-A01`
- ⚪ Filing-Diff Algorithm  `D19-F03-A02`
- ⚪ Footnote Change Detector  `D19-F03-A03`
- ⚪ Accounting-Policy Change Classifier  `D19-F03-A04`
- ⚪ Late-Filing Anomaly Score  `D19-F03-A05`

### Accounting Anomalies  `D19-F04`

- ⚪ Revenue-Cash Mismatch  `D19-F04-A01`
- ⚪ Working-Capital Anomaly  `D19-F04-A02`
- ⚪ Related-Party Transaction Detector  `D19-F04-A03`
- ⚪ Round-Number Anomaly  `D19-F04-A04`
- ⚪ Benford-Law Screening  `D19-F04-A05`

### Periodization and Normalization  `D19-F05`

- ⚪ Year-to-Date Quarterization  `D19-F05-A01`
- ⚪ Trailing-Twelve-Month Construction  `D19-F05-A02`
- ⚪ Last-Twelve-Month Construction  `D19-F05-A03`
- ⚪ Fiscal-Year Calendarization  `D19-F05-A04`
- ⚪ Constant-Currency Restatement  `D19-F05-A05`
- ⚪ Hyperinflation Adjustment  `D19-F05-A06`
- ⚪ Discontinued-Operation Reclassification  `D19-F05-A07`
- ⚪ Segment Recast  `D19-F05-A08`
- ⚪ Accounting-Standard Mapping  `D19-F05-A09`

### Fundamental Schedules and Footnotes  `D19-F06`

- ⚪ Lease Schedule Reconstruction  `D19-F06-A01`
- ⚪ Pension Schedule Reconstruction  `D19-F06-A02`
- ⚪ Deferred-Tax Bridge  `D19-F06-A03`
- ⚪ Stock-Based-Compensation Schedule  `D19-F06-A04`
- ⚪ Goodwill and Impairment Roll-Forward  `D19-F06-A05`
- ⚪ Non-Controlling-Interest Bridge  `D19-F06-A06`
- ⚪ Capitalized-Development-Cost Adjustment  `D19-F06-A07`
- ⚪ Provisions and Contingencies Extraction  `D19-F06-A08`

---

# Instruments, Credit, and Specialized Finance

## D20 — Fixed Income and Interest Rates

_Price fixed-income cash flows, measure rate sensitivity, construct curves, and model interest-rate dynamics._

**Domain page:** [thefintechbuilder.com/domains/fixed-income-and-interest-rates/](https://thefintechbuilder.com/domains/fixed-income-and-interest-rates/)  ·  **5** families  ·  **0/25** published  ·  **0/25** on npm

### Bond Cash Flows and Yields  `D20-F01`

- ⚪ Accrued-Interest Calculation  `D20-F01-A01`
- ⚪ Clean/Dirty Price Conversion  `D20-F01-A02`
- ⚪ Yield-to-Maturity Solver  `D20-F01-A03`
- ⚪ Yield-to-Call Solver  `D20-F01-A04`
- ⚪ Money-Market Yield Conversion  `D20-F01-A05`

### Sensitivity  `D20-F02`

- ⚪ Macaulay Duration  `D20-F02-A01`
- ⚪ Modified Duration  `D20-F02-A02`
- ⚪ Effective Duration  `D20-F02-A03`
- ⚪ Key-Rate Duration  `D20-F02-A04`
- ⚪ Convexity  `D20-F02-A05`

### Curve Construction  `D20-F03`

- ⚪ Discount-Factor Bootstrapping  `D20-F03-A01`
- ⚪ Par-to-Spot Curve  `D20-F03-A02`
- ⚪ Forward-Rate Curve  `D20-F03-A03`
- ⚪ Nelson-Siegel Curve  `D20-F03-A04`
- ⚪ Nelson-Siegel-Svensson Curve  `D20-F03-A05`
- ⚪ Monotone-Convex Interpolation  `D20-F03-A06`

### Rate Models  `D20-F04`

- ⚪ Vasicek Model  `D20-F04-A01`
- ⚪ Cox-Ingersoll-Ross Model  `D20-F04-A02`
- ⚪ Hull-White Model  `D20-F04-A03`
- ⚪ Heath-Jarrow-Morton Model  `D20-F04-A04`
- ⚪ LIBOR Market Model  `D20-F04-A05`

### Credit-Spread Analysis  `D20-F05`

- ⚪ Z-Spread  `D20-F05-A01`
- ⚪ Option-Adjusted Spread  `D20-F05-A02`
- ⚪ Asset-Swap Spread  `D20-F05-A03`
- ⚪ Spread-Duration Calculation  `D20-F05-A04`

---

## D21 — Credit Risk and Default

_Estimate default probability, loss severity, exposure, migration, expected credit loss, and concentration risk._

**Domain page:** [thefintechbuilder.com/domains/credit-risk-and-default/](https://thefintechbuilder.com/domains/credit-risk-and-default/)  ·  **5** families  ·  **0/27** published  ·  **0/27** on npm

### Probability of Default  `D21-F01`

- ⚪ Logistic PD Model  `D21-F01-A01`
- ⚪ Probit PD Model  `D21-F01-A02`
- ⚪ Through-the-Cycle PD  `D21-F01-A03`
- ⚪ Point-in-Time PD  `D21-F01-A04`
- ⚪ Merton Distance-to-Default  `D21-F01-A05`
- ⚪ Campbell-Hilscher-Szilagyi Distress Probability  `D21-F01-A06`
- ⚪ Bharath-Shumway Naive Distance-to-Default  `D21-F01-A07`

### Loss and Exposure  `D21-F02`

- ⚪ Workout LGD  `D21-F02-A01`
- ⚪ Market-Implied LGD  `D21-F02-A02`
- ⚪ Credit Conversion Factor  `D21-F02-A03`
- ⚪ Exposure at Default  `D21-F02-A04`
- ⚪ Effective Maturity  `D21-F02-A05`

### IFRS 9 Expected Loss  `D21-F03`

- ⚪ 12-Month ECL  `D21-F03-A01`
- ⚪ Lifetime ECL  `D21-F03-A02`
- ⚪ Significant Increase in Credit Risk  `D21-F03-A03`
- ⚪ Stage Migration  `D21-F03-A04`
- ⚪ Probability-Weighted Scenario ECL  `D21-F03-A05`
- ⚪ Macroeconomic Overlay  `D21-F03-A06`

### Rating and Migration  `D21-F04`

- ⚪ Credit Transition Matrix  `D21-F04-A01`
- ⚪ Cohort Migration Estimator  `D21-F04-A02`
- ⚪ Hazard-Rate Default Model  `D21-F04-A03`
- ⚪ Survival Credit Model  `D21-F04-A04`
- ⚪ CreditMetrics Portfolio Loss  `D21-F04-A05`

### Concentration  `D21-F05`

- ⚪ Single-Name Concentration  `D21-F05-A01`
- ⚪ Sector Concentration  `D21-F05-A02`
- ⚪ Granularity Adjustment  `D21-F05-A03`
- ⚪ Credit-VaR Simulation  `D21-F05-A04`

---

## D22 — Derivatives and Options

_Price nonlinear claims, infer volatility, calculate sensitivities, and simulate hedging decisions._

**Domain page:** [thefintechbuilder.com/domains/derivatives-and-options/](https://thefintechbuilder.com/domains/derivatives-and-options/)  ·  **5** families  ·  **0/24** published  ·  **0/24** on npm

### Lattice Pricing  `D22-F01`

- ⚪ Cox-Ross-Rubinstein Binomial Tree  `D22-F01-A01`
- ⚪ Jarrow-Rudd Binomial Tree  `D22-F01-A02`
- ⚪ Trinomial Tree  `D22-F01-A03`
- ⚪ American Early-Exercise Tree  `D22-F01-A04`

### Closed-Form Pricing  `D22-F02`

- ⚪ Black-Scholes-Merton  `D22-F02-A01`
- ⚪ Black-76  `D22-F02-A02`
- ⚪ Garman-Kohlhagen FX Option  `D22-F02-A03`
- ⚪ Margrabe Exchange Option  `D22-F02-A04`

### Numerical Pricing  `D22-F03`

- ⚪ Monte Carlo Option Pricing  `D22-F03-A01`
- ⚪ Longstaff-Schwartz Least-Squares Monte Carlo  `D22-F03-A02`
- ⚪ Finite-Difference Explicit Scheme  `D22-F03-A03`
- ⚪ Crank-Nicolson Scheme  `D22-F03-A04`
- ⚪ Fourier COS Pricing  `D22-F03-A05`

### Volatility Models  `D22-F04`

- ⚪ Implied-Volatility Root Solver  `D22-F04-A01`
- ⚪ Heston Model  `D22-F04-A02`
- ⚪ SABR Model  `D22-F04-A03`
- ⚪ Dupire Local Volatility  `D22-F04-A04`
- ⚪ SVI Volatility Surface  `D22-F04-A05`

### Greeks and Hedging  `D22-F05`

- ⚪ Delta  `D22-F05-A01`
- ⚪ Gamma  `D22-F05-A02`
- ⚪ Vega  `D22-F05-A03`
- ⚪ Theta  `D22-F05-A04`
- ⚪ Rho  `D22-F05-A05`
- ⚪ Delta-Hedging Simulation  `D22-F05-A06`

---

## D23 — Commodities and Futures

_Model futures rolls, term structures, commodity benchmarks, inventories, and recurring seasonal effects._

**Domain page:** [thefintechbuilder.com/domains/commodities-and-futures/](https://thefintechbuilder.com/domains/commodities-and-futures/)  ·  **4** families  ·  **0/18** published  ·  **0/18** on npm

### Continuous Contracts  `D23-F01`

- ⚪ Panama Back-Adjustment  `D23-F01-A01`
- ⚪ Ratio Back-Adjustment  `D23-F01-A02`
- ⚪ Calendar-Weighted Roll  `D23-F01-A03`
- ⚪ Volume/Open-Interest Roll Trigger  `D23-F01-A04`

### Curve Analytics  `D23-F02`

- ⚪ Contango/Backwardation Classifier  `D23-F02-A01`
- ⚪ Roll-Yield Calculation  `D23-F02-A02`
- ⚪ Calendar-Spread Signal  `D23-F02-A03`
- ⚪ Convenience-Yield Estimate  `D23-F02-A04`
- ⚪ Futures Basis  `D23-F02-A05`

### Commodity Indices  `D23-F03`

- ⚪ Production-Weighted Commodity Index  `D23-F03-A01`
- ⚪ Liquidity-Weighted Commodity Index  `D23-F03-A02`
- ⚪ Contract-Selection Rule  `D23-F03-A03`
- ⚪ Scheduled Roll Algorithm  `D23-F03-A04`
- ⚪ Commodity Excess-Return Index  `D23-F03-A05`

### Seasonality  `D23-F04`

- ⚪ Seasonal Decomposition  `D23-F04-A01`
- ⚪ Crop-Year Alignment  `D23-F04-A02`
- ⚪ Inventory Surprise Model  `D23-F04-A03`
- ⚪ Weather-Normalized Demand  `D23-F04-A04`

---

## D24 — Foreign Exchange

_Calculate currency prices, forwards, carry, hedge ratios, and multi-currency risk exposures._

**Domain page:** [thefintechbuilder.com/domains/foreign-exchange/](https://thefintechbuilder.com/domains/foreign-exchange/)  ·  **4** families  ·  **0/17** published  ·  **0/17** on npm

### Spot and Crosses  `D24-F01`

- ⚪ Direct/Indirect Quote Conversion  `D24-F01-A01`
- ⚪ Cross-Rate Triangulation  `D24-F01-A02`
- ⚪ Triangular-Arbitrage Detector  `D24-F01-A03`
- ⚪ Pip-Value Calculation  `D24-F01-A04`

### Forwards and Carry  `D24-F02`

- ⚪ Covered-Interest-Parity Forward  `D24-F02-A01`
- ⚪ Forward-Points Calculation  `D24-F02-A02`
- ⚪ FX Carry Signal  `D24-F02-A03`
- ⚪ Non-Deliverable Forward Fixing  `D24-F02-A04`

### Equilibrium and Hedging  `D24-F03`

- ⚪ Purchasing-Power-Parity Gap  `D24-F03-A01`
- ⚪ Real-Effective-Exchange-Rate Index  `D24-F03-A02`
- ⚪ Minimum-Variance FX Hedge Ratio  `D24-F03-A03`
- ⚪ Rolling Currency Hedge  `D24-F03-A04`
- ⚪ Hedge-Roll Return  `D24-F03-A05`

### FX Risk  `D24-F04`

- ⚪ Currency VaR  `D24-F04-A01`
- ⚪ FX Delta Aggregation  `D24-F04-A02`
- ⚪ Translation-Exposure Attribution  `D24-F04-A03`
- ⚪ Settlement-Risk Exposure  `D24-F04-A04`

---

## D25 — Digital Assets and On-Chain Finance

_Build and analyze automated market makers, liquidations, price oracles, blockchain integrity, consensus, transaction execution, scaling, custody, on-chain activity, and token benchmarks._

**Domain page:** [thefintechbuilder.com/domains/digital-assets-and-on-chain-finance/](https://thefintechbuilder.com/domains/digital-assets-and-on-chain-finance/)  ·  **10** families  ·  **0/57** published  ·  **10/57** on npm

### AMM Pricing  `D25-F01`

- ⚪ Constant-Product AMM — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/digital-assets-and-on-chain-finance/amm-pricing/constant-product-amm")  `D25-F01-A01`
- ⚪ Constant-Sum AMM — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/digital-assets-and-on-chain-finance/amm-pricing/constant-sum-amm")  `D25-F01-A02`
- ⚪ StableSwap Invariant — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/digital-assets-and-on-chain-finance/amm-pricing/stableswap-invariant")  `D25-F01-A03`
- ⚪ Weighted-Product AMM — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/digital-assets-and-on-chain-finance/amm-pricing/weighted-product-amm")  `D25-F01-A04`
- ⚪ Concentrated-Liquidity Position — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/digital-assets-and-on-chain-finance/amm-pricing/concentrated-liquidity-position")  `D25-F01-A05`

### Liquidity and Liquidation  `D25-F02`

- ⚪ Impermanent-Loss Calculation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/digital-assets-and-on-chain-finance/liquidity-and-liquidation/impermanent-loss-calculation")  `D25-F02-A01`
- ⚪ Liquidity-Provider Fee APR — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/digital-assets-and-on-chain-finance/liquidity-and-liquidation/liquidity-provider-fee-apr")  `D25-F02-A02`
- ⚪ Collateral-Health Factor — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/digital-assets-and-on-chain-finance/liquidity-and-liquidation/collateral-health-factor")  `D25-F02-A03`
- ⚪ Liquidation-Price Calculation — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/digital-assets-and-on-chain-finance/liquidity-and-liquidation/liquidation-price-calculation")  `D25-F02-A04`
- ⚪ Liquidation Waterfall — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/digital-assets-and-on-chain-finance/liquidity-and-liquidation/liquidation-waterfall")  `D25-F02-A05`

### Oracle Integrity  `D25-F03`

- ⚪ Median Price Oracle  `D25-F03-A01`
- ⚪ Time-Weighted Oracle Price  `D25-F03-A02`
- ⚪ Volume-Weighted Oracle Price  `D25-F03-A03`
- ⚪ Outlier-Resistant Oracle Aggregation  `D25-F03-A04`
- ⚪ Oracle Staleness Guard  `D25-F03-A05`

### On-Chain Analytics  `D25-F04`

- ⚪ Address Clustering  `D25-F04-A01`
- ⚪ UTXO Coin-Age Analysis  `D25-F04-A02`
- ⚪ Realized-Cap Calculation  `D25-F04-A03`
- ⚪ Exchange-Flow Detection  `D25-F04-A04`
- ⚪ Wallet-Entity Graph  `D25-F04-A05`

### Token Indices  `D25-F05`

- ⚪ Circulating-Market-Cap Index  `D25-F05-A01`
- ⚪ Free-Float Token Index  `D25-F05-A02`
- ⚪ Liquidity-Capped Token Index  `D25-F05-A03`
- ⚪ Rebalance and Custody Screen  `D25-F05-A04`

### Blockchain Integrity and Proofs  `D25-F06`

- ⚪ Cryptographic Hash-Chained Record Log  `D25-F06-A01`
- ⚪ Merkle-Root Construction  `D25-F06-A02`
- ⚪ Merkle Inclusion Proof  `D25-F06-A03`
- ⚪ Append-Only Consistency Proof  `D25-F06-A04`
- ⚪ Signed Checkpoint and External Anchoring  `D25-F06-A05`
- ⚪ Trusted Timestamp Proof  `D25-F06-A06`

### Consensus and Finality  `D25-F07`

- ⚪ Proof-of-Work Chain Selection  `D25-F07-A01`
- ⚪ Proof-of-Stake Validator Selection  `D25-F07-A02`
- ⚪ Byzantine-Fault-Tolerant Quorum  `D25-F07-A03`
- ⚪ Fork-Choice Rule  `D25-F07-A04`
- ⚪ Confirmation Depth and Reorganization Risk  `D25-F07-A05`
- ⚪ Slashing and Equivocation Detection  `D25-F07-A06`
- ⚪ Validator Committee Sampling and Rotation  `D25-F07-A07`

### Transactions and Smart-Contract Execution  `D25-F08`

- ⚪ Transaction Signature Verification  `D25-F08-A01`
- ⚪ Nonce and Replay Protection  `D25-F08-A02`
- ⚪ Mempool Ordering and Fee Selection  `D25-F08-A03`
- ⚪ Block Transaction Ordering  `D25-F08-A04`
- ⚪ Deterministic State-Transition Validation  `D25-F08-A05`
- ⚪ Gas Metering and Fee-Market Calculation  `D25-F08-A06`
- ⚪ Smart-Contract Invariant Checking  `D25-F08-A07`

### Scaling and Interoperability  `D25-F09`

- ⚪ Payment-Channel State Update  `D25-F09-A01`
- ⚪ Optimistic-Rollup Challenge Verification  `D25-F09-A02`
- ⚪ Zero-Knowledge Rollup Proof Verification  `D25-F09-A03`
- ⚪ Data-Availability Sampling  `D25-F09-A04`
- ⚪ Cross-Chain Message Verification  `D25-F09-A05`
- ⚪ Bridge Finality-Risk Calculation  `D25-F09-A06`
- ⚪ Sequencer Ordering and Censorship Detection  `D25-F09-A07`

### Custody and Cryptographic Control  `D25-F10`

- ⚪ Hierarchical Deterministic Key Derivation  `D25-F10-A01`
- ⚪ Multisignature Authorization  `D25-F10-A02`
- ⚪ Threshold/MPC Signing  `D25-F10-A03`
- ⚪ Key Rotation and Recovery  `D25-F10-A04`
- ⚪ Merkle Proof of Reserves  `D25-F10-A05`
- ⚪ Custody and Withdrawal Policy Engine  `D25-F10-A06`

---

## D26 — Islamic Finance and Sharia Screening

_Apply Sharia screening and model compliant investment, financing, Sukuk, Takaful, purification, and Zakat calculations._

**Domain page:** [thefintechbuilder.com/domains/islamic-finance-and-sharia-screening/](https://thefintechbuilder.com/domains/islamic-finance-and-sharia-screening/)  ·  **5** families  ·  **0/23** published  ·  **0/23** on npm

### Equity Screening  `D26-F01`

- ⚪ Business-Activity Screen  `D26-F01-A01`
- ⚪ Interest-Bearing Debt Ratio Screen  `D26-F01-A02`
- ⚪ Interest-Bearing Securities Ratio Screen  `D26-F01-A03`
- ⚪ Non-Permissible Income Ratio Screen  `D26-F01-A04`
- ⚪ Receivables/Cash Ratio Screen  `D26-F01-A05`

### Purification and Charity  `D26-F02`

- ⚪ Dividend Purification Amount  `D26-F02-A01`
- ⚪ Capital-Gain Purification  `D26-F02-A02`
- ⚪ Zakat on Trading Assets  `D26-F02-A03`
- ⚪ Zakat on Long-Term Investments  `D26-F02-A04`

### Financing Schedules  `D26-F03`

- ⚪ Murabaha Profit Schedule  `D26-F03-A01`
- ⚪ Diminishing Musharakah Schedule  `D26-F03-A02`
- ⚪ Ijara Rental Schedule  `D26-F03-A03`
- ⚪ Salam Cash-Flow Schedule  `D26-F03-A04`
- ⚪ Istisna Milestone Schedule  `D26-F03-A05`

### Sukuk and Takaful  `D26-F04`

- ⚪ Sukuk Cash-Flow Waterfall  `D26-F04-A01`
- ⚪ Sukuk Yield Calculation  `D26-F04-A02`
- ⚪ Asset-Backing Coverage  `D26-F04-A03`
- ⚪ Takaful Surplus Allocation  `D26-F04-A04`
- ⚪ Qard Deficit Recovery  `D26-F04-A05`

### Sharia Indices  `D26-F05`

- ⚪ Sharia Eligibility Engine  `D26-F05-A01`
- ⚪ Sharia-Compliant Free-Float Index  `D26-F05-A02`
- ⚪ Sharia Rebalancing Rule  `D26-F05-A03`
- ⚪ Compliance-Breach Exit Rule  `D26-F05-A04`

---

# FinTech Products and Financial Operations

## D27 — Lending and Underwriting

_Assess borrowers, affordability, pricing, credit limits, repayment behavior, collections, and loan lifetime value._

**Domain page:** [thefintechbuilder.com/domains/lending-and-underwriting/](https://thefintechbuilder.com/domains/lending-and-underwriting/)  ·  **5** families  ·  **0/24** published  ·  **0/24** on npm

### Application Scoring  `D27-F01`

- ⚪ Logistic Application Scorecard  `D27-F01-A01`
- ⚪ Weight-of-Evidence Binning  `D27-F01-A02`
- ⚪ Information-Value Selection  `D27-F01-A03`
- ⚪ Thin-File Score  `D27-F01-A04`
- ⚪ Bureau-Score Blending  `D27-F01-A05`

### Affordability and Capacity  `D27-F02`

- ⚪ Debt-to-Income Ratio  `D27-F02-A01`
- ⚪ Disposable-Income Estimate  `D27-F02-A02`
- ⚪ Bank-Statement Cash-Flow Underwriting  `D27-F02-A03`
- ⚪ Income-Stability Score  `D27-F02-A04`
- ⚪ Payment-Shock Test  `D27-F02-A05`

### Pricing and Limits  `D27-F03`

- ⚪ Risk-Based APR Pricing  `D27-F03-A01`
- ⚪ Expected-Loss Price Floor  `D27-F03-A02`
- ⚪ Credit-Limit Assignment  `D27-F03-A03`
- ⚪ Line-Increase Decision  `D27-F03-A04`
- ⚪ Loan-to-Value Limit  `D27-F03-A05`

### Behavior and Collections  `D27-F04`

- ⚪ Behavioral Score  `D27-F04-A01`
- ⚪ Delinquency Roll-Rate Model  `D27-F04-A02`
- ⚪ Cure-Rate Model  `D27-F04-A03`
- ⚪ Collections Prioritization  `D27-F04-A04`
- ⚪ Promise-to-Pay Propensity  `D27-F04-A05`

### Prepayment and Lifetime  `D27-F05`

- ⚪ Conditional Prepayment Rate  `D27-F05-A01`
- ⚪ Survival Prepayment Model  `D27-F05-A02`
- ⚪ Loan-Lifetime Value  `D27-F05-A03`
- ⚪ Early-Payoff Forecast  `D27-F05-A04`

---

## D28 — Payments and Money Movement

_Authorize, route, recover, price, settle, and reconcile digital payments and money movement._

**Domain page:** [thefintechbuilder.com/domains/payments-and-money-movement/](https://thefintechbuilder.com/domains/payments-and-money-movement/)  ·  **5** families  ·  **0/25** published  ·  **0/25** on npm

### Authorization  `D28-F01`

- ⚪ Balance/Limit Authorization  `D28-F01-A01`
- ⚪ Offline/Stand-In Authorization  `D28-F01-A02`
- ⚪ Incremental Authorization  `D28-F01-A03`
- ⚪ Partial Authorization  `D28-F01-A04`
- ⚪ Velocity-Based Authorization  `D28-F01-A05`

### Routing  `D28-F02`

- ⚪ Lowest-Cost Payment Router  `D28-F02-A01`
- ⚪ Approval-Rate Router  `D28-F02-A02`
- ⚪ Smart Acquirer Routing  `D28-F02-A03`
- ⚪ Network-Availability Failover  `D28-F02-A04`
- ⚪ Cross-Border FX Router  `D28-F02-A05`

### Retry and Recovery  `D28-F03`

- ⚪ Exponential-Backoff Retry  `D28-F03-A01`
- ⚪ Smart Dunning Schedule  `D28-F03-A02`
- ⚪ Soft/Hard Decline Classifier  `D28-F03-A03`
- ⚪ Account-Updater Match  `D28-F03-A04`
- ⚪ Idempotent Payment Deduplication  `D28-F03-A05`

### Fees and Settlement  `D28-F04`

- ⚪ Interchange Fee Calculation  `D28-F04-A01`
- ⚪ Merchant Discount Rate  `D28-F04-A02`
- ⚪ Multi-Party Fee Split  `D28-F04-A03`
- ⚪ Settlement-Netting Algorithm  `D28-F04-A04`
- ⚪ Reserve/Holdback Calculation  `D28-F04-A05`

### Reconciliation  `D28-F05`

- ⚪ Three-Way Payment Reconciliation  `D28-F05-A01`
- ⚪ Tolerance-Based Amount Match  `D28-F05-A02`
- ⚪ Many-to-One Settlement Match  `D28-F05-A03`
- ⚪ Unmatched-Item Aging  `D28-F05-A04`
- ⚪ Chargeback Lifecycle Match  `D28-F05-A05`

---

## D29 — Fraud, AML, and Financial Crime

_Detect suspicious transactions, coordinated networks, sanctions matches, and account-takeover behavior._

**Domain page:** [thefintechbuilder.com/domains/fraud-aml-and-financial-crime/](https://thefintechbuilder.com/domains/fraud-aml-and-financial-crime/)  ·  **6** families  ·  **0/31** published  ·  **0/31** on npm

### Transaction Rules  `D29-F01`

- ⚪ Velocity Rule  `D29-F01-A01`
- ⚪ Amount-Deviation Rule  `D29-F01-A02`
- ⚪ Impossible-Travel Rule  `D29-F01-A03`
- ⚪ Merchant-Category Risk Rule  `D29-F01-A04`
- ⚪ Card-Testing Detector  `D29-F01-A05`

### Anomaly Models  `D29-F02`

- ⚪ Isolation Forest Fraud Score  `D29-F02-A01`
- ⚪ One-Class SVM Fraud Score  `D29-F02-A02`
- ⚪ Autoencoder Reconstruction Anomaly  `D29-F02-A03`
- ⚪ Peer-Group Anomaly  `D29-F02-A04`
- ⚪ Sequence-Anomaly Detector  `D29-F02-A05`

### Graph Fraud  `D29-F03`

- ⚪ Shared-Device Network  `D29-F03-A01`
- ⚪ Mule-Account Ring Detection  `D29-F03-A02`
- ⚪ Community-Detection Fraud Ring  `D29-F03-A03`
- ⚪ Graph Centrality Risk Score  `D29-F03-A04`
- ⚪ Subgraph Pattern Match  `D29-F03-A05`

### AML Monitoring  `D29-F04`

- ⚪ Structuring/Smurfing Detector  `D29-F04-A01`
- ⚪ Rapid-Movement Detector  `D29-F04-A02`
- ⚪ Circular-Funds Detector  `D29-F04-A03`
- ⚪ Pass-Through Account Score  `D29-F04-A04`
- ⚪ Customer-Risk Rating  `D29-F04-A05`
- ⚪ Alert-Risk Prioritization  `D29-F04-A06`

### Screening  `D29-F05`

- ⚪ Levenshtein Name Match  `D29-F05-A01`
- ⚪ Jaro-Winkler Name Match  `D29-F05-A02`
- ⚪ Tokenized Alias Match  `D29-F05-A03`
- ⚪ Transliteration-Aware Match  `D29-F05-A04`
- ⚪ Beneficial-Owner Network Match  `D29-F05-A05`

### Account Takeover  `D29-F06`

- ⚪ Device-Fingerprint Risk  `D29-F06-A01`
- ⚪ Session-Behavior Deviation  `D29-F06-A02`
- ⚪ Credential-Stuffing Detector  `D29-F06-A03`
- ⚪ SIM-Swap Risk  `D29-F06-A04`
- ⚪ Adaptive Step-Up Trigger  `D29-F06-A05`

---

## D30 — Banking Ledger and Reconciliation

_Maintain correct balances through controlled posting, accrual, reconciliation, and financial close processes._

**Domain page:** [thefintechbuilder.com/domains/banking-ledger-and-reconciliation/](https://thefintechbuilder.com/domains/banking-ledger-and-reconciliation/)  ·  **5** families  ·  **0/28** published  ·  **0/28** on npm

### Ledger Posting  `D30-F01`

- ⚪ Double-Entry Posting Engine  `D30-F01-A01`
- ⚪ Idempotent Journal Posting  `D30-F01-A02`
- ⚪ Event-Sourced Balance Fold  `D30-F01-A03`
- ⚪ Available/Ledger Balance Calculation  `D30-F01-A04`
- ⚪ Pending-Transaction Reservation  `D30-F01-A05`

### Interest and Fees  `D30-F02`

- ⚪ Daily Simple Interest Accrual  `D30-F02-A01`
- ⚪ Compound Interest Accrual  `D30-F02-A02`
- ⚪ Average-Daily-Balance Interest  `D30-F02-A03`
- ⚪ Tiered Fee Calculation  `D30-F02-A04`
- ⚪ Minimum-Balance Fee  `D30-F02-A05`

### Reconciliation  `D30-F03`

- ⚪ Exact Reference Match  `D30-F03-A01`
- ⚪ Fuzzy Transaction Match  `D30-F03-A02`
- ⚪ Many-to-Many Reconciliation  `D30-F03-A03`
- ⚪ Suspense-Account Resolution  `D30-F03-A04`
- ⚪ Balance-Proof Algorithm  `D30-F03-A05`

### Period Close  `D30-F04`

- ⚪ Accrual/Reversal Scheduler  `D30-F04-A01`
- ⚪ Trial-Balance Validation  `D30-F04-A02`
- ⚪ Intercompany Elimination  `D30-F04-A03`
- ⚪ FX Revaluation Posting  `D30-F04-A04`
- ⚪ Period-Lock Control  `D30-F04-A05`

### Tamper-Evident Ledger Integrity  `D30-F05`

- ⚪ Append-Only Journal Enforcement  `D30-F05-A01`
- ⚪ Correcting and Reversing Entry Algorithm  `D30-F05-A02`
- ⚪ Bitemporal Ledger Versioning  `D30-F05-A03`
- ⚪ Hash-Chained Journal  `D30-F05-A04`
- ⚪ Merkle-Batched Journal Commitment  `D30-F05-A05`
- ⚪ Signed Ledger Checkpoint  `D30-F05-A06`
- ⚪ External WORM/Blockchain Anchor  `D30-F05-A07`
- ⚪ End-to-End Ledger Integrity Verification  `D30-F05-A08`

---

## D31 — Treasury, Liquidity, and Asset-Liability Management

_Forecast liquidity, measure funding and interest-rate risk, and allocate balance-sheet funding costs._

**Domain page:** [thefintechbuilder.com/domains/treasury-liquidity-and-asset-liability-management/](https://thefintechbuilder.com/domains/treasury-liquidity-and-asset-liability-management/)  ·  **4** families  ·  **0/20** published  ·  **0/20** on npm

### Cash and Liquidity Forecasting  `D31-F01`

- ⚪ Deterministic Cash Ladder  `D31-F01-A01`
- ⚪ Probabilistic Cash-Flow Forecast  `D31-F01-A02`
- ⚪ Intraday Liquidity Forecast  `D31-F01-A03`
- ⚪ Payment-Queue Liquidity Optimizer  `D31-F01-A04`
- ⚪ Liquidity Buffer Sizing  `D31-F01-A05`

### Regulatory Liquidity  `D31-F02`

- ⚪ Liquidity Coverage Ratio  `D31-F02-A01`
- ⚪ Net Stable Funding Ratio  `D31-F02-A02`
- ⚪ High-Quality Liquid Asset Classification  `D31-F02-A03`
- ⚪ Deposit Run-Off Calculation  `D31-F02-A04`
- ⚪ Liquidity Stress Ladder  `D31-F02-A05`

### Interest-Rate Risk  `D31-F03`

- ⚪ Repricing Gap  `D31-F03-A01`
- ⚪ Earnings-at-Risk  `D31-F03-A02`
- ⚪ Economic Value of Equity  `D31-F03-A03`
- ⚪ Deposit Beta  `D31-F03-A04`
- ⚪ Non-Maturity Deposit Decay  `D31-F03-A05`

### Funds-Transfer Pricing  `D31-F04`

- ⚪ Matched-Maturity FTP  `D31-F04-A01`
- ⚪ Pooled FTP  `D31-F04-A02`
- ⚪ Liquidity-Premium Allocation  `D31-F04-A03`
- ⚪ Optionality Cost Allocation  `D31-F04-A04`
- ⚪ FTP Curve Construction  `D31-F04-A05`

---

## D32 — Insurance and Actuarial Science

_Model insurance claims, premiums, reserves, credibility, survival, and catastrophe exposure._

**Domain page:** [thefintechbuilder.com/domains/insurance-and-actuarial-science/](https://thefintechbuilder.com/domains/insurance-and-actuarial-science/)  ·  **4** families  ·  **0/20** published  ·  **0/20** on npm

### Frequency and Severity  `D32-F01`

- ⚪ Poisson Claim Frequency  `D32-F01-A01`
- ⚪ Negative-Binomial Frequency  `D32-F01-A02`
- ⚪ Gamma Severity  `D32-F01-A03`
- ⚪ Lognormal Severity  `D32-F01-A04`
- ⚪ Compound-Poisson Aggregate Loss  `D32-F01-A05`

### Reserving  `D32-F02`

- ⚪ Chain-Ladder Reserve  `D32-F02-A01`
- ⚪ Bornhuetter-Ferguson Reserve  `D32-F02-A02`
- ⚪ Cape Cod Reserve  `D32-F02-A03`
- ⚪ Mack Stochastic Chain Ladder  `D32-F02-A04`
- ⚪ Loss-Development-Factor Selection  `D32-F02-A05`

### Credibility and Pricing  `D32-F03`

- ⚪ Bühlmann Credibility  `D32-F03-A01`
- ⚪ Bühlmann-Straub Credibility  `D32-F03-A02`
- ⚪ Generalized Linear Premium Model  `D32-F03-A03`
- ⚪ Experience Rating  `D32-F03-A04`
- ⚪ Bonus-Malus System  `D32-F03-A05`

### Survival and Catastrophe  `D32-F04`

- ⚪ Kaplan-Meier Survival  `D32-F04-A01`
- ⚪ Cox Proportional Hazards  `D32-F04-A02`
- ⚪ Life-Table Expectation  `D32-F04-A03`
- ⚪ Catastrophe Event Simulation  `D32-F04-A04`
- ⚪ Aggregate Exceedance Probability  `D32-F04-A05`

---

## D33 — Wealth and Robo-Advice

_Translate client goals, preferences, capacity, and constraints into suitable, continuously managed portfolios._

**Domain page:** [thefintechbuilder.com/domains/wealth-and-robo-advice/](https://thefintechbuilder.com/domains/wealth-and-robo-advice/)  ·  **4** families  ·  **0/20** published  ·  **0/20** on npm

### Profiling and Suitability  `D33-F01`

- ⚪ Risk-Tolerance Score  `D33-F01-A01`
- ⚪ Risk-Capacity Score  `D33-F01-A02`
- ⚪ Suitability Constraint Engine  `D33-F01-A03`
- ⚪ Investment-Horizon Classifier  `D33-F01-A04`
- ⚪ Loss-Aversion Adjustment  `D33-F01-A05`

### Goal Planning  `D33-F02`

- ⚪ Goal-Funding Monte Carlo  `D33-F02-A01`
- ⚪ Required-Savings Solver  `D33-F02-A02`
- ⚪ Safe-Withdrawal Simulation  `D33-F02-A03`
- ⚪ Retirement Glide Path  `D33-F02-A04`
- ⚪ Liability-Driven Goal Allocation  `D33-F02-A05`

### Rebalancing  `D33-F03`

- ⚪ Calendar Rebalancing  `D33-F03-A01`
- ⚪ Threshold Rebalancing  `D33-F03-A02`
- ⚪ Cash-Flow Rebalancing  `D33-F03-A03`
- ⚪ Tax-Aware Rebalancing  `D33-F03-A04`
- ⚪ Minimum-Trade Rebalancing  `D33-F03-A05`

### Personalization  `D33-F04`

- ⚪ Direct-Index Personalization  `D33-F04-A01`
- ⚪ Restricted-Security Substitution  `D33-F04-A02`
- ⚪ ESG Preference Matching  `D33-F04-A03`
- ⚪ Goal-Priority Optimization  `D33-F04-A04`
- ⚪ Household Asset-Location  `D33-F04-A05`

---

## D34 — Tax-Lot and Accounting Optimization

_Choose tax lots and realization strategies that improve after-tax outcomes while respecting accounting rules._

**Domain page:** [thefintechbuilder.com/domains/tax-lot-and-accounting-optimization/](https://thefintechbuilder.com/domains/tax-lot-and-accounting-optimization/)  ·  **3** families  ·  **0/15** published  ·  **0/15** on npm

### Cost Basis  `D34-F01`

- ⚪ FIFO Lot Selection  `D34-F01-A01`
- ⚪ LIFO Lot Selection  `D34-F01-A02`
- ⚪ Highest-Cost Lot Selection  `D34-F01-A03`
- ⚪ Specific-Lot Matching  `D34-F01-A04`
- ⚪ Average-Cost Basis  `D34-F01-A05`

### Harvesting  `D34-F02`

- ⚪ Tax-Loss Harvesting  `D34-F02-A01`
- ⚪ Tax-Gain Harvesting  `D34-F02-A02`
- ⚪ Wash-Sale Detection  `D34-F02-A03`
- ⚪ Substantially-Identical Replacement Guard  `D34-F02-A04`
- ⚪ Harvest-Benefit Threshold  `D34-F02-A05`

### Tax-Aware Optimization  `D34-F03`

- ⚪ After-Tax Return  `D34-F03-A01`
- ⚪ Tax-Alpha Attribution  `D34-F03-A02`
- ⚪ Lot-Level Rebalancing Optimization  `D34-F03-A03`
- ⚪ Withdrawal-Order Optimization  `D34-F03-A04`
- ⚪ Asset-Location Optimization  `D34-F03-A05`

---

## D35 — Financial NLP and Document Intelligence

_Extract entities, facts, sentiment, events, and evidence from financial language and documents._

**Domain page:** [thefintechbuilder.com/domains/financial-nlp-and-document-intelligence/](https://thefintechbuilder.com/domains/financial-nlp-and-document-intelligence/)  ·  **4** families  ·  **0/20** published  ·  **0/20** on npm

### Text Normalization  `D35-F01`

- ⚪ Financial Sentence Segmentation  `D35-F01-A01`
- ⚪ Financial Named-Entity Recognition  `D35-F01-A02`
- ⚪ Ticker/Issuer Entity Linking  `D35-F01-A03`
- ⚪ Table-to-Text Alignment  `D35-F01-A04`
- ⚪ Numeric Fact Extraction  `D35-F01-A05`

### Sentiment and Tone  `D35-F02`

- ⚪ Loughran-McDonald Sentiment  `D35-F02-A01`
- ⚪ FinBERT Sentiment  `D35-F02-A02`
- ⚪ Earnings-Call Tone Shift  `D35-F02-A03`
- ⚪ Uncertainty/Modal Language Score  `D35-F02-A04`
- ⚪ Management-Analyst Sentiment Gap  `D35-F02-A05`

### Topics and Events  `D35-F03`

- ⚪ Latent Dirichlet Allocation  `D35-F03-A01`
- ⚪ BERTopic Financial Topics  `D35-F03-A02`
- ⚪ News Event Extraction  `D35-F03-A03`
- ⚪ Guidance Change Detector  `D35-F03-A04`
- ⚪ Risk-Factor Change Detector  `D35-F03-A05`

### Retrieval and Evidence  `D35-F04`

- ⚪ BM25 Financial Search  `D35-F04-A01`
- ⚪ Dense Semantic Retrieval  `D35-F04-A02`
- ⚪ Hybrid Retrieval Fusion  `D35-F04-A03`
- ⚪ Citation-Grounded Answering  `D35-F04-A04`
- ⚪ Filing Section Alignment  `D35-F04-A05`

---

## D36 — Alternative Data Analytics

_Convert geospatial, digital, transactional, and supply-chain observations into bias-aware financial signals._

**Domain page:** [thefintechbuilder.com/domains/alternative-data-analytics/](https://thefintechbuilder.com/domains/alternative-data-analytics/)  ·  **4** families  ·  **0/19** published  ·  **0/19** on npm

### Geospatial  `D36-F01`

- ⚪ Store Footfall Estimation  `D36-F01-A01`
- ⚪ Parking-Lot Occupancy  `D36-F01-A02`
- ⚪ Night-Lights Economic Activity  `D36-F01-A03`
- ⚪ Vessel/AIS Route Aggregation  `D36-F01-A04`
- ⚪ Satellite Change Detection  `D36-F01-A05`

### Digital Activity  `D36-F02`

- ⚪ Web-Traffic Nowcast  `D36-F02-A01`
- ⚪ App-Ranking Signal  `D36-F02-A02`
- ⚪ Search-Trend Signal  `D36-F02-A03`
- ⚪ Job-Posting Hiring Index  `D36-F02-A04`
- ⚪ Product-Price Web Scrape Index  `D36-F02-A05`

### Transaction and Supply Chain  `D36-F03`

- ⚪ Card-Spend Nowcast  `D36-F03-A01`
- ⚪ Merchant Cohort Normalization  `D36-F03-A02`
- ⚪ Supplier-Customer Graph  `D36-F03-A03`
- ⚪ Shipment-Volume Nowcast  `D36-F03-A04`
- ⚪ Inventory-Flow Estimate  `D36-F03-A05`

### Bias Correction  `D36-F04`

- ⚪ Coverage-Bias Weighting  `D36-F04-A01`
- ⚪ Sample-Reweighting  `D36-F04-A02`
- ⚪ Vendor-Drift Detection  `D36-F04-A03`
- ⚪ Backfill-Revision Guard  `D36-F04-A04`

---

# Decision Science, Governance, and Infrastructure

## D37 — Forecasting and Machine Learning

_Build and calibrate predictive models for tabular, probabilistic, and sequential financial problems._

**Domain page:** [thefintechbuilder.com/domains/forecasting-and-machine-learning/](https://thefintechbuilder.com/domains/forecasting-and-machine-learning/)  ·  **5** families  ·  **0/27** published  ·  **0/27** on npm

### Linear and Regularized Models  `D37-F01`

- ⚪ OLS Forecast  `D37-F01-A01`
- ⚪ Ridge Regression  `D37-F01-A02`
- ⚪ Lasso Regression  `D37-F01-A03`
- ⚪ Elastic Net  `D37-F01-A04`
- ⚪ Quantile Regression  `D37-F01-A05`

### Tree Ensembles  `D37-F02`

- ⚪ Random Forest  `D37-F02-A01`
- ⚪ Extra Trees  `D37-F02-A02`
- ⚪ Gradient Boosted Trees  `D37-F02-A03`
- ⚪ XGBoost  `D37-F02-A04`
- ⚪ LightGBM  `D37-F02-A05`
- ⚪ CatBoost  `D37-F02-A06`

### Kernel and Probabilistic Models  `D37-F03`

- ⚪ Support Vector Regression  `D37-F03-A01`
- ⚪ Gaussian Process Regression  `D37-F03-A02`
- ⚪ Bayesian Linear Regression  `D37-F03-A03`
- ⚪ Mixture Density Network  `D37-F03-A04`
- ⚪ Conformal Prediction  `D37-F03-A05`

### Sequence Models  `D37-F04`

- ⚪ LSTM  `D37-F04-A01`
- ⚪ GRU  `D37-F04-A02`
- ⚪ Temporal Convolutional Network  `D37-F04-A03`
- ⚪ Temporal Fusion Transformer  `D37-F04-A04`
- ⚪ N-BEATS  `D37-F04-A05`
- ⚪ DeepAR  `D37-F04-A06`

### Ensembles and Calibration  `D37-F05`

- ⚪ Stacking Ensemble  `D37-F05-A01`
- ⚪ Blending Ensemble  `D37-F05-A02`
- ⚪ Bayesian Model Averaging  `D37-F05-A03`
- ⚪ Platt Calibration  `D37-F05-A04`
- ⚪ Isotonic Calibration  `D37-F05-A05`

---

## D38 — Causal Inference and Experimentation

_Estimate causal effects through experiments and quasi-experiments rather than relying on prediction alone._

**Domain page:** [thefintechbuilder.com/domains/causal-inference-and-experimentation/](https://thefintechbuilder.com/domains/causal-inference-and-experimentation/)  ·  **4** families  ·  **0/18** published  ·  **0/18** on npm

### Randomized Experiments  `D38-F01`

- ⚪ Difference-in-Means A/B Test  `D38-F01-A01`
- ⚪ Stratified Randomization  `D38-F01-A02`
- ⚪ CUPED Variance Reduction  `D38-F01-A03`
- ⚪ Sequential Probability Ratio Test  `D38-F01-A04`
- ⚪ Multi-Armed Bandit  `D38-F01-A05`

### Observational Causal Methods  `D38-F02`

- ⚪ Propensity-Score Matching  `D38-F02-A01`
- ⚪ Inverse-Probability Weighting  `D38-F02-A02`
- ⚪ Doubly Robust Estimation  `D38-F02-A03`
- ⚪ Difference-in-Differences  `D38-F02-A04`
- ⚪ Synthetic Control  `D38-F02-A05`

### Quasi-Experiments  `D38-F03`

- ⚪ Regression Discontinuity  `D38-F03-A01`
- ⚪ Instrumental Variables  `D38-F03-A02`
- ⚪ Interrupted Time Series  `D38-F03-A03`
- ⚪ Event-Study Estimator  `D38-F03-A04`

### Heterogeneous Treatment Effects  `D38-F04`

- ⚪ Uplift Model  `D38-F04-A01`
- ⚪ Causal Forest  `D38-F04-A02`
- ⚪ Meta-Learner S/T/X  `D38-F04-A03`
- ⚪ Treatment-Policy Optimization  `D38-F04-A04`

---

## D39 — Optimization and Simulation

_Search for feasible financial decisions and quantify uncertainty through optimization, resampling, and simulation._

**Domain page:** [thefintechbuilder.com/domains/optimization-and-simulation/](https://thefintechbuilder.com/domains/optimization-and-simulation/)  ·  **4** families  ·  **0/20** published  ·  **0/20** on npm

### Mathematical Optimization  `D39-F01`

- ⚪ Linear Programming  `D39-F01-A01`
- ⚪ Quadratic Programming  `D39-F01-A02`
- ⚪ Mixed-Integer Linear Programming  `D39-F01-A03`
- ⚪ Second-Order Cone Programming  `D39-F01-A04`
- ⚪ Dynamic Programming  `D39-F01-A05`

### Search Heuristics  `D39-F02`

- ⚪ Genetic Algorithm  `D39-F02-A01`
- ⚪ Simulated Annealing  `D39-F02-A02`
- ⚪ Particle Swarm Optimization  `D39-F02-A03`
- ⚪ Bayesian Optimization  `D39-F02-A04`
- ⚪ Nelder-Mead Search  `D39-F02-A05`

### Monte Carlo  `D39-F03`

- ⚪ Pseudorandom Monte Carlo  `D39-F03-A01`
- ⚪ Quasi-Monte Carlo  `D39-F03-A02`
- ⚪ Antithetic Variates  `D39-F03-A03`
- ⚪ Control Variates  `D39-F03-A04`
- ⚪ Importance Sampling  `D39-F03-A05`

### Resampling and Agent-Based Simulation  `D39-F04`

- ⚪ IID Bootstrap  `D39-F04-A01`
- ⚪ Moving-Block Bootstrap  `D39-F04-A02`
- ⚪ Stationary Bootstrap  `D39-F04-A03`
- ⚪ Agent-Based Market Simulation  `D39-F04-A04`
- ⚪ Discrete-Event Financial Simulation  `D39-F04-A05`

---

## D40 — Model Validation and Backtesting

_Test whether models and strategies survive time, bias controls, statistical scrutiny, and production drift._

**Domain page:** [thefintechbuilder.com/domains/model-validation-and-backtesting/](https://thefintechbuilder.com/domains/model-validation-and-backtesting/)  ·  **5** families  ·  **0/31** published  ·  **0/31** on npm

### Time-Aware Validation  `D40-F01`

- ⚪ Expanding-Window Backtest  `D40-F01-A01`
- ⚪ Rolling-Window Backtest  `D40-F01-A02`
- ⚪ Walk-Forward Optimization  `D40-F01-A03`
- ⚪ Purged K-Fold Cross-Validation  `D40-F01-A04`
- ⚪ Combinatorial Purged Cross-Validation  `D40-F01-A05`
- ⚪ Embargo  `D40-F01-A06`

### Bias Controls  `D40-F02`

- ⚪ Look-Ahead Bias Test  `D40-F02-A01`
- ⚪ Survivorship-Bias Test  `D40-F02-A02`
- ⚪ Point-in-Time Data Test  `D40-F02-A03`
- ⚪ Multiple-Testing Correction  `D40-F02-A04`
- ⚪ Data-Snooping Reality Check  `D40-F02-A05`

### Performance Significance  `D40-F03`

- ⚪ Bootstrap Confidence Interval  `D40-F03-A01`
- ⚪ White Reality Check  `D40-F03-A02`
- ⚪ Hansen Superior Predictive Ability Test  `D40-F03-A03`
- ⚪ Deflated Sharpe Ratio  `D40-F03-A04`
- ⚪ Probability of Backtest Overfitting  `D40-F03-A05`

### Model Monitoring  `D40-F04`

- ⚪ Population Stability Index  `D40-F04-A01`
- ⚪ Feature Drift Detection  `D40-F04-A02`
- ⚪ Prediction Drift Detection  `D40-F04-A03`
- ⚪ Calibration Drift  `D40-F04-A04`
- ⚪ Champion/Challenger Test  `D40-F04-A05`

### Classification and Score Validation  `D40-F05`

- ⚪ ROC Curve and ROC-AUC  `D40-F05-A01`
- ⚪ Precision-Recall Curve and PR-AUC  `D40-F05-A02`
- ⚪ Brier Score  `D40-F05-A03`
- ⚪ Log Loss  `D40-F05-A04`
- ⚪ Reliability Diagram and Expected Calibration Error  `D40-F05-A05`
- ⚪ Gains, Lift, and Decile Capture  `D40-F05-A06`
- ⚪ Cost-Sensitive Threshold Optimization  `D40-F05-A07`
- ⚪ Score Stability and Migration Matrix  `D40-F05-A08`
- ⚪ Slice-Based Validation by Sector, Country, and Regime  `D40-F05-A09`
- ⚪ Rare-Event Backtest and Confidence Bounds  `D40-F05-A10`

---

## D41 — Explainability, Fairness, and Governance

_Make automated financial decisions explainable, fair, reviewable, and governed throughout their lifecycle._

**Domain page:** [thefintechbuilder.com/domains/explainability-fairness-and-governance/](https://thefintechbuilder.com/domains/explainability-fairness-and-governance/)  ·  **4** families  ·  **0/19** published  ·  **0/19** on npm

### Global Explainability  `D41-F01`

- ⚪ Permutation Importance  `D41-F01-A01`
- ⚪ Partial Dependence  `D41-F01-A02`
- ⚪ Accumulated Local Effects  `D41-F01-A03`
- ⚪ Global Surrogate Model  `D41-F01-A04`

### Local Explainability  `D41-F02`

- ⚪ SHAP  `D41-F02-A01`
- ⚪ LIME  `D41-F02-A02`
- ⚪ Counterfactual Explanation  `D41-F02-A03`
- ⚪ Reason-Code Ranking  `D41-F02-A04`
- ⚪ Integrated Gradients  `D41-F02-A05`

### Fairness  `D41-F03`

- ⚪ Demographic Parity  `D41-F03-A01`
- ⚪ Equal Opportunity  `D41-F03-A02`
- ⚪ Equalized Odds  `D41-F03-A03`
- ⚪ Calibration by Group  `D41-F03-A04`
- ⚪ Disparate-Impact Ratio  `D41-F03-A05`

### Governance  `D41-F04`

- ⚪ Model-Risk Tiering  `D41-F04-A01`
- ⚪ Approval Workflow Rule Engine  `D41-F04-A02`
- ⚪ Override-Rate Monitor  `D41-F04-A03`
- ⚪ Model-Inventory Dependency Graph  `D41-F04-A04`
- ⚪ Validation-Finding Severity Score  `D41-F04-A05`

---

## D42 — Digital Identity and Trust

_Prove who is acting, adapt authentication, detect identity-centric threats, and assign assurance levels to financial interactions._

**Domain page:** [thefintechbuilder.com/domains/digital-identity-and-trust/](https://thefintechbuilder.com/domains/digital-identity-and-trust/)  ·  **4** families  ·  **0/19** published  ·  **0/19** on npm

### Identity Proofing  `D42-F01`

- ⚪ Document Authenticity Score  `D42-F01-A01`
- ⚪ Face-to-Document Match  `D42-F01-A02`
- ⚪ Liveness Detection  `D42-F01-A03`
- ⚪ Identity-Attribute Consistency  `D42-F01-A04`
- ⚪ Duplicate-Identity Resolution  `D42-F01-A05`

### Authentication  `D42-F02`

- ⚪ Risk-Based Authentication  `D42-F02-A01`
- ⚪ Adaptive Step-Up Authentication  `D42-F02-A02`
- ⚪ Device-Binding Risk  `D42-F02-A03`
- ⚪ Behavioral-Biometric Score  `D42-F02-A04`
- ⚪ Session-Trust Score  `D42-F02-A05`

### Identity Threat Detection  `D42-F03`

- ⚪ Bot-Activity Detection  `D42-F03-A01`
- ⚪ Credential-Stuffing Detection  `D42-F03-A02`
- ⚪ Phishing-Resistant Authenticator Policy  `D42-F03-A03`
- ⚪ Impossible-Device Transition  `D42-F03-A04`
- ⚪ Privileged-Access Anomaly  `D42-F03-A05`

### Identity Assurance  `D42-F04`

- ⚪ Identity Assurance Level Selection  `D42-F04-A01`
- ⚪ Authentication Assurance Level Selection  `D42-F04-A02`
- ⚪ Federation Assurance Level Selection  `D42-F04-A03`
- ⚪ Residual Identity-Risk Score  `D42-F04-A04`

---

## D43 — Clearing, Settlement, and Custody

_Calculate obligations, margin, collateral, settlement, and custody entitlements after a trade is executed._

**Domain page:** [thefintechbuilder.com/domains/clearing-settlement-and-custody/](https://thefintechbuilder.com/domains/clearing-settlement-and-custody/)  ·  **4** families  ·  **0/19** published  ·  **0/19** on npm

### Netting and Obligations  `D43-F01`

- ⚪ Bilateral Netting  `D43-F01-A01`
- ⚪ Multilateral Netting  `D43-F01-A02`
- ⚪ Payment-versus-Payment Netting  `D43-F01-A03`
- ⚪ Delivery-versus-Payment Obligation  `D43-F01-A04`

### Margin and Collateral  `D43-F02`

- ⚪ Initial Margin  `D43-F02-A01`
- ⚪ Variation Margin  `D43-F02-A02`
- ⚪ SPAN-Style Scenario Margin  `D43-F02-A03`
- ⚪ Collateral Haircut  `D43-F02-A04`
- ⚪ Cheapest-to-Deliver Collateral Allocation  `D43-F02-A05`

### Settlement  `D43-F03`

- ⚪ Settlement Instruction Matching  `D43-F03-A01`
- ⚪ Failed-Settlement Prediction  `D43-F03-A02`
- ⚪ Partial-Settlement Allocation  `D43-F03-A03`
- ⚪ Buy-In Eligibility Rule  `D43-F03-A04`
- ⚪ Securities-Lending Recall Priority  `D43-F03-A05`

### Custody  `D43-F04`

- ⚪ Position Reconciliation  `D43-F04-A01`
- ⚪ Corporate-Action Entitlement  `D43-F04-A02`
- ⚪ Tax-Withholding Calculation  `D43-F04-A03`
- ⚪ Safekeeping-Fee Calculation  `D43-F04-A04`
- ⚪ Proxy-Voting Eligibility  `D43-F04-A05`

---

## D44 — Product Pricing and Unit Economics

_Connect product prices and customer behavior to revenue, margin, retention, and sustainable unit economics._

**Domain page:** [thefintechbuilder.com/domains/product-pricing-and-unit-economics/](https://thefintechbuilder.com/domains/product-pricing-and-unit-economics/)  ·  **4** families  ·  **0/19** published  ·  **0/19** on npm

### Pricing  `D44-F01`

- ⚪ Cost-Plus Pricing  `D44-F01-A01`
- ⚪ Risk-Based Pricing  `D44-F01-A02`
- ⚪ Value-Based Pricing  `D44-F01-A03`
- ⚪ Price-Elasticity Estimation  `D44-F01-A04`
- ⚪ Tiered Subscription Pricing  `D44-F01-A05`

### Customer Economics  `D44-F02`

- ⚪ Customer Lifetime Value  `D44-F02-A01`
- ⚪ CAC Payback  `D44-F02-A02`
- ⚪ Cohort Retention  `D44-F02-A03`
- ⚪ Survival Churn Model  `D44-F02-A04`
- ⚪ Contribution Margin  `D44-F02-A05`

### Financial Product Economics  `D44-F03`

- ⚪ Interchange Revenue Model  `D44-F03-A01`
- ⚪ Net Interest Margin  `D44-F03-A02`
- ⚪ Take-Rate Calculation  `D44-F03-A03`
- ⚪ Float Revenue  `D44-F03-A04`
- ⚪ Credit-Loss-Adjusted Margin  `D44-F03-A05`

### Pricing and Retention Optimization  `D44-F04`

- ⚪ Offer-Pricing Optimization  `D44-F04-A01`
- ⚪ Retention-Offer Uplift  `D44-F04-A02`
- ⚪ Promotion-Budget Allocation  `D44-F04-A03`
- ⚪ Break-Even Volume Solver  `D44-F04-A04`

---

## D45 — Regulatory and Compliance Automation

_Translate regulatory obligations into consistent calculations, controls, evidence, reporting, and change management._

**Domain page:** [thefintechbuilder.com/domains/regulatory-and-compliance-automation/](https://thefintechbuilder.com/domains/regulatory-and-compliance-automation/)  ·  **5** families  ·  **0/27** published  ·  **0/27** on npm

### Rules and Eligibility  `D45-F01`

- ⚪ Jurisdiction Eligibility Engine  `D45-F01-A01`
- ⚪ Investor Classification  `D45-F01-A02`
- ⚪ Product Suitability Rule  `D45-F01-A03`
- ⚪ Exposure/Concentration Limit  `D45-F01-A04`
- ⚪ Restricted-Instrument Rule  `D45-F01-A05`

### Regulatory Calculations  `D45-F02`

- ⚪ Risk-Weighted Assets  `D45-F02-A01`
- ⚪ Capital Adequacy Ratio  `D45-F02-A02`
- ⚪ Large-Exposure Limit  `D45-F02-A03`
- ⚪ Leverage Ratio  `D45-F02-A04`
- ⚪ Liquidity Regulatory Metrics  `D45-F02-A05`

### Reporting and Controls  `D45-F03`

- ⚪ Regulatory-Report Aggregation  `D45-F03-A01`
- ⚪ Data-Lineage Completeness Check  `D45-F03-A02`
- ⚪ Threshold-Breach Escalation  `D45-F03-A03`
- ⚪ Control-Sampling Algorithm  `D45-F03-A04`
- ⚪ Evidence-Retention Scheduler  `D45-F03-A05`

### Policy Intelligence  `D45-F04`

- ⚪ Regulation Change Detection  `D45-F04-A01`
- ⚪ Policy-to-Control Mapping  `D45-F04-A02`
- ⚪ Obligation Extraction  `D45-F04-A03`
- ⚪ Compliance-Gap Scoring  `D45-F04-A04`
- ⚪ Regulatory-Impact Classification  `D45-F04-A05`

### Regulatory Records and Evidence  `D45-F05`

- ⚪ Jurisdictional Retention-Rule Resolver  `D45-F05-A01`
- ⚪ WORM Object-Retention Policy  `D45-F05-A02`
- ⚪ Legal-Hold Enforcement  `D45-F05-A03`
- ⚪ Evidence Chain-of-Custody Manifest  `D45-F05-A04`
- ⚪ Regulatory Evidence Export  `D45-F05-A05`
- ⚪ Retention Expiry and Destruction Proof  `D45-F05-A06`
- ⚪ Crypto-Shredding Eligibility and Key Destruction  `D45-F05-A07`

---

# Earnings, Forecasting, and Fair Value

## D46 — Earnings and Per-Share Analytics

_Calculate reported and analytical earnings per share, model potential dilution, explain EPS growth, and evaluate per-share value creation._

**Domain page:** [thefintechbuilder.com/domains/earnings-and-per-share-analytics/](https://thefintechbuilder.com/domains/earnings-and-per-share-analytics/)  ·  **6** families  ·  **5/49** published  ·  **5/49** on npm

### Earnings and Share Foundations  `D46-F01`

- ⚪ Earnings Attributable to Ordinary Shareholders  `D46-F01-A01`
- ⚪ Preference-Dividend Numerator Adjustment  `D46-F01-A02`
- ⚪ Weighted-Average Ordinary Shares  `D46-F01-A03`
- ⚪ Treasury-Share Exclusion  `D46-F01-A04`
- 🟢 [Stock-Split/Consolidation EPS Restatement](https://thefintechbuilder.com/earnings-and-per-share-analytics/earnings-and-share-foundations/stock-split-consolidation-eps-restatement/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/earnings-and-per-share-analytics/earnings-and-share-foundations/stock-split-consolidation-eps-restatement")  `D46-F01-A05`
- ⚪ Bonus-Issue EPS Restatement  `D46-F01-A06`
- ⚪ Rights-Issue Bonus-Factor Adjustment  `D46-F01-A07`
- 🟢 [Basic EPS](https://thefintechbuilder.com/earnings-and-per-share-analytics/earnings-and-share-foundations/basic-eps/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/earnings-and-per-share-analytics/earnings-and-share-foundations/basic-eps")  `D46-F01-A08`

### Basic and Diluted EPS  `D46-F02`

- ⚪ If-Converted Convertible-Debt Dilution  `D46-F02-A01`
- 🟢 [If-Converted Convertible-Preference Dilution](https://thefintechbuilder.com/earnings-and-per-share-analytics/basic-and-diluted-eps/if-converted-convertible-preference-dilution/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/earnings-and-per-share-analytics/basic-and-diluted-eps/if-converted-convertible-preference-dilution")  `D46-F02-A02`
- 🟢 [Treasury-Share Method for Options/Warrants](https://thefintechbuilder.com/earnings-and-per-share-analytics/basic-and-diluted-eps/treasury-share-method-for-options-warrants/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/earnings-and-per-share-analytics/basic-and-diluted-eps/treasury-share-method-for-options-warrants")  `D46-F02-A03`
- 🟢 [Contingently Issuable Share Inclusion](https://thefintechbuilder.com/earnings-and-per-share-analytics/basic-and-diluted-eps/contingently-issuable-share-inclusion/) — 📥 [npm](https://www.npmjs.com/package/fintech-algorithms "import from fintech-algorithms/earnings-and-per-share-analytics/basic-and-diluted-eps/contingently-issuable-share-inclusion")  `D46-F02-A04`
- ⚪ Participating-Security Two-Class Allocation  `D46-F02-A05`
- ⚪ Written-Put and Forward-Purchase Dilution  `D46-F02-A06`
- ⚪ Dilutive-Instrument Ordering  `D46-F02-A07`
- ⚪ Anti-Dilution Exclusion  `D46-F02-A08`
- ⚪ Diluted EPS Reconciliation  `D46-F02-A09`

### Adjusted and Normalized Earnings  `D46-F03`

- ⚪ Reported EPS  `D46-F03-A01`
- ⚪ Continuing-Operations EPS  `D46-F03-A02`
- ⚪ Discontinued-Operations EPS  `D46-F03-A03`
- ⚪ Adjusted EPS Bridge  `D46-F03-A04`
- ⚪ Normalized EPS  `D46-F03-A05`
- ⚪ Recurring EPS  `D46-F03-A06`
- ⚪ Cash EPS  `D46-F03-A07`
- ⚪ Owner-Earnings per Share  `D46-F03-A08`

### EPS Growth and Decomposition  `D46-F04`

- ⚪ Year-over-Year EPS Growth  `D46-F04-A01`
- ⚪ Quarter-over-Quarter EPS Growth  `D46-F04-A02`
- ⚪ TTM EPS Growth  `D46-F04-A03`
- ⚪ EPS CAGR  `D46-F04-A04`
- ⚪ Forward EPS Growth  `D46-F04-A05`
- ⚪ EPS Growth Acceleration  `D46-F04-A06`
- ⚪ Constant-Currency EPS Growth  `D46-F04-A07`
- ⚪ Organic EPS Growth  `D46-F04-A08`
- ⚪ EPS Growth Contribution Decomposition  `D46-F04-A09`

### Growth and Value Ratios  `D46-F05`

- ⚪ PEGY Ratio  `D46-F05-A01`
- ⚪ Sustainable Growth Rate  `D46-F05-A02`
- ⚪ Reinvestment-Driven Growth  `D46-F05-A03`
- ⚪ Justified Forward P/E  `D46-F05-A04`
- ⚪ Earnings Yield  `D46-F05-A05`
- ⚪ Growth-at-a-Reasonable-Price Composite  `D46-F05-A06`
- ⚪ Growth Quality/Stability Score  `D46-F05-A07`

### Transaction and Dilution Analytics  `D46-F06`

- ⚪ Share-Repurchase EPS Effect  `D46-F06-A01`
- ⚪ Stock-Based Compensation Dilution  `D46-F06-A02`
- ⚪ Dilution Overhang  `D46-F06-A03`
- ⚪ M&A Pro Forma EPS  `D46-F06-A04`
- ⚪ M&A EPS Accretion/Dilution  `D46-F06-A05`
- ⚪ Convertible-Issuance EPS Effect  `D46-F06-A06`
- ⚪ Employee-Option Dilution Forecast  `D46-F06-A07`
- ⚪ Per-Share Value-Creation Attribution  `D46-F06-A08`

---

## D47 — Corporate Forecasting and Financial Model Engineering

_Convert historical fundamentals and operating assumptions into integrated forecasts, scenarios, consensus measures, and validated financial models._

**Domain page:** [thefintechbuilder.com/domains/corporate-forecasting-and-financial-model-engineering/](https://thefintechbuilder.com/domains/corporate-forecasting-and-financial-model-engineering/)  ·  **8** families  ·  **0/52** published  ·  **0/52** on npm

### Revenue Forecasting  `D47-F01`

- ⚪ Unit-Volume-Price Revenue Bridge  `D47-F01-A01`
- ⚪ Segment Revenue Forecast  `D47-F01-A02`
- ⚪ Customer-Cohort Revenue Forecast  `D47-F01-A03`
- ⚪ Subscriber/ARPU Forecast  `D47-F01-A04`
- ⚪ Same-Store Sales Forecast  `D47-F01-A05`
- ⚪ Contracted-Revenue/Backlog Conversion  `D47-F01-A06`
- ⚪ Revenue Seasonality Forecast  `D47-F01-A07`

### Margin and Expense Forecasting  `D47-F02`

- ⚪ Gross-Margin Forecast  `D47-F02-A01`
- ⚪ Operating-Expense Driver Model  `D47-F02-A02`
- ⚪ Headcount and Compensation Forecast  `D47-F02-A03`
- ⚪ Fixed/Variable Cost Decomposition  `D47-F02-A04`
- ⚪ Operating-Leverage Forecast  `D47-F02-A05`
- ⚪ EBITDA/EBIT Margin Forecast  `D47-F02-A06`

### Working-Capital Forecasting  `D47-F03`

- ⚪ Days-Sales-Outstanding Forecast  `D47-F03-A01`
- ⚪ Inventory-Days Forecast  `D47-F03-A02`
- ⚪ Days-Payables-Outstanding Forecast  `D47-F03-A03`
- ⚪ Deferred-Revenue Forecast  `D47-F03-A04`
- ⚪ Working-Capital Driver Forecast  `D47-F03-A05`
- ⚪ Cash-Conversion Forecast  `D47-F03-A06`

### Capital and Financing Schedules  `D47-F04`

- ⚪ Capital-Expenditure Forecast  `D47-F04-A01`
- ⚪ Depreciation/Amortization Schedule  `D47-F04-A02`
- ⚪ Debt Schedule  `D47-F04-A03`
- ⚪ Interest Expense/Income Forecast  `D47-F04-A04`
- ⚪ Lease-Liability Schedule  `D47-F04-A05`
- ⚪ Tax-Provision Forecast  `D47-F04-A06`
- ⚪ Dividend and Repurchase Forecast  `D47-F04-A07`

### Three-Statement Model Integration  `D47-F05`

- ⚪ Integrated Three-Statement Model  `D47-F05-A01`
- ⚪ Balance-Sheet Balancing Algorithm  `D47-F05-A02`
- ⚪ Cash-Sweep and Revolver Logic  `D47-F05-A03`
- ⚪ Circular Interest Calculation  `D47-F05-A04`
- ⚪ Retained-Earnings Forecast Bridge  `D47-F05-A05`
- ⚪ Sources-and-Uses Schedule  `D47-F05-A06`
- ⚪ Model Consistency Check  `D47-F05-A07`

### Scenario and Sensitivity Modeling  `D47-F06`

- ⚪ Base/Bull/Bear Scenario Model  `D47-F06-A01`
- ⚪ Probability-Weighted Forecast  `D47-F06-A02`
- ⚪ One-Way Sensitivity Analysis  `D47-F06-A03`
- ⚪ Two-Way Sensitivity Analysis  `D47-F06-A04`
- ⚪ Tornado Sensitivity Analysis  `D47-F06-A05`
- ⚪ Reverse Stress Scenario  `D47-F06-A06`

### Estimate and Guidance Intelligence  `D47-F07`

- ⚪ Consensus Estimate Aggregation  `D47-F07-A01`
- ⚪ Estimate-Dispersion Metric  `D47-F07-A02`
- ⚪ Analyst Estimate Revision  `D47-F07-A03`
- ⚪ Standardized Unexpected Earnings  `D47-F07-A04`
- ⚪ Earnings Surprise Calculation  `D47-F07-A05`
- ⚪ Management Guidance Midpoint  `D47-F07-A06`
- ⚪ Guidance Range Revision  `D47-F07-A07`

### Forecast Validation  `D47-F08`

- ⚪ Forecast Bias  `D47-F08-A01`
- ⚪ Weighted Absolute Percentage Error  `D47-F08-A02`
- ⚪ Forecast Error Attribution  `D47-F08-A03`
- ⚪ Rolling-Origin Fundamental Forecast Backtest  `D47-F08-A04`
- ⚪ Prediction-Interval Coverage  `D47-F08-A05`
- ⚪ Forecast Calibration and Drift  `D47-F08-A06`

---

## D48 — Fair Value Measurement and Valuation Control

_Apply market-participant fair-value principles, classify input observability, select valuation approaches, calculate adjustments, and govern independent valuation controls._

**Domain page:** [thefintechbuilder.com/domains/fair-value-measurement-and-valuation-control/](https://thefintechbuilder.com/domains/fair-value-measurement-and-valuation-control/)  ·  **8** families  ·  **0/47** published  ·  **0/47** on npm

### Fair-Value Framework  `D48-F01`

- ⚪ Unit-of-Account Determination  `D48-F01-A01`
- ⚪ Principal-Market Selection  `D48-F01-A02`
- ⚪ Most-Advantageous-Market Fallback  `D48-F01-A03`
- ⚪ Orderly-Transaction Assessment  `D48-F01-A04`
- ⚪ Market-Participant Assumption Set  `D48-F01-A05`
- ⚪ Highest-and-Best-Use Assessment  `D48-F01-A06`

### Fair-Value Hierarchy  `D48-F02`

- ⚪ Level 1 Quoted-Price Classification  `D48-F02-A01`
- ⚪ Level 2 Observable-Input Classification  `D48-F02-A02`
- ⚪ Level 3 Unobservable-Input Classification  `D48-F02-A03`
- ⚪ Fair-Value Hierarchy Transfer  `D48-F02-A04`
- ⚪ Significant-Input Observability Test  `D48-F02-A05`

### Market Approach  `D48-F03`

- ⚪ Quoted Market Price  `D48-F03-A01`
- ⚪ Comparable-Transaction Adjustment  `D48-F03-A02`
- ⚪ Market-Multiple Calibration  `D48-F03-A03`
- ⚪ Matrix Pricing  `D48-F03-A04`
- ⚪ Broker/Dealer Quote Consensus  `D48-F03-A05`

### Income Approach  `D48-F04`

- ⚪ Traditional Present Value  `D48-F04-A01`
- ⚪ Expected Present Value  `D48-F04-A02`
- ⚪ Option-Pricing Fair Value  `D48-F04-A03`
- ⚪ Multi-Period Excess-Earnings Method  `D48-F04-A04`
- ⚪ Relief-from-Royalty Method  `D48-F04-A05`
- ⚪ With-and-Without Method  `D48-F04-A06`

### Cost Approach  `D48-F05`

- ⚪ Replacement-Cost Approach  `D48-F05-A01`
- ⚪ Reproduction-Cost Approach  `D48-F05-A02`
- ⚪ Physical-Deterioration Adjustment  `D48-F05-A03`
- ⚪ Functional-Obsolescence Adjustment  `D48-F05-A04`
- ⚪ Economic-Obsolescence Adjustment  `D48-F05-A05`

### Valuation Adjustments  `D48-F06`

- ⚪ Bid-Ask Valuation Adjustment  `D48-F06-A01`
- ⚪ Liquidity Valuation Adjustment  `D48-F06-A02`
- ⚪ Credit Valuation Adjustment (CVA)  `D48-F06-A03`
- ⚪ Debit Valuation Adjustment (DVA)  `D48-F06-A04`
- ⚪ Funding Valuation Adjustment (FVA)  `D48-F06-A05`
- ⚪ Concentration Valuation Adjustment  `D48-F06-A06`
- ⚪ Model-Risk Reserve  `D48-F06-A07`

### Valuation Control  `D48-F07`

- ⚪ Independent Price Verification  `D48-F07-A01`
- ⚪ Valuation Model Calibration  `D48-F07-A02`
- ⚪ Valuation Backtesting  `D48-F07-A03`
- ⚪ Price-Source Hierarchy  `D48-F07-A04`
- ⚪ Valuation Override Control  `D48-F07-A05`
- ⚪ Valuation Uncertainty Score  `D48-F07-A06`
- ⚪ Valuation Model Change Control  `D48-F07-A07`

### Disclosure and Level 3 Movement  `D48-F08`

- ⚪ Level 3 Roll-Forward  `D48-F08-A01`
- ⚪ Unobservable-Input Sensitivity  `D48-F08-A02`
- ⚪ Fair-Value Hierarchy Disclosure  `D48-F08-A03`
- ⚪ Valuation-Technique Change Disclosure  `D48-F08-A04`
- ⚪ Day-One Gain/Loss Deferral  `D48-F08-A05`
- ⚪ Fair-Value Measurement Reconciliation  `D48-F08-A06`

---

# Financial Cybersecurity Engineering

## D49 — Financial Cybersecurity Engineering

_Engineer access, APIs, data protection, monitoring, incident response, resilience, secure software delivery, and third-party controls for financial workflows._

**Domain page:** [thefintechbuilder.com/domains/financial-cybersecurity-engineering/](https://thefintechbuilder.com/domains/financial-cybersecurity-engineering/)  ·  **8** families  ·  **0/40** published  ·  **0/40** on npm

### Cyber Risk and Threat Modeling  `D49-F01`

- ⚪ Critical Financial Asset Classification  `D49-F01-A01`
- ⚪ Financial Threat Scenario Decomposition  `D49-F01-A02`
- ⚪ Attack-Path Graph Construction  `D49-F01-A03`
- ⚪ Cyber-Risk Likelihood and Impact Score  `D49-F01-A04`
- ⚪ Security-Control Coverage Gap  `D49-F01-A05`

### Access Control and Privileged Access  `D49-F02`

- ⚪ Role-Based Access Resolution  `D49-F02-A01`
- ⚪ Attribute-Based Access Policy Evaluation  `D49-F02-A02`
- ⚪ Segregation-of-Duties Conflict Detection  `D49-F02-A03`
- ⚪ Just-in-Time Privileged Access Decision  `D49-F02-A04`
- ⚪ Dormant and Orphaned Access Detection  `D49-F02-A05`

### API and Service Security  `D49-F03`

- ⚪ OAuth/OIDC Token Validation  `D49-F03-A01`
- ⚪ Mutual-TLS Service Identity Validation  `D49-F03-A02`
- ⚪ API Request and Webhook Signature Verification  `D49-F03-A03`
- ⚪ Nonce, Timestamp, and Replay-Protection Guard  `D49-F03-A04`
- ⚪ Adaptive API Abuse and Rate-Limit Control  `D49-F03-A05`

### Data, Secrets, and Cryptographic Protection  `D49-F04`

- ⚪ Financial-Data Classification and Handling Policy  `D49-F04-A01`
- ⚪ Envelope-Encryption Policy  `D49-F04-A02`
- ⚪ Financial-Data Tokenization  `D49-F04-A03`
- ⚪ KMS/HSM Key-Rotation Scheduler  `D49-F04-A04`
- ⚪ Certificate and Secret Expiry Risk  `D49-F04-A05`

### Security Monitoring and Detection Engineering  `D49-F05`

- ⚪ Security-Event Normalization  `D49-F05-A01`
- ⚪ Detection-Rule Correlation  `D49-F05-A02`
- ⚪ User and Entity Behavior Anomaly  `D49-F05-A03`
- ⚪ Security-Alert Severity and Prioritization  `D49-F05-A04`
- ⚪ Detection-Coverage and Drift Monitor  `D49-F05-A05`

### Incident Response and Digital Forensics  `D49-F06`

- ⚪ Cyber-Incident Severity Classification  `D49-F06-A01`
- ⚪ Containment-Action Decision Engine  `D49-F06-A02`
- ⚪ Forensic-Evidence Preservation Manifest  `D49-F06-A03`
- ⚪ Breach-Notification Deadline Resolver  `D49-F06-A04`
- ⚪ Post-Incident Control-Improvement Prioritization  `D49-F06-A05`

### Resilience, Recovery, and Ransomware Defense  `D49-F07`

- ⚪ Critical Financial Service Recovery Priority  `D49-F07-A01`
- ⚪ Immutable-Backup Integrity Verification  `D49-F07-A02`
- ⚪ Recovery-Point and Recovery-Time Compliance  `D49-F07-A03`
- ⚪ Ransomware Blast-Radius Estimation  `D49-F07-A04`
- ⚪ Disaster-Recovery Exercise Score  `D49-F07-A05`

### Secure SDLC, Supply Chain, and Third-Party Risk  `D49-F08`

- ⚪ Dependency-Vulnerability Prioritization  `D49-F08-A01`
- ⚪ SBOM Exposure Graph  `D49-F08-A02`
- ⚪ Build-Artifact Provenance Verification  `D49-F08-A03`
- ⚪ Third-Party Cyber-Risk Score  `D49-F08-A04`
- ⚪ Cloud-Security Posture Drift Detection  `D49-F08-A05`

---

## How the three signals relate

| | [`fintech-algorithms`](https://www.npmjs.com/package/fintech-algorithms) (📥) | per-algorithm repos (📦) |
|---|---|---|
| Scope | one install, every implemented algorithm | one algorithm per repo |
| Languages | TypeScript | Python **and** TypeScript |
| Use it when | you want to call the algorithm in an app | you want to read, port, or extend it |
| Extras | provider-agnostic subpath modules | streaming engines, algorithm-specific analysis surfaces, deeper test suites |

They are complements, not alternatives — the package is the fastest path to a
working call, and a dedicated repo is where an algorithm is taken apart in full.

## About this list

This index is generated from the live catalog, the site sitemap, and the npm
package's own manifest by [`scripts/generate_awesome.mjs`](scripts/generate_awesome.mjs).
Article links are verified against [`data/sitemap-live-topics.txt`](data/sitemap-live-topics.txt),
so a link only appears once the article is actually published; npm coverage comes from
[`data/npm-package-topics.tsv`](data/npm-package-topics.tsv), refreshed by
[`scripts/refresh_npm_coverage.mjs`](scripts/refresh_npm_coverage.mjs). Re-run both to refresh.

Maintained alongside the per-algorithm open-source repositories. See the
[EMA repo](https://github.com/IslamBaraka90/Fintech-EMA-Exponential-Moving-Average-algorithm)
for the reference implementation pattern (Python + TypeScript, streaming engine, Yahoo Finance tests).

## License

[CC BY 4.0](LICENSE) — the list. Linked articles and code remain under their own licenses.
