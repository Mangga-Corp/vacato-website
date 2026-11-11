import type { Locale } from '../i18n/locales'

export function badgeSource(locale: Locale): string {
  return `/badges/app-store-badge-${locale}.svg`
}
