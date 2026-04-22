'use client'

const items = [
  '🥩 Fresh Local Farm Meat',
  '⭐ Family-Owned Since 1985',
  '📍 Chatham, Ontario',
  '🍟 Fresh-Cut Fries Daily',
  '🏆 40 Years Strong',
  '🥩 Fresh Local Farm Meat',
  '⭐ Family-Owned Since 1985',
  '📍 Chatham, Ontario',
  '🍟 Fresh-Cut Fries Daily',
  '🏆 40 Years Strong',
]

export default function BrandMarquee() {
  return (
    <div
      className="overflow-hidden py-4 border-y"
      style={{
        background: '#F5C200',
        borderColor: '#d4a800',
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-8"
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              letterSpacing: '0.12em',
              color: '#0a0a0a',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}
          >
            {item}
            <span style={{ color: '#d4a800', marginLeft: '16px' }}>•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
