import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SMS Terms | Chatham Burgers Club',
  description: 'How the Chatham Burgers Club text list works: what we send, how often, and how to stop.',
  alternates: { canonical: 'https://chathamburger.com/sms-terms' },
}

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-oswald), sans-serif',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#C8102E',
  fontSize: '1.05rem',
  margin: '28px 0 8px',
}
const p: React.CSSProperties = { fontFamily: 'var(--font-lato), sans-serif', color: '#3D1F0A', lineHeight: 1.7, margin: '0 0 10px' }

export default function SmsTermsPage() {
  return (
    <main style={{ background: '#F5F0E8', minHeight: '100vh', padding: '112px 16px 64px' }}>
      <article style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-bebas), sans-serif', letterSpacing: '0.06em', fontSize: '2.6rem', color: '#3D1F0A', margin: 0 }}>
          Chatham Burgers Club — SMS Terms
        </h1>

        <h2 style={h2}>Who&apos;s texting you</h2>
        <p style={p}>
          Chatham Burgers, 215 Grand Ave West, Chatham, Ontario. Phone (519) 354-1414 ·{' '}
          <a href="mailto:burgerschatham@gmail.com" style={{ color: '#C8102E' }}>burgerschatham@gmail.com</a>
        </p>

        <h2 style={h2}>How you join</h2>
        <p style={p}>
          Text BURGER to 226-242-3234. Joining means you agree to get recurring marketing texts from us: deals, new menu items and
          club offers. Consent is not a condition of purchase.
        </p>

        <h2 style={h2}>How often</h2>
        <p style={p}>Message frequency varies. We keep it to deals worth your time.</p>

        <h2 style={h2}>Cost</h2>
        <p style={p}>Joining is free. Message and data rates from your carrier may apply.</p>

        <h2 style={h2}>How to stop</h2>
        <p style={p}>
          Reply STOP at any time and you&apos;ll get one final confirmation text, then nothing more. Reply HELP for help, or call us at
          (519) 354-1414.
        </p>

        <h2 style={h2}>Offers</h2>
        <p style={p}>
          Offer details and any limits are in the text you receive. Show the text at the counter, or use the code when ordering
          online. Offers can&apos;t be exchanged for cash.
        </p>

        <h2 style={h2}>Your number</h2>
        <p style={p}>We only use your number to send Chatham Burgers texts. We never sell or share it.</p>

        <p style={{ ...p, marginTop: 32 }}>
          <Link href="/offers" style={{ color: '#C8102E', fontWeight: 700 }}>← Back to offers</Link>
        </p>
      </article>
    </main>
  )
}
