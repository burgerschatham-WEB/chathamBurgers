'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { images } from '@/lib/images'

const rotatingLines = ['Hungry?', 'Ready to Order?', 'Craving Something?']

export default function CTABanner() {
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % rotatingLines.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${images.ctaBg})` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(90,50,0,0.85) 0%, rgba(10,10,10,0.80) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div>
            {/* Animated rotating headline */}
            <div
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                letterSpacing: '0.08em',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#ffffff',
                lineHeight: 1.1,
                minHeight: '1.2em',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={lineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'block' }}
                >
                  {rotatingLines[lineIndex]}{' '}
                  <span style={{ color: '#F5C200' }}>Order Online Now</span>
                </motion.span>
              </AnimatePresence>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-lato), sans-serif',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.95rem',
                marginTop: '8px',
              }}
            >
              Fresh local meat. Fresh-baked buns. Fresh-cut fries. Since 1985.
            </p>
          </div>

          <motion.a
            href="https://order.online/store/chatham-burgers-grand-ave-w-25072946"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 whitespace-nowrap"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(200,16,46,0.5)',
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.12em',
              fontSize: '1.2rem',
              background: '#C8102E',
              color: '#ffffff',
              padding: '18px 40px',
              borderRadius: '100px',
              textDecoration: 'none',
              boxShadow: '0 0 30px rgba(200,16,46,0.35)',
            }}
          >
            Order Now
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
