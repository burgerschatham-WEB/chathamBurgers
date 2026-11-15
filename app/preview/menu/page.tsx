import type { Metadata } from 'next'
import { menuCategories } from '@/lib/menuData'
import { flagship } from '@/lib/locations'
import MenuNav from '@/components/v2/MenuNav'
import OpenStatus from '@/components/v2/OpenStatus'

export const metadata: Metadata = {
  title: 'Menu — Chatham Burgers v2 preview',
  robots: { index: false, follow: false },
}

export default function PreviewMenu() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-10 sm:px-8 md:pt-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="font-display text-[clamp(2.75rem,6.4vw,4.6rem)] leading-[0.95] font-bold tracking-[-0.035em]">
              Menu
            </h1>
            <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-ink-soft">
              Burgers off the flame grill, fresh-cut fries made every day, gyros, poutine and more.
              Prices in CAD.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <OpenStatus location={flagship} />
            <a
              href={flagship.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-press rounded-full bg-ketchup px-7 py-4 font-semibold text-white hover:bg-ketchup-deep"
            >
              Order pickup
            </a>
          </div>
        </div>
      </section>

      <MenuNav categories={menuCategories.map(({ id, title }) => ({ id, title }))} />

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        {menuCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-36 border-b border-line py-12 last:border-b-0 lg:grid lg:grid-cols-[16rem_1fr] lg:gap-12">
            <div className="lg:sticky lg:top-40 lg:self-start">
              <h2 className="font-display text-3xl leading-none font-bold tracking-[-0.02em]">{cat.title}</h2>
              <p className="mt-2 text-sm text-ink-soft">{cat.items.length} items</p>
              {cat.note && <p className="mt-4 max-w-sm text-[15px] leading-snug text-ink-soft">{cat.note}</p>}
            </div>

            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:mt-0">
              {cat.items.map((item, i) => (
                <li key={`${item.name}-${i}`} className="flex items-baseline justify-between gap-4 border-t border-line py-4">
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-center gap-2 font-semibold">
                      {item.name}
                      {item.badge && (
                        <span className="rounded-full bg-mustard px-2 py-0.5 text-xs font-semibold text-ink">{item.badge}</span>
                      )}
                    </p>
                    {item.description && (
                      <p className="mt-1 text-[15px] leading-snug text-ink-soft">{item.description}</p>
                    )}
                  </div>
                  <p className="shrink-0 font-display text-lg font-semibold tabular-nums">{item.price}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="mt-6 flex flex-col items-center gap-5 rounded-[28px] bg-paper-deep px-6 py-14 text-center">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-none font-bold tracking-[-0.02em]">
            Know what you want?
          </h2>
          <p className="text-ink-soft">Order online and pick it up at {flagship.street}.</p>
          <a
            href={flagship.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-press rounded-full bg-ketchup px-7 py-4 font-semibold text-white hover:bg-ketchup-deep"
          >
            Order pickup
          </a>
        </div>
      </div>
    </>
  )
}
