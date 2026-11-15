import { Bricolage_Grotesque, Inter } from 'next/font/google'

const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

/** Apply on the v2 page wrapper and on anything portalled outside it (drawers, toasts). */
export const v2FontVars = `${bricolage.variable} ${inter.variable}`
