'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { MessageSquare, Star, Clock, Tag, Phone } from 'lucide-react'
import Link from 'next/link'
import SmsDisclosure from './SmsDisclosure'

// ─── Brand tokens ──────────────────────────────────────────────────────────
const C = {
  red:       '#DC2626',
  redDark:   '#A61C22',
  gold:      '#F4BA2E',
  goldDark:  '#D99E1F',
  brown:     '#4A2C1A',
  cream:     '#FAF3E0',
  ink:       '#2A1408',
  card:      '#43230F',
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 },
  }),
}

interface Deal {
  tag: string
  tagColor: string
  title: string
  subtitle: string
  description: string
  cta: string
  href: string
  highlight: boolean
  badge: string | null
  badgeColor: string | null
}

const deals: Deal[] = [
  {
    tag: 'SMS EXCLUSIVE',
    tagColor: C.red,
    title: 'FREE FRIES',
    subtitle: 'With any burger purchase',
    description: 'Join the Chatham Burgers Club. Text BURGER to 226-242-3234 and claim your free fries on your next visit.',
    cta: 'Text to Claim',
    href: 'sms:2262423234?body=BURGER',
    highlight: false,
    badge: null,
    badgeColor: C.red,
  },
]

const steps = [
  { num: '01', label: 'Text BURGER', detail: 'Send the word BURGER to 226-242-3234 from your phone.' },
  { num: '02', label: 'Get Confirmed', detail: "You'll get a welcome text with your free-fries offer right away." },
  { num: '03', label: 'Redeem In-Store', detail: "Show the text at the counter on your next visit. That's it." },
]

export default function OffersClient() {
  return (
    <div style={{ background: C.cream, minHeight: '100vh', paddingTop: '80px' }}>

      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div style={{ background: C.red, padding: '56px 0 44px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ position: 'relative' }}>
          <motion.p
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
            style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '12px' }}
          >
            Chatham Burgers Club
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
            style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 8vw, 5.5rem)', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '14px' }}
          >
            <span style={{ color: '#ffffff' }}>DEALS &amp; </span>
            <span style={{ color: C.gold }}>OFFERS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 0.18 }}
            style={{ fontFamily: 'var(--font-oswald)', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase' }}
          >
            Exclusive to SMS members · Updated weekly
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ── Featured Offer ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }}
          style={{ background: C.card, borderRadius: '16px', overflow: 'hidden', marginBottom: '52px', boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div style={{ padding: 'clamp(32px, 5vw, 56px)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.gold, borderRadius: '4px', padding: '4px 14px', marginBottom: '22px' }}>
                <Star size={12} fill={C.ink} color={C.ink} />
                <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', letterSpacing: '0.15em', color: C.ink }}>JOIN THE CHATHAM BURGERS CLUB</span>
              </div>

              <div style={{ marginBottom: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', letterSpacing: '0.04em', color: '#ffffff', lineHeight: 1 }}>FREE!</span>
                  <span style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', letterSpacing: '0.04em', color: C.gold, lineHeight: 1, fontStyle: 'italic' }}>FRIES</span>
                </div>
                <p style={{ fontFamily: 'var(--font-oswald)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.18em', fontSize: '0.78rem', textTransform: 'uppercase', marginTop: '6px' }}>
                  With any burger purchase · One per customer
                </p>
              </div>

              <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                {[...Array(5)].map((_, i) => <div key={i} style={{ height: '2px', flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: '1px' }} />)}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ background: C.red, borderRadius: '10px', padding: '12px', flexShrink: 0 }}>
                  <MessageSquare size={24} color="#ffffff" />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.5rem', letterSpacing: '0.08em', color: '#ffffff', lineHeight: 1, margin: 0 }}>
                    TEXT <span style={{ color: C.gold }}>BURGER</span>
                    <span style={{ fontFamily: 'var(--font-oswald)', fontSize: '0.72rem', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.35)', marginLeft: '10px' }}>→ TO →</span>
                  </p>
                  <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-oswald)', color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Open your messages and send the keyword
                  </p>
                </div>
              </div>

              <a
                href="sms:2262423234?body=BURGER"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`, color: '#ffffff', fontFamily: 'var(--font-bebas)', letterSpacing: '0.15em', fontSize: '1.5rem', padding: '16px 0', borderRadius: '10px', textDecoration: 'none', boxShadow: `0 8px 28px rgba(220,38,38,0.4)`, transition: 'transform 0.15s, box-shadow 0.15s', width: '100%', maxWidth: '380px' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(220,38,38,0.55)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(220,38,38,0.4)' }}
              >
                226-242-3234
              </a>
              <p style={{ fontFamily: 'var(--font-oswald)', color: 'rgba(255,255,255,0.28)', fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '10px' }}>
                Tap to open messages
              </p>
              <SmsDisclosure />
            </div>

            {/* Right — red panel */}
            <div style={{ background: `linear-gradient(135deg, ${C.red} 0%, ${C.redDark} 100%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
              <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '0.68rem', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: '8px' }}>Since 1985</p>
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', letterSpacing: '0.05em', lineHeight: 1, marginBottom: '6px' }}>
                <span style={{ color: C.gold }}>CHATHAM</span><br />
                <span style={{ color: '#ffffff' }}>BURGERS</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '0.7rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '32px' }}>Flame-Grilled · Since 1985</p>
              {[
                { num: '40+', label: 'Years Serving Chatham' },
                { num: '1000s', label: 'of Happy Customers' },
                { num: 'Up to 4', label: 'Club Texts a Month' },
              ].map((s, i) => (
                <div key={i} style={{ marginBottom: '18px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none', paddingBottom: i < 2 ? '18px' : '0', width: '100%', maxWidth: '220px' }}>
                  <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', color: C.gold, lineHeight: 1, margin: 0 }}>{s.num}</p>
                  <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '0.68rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', margin: '4px 0 0' }}>{s.label}</p>
                </div>
              ))}
              <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', marginTop: '8px' }}>Thank You for Supporting! ♡</p>
            </div>
          </div>
        </motion.div>

        {/* ── How to Claim ────────────────────────────────────────────── */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.3em', color: C.red, fontSize: '0.76rem', textTransform: 'uppercase', marginBottom: '8px' }}>Simple as 1-2-3</p>
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '0.05em', color: C.ink, lineHeight: 1 }}>
              HOW TO <span style={{ color: C.red }}>CLAIM</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '12px' }}>
            {steps.map((step, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}
                style={{ background: '#ffffff', borderRadius: '12px', padding: '32px 28px', position: 'relative', overflow: 'hidden', border: `1px solid rgba(0,0,0,0.07)`, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '4.5rem', color: 'rgba(220,38,38,0.08)', lineHeight: 1, position: 'absolute', top: '12px', right: '18px' }}>{step.num}</span>
                <div style={{ background: C.red, borderRadius: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <MessageSquare size={20} color="#fff" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.35rem', letterSpacing: '0.06em', color: C.ink, marginBottom: '8px' }}>{step.label}</h3>
                <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '0.84rem', letterSpacing: '0.04em', color: C.brown, lineHeight: 1.65 }}>{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Deals Grid ──────────────────────────────────────────────── */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.3em', color: C.red, fontSize: '0.76rem', textTransform: 'uppercase', marginBottom: '8px' }}>Club Offer</p>
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '0.05em', color: C.ink, lineHeight: 1 }}>
              THE CLUB <span style={{ color: C.red }}>DEAL</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 max-w-xl mx-auto" style={{ gap: '14px' }}>
            {deals.map((deal, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={fadeUp}
                style={{
                  background: deal.highlight ? C.card : '#ffffff',
                  border: deal.highlight ? `1px solid rgba(220,38,38,0.3)` : `1px solid rgba(0,0,0,0.08)`,
                  borderRadius: '12px', padding: '28px',
                  position: 'relative', overflow: 'hidden',
                  boxShadow: deal.highlight ? `0 4px 24px rgba(220,38,38,0.15)` : '0 2px 10px rgba(0,0,0,0.05)',
                  borderTop: `3px solid ${deal.tagColor}`,
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                whileHover={{ y: -3, boxShadow: deal.highlight ? '0 8px 32px rgba(220,38,38,0.22)' : '0 8px 24px rgba(0,0,0,0.1)' }}
              >
                {deal.badge && (
                  <div style={{ position: 'absolute', top: '14px', right: '14px', background: deal.badgeColor ?? C.gold, borderRadius: '4px', padding: '3px 8px', fontFamily: 'var(--font-bebas)', fontSize: '0.63rem', letterSpacing: '0.1em', color: deal.badgeColor === C.red ? '#ffffff' : C.ink, maxWidth: '160px', textAlign: 'right', lineHeight: 1.3 }}>
                    {deal.badge}
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '12px' }}>
                  <Tag size={11} color={deal.tagColor} />
                  <span style={{ fontFamily: 'var(--font-oswald)', fontSize: '0.68rem', letterSpacing: '0.25em', color: deal.tagColor, textTransform: 'uppercase' }}>{deal.tag}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)', letterSpacing: '0.05em', color: deal.highlight ? '#ffffff' : C.ink, lineHeight: 1, marginBottom: '4px' }}>
                  {deal.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '0.86rem', letterSpacing: '0.06em', color: deal.highlight ? C.gold : C.redDark, marginBottom: '10px', fontWeight: 500 }}>
                  {deal.subtitle}
                </p>
                <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '0.82rem', letterSpacing: '0.03em', color: deal.highlight ? 'rgba(255,255,255,0.5)' : C.brown, lineHeight: 1.7, marginBottom: '20px' }}>
                  {deal.description}
                </p>

                {/* Primary CTA */}
                <a
                  href={deal.href}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    background: deal.highlight ? C.red : 'transparent',
                    border: `1.5px solid ${C.red}`,
                    color: deal.highlight ? '#ffffff' : C.red,
                    fontFamily: 'var(--font-oswald)', letterSpacing: '0.12em',
                    fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 600,
                    padding: '9px 18px', borderRadius: '6px',
                    textDecoration: 'none', transition: 'all 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.red; e.currentTarget.style.color = '#ffffff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = deal.highlight ? C.red : 'transparent'; e.currentTarget.style.color = deal.highlight ? '#ffffff' : C.red }}
                >
                  {deal.href.startsWith('tel:') ? <Phone size={13} /> : <MessageSquare size={13} />}
                  {deal.cta}
                </a>

                <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.75rem', color: deal.highlight ? 'rgba(255,255,255,0.6)' : '#6b5a4a', margin: '12px 0 0' }}>
                  {deal.href.startsWith('tel:') ? 'Just mention this deal at the counter or when you call.' : 'Show the text you get back at the counter.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Never Miss a Deal strip ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: C.card, borderRadius: '14px', padding: '36px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px', boxShadow: '0 6px 32px rgba(0,0,0,0.14)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div style={{ background: C.red, borderRadius: '10px', padding: '12px', flexShrink: 0 }}>
              <Clock size={24} color="#fff" />
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.5rem', letterSpacing: '0.06em', color: '#ffffff', lineHeight: 1, margin: 0 }}>NEVER MISS A DEAL</p>
              <p style={{ fontFamily: 'var(--font-oswald)', fontSize: '0.76rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', margin: '4px 0 0' }}>
                Free fries to start · up to 4 texts a month
              </p>
            </div>
          </div>
          <a
            href="sms:2262423234?body=BURGER"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`, color: '#ffffff', fontFamily: 'var(--font-bebas)', letterSpacing: '0.15em', fontSize: '1.2rem', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', boxShadow: `0 6px 20px rgba(220,38,38,0.35)`, whiteSpace: 'nowrap', transition: 'transform 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <MessageSquare size={18} />
            TEXT BURGER → 226-242-3234
          </a>
        </motion.div>
        <SmsDisclosure dark={false} />

        {/* Back to menu */}
        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link href="/menu" style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.15em', fontSize: '0.8rem', textTransform: 'uppercase', color: C.brown, textDecoration: 'none', transition: 'color 0.2s' }} className="hover:!text-red-600">
            ← Browse the Full Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
