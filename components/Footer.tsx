import Link from 'next/link'
import { Flame, MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#0a0a0a', borderTop: '4px solid #F5C518' }}
    >
      {/* Ghost watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(4rem, 15vw, 12rem)',
            color: 'rgba(255,255,255,0.018)',
            whiteSpace: 'nowrap',
            letterSpacing: '0.05em',
            userSelect: 'none',
          }}
        >
          CRAFTED ON THE FLAME
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Flame size={28} style={{ color: '#E85D04' }} />
              <span
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.1em',
                  fontSize: '2rem',
                  color: '#F5C518',
                }}
              >
                Chatham Burgers
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.05em',
                color: '#cccccc',
                fontSize: '1rem',
                marginBottom: '8px',
              }}
            >
              Crafted on the Flame
            </p>
            <p style={{ color: '#888', fontSize: '0.875rem', lineHeight: '1.6', fontFamily: 'var(--font-lato), sans-serif' }}>
              Crafted on the Flame. Family built. Serving Chatham, Ontario since 1985.
              Real local farm meat, fresh-baked buns, fresh-cut fries, and recipes that haven&apos;t changed in 40 years.
            </p>
            <div className="flex gap-3 mt-6">
              {/* Circular Facebook icon */}
              <a
                href="https://www.facebook.com/profile.php?id=61575925564207"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-black"
                style={{
                  border: '1px solid rgba(245,197,24,0.4)',
                  color: '#cccccc',
                }}
                aria-label="Facebook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.1em',
                color: '#F5C518',
                fontSize: '1rem',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/',       label: 'Home' },
                { href: '/menu',   label: 'Full Menu' },
                { href: '/about',  label: 'Our Story' },
                { href: '/order',  label: 'Order Online' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#cccccc',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-lato), sans-serif',
                  }}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.1em',
                color: '#F5C518',
                fontSize: '1rem',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              Find Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: '#E85D04', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#cccccc', fontSize: '0.875rem', fontFamily: 'var(--font-lato)', lineHeight: '1.5' }}>
                  215 Grand Ave W<br />Chatham, ON N7L 1C3
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} style={{ color: '#E85D04', flexShrink: 0, marginTop: '2px' }} />
                <a
                  href="tel:+15193541414"
                  style={{ color: '#cccccc', fontSize: '0.875rem', fontFamily: 'var(--font-lato)', textDecoration: 'none' }}
                  className="hover:text-yellow-400 transition-colors"
                >
                  (519) 354-1414
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} style={{ color: '#E85D04', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#cccccc', fontSize: '0.875rem', fontFamily: 'var(--font-lato)', lineHeight: '1.5' }}>
                  Mon–Thu: 10am–8pm<br />
                  Fri–Sat: 10am–9pm<br />
                  Sun: 11am–8pm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8"
          style={{ borderTop: '1px solid #2a2a2a' }}
        >
          <p style={{ color: '#555', fontSize: '0.8rem', fontFamily: 'var(--font-lato)' }}>
            © 2026 Chatham Burgers. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.15em',
              color: '#333',
              fontSize: '0.9rem',
            }}
          >
            Crafted on the Flame — Since 1985
          </p>
        </div>
      </div>
    </footer>
  )
}
