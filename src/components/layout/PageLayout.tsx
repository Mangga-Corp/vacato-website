import type { ReactNode } from 'react'
import { useLocale } from '../../i18n/useLocale'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export const MAIN_ID = 'main-content'

export function PageLayout({ children }: { children: ReactNode }) {
  const { t } = useLocale()
  return (
    <>
      <a
        href={`#${MAIN_ID}`}
        className="sr-only rounded-md bg-accent px-4 py-2 text-small font-medium text-accent-fg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        {t.common.skipToContent}
      </a>
      <SiteHeader />
      <main id={MAIN_ID} tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
