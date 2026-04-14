"use client";

import { motion } from "framer-motion";
import { MenuCategory as MenuCategoryType } from "@/lib/menuData";
import MenuItemCard from "./MenuItemCard";

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-6"
      >
        <div
          style={{
            width: 4,
            height: 36,
            background: "#F5C518",
            borderRadius: "2px",
            flexShrink: 0,
          }}
        />
        <h2
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            letterSpacing: "0.08em",
            color: "#ffffff",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            textTransform: "uppercase",
          }}
        >
          {category.title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
        {category.items.map((item, index) => (
          <MenuItemCard key={item.name} item={item} index={index} />
        ))}
      </div>

      {category.note && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          style={{
            fontFamily: "var(--font-lato), sans-serif",
            color: "#666",
            fontSize: "0.825rem",
            fontStyle: "italic",
            marginTop: "12px",
            paddingLeft: "16px",
            borderLeft: "2px solid #2a2a2a",
          }}
        >
          {category.note}
        </motion.p>
      )}
    </section>
  );
}
