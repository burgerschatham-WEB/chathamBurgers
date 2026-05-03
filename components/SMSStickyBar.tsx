'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X } from 'lucide-react'

export default function SMSStickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const timer = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(timer)
  }, [dismissed])

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            background: '#1C1C1C',
            borderTop: '3px solid #C8102E',
            boxShadow: '0 -4px 24px rgba(0,0,0,0.35)',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            {/* Left: icon + copy */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
              <div style={{
                background: '#C8102E',
                borderRadius: '10px',
                padding: '8px',
                flexShrink: 0,
              }}>
                <MessageSquare size={22} color="#ffffff" />
              </div>

              <div style={{ minWidth: 0 }}>
                <p style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  color: '#F5C200',
                  fontSize: 'clamp(0.85rem, 2.2vw, 1.05rem)',
                  letterSpacing: '0.06em',
                  margin: 0,
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  JOIN THE CHATHAM BURGERS CLUB &nbsp;
                  <span style={{ color: '#ffffff' }}>— GET</span>{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #C8102E, #A00E27)',
                    color: '#fff',
                    padding: '1px 8px',
                    borderRadius: '4px',
                    fontStyle: 'italic',
                  }}>FREE FRIES!</span>
                </p>
                <p style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  margin: '3px 0 0',
                }}>
                  Text <strong style={{ color: '#fff' }}>BURGER</strong> to{' '}
                  <strong style={{ color: '#F5C200' }}>262-242-3234</strong> for weekly deals
                </p>
              </div>
            </div>

            {/* CTA button */}
            <a
              href="sms:2622423234?body=BURGER"
              style={{
                flexShrink: 0,
                background: 'linear-gradient(135deg, #C8102E, #A00E27)',
                color: '#ffffff',
                fontFamily: 'var(--font-bebas), sans-serif',
                letterSpacing: '0.1em',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                padding: '10px 22px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(200,16,46,0.45)',
                whiteSpace: 'nowrap',
                transition: 'transform 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              TEXT NOW
            </a>

            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              style={{
                flexShrink: 0,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1,
              }}
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
