import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { images } from '@/lib/images'
import { flagship } from '@/lib/locations'
import OpenStatus from './OpenStatus'

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-10 pb-16 sm:px-8 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24">
      <div>
        <div className="v2-rise">
          <OpenStatus location={flagship} />
        </div>

        <h1
          className="v2-rise mt-6 font-display text-[clamp(2.75rem,6.4vw,4.6rem)] leading-[0.95] font-bold tracking-[-0.035em] text-balance text-ink"
          style={{ animationDelay: '40ms' }}
        >
          Flame-grilled burgers, served since&nbsp;1985.
        </h1>

        <p
          className="v2-rise mt-6 max-w-[34rem] text-lg leading-relaxed text-pretty text-ink-soft"
          style={{ animationDelay: '80ms' }}
        >
          Burgers off an open flame, fresh-cut fries made every day, plus gyros, poutine and fish &amp; chips.
          Thanks, Chatham, for keeping the grill going for 40 years.
        </p>

        <div className="v2-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '110ms' }}>
          <a
            href={flagship.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-press rounded-full bg-ketchup px-7 py-4 text-base font-semibold text-white hover:bg-ketchup-deep"
          >
            Order pickup
          </a>
          <Link
            href="/preview/menu"
            className="v2-press rounded-full bg-white px-7 py-4 text-base font-semibold text-ink ring-1 ring-line hover:ring-ink/30"
          >
            See the menu
          </Link>
        </div>

        <a
          href={flagship.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="v2-rise mt-8 inline-flex items-center gap-2 text-[15px] text-ink-soft underline-offset-4 hover:text-ink hover:underline"
          style={{ animationDelay: '140ms' }}
        >
          <MapPin size={16} aria-hidden="true" />
          {flagship.street}, {flagship.city}
        </a>
      </div>

      <div className="v2-rise relative" style={{ animationDelay: '60ms' }}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-paper-deep sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={images.hero}
            alt="A beef patty searing on the flame grill"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl bg-paper/95 p-4 shadow-[0_8px_30px_rgb(30_25_21/0.18)] backdrop-blur sm:right-auto sm:min-w-[19rem]">
          <div>
            <p className="font-display text-lg leading-tight font-semibold">The Chatham Burger</p>
            <p className="text-sm text-ink-soft">½ lb, flame-grilled. The local legend.</p>
          </div>
          <p className="font-display text-xl font-semibold tabular-nums">$11</p>
        </div>
      </div>
    </section>
  )
}
