'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { ScrollReveal } from './ScrollReveal'

const stats = [
  { number: 40,   suffix: '+', label: 'Years of Flame' },
  { number: 1985, suffix: '',  label: 'Est. in Chatham' },
  { number: 15,   suffix: '+', label: 'Burgers on the Menu' },
  { number: 1,    suffix: '',  label: 'Family Behind It All' },
]

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: '#0d0d0d',
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
              <div
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.04em',
                  fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                  color: '#F5C518',
                  lineHeight: 1,
                }}
              >
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={stat.number > 100 ? 2.5 : 1.8}
                    separator=","
                    useEasing
                  />
                ) : (
                  0
                )}
                {stat.suffix}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  letterSpacing: '0.1em',
                  color: '#888',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  marginTop: '8px',
                }}
              >
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
