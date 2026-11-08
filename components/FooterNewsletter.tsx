import { MessageSquare } from 'lucide-react'
import SmsDisclosure from './SmsDisclosure'

/** Footer sign-up: joins the SMS club (the only list we actually keep). */
export default function FooterNewsletter() {
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
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <p
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              letterSpacing: '0.15em',
              color: '#F5C200',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Join the Chatham Burgers Club
          </p>
          <p style={{ fontFamily: 'var(--font-lato), sans-serif', color: '#cccccc', fontSize: '0.95rem', margin: '6px 0 0' }}>
            Text <strong style={{ color: '#ffffff' }}>BURGER</strong> to{' '}
            <strong style={{ color: '#ffffff' }}>262-242-3234</strong> for free fries and club deals.
          </p>
        </div>
        <a
          href="sms:2622423234?body=BURGER"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#C8102E',
            color: '#ffffff',
            borderRadius: '4px',
            padding: '12px 28px',
            fontFamily: 'var(--font-bebas), sans-serif',
            letterSpacing: '0.12em',
            fontSize: '1rem',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          <MessageSquare size={16} />
          Text BURGER
        </a>
      </div>
      <SmsDisclosure align="left" />
    </div>
  )
}
