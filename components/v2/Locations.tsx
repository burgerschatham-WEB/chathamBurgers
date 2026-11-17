import Link from 'next/link'
import { ArrowRight, MapPinPlus, Navigation, Phone } from 'lucide-react'
import { dayName, formatTime, locations, type Weekday } from '@/lib/locations'
import OpenStatus from './OpenStatus'

const WEEK: Weekday[] = [1, 2, 3, 4, 5, 6, 0]

export default function Locations() {
  return (
    <section id="locations" className="scroll-mt-20 border-t border-line py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-none font-bold tracking-[-0.03em]">
          Find us
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {locations.map((loc) => (
            <article key={loc.slug} className="rounded-[24px] bg-white p-6 ring-1 ring-line sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{loc.name}</h3>
                  <p className="mt-1 text-ink-soft">
                    {loc.street}, {loc.city}, {loc.region} {loc.postalCode}
                  </p>
                </div>
                <OpenStatus location={loc} />
              </div>

              <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-[15px]">
                {WEEK.map((d) => {
                  const h = loc.hours[d]
                  return (
                    <div key={d} className="contents">
                      <dt className="text-ink-soft">{dayName(d)}</dt>
                      <dd className="tabular-nums">{h ? `${formatTime(h.opens)} – ${formatTime(h.closes)}` : 'Closed'}</dd>
                    </div>
                  )
                })}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={loc.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-press rounded-full bg-ketchup px-5 py-3 font-semibold text-white hover:bg-ketchup-deep"
                >
                  Order pickup
                </a>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-press inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold ring-1 ring-line hover:ring-ink/30"
                >
                  <Navigation size={16} aria-hidden="true" /> Directions
                </a>
                <a
                  href={`tel:${loc.phone}`}
                  className="v2-press inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold ring-1 ring-line hover:ring-ink/30"
                >
                  <Phone size={16} aria-hidden="true" /> {loc.phoneDisplay}
                </a>
              </div>
            </article>
          ))}

          <Link
            href="/#franchise"
            className="v2-press flex min-h-56 flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-ink/20 p-6 text-center hover:border-ink/40 sm:p-8"
          >
            <span className="grid size-14 place-items-center rounded-full bg-mustard text-ink">
              <MapPinPlus size={24} aria-hidden="true" />
            </span>
            <span className="mt-5 text-sm font-semibold tracking-wide text-ink-soft uppercase">Next location</span>
            <span className="mt-2 block font-display text-3xl font-semibold tracking-tight">Your town?</span>
            <span className="mt-2 block max-w-xs text-ink-soft">We&apos;re looking for people to open the next Chatham Burgers.</span>
            <span className="mt-6 inline-flex items-center gap-1.5 font-semibold">
              Learn about franchising <ArrowRight size={18} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
