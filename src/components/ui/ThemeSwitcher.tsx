import { Moon, Sun } from 'lucide-react'
import { useLocale } from '../../i18n/useLocale'
import { useTheme } from '../../theme/useTheme'

/** One-tap toggle between light and dark. */
export function ThemeSwitcher() {
  const { t } = useLocale()
  const { resolvedTheme, setPreference } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const Icon = isDark ? Sun : Moon

  return (
    <button
      type="button"
      aria-label={isDark ? t.common.theme.switchToLight : t.common.theme.switchToDark}
      onClick={() => setPreference(isDark ? 'light' : 'dark')}
      className="inline-flex size-10 items-center justify-center rounded-full text-text-muted transition-colors duration-150 hover:bg-bg-subtle hover:text-text"
    >
      <Icon aria-hidden="true" strokeWidth={1.5} className="size-5" />
    </button>
  )
}
