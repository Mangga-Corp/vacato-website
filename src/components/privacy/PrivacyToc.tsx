import { useLocale } from '../../i18n/useLocale'

export function PrivacyToc({ idPrefix }: { idPrefix: string }) {
  const { t } = useLocale()
  return (
    <nav aria-label={t.privacy.tocLabel} className="sticky top-24">
      <p className="mb-3 text-caption text-text-subtle">{t.privacy.tocLabel}</p>
      <ol className="space-y-1 border-l border-border">
        {t.privacy.sections.map((section, index) => (
          <li key={section.title}>
            <a
              href={`#${idPrefix}-${index}`}
              className="-ml-px block border-l border-transparent py-1.5 pl-4 text-small text-text-muted hover:border-accent hover:text-text"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
