import { DEFAULT_LOCALE, type Locale } from '../i18n/locales'

/** Candidate URLs for a screenshot: locale-specific first, then English fallback. */
export function screenshotSources(locale: Locale, file: string): string[] {
  const localized = `/images/screenshots/${locale}/${file}`
  const fallback = `/images/screenshots/${DEFAULT_LOCALE}/${file}`
  return locale === DEFAULT_LOCALE ? [localized] : [localized, fallback]
}
