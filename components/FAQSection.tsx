'use client'

import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is Chatham Burgers open on Sunday?',
    a: 'Yes! We\'re open Sunday from 11 a.m. to 8 p.m. Monday through Thursday we\'re open 10 a.m.–8 p.m., and Friday–Saturday 10 a.m.–9 p.m.',
  },
  {
    q: 'Where is Chatham Burgers located?',
    a: 'We\'re at 215 Grand Ave W, Chatham, ON N7L 1C3 — serving Chatham, Ontario and the surrounding Chatham-Kent region including Blenheim, Wallaceburg, Tilbury, and beyond.',
  },
  {
    q: 'Does Chatham Burgers offer online ordering?',
    a: 'Yes — you can order online for pickup through our ordering system. Fresh, hot, and ready when you arrive.',
  },
  {
    q: 'Does Chatham Burgers use fresh or frozen beef?',
    a: 'Always fresh. We source real local farm beef delivered daily. Never frozen — you can taste the difference.',
  },
  {
    q: 'How long has Chatham Burgers been open?',
    a: 'We\'ve been serving Chatham, Ontario since 1985 — over 40 years of the same flame-grilled recipes, same family.',
  },
  {
    q: 'Does Chatham Burgers have a veggie burger?',
    a: 'Yes — we make our own veggie burger with soy and beans. No Beyond Meat or processed patties. Check our full menu or call us at (519) 354-1414 for today\'s options.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{ borderBottom: '1px solid #e0d8cc' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4 py-5"
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            letterSpacing: '0.03em',
            color: '#3D1F0A',
            fontSize: '1rem',
            textTransform: 'uppercase',
          }}
        >
          {q}
        </span>
        <ChevronDown
          size={20}
          style={{
            color: '#C8102E',
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        />
      </button>
      {open && (
        <p
          style={{
            fontFamily: 'var(--font-lato), sans-serif',
            color: '#7a6a5a',
            fontSize: '0.9rem',
            lineHeight: '1.7',
            paddingBottom: '20px',
          }}
        >
          {a}
        </p>
      )}
    </div>
  )
}

export default function FAQSection() {
  return (
    <section style={{ background: '#F5F0E8' }} className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <p
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              letterSpacing: '0.3em',
              color: '#C8102E',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Got Questions?
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.05em',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#3D1F0A',
            }}
          >
            FREQUENTLY ASKED <span style={{ color: '#C8102E' }}>QUESTIONS</span>
          </h2>
        </ScrollReveal>

        <div style={{ borderTop: '1px solid #e0d8cc' }}>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p
            style={{
              fontFamily: 'var(--font-lato), sans-serif',
              color: '#7a6a5a',
              fontSize: '0.875rem',
              marginBottom: '16px',
            }}
          >
            Still have questions? Give us a call.
          </p>
          <a
            href="tel:+15193541414"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.1em',
              fontSize: '1.1rem',
              background: '#C8102E',
              color: '#ffffff',
              padding: '12px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            (519) 354-1414
          </a>
        </div>
      </div>
    </section>
  )
}
