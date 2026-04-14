'use client'

import Link from 'next/link'
import Image from 'next/image'
import { featuredItems } from '@/lib/menuData'
import { images } from '@/lib/images'
import { ScrollReveal } from './ScrollReveal'

const itemImages: Record<string, string> = {
  'Dbl Smash Burger': images.smashBurger,
  '1 LB Burger':      images.bigBurger,
  'Chatham Burger':   images.chathamBurger,
  'Fish & Chips':     images.fishChips,
}

export default function FeaturedItems() {
  return (
    <section style={{ background: '#0a0a0a' }} className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
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
            Charcoal Grilled Perfection
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.05em',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#ffffff',
              lineHeight: 1,
            }}
          >
            THE <span style={{ color: '#F5C518' }}>LEGENDS</span>
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: '#F5C518',
              margin: '16px auto 0',
              borderRadius: '2px',
            }}
          />
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.1}>
              <div
                className="group relative flex flex-col h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-500"
                style={{
                  background: '#141414',
                  border: '1px solid rgba(245,197,24,0.2)',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(245,197,24,0.6)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 40px rgba(245,197,24,0.15)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(245,197,24,0.2)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                {/* Image with zoom */}
                <div className="overflow-hidden" style={{ height: 220, position: 'relative' }}>
                  {itemImages[item.name] ? (
                    <Image
                      src={itemImages[item.name]}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div
                      className="h-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #1a0a00, #2a1500)' }}
                    >
                      <span style={{ fontSize: '4rem' }}>🍔</span>
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }}
                  />
                  {/* Badge */}
                  {item.badge && (
                    <span
                      className="absolute top-3 right-3 animate-pulse"
                      style={{
                        background: '#E85D04',
                        color: '#ffffff',
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-oswald), sans-serif',
                        letterSpacing: '0.05em',
                        padding: '4px 10px',
                        borderRadius: '2px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3
                    style={{
                      fontFamily: 'var(--font-oswald), sans-serif',
                      letterSpacing: '0.05em',
                      color: '#ffffff',
                      fontSize: '1.1rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="flex-1"
                    style={{
                      fontFamily: 'var(--font-lato), sans-serif',
                      color: '#888',
                      fontSize: '0.825rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {item.description}
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-bebas), sans-serif',
                      letterSpacing: '0.1em',
                      color: '#F5C518',
                      fontSize: '2rem',
                      marginTop: '8px',
                    }}
                  >
                    {item.price}
                  </div>

                  {/* Hover CTA */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                    <a
                      href="https://order.online/store/chatham-burgers-grand-ave-w-25072946"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center font-bold py-2 rounded-lg transition-colors text-sm tracking-wider hover:bg-yellow-300"
                      style={{
                        background: '#F5C518',
                        color: '#0a0a0a',
                        fontFamily: 'var(--font-oswald), sans-serif',
                        letterSpacing: '0.1em',
                        fontSize: '0.8rem',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                      }}
                    >
                      ORDER NOW →
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="text-center mt-14">
          <Link
            href="/menu"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.12em',
              fontSize: '1.1rem',
              border: '2px solid #F5C518',
              color: '#F5C518',
              padding: '14px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
            className="hover:bg-yellow-500 hover:text-black transition-all"
          >
            View Full Menu →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
