━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📖 SEO ENGINE — USAGE GUIDE (Chatham Burgers)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type these into Claude Code. Or just describe what you want naturally.

─── BRAND RULES (LOCKED) ────────────────────────

Every blog must follow config.yaml → brand_rules and templates/tone-guide.md:
   • Flame-grilled / flame grill / open flame only — never name the fuel
   • "Since 1985" is fine — no family-ownership or family-recipe claims
   • Story angle: "Thanks, Chatham — for keeping this place going."
   • Real, attributable Google reviews quoted with permission, or none —
     never invent quotes, names, ratings or review counts
   • Hand-cut fries made daily — no fresh-vs-frozen claims
   • Links: https://chathamburger.com and
     https://order.toasttab.com/online/chathamburgers
   • Warm, local, plain-spoken — no hype words

─── WRITING ─────────────────────────────────────

"Write the next blog"
   → Picks top priority from content-queue.yaml, asks for SERP data, drafts, saves as draft.

"Write a blog about [topic]"
   → Checks for cannibalization first, then writes.

"Write a comparison: Chatham Burgers vs [Competitor]"
   → Uses competitor data from competitors.yaml + comparison-template.md.

"Write the pillar page for [cluster name]"
   → Comprehensive pillar — needs your SERP data first.

"Approve blog [slug]"
   → Marks as published after your review (sets draft: false in content-map).

"Blog [slug] needs changes: [feedback]"
   → Revises and keeps in review.

─── SERP RESEARCH (REQUIRED BEFORE EVERY BLOG) ──

Claude Code will NOT guess SERP data — that produces generic content.

Before every blog, Claude Code will ask you to:
   1. Google the target keyword
   2. Share top 3-5 ranking page titles + URLs
   3. Share People Also Ask questions
   4. Share related searches from bottom of Google

This ensures the blog is written against real competition.

─── COMPETITOR UPDATES ──────────────────────────

"Update competitor: Greek Grill — here's their menu: [paste]"
"Wing Boyz updated their hours. Here's the new info: [paste]"

─── CONTENT QUEUE ───────────────────────────────

"What should I write next?"
   → Returns top 3 from content-queue.yaml by priority.

"Show topic cluster status"
   → Pillar + cluster page completion % per cluster.

"Check keyword cannibalization"
   → Scans content-map for overlapping keywords.

─── KEYWORDS ────────────────────────────────────

"Add these keywords: [paste keyword list]"
"Pull keywords for [topic]" (requires SEO MCP tool connected)

─── AUDITS ──────────────────────────────────────

"Run a content audit"
"Which blogs need updating?"
"What's our E-E-A-T coverage?"

─── CONFIG ──────────────────────────────────────

Edit .seo-engine/config.yaml anytime to change:
- Brand rules and avoid terms
- Trust signals (real, permitted reviews only)
- CTA text/URL
- Add/remove competitors
- Author info

─── YOUR BLOG QUEUE (as of 2026-11-07) ─────────

HIGH PRIORITY:
  q_001 — Best Burgers in Chatham Ontario (pillar) — needs update to brand rules
  q_002 — Best Smash Burger in Chatham Ontario (pillar)
  q_003 — Flame-Grilled Burgers Guide (pillar)
  q_004 — Thanks, Chatham: 40 Years of Burgers on Grand Ave (cluster)
  q_008 — Where to Get Gyros in Chatham Ontario (cluster)

MEDIUM PRIORITY:
  q_005 — Flame Grill vs Flat-Top
  q_006 — Smash Burger vs Regular Burger
  q_007 — Local Restaurant vs Chain (pillar)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
