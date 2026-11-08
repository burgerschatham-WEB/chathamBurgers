# Chatham Burgers — Tone Guide
# Read this before writing every blog post.

## Brand Voice

Chatham Burgers is a flame-grill burger restaurant at 215 Grand Ave W in Chatham, Ontario,
serving Chatham since 1985.
The voice is: **warm, local, and plain-spoken.**

- Grateful, not boastful. The story is "Thanks, Chatham — for keeping this place going."
- Warm without being sappy. We're a grill restaurant, not a greeting card.
- Direct without being blunt. Get to the point. No filler.
- Local without being parochial. Chatham people are our people, but don't alienate outsiders.

---

## Locked Brand Rules (never break these)

1. **Cooking method:** always "flame-grilled", "flame grill" or "open flame". Never name or
   describe the fuel. Never claim we "never switched" grills or are the only grill of our
   kind in the area. A flame grill vs flat-top comparison is fine.
2. **Heritage:** "Est. 1985", "since 1985" and "serving Chatham for 40 years" are plain facts
   and fine. Never claim family ownership, multi-generational ownership, the same owners or
   the same recipes since 1985, or "family recipes". The current owner is not the original
   family. Don't describe regulars as "family".
3. **Reviews:** Use only real, attributable Google reviews quoted with permission, or none.
   Never invent quotes, names, ratings or review counts. Prefer not to state a star rating or
   review count at all; if you must, it has to be Google's current figure checked that day.
4. **Fries:** "Hand-cut fries made daily" is fine. No fresh-vs-frozen claims or comparisons.
   Small / Large / Family are real fry sizes and can be named.
5. **Links:** website is https://chathamburger.com. Online ordering is
   https://order.toasttab.com/online/chathamburgers (site order page: https://chathamburger.com/order).
6. **Words to avoid:** see `seo.avoid_terms` in config.yaml, plus hype words like "elevate",
   "indulge", "mouthwatering", "culinary journey", "unparalleled".

---

## Voice Rules by Blog Type

| Blog Type | Voice | Avoid |
|-----------|-------|-------|
| Local guide | Knowledgeable neighbour | Tourism-brochure hype |
| Comparison | Fair analyst | Trashing competitors |
| How-to | Patient teacher | Condescension |
| Thought leadership | Grateful, plain-spoken storyteller | Corporate speak, lineage claims |
| Listicle | Helpful curator | Generic filler entries |

---

## E-E-A-T: Mandatory for Every Blog

Every published blog MUST include **at least one** of:

1. **Real review (optional)** — Use only real, attributable Google reviews quoted with
   permission, or none. Never invent quotes, names, ratings or review counts.
   (config.yaml trust_signals.testimonials is intentionally empty until real, permitted
   reviews are added.)

2. **Fact** — use facts from config.yaml trust_signals.metrics
   - "Serving Chatham since 1985"
   - "40 years on Grand Ave W in Chatham"
   - "Burgers cooked on a flame grill"
   - "Hand-cut fries made daily"

3. **Experience signal** — specific first-person observation from working the grill daily
   - "Working a flame grill every day, we've learned..."
   - "Every morning at Chatham Burgers starts with..."

4. **Review link** — link to the Chatham Burgers Google listing where appropriate
   (no rating or count in the text).

If none of these can be naturally included, **do not publish** — ask user for input first.

---

## Competitor Mentions

- **Always lead with a competitor's strengths** before any comparison
- Never say a competitor is "bad" — say what we do differently
- Mark all competitor claims with confidence level from competitors.yaml
- If confidence is "unverified" → add caveat: "based on publicly available information"
- Example: "A&W is known for its speed and consistency. Where Chatham Burgers differs is..."

---

## CTA Rules

- **One CTA per blog** — at the very end
- Soft, not pushy: "Hungry? [Order online](https://order.toasttab.com/online/chathamburgers) or come see us in Chatham."
- Never mid-article CTAs
- Never more than one CTA

---

## Writing Don'ts

- Don't write "another version of what already ranks" — unique angle is required (see content-queue.yaml)
- Don't use AI filler phrases: "In today's fast-paced world...", "It goes without saying...", "At the end of the day..."
- Don't use hype words: "elevate", "indulge", "mouthwatering", "culinary journey"
- Don't be vague: "our burgers are amazing" → say WHY: "the flame grill gives the patty grill marks and a grilled edge..."
- Don't fabricate features — only reference what's in features.yaml
- Don't invent reviews, reviewer names, star ratings or review counts
- Don't guess at competitor capabilities — check competitors.yaml confidence levels
- Don't skip the unique angle — if you can't define it in one sentence, don't write the blog

---

## SEO Checklist (Before Saving)

- [ ] Primary keyword in: title, first paragraph, one H2, meta description, slug
- [ ] Title ≤ 60 characters
- [ ] Meta description ≤ 160 characters
- [ ] Slug ≤ 5 words, kebab-case
- [ ] At least 2 internal links with varied anchor text
- [ ] 1-2 external links to authoritative non-competitor sources
- [ ] FAQ section with questions from real People Also Ask data
- [ ] E-E-A-T signal included (fact/experience/real permitted review)
- [ ] Brand rules check: flame-grilled only, no family/lineage claims, no fresh-vs-frozen, no invented reviews, no star rating/count, no hype words
- [ ] Links use https://chathamburger.com and the Toast order URL
- [ ] One soft CTA at end only
- [ ] Cluster page links to its pillar
- [ ] draft: true until human review complete
