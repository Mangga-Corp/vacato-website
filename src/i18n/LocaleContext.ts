import { createContext } from 'react'
import type { Content } from '../content/types'
import type { Locale } from './locales'

export interface LocaleContextValue {
  locale: Locale
  t: Content
  setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
