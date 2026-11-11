import { site } from '../../config/site'
import { useLocale } from '../../i18n/useLocale'
import { badgeSource } from '../../lib/badgeSource'

/** Official badge when the App Store URL is set; otherwise a neutral "coming soon" pill. */
export function AppStoreCta() {
  const { locale, t } = useLocale()

  if (site.appStoreUrl) {
    return (
      <a href={site.appStoreUrl} className="inline-block rounded-md" rel="noopener">
        <img
          src={badgeSource(locale)}
          alt={t.common.appStore.badgeAlt}
          width={144}
          height={48}
          className="h-12 w-auto"
        />
      </a>
    )
  }

  return (
    <p className="inline-flex h-12 items-center rounded-full border border-border bg-bg-subtle px-5 text-small font-medium text-text-muted">
      {t.common.appStore.comingSoon}
    </p>
  )
}
