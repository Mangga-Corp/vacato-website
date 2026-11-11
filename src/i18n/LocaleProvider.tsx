import { useCallback, useEffect, useMemo, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { content } from '../content'
import { localizedPath, stripLocale } from '../lib/localizedPath'
import { LocaleContext, type LocaleContextValue } from './LocaleContext'
import { storeLocale } from './detectLocale'
import { LOCALE_META, type Locale } from './locales'

interface LocaleProviderProps {
  locale: Locale
  children: ReactNode
}

/** The URL is the source of truth for the active locale. */
export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang
  }, [locale])

  const { pathname, search, hash } = location

  const setLocale = useCallback(
    (next: Locale) => {
      storeLocale(next)
      if (next === locale) return
      const { path } = stripLocale(pathname)
      navigate({ pathname: localizedPath(path, next), search, hash })
    },
    [locale, pathname, search, hash, navigate],
  )

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, t: content[locale], setLocale }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
