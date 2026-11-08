"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock, Phone, MapPin, CheckCircle } from "lucide-react";

export default function OrderClient() {
  return (
    <div style={{ background: "#FFFAF2", minHeight: "100vh", paddingTop: "64px" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #2A1408 0%, #1a0a00 50%, #2A1408 100%)",
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
              color: "#C8102E",
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
            ORDER <span style={{ color: "#F5C200" }}>ONLINE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: "#EADCC6",
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
          >
            <a
              href="https://order.toasttab.com/online/chathamburgers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.12em",
                fontSize: "1.4rem",
                background: "#C8102E",
                color: "#ffffff",
                padding: "20px 56px",
                borderRadius: "4px",
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(200,16,46,0.25)",
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
              color: "#B8A48A",
              fontSize: "0.825rem",
              marginTop: "16px",
            }}
          >
            You&apos;ll be redirected to our online ordering system
          </motion.p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ background: "#FFFAF2" }}>
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
                color: "#3D1F0A",
              }}
            >
              HOW IT <span style={{ color: "#C8102E" }}>WORKS</span>
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
                  background: "#FFFFFF",
                  borderRadius: "8px",
                  border: "1px solid #E0D8CC",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-bebas), sans-serif",
                    letterSpacing: "0.1em",
                    fontSize: "3rem",
                    color: "#E8A020",
                    opacity: 0.6,
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
                    color: "#3D1F0A",
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
                    color: "#6B5A4A",
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
                background: "#FFFFFF",
                borderRadius: "8px",
                border: "1px solid #E0D8CC",
                padding: "24px",
              }}
            >
              <Clock size={24} style={{ color: "#C8102E", marginBottom: "12px" }} />
              <h4
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  letterSpacing: "0.05em",
                  color: "#3D1F0A",
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
                  { day: "Sun – Thu", hours: "11am – 8pm" },
                  { day: "Fri – Sat", hours: "11am – 9pm" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span style={{ color: "#8A7A6A" }}>{day}</span>
                    <span style={{ color: "#5A3820" }}>{hours}</span>
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
                background: "#FFFFFF",
                borderRadius: "8px",
                border: "1px solid #E0D8CC",
                padding: "24px",
              }}
            >
              <Phone size={24} style={{ color: "#C8102E", marginBottom: "12px" }} />
              <h4
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  letterSpacing: "0.05em",
                  color: "#3D1F0A",
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
                  color: "#C8102E",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                (519) 354-1414
              </a>
              <p style={{ fontFamily: "var(--font-lato), sans-serif", color: "#6B5A4A", fontSize: "0.8rem" }}>
                Tap to call
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                background: "#FFFFFF",
                borderRadius: "8px",
                border: "1px solid #E0D8CC",
                padding: "24px",
              }}
            >
              <MapPin size={24} style={{ color: "#C8102E", marginBottom: "12px" }} />
              <h4
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  letterSpacing: "0.05em",
                  color: "#3D1F0A",
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Pickup Location
              </h4>
              <p style={{ fontFamily: "var(--font-lato), sans-serif", color: "#5A3820", fontSize: "0.875rem", lineHeight: "1.6" }}>
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
              background: "#FFFFFF",
              borderRadius: "8px",
              border: "1px solid #E0D8CC",
            }}
          >
            <h4
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                letterSpacing: "0.05em",
                color: "#C8102E",
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
                "Fresh-cut fries, made daily",
                "Flame-grilled since 1985",
                "Made with care, every single time",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#C8102E", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      color: "#5A3820",
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
