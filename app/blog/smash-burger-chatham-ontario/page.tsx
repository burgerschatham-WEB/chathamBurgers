import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smash Burger Chatham Ontario — Charcoal Grilled Since 1985",
  description:
    "Chatham's best smash burger is charcoal grilled, made with fresh local farm beef, and served the same way since 1985. Here's what makes our Dbl Smash Burger different — and why it matters.",
  alternates: { canonical: "https://chathamburgers.ca/blog/smash-burger-chatham-ontario" },
  openGraph: {
    url: "https://chathamburgers.ca/blog/smash-burger-chatham-ontario",
    images: [{ url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80", width: 1200, height: 630 }],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Smash Burger Chatham Ontario — Charcoal Grilled Since 1985",
  description: "Chatham's best smash burger is charcoal grilled, made with fresh local farm beef, and served the same way since 1985.",
  datePublished: "2026-05-03",
  dateModified: "2026-05-03",
  author: { "@type": "Organization", name: "Chatham Burgers", url: "https://chathamburgers.ca" },
  publisher: { "@type": "Organization", name: "Chatham Burgers", url: "https://chathamburgers.ca" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://chathamburgers.ca/blog/smash-burger-chatham-ontario" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I get the best smash burger in Chatham Ontario?",
      acceptedAnswer: { "@type": "Answer", text: "Chatham Burgers on Grand Ave W has been serving charcoal-grilled smash burgers made with fresh local farm beef since 1985. The Dbl Smash Burger — two patties smashed with onion on a charcoal flame — is the local favourite." },
    },
    {
      "@type": "Question",
      name: "What makes a charcoal smash burger different from a regular smash burger?",
      acceptedAnswer: { "@type": "Answer", text: "Charcoal burns hotter and with a different heat profile than gas or flat-top grills. The result is a deeper crust on the smashed patty, a smokier flavour, and fat that renders differently — giving you more flavour in every bite. It's a real, noticeable difference." },
    },
    {
      "@type": "Question",
      name: "Does Chatham Burgers use fresh beef for their smash burgers?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Chatham Burgers sources fresh beef from local Ontario farms, delivered daily. Their smash burgers are never made from frozen patties — that's been the standard since they opened in 1985." },
    },
    {
      "@type": "Question",
      name: "How much does the smash burger cost at Chatham Burgers?",
      acceptedAnswer: { "@type": "Answer", text: "The Dbl Smash Burger is $12.99. It includes two fresh beef patties smashed with onion and seasoning on the charcoal flame, with standard toppings." },
    },
    {
      "@type": "Question",
      name: "Can I order Chatham Burgers smash burger online?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — online ordering for pickup is available at chathamburgers.ca/order." },
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
      <article style={{ background: "#0a0a0a", minHeight: "100vh", paddingTop: "80px", color: "#ffffff" }}>

        {/* Hero */}
        <header style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)", padding: "64px 0 48px", borderBottom: "1px solid #2a2a2a" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.3em", color: "#DC2626", fontSize: "0.78rem", textTransform: "uppercase", marginBottom: "16px" }}>
              Chatham, Ontario · Charcoal Grilled · 2026
            </p>
            <h1 style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em", fontSize: "clamp(2.2rem, 6vw, 4rem)", color: "#ffffff", lineHeight: 1.05, marginBottom: "20px" }}>
              The{" "}
              <span style={{ color: "#F4BA2E" }}>Smash Burger</span>
              {" "}Chatham Ontario{" "}
              <br />
              Has Been Waiting For
            </h1>
            <p style={bodyText}>
              Smash burgers are everywhere right now. But most of them have never met a charcoal flame. Here's why that changes everything — and why Chatham Burgers has been doing it right since before the trend existed.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontFamily: "var(--font-lato)", fontSize: "0.8rem", color: "#666" }}>
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
              If you've been searching for a smash burger in Chatham, Ontario, you've probably already heard our name. We're Chatham Burgers — family-owned, flame-grilling on the same charcoal grill since 1985.
            </p>
            <p style={bodyText}>
              We didn't follow the smash burger trend. We were here first. And the reason our smash burger hits differently from every other version you've tried isn't marketing — it's the grill.
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

          {/* Why charcoal */}
          <section style={{ marginBottom: "48px" }}>
            <H2>Why Charcoal Makes the Difference</H2>
            <p style={bodyText}>
              Most smash burgers are cooked on a flat-top griddle. That's fine — it produces a great crust. But charcoal introduces something a flat-top can never give you: flavour from the fire itself.
            </p>
            <p style={bodyText}>
              Charcoal burns at a different temperature profile than gas. It creates an uneven, fierce, live heat. When a beef patty gets smashed onto the bars of a charcoal grill, the fat renders and falls, the smoke rises back up through the meat, and you get a flavour layer that simply doesn't exist on a flat-top.
            </p>
            <p style={bodyText}>
              We've been cooking on the same charcoal grill setup since 1985. We had the option to upgrade to gas multiple times — cleaner, cheaper to run, easier to control. We never did. The flavour difference is that important to us.
            </p>

            <blockquote style={{ margin: "32px 0", padding: "24px 28px", background: "#141414", borderLeft: "4px solid #F4BA2E", borderRadius: "0 8px 8px 0" }}>
              <p style={{ fontFamily: "var(--font-lato)", color: "#dddddd", fontSize: "1.05rem", lineHeight: "1.7", fontStyle: "italic", marginBottom: "12px" }}>
                "The Dbl Smash Burger is absolutely incredible. Juicy, perfectly seasoned, and those fresh-cut fries are something else."
              </p>
              <p style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.1em", color: "#F4BA2E", fontSize: "0.78rem", textTransform: "uppercase" }}>
                — Mike T., Chatham
              </p>
            </blockquote>
          </section>

          <Divider />

          {/* Our smash burger */}
          <section style={{ marginBottom: "48px" }}>
            <H2>Our Dbl Smash Burger — What You're Getting</H2>
            <p style={bodyText}>
              The Dbl Smash Burger at Chatham Burgers is two fresh beef patties, each smashed directly onto the charcoal grill with onion and seasoning pressed into the crust as it forms. The onion caramelizes into the patty. The seasoning becomes part of the crust. The charcoal does the rest.
            </p>

            <div style={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: "10px", padding: "24px 28px", margin: "28px 0" }}>
              <p style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.15em", color: "#F4BA2E", fontSize: "0.78rem", textTransform: "uppercase", marginBottom: "16px" }}>
                What's in it
              </p>
              {[
                ["The beef", "Fresh local Ontario farm beef, delivered daily. Never frozen. At the right fat ratio for a smash."],
                ["The smash", "Pressed hard onto the charcoal grill — maximum crust, maximum Maillard."],
                ["The onion", "Smashed into the patty as it cooks. Caramelizes into the crust, not just a topping on top."],
                ["The seasoning", "Original recipe, unchanged since 1985. Simple, right, and ours."],
                ["Standard toppings", "Lettuce, tomato, pickles, onion, ketchup, mustard, mayo on a fresh-baked local bun."],
              ].map(([label, detail], i) => (
                <div key={i} style={{ display: "flex", gap: "16px", marginBottom: i < 4 ? "14px" : "0", paddingBottom: i < 4 ? "14px" : "0", borderBottom: i < 4 ? "1px solid #2a2a2a" : "none" }}>
                  <span style={{ fontFamily: "var(--font-oswald)", color: "#ffffff", fontSize: "0.9rem", letterSpacing: "0.04em", minWidth: "120px", flexShrink: 0 }}>{label}</span>
                  <span style={{ fontFamily: "var(--font-lato)", color: "#888", fontSize: "0.88rem", lineHeight: "1.6" }}>{detail}</span>
                </div>
              ))}
            </div>

            <p style={bodyText}>
              Price: <strong style={{ color: "#ffffff" }}>$12.99</strong>. Our most popular item, and the one most regulars say they order every single time.
            </p>
          </section>

          <Divider />

          {/* Fresh beef section */}
          <section style={{ marginBottom: "48px" }}>
            <H2>Fresh Local Beef — Why It Actually Matters for Smash Burgers</H2>
            <p style={bodyText}>
              The smash burger technique is unforgiving. The patty is thin. There's nowhere to hide behind sauces or thick toppings. The beef is the burger. Which means the quality of the beef shows up in every bite.
            </p>
            <p style={bodyText}>
              We source our beef from local Ontario farms and take delivery every morning. Fresh beef has a different fat content, texture, and moisture level than frozen. When it hits the charcoal and gets smashed, it cooks in its own natural fat rather than the leached-out liquid of a previously frozen patty. That's what produces the crust and the juiciness at the same time.
            </p>
            <p style={bodyText}>
              This isn't a marketing claim — it's what 40 years of doing this has taught us. Frozen beef can make a decent burger. Fresh local farm beef on charcoal makes the best one.
            </p>

            <blockquote style={{ margin: "32px 0", padding: "24px 28px", background: "#141414", borderLeft: "4px solid #DC2626", borderRadius: "0 8px 8px 0" }}>
              <p style={{ fontFamily: "var(--font-lato)", color: "#dddddd", fontSize: "1.05rem", lineHeight: "1.7", fontStyle: "italic", marginBottom: "12px" }}>
                "Family-owned and it shows. They treat every customer like a regular. The food is consistently amazing, every single visit."
              </p>
              <p style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.1em", color: "#F4BA2E", fontSize: "0.78rem", textTransform: "uppercase" }}>
                — Jennifer K., Chatham
              </p>
            </blockquote>
          </section>

          <Divider />

          {/* Pair with fries */}
          <section style={{ marginBottom: "48px" }}>
            <H2>What to Order With It</H2>
            <p style={bodyText}>
              The smash burger deserves proper fries. We cut ours by hand in-house, every day, never frozen. They're the right thickness, fried properly, and genuinely worth getting the large.
            </p>
            <p style={bodyText}>
              If you want to lean into the Chatham Burgers experience fully:
            </p>
            <ul style={listStyle}>
              <li style={listItem}><strong style={{ color: "#ffffff" }}>Dbl Smash Burger ($12.99)</strong> — The fan favourite. Two charcoal-grilled smash patties with onion and seasoning.</li>
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
                a="Chatham Burgers at 215 Grand Ave W has been serving charcoal-grilled smash burgers made with fresh local farm beef since 1985. The Dbl Smash Burger is our most popular item — two patties smashed with onion directly on the charcoal flame."
              />
              <FAQ
                q="What makes a charcoal smash burger different from a regular smash burger?"
                a="Charcoal burns with a different heat profile than gas or a flat-top griddle. The live fire adds a layer of smoky flavour that a flat-top can't produce. Fat renders into the flame and the smoke rises back through the patty — you taste that in every bite. It's a real, noticeable difference."
              />
              <FAQ
                q="Does Chatham Burgers use fresh beef for their smash burgers?"
                a="Yes. We source fresh beef from local Ontario farms with daily delivery. Our smash burgers are never made from frozen patties — that's been our standard since 1985."
              />
              <FAQ
                q="How much does the Dbl Smash Burger cost at Chatham Burgers?"
                a="The Dbl Smash Burger is $12.99. It includes two fresh beef patties smashed with onion and seasoning on the charcoal grill, with standard toppings on a fresh-baked local bun."
              />
              <FAQ
                q="Can I order the smash burger online?"
                a="Yes — online ordering for pickup is available at chathamburgers.ca/order."
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
              Smash burgers are having a moment. But in Chatham, the charcoal-grilled version has been here since 1985 — before the trend, before the food blogs, before the Instagram posts. We're not catching up to anything. We've just been doing this for 40 years.
            </p>
            <p style={bodyText}>
              Fresh local farm beef, smashed on a live charcoal flame, with the same recipe we've used since day one. If you want the best smash burger in Chatham, Ontario — you now know where to go.
            </p>

            <div style={{ marginTop: "32px", padding: "28px 32px", background: "linear-gradient(135deg, #1a0e00, #2a1800)", border: "1px solid #3a2000", borderRadius: "8px", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.06em", fontSize: "1.6rem", color: "#ffffff", marginBottom: "8px" }}>
                ORDER THE DBL SMASH BURGER
              </p>
              <p style={{ fontFamily: "var(--font-lato)", color: "#aaa", fontSize: "0.9rem", marginBottom: "20px" }}>
                Fresh local farm beef · Charcoal grilled · Same recipe since 1985 · 215 Grand Ave W, Chatham ON
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/order" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.12em", fontSize: "1.1rem", background: "#F4BA2E", color: "#0a0a0a", padding: "13px 32px", borderRadius: "4px", textDecoration: "none" }}>
                  Order Online →
                </Link>
                <a href="tel:5193541414" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.12em", fontSize: "1.1rem", background: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)", padding: "13px 32px", borderRadius: "4px", textDecoration: "none" }}>
                  (519) 354-1414
                </a>
              </div>
            </div>

            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <Link href="/blog/best-burgers-chatham-ontario" style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.15em", fontSize: "0.8rem", textTransform: "uppercase", color: "#555", textDecoration: "none" }}>
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
  color: "#cccccc",
  fontSize: "1rem",
  lineHeight: "1.85",
  marginBottom: "20px",
};

const listStyle: React.CSSProperties = { paddingLeft: "20px", marginBottom: "20px" };

const listItem: React.CSSProperties = {
  fontFamily: "var(--font-lato), sans-serif",
  color: "#cccccc",
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
  return <hr style={{ border: "none", borderTop: "1px solid #2a2a2a", margin: "40px 0" }} />;
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div style={{ padding: "20px 24px", background: "#111", border: "1px solid #2a2a2a", borderRadius: "8px" }}>
      <p style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.03em", color: "#ffffff", fontSize: "1rem", marginBottom: "10px" }}>{q}</p>
      <p style={{ fontFamily: "var(--font-lato)", color: "#999", fontSize: "0.9rem", lineHeight: "1.65", margin: 0 }}>{a}</p>
    </div>
  );
}
