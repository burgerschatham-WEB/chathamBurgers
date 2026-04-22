'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { images } from '@/lib/images'

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], ['0%', '30%'])
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    const handler = () => setShowScroll(window.scrollY < 100)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const wordVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
    }),
  }

  const line1 = ['CRAFTED', 'ON']
  const line2 = ['THE', 'FLAME']

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Accessible H1 for SEO/screen readers */}
      <h1 className="sr-only">
        Crafted on the Flame — Chatham&apos;s Best Burgers Since 1985
      </h1>

      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${images.hero})`,
          y: bgY,
          scale: 1.1,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Bottom radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(200,16,46,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Floating ember particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            width: 3 + i * 2,
            height: 3 + i * 2,
            borderRadius: '50%',
            background: i % 2 === 0 ? '#C8102E' : '#F5C200',
            left: `${15 + i * 14}%`,
            bottom: `${20 + (i % 3) * 10}%`,
            filter: 'blur(1px)',
          }}
          animate={{ y: [-20, -80, -20], opacity: [0.8, 0, 0.8], scale: [1, 0.3, 1] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            letterSpacing: '0.4em',
            color: 'rgba(245,194,0,0.9)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          SINCE 1985 · CHATHAM, ONTARIO
        </motion.p>

        {/* Visual headline — aria-hidden, real H1 is sr-only above */}
        <div aria-hidden="true">
          {/* Line 1 */}
          <div
            className="flex justify-center gap-4 flex-wrap"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.06em',
              fontSize: 'clamp(4rem, 13vw, 10rem)',
              lineHeight: 1,
              color: '#ffffff',
              textShadow: '0 4px 40px rgba(0,0,0,0.8)',
            }}
          >
            {line1.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Line 2 */}
          <div
            className="flex justify-center gap-4 flex-wrap"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.06em',
              fontSize: 'clamp(4rem, 13vw, 10rem)',
              lineHeight: 1,
              color: '#F5C200',
              textShadow: '0 4px 40px rgba(0,0,0,0.8)',
              marginBottom: '24px',
            }}
          >
            {line2.map((word, i) => (
              <motion.span
                key={word}
                custom={i + line1.length}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.7)',
            fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
            textTransform: 'uppercase',
            marginBottom: '40px',
          }}
        >
          Crafted on the Flame · Family Built
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://order.online/store/chatham-burgers-grand-ave-w-25072946"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(200,16,46,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.12em',
              fontSize: '1.15rem',
              background: '#C8102E',
              color: '#ffffff',
              padding: '16px 44px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Order Online
          </motion.a>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/menu"
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                letterSpacing: '0.12em',
                fontSize: '1.15rem',
                background: 'transparent',
                color: '#ffffff',
                padding: '14px 44px',
                borderRadius: '4px',
                border: '2px solid rgba(255,255,255,0.45)',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              className="hover:border-red-500 hover:bg-red-600/10 transition-all"
            >
              View Menu
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScroll ? 1 : 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} style={{ color: '#F5C200', opacity: 0.8 }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
