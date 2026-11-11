import { useLocale } from '../../i18n/useLocale'
import { PRIVACY_ICONS } from './privacyIcons'

export function PrivacyHighlights() {
  const { t } = useLocale()
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {t.privacy.highlights.map((item) => {
        const Icon = PRIVACY_ICONS[item.icon]
        return (
          <li key={item.title} className="rounded-lg border border-border bg-bg p-6 shadow-sm">
            <Icon aria-hidden="true" strokeWidth={1.5} className="size-6 text-accent" />
            <h2 className="mt-4 text-h3">{item.title}</h2>
            <p className="mt-1 text-small text-text-muted">{item.description}</p>
          </li>
        )
      })}
    </ul>
  )
}
