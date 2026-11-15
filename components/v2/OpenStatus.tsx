'use client'

import { useSyncExternalStore } from 'react'
import { getOpenStatus, type Location, type OpenStatus as Status } from '@/lib/locations'

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 30_000)
  return () => clearInterval(id)
}

function label(status: Status): string {
  if (status.open) return `Open now · until ${status.closesAt}`
  if (!status.opensAt) return 'Closed'
  return `Closed · opens ${status.opensDay === 'today' ? '' : status.opensDay + ' '}${status.opensAt}`
}

/** Live open/closed pill. Rendered on the client only so it uses the visitor's real clock. */
export default function OpenStatus({ location, tone = 'light' }: { location: Location; tone?: 'light' | 'dark' }) {
  // Snapshot is a string so React can compare it by value between ticks.
  const snapshot = useSyncExternalStore(
    subscribe,
    () => JSON.stringify(getOpenStatus(location)),
    () => '',
  )
  const status: Status | null = snapshot ? JSON.parse(snapshot) : null

  const base =
    tone === 'dark'
      ? 'bg-white/10 text-white/90'
      : 'bg-white text-ink-soft shadow-[0_1px_0_rgb(30_25_21/0.06)] ring-1 ring-line'

  return (
    <span
      className={`inline-flex h-8 min-w-[12rem] items-center gap-2 rounded-full px-3.5 text-sm font-medium ${base}`}
      aria-live="polite"
    >
      <span
        aria-hidden="true"
        className={`size-2 rounded-full ${status ? (status.open ? 'bg-open' : 'bg-ketchup') : 'bg-current opacity-30'}`}
      />
      {status ? label(status) : 'Checking hours…'}
    </span>
  )
}
