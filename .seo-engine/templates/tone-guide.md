# Chatham Burgers — Tone Guide
# Read this before writing every blog post.

## Brand Voice

Chatham Burgers is a 40-year-old family-owned charcoal grill restaurant in Chatham, Ontario.
The voice is: **proud, warm, direct, and local.**

- Proud without being arrogant. We've been doing this 40 years — we don't need to shout about it.
- Warm without being sappy. We're a grill restaurant, not a greeting card.
- Direct without being blunt. Get to the point. No filler.
- Local without being parochial. Chatham people are our people, but don't alienate outsiders.

---

## Voice Rules by Blog Type

| Blog Type | Voice | Avoid |
|-----------|-------|-------|
| Local guide | Knowledgeable neighbour | Tourism-brochure hype |
| Comparison | Fair analyst | Trashing competitors |
| How-to | Patient teacher | Condescension |
| Thought leadership | Confident storyteller | Corporate speak |
| Listicle | Helpful curator | Generic filler entries |

---

## E-E-A-T: Mandatory for Every Blog

Every published blog MUST include **at least one** of:

1. **Testimonial** — use quotes from config.yaml trust_signals.testimonials
   - Sarah M.: "Best burgers in Chatham, hands down..."
   - Mike T.: "The Dbl Smash Burger is absolutely incredible..."
   - Jennifer K.: "Family-owned and it shows..."

2. **Metric** — use facts from config.yaml trust_signals.metrics
   - "40 years in business since 1985"
   - "Same family, same grill, same recipes since 1985"
   - "Original charcoal grill — never switched to gas"

3. **Experience signal** — specific first-person observation from running the grill daily
   - "After 40 years of charcoal grilling, we've learned..."
   - "Every morning at Chatham Burgers starts with..."

4. **Review link** — reference Google Maps reviews where appropriate

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
- Soft, not pushy: "Hungry? [Order online](https://chathamburgers.ca/order) or come see us in Chatham."
- Never mid-article CTAs
- Never more than one CTA

---

## Writing Don'ts

- Don't write "another version of what already ranks" — unique angle is required (see content-queue.yaml)
- Don't use AI filler phrases: "In today's fast-paced world...", "It goes without saying...", "At the end of the day..."
- Don't be vague: "our burgers are amazing" → say WHY: "real charcoal produces a smoke ring..."
- Don't fabricate features — only reference what's in features.yaml
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
- [ ] E-E-A-T signal included (testimonial/metric/experience)
- [ ] One soft CTA at end only
- [ ] Cluster page links to its pillar
- [ ] draft: true until human review complete
