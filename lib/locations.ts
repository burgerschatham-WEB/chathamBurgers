/**
 * Store locations. Every franchise location is one entry here; pages read
 * from this list instead of hard-coding an address, phone or hours.
 */

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6 // 0 = Sunday

export interface DayHours {
  /** 24h "HH:MM" in the store's time zone */
  opens: string
  closes: string
}

export interface Location {
  slug: string
  name: string
  street: string
  city: string
  region: string
  postalCode: string
  phone: string
  phoneDisplay: string
  timeZone: string
  /** Missing day = closed that day */
  hours: Partial<Record<Weekday, DayHours>>
  orderUrl: string
  mapsUrl: string
}

const weeknight: DayHours = { opens: '11:00', closes: '20:00' }
const weekend: DayHours = { opens: '11:00', closes: '21:00' }

export const locations: Location[] = [
  {
    slug: 'chatham',
    name: 'Chatham',
    street: '215 Grand Ave W',
    city: 'Chatham',
    region: 'ON',
    postalCode: 'N7L 1C3',
    phone: '+15193541414',
    phoneDisplay: '(519) 354-1414',
    timeZone: 'America/Toronto',
    hours: { 0: weeknight, 1: weeknight, 2: weeknight, 3: weeknight, 4: weeknight, 5: weekend, 6: weekend },
    orderUrl: 'https://order.toasttab.com/online/chathamburgers',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=215+Grand+Ave+W+Chatham+ON',
  },
]

export const flagship = locations[0]

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const

export function dayName(day: Weekday): string {
  return DAY_NAMES[day]
}

/** "20:00" → "8 pm", "11:30" → "11:30 am" */
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number)
  const suffix = h >= 12 ? 'pm' : 'am'
  const hour = h % 12 === 0 ? 12 : h % 12
  return m === 0 ? `${hour} ${suffix}` : `${hour}:${String(m).padStart(2, '0')} ${suffix}`
}

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

/** Current weekday and minutes-since-midnight in the store's own time zone. */
function storeClock(location: Location, now: Date): { day: Weekday; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: location.timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday')) as Weekday
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) }
}

export type OpenStatus =
  | { open: true; closesAt: string }
  | { open: false; opensAt: string; opensDay: 'today' | 'tomorrow' | string }

export function getOpenStatus(location: Location, now: Date = new Date()): OpenStatus {
  const { day, minutes } = storeClock(location, now)
  const today = location.hours[day]

  if (today && minutes >= toMinutes(today.opens) && minutes < toMinutes(today.closes)) {
    return { open: true, closesAt: formatTime(today.closes) }
  }
  if (today && minutes < toMinutes(today.opens)) {
    return { open: false, opensAt: formatTime(today.opens), opensDay: 'today' }
  }
  for (let offset = 1; offset <= 7; offset++) {
    const next = ((day + offset) % 7) as Weekday
    const hours = location.hours[next]
    if (hours) {
      return { open: false, opensAt: formatTime(hours.opens), opensDay: offset === 1 ? 'tomorrow' : dayName(next) }
    }
  }
  return { open: false, opensAt: '', opensDay: '' }
}
