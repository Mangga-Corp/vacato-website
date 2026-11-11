import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { localizedPath, stripLocale } from '../lib/localizedPath'
import { detectBrowserLocale, getStoredLocale, storeLocale } from './detectLocale'
import { DEFAULT_LOCALE, type Locale } from './locales'

/**
 * First visit only, on a page without a locale prefix, with no saved preference:
 * returns the localized URL to redirect to (or null). The detected locale is saved
 * so detection never runs again and never overrides a manual choice.
 */
export function useAutoLocaleRedirect(locale: Locale): string | null {
  const { pathname, search, hash } = useLocation()

  const [target] = useState<string | null>(() => {
    if (locale !== DEFAULT_LOCALE || getStoredLocale() !== null) return null
    const detected = detectBrowserLocale()
    if (detected === DEFAULT_LOCALE) return null
    return `${localizedPath(stripLocale(pathname).path, detected)}${search}${hash}`
  })

  useEffect(() => {
    if (locale === DEFAULT_LOCALE && getStoredLocale() === null) {
      storeLocale(target ? detectBrowserLocale() : DEFAULT_LOCALE)
    }
  }, [locale, target])

  return target
}
