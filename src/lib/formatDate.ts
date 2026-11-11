import { LOCALE_META, type Locale } from '../i18n/locales'

/** Formats an ISO date (YYYY-MM-DD) in the given locale, timezone-independent. */
export function formatDate(isoDate: string, locale: Locale): string {
  const date = new Date(`${isoDate}T00:00:00Z`)
  return new Intl.DateTimeFormat(LOCALE_META[locale].intl, {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(date)
}
