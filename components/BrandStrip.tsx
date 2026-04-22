"use client";

import { motion } from "framer-motion";
import { Flame, UtensilsCrossed, MapPin, Star } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Crafted on the Flame",
    desc: "Every burger made to order on the flame. Real heat, real flavour — every single day since 1985.",
    color: "#C8102E",
  },
  {
    icon: UtensilsCrossed,
    title: "Real Meat, Real Farm",
    desc: "Fresh local farm beef delivered every day. We know where our meat comes from — and it shows.",
    color: "#F5C200",
  },
  {
    icon: MapPin,
    title: "Fresh Bakery, Every Day",
    desc: "Fresh-baked buns sourced from a local bakery, delivered every morning. The bun matters.",
    color: "#C8102E",
  },
  {
    icon: Star,
    title: "Fresh-Cut Fries Daily",
    desc: "Cut fresh every morning. Never frozen. Never fake. Always perfect.",
    color: "#F5C200",
  },
];

export default function BrandStrip() {
  return (
    <section style={{ background: "#ffffff", borderTop: "1px solid #e0d8cc", borderBottom: "1px solid #e0d8cc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center text-center gap-4 p-6"
                style={{
                  background: "#F5F0E8",
                  borderRadius: "8px",
                  border: "1px solid #e0d8cc",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: `${feature.color}18`,
                    border: `1px solid ${feature.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={26} style={{ color: feature.color }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    letterSpacing: "0.05em",
                    color: "#3D1F0A",
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    color: "#7a6a5a",
                    fontSize: "0.875rem",
                    lineHeight: "1.6",
                  }}
                >
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
