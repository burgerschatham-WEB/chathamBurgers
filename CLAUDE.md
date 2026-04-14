@AGENTS.md

---

## SEO Content Engine

SEO engine lives in `.seo-engine/`. Use it for all blog and SEO tasks.

**UNIVERSAL RULE: For ANY task involving blogs, content, SEO, keywords, competitors, or documentation in this project — ALWAYS read `.seo-engine/config.yaml` and the relevant data files FIRST before responding.** This includes writing, evaluating, reviewing, editing, auditing, planning, or answering questions about content. Never rely on your default behavior — always check the engine data.

**Sub-Agent Rule:** Parallelize independent tasks. Don't do sequentially what can run simultaneously.

### File Reference

| File | Purpose | When |
|------|---------|------|
| `config.yaml` | Settings, author, trust signals | Before any task |
| `data/features.yaml` | Feature registry (menu items, cooking method, differentiators) | Before writing |
| `data/competitors.yaml` | Competitor matrix | Before comparisons |
| `data/seo-keywords.csv` | Keywords + SERP data | Before choosing topics |
| `data/content-map.yaml` | Blog ↔ feature ↔ keyword map | Before writing |
| `data/content-queue.yaml` | Prioritized blog ideas | When deciding what to write |
| `data/topic-clusters.yaml` | Pillar/cluster architecture | Before writing |
| `templates/blog-frontmatter.yaml` | Frontmatter format | When generating |
| `templates/blog-structures.yaml` | Outlines by type | When structuring |
| `templates/tone-guide.md` | Style + E-E-A-T rules | Before writing |
| `logs/changelog.md` | Audit trail | After every action |

### Core Rules

1. **Read before writing.** Always read: config, features, content-map, content-queue, topic-clusters, tone-guide.
2. **Never fabricate features.** Only reference what's in features.yaml.
3. **Competitor claims need confidence.** If "unverified" or 90+ days old → caveat or direct reader to competitor's page.
4. **No web search for SERP data.** NEVER use built-in web search for SERP research. Always ask the user to provide real Google SERP data (top results, PAA, related searches).
5. **Cannibalization check before every blog.** Search content-map for overlapping keywords.
6. **Every blog needs a unique angle.** "More comprehensive" is NOT an angle.
7. **E-E-A-T mandatory.** Every blog must include at least one: testimonial, metric, or experience from config.trust_signals.
8. **Human review required.** Save all blogs as `draft: true`. Never auto-publish.
9. **Respect pillar/cluster linking.** Cluster pages → link to pillar. Pillar → link to all cluster pages.
10. **Update all files after writing:** content-map, features (blog_refs), seo-keywords, content-queue, topic-clusters, changelog.
11. **Never delete data.** Add or update only.
12. **Log everything** to changelog.md.
