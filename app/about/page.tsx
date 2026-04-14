"use client";

import { motion } from "framer-motion";
import { Flame, Award, Users, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

const timeline = [
  {
    year: "1985",
    title: "The Flame is Lit",
    desc: "Chatham Burgers opens its doors in Chatham, Ontario. A family dream, fresh local meat, a real flame grill, and a commitment to doing it right.",
  },
  {
    year: "1990s",
    title: "A Local Institution",
    desc: "Word spreads fast. The flavour of fresh local farm meat on the flame can't be replicated anywhere else in town. Regulars become family.",
  },
  {
    year: "2000s",
    title: "Recipes Unchanged",
    desc: "While fast food giants come and go, Chatham Burgers stays true. Same recipes, same grill, same family.",
  },
  {
    year: "2010s",
    title: "The Menu Grows",
    desc: "From classic burgers to wraps, poutine, wings, and dinner plates — the menu evolves while the quality never wavers.",
  },
  {
    year: "Today",
    title: "Crafted on the Flame",
    desc: "40 years later, the same flame fires up every morning. Fresh meat in, fresh-baked buns ready, fries cut by hand. Some things are worth keeping exactly as they are.",
  },
];

const values = [
  {
    icon: Flame,
    title: "Real Meat, Every Day",
    desc: "Fresh beef from local farms, delivered daily. Fresh-baked buns from a local bakery every morning. Real ingredients — that's non-negotiable.",
    color: "#E85D04",
  },
  {
    icon: Award,
    title: "Recipes Since 1985",
    desc: "Our recipes haven't changed. Why would they? When something is perfect, you don't mess with it.",
    color: "#F5C518",
  },
  {
    icon: Users,
    title: "Family-Owned & Operated",
    desc: "Every burger is made by people who care — because this isn't just a business to us. It's our livelihood and our pride.",
    color: "#E85D04",
  },
  {
    icon: Heart,
    title: "Community First",
    desc: "We're part of Chatham. We've watched kids grow up and come back with their own kids. That's what we're here for.",
    color: "#F5C518",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", paddingTop: "64px" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(232,93,4,0.1) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.3em",
              color: "#E85D04",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Est. 1985 — Chatham, Ontario
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              letterSpacing: "0.06em",
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              color: "#ffffff",
              lineHeight: 1,
              marginBottom: "20px",
            }}
          >
            OUR <span style={{ color: "#F5C518" }}>STORY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: "#cccccc",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Some restaurants come and go. We&apos;re still here — still getting fresh meat from local farms every day, still
            cutting our own fries, still serving the same recipes we started with in 1985. That&apos;s not stubbornness.
            That&apos;s pride.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20" style={{ borderBottom: "1px solid #2a2a2a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  letterSpacing: "0.06em",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#ffffff",
                  marginBottom: "24px",
                  lineHeight: 1,
                }}
              >
                BUILT ON <span style={{ color: "#F5C518" }}>FIRE</span>
                <br />
                AND <span style={{ color: "#F5C518" }}>FAMILY</span>
              </h2>
              <div
                className="flex flex-col gap-5"
                style={{ fontFamily: "var(--font-lato), sans-serif", color: "#cccccc", fontSize: "0.975rem", lineHeight: "1.8" }}
              >
                <p>
                  In 1985, a family in Chatham, Ontario had a simple idea: make burgers the right way.
                  No shortcuts. Real local farm meat, fresh-baked buns, fresh-cut fries, and real care in every order.
                </p>
                <p>
                  Four decades later, that idea is still alive. The same family, the same grill, the same
                  recipes that made Chatham Burgers a local legend. We&apos;ve watched kids grow up and come back
                  with their own families. We&apos;ve become part of people&apos;s lives — and that means everything to us.
                </p>
                <p>
                  Supporting local isn&apos;t a marketing line here — it&apos;s how we operate. Fresh meat from local farms, buns from a local bakery, fries cut by hand every morning. Every order gets the same attention it got on day one. That&apos;s a promise we&apos;ve kept for 40 years.
                </p>
              </div>
            </motion.div>

            {/* Grill photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden group"
              style={{
                height: 420,
                borderRadius: "12px",
                border: "1px solid #2a2a2a",
              }}
            >
              <Image
                src="/about-family-grill.jpg"
                alt="Family grilling together at Chatham Burgers since 1985"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Dark overlay + caption */}
              <div className="absolute inset-0 bg-black/35" />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    letterSpacing: "0.15em",
                    color: "#F5C518",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                  }}
                >
                  Est. 1985 · Same Family · Same Grill
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.06em",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#ffffff",
              }}
            >
              WHAT MAKES US <span style={{ color: "#F5C518" }}>DIFFERENT</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{
                    background: "#141414",
                    borderRadius: "8px",
                    border: "1px solid #2a2a2a",
                    padding: "28px 24px",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: `${v.color}18`,
                      border: `1px solid ${v.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={24} style={{ color: v.color }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      letterSpacing: "0.05em",
                      color: "#ffffff",
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      color: "#777",
                      fontSize: "0.875rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Atmospheric image break */}
      <section className="relative overflow-hidden" style={{ height: 320 }}>
        <Image
          src={images.aboutAtmosphere}
          alt="Warm restaurant atmosphere with guests"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.15em",
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              SAME GRILL.{" "}
              <span style={{ color: "#F5C518" }}>SAME FAMILY.</span>
              <br />
              40 YEARS LATER.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20" style={{ background: "#0a0a0a", borderBottom: "1px solid #2a2a2a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.06em",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#ffffff",
              }}
            >
              THE <span style={{ color: "#F5C518" }}>ATMOSPHERE</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #2a2a2a",
            }}
          >
            <video
              src="/crowded-scene.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ width: "100%", display: "block", maxHeight: "560px", objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.06em",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#ffffff",
              }}
            >
              40 YEARS OF <span style={{ color: "#F5C518" }}>FLAME</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #F5C518, transparent)" }}
            />
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-8 pl-4"
                >
                  <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: "#F5C518",
                        border: "3px solid #0a0a0a",
                        boxShadow: "0 0 0 2px #F5C518",
                        flexShrink: 0,
                        marginTop: 4,
                      }}
                    />
                  </div>
                  <div style={{ paddingBottom: "16px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-bebas), sans-serif",
                        letterSpacing: "0.1em",
                        color: "#F5C518",
                        fontSize: "1.1rem",
                      }}
                    >
                      {item.year}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald), sans-serif",
                        letterSpacing: "0.05em",
                        color: "#ffffff",
                        fontSize: "1.1rem",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-lato), sans-serif",
                        color: "#888",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a0e00 0%, #2a1800 50%, #1a0e00 100%)",
          padding: "64px 0",
          borderTop: "1px solid #3a2000",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              letterSpacing: "0.06em",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            TASTE THE <span style={{ color: "#F5C518" }}>DIFFERENCE</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: "#aaa",
              fontSize: "1rem",
              marginBottom: "32px",
            }}
          >
            40 years of fresh local ingredients, crafted on the flame. Come see what the fuss is about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.12em",
                fontSize: "1.1rem",
                background: "#F5C518",
                color: "#0a0a0a",
                padding: "14px 36px",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Order Online
            </Link>
            <Link
              href="/menu"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.12em",
                fontSize: "1.1rem",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#ffffff",
                padding: "14px 36px",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
