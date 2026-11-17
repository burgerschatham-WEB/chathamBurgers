import Image from 'next/image'
import { images } from '@/lib/images'

const facts = [
  { title: 'Open flame', body: 'Every burger goes on the flame grill, so you get real grill marks.' },
  { title: 'Fresh-cut fries', body: 'Cut every day. Small, large or family size.' },
  { title: 'Since 1985', body: '40 years on Grand Ave W, thanks to Chatham.' },
]

export default function Story() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-paper-deep lg:order-2">
        <Image
          src={images.ctaBg}
          alt="A double smash burger with bacon beside a milkshake"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-none font-bold tracking-[-0.03em] text-balance">
          A burger joint, not a burger chain
        </h2>
        <p className="mt-5 max-w-[32rem] text-lg leading-relaxed text-pretty text-ink-soft">
          Nothing fancy, nothing rushed. A flame grill, a menu of burgers, gyros and poutine,
          and a counter on Grand Ave W that&apos;s been open since 1985.
        </p>
        <dl className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {facts.map((f) => (
            <div key={f.title} className="border-t border-ink pt-4">
              <dt className="font-display text-lg font-semibold">{f.title}</dt>
              <dd className="mt-1 text-[15px] leading-snug text-ink-soft">{f.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
