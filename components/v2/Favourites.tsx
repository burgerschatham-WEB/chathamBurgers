import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredItems } from '@/lib/menuData'
import { images } from '@/lib/images'
import { flagship } from '@/lib/locations'

const photos: Record<string, { src: string; alt: string }> = {
  'Dbl Smash Burger': { src: images.smashBurger, alt: 'Dbl Smash Burger: two smashed beef patties with cheese and pickle' },
  '1 LB Burger': { src: images.bigBurger, alt: 'Illustrative photo: a tall cheeseburger with bacon on a plain bun' },
  'Chatham Burger': { src: images.chathamBurger, alt: 'Illustrative photo: a single-patty burger with lettuce, tomato and red onion' },
  'Fish & Chips': { src: images.fishChips, alt: 'Battered fish on fresh-cut fries in a takeout container' },
}

const blurbs: Record<string, string> = {
  'Dbl Smash Burger': 'Two patties smashed with onion and seasoning, then cheese.',
  '1 LB Burger': 'A full pound off the flame grill. Bring an appetite.',
  'Chatham Burger': 'Half a pound, standard toppings. The one people ask for by name.',
  'Fish & Chips': 'Crispy haddock with fresh-cut fries, cut every day.',
}

export default function Favourites() {
  return (
    <section className="border-t border-line bg-paper-deep/60 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-none font-bold tracking-[-0.03em] text-balance">
            The ones people drive in for
          </h2>
          <Link
            href="/preview/menu"
            className="v2-press hidden shrink-0 items-center gap-1.5 rounded-full px-4 py-2 font-semibold text-ink hover:bg-ink/5 sm:inline-flex"
          >
            Full menu <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* Swipeable row on phones, 4-up grid on desktop */}
        <ul className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 lg:gap-5">
          {featuredItems.map((item) => {
            const photo = photos[item.name]
            return (
              <li key={item.name} className="v2-card flex w-[78%] shrink-0 snap-start flex-col sm:w-auto">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-deep">
                  {photo && (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
                      className="v2-card-img object-cover"
                    />
                  )}
                  {item.badge && (
                    <span className="absolute top-3 left-3 rounded-full bg-mustard px-2.5 py-1 text-xs font-semibold text-ink">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col pt-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl leading-tight font-semibold tracking-tight">{item.name}</h3>
                    <span className="font-display text-lg font-semibold tabular-nums">{item.price}</span>
                  </div>
                  <p className="mt-1.5 flex-1 text-[15px] leading-snug text-ink-soft">{blurbs[item.name] ?? item.description}</p>
                  <a
                    href={flagship.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v2-press mt-4 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-line hover:ring-ink/30"
                  >
                    Order this
                  </a>
                </div>
              </li>
            )
          })}
        </ul>

        <Link href="/preview/menu" className="v2-press mt-8 inline-flex items-center gap-1.5 font-semibold sm:hidden">
          Full menu <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
