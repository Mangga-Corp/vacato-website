import { DEFAULT_LOCALE, LOCALES, LOCALE_META, type Locale } from '../i18n/locales'

/** "/support" + "id" -> "/id/support". "/" + "id" -> "/id". */
export function localizedPath(path: string, locale: Locale): string {
  const prefix = LOCALE_META[locale].pathPrefix
  const clean = path.startsWith('/') ? path : `/${path}`
  if (!prefix) return clean
  return clean === '/' ? prefix : `${prefix}${clean}`
}

/** "/id/support" -> { locale: "id", path: "/support" } */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  for (const locale of LOCALES) {
    const prefix = LOCALE_META[locale].pathPrefix
    if (!prefix) continue
    if (normalized === prefix) return { locale, path: '/' }
    if (normalized.startsWith(`${prefix}/`)) {
      return { locale, path: normalized.slice(prefix.length) || '/' }
    }
  }
  return { locale: DEFAULT_LOCALE, path: normalized || '/' }
}
