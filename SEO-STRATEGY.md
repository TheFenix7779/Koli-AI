# SEO strategy: koli-ai.com ("AI receptionist")

Prepared 2026-09-19. Based on the live site, the repo, and three web searches (Hebrew and English) for competitors. No keyword-volume, difficulty or domain-authority data was available (no DataForSEO/Ahrefs access), so every traffic target below is a planning assumption, not a forecast. Validate with Search Console after ~4 weeks of data.

## 1. Discovery

| | |
|---|---|
| Business | Koli AI: AI voice + WhatsApp receptionist (Hebrew-first, any language) |
| Type | B2B SaaS/service, sold to SMB clinics and service businesses in Israel |
| Conversion | WhatsApp chat / phone call to 055-564-8222 (free intro call) |
| Current site | 1 homepage + 6 industry pages (live since the PR #2 deploy) + internal `/tools` |
| Language/market | Hebrew, RTL, Israel. English is secondary. |

Assumed KPI: qualified WhatsApp/phone leads from organic search. Traffic is a means, not the goal.

## 2. Competitive landscape (from search results, not measured)

Israeli Hebrew-language players ranking for "מזכירה וירטואלית AI" and clinic variants:

| Competitor | Notes |
|---|---|
| [mazkira.co.il](https://mazkira.co.il/) | Category-keyword domain, "מזכירה AI" / "מרכזיה AI" |
| [getgenie.co.il](https://getgenie.co.il/) | "Genie", digital secretary 24/7 |
| [mrbot.ai/virtual-secretary](https://mrbot.ai/virtual-secretary) | Dedicated virtual-secretary landing page, pricing angle |
| [comix-flow.com/industries/clinics](https://comix-flow.com/industries/clinics) | Clinic-specific page (same play as our industry pages) |
| [voicefleet.ai](https://voicefleet.ai/blog/he-ai-receptionist-small-business-2026) | Hebrew blog content targeting small business |
| [vcall.co.il](https://www.vcall.co.il/) | "Playbook" content; Vbot |
| [automaziot.ai blog](https://automaziot.ai/blog/2026-06-ai-virtual-receptionist) | Informational blog post on the exact topic |
| [juba.digital](https://juba.digital/services/ai-agents/ai-receptionist), Clinic Wise AI | Agency and clinic-software angles |

Also present: Yappr, Joov.ai, Rapidline, Palmidos (English-language, targeting Israel).

**Read of the market:** the head term "מזכירה וירטואלית AI" is crowded, with exact-match domains, blog content and vertical pages already published. A new domain won't win it early. The realistic route is specific, lower-competition queries where Koli has something real to say.

**Where Koli can differ (verify each is true before publishing):** any-language handling (Russian, Arabic, English, French are on the homepage), phone + WhatsApp in one system, Google Calendar/Sheets integration, urgent-case flagging, clinic verticals.

## 3. Positioning and keyword strategy

Target in three tiers. Volumes must be checked in Search Console / Google Keyword Planner before committing.

| Tier | Example Hebrew queries | Page type | Difficulty (est.) |
|---|---|---|---|
| Head | מזכירה וירטואלית AI, מוקד קבלה דיגיטלי | Homepage | High, don't chase yet |
| Vertical | מזכירה וירטואלית למרפאת שיניים, מענה טלפוני AI לקליניקה | `/industries/*` (live) | Medium |
| Problem/long-tail | איך להפחית ביטולי תורים במרפאה, שיחות שלא נענות במרפאה, מענה טלפוני בשעות ערב | Blog/guides | Low–medium |
| Language angle | מענה טלפוני ברוסית / בערבית למרפאה | Landing pages | Low (likely underserved, unverified) |
| Commercial | מחיר מזכירה וירטואלית AI, מזכירה AI מול מזכירה אנושית | Pricing, comparison | Medium |
| Brand/English | Koli AI, AI receptionist Israel | Homepage, EN page | Low |

## 4. Site architecture

```
/                                  homepage (exists)
/industries/<slug>                 6 vertical pages (exists)
/pricing                           NEW: how pricing works (even "from ₪X" or "custom quote" with what drives it)
/about                             NEW: who is behind Koli, contact, address/company details
/privacy, /terms                   NEW: footer links are currently "#" placeholders
/compare/ai-vs-human-receptionist  NEW
/blog                              NEW, 2 posts/month
/en                                NEW later: English mirror (hreflang he/en)
```

Internal linking: every blog post links to its matching industry page and the WhatsApp CTA; industry pages link back to relevant posts; homepage links to pricing and about.

## 5. Content plan (first 12 weeks)

| Wk | Piece | Target |
|---|---|---|
| 1–2 | Privacy + Terms + About (real content) | Trust, required for health-adjacent buyers |
| 2–3 | Pricing page | Commercial queries; fewer unqualified chats |
| 4 | Comparison: AI vs human receptionist vs answering service | Commercial |
| 5 | Guide: "כמה שיחות מפסידה מרפאה בלי מענה" (only with verifiable numbers or a first-party estimate) | Problem/long-tail |
| 6 | Guide: מענה ללקוחות דוברי רוסית/ערבית במרפאה | Language angle |
| 7 | Guide: מה לבדוק לפני שבוחרים מזכירה AI (checklist) | Consideration |
| 8–12 | One post per vertical problem (no-shows, after-hours, lead response time for real estate, etc.) | Long-tail |

Rules: each piece 800+ words with a unique angle. Don't publish "best AI receptionist" listicles that rank Koli first with no evidence. Don't add HowTo schema; don't add FAQPage for Google.

## 6. E-E-A-T and conversion trust (highest-leverage gap)

The audit found: privacy/terms links are `#`, there is no About page, no customer evidence, no named people. For a product handling patient calls this is the biggest ranking and conversion weakness.

- Real privacy policy and terms (have a lawyer review; health-data handling matters).
- About page with founder(s), company details, how the service works.
- One or two real case studies or testimonials with permission. Do not fabricate or paraphrase claims not given.
- A short data-handling explainer: what Koli records/stores, where, retention.
- Audio demo or call recording (with consent) on the homepage: the strongest proof for a voice product.

## 7. Technical foundation (mostly done)

Done in PRs #1–2: canonical domain, sitemap, robots, JSON-LD (Organization/WebSite/Service/BreadcrumbList), OG image, security headers, static prerender.

Remaining: Core Web Vitals baseline (LCP is the risk: three font families, animated hero); direct `www` redirect; CSP; per-page sitemap `lastmod`; Search Console + Bing Webmaster setup; add Organization `sameAs` once social profiles exist; Google Business Profile only if there is a real physical location (otherwise skip).

## 8. AI-search readiness (GEO)

- `llms.txt` is live (Google ignores it; low value).
- Publish factual, quotable statements on pricing, languages, integrations and limits (what Koli does NOT do), which is what AI answers cite.
- Get listed where AI answers pull from: reputable Israeli SaaS/AI directories, and any partner/customer pages that mention Koli.
- Check `Claude-SearchBot`, `OAI-SearchBot`, `PerplexityBot` stay allowed (currently allowed).

## 9. Roadmap

| Phase | Weeks | Deliverables |
|---|---|---|
| 1 Foundation | 1–4 | Privacy, terms, About, pricing; Search Console + sitemap submitted; CWV baseline and fixes; audio demo; www redirect |
| 2 Expansion | 5–12 | Comparison page; 6–8 guides; internal linking pass; language-angle pages; start collecting testimonials |
| 3 Scale | 13–24 | English mirror + hreflang; more vertical pages only where there is unique content; outreach to Israeli directories/partners; case studies |
| 4 Authority | 7–12 mo | Original data (anonymized call statistics, with consent); PR/podcast/press; refresh top pages quarterly |

Quality gate: no programmatic city/vertical pages with swapped nouns. Current 6 industry pages are ~340 words each; extend before adding more.

## 10. KPIs (assumptions; set real baselines from Search Console)

| Metric | Baseline | 3 mo | 6 mo | 12 mo |
|---|---|---|---|---|
| Indexed pages | 7 | 12 | 20 | 35 |
| Branded impressions ("קולי AI") | measure | measure | rising | rising |
| Non-branded queries with impressions | 0 | first vertical queries | top-20 for several vertical terms | top-10 for 3+ vertical terms |
| Organic WhatsApp/phone leads / month | measure (add click tracking) | first leads | steady | primary channel |
| CWV (LCP/INP/CLS) | measure | all "good" | hold | hold |

Track conversions: add click events on the WhatsApp and phone links (none exist yet), otherwise organic ROI is invisible.

## 11. Risks and dependencies

- Crowded market; a new domain with no backlinks: expect months before non-branded rankings. Mitigation: vertical/language long-tail, trust content.
- Content claims about accuracy, savings or no-show reduction need evidence. Third-party blog stats (e.g. "40–60% fewer no-shows") are not Koli's numbers; don't reuse them.
- Health-adjacent data: privacy claims must match reality; get legal review.
- Everything downstream depends on Search Console being set up and the sitemap submitted.

## Sources
- [mazkira.co.il](https://mazkira.co.il/) · [getgenie.co.il](https://getgenie.co.il/) · [mrbot.ai](https://mrbot.ai/virtual-secretary) · [comix-flow.com](https://comix-flow.com/industries/clinics) · [voicefleet.ai](https://voicefleet.ai/blog/he-ai-receptionist-small-business-2026) · [vcall.co.il](https://www.vcall.co.il/) · [automaziot.ai](https://automaziot.ai/blog/2026-06-ai-virtual-receptionist) · [juba.digital](https://juba.digital/services/ai-agents/ai-receptionist) · [Palmidos: AI receptionist Israel 2026](https://www.palmidos.com/en/magazine/ai-receptionist-for-small-business-israel-2026) · [Joov.ai](https://joov.ai/services-page/)
