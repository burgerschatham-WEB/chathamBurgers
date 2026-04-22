'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const testimonials = [
  {
    quote: "The burgers were juicy, perfectly seasoned, and clearly made with fresh ingredients. What really stood out was their commitment to supporting local suppliers — you can taste the difference. The fries were crispy, portions generous, and the staff were super friendly. Definitely a spot I'll be coming back to.",
    author: 'Hary',
    stars: 5,
  },
  {
    quote: "Best burgers in town. Being fussy, I only like a burger made of real meat. Never disappointed — always happy with how friendly and willing they are to accommodate my dietary preferences. I recommend this restaurant to anyone asking where I'd eat.",
    author: 'Shirley Konecny',
    stars: 5,
  },
  {
    quote: "I don't live in town anymore but every time I come to visit family, I always stop at Chatham Burger to get a Greek salad. Without a doubt, it's one of the best Greek salads I've ever had and it's always so filling. The people here really care about their customers.",
    author: 'Katie W.',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={16} fill="#F5C200" style={{ color: '#F5C200' }} />
      ))}
    </div>
  )
}

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-2xl p-8 transition-all duration-300"
      style={{
        background: '#F5F0E8',
        border: '1px solid rgba(61,31,10,0.1)',
      }}
    >
      <div
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '5rem',
          color: 'rgba(200,16,46,0.2)',
          lineHeight: 0.8,
          marginBottom: '12px',
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <StarRating count={t.stars} />

      <p
        style={{
          fontFamily: 'var(--font-lato), sans-serif',
          color: '#5a4a3a',
          fontSize: '0.95rem',
          lineHeight: '1.7',
          fontStyle: 'italic',
          margin: '16px 0',
        }}
      >
        {t.quote}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          letterSpacing: '0.05em',
          color: '#C8102E',
          fontSize: '0.85rem',
        }}
      >
        — {t.author}
      </p>
    </motion.div>
  )
}

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Chatham Burgers",
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Hary" },
      reviewBody: "The burgers were juicy, perfectly seasoned, and clearly made with fresh ingredients. What really stood out was their commitment to supporting local suppliers — you can taste the difference. The fries were crispy, portions generous, and the staff were super friendly. Definitely a spot I'll be coming back to.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Shirley Konecny" },
      reviewBody: "Best burgers in town. Being fussy, I only like a burger made of real meat. Never disappointed — always happy with how friendly and willing they are to accommodate my dietary preferences. I recommend this restaurant to anyone asking where I'd eat.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Katie W." },
      reviewBody: "I don't live in town anymore but every time I come to visit family, I always stop at Chatham Burger to get a Greek salad. Without a doubt, it's one of the best Greek salads I've ever had and it's always so filling. The people here really care about their customers.",
    },
  ],
}

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#ffffff' }} className="py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            What Our Customers Say
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.05em',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#3D1F0A',
            }}
          >
            THE <span style={{ color: '#F5C200' }}>VERDICT</span>
          </h2>
        </ScrollReveal>

        {/* Single responsive grid — no DOM duplication */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} t={t} delay={i * 0.1} />
          ))}
        </div>

        <ScrollReveal delay={0.3} className="text-center mt-10">
          <a
            href="https://g.page/r/chathamburgers"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-lato), sans-serif',
              color: '#7a6a5a',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ color: '#F5C200' }}>★★★★★</span>
            <span>4.8 stars · 180+ reviews on Google →</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
