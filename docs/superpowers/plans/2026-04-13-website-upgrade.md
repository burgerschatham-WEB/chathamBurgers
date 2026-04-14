# Chatham Burgers Website Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the existing Next.js restaurant site into a world-class 2026-feel dark/gold experience with real food photography, Framer Motion animations, a marquee ticker, animated stats, glassmorphism navbar, and polished micro-interactions throughout.

**Architecture:** Each section is a standalone React component — we modify or replace them in isolation so nothing breaks between tasks. Two new components are added (`BrandMarquee`, `StatsStrip`) and one utility (`ScrollReveal`). `lib/images.ts` centralises all Unsplash URLs so they're swapped in one place.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion v12 (already installed), embla-carousel-react (new), react-countup (new), Lucide React, Google Fonts (Bebas Neue / Oswald / Lato)

---

## File Map

| Action | File | What changes |
|--------|------|--------------|
| Create | `lib/images.ts` | Central Unsplash URL registry |
| Create | `components/ScrollReveal.tsx` | Reusable scroll-triggered animation wrapper |
| Create | `components/BrandMarquee.tsx` | Infinite marquee ticker (replaces BrandStrip) |
| Create | `components/StatsStrip.tsx` | "By the Numbers" animated count-up section |
| Modify | `components/HeroSection.tsx` | Full rebuild — photo BG + parallax + eyebrow + stagger words |
| Modify | `components/Navbar.tsx` | True transparent→glassmorphic scroll transition + underline hover links |
| Modify | `components/FeaturedItems.tsx` | Image zoom, gold glow, hover "Order Now" button, larger price |
| Modify | `components/CTABanner.tsx` | Photo BG + rotating headline text every 3s |
| Modify | `components/TestimonialsSection.tsx` | Glassmorphism cards + large quote mark + star animation + embla carousel |
| Modify | `components/LocationSection.tsx` | Open/Closed badge + big phone button + Get Directions button |
| Modify | `components/Footer.tsx` | Gold top border + ghost watermark text + circular social icons + 2026 |
| Modify | `app/page.tsx` | Add StatsStrip, swap BrandStrip → BrandMarquee |
| Modify | `app/globals.css` | Selection colour, scrollbar 4 px, marquee keyframe |

---

## Task 1: Install dependencies + create `lib/images.ts`

**Files:**
- Modify: `package.json` (via npm install)
- Create: `lib/images.ts`

- [ ] **Step 1: Check framer-motion is present, install missing packages**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
cat package.json | grep framer
# expect: "framer-motion": "^12..."
npm install embla-carousel-react react-countup
npm install --save-dev @types/react-countup 2>/dev/null || true
```

Expected output: `added N packages`

- [ ] **Step 2: Create `lib/images.ts`**

```ts
// lib/images.ts
export const images = {
  hero: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80',
  smashBurger: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80',
  bigBurger: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80',
  chathamBurger: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?w=800&q=80',
  fishChips: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=80',
  grill: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1200&q=80',
  restaurant: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80',
  ctaBg: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1600&q=80',
}
```

- [ ] **Step 3: Verify build still passes**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

Expected: `✓ Compiled successfully` (or equivalent with no errors)

- [ ] **Step 4: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add lib/images.ts package.json package-lock.json
git commit -m "feat: add image registry and install embla-carousel + react-countup"
```

---

## Task 2: Create `components/ScrollReveal.tsx`

**Files:**
- Create: `components/ScrollReveal.tsx`

- [ ] **Step 1: Create the component**

```tsx
// components/ScrollReveal.tsx
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

Expected: no TypeScript errors

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add components/ScrollReveal.tsx
git commit -m "feat: add ScrollReveal scroll-triggered animation wrapper"
```

---

## Task 3: Rebuild `components/HeroSection.tsx`

**Files:**
- Modify: `components/HeroSection.tsx`

The current hero has a pure-black gradient background making text nearly invisible. We rebuild it with a real food photo, dark overlay, parallax effect, and per-word staggered headline animation. The `useScroll` + `useTransform` approach requires wrapping the background image `style` with a dynamic `backgroundPositionY`.

- [ ] **Step 1: Replace the entire file**

```tsx
// components/HeroSection.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { images } from '@/lib/images'

const headline1Words = ['CRAFTED', 'ON']
const headline2Words = ['THE', 'FLAME']

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], ['0%', '30%'])
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    const handler = () => setShowScroll(window.scrollY < 100)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const wordVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
    }),
  }

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${images.hero})`,
          y: bgY,
          scale: 1.1,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Bottom radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(232,93,4,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Floating ember particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            width: 3 + i * 2,
            height: 3 + i * 2,
            borderRadius: '50%',
            background: i % 2 === 0 ? '#E85D04' : '#F5C518',
            left: `${15 + i * 14}%`,
            bottom: `${20 + (i % 3) * 10}%`,
            filter: 'blur(1px)',
          }}
          animate={{ y: [-20, -80, -20], opacity: [0.8, 0, 0.8], scale: [1, 0.3, 1] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            letterSpacing: '0.4em',
            color: 'rgba(245,197,24,0.8)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          SINCE 1985 · CHATHAM, ONTARIO
        </motion.p>

        {/* Line 1 */}
        <div
          className="flex justify-center gap-4 flex-wrap"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            letterSpacing: '0.06em',
            fontSize: 'clamp(4rem, 13vw, 10rem)',
            lineHeight: 1,
            color: '#ffffff',
            textShadow: '0 4px 40px rgba(0,0,0,0.8)',
          }}
        >
          {headline1Words.map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              variants={wordVariant}
              initial="hidden"
              animate="visible"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Line 2 */}
        <div
          className="flex justify-center gap-4 flex-wrap"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            letterSpacing: '0.06em',
            fontSize: 'clamp(4rem, 13vw, 10rem)',
            lineHeight: 1,
            color: '#F5C518',
            textShadow: '0 4px 40px rgba(0,0,0,0.8)',
            marginBottom: '24px',
          }}
        >
          {headline2Words.map((word, i) => (
            <motion.span
              key={word}
              custom={i + headline1Words.length}
              variants={wordVariant}
              initial="hidden"
              animate="visible"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.7)',
            fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
            textTransform: 'uppercase',
            marginBottom: '40px',
          }}
        >
          Charcoal Grilled · Family Built
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://order.online/store/chatham-burgers-grand-ave-w-25072946"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245,197,24,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.12em',
              fontSize: '1.15rem',
              background: '#F5C518',
              color: '#0a0a0a',
              padding: '16px 44px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Order Online
          </motion.a>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/menu"
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                letterSpacing: '0.12em',
                fontSize: '1.15rem',
                background: 'transparent',
                color: '#ffffff',
                padding: '14px 44px',
                borderRadius: '4px',
                border: '2px solid rgba(255,255,255,0.45)',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              className="hover:border-yellow-400 hover:bg-yellow-400/10 transition-all"
            >
              View Menu
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScroll ? 1 : 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} style={{ color: '#F5C518', opacity: 0.8 }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add components/HeroSection.tsx
git commit -m "feat: rebuild hero with food photo background, parallax, and staggered word animation"
```

---

## Task 4: Upgrade `components/Navbar.tsx` — glassmorphism

**Files:**
- Modify: `components/Navbar.tsx`

Current: solid `rgba(10,10,10,0.85→0.97)` always applied. Target: fully transparent at top, `bg-black/80 backdrop-blur-xl border-b border-white/10` after 50px scroll. Also add CSS underline slide on desktop links.

- [ ] **Step 1: Replace the header element's inline style with className-based transitions**

Change the `<header>` element from using the `style` prop to using a `className` that switches based on `scrolled`. Change the scroll threshold from `20` to `50`. Also update each desktop nav `Link` to add the underline pseudo-element via Tailwind.

The full updated file:

```tsx
// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Flame } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/order', label: 'Order' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Flame
              size={24}
              className="transition-transform group-hover:scale-110"
              style={{ color: '#E85D04' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                letterSpacing: '0.1em',
                fontSize: '1.5rem',
                color: '#F5C518',
              }}
            >
              Chatham Burgers
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  letterSpacing: '0.08em',
                  fontSize: '0.9rem',
                  color: pathname === link.href ? '#F5C518' : '#cccccc',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  position: 'relative',
                }}
                className={`
                  transition-colors hover:text-white
                  after:absolute after:bottom-0 after:left-0
                  after:h-[2px] after:bg-yellow-400
                  after:transition-all after:duration-300
                  ${pathname === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/order"
              style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.08em',
                fontSize: '0.9rem',
                background: '#F5C518',
                color: '#0a0a0a',
                padding: '8px 20px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '700',
              }}
              className="hover:bg-yellow-300 transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: '#F5C518' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
              style={{ background: '#141414', borderLeft: '1px solid #2a2a2a' }}
            >
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: '#2a2a2a' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    letterSpacing: '0.1em',
                    fontSize: '1.3rem',
                    color: '#F5C518',
                  }}
                >
                  Chatham Burgers
                </span>
                <button onClick={() => setIsOpen(false)} style={{ color: '#cccccc' }}>
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-oswald), sans-serif',
                      letterSpacing: '0.1em',
                      fontSize: '1.2rem',
                      color: pathname === link.href ? '#F5C518' : '#ffffff',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/order"
                  style={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    letterSpacing: '0.08em',
                    fontSize: '1rem',
                    background: '#F5C518',
                    color: '#0a0a0a',
                    padding: '12px 20px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    textAlign: 'center',
                  }}
                >
                  Order Now
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add components/Navbar.tsx
git commit -m "feat: navbar glassmorphism on scroll + underline slide on desktop links"
```

---

## Task 5: Add `globals.css` keyframe + selection colour + scrollbar tweak

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add marquee keyframe, selection colour, and update scrollbar width**

Append to the bottom of `app/globals.css`:

```css
/* Text selection */
::selection {
  background: #F5C518;
  color: #000000;
}

/* Marquee animation */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 22s linear infinite;
  will-change: transform;
}
```

Also update the existing scrollbar from 6px to 4px:

Find: `::-webkit-scrollbar { width: 6px; }`
Replace with: `::-webkit-scrollbar { width: 4px; }`

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add app/globals.css
git commit -m "style: add marquee keyframe, selection colour, 4px scrollbar"
```

---

## Task 6: Create `components/BrandMarquee.tsx`

**Files:**
- Create: `components/BrandMarquee.tsx`

This replaces the 4-card BrandStrip with an infinite scrolling ticker. Uses a pure-CSS animation defined in Task 5. The items array is doubled so the translateX(-50%) loop is seamless.

- [ ] **Step 1: Create the component**

```tsx
// components/BrandMarquee.tsx
'use client'

const items = [
  '🔥 Real Charcoal Grilled',
  '⭐ Family-Owned Since 1985',
  '📍 Chatham, Ontario',
  '🍟 Fresh-Cut Fries Daily',
  '🏆 40 Years Strong',
  '🔥 Real Charcoal Grilled',
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
        background: '#F5C518',
        borderColor: '#d4a900',
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
            <span style={{ color: '#d4a900', marginLeft: '16px' }}>•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add components/BrandMarquee.tsx
git commit -m "feat: add infinite marquee ticker component"
```

---

## Task 7: Upgrade `components/FeaturedItems.tsx`

**Files:**
- Modify: `components/FeaturedItems.tsx`

Add: image hover zoom, stronger gold glow on hover, larger gold price, "Order Now" button that slides in on card hover, and the improved Unsplash images from `lib/images.ts`.

- [ ] **Step 1: Replace the entire file**

```tsx
// components/FeaturedItems.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add components/FeaturedItems.tsx
git commit -m "feat: featured cards with image zoom, gold glow, and hover order CTA"
```

---

## Task 8: Create `components/StatsStrip.tsx`

**Files:**
- Create: `components/StatsStrip.tsx`

Animated count-up numbers using `react-countup` + `useInView` to trigger only when visible.

- [ ] **Step 1: Create the component**

```tsx
// components/StatsStrip.tsx
'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { ScrollReveal } from './ScrollReveal'

const stats = [
  { number: 40,   suffix: '+', label: 'Years of Flame' },
  { number: 1985, suffix: '',  label: 'Est. in Chatham' },
  { number: 15,   suffix: '+', label: 'Burgers on the Menu' },
  { number: 1,    suffix: '',  label: 'Family Behind It All' },
]

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: '#0d0d0d',
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
              <div
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.04em',
                  fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                  color: '#F5C518',
                  lineHeight: 1,
                }}
              >
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={stat.number > 100 ? 2.5 : 1.8}
                    separator=","
                    useEasing
                  />
                ) : (
                  0
                )}
                {stat.suffix}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  letterSpacing: '0.1em',
                  color: '#888',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  marginTop: '8px',
                }}
              >
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add components/StatsStrip.tsx
git commit -m "feat: add StatsStrip with animated count-up numbers"
```

---

## Task 9: Upgrade `components/CTABanner.tsx`

**Files:**
- Modify: `components/CTABanner.tsx`

Replace the flat gradient with a food photo background + dark overlay. Add rotating headline text that cycles every 3 seconds with a fade transition.

- [ ] **Step 1: Replace the entire file**

```tsx
// components/CTABanner.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { images } from '@/lib/images'

const rotatingLines = ['Hungry?', 'Ready to Order?', 'Craving Something?']

export default function CTABanner() {
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % rotatingLines.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${images.ctaBg})` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(90,50,0,0.85) 0%, rgba(10,10,10,0.80) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div>
            {/* Animated rotating headline */}
            <div
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                letterSpacing: '0.08em',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#ffffff',
                lineHeight: 1.1,
                minHeight: '1.2em',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={lineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'block' }}
                >
                  {rotatingLines[lineIndex]}{' '}
                  <span style={{ color: '#F5C518' }}>Order Online Now</span>
                </motion.span>
              </AnimatePresence>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-lato), sans-serif',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.95rem',
                marginTop: '8px',
              }}
            >
              Fresh, hot, and ready for pickup. Charcoal grilled since 1985.
            </p>
          </div>

          <motion.a
            href="https://order.online/store/chatham-burgers-grand-ave-w-25072946"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 whitespace-nowrap"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(245,197,24,0.5)',
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.12em',
              fontSize: '1.2rem',
              background: '#F5C518',
              color: '#0a0a0a',
              padding: '18px 40px',
              borderRadius: '100px',
              textDecoration: 'none',
              boxShadow: '0 0 30px rgba(245,197,24,0.35)',
            }}
          >
            Order Now
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add components/CTABanner.tsx
git commit -m "feat: CTA banner with photo background and rotating animated headline"
```

---

## Task 10: Upgrade `components/TestimonialsSection.tsx`

**Files:**
- Modify: `components/TestimonialsSection.tsx`

Glassmorphism cards, large decorative gold quote mark, animated stars on scroll, embla carousel on mobile.

- [ ] **Step 1: Replace the entire file**

```tsx
// components/TestimonialsSection.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ScrollReveal } from './ScrollReveal'

const testimonials = [
  {
    quote: "Best burgers in Chatham, hands down. I've been coming here since I was a kid. The charcoal flavour is unlike anything else.",
    author: 'Sarah M.',
    stars: 5,
  },
  {
    quote: 'The Dbl Smash Burger is absolutely incredible. Juicy, perfectly seasoned, and those fresh-cut fries are something else.',
    author: 'Mike T.',
    stars: 5,
  },
  {
    quote: 'Family-owned and it shows. They treat every customer like a regular. The food is consistently amazing, every single visit.',
    author: 'Jennifer K.',
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

export default function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' })

  return (
    <section style={{ background: '#0d0d0d' }} className="py-24">
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
            Based on Google Reviews ★★★★★
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add components/TestimonialsSection.tsx
git commit -m "feat: testimonials glassmorphism cards, animated stars, embla mobile carousel"
```

---

## Task 11: Upgrade `components/LocationSection.tsx`

**Files:**
- Modify: `components/LocationSection.tsx`

Add dynamic Open/Closed badge, large clickable phone button, and styled Get Directions button. Info panel gets a gold top-border card. Map takes full left half on desktop.

- [ ] **Step 1: Replace the entire file**

```tsx
// components/LocationSection.tsx
'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const hours = [
  { days: [1, 2, 3, 4],    open: 10, close: 20, label: 'Monday – Thursday', display: '10 a.m. – 8 p.m.' },
  { days: [5, 6],           open: 10, close: 21, label: 'Friday – Saturday',  display: '10 a.m. – 9 p.m.' },
  { days: [0],              open: 11, close: 20, label: 'Sunday',             display: '11 a.m. – 8 p.m.' },
]

function getOpenStatus() {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60
  const row = hours.find((h) => h.days.includes(day))
  if (!row) return { isOpen: false, label: 'Closed Today' }
  return hour >= row.open && hour < row.close
    ? { isOpen: true,  label: 'Open Now' }
    : { isOpen: false, label: 'Currently Closed' }
}

export default function LocationSection() {
  const status = getOpenStatus()

  return (
    <section style={{ background: '#0a0a0a' }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
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
            Come Find Us
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              letterSpacing: '0.05em',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#ffffff',
            }}
          >
            WE&apos;RE IN{' '}
            <span style={{ color: '#F5C518' }}>CHATHAM, ON</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
          {/* Map — 3/5 width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
            style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #2a2a2a', minHeight: 380 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=215+Grand+Ave+W,+Chatham,+ON+N7L+1C3&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chatham Burgers Location"
            />
          </motion.div>

          {/* Info panel — 2/5 width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-0"
            style={{
              background: '#141414',
              borderTop: '4px solid #F5C518',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Open/Closed badge */}
            <div className="mb-6">
              <span
                style={{
                  display: 'inline-block',
                  background: status.isOpen ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
                  color: status.isOpen ? '#4ade80' : '#f87171',
                  border: `1px solid ${status.isOpen ? 'rgba(34,197,94,0.4)' : 'rgba(239,68,68,0.4)'}`,
                  borderRadius: '100px',
                  padding: '4px 14px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-oswald), sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {status.isOpen ? '● ' : '○ '}{status.label}
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={20} style={{ color: '#E85D04', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    color: '#fff',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '4px',
                  }}
                >
                  Location
                </p>
                <p style={{ color: '#ccc', fontSize: '0.9rem', fontFamily: 'var(--font-lato)', lineHeight: 1.5 }}>
                  215 Grand Ave W<br />Chatham, ON N7L 1C3
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 mb-8">
              <Clock size={20} style={{ color: '#E85D04', flexShrink: 0, marginTop: 2 }} />
              <div className="w-full">
                <p
                  style={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    color: '#fff',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px',
                  }}
                >
                  Hours
                </p>
                {hours.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 mb-2">
                    <span style={{ color: '#888', fontSize: '0.85rem', fontFamily: 'var(--font-lato)' }}>
                      {row.label}
                    </span>
                    <span style={{ color: '#ccc', fontSize: '0.85rem', fontFamily: 'var(--font-lato)' }}>
                      {row.display}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone button */}
            <a
              href="tel:+15193541414"
              className="flex items-center justify-center gap-3 rounded-xl font-bold text-lg transition-colors hover:bg-yellow-300 mb-3"
              style={{
                background: '#F5C518',
                color: '#0a0a0a',
                padding: '16px 24px',
                textDecoration: 'none',
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.05em',
                fontSize: '1.1rem',
              }}
            >
              <Phone size={20} />
              (519) 354-1414
            </a>

            {/* Directions button */}
            <a
              href="https://maps.google.com/?q=215+Grand+Ave+W,+Chatham,+ON+N7L+1C3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl transition-all hover:border-yellow-400 hover:text-yellow-400"
              style={{
                border: '1px solid #3a3a3a',
                color: '#ccc',
                padding: '12px 24px',
                textDecoration: 'none',
                fontFamily: 'var(--font-oswald), sans-serif',
                letterSpacing: '0.05em',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
              }}
            >
              <ExternalLink size={16} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add components/LocationSection.tsx
git commit -m "feat: location section with Open/Closed badge, phone button, directions"
```

---

## Task 12: Upgrade `components/Footer.tsx`

**Files:**
- Modify: `components/Footer.tsx`

Add gold top border, ghost watermark text, circular social icon, update copyright to 2026.

- [ ] **Step 1: Replace the entire file**

```tsx
// components/Footer.tsx
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
              Charcoal grilled. Family built. Serving Chatham, Ontario since 1985.
              Real charcoal, fresh-cut fries, and recipes that haven&apos;t changed in 40 years.
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
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add components/Footer.tsx
git commit -m "feat: footer gold top border, ghost watermark, circular social icon, 2026 copyright"
```

---

## Task 13: Wire everything together in `app/page.tsx`

**Files:**
- Modify: `app/page.tsx`

Swap `BrandStrip` for `BrandMarquee`, add `StatsStrip` between `FeaturedItems` and `TestimonialsSection`.

- [ ] **Step 1: Replace the file**

```tsx
// app/page.tsx
import HeroSection from '@/components/HeroSection'
import BrandMarquee from '@/components/BrandMarquee'
import FeaturedItems from '@/components/FeaturedItems'
import StatsStrip from '@/components/StatsStrip'
import CTABanner from '@/components/CTABanner'
import TestimonialsSection from '@/components/TestimonialsSection'
import LocationSection from '@/components/LocationSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <FeaturedItems />
      <StatsStrip />
      <CTABanner />
      <TestimonialsSection />
      <LocationSection />
    </>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run build
```

Expected: clean build, no unused import warnings

- [ ] **Step 3: Commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add app/page.tsx
git commit -m "feat: wire BrandMarquee + StatsStrip into homepage"
```

---

## Task 14: Final verification

- [ ] **Step 1: Full build + lint**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
npm run build && npm run lint
```

Expected: no errors, no warnings about missing modules

- [ ] **Step 2: Start dev server and visual check**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app && npm run dev
```

Open http://localhost:3000 and verify:
- Hero shows food photo with dark overlay — headline clearly visible
- Navbar is transparent at top, glassmorphic after scrolling down
- Gold marquee ticker scrolls infinitely below hero
- Featured cards show images, zoom on hover, "ORDER NOW →" appears on hover
- Stats numbers count up when scrolled into view
- CTA banner has photo background, rotating headline text
- Testimonials are glassmorphic cards; mobile shows carousel swipe
- Location panel shows Open/Closed badge dynamically, phone button is gold
- Footer has thick gold top border, ghost watermark behind content

- [ ] **Step 3: Final commit**

```bash
cd C:\Users\ankit\Documents\chatham-burgers-app
git add -A
git commit -m "chore: 2026 website upgrade complete"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Covered by |
|-----------------|------------|
| Hero — food photo + dark overlay + parallax | Task 3 |
| Hero — eyebrow, split headline, per-word stagger | Task 3 |
| Hero — two buttons + scroll chevron | Task 3 |
| ScrollReveal wrapper | Task 2, used in Tasks 7–12 |
| Glassmorphism navbar on scroll | Task 4 |
| Link underline slide on hover | Task 4 |
| BrandStrip → marquee ticker | Tasks 5+6 |
| Featured cards — image zoom on hover | Task 7 |
| Featured cards — gold glow + border highlight | Task 7 |
| Featured cards — badge pulse | Task 7 |
| Featured cards — "Order Now" on hover | Task 7 |
| Featured cards — larger gold price | Task 7 |
| Stats Strip (new section) | Task 8 |
| CTA banner — photo background | Task 9 |
| CTA banner — rotating headline | Task 9 |
| CTA banner — rounded pill button + glow | Task 9 |
| Testimonials — glassmorphism cards | Task 10 |
| Testimonials — large gold quote mark | Task 10 |
| Testimonials — animated stars | Task 10 |
| Testimonials — embla carousel mobile | Task 10 |
| Location — Open/Closed badge | Task 11 |
| Location — big phone button | Task 11 |
| Location — Get Directions button | Task 11 |
| Location — gold top-border info panel | Task 11 |
| Footer — gold top border | Task 12 |
| Footer — ghost watermark text | Task 12 |
| Footer — circular social icons | Task 12 |
| Footer — 2026 copyright | Task 12 |
| globals.css — selection colour | Task 5 |
| globals.css — 4px scrollbar | Task 5 |
| globals.css — smooth scroll (already present) | ✓ existing |
| `lib/images.ts` — central image registry | Task 1 |

**Placeholder scan:** None found — every task has complete code blocks and exact commands.

**Type consistency:** `ScrollReveal` props match usage in all consumer components. `images` keys match all references in HeroSection, FeaturedItems, CTABanner. `hours` structure in LocationSection is self-contained.

**Packages not yet installed:** `embla-carousel-react` and `react-countup` — covered in Task 1.
