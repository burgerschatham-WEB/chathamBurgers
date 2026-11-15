import { flagship } from '@/lib/locations'

export default function Franchise() {
  return (
    <section id="franchise" className="scroll-mt-20 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto max-w-[78rem] rounded-[32px] bg-ink px-6 py-16 text-paper sm:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-mustard px-3 py-1 text-sm font-semibold text-ink">Franchising</p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[0.95] font-bold tracking-[-0.035em] text-balance">
            Bring Chatham Burgers to your town
          </h2>
          <p className="mx-auto mt-6 max-w-[36rem] text-lg leading-relaxed text-pretty text-paper/70">
            Forty years of flame-grilled burgers in Chatham. Now we&apos;re looking for operators
            who want to run a neighbourhood grill of their own.
          </p>
          <a
            href={`tel:${flagship.phone}`}
            className="v2-press mt-10 inline-flex rounded-full bg-paper px-7 py-4 font-semibold text-ink hover:bg-white"
          >
            Talk to us · {flagship.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
