export const LOCALES = ['en', 'id'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export interface LocaleMeta {
  /** Value for <html lang> and hreflang */
  htmlLang: string
  /** Open Graph locale */
  ogLocale: string
  /** BCP 47 tag for Intl APIs */
  intl: string
  /** URL prefix. Empty for the default locale. */
  pathPrefix: string
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { htmlLang: 'en', ogLocale: 'en_US', intl: 'en-US', pathPrefix: '' },
  id: { htmlLang: 'id', ogLocale: 'id_ID', intl: 'id-ID', pathPrefix: '/id' },
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}
