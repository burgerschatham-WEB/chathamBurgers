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

const itemAlts: Record<string, string> = {
  'Dbl Smash Burger': 'Double smash burger with two fresh beef patties, melted cheese, and onions at Chatham Burgers',
  '1 LB Burger':      'One pound flame-grilled beef burger — The Beast — at Chatham Burgers in Chatham Ontario',
  'Chatham Burger':   'The original Chatham Burger, a half-pound beef patty with classic toppings, since 1985',
  'Fish & Chips':     'Golden crispy haddock fish and chips, a staff favourite at Chatham Burgers',
}

export default function FeaturedItems() {
  return (
    <section style={{ background: '#F5F0E8' }} className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
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
            Crafted on the Flame
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.05em',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#3D1F0A',
              lineHeight: 1,
            }}
          >
            THE <span style={{ color: '#F5C200' }}>LEGENDS</span>
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: '#C8102E',
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
                  background: '#ffffff',
                  border: '1px solid rgba(200,16,46,0.15)',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(200,16,46,0.5)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 40px rgba(200,16,46,0.1)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(200,16,46,0.15)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                {/* Image with zoom */}
                <div className="overflow-hidden" style={{ height: 220, position: 'relative' }}>
                  {itemImages[item.name] ? (
                    <Image
                      src={itemImages[item.name]}
                      alt={itemAlts[item.name] ?? item.name}
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
                        background: '#C8102E',
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
                      color: '#3D1F0A',
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
                      color: '#7a6a5a',
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
                      color: '#C8102E',
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
                      className="block w-full text-center font-bold py-2 rounded-lg transition-colors text-sm tracking-wider hover:bg-red-700"
                      style={{
                        background: '#C8102E',
                        color: '#ffffff',
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
              background: '#C8102E',
              color: '#ffffff',
              padding: '14px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
            className="hover:bg-red-700 transition-all"
          >
            View Full Menu →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
