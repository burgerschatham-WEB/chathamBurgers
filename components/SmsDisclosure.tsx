import Link from 'next/link'

/** CASL/CRTC consent disclosure shown under every "Text BURGER" call to action. */
export default function SmsDisclosure({ dark = true, align = 'center' }: { dark?: boolean; align?: 'center' | 'left' }) {
  const muted = dark ? 'rgba(255,255,255,0.55)' : '#6b5a4a'
  return (
    <p
      style={{
        fontFamily: 'var(--font-lato), sans-serif',
        color: muted,
        fontSize: '0.72rem',
        lineHeight: 1.5,
        textAlign: align,
        margin: '10px 0 0',
        maxWidth: 520,
        marginInline: align === 'center' ? 'auto' : undefined,
      }}
    >
      By texting BURGER, you agree to get recurring marketing texts from Chatham Burgers. Message frequency varies.
      Msg &amp; data rates may apply. Reply STOP to unsubscribe, HELP for help. Consent is not a condition of purchase.{' '}
      <Link href="/sms-terms" style={{ color: dark ? '#F5C200' : '#C8102E', textDecoration: 'underline' }}>
        SMS terms
      </Link>
    </p>
  )
}
