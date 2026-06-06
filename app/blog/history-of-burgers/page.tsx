import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The History of Burgers: From Hamburg to Chatham",
  description:
    "How did the burger become the world's favourite sandwich? From Hamburg steak to the 1904 World's Fair, fast food, and the charcoal grill — the full history of burgers.",
  alternates: { canonical: "https://chathamburgers.ca/blog/history-of-burgers" },
  openGraph: {
    url: "https://chathamburgers.ca/blog/history-of-burgers",
    images: [{ url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80", width: 1200, height: 630 }],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The History of Burgers: From Hamburg to Chatham",
  description:
    "A complete history of the hamburger — from 19th-century Hamburg steak and the contested American origins to fast food, the charcoal grill, and the modern smash burger.",
  datePublished: "2026-06-06",
  dateModified: "2026-06-06",
  author: { "@type": "Organization", name: "Chatham Burgers", url: "https://chathamburgers.ca" },
  publisher: { "@type": "Organization", name: "Chatham Burgers", url: "https://chathamburgers.ca" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://chathamburgers.ca/blog/history-of-burgers" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who invented the hamburger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No single person is universally credited. The most-cited claims include Charlie Nagreen of Seymour, Wisconsin (1885), Frank and Charles Menches of Hamburg, New York (1885), Fletcher Davis of Athens, Texas (1880s), and Louis Lassen of Louis' Lunch in New Haven, Connecticut (around 1900). The hamburger went nationwide after the 1904 St. Louis World's Fair.",
      },
    },
    {
      "@type": "Question",
      name: "Where does the word 'hamburger' come from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It comes from Hamburg, Germany. German immigrants brought 'Hamburg steak' — a seasoned, minced beef patty — to the United States in the 1800s. When that patty was later served in a bun, the sandwich took the city's name. Over time 'hamburger' was shortened to 'burger', which became a suffix for everything from cheeseburgers to veggie burgers.",
      },
    },
    {
      "@type": "Question",
      name: "When did fast-food hamburgers begin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White Castle, founded in Wichita, Kansas in 1921, is widely considered the first hamburger fast-food chain — it standardized the burger and made it respectable. McDonald's introduced its Speedee Service System in 1948, and Ray Kroc began franchising it nationally in 1955, turning the burger into a global phenomenon.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a charcoal-grilled burger and a regular burger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Charcoal burns hotter than gas or a flat-top and adds smoke as fat drips onto the coals. That gives a charcoal-grilled burger a deeper crust and a smokier flavour you can't get from a griddle. Chatham Burgers has cooked on a real charcoal grill since 1985 — we never switched to gas.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Chatham Burgers been making burgers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chatham Burgers has been family-owned and charcoal-grilling in Chatham, Ontario since 1985 — that's 40 years of the same grill, the same original recipes, and fresh local farm beef. You can see the menu and order online at chathamburgers.ca/order.",
      },
    },
  ],
};

export default function HistoryOfBurgersPage() {
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
      <article
        style={{
          background: "#0a0a0a",
          minHeight: "100vh",
          paddingTop: "64px",
          color: "#ffffff",
        }}
      >
        {/* Hero */}
        <header
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)",
            padding: "64px 0 48px",
            borderBottom: "1px solid #2a2a2a",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                letterSpacing: "0.3em",
                color: "#C8102E",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Food History · Charcoal Grilled Since 1985
            </p>
            <h1
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.04em",
                fontSize: "clamp(2.2rem, 6vw, 4rem)",
                color: "#ffffff",
                lineHeight: 1.05,
                marginBottom: "20px",
              }}
            >
              The History of{" "}
              <span style={{ color: "#F5C200" }}>Burgers</span>
              <br />
              From Hamburg to Chatham
            </h1>
            <p
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "#aaaaaa",
                fontSize: "1.05rem",
                lineHeight: "1.7",
                marginBottom: "24px",
              }}
            >
              How did a humble beef patty become the most famous sandwich on earth? It's a story
              that runs from 19th-century Germany to a World's Fair in St. Louis, through fast-food
              empires — and lands, four decades ago, on a charcoal grill in Chatham, Ontario.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                fontFamily: "var(--font-lato), sans-serif",
                fontSize: "0.8rem",
                color: "#666",
              }}
            >
              <span>By Chatham Burgers</span>
              <span>·</span>
              <span>June 6, 2026</span>
              <span>·</span>
              <span>~9 min read</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* Intro */}
          <section style={{ marginBottom: "48px" }}>
            <p style={bodyText}>
              The burger is so ordinary, so everywhere, that it's easy to forget it has a history at
              all. But the sandwich you order without thinking is the result of more than a century
              of immigration, invention, argument, and craft — and a handful of small-town cooks who
              all claim they got there first.
            </p>
            <p style={bodyText}>
              We're Chatham Burgers. We've been crafting burgers on the same charcoal grill since
              1985, so we have a soft spot for where this food comes from. Here's the full story —
              from Hamburg steak to the modern smash burger — and where four decades of doing it the
              old way fits into it.
            </p>
          </section>

          <Divider />

          {/* Hamburg steak */}
          <section style={{ marginBottom: "48px" }}>
            <H2>Where the Burger Began: Hamburg Steak</H2>
            <p style={bodyText}>
              The word gives it away. <strong style={{ color: "#F5C200" }}>Hamburger</strong> comes
              from <strong style={{ color: "#F5C200" }}>Hamburg</strong>, the German port city. In
              the 1800s, Hamburg was known for a dish of seasoned, finely chopped beef — what English
              speakers came to call "Hamburg steak."
            </p>
            <p style={bodyText}>
              German immigrants carried the dish across the Atlantic. By the mid-1800s, "Hamburg
              steak" was appearing on American restaurant menus — including high-end ones in New York
              — as a known, respectable way to serve beef. At this point, though, it was just a patty
              on a plate. There was no bun, and there was no sandwich. That part came next, and it's
              where the story gets contested.
            </p>
          </section>

          <Divider />

          {/* The contested birth */}
          <section style={{ marginBottom: "48px" }}>
            <H2>The Contested Birth of the American Burger</H2>
            <p style={bodyText}>
              Put the patty between bread and you have a hamburger — but nobody can agree on who did
              it first. Several towns claim the title, and each makes a real case:
            </p>
            <ul style={listStyle}>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Charlie Nagreen — Seymour, Wisconsin (1885).</strong>{" "}
                "Hamburger Charlie" is said to have flattened a meatball between two slices of bread at
                the Seymour Fair so customers could walk and eat. Seymour still calls itself the "Home
                of the Hamburger."
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>The Menches Brothers — Hamburg, New York (1885).</strong>{" "}
                Frank and Charles Menches reportedly ran out of pork sausage at a county fair,
                substituted ground beef, and — the story goes — named it after the town they were in.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Fletcher Davis — Athens, Texas (1880s).</strong>{" "}
                "Old Dave" is credited by some Texans with serving ground-beef sandwiches at his
                lunch counter, and possibly bringing them to a wider audience years later.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Louis Lassen — New Haven, Connecticut (c. 1900).</strong>{" "}
                Louis' Lunch is often credited with serving one of America's first hamburger
                sandwiches, and the tiny shop is still open today.
              </li>
            </ul>
            <p style={bodyText}>
              The truth is that the hamburger probably wasn't invented once — it was invented many
              times, by different cooks solving the same problem: how do you serve hot beef to a
              hungry crowd that wants to keep moving? The one thing everyone agrees on is what made it
              famous.
            </p>
          </section>

          <Divider />

          {/* World's Fair */}
          <section style={{ marginBottom: "48px" }}>
            <H2>1904: The World's Fair Moment</H2>
            <p style={bodyText}>
              At the 1904 St. Louis World's Fair, the hamburger went from a local curiosity to a
              national sensation. Vendors sold them to enormous crowds, newspapers wrote about them,
              and visitors carried the idea home. The same fair is often linked to the popularization
              of the ice cream cone and iced tea — it was a coming-out party for American street food,
              and the burger was its breakout star.
            </p>
          </section>

          <Divider />

          {/* Fast food boom */}
          <section style={{ marginBottom: "48px" }}>
            <H2>The 20th Century: Fast Food and the Burger Boom</H2>
            <p style={bodyText}>
              For a while, ground beef had an image problem — it was seen as cheap and unsafe. One
              company changed that.
            </p>
            <p style={bodyText}>
              <strong style={{ color: "#F5C200" }}>White Castle</strong>, founded in Wichita, Kansas
              in 1921, built spotless white-tiled kitchens specifically to convince a wary public that
              a five-cent burger could be clean and trustworthy. It worked. White Castle is widely
              regarded as the first hamburger fast-food chain, and it standardized the burger as
              everyday food.
            </p>
            <p style={bodyText}>
              The cheeseburger arrived somewhere in the 1920s or '30s — most often credited to a young
              cook named Lionel Sternberger in Pasadena, California, who is said to have dropped a
              slice of cheese onto a cooking patty. Then came the giants. The McDonald brothers opened
              in San Bernardino in 1940 and rolled out their assembly-line "Speedee Service System" in
              1948. Ray Kroc began franchising it in 1955, and the burger became one of the most
              recognizable foods on the planet.
            </p>
            <p style={bodyText}>
              Speed and scale made the burger universal. But they also flattened it — frozen patties,
              heat lamps, and uniformity became the norm. Which is exactly the gap that flame-grilled,
              made-to-order burgers were born to fill.
            </p>
          </section>

          <Divider />

          {/* Charcoal */}
          <section style={{ marginBottom: "48px" }}>
            <H2>The Flame: Why Charcoal Changed the Burger</H2>
            <p style={bodyText}>
              While the chains chased speed, another tradition kept the burger close to the fire.
              Cooking over live charcoal is one of the oldest ways humans have prepared meat, and it
              does something a flat-top griddle simply can't.
            </p>
            <p style={bodyText}>
              Charcoal burns hotter and radiates a different kind of heat. As the patty cooks, fat
              renders and drips onto the coals, sending smoke back up into the meat. The result is a
              deeper, crustier sear and a smoky flavour you can taste in the first bite. It's slower
              and messier than a griddle — which is precisely why most high-volume operations gave it
              up.
            </p>
            <p style={bodyText}>
              We didn't. Chatham Burgers has cooked on a real charcoal grill since day one, and we've
              never switched to gas. Forty years later, the flame is still the whole point.
            </p>
          </section>

          <Divider />

          {/* Smash revival */}
          <section style={{ marginBottom: "48px" }}>
            <H2>The Smash Burger Revival</H2>
            <p style={bodyText}>
              The newest chapter is really an old one. Smashing a patty thin to build a crisp,
              caramelized crust is a diner technique that goes back decades — but in the 2010s it
              roared back as the "smash burger," and it's been everywhere since.
            </p>
            <p style={bodyText}>
              The science behind it is the Maillard reaction: press fresh beef onto screaming-hot
              metal — or, better, a charcoal flame — and you create hundreds of new flavour compounds
              in that lacey, crispy edge. We dig into exactly why charcoal takes the smash burger to
              another level in{" "}
              <Link href="/blog/smash-burger-chatham-ontario" style={{ color: "#F5C200", textDecoration: "none" }}>
                our guide to the charcoal smash burger
              </Link>
              .
            </p>
          </section>

          <Divider />

          {/* A burger timeline */}
          <section style={{ marginBottom: "48px" }}>
            <H2>A Short Timeline of the Burger</H2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
              <TimelineItem year="1800s" event="German immigrants bring 'Hamburg steak' — seasoned minced beef — to the United States." />
              <TimelineItem year="1885" event="Cooks in Wisconsin and New York separately claim to serve the first beef patty in bread at local fairs." />
              <TimelineItem year="c. 1900" event="Louis' Lunch in New Haven, Connecticut serves one of America's first hamburger sandwiches." />
              <TimelineItem year="1904" event="The St. Louis World's Fair turns the hamburger into a national sensation." />
              <TimelineItem year="1921" event="White Castle opens in Wichita — the first hamburger fast-food chain." />
              <TimelineItem year="1920s–30s" event="The cheeseburger appears, popularly credited to Lionel Sternberger in Pasadena." />
              <TimelineItem year="1955" event="Ray Kroc franchises McDonald's, launching the burger as a global icon." />
              <TimelineItem year="1985" event="Chatham Burgers opens in Chatham, Ontario — charcoal grill, fresh local beef, original recipes." />
              <TimelineItem year="2010s" event="The smash burger revival brings the focus back to crust, fresh beef, and craft." />
            </div>
          </section>

          <Divider />

          {/* Comes to Chatham */}
          <section style={{ marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                letterSpacing: "0.2em",
                color: "#C8102E",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Our Chapter
            </p>
            <H2>The Burger Comes to Chatham</H2>
            <p style={bodyText}>
              Every burger you eat carries all of that history in it — the immigrants, the fair, the
              chains, the fire. When we opened in 1985, we made a simple bet: that people would always
              choose a burger made the real way over one made the fast way.
            </p>
            <p style={bodyText}>
              That meant fresh beef from local farms, delivered daily. Buns from a local bakery every
              morning. Fries cut by hand. And always the charcoal grill — the same one, the same
              recipes, for forty years. If you want to know where Chatham Burgers fits in the wider
              local scene, we wrote an honest{" "}
              <Link href="/blog/best-burgers-chatham-ontario" style={{ color: "#F5C200", textDecoration: "none" }}>
                guide to the best burgers in Chatham
              </Link>{" "}
              too.
            </p>
            <p
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                fontSize: "0.875rem",
                color: "#888",
                fontStyle: "italic",
                marginTop: "8px",
              }}
            >
              See the full menu and order online at{" "}
              <Link href="/order" style={{ color: "#F5C200", textDecoration: "none" }}>
                chathamburgers.ca/order
              </Link>
              .
            </p>
          </section>

          <Divider />

          {/* FAQ */}
          <section style={{ marginBottom: "48px" }}>
            <H2>Frequently Asked Questions</H2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "8px" }}>
              <FAQ
                q="Who invented the hamburger?"
                a="No single person is universally credited. The most-cited claims are Charlie Nagreen of Seymour, Wisconsin (1885), the Menches brothers of Hamburg, New York (1885), Fletcher Davis of Athens, Texas (1880s), and Louis Lassen of New Haven, Connecticut (around 1900). The 1904 St. Louis World's Fair made it nationally famous."
              />
              <FAQ
                q="Where does the word 'hamburger' come from?"
                a="From Hamburg, Germany. German immigrants brought 'Hamburg steak' to the US in the 1800s. When the patty was later served in a bun, the sandwich kept the city's name, and 'hamburger' was eventually shortened to 'burger'."
              />
              <FAQ
                q="When did fast-food hamburgers begin?"
                a="White Castle (Wichita, 1921) is widely considered the first hamburger fast-food chain. McDonald's introduced its Speedee Service System in 1948, and Ray Kroc began franchising it nationally in 1955."
              />
              <FAQ
                q="What makes a charcoal-grilled burger different?"
                a="Charcoal burns hotter than gas or a griddle, and dripping fat creates smoke that flavours the meat. That gives a deeper crust and a smokier taste. Chatham Burgers has cooked on a real charcoal grill since 1985 and never switched to gas."
              />
              <FAQ
                q="How long has Chatham Burgers been around?"
                a="Since 1985 — family-owned and charcoal-grilling in Chatham, Ontario for 40 years, with the same grill, original recipes, and fresh local farm beef. You can order online at chathamburgers.ca/order."
              />
            </div>
          </section>

          <Divider />

          {/* Conclusion */}
          <section style={{ marginBottom: "48px" }}>
            <H2>The Bottom Line</H2>
            <p style={bodyText}>
              The burger has been a peasant dish, a high-society steak, a fairground snack, a symbol
              of fast food, and a craft worth arguing over. It survived every version of itself
              because the idea at the centre is so good: great beef, cooked with care, ready to eat.
            </p>
            <p style={bodyText}>
              That's the part we've held onto since 1985. Real local farm meat, fresh-baked buns,
              fresh-cut fries, and a charcoal flame — the burger the way more than a century of
              history says it should be made.
            </p>

            {/* CTA */}
            <div
              style={{
                marginTop: "32px",
                padding: "28px 32px",
                background: "linear-gradient(135deg, #1a0e00, #2a1800)",
                border: "1px solid #3a2000",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  letterSpacing: "0.06em",
                  fontSize: "1.5rem",
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                TASTE THE HISTORY
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  color: "#aaa",
                  fontSize: "0.9rem",
                  marginBottom: "20px",
                }}
              >
                Real local farm meat. Fresh-baked buns. Fresh-cut fries. Charcoal-grilled since 1985.
              </p>
              <Link
                href="/order"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  letterSpacing: "0.12em",
                  fontSize: "1.1rem",
                  background: "#F5C200",
                  color: "#0a0a0a",
                  padding: "14px 36px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Order Online →
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-lato), sans-serif",
  color: "#cccccc",
  fontSize: "1rem",
  lineHeight: "1.8",
  marginBottom: "20px",
};

const listStyle: React.CSSProperties = {
  paddingLeft: "20px",
  marginBottom: "20px",
};

const listItem: React.CSSProperties = {
  fontFamily: "var(--font-lato), sans-serif",
  color: "#cccccc",
  fontSize: "1rem",
  lineHeight: "1.8",
  marginBottom: "12px",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-bebas), sans-serif",
        letterSpacing: "0.05em",
        fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
        color: "#ffffff",
        marginBottom: "16px",
        marginTop: "0",
      }}
    >
      {children}
    </h2>
  );
}

function Divider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid #2a2a2a",
        margin: "40px 0",
      }}
    />
  );
}

function TimelineItem({ year, event }: { year: string; event: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "baseline",
        padding: "16px 20px",
        background: "#141414",
        border: "1px solid #2a2a2a",
        borderRadius: "8px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          letterSpacing: "0.06em",
          color: "#F5C200",
          fontSize: "1.3rem",
          flexShrink: 0,
          minWidth: "92px",
        }}
      >
        {year}
      </span>
      <span
        style={{
          fontFamily: "var(--font-lato), sans-serif",
          color: "#cccccc",
          fontSize: "0.95rem",
          lineHeight: "1.6",
        }}
      >
        {event}
      </span>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div
      style={{
        padding: "20px 24px",
        background: "#111",
        border: "1px solid #2a2a2a",
        borderRadius: "8px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-oswald), sans-serif",
          letterSpacing: "0.03em",
          color: "#ffffff",
          fontSize: "1rem",
          marginBottom: "10px",
        }}
      >
        {q}
      </p>
      <p
        style={{
          fontFamily: "var(--font-lato), sans-serif",
          color: "#999",
          fontSize: "0.9rem",
          lineHeight: "1.65",
          margin: 0,
        }}
      >
        {a}
      </p>
    </div>
  );
}
