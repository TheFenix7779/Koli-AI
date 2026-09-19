# Cluster plan — "מזכירה וירטואלית AI"

Generated 2026-09-19 from the keywords in [SEO-STRATEGY.md](../../SEO-STRATEGY.md).
Clusters are grouped by **measured SERP overlap**, not by how similar the words look.

## Read this caveat first

SERPs were collected through WebSearch, which queries the **US endpoint**. The
Hebrew queries did return Israeli sites, so the result sets look sane, but
rankings on google.co.il for an Israeli user will differ. Treat the groupings as
directional and re-measure against real Israeli SERPs before committing budget.

No search-volume data was available, so every `volume` is null. The ordering
below is by SERP evidence, not by demand — a keyword could cluster perfectly and
still have no traffic behind it.

## Measured overlap

Shared domains in the top organic results for each pair:

| A | B | Shared | Relationship |
|---|---|---:|---|
| מזכירה וירטואלית AI | כמה עולה מזכירה וירטואלית AI | 5 | same cluster |
| מזכירה וירטואלית AI | מזכירה וירטואלית למרפאת שיניים | 4 | same cluster |
| כמה עולה … | מזכירה וירטואלית למרפאת שיניים | 3 | interlink |
| כמה עולה … | סוכן AI קולי | 3 | interlink |
| מזכירה וירטואלית AI | סוכן AI קולי | 2 | interlink |
| מזכירה וירטואלית AI | מענה אנושי לעסקים | 1 | separate |
| מזכירה וירטואלית AI | ביטולי תורים במרפאה | 0 | separate |
| מזכירה וירטואלית AI | מזכירה AI מול מזכירה אנושית | 0 | separate |

## Architecture

**The pillar already exists: the homepage.** The head-term SERP is made of
vendor homepages (mazkira, MR.BOT, Juba, Genie), not guides. A separate pillar
guide would have competed with our own homepage for the same query, so the
homepage keeps the head term and everything else links up to it.

### Cluster 0 — ליבה: מזכירה וירטואלית

Pricing shares 5 results with the head term and dental shares 4, so both belong
in the same cluster as the homepage.

| Page | Keyword | Status | Words |
|---|---|---|---:|
| `/pricing` | כמה עולה מזכירה וירטואלית AI | planned | 1,400 |
| `/industries/*` (6 pages) | מזכירה וירטואלית ל<תחום> | live | ~340 each |

### Cluster 1 — סוכן AI קולי

Only 2 shared results with the head term, and a **completely different vendor
set**: Paycall, Yappr, Optimate, Zudu, SmartUp. This is a separate term-space
that the site does not address at all today.

| Page | Keyword | Status | Words |
|---|---|---|---:|
| `/guides/ai-voice-agent` | סוכן AI קולי | planned | 1,600 |
| `/guides/hebrew-voice-bot` | בוט קולי בעברית | planned | 1,300 |

### Cluster 2 — חלופה למענה אנושי

One shared result. Its SERP is human answering-service providers (טלקול,
קישורית, שידורית, VCall) plus comparison sites. This is the category Koli
actually displaces, so it is where a comparison page belongs.

| Page | Keyword | Status | Words |
|---|---|---|---:|
| `/compare/human-answering-service` | מענה אנושי לעסקים | planned | 1,500 |

## Excluded, and why

**ביטולי תורים / אי הגעה — 0 overlap.** The SERP is entirely appointment-management
software (Tor4You, Easybizy, שידורית, תפעולית). A Koli page would be the wrong
page type for that query and would not rank.

> This overturns my own earlier recommendation. [SEO-STRATEGY.md](../../SEO-STRATEGY.md)
> proposed no-show and missed-call guides as week-5 content. The SERP says that
> traffic belongs to booking software, not receptionists. Drop it.

**מזכירה AI מול מזכירה אנושית — 0 overlap.** The Hebrew query returns generic
English AI-secretary articles, with no Israeli commercial intent. Replaced by
"מענה אנושי לעסקים", which has a real Israeli SERP.

## Internal links

29 links across 11 nodes. Every spoke links to the homepage and back; siblings
chain within each cluster; both new clusters link into `/pricing`, since pricing
interlinks with each of them (3 shared results apiece).

No page has fewer than 3 incoming links, no orphans, and no two pages share a
primary keyword.

## Effort

5,800 new words across 4 pages. The 6 industry pages are live at ~340 words
each and should be extended before any new cluster is started.

## Sequence

1. `/pricing` — highest overlap with the head term, and the SERP shows
   competitors publishing figures (₪39.90, ₪129/mo, ₪600–1,500/mo) against a
   human secretary at ₪10–15k/mo. That comparison carries the page even without
   fixed prices of our own.
2. `/compare/human-answering-service` — captures buyers already shopping for the
   substitute.
3. `/guides/ai-voice-agent` and `/guides/hebrew-voice-bot` — new term-space,
   slower payoff.

Open `cluster-map.html` in a browser for the interactive map.
