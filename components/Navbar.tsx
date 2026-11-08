"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/offers", label: "Offers" },
  { href: "/blog", label: "Blog" },
  { href: "/order", label: "Order" },
];

const linkStyle = (active: boolean): React.CSSProperties => ({
  fontFamily: "var(--font-oswald), sans-serif",
  letterSpacing: "0.1em",
  fontSize: "0.88rem",
  color: active ? "#F5C200" : "rgba(255,255,255,0.82)",
  textDecoration: "none",
  paddingBottom: "4px",
  position: "relative",
  textTransform: "uppercase",
  transition: "color 0.2s",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#331A0A",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.5)" : "none",
          transition: "box-shadow 0.3s, border-color 0.3s",
        }}
      >
        <nav
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* LEFT nav links */}
          <div style={{ alignItems: "center", gap: "2rem", flex: 1 }} className="hidden md:flex">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={linkStyle(pathname === link.href)}
                className={`
                  hidden md:inline-block
                  after:absolute after:bottom-0 after:left-0
                  after:h-[2px] after:bg-yellow-400
                  after:transition-all after:duration-300
                  hover:!text-white
                  ${pathname === link.href ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CENTER wordmark */}
          <Link
            href="/"
            style={{ textDecoration: "none", lineHeight: 1, flexShrink: 0 }}
            className="hidden md:block md:absolute md:left-1/2 md:-translate-x-1/2 group"
          >
            <Image src="/logo-horizontal.png" alt="Chatham Burgers — since 1985" width={150} height={52} priority className="transition-transform duration-200 group-hover:scale-105" style={{ height: "52px", width: "auto" }} />
          </Link>

          {/* RIGHT nav links + CTA */}
          <div style={{ alignItems: "center", gap: "2rem", flex: 1, justifyContent: "flex-end" }} className="hidden md:flex">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={linkStyle(pathname === link.href)}
                className={`
                  hidden md:inline-block
                  after:absolute after:bottom-0 after:left-0
                  after:h-[2px] after:bg-yellow-400
                  after:transition-all after:duration-300
                  hover:!text-white
                  ${pathname === link.href ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/order"
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                letterSpacing: "0.12em",
                fontSize: "0.88rem",
                textTransform: "uppercase",
                background: "#C8102E",
                color: "#ffffff",
                padding: "9px 22px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "background 0.2s, transform 0.15s",
              }}
              className="hover:bg-red-700 hover:scale-105 transition-all"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile: wordmark left + hamburger right */}
          <Link href="/" style={{ textDecoration: "none", lineHeight: 1 }} className="md:hidden">
            <Image src="/logo-horizontal.png" alt="Chatham Burgers — since 1985" width={121} height={42} priority style={{ height: "42px", width: "auto" }} />
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: "#ffffff" }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.22 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
              style={{ background: "#331A0A", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <Image src="/logo-horizontal.png" alt="Chatham Burgers — since 1985" width={115} height={40} style={{ height: "40px", width: "auto" }} />
                <button onClick={() => setIsOpen(false)} style={{ color: "rgba(255,255,255,0.6)" }}>
                  <X size={22} />
                </button>
              </div>
              <nav style={{ display: "flex", flexDirection: "column", padding: "28px 24px", gap: "24px" }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      letterSpacing: "0.12em",
                      fontSize: "1.15rem",
                      textTransform: "uppercase",
                      color: pathname === link.href ? "#F5C200" : "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/order"
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    letterSpacing: "0.12em",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    background: "#C8102E",
                    color: "#ffffff",
                    padding: "14px 20px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "8px",
                  }}
                >
                  Order Now
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
