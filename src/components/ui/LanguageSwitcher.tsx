import { useLocale } from '../../i18n/useLocale'
import { LOCALES } from '../../i18n/locales'

/** Segmented "EN | ID" control. Switching keeps the page and hash. */
export function LanguageSwitcher() {
  const { locale, t, setLocale } = useLocale()

  return (
    <div
      role="group"
      aria-label={t.common.language.label}
      className="inline-flex rounded-full border border-border p-0.5"
    >
      {LOCALES.map((code) => {
        const option = t.common.language.options[code]
        const active = code === locale
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-label={option.ariaLabel}
            aria-pressed={active}
            onClick={() => setLocale(code)}
            className={`h-8 min-w-10 rounded-full px-3 text-caption transition-colors duration-150 ${
              active ? 'bg-accent text-accent-fg' : 'text-text-muted hover:text-text'
            }`}
          >
            {option.short}
          </button>
        )
      })}
    </div>
  )
}
