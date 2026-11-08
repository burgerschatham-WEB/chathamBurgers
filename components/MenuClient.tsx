"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/lib/menuData";
import MenuCategory from "@/components/MenuCategory";
import Link from "next/link";

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Update active category based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    menuCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div style={{ background: "#FFFAF2", minHeight: "100vh", paddingTop: "64px" }}>
      {/* Page Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #2A1408 0%, #1a0a00 50%, #2A1408 100%)",
          borderBottom: "1px solid #5A3820",
          padding: "48px 0 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.3em",
              color: "#C8102E",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Flame-Grilled. Since 1985.
          </p>
          <h1
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              letterSpacing: "0.06em",
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            OUR <span style={{ color: "#F5C200" }}>MENU</span>
          </h1>
          <div style={{ width: 60, height: 3, background: "#F5C200", margin: "12px auto 0", borderRadius: "2px" }} />
        </div>
      </div>

      {/* Sticky category nav */}
      <div
        ref={navRef}
        className="sticky top-16 z-30"
        style={{ background: "rgba(255,250,242,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E0D8CC" }}
      >
        {/* Desktop: horizontal scroll nav */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto gap-1 py-2 scrollbar-none">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                letterSpacing: "0.06em",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                color: activeCategory === cat.id ? "#2A1408" : "#5A3820",
                background: activeCategory === cat.id ? "#F5C200" : "transparent",
                border: "1px solid",
                borderColor: activeCategory === cat.id ? "#F5C200" : "#E0D8CC",
                padding: "6px 14px",
                borderRadius: "3px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Mobile: dropdown trigger */}
        <div className="md:hidden px-4 py-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: "100%",
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.06em",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              color: "#3D1F0A",
              background: "#F5F0E8",
              border: "1px solid #E8A020",
              padding: "10px 16px",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>{menuCategories.find((c) => c.id === activeCategory)?.title ?? "Jump to..."}</span>
            <span style={{ transition: "transform 0.2s", transform: mobileMenuOpen ? "rotate(180deg)" : "none" }}>▼</span>
          </button>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  overflow: "hidden",
                  background: "#FFFDF8",
                  border: "1px solid #E0D8CC",
                  borderTop: "none",
                  borderRadius: "0 0 4px 4px",
                }}
              >
                {menuCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToCategory(cat.id)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      fontFamily: "var(--font-oswald), sans-serif",
                      letterSpacing: "0.06em",
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      color: activeCategory === cat.id ? "#C8102E" : "#3D1F0A",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid #E0D8CC",
                      padding: "12px 16px",
                      cursor: "pointer",
                    }}
                  >
                    {cat.title}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Menu content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-16">
          {menuCategories.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 py-16" style={{ borderTop: "1px solid #E0D8CC" }}>
          <p
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.1em",
              color: "#5A3820",
              fontSize: "1rem",
              marginBottom: "24px",
              textTransform: "uppercase",
            }}
          >
            Ready to order? We&apos;re ready for you.
          </p>
          <Link
            href="/order"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              letterSpacing: "0.12em",
              fontSize: "1.2rem",
              background: "#F5C200",
              color: "#2A1408",
              padding: "16px 48px",
              borderRadius: "4px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Order Online Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
