import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Burgers in Chatham Ontario (2026 Guide)",
  description:
    "Looking for the best burgers in Chatham, Ontario? Fresh local farm meat, fresh-baked buns, crafted on the flame since 1985. Here's an honest local guide to where to go and what to order.",
};

export default function BestBurgersChathamPage() {
  return (
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
            Local Guide · Chatham, Ontario · 2026
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
            Best Burgers in{" "}
            <span style={{ color: "#F5C200" }}>Chatham Ontario</span>
            <br />
            (2026 Guide)
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
            We've been crafting burgers on the flame in Chatham since 1985. This is our honest
            take on where to find a great burger in this city — including what we think makes one
            worth driving for.
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
            <span>April 14, 2026</span>
            <span>·</span>
            <span>~8 min read</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Intro */}
        <section style={{ marginBottom: "48px" }}>
          <p style={bodyText}>
            Chatham isn't a big city — but it punches above its weight when it comes to food. And
            burgers specifically? There are some genuinely great options here, each with a different
            reason to visit.
          </p>
          <p style={bodyText}>
            We're Chatham Burgers. We've been on King Street since 1985, crafting burgers on the flame
            every single day. So yes — we have a dog in this race. But after four decades of watching
            this city eat, we also have an honest perspective on what makes a burger worth your time.
            This guide gives you both.
          </p>
        </section>

        <Divider />

        {/* Criteria */}
        <section style={{ marginBottom: "48px" }}>
          <H2>What Makes a Great Burger in Chatham?</H2>
          <p style={bodyText}>
            Before we get into recommendations, here's what we think separates a great burger from a
            forgettable one:
          </p>
          <ul style={listStyle}>
            <li style={listItem}>
              <strong style={{ color: "#F5C200" }}>The meat.</strong> Fresh local farm beef, delivered daily. You can taste the difference between fresh and frozen — the texture, the flavour, the way it holds together on the flame.
            </li>
            <li style={listItem}>
              <strong style={{ color: "#F5C200" }}>The patty quality.</strong> Fresh beef, properly
              seasoned, at the right fat ratio. Pre-frozen patties are immediately obvious in the
              texture and taste.
            </li>
            <li style={listItem}>
              <strong style={{ color: "#F5C200" }}>The fries.</strong> A great burger is undermined by
              sad fries. Fresh-cut, properly fried — it matters.
            </li>
            <li style={listItem}>
              <strong style={{ color: "#F5C200" }}>Consistency.</strong> A burger that's great once
              doesn't count. It needs to be great every time.
            </li>
          </ul>
          <p style={bodyText}>
            With those criteria in mind, here's where we'd point you in Chatham.
          </p>
        </section>

        <Divider />

        {/* Our Pick */}
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
            Our Pick
          </p>
          <H2>Chatham Burgers — Crafted on the Flame</H2>

          <p style={bodyText}>
            We'll be transparent: this is us. But we'd be doing you a disservice if we didn't explain
            exactly why we think we're the call for burgers in Chatham specifically.
          </p>

          <p style={bodyText}>
            The difference starts with the meat. We source fresh beef from local farms, delivered every
            single day. Our buns come from a local bakery every morning. Our fries are cut by hand daily —
            never frozen. We believe in supporting local, and that philosophy runs through every ingredient
            on the plate.
          </p>

          <p style={bodyText}>
            Our recipes are original. Same ones from 1985. We've had opportunities over the years to
            modernize, streamline, reduce costs. We didn't. The Chatham Burger — a half-pound patty
            with standard toppings — is the same burger we were making forty years ago. So is everything
            else on the menu.
          </p>

          {/* Testimonial — E-E-A-T */}
          <blockquote
            style={{
              margin: "32px 0",
              padding: "24px 28px",
              background: "#141414",
              borderLeft: "4px solid #F5C200",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "#dddddd",
                fontSize: "1.05rem",
                lineHeight: "1.7",
                fontStyle: "italic",
                marginBottom: "12px",
              }}
            >
              "Best burgers in Chatham, hands down. I've been coming here since I was a kid. The
              the flavour is unlike anything else."
            </p>
            <p
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                letterSpacing: "0.1em",
                color: "#F5C200",
                fontSize: "0.8rem",
                textTransform: "uppercase",
              }}
            >
              — Sarah M., Chatham local
            </p>
          </blockquote>

          <p style={bodyText}>
            That's the part we can't manufacture: the people who grew up coming here and now bring
            their own kids. After 40 years in business, that kind of loyalty is the real review.
          </p>

          <H3>What to Order</H3>
          <ul style={listStyle}>
            <li style={listItem}>
              <strong style={{ color: "#ffffff" }}>Dbl Smash Burger ($12.99)</strong> — Two beef
              patties of fresh local farm beef, smashed with onion and seasoning on the flame. The lacey
              crispy edges are the whole point. Our fan favourite for good reason.
            </li>
            <li style={listItem}>
              <strong style={{ color: "#ffffff" }}>The Chatham Burger ($10.99)</strong> — Half a pound,
              original recipe, all the right toppings. The one that started everything in 1985. Order
              this on your first visit.
            </li>
            <li style={listItem}>
              <strong style={{ color: "#ffffff" }}>1 LB Burger ($17.50)</strong> — A full pound of
              fresh local farm beef, crafted on the flame. Called "The Beast" for a reason. Not for the faint of heart.
            </li>
            <li style={listItem}>
              <strong style={{ color: "#ffffff" }}>Fresh-Cut Fries</strong> — Hand-cut in-house, every
              day. Not frozen. Get the large.
            </li>
          </ul>

          <p
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              fontSize: "0.875rem",
              color: "#888",
              fontStyle: "italic",
              marginTop: "8px",
            }}
          >
            Online ordering available at{" "}
            <Link href="/order" style={{ color: "#F5C200", textDecoration: "none" }}>
              chathamburgers.ca/order
            </Link>
            .
          </p>
        </section>

        <Divider />

        {/* Other spots */}
        <section style={{ marginBottom: "48px" }}>
          <H2>Other Spots Worth Knowing in Chatham</H2>
          <p style={bodyText}>
            Chatham has a growing food scene. A few other places locals mention when the conversation
            turns to good food:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "24px" }}>
            <SpotCard
              name="Dog Days BBQ"
              type="BBQ & Smoked Meats"
              note="If you're in the mood for BBQ rather than a classic burger, Dog Days does smoked meats seriously. Different lane entirely, but worth knowing about."
            />
            <SpotCard
              name="Suite 46 Restaurant"
              type="Sports Bar & Grill"
              note="A solid sports-bar experience. Good for groups, multiple screens, bar food done well. A different vibe from a dedicated burger spot."
            />
            <SpotCard
              name="Wing Boyz Chatham"
              type="Wings Specialist"
              note="If wings are the goal rather than burgers, Wing Boyz has a following in Chatham. Worth checking if that's what you're after."
            />
            <SpotCard
              name="Chatham Kebab & Gyro"
              type="Mediterranean"
              note="A different category entirely — great if you want a gyro or souvlaki. Not a burger destination, but a good local option for Mediterranean."
            />
            <SpotCard
              name="Craves Poutinerie"
              type="Poutine Specialist"
              note="Chatham's poutine spot. If that's what you're craving, they focus on it. We also do poutine if you want to pair it with a fresh flame-grilled burger."
            />
          </div>

          <p style={{ ...bodyText, marginTop: "28px" }}>
            The honest take: if you specifically want a burger — not wings, not BBQ, not a gyro — the
            fresh local farm beef at Chatham Burgers is the move. It's what we've been built for since day one.
          </p>
        </section>

        <Divider />

        {/* FAQ */}
        <section style={{ marginBottom: "48px" }}>
          <H2>Frequently Asked Questions</H2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "8px" }}>
            <FAQ
              q="What is the best burger restaurant in Chatham, Ontario?"
              a="For fresh local farm beef burgers crafted on the flame, Chatham Burgers on King Street has been the local standard since 1985. For BBQ, Dog Days BBQ is worth a visit. For a sports-bar setting, Suite 46 is a solid option."
            />
            <FAQ
              q="Does Chatham Burgers have online ordering?"
              a="Yes — you can order online at chathamburgers.ca/order for pickup."
            />
            <FAQ
              q="What makes Chatham Burgers different from other restaurants?"
              a="Fresh local farm beef, delivered daily. Fresh-baked buns from a local bakery every morning. Fries cut by hand, never frozen. We support local suppliers and it shows in every bite — that's been our approach since 1985."
            />
            <FAQ
              q="What's the best burger to order at Chatham Burgers?"
              a="First-timers should start with the Chatham Burger (½ lb, $10.99) — it's the original. If you're a smash burger fan, the Dbl Smash Burger ($12.99) is our fan favourite. Feeling ambitious? The 1 LB Burger is a full pound of fresh local farm beef."
            />
            <FAQ
              q="Is Chatham Burgers family-friendly?"
              a="Yes. We've been serving Chatham families since 1985. We have a Kids Burger Combo ($12.99), and we regularly see regulars who grew up here bring their own kids in."
            />
            <FAQ
              q="Where is Chatham Burgers located?"
              a="We're in Chatham, Ontario. You can find our full location info and order online at chathamburgers.ca."
            />
          </div>
        </section>

        <Divider />

        {/* Conclusion */}
        <section style={{ marginBottom: "48px" }}>
          <H2>The Bottom Line</H2>
          <p style={bodyText}>
            Chatham's food scene has grown, and there are genuinely good options across categories. But
            if you came here asking specifically about burgers — real ones, cooked properly, by people
            who've been doing it for forty years — you already know where we're pointing you.
          </p>
          <p style={bodyText}>
            Fresh meat in every morning, fresh buns from the bakery, fries cut by hand — and that's been the routine since 1985. Come see what four decades of doing it right actually tastes like.
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
              READY TO ORDER?
            </p>
            <p
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "#aaa",
                fontSize: "0.9rem",
                marginBottom: "20px",
              }}
            >
              Real local farm meat. Fresh-baked buns. Fresh-cut fries. Same recipes since 1985.
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-oswald), sans-serif",
        letterSpacing: "0.08em",
        fontSize: "1.1rem",
        color: "#F5C200",
        textTransform: "uppercase",
        marginBottom: "12px",
        marginTop: "28px",
      }}
    >
      {children}
    </h3>
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

function SpotCard({
  name,
  type,
  note,
}: {
  name: string;
  type: string;
  note: string;
}) {
  return (
    <div
      style={{
        padding: "20px 24px",
        background: "#141414",
        border: "1px solid #2a2a2a",
        borderRadius: "8px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-oswald), sans-serif",
          letterSpacing: "0.05em",
          color: "#ffffff",
          fontSize: "1rem",
          textTransform: "uppercase",
          marginBottom: "4px",
        }}
      >
        {name}
      </p>
      <p
        style={{
          fontFamily: "var(--font-oswald), sans-serif",
          letterSpacing: "0.1em",
          color: "#C8102E",
          fontSize: "0.72rem",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        {type}
      </p>
      <p
        style={{
          fontFamily: "var(--font-lato), sans-serif",
          color: "#888",
          fontSize: "0.9rem",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        {note}
      </p>
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
