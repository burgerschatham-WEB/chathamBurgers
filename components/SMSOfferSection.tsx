'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { MessageSquare, Star } from 'lucide-react'

export default function SMSOfferSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(160deg, #F5EFE0 0%, #EDE3CC 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative spark dots */}
      {[
        { top: '8%', left: '5%', color: '#C8102E' },
        { top: '15%', right: '8%', color: '#F5C200' },
        { bottom: '20%', left: '3%', color: '#F5C200' },
        { bottom: '10%', right: '6%', color: '#C8102E' },
        { top: '50%', right: '52%', color: '#C8102E' },
      ].map((dot, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          style={{
            position: 'absolute',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: dot.color,
            top: dot.top,
            left: (dot as { left?: string }).left,
            right: (dot as { right?: string }).right,
            bottom: (dot as { bottom?: string }).bottom,
            opacity: 0.5,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT: Offer content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            {/* Brand header */}
            <div>
              <p style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.25em',
                color: '#8a7a6a',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}>
                Since 1985
              </p>
              <h2 style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                letterSpacing: '0.04em',
                fontSize: 'clamp(2.8rem, 6vw, 4rem)',
                lineHeight: 1,
                marginBottom: '6px',
              }}>
                <span style={{ color: '#F5C200' }}>Chatham</span>{' '}
                <span style={{ color: '#C8102E' }}>Burgers</span>
              </h2>
              <p style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.28em',
                color: '#3D1F0A',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
              }}>
                Charcoal Grilled. Family Built.
              </p>
              <div style={{ display: 'flex', gap: '4px', marginTop: '12px' }}>
                <div style={{ width: '32px', height: '2px', background: '#C8102E', borderRadius: '1px' }} />
                <div style={{ width: '8px', height: '2px', background: '#F5C200', borderRadius: '1px' }} />
              </div>
            </div>

            {/* Join the Club card */}
            <div style={{
              background: '#1C1C1C',
              border: '2px dashed rgba(255,255,255,0.25)',
              borderRadius: '14px',
              padding: '22px 24px 18px',
              position: 'relative',
            }}>
              {/* JOIN THE badge */}
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '20px',
                background: '#F5C200',
                color: '#1C1C1C',
                fontFamily: 'var(--font-bebas), sans-serif',
                letterSpacing: '0.1em',
                fontSize: '1rem',
                padding: '3px 16px',
                borderRadius: '4px',
                fontWeight: 700,
              }}>
                JOIN THE
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.06em',
                  color: '#ffffff',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                  lineHeight: 1.1,
                  margin: 0,
                }}>
                  CHATHAM BURGERS CLUB
                </h3>
                <Star size={16} fill="#F5C200" color="#F5C200" style={{ flexShrink: 0 }} />
              </div>
            </div>

            {/* FREE FRIES */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, #C8102E 0%, #A00E27 100%)',
                borderRadius: '10px',
                padding: '18px 28px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(200,16,46,0.35)',
              }}
            >
              {/* Shine sweep */}
              <div style={{
                position: 'absolute',
                top: 0, left: '-60px', right: '-60px', bottom: 0,
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)',
                pointerEvents: 'none',
              }} />
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '14px' }}>
                <span style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.05em',
                  color: '#ffffff',
                  fontSize: 'clamp(2.8rem, 7vw, 3.8rem)',
                  lineHeight: 1,
                }}>FREE!</span>
                <span style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.05em',
                  color: '#F5C200',
                  fontSize: 'clamp(2.8rem, 7vw, 3.8rem)',
                  lineHeight: 1,
                  fontStyle: 'italic',
                }}>FRIES</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '6px' }}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} style={{ height: '2px', width: '22px', background: 'rgba(255,255,255,0.3)', borderRadius: '1px' }} />
                ))}
              </div>
            </motion.div>

            {/* Text BURGER CTA */}
            <div style={{
              background: '#1C1C1C',
              borderRadius: '12px',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              {/* Header row: icon + TEXT BURGER */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MessageSquare size={26} color="#F5C200" style={{ flexShrink: 0 }} />
                <p style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                  lineHeight: 1,
                  margin: 0,
                }}>
                  TEXT{' '}
                  <span style={{ color: '#F5C200' }}>BURGER</span>
                  <span style={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontSize: '0.85rem',
                    letterSpacing: '0.18em',
                    color: 'rgba(255,255,255,0.5)',
                    textTransform: 'uppercase',
                    marginLeft: '10px',
                    verticalAlign: 'middle',
                  }}>→ TO →</span>
                </p>
              </div>

              {/* Full-width phone number button */}
              <a
                href="sms:2622423234?body=BURGER"
                style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #C8102E 0%, #A00E27 100%)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.15em',
                  fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                  padding: '14px 0',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  boxShadow: '0 6px 20px rgba(200,16,46,0.45)',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(200,16,46,0.55)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(200,16,46,0.45)'
                }}
              >
                262-242-3234
              </a>

              <p style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                color: 'rgba(255,255,255,0.45)',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textAlign: 'center',
                margin: 0,
              }}>
                Tap to open your messages app
              </p>
            </div>

            {/* Thank You footer */}
            <div style={{
              background: '#1C1C1C',
              borderRadius: '8px',
              padding: '13px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}>
              <span style={{ color: '#F5C200', fontSize: '1.1rem' }}>➔</span>
              <span style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontStyle: 'italic',
                color: '#ffffff',
                fontSize: '1rem',
                letterSpacing: '0.04em',
              }}>Thank You for Supporting!</span>
              <span style={{ color: '#C8102E', fontSize: '1.1rem' }}>♡</span>
            </div>
          </motion.div>

          {/* RIGHT: Fries image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
              aspectRatio: '4 / 5',
              position: 'relative',
            }}>
              <Image
                src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80"
                alt="Fresh-cut fries"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              {/* Gradient overlay at bottom */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)',
              }} />
            </div>

            {/* Rotating badge */}
            <motion.div
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                background: '#F5C200',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                zIndex: 2,
              }}
            >
              <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '0.7rem', color: '#1C1C1C', letterSpacing: '0.12em', lineHeight: 1 }}>SINCE</span>
              <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '1.6rem', color: '#C8102E', letterSpacing: '0.04em', lineHeight: 1 }}>1985</span>
              <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.55rem', color: '#3D1F0A', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.2, textAlign: 'center' }}>Chatham,{'\n'}Ontario</span>
            </motion.div>

            {/* Top-right offer tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 8 } : {}}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-12px',
                background: '#C8102E',
                color: '#fff',
                fontFamily: 'var(--font-bebas), sans-serif',
                letterSpacing: '0.06em',
                fontSize: '0.9rem',
                padding: '8px 14px',
                borderRadius: '6px',
                boxShadow: '0 4px 14px rgba(200,16,46,0.4)',
                zIndex: 2,
                lineHeight: 1.2,
                textAlign: 'center',
              }}
            >
              FREE<br />FRIES
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
