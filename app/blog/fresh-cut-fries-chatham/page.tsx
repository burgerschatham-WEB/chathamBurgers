import type { Metadata } from "next";
import Link from "next/link";

const SLUG = "fresh-cut-fries-chatham";
const URL = `https://chathamburger.com/blog/${SLUG}`;
const TITLE = "Fresh-Cut Fries in Chatham, Ontario, Cut Every Day";
const DESCRIPTION =
  "Looking for fresh-cut fries in Chatham, Ontario? We cut ours every day at 215 Grand Ave W. Sizes, prices, poutine and how to order for pickup.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { url: URL, images: ["/opengraph-image"] },
};

const faqs = [
  {
    q: "Where can I get fresh-cut fries in Chatham, Ontario?",
    a: "Chatham Burgers at 215 Grand Ave W cuts its fries every day. You can order them on their own in Small, Large or Family size, in a combo, or as poutine.",
  },
  {
    q: "Are the fries at Chatham Burgers cut every day?",
    a: "Yes. We cut our fries every day, and they go into everything that comes with fries: combos, poutine, fish & chips and the Hot Hamburger plate.",
  },
  {
    q: "What fry sizes does Chatham Burgers have?",
    a: "Three: Small ($5.50), Large ($7.00) and Family ($14.00). The Family size is meant for sharing across a table.",
  },
  {
    q: "Does Chatham Burgers make poutine with fresh-cut fries?",
    a: "Yes. Every poutine starts with the same fries. There's a Small and Large classic poutine, plus Smash, Hamburger, BBQ Chicken and Crispy Chicken poutine.",
  },
  {
    q: "Can I order fresh-cut fries online for pickup in Chatham?",
    a: "Yes. Order online for pickup at chathamburger.com/order, or call (519) 354-1414.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  author: { "@type": "Organization", name: "Chatham Burgers", url: "https://chathamburger.com" },
  publisher: { "@type": "Organization", name: "Chatham Burgers", url: "https://chathamburger.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FreshCutFriesChathamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ background: "#2A1408", minHeight: "100vh", paddingTop: "80px", color: "#ffffff" }}>
        {/* Hero */}
        <header style={{ background: "linear-gradient(135deg, #2A1408 0%, #1a0a00 50%, #2A1408 100%)", padding: "64px 0 48px", borderBottom: "1px solid #5A3820" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.3em", color: "#DC2626", fontSize: "0.78rem", textTransform: "uppercase", marginBottom: "16px" }}>
              Chatham, Ontario · Sides · 2026
            </p>
            <h1 style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em", fontSize: "clamp(2.2rem, 6vw, 4rem)", color: "#ffffff", lineHeight: 1.05, marginBottom: "20px" }}>
              <span style={{ color: "#F4BA2E" }}>Fresh-Cut Fries</span> in Chatham, Ontario
            </h1>
            <p style={bodyText}>
              Cut every day on Grand Ave W. Here&apos;s what that means, what sizes we do, and every way you can get them.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontFamily: "var(--font-lato)", fontSize: "0.8rem", color: "#6B5A4A" }}>
              <span>By Chatham Burgers</span>
              <span>·</span>
              <span>November 15, 2026</span>
              <span>·</span>
              <span>~6 min read</span>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {/* Intro */}
          <section style={{ marginBottom: "48px" }}>
            <p style={bodyText}>
              If you&apos;re looking for fresh-cut fries in Chatham, here&apos;s the short answer: we cut ours every day at
              Chatham Burgers, 215 Grand Ave W. We&apos;ve been serving Chatham since 1985, and fries have been on the
              tray next to the burgers the whole time.
            </p>
            <p style={bodyText}>
              This post is for anyone who has stood at the counter wondering whether to go Small or Large, whether the
              Family size is really that big, or what else on the menu comes with fries. It&apos;s a plain guide, not a
              sales pitch.
            </p>
          </section>

          <Divider />

          <section style={{ marginBottom: "48px" }}>
            <H2>What &quot;fresh-cut fries&quot; means at Chatham Burgers</H2>
            <p style={bodyText}>
              Fresh-cut means the fries are cut from whole potatoes in our kitchen, and we do that every day. They
              don&apos;t arrive at the door already shaped. Because they&apos;re cut by hand, no two boxes look exactly
              alike, and you&apos;ll find a mix of longer and shorter pieces in every order.
            </p>
            <p style={bodyText}>
              People have been eating potatoes cut and fried this way for a very long time. The{" "}
              <a href="https://en.wikipedia.org/wiki/French_fries" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                history of French fries
              </a>{" "}
              is argued over by Belgium and France to this day. In Canada, though, fries mostly mean one thing: something
              you eat with a burger, or under gravy and cheese curds.
            </p>
            <p style={bodyText}>
              Cutting every day is extra work for the kitchen, and we think it shows. A fresh-cut fry tastes like potato.
              That&apos;s what you&apos;re paying for.
            </p>
          </section>

          <Divider />

          <section style={{ marginBottom: "48px" }}>
            <H2>Why we still cut fries in Chatham every day</H2>
            <p style={bodyText}>
              A burger counter could save itself a job by skipping this step. We haven&apos;t, for a simple reason: fries
              are on almost every tray that leaves the counter. They come with every combo, they sit under every poutine,
              and they share the plate with fish &amp; chips. If something shows up that often, it&apos;s worth doing
              properly.
            </p>
            <p style={bodyText}>
              It also keeps the menu honest. When we say a combo comes with fries, they&apos;re the same fresh-cut fries
              you&apos;d get in a Large box. There&apos;s no second, lesser fry for the meal deals. Whatever you order,
              you get the fries we cut that day.
            </p>
            <p style={bodyText}>
              And it suits the rest of the kitchen. Burgers here are cooked to order on the flame grill, so fries made
              from potatoes cut that day fit the way we already work. Nothing fancy, just the same routine, every day
              we&apos;re open.
            </p>
          </section>

          <Divider />

          <section style={{ marginBottom: "48px" }}>
            <H2>Three sizes: Small, Large and Family</H2>
            <p style={bodyText}>Our fresh-cut fries come in three sizes (prices at the time of writing):</p>
            <ul style={listStyle}>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Small ($5.50)</strong>: a side for one person having a burger.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Large ($7.00)</strong>: for a big appetite, or two people picking at
                it.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Family ($14.00)</strong>: built for the middle of the table. If
                you&apos;re feeding a group, one Family is easier than four Smalls.
              </li>
            </ul>
            <p style={bodyText}>
              If you&apos;re not sure, get the Large. Nobody has ever come back to the counter to complain that there were
              too many fries. You can add a side of gravy ($2.00) to any size if you want to dip without going full
              poutine.
            </p>
          </section>

          <Divider />

          <section style={{ marginBottom: "48px" }}>
            <H2>Every way to get our fries</H2>
            <p style={bodyText}>
              The same fresh-cut fries go into a lot more than the fry box. Here&apos;s where else you&apos;ll find them
              on our <Link href="/menu" style={linkStyle}>full menu</Link>:
            </p>
            <ul style={listStyle}>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Poutine.</strong> The Canadian classic of fries, gravy and cheese
                curds (if you want the backstory,{" "}
                <a href="https://en.wikipedia.org/wiki/Poutine" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  poutine has a long Quebec history
                </a>
                ). We do a Small ($9.00) and Large ($11.00), plus loaded versions: Smash Poutine ($14.00), and Hamburger,
                BBQ Chicken and Crispy Chicken Poutine ($15.99 each).
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Combos.</strong> Every combo is a main, fries and a drink. The
                Hamburger Combo starts at $13.00, and the Family Feast ($48.00) is four burgers, one Family fries and four
                drinks.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Fish &amp; Chips ($16.00).</strong> Crispy haddock with our fries.
                It&apos;s marked as a fan favourite on our menu.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Chicken Fingers and Chicken Nuggets ($16.00 each).</strong> Both
                come as a plate with fries and sweet &amp; sour sauce.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Hot Hamburger ($13.50).</strong> An open-faced patty on bread,
                covered in gravy, with hot corn and fries on the side.
              </li>
            </ul>
          </section>

          <Divider />

          <section style={{ marginBottom: "48px" }}>
            <H2>Fresh-cut fries next to a flame-grilled burger</H2>
            <p style={bodyText}>
              Fries are the side, but the burger is why most people come in. Every burger here goes on the flame grill,
              which gives the patty real grill marks and a grilled edge. We&apos;ve been doing it that way on Grand Ave W
              for 40 years.
            </p>
            <p style={bodyText}>
              If you want a pairing, here are the ones we&apos;d point you to:
            </p>
            <ul style={listStyle}>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Chatham Burger + Large fries.</strong> A half-pound patty and
                standard toppings. The one people ask for by name.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Dbl Smash Burger + Small poutine.</strong> Two smashed patties with
                onion and cheese. You can read more about it in our{" "}
                <Link href="/blog/smash-burger-chatham-ontario" style={linkStyle}>smash burger post</Link>.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>The 1 LB Burger + Family fries.</strong> Only if there are
                several of you. Probably.
              </li>
            </ul>
            <p style={bodyText}>
              For a wider look at where to eat a burger in town, see our{" "}
              <Link href="/blog/best-burgers-chatham-ontario" style={linkStyle}>guide to the best burgers in Chatham, Ontario</Link>.
            </p>
          </section>

          <Divider />

          <section style={{ marginBottom: "48px" }}>
            <H2>Tips for getting fries in Chatham to go</H2>
            <p style={bodyText}>
              Fries are at their best in the first few minutes, so a little planning goes a long way:
            </p>
            <ul style={listStyle}>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Order ahead for pickup.</strong> Ordering online means your food is
                ready when you arrive, not sitting while you park.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Open the bag on the way home.</strong> Letting the steam out helps
                the fries hold their texture.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Driving further? Take gravy on the side.</strong> Order fries with a
                side of gravy and pour it at home.
              </li>
              <li style={listItem}>
                <strong style={{ color: "#ffffff" }}>Feeding a group?</strong> One Family fries in the middle of the table
                beats a stack of small boxes.
              </li>
            </ul>
            <p style={bodyText}>
              We&apos;re open every day: 11 am to 8 pm Sunday to Thursday, and 11 am to 9 pm on Friday and Saturday.
            </p>
          </section>

          <Divider />

          <section style={{ marginBottom: "48px" }}>
            <H2>Frequently asked questions</H2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
              {faqs.map((f) => (
                <FAQ key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </section>

          <Divider />

          <section style={{ marginBottom: "48px" }}>
            <H2>Thanks, Chatham</H2>
            <p style={bodyText}>
              Fresh-cut fries, cut every day, next to a burger off the flame grill. It&apos;s not a complicated idea,
              and it&apos;s kept us on Grand Ave W since 1985. Thanks, Chatham, for keeping this place going.
            </p>
            <p style={bodyText}>
              Whether you&apos;re a regular who orders the same combo every Friday or someone new to town searching for
              fries in Chatham-Kent, the routine is the same: potatoes cut that day, a size that suits your table, and a
              burger off the flame grill if you&apos;re hungry for one. Come by 215 Grand Ave W and see for yourself, or
              have a look at the full menu first and decide what you&apos;re having before you get here. Small, Large or
              Family, plain or under gravy and curds, we&apos;ll have them ready.
            </p>

            <div style={{ marginTop: "32px", padding: "28px 32px", background: "linear-gradient(135deg, #1a0e00, #2a1800)", border: "1px solid #3a2000", borderRadius: "8px", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.06em", fontSize: "1.6rem", color: "#ffffff", marginBottom: "8px" }}>
                HUNGRY?
              </p>
              <p style={{ fontFamily: "var(--font-lato)", color: "#D2BFA5", fontSize: "0.9rem", marginBottom: "20px" }}>
                Order online for pickup, or come see us at 215 Grand Ave W, Chatham ON.
              </p>
              <Link href="/order" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.12em", fontSize: "1.1rem", background: "#F4BA2E", color: "#2A1408", padding: "13px 32px", borderRadius: "4px", textDecoration: "none", display: "inline-block" }}>
                Order from Chatham Burgers →
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

// ─── Styles (match the other blog posts) ─────────────────────────────────────

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-lato), sans-serif",
  color: "#EADCC6",
  fontSize: "1rem",
  lineHeight: "1.85",
  marginBottom: "20px",
};

const linkStyle: React.CSSProperties = { color: "#F4BA2E", textDecoration: "underline", textUnderlineOffset: "3px" };

const listStyle: React.CSSProperties = { paddingLeft: "20px", marginBottom: "20px", listStyleType: "disc" };

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
