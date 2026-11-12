import { DEFAULT_LOCALE, isLocale, type Locale } from './locales'

const STORAGE_KEY = 'poto-locale'

export function getStoredLocale(): Locale | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return isLocale(value) ? value : null
  } catch {
    return null
  }
}

export function storeLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Storage unavailable (private mode, blocked): ignore.
  }
}

/** Indonesian if the browser's preferred language starts with "id", otherwise English. */
export function detectBrowserLocale(): Locale {
  const preferred = navigator.languages?.[0] ?? navigator.language ?? ''
  return preferred.toLowerCase().startsWith('id') ? 'id' : DEFAULT_LOCALE
}
