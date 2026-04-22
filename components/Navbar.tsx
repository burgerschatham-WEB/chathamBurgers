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
  { href: "/blog", label: "Blog" },
  { href: "/order", label: "Order" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    setTimeout(closeMenu, 0);
    return () => setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/CB-1.png"
              alt="Chatham Burgers logo"
              width={36}
              height={36}
              className="transition-transform group-hover:scale-110"
              priority
            />
            <span
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.1em",
                fontSize: "1.5rem",
                color: scrolled ? "#3D1F0A" : "#F5C200",
              }}
            >
              Chatham Burgers
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  letterSpacing: "0.08em",
                  fontSize: "0.9rem",
                  color: pathname === link.href ? "#C8102E" : (scrolled ? "#3D1F0A" : "#ffffff"),
                  textDecoration: "none",
                  paddingBottom: "4px",
                  position: "relative",
                }}
                className={`
                  transition-colors
                  after:absolute after:bottom-0 after:left-0
                  after:h-[2px] after:bg-red-600
                  after:transition-all after:duration-300
                  ${pathname === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/order"
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                letterSpacing: "0.08em",
                fontSize: "0.9rem",
                background: "#C8102E",
                color: "#ffffff",
                padding: "8px 20px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "700",
                transition: "all 0.2s",
              }}
              className="hover:bg-red-700 transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: "#C8102E" }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
              style={{ background: "#ffffff", borderLeft: "1px solid #e0d8cc" }}
            >
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: "#e0d8cc" }}>
                <div className="flex items-center gap-2">
                  <Image src="/CB-1.png" alt="Chatham Burgers logo" width={28} height={28} />
                  <span
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      letterSpacing: "0.1em",
                      fontSize: "1.3rem",
                      color: "#3D1F0A",
                    }}
                  >
                    Chatham Burgers
                  </span>
                </div>
                <button onClick={() => setIsOpen(false)} style={{ color: "#3D1F0A" }}>
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      letterSpacing: "0.1em",
                      fontSize: "1.2rem",
                      color: pathname === link.href ? "#C8102E" : "#3D1F0A",
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
                    letterSpacing: "0.08em",
                    fontSize: "1rem",
                    background: "#C8102E",
                    color: "#ffffff",
                    padding: "12px 20px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontWeight: "700",
                    textAlign: "center",
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
