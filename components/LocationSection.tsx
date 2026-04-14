'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const hours = [
  { days: [1, 2, 3, 4],    open: 10, close: 20, label: 'Monday – Thursday', display: '10 a.m. – 8 p.m.' },
  { days: [5, 6],           open: 10, close: 21, label: 'Friday – Saturday',  display: '10 a.m. – 9 p.m.' },
  { days: [0],              open: 11, close: 20, label: 'Sunday',             display: '11 a.m. – 8 p.m.' },
]

function getOpenStatus() {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60
  const row = hours.find((h) => h.days.includes(day))
  if (!row) return { isOpen: false, label: 'Closed Today' }
  return hour >= row.open && hour < row.close
    ? { isOpen: true,  label: 'Open Now' }
    : { isOpen: false, label: 'Currently Closed' }
}

export default function LocationSection() {
  const status = getOpenStatus()

  return (
    <section style={{ background: '#0a0a0a' }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              letterSpacing: '0.3em',
              color: '#E85D04',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Come Find Us
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.05em',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#ffffff',
            }}
          >
            WE&apos;RE IN{' '}
            <span style={{ color: '#F5C518' }}>CHATHAM, ON</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
          {/* Map — 3/5 width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
            style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #2a2a2a', minHeight: 380 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=215+Grand+Ave+W,+Chatham,+ON+N7L+1C3&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chatham Burgers Location"
            />
          </motion.div>

          {/* Info panel — 2/5 width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-0"
            style={{
              background: '#141414',
              borderTop: '4px solid #F5C518',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Open/Closed badge */}
            <div className="mb-6">
              <span
                style={{
                  display: 'inline-block',
                  background: status.isOpen ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
                  color: status.isOpen ? '#4ade80' : '#f87171',
                  border: `1px solid ${status.isOpen ? 'rgba(34,197,94,0.4)' : 'rgba(239,68,68,0.4)'}`,
                  borderRadius: '100px',
                  padding: '4px 14px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-oswald), sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {status.isOpen ? '● ' : '○ '}{status.label}
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={20} style={{ color: '#E85D04', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    color: '#fff',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '4px',
                  }}
                >
                  Location
                </p>
                <p style={{ color: '#ccc', fontSize: '0.9rem', fontFamily: 'var(--font-lato)', lineHeight: 1.5 }}>
                  215 Grand Ave W<br />Chatham, ON N7L 1C3
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 mb-8">
              <Clock size={20} style={{ color: '#E85D04', flexShrink: 0, marginTop: 2 }} />
              <div className="w-full">
                <p
                  style={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    color: '#fff',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px',
                  }}
                >
                  Hours
                </p>
                {hours.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 mb-2">
                    <span style={{ color: '#888', fontSize: '0.85rem', fontFamily: 'var(--font-lato)' }}>
                      {row.label}
                    </span>
                    <span style={{ color: '#ccc', fontSize: '0.85rem', fontFamily: 'var(--font-lato)' }}>
                      {row.display}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone button */}
            <a
              href="tel:+15193541414"
              className="flex items-center justify-center gap-3 rounded-xl font-bold text-lg transition-colors hover:bg-yellow-300 mb-3"
              style={{
                background: '#F5C518',
                color: '#0a0a0a',
                padding: '16px 24px',
                textDecoration: 'none',
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.05em',
                fontSize: '1.1rem',
              }}
            >
              <Phone size={20} />
              (519) 354-1414
            </a>

            {/* Directions button */}
            <a
              href="https://maps.google.com/?q=215+Grand+Ave+W,+Chatham,+ON+N7L+1C3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl transition-all hover:border-yellow-400 hover:text-yellow-400"
              style={{
                border: '1px solid #3a3a3a',
                color: '#ccc',
                padding: '12px 24px',
                textDecoration: 'none',
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.05em',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
              }}
            >
              <ExternalLink size={16} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
