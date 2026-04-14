'use client'

import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
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

function StarRating({ count, inView, delay }: { count: number; inView: boolean; delay: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: delay + i * 0.07, duration: 0.3, type: 'spring' }}
        >
          <Star size={16} fill="#F5C518" style={{ color: '#F5C518' }} />
        </motion.div>
      ))}
    </div>
  )
}

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      className="flex-shrink-0 w-full md:w-auto rounded-2xl p-8 transition-all duration-300 hover:border-yellow-400/30"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
        minWidth: 0,
      }}
    >
      {/* Large quote mark */}
      <div
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '5rem',
          color: 'rgba(245,197,24,0.25)',
          lineHeight: 0.8,
          marginBottom: '12px',
          userSelect: 'none',
        }}
      >
        &ldquo;
      </div>

      <StarRating count={t.stars} inView={inView} delay={delay} />

      <p
        style={{
          fontFamily: 'var(--font-lato), sans-serif',
          color: '#cccccc',
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
          color: '#F5C518',
          fontSize: '0.85rem',
        }}
      >
        — {t.author}
      </p>
    </div>
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
      reviewBody:
        "The burgers were juicy, perfectly seasoned, and clearly made with fresh ingredients. What really stood out was their commitment to supporting local suppliers — you can taste the difference. The fries were crispy, portions generous, and the staff were super friendly. Definitely a spot I'll be coming back to.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Shirley Konecny" },
      reviewBody:
        "Best burgers in town. Being fussy, I only like a burger made of real meat. Never disappointed — always happy with how friendly and willing they are to accommodate my dietary preferences. I recommend this restaurant to anyone asking where I'd eat.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Katie W." },
      reviewBody:
        "I don't live in town anymore but every time I come to visit family, I always stop at Chatham Burger to get a Greek salad. Without a doubt, it's one of the best Greek salads I've ever had and it's always so filling. The people here really care about their customers.",
    },
  ],
};

export default function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' })

  return (
    <section style={{ background: '#0d0d0d' }} className="py-24">
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
              color: '#E85D04',
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
              color: '#ffffff',
            }}
          >
            THE <span style={{ color: '#F5C518' }}>VERDICT</span>
          </h2>
        </ScrollReveal>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} delay={i * 0.1} />
          ))}
        </div>

        {/* Mobile: embla carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {testimonials.map((t, i) => (
              <div key={i} style={{ flex: '0 0 88%' }}>
                <TestimonialCard t={t} delay={0} />
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews badge */}
        <ScrollReveal delay={0.3} className="text-center mt-10">
          <p
            style={{
              fontFamily: 'var(--font-lato), sans-serif',
              color: '#555',
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
            }}
          >
            <a
              href="https://g.page/r/chathamburgers"
              target="_blank"
              rel="noopener"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              4.8 stars · 180+ reviews on Google
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
