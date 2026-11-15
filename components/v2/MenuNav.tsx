'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  categories: { id: string; title: string }[]
}

/** Sticky category chips. Highlights the section in view and keeps that chip visible in the row. */
export default function MenuNav({ categories }: Props) {
  const [active, setActive] = useState(categories[0]?.id)
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    categories.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [categories])

  // Scroll the chip row only (never the page) so the active chip stays on screen.
  useEffect(() => {
    const row = rowRef.current
    const chip = row?.querySelector<HTMLElement>(`[data-id="${active}"]`)
    if (!row || !chip) return
    const left = chip.offsetLeft - row.clientWidth / 2 + chip.clientWidth / 2
    row.scrollTo({ left, behavior: 'smooth' })
  }, [active])

  return (
    <div className="sticky top-16 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
      <nav
        ref={rowRef}
        aria-label="Menu sections"
        className="mx-auto flex max-w-6xl gap-1.5 overflow-x-auto px-5 py-3 [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)] [scrollbar-width:none] sm:px-8"
      >
        {categories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            data-id={c.id}
            aria-current={active === c.id ? 'true' : undefined}
            className="v2-press shrink-0 rounded-full px-4 py-2 text-[15px] font-medium whitespace-nowrap text-ink-soft ring-1 ring-line hover:text-ink aria-[current=true]:bg-ink aria-[current=true]:text-paper aria-[current=true]:ring-ink"
          >
            {c.title}
          </a>
        ))}
      </nav>
    </div>
  )
}
