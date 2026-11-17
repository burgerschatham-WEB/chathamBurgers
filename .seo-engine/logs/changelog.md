# SEO Engine Changelog

## 2026-11-15
**Action:** Blog published — "Fresh-Cut Fries in Chatham, Ontario, Cut Every Day"
**Files:** app/blog/fresh-cut-fries-chatham/page.tsx, app/blog/page.tsx, app/sitemap.ts, app/blog/best-burgers-chatham-ontario/page.tsx (pillar link), data/content-map.yaml, data/content-queue.yaml (q_009), data/topic-clusters.yaml, data/features.yaml, data/seo-keywords.csv, config.yaml + templates/tone-guide.md (fries wording)
**Summary:** Cluster page for tc_chatham_local targeting "fresh cut fries Chatham". ~1,200 words: what cut-every-day means, Small/Large/Family sizes, every menu item with fries, burger pairings, takeout tips, 5 FAQs, one CTA. E-E-A-T: since 1985, flame grill, fries cut every day. Owner confirmed "fresh-cut fries, cut every day" wording and approved publishing. No SERP/PAA data was provided; FAQ to be refreshed when it is.
**Triggered by:** user

## 2026-04-14 01:00
**Action:** Blog drafted — "Best Burgers in Chatham Ontario (2026 Guide)"
**Files:** app/blog/best-burgers-chatham-ontario/page.tsx, data/content-map.yaml, data/content-queue.yaml (q_001 → human-review)
**Summary:** Pillar blog for tc_chatham_local cluster written. SERP showed local Maps pack results — no dedicated burger blog ranking. Wrote honest local guide mentioning Dog Days BBQ, Wing Boyz, Suite 46, Chatham Kebab & Gyro, Craves Poutinerie. E-E-A-T: Sarah M. testimonial + 40-year heritage metric. ~2100 words. Status: human-review.
**Triggered by:** user

## 2026-04-14 00:00
**Action:** Initial engine setup
**Files:** config.yaml, data/features.yaml, data/competitors.yaml, data/seo-keywords.csv, data/topic-clusters.yaml, data/content-map.yaml, data/content-queue.yaml, templates/blog-frontmatter.yaml, templates/blog-structures.yaml, templates/tone-guide.md, templates/comparison-template.md, logs/changelog.md, USAGE-GUIDE.md
**Summary:** Full SEO Content Engine initialized for Chatham Burgers. Scanned menu data and site content to extract 20+ features. Created 4 topic clusters (local, smash burger, charcoal grilled, competitors) with 8 high/medium priority blog ideas queued. 22 seed keywords seeded. No existing blogs found.
**Triggered by:** user

## 2026-11-15 — Beef sourcing rule
- Owner confirmed the beef comes from a local farm butcher. Added `brand_rules.beef` to config.yaml and a matching line in tone-guide.md. Existing "local farm beef" wording in live content is accurate and stays.

## 2026-11-15 — Menu sync: website vs TV boards and Toast
- Checked the website menu (lib/menuData.ts) against the final TV boards (marketing repo assets/tv-menus/final-2026-11) and the live Toast ordering page.
- Added what was missing from the website: Milkshakes ($5.25; chocolate, vanilla, strawberry; +$3 combo upgrade), Friday Burger + Beer ($20), the Mexican bean veggie patty option, burger add-ons (cheese +$1, bacon +$2) and free toppings, the +$5 combo rule, and the non-Pepsi drinks listed on Toast.
- Toast's generic "Can Pop $1.99" and "Bottle Pop $2.99" buttons were not copied; they conflict with the named drink prices. Asked the owner.
