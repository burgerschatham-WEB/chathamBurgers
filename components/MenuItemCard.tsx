"use client";

import { motion } from "framer-motion";
import { MenuItem } from "@/lib/menuData";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: (index % 6) * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
      style={{
        background: "#141414",
        borderRadius: "6px",
        border: "1px solid #2a2a2a",
        padding: "16px 20px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "12px",
        cursor: "default",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      className="hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/5"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.03em",
              color: "#ffffff",
              fontSize: "0.95rem",
              textTransform: "uppercase",
            }}
          >
            {item.name}
          </h4>
          {item.badge && (
            <span
              style={{
                background: "#E85D04",
                color: "#ffffff",
                fontSize: "0.65rem",
                fontFamily: "var(--font-oswald), sans-serif",
                letterSpacing: "0.05em",
                padding: "2px 8px",
                borderRadius: "2px",
                textTransform: "uppercase",
                flexShrink: 0,
              }}
            >
              {item.badge}
            </span>
          )}
        </div>
        {item.description && (
          <p
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: "#666",
              fontSize: "0.8rem",
              lineHeight: "1.5",
              marginTop: "4px",
            }}
          >
            {item.description}
          </p>
        )}
      </div>
      <div
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          letterSpacing: "0.08em",
          color: "#F5C518",
          fontSize: "1.2rem",
          flexShrink: 0,
          paddingTop: "2px",
        }}
      >
        {item.price}
      </div>
    </motion.div>
  );
}
