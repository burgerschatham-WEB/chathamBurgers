import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Stories & Guides | Chatham Burgers",
  description: "Local food guides, restaurant stories, and tips from Chatham Burgers. Flame-grilled burgers, serving Chatham, Ontario since 1985.",
  alternates: { canonical: "https://chathamburger.com/blog" },
  openGraph: { url: "https://chathamburger.com/blog", images: ['/opengraph-image'] },
};

const posts = [
  {
    slug: "history-of-burgers",
    title: "The History of Burgers: From Hamburg to Chatham",
    description:
      "From 19th-century Hamburg steak to the 1904 World's Fair, fast food, and the flame grill — the full story of how the burger became the world's favourite sandwich.",
    date: "June 6, 2026",
    category: "Food History",
    readTime: "9 min read",
  },
  {
    slug: "smash-burger-chatham-ontario",
    title: "Smash Burgers in Chatham Ontario — The Flame Grill Difference",
    description:
      "What makes a smash burger worth the hype? Crispy edges, fresh local farm beef and a flame grill. Here's how we do it at Chatham Burgers.",
    date: "May 3, 2026",
    category: "Technique & Taste",
    readTime: "6 min read",
  },
  {
    slug: "best-burgers-chatham-ontario",
    title: "Best Burgers in Chatham Ontario (2026 Guide)",
    description:
      "An honest local guide to the best burgers in Chatham, Ontario — including what to order and why fresh local farm meat makes all the difference.",
    date: "April 14, 2026",
    category: "Local Guide",
    readTime: "8 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <div style={{ background: "#2A1408", minHeight: "100vh", paddingTop: "64px" }}>
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #2A1408 0%, #1a0a00 50%, #2A1408 100%)",
          padding: "64px 0 48px",
          borderBottom: "1px solid #5A3820",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.3em",
              color: "#C8102E",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Stories & Guides
          </p>
          <h1
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              letterSpacing: "0.06em",
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            THE <span style={{ color: "#F5C200" }}>BLOG</span>
          </h1>
        </div>
      </section>

      {/* Posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  background: "#331A0A",
                  border: "1px solid #5A3820",
                  borderRadius: "8px",
                  padding: "28px 32px",
                  transition: "border-color 0.2s",
                  cursor: "pointer",
                }}
                className="hover:border-yellow-400/40 transition-colors"
              >
                <div style={{ display: "flex", gap: "12px", marginBottom: "12px", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      letterSpacing: "0.15em",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      color: "#C8102E",
                      background: "rgba(232,93,4,0.1)",
                      border: "1px solid rgba(232,93,4,0.3)",
                      padding: "3px 10px",
                      borderRadius: "3px",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      fontSize: "0.8rem",
                      color: "#5A4A3A",
                    }}
                  >
                    {post.date} · {post.readTime}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-bebas), sans-serif",
                    letterSpacing: "0.04em",
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                    color: "#ffffff",
                    marginBottom: "10px",
                    lineHeight: 1.1,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    color: "#8A7A6A",
                    fontSize: "0.9rem",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {post.description}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    letterSpacing: "0.1em",
                    fontSize: "0.8rem",
                    color: "#F5C200",
                    textTransform: "uppercase",
                    marginTop: "16px",
                    marginBottom: 0,
                  }}
                >
                  Read More →
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
