"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock, Phone, MapPin, CheckCircle } from "lucide-react";

export default function OrderPage() {
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
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(232,93,4,0.08) 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
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
            Pickup Available
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              letterSpacing: "0.06em",
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              color: "#ffffff",
              lineHeight: 1,
              marginBottom: "20px",
            }}
          >
            ORDER <span style={{ color: "#F5C518" }}>ONLINE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: "#cccccc",
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: "1.7",
              marginBottom: "40px",
            }}
          >
            Order online for pickup. Fresh, hot, and ready for you.
            <br />
            Real local farm meat, crafted on the flame — just the way it&apos;s been done since 1985.
          </motion.p>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            animate-pulse
          >
            <a
              href="https://order.online/store/chatham-burgers-grand-ave-w-25072946"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.12em",
                fontSize: "1.4rem",
                background: "#F5C518",
                color: "#0a0a0a",
                padding: "20px 56px",
                borderRadius: "4px",
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(245,197,24,0.25)",
                transition: "box-shadow 0.3s, background 0.2s",
              }}
            >
              Start Your Order
              <ExternalLink size={20} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: "#555",
              fontSize: "0.825rem",
              marginTop: "16px",
            }}
          >
            You&apos;ll be redirected to our online ordering system
          </motion.p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ background: "#0d0d0d" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#ffffff",
              }}
            >
              HOW IT <span style={{ color: "#F5C518" }}>WORKS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Choose Your Order", desc: "Browse our full menu and build your order exactly how you like it." },
              { step: "02", title: "We Fire Up the Grill", desc: "Every order crafted fresh on the flame. Real local meat, no heat lamps, no shortcuts." },
              { step: "03", title: "Pick Up & Enjoy", desc: "Swing by, grab your order hot off the grill, and dig in." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                style={{
                  background: "#141414",
                  borderRadius: "8px",
                  border: "1px solid #2a2a2a",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-bebas), sans-serif",
                    letterSpacing: "0.1em",
                    fontSize: "3rem",
                    color: "#F5C518",
                    opacity: 0.3,
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {item.step}
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
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    color: "#777",
                    fontSize: "0.875rem",
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                background: "#141414",
                borderRadius: "8px",
                border: "1px solid #2a2a2a",
                padding: "24px",
              }}
            >
              <Clock size={24} style={{ color: "#E85D04", marginBottom: "12px" }} />
              <h4
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  letterSpacing: "0.05em",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Hours
              </h4>
              <div
                className="flex flex-col gap-2"
                style={{ fontFamily: "var(--font-lato), sans-serif", fontSize: "0.875rem" }}
              >
                {[
                  { day: "Mon – Thu", hours: "10am – 8pm" },
                  { day: "Fri – Sat", hours: "10am – 9pm" },
                  { day: "Sunday", hours: "11am – 8pm" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span style={{ color: "#888" }}>{day}</span>
                    <span style={{ color: "#cccccc" }}>{hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                background: "#141414",
                borderRadius: "8px",
                border: "1px solid #2a2a2a",
                padding: "24px",
              }}
            >
              <Phone size={24} style={{ color: "#E85D04", marginBottom: "12px" }} />
              <h4
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  letterSpacing: "0.05em",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Call In Your Order
              </h4>
              <a
                href="tel:5193541414"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  color: "#F5C518",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                (519) 354-1414
              </a>
              <p style={{ fontFamily: "var(--font-lato), sans-serif", color: "#666", fontSize: "0.8rem" }}>
                Tap to call
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                background: "#141414",
                borderRadius: "8px",
                border: "1px solid #2a2a2a",
                padding: "24px",
              }}
            >
              <MapPin size={24} style={{ color: "#E85D04", marginBottom: "12px" }} />
              <h4
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  letterSpacing: "0.05em",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Pickup Location
              </h4>
              <p style={{ fontFamily: "var(--font-lato), sans-serif", color: "#cccccc", fontSize: "0.875rem", lineHeight: "1.6" }}>
                215 Grand Ave W<br />Chatham, ON N7L 1C3
              </p>
            </motion.div>
          </div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 p-6"
            style={{
              background: "#141414",
              borderRadius: "8px",
              border: "1px solid #2a2a2a",
            }}
          >
            <h4
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                letterSpacing: "0.05em",
                color: "#F5C518",
                fontSize: "0.95rem",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Our Promise
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Real local farm meat — every order",
                "Fresh-cut fries, never frozen",
                "Same recipes since 1985",
                "Made with care, every single time",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#F5C518", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      color: "#cccccc",
                      fontSize: "0.875rem",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
