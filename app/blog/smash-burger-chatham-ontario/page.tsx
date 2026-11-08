import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smash Burger Chatham Ontario — Flame-Grilled Since 1985",
  description:
    "A flame-grilled smash burger in Chatham, Ontario, made with fresh local farm beef. What makes our Dbl Smash Burger different, and why it matters.",
  alternates: { canonical: "https://chathamburger.com/blog/smash-burger-chatham-ontario" },
  openGraph: {
    url: "https://chathamburger.com/blog/smash-burger-chatham-ontario", images: ['/opengraph-image'],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Smash Burger Chatham Ontario — Flame-Grilled Since 1985",
  description: "A flame-grilled smash burger in Chatham, Ontario, made with fresh local farm beef. Serving Chatham since 1985.",
  datePublished: "2026-05-03",
  dateModified: "2026-05-03",
  author: { "@type": "Organization", name: "Chatham Burgers", url: "https://chathamburger.com" },
  publisher: { "@type": "Organization", name: "Chatham Burgers", url: "https://chathamburger.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://chathamburger.com/blog/smash-burger-chatham-ontario" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I get the best smash burger in Chatham Ontario?",
      acceptedAnswer: { "@type": "Answer", text: "Chatham Burgers at 215 Grand Ave W has been serving Chatham since 1985. Our flame-grilled smash burgers are made with fresh local farm beef. The Dbl Smash Burger is the local favourite — two patties smashed thin with onion, then finished over the flame." },
    },
    {
      "@type": "Question",
      name: "What makes a flame-grilled smash burger different from a regular smash burger?",
      acceptedAnswer: { "@type": "Answer", text: "Most smash burgers are cooked start to finish on a flat-top griddle. Ours get finished over a real open flame. Fat drips into the flame, smoke and flare-ups come back up through the patty, and you get char on top of the crust. You can taste it." },
    },
    {
      "@type": "Question",
      name: "Does Chatham Burgers use fresh beef for their smash burgers?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We use fresh beef from local Ontario farms, delivered daily." },
    },
    {
      "@type": "Question",
      name: "How much does the Dbl Smash Burger cost at Chatham Burgers?",
      acceptedAnswer: { "@type": "Answer", text: "The Dbl Smash Burger is $13. Two fresh beef patties smashed thin with onion and seasoning, finished over the flame, with standard toppings on a fresh-baked local bun." },
    },
    {
      "@type": "Question",
      name: "Can I order the smash burger online?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — online ordering for pickup is available at chathamburger.com/order." },
    },
  ],
};

export default function SmashBurgerChathamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article style={{ background: "#2A1408", minHeight: "100vh", paddingTop: "80px", color: "#ffffff" }}>

        {/* Hero */}
        <header style={{ background: "linear-gradient(135deg, #2A1408 0%, #1a0a00 50%, #2A1408 100%)", padding: "64px 0 48px", borderBottom: "1px solid #5A3820" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.3em", color: "#DC2626", fontSize: "0.78rem", textTransform: "uppercase", marginBottom: "16px" }}>
              Chatham, Ontario · Flame-Grilled · 2026
            </p>
            <h1 style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em", fontSize: "clamp(2.2rem, 6vw, 4rem)", color: "#ffffff", lineHeight: 1.05, marginBottom: "20px" }}>
              The{" "}
              <span style={{ color: "#F4BA2E" }}>Smash Burger</span>
              {" "}Chatham Ontario{" "}
              <br />
              Has Been Waiting For
            </h1>
            <p style={bodyText}>
              Smash burgers are everywhere right now. Most of them never go near an open flame. Ours do. Here's why that matters — and why Chatham Burgers was serving burgers here long before the trend showed up.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontFamily: "var(--font-lato)", fontSize: "0.8rem", color: "#6B5A4A" }}>
              <span>By Chatham Burgers</span>
              <span>·</span>
              <span>May 3, 2026</span>
              <span>·</span>
              <span>~7 min read</span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* Intro */}
          <section style={{ marginBottom: "48px" }}>
            <p style={bodyText}>
              If you've been searching for a smash burger in Chatham, Ontario, you've probably already heard our name. We're Chatham Burgers — flame-grilling burgers on Grand Ave W since 1985.
            </p>
            <p style={bodyText}>
              Smash burgers got trendy. We were already here. And the reason ours hits different isn't marketing. It's the flame.
            </p>
          </section>

          <Divider />

          {/* What is a smash burger */}
          <section style={{ marginBottom: "48px" }}>
            <H2>What Is a Smash Burger, Exactly?</H2>
            <p style={bodyText}>
              A smash burger starts as a ball of fresh ground beef. The moment it hits a hot surface, it gets pressed — smashed — flat with a heavy press or spatula. That aggressive contact with the heat does something you can't replicate any other way: it creates a deep, lacey, caramelized crust through the Maillard reaction.
            </p>
            <p style={bodyText}>
              The Maillard reaction is the science behind the flavour. When protein and sugars in the beef hit intense, direct heat, they form hundreds of new flavour compounds. The thinner the patty, the more surface area makes contact, and the more of that crust you get. That's the whole point of smashing.
            </p>
            <p style={bodyText}>
              Done wrong — with frozen beef, on a cold surface, or without enough pressure — you just get a flat burger. Done right, with fresh beef and a screaming hot surface, it's one of the best things in food.
            </p>
          </section>

          <Divider />

          {/* Why the flame */}
          <section style={{ marginBottom: "48px" }}>
            <H2>Open Flame vs. Flat-Top: Why It Matters</H2>
            <p style={bodyText}>
              Most smash burgers are cooked on a flat-top griddle. That's fine. A flat-top makes a great crust. But it can't give you one thing: flavour from the fire itself.
            </p>
            <p style={bodyText}>
              On a flat-top, the fat stays on the steel. Over an open flame, it drips into the fire. You get smoke. You get a little flare-up. That comes right back up through the meat, along with some real char on the edges. It's a flavour layer a griddle just doesn't have.
            </p>
            <p style={bodyText}>
              So we smash them thin, then finish them over the flame. Simple. A little messy. Worth it.
            </p>
          </section>

          <Divider />

          {/* Pair with fries */}
          <section style={{ marginBottom: "48px" }}>
            <H2>What to Order With It</H2>
            <p style={bodyText}>
              The smash burger deserves proper fries. We cut ours by hand in-house, every day. They're the right thickness, fried properly, and genuinely worth getting the large.
            </p>
            <p style={bodyText}>
              If you want to lean into the Chatham Burgers experience fully:
            </p>
            <ul style={listStyle}>
              <li style={listItem}><strong style={{ color: "#ffffff" }}>Dbl Smash Burger ($13)</strong> — The fan favourite. Two flame-grilled smash patties with onion and seasoning.</li>
              <li style={listItem}><strong style={{ color: "#ffffff" }}>Fresh-Cut Fries (Large)</strong> — Hand-cut daily. Get the large. You won't regret it.</li>
              <li style={listItem}><strong style={{ color: "#ffffff" }}>Poutine</strong> — If you're in the mood to go full Chatham about it.</li>
            </ul>
            <p style={bodyText}>
              You can also go Smash Combo — burger, fries, and a drink. Best value for a full meal.
            </p>
          </section>

          <Divider />

          {/* FAQ */}
          <section style={{ marginBottom: "48px" }}>
            <H2>Frequently Asked Questions</H2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
              <FAQ
                q="Where can I get the best smash burger in Chatham Ontario?"
                a="Chatham Burgers at 215 Grand Ave W has been serving Chatham since 1985. Our flame-grilled smash burgers are made with fresh local farm beef. The Dbl Smash Burger is the local favourite — two patties smashed thin with onion, then finished over the flame."
              />
              <FAQ
                q="What makes a flame-grilled smash burger different from a regular smash burger?"
                a="Most smash burgers are cooked start to finish on a flat-top griddle. Ours get finished over a real open flame. Fat drips into the flame, smoke and flare-ups come back up through the patty, and you get char on top of the crust. You can taste it."
              />
              <FAQ
                q="Does Chatham Burgers use fresh beef for their smash burgers?"
                a="Yes. We use fresh beef from local Ontario farms, delivered daily."
              />
              <FAQ
                q="How much does the Dbl Smash Burger cost at Chatham Burgers?"
                a="The Dbl Smash Burger is $13. Two fresh beef patties smashed thin with onion and seasoning, finished over the flame, with standard toppings on a fresh-baked local bun."
              />
              <FAQ
                q="Can I order the smash burger online?"
                a="Yes — online ordering for pickup is available at chathamburger.com/order."
              />
              <FAQ
                q="Is the smash burger available every day?"
                a="Yes. The Dbl Smash Burger is on our regular menu, available every day during opening hours."
              />
            </div>
          </section>

          <Divider />

          {/* Conclusion */}
          <section style={{ marginBottom: "48px" }}>
            <H2>The Bottom Line</H2>
            <p style={bodyText}>
              Smash burgers are having a moment. Chatham Burgers has been on Grand Ave W since 1985 — before the trend, before the food blogs, before the Instagram posts. Thanks, Chatham, for keeping this place going.
            </p>
            <p style={bodyText}>
              Fresh local farm beef. Smashed thin, finished over the flame. Fresh-cut fries on the side. If you want a smash burger in Chatham, Ontario — you know where to find us.
            </p>

            <div style={{ marginTop: "32px", padding: "28px 32px", background: "linear-gradient(135deg, #1a0e00, #2a1800)", border: "1px solid #3a2000", borderRadius: "8px", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.06em", fontSize: "1.6rem", color: "#ffffff", marginBottom: "8px" }}>
                ORDER THE DBL SMASH BURGER
              </p>
              <p style={{ fontFamily: "var(--font-lato)", color: "#D2BFA5", fontSize: "0.9rem", marginBottom: "20px" }}>
                Fresh local farm beef · Flame-grilled · Est. 1985 · 215 Grand Ave W, Chatham ON
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/order" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.12em", fontSize: "1.1rem", background: "#F4BA2E", color: "#2A1408", padding: "13px 32px", borderRadius: "4px", textDecoration: "none" }}>
                  Order Online →
                </Link>
                <a href="tel:5193541414" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.12em", fontSize: "1.1rem", background: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)", padding: "13px 32px", borderRadius: "4px", textDecoration: "none" }}>
                  (519) 354-1414
                </a>
              </div>
            </div>

            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <Link href="/blog/best-burgers-chatham-ontario" style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.15em", fontSize: "0.8rem", textTransform: "uppercase", color: "#5A4A3A", textDecoration: "none" }}>
                ← Read our full Chatham burger guide
              </Link>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-lato), sans-serif",
  color: "#EADCC6",
  fontSize: "1rem",
  lineHeight: "1.85",
  marginBottom: "20px",
};

const listStyle: React.CSSProperties = { paddingLeft: "20px", marginBottom: "20px" };

const listItem: React.CSSProperties = {
  fontFamily: "var(--font-lato), sans-serif",
  color: "#EADCC6",
  fontSize: "1rem",
  lineHeight: "1.8",
  marginBottom: "12px",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "#ffffff", marginBottom: "16px", marginTop: "0" }}>
      {children}
    </h2>
  );
}

function Divider() {
  return <hr style={{ border: "none", borderTop: "1px solid #5A3820", margin: "40px 0" }} />;
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div style={{ padding: "20px 24px", background: "#331A0A", border: "1px solid #5A3820", borderRadius: "8px" }}>
      <p style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.03em", color: "#ffffff", fontSize: "1rem", marginBottom: "10px" }}>{q}</p>
      <p style={{ fontFamily: "var(--font-lato)", color: "#9A8A7A", fontSize: "0.9rem", lineHeight: "1.65", margin: 0 }}>{a}</p>
    </div>
  );
}
