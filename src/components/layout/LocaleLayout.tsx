import { Navigate, Outlet } from 'react-router-dom'
import { LocaleProvider } from '../../i18n/LocaleProvider'
import type { Locale } from '../../i18n/locales'
import { useAutoLocaleRedirect } from '../../i18n/useAutoLocaleRedirect'
import { PageLayout } from './PageLayout'

/** Reads the locale from the route (URL is the source of truth) and provides it. */
export function LocaleLayout({ locale }: { locale: Locale }) {
  const redirectTo = useAutoLocaleRedirect(locale)
  if (redirectTo) return <Navigate to={redirectTo} replace />

  return (
    <LocaleProvider locale={locale}>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </LocaleProvider>
  )
}
