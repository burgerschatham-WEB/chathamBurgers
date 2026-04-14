'use client'

import { useState } from 'react'

export default function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <div
      style={{
        borderTop: '1px solid #2a2a2a',
        borderBottom: '1px solid #2a2a2a',
        padding: '32px 0',
        marginTop: '40px',
        marginBottom: '32px',
      }}
    >
      {submitted ? (
        <p
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            letterSpacing: '0.1em',
            color: '#F5C518',
            fontSize: '1rem',
            textAlign: 'center',
          }}
        >
          You&apos;re on the list! 🔥
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="footer-email"
              style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.15em',
                color: '#888',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
              }}
            >
              Stay in the loop — deals, specials & new menu items
            </label>
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={{
                background: '#1a1a1a',
                border: '1px solid #3a3a3a',
                borderRadius: '4px',
                padding: '12px 16px',
                color: '#ffffff',
                fontFamily: 'var(--font-lato), sans-serif',
                fontSize: '0.9rem',
                outline: 'none',
                width: '100%',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: '#F5C518',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 28px',
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.12em',
              fontSize: '1rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  )
}
