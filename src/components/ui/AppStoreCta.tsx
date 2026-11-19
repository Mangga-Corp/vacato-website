import { ArrowUpRight } from 'lucide-react'
import { site } from '../../config/site'
import { useLocale } from '../../i18n/useLocale'

function AppleLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  )
}

interface AppStoreCtaProps {
  /** Show the "iPhone and iPad · iOS" line under the button. */
  showPlatforms?: boolean
  align?: 'start' | 'center'
}

/** Brand-styled App Store download button. */
export function AppStoreCta({ showPlatforms = true, align = 'start' }: AppStoreCtaProps) {
  const { t } = useLocale()
  const copy = t.common.appStore

  return (
    <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center' : 'items-start'}`}>
      <a
        href={site.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={copy.ariaLabel}
        className="cta-shine group relative inline-flex h-15 items-center gap-3 rounded-full bg-accent pr-6 pl-5 text-accent-fg shadow-cta transition-[translate,background-color,box-shadow] duration-200 ease-soft hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-cta-hover active:translate-y-0"
      >
        <AppleLogo className="size-7 shrink-0 -translate-y-px" />
        <span className="flex flex-col items-start leading-none">
          <span className="text-caption leading-none opacity-80">{copy.preLabel}</span>
          <span className="mt-1 text-[1.375rem] leading-none font-semibold tracking-tight">
            {copy.label}
          </span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="ml-1 size-5 shrink-0 opacity-70 transition-[translate,opacity] duration-200 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        />
      </a>
      {showPlatforms ? <p className="text-caption text-text-subtle">{copy.platforms}</p> : null}
    </div>
  )
}

/** Small pill announcing the launch, linking to the App Store. */
export function AppStoreAvailableChip() {
  const { t } = useLocale()

  return (
    <a
      href={site.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-subtle py-1.5 pr-3.5 pl-3 text-caption text-accent transition-colors duration-200 ease-soft hover:border-accent/40"
    >
      <span className="relative flex size-2" aria-hidden="true">
        <span className="cta-ping absolute inline-flex size-full rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-accent" />
      </span>
      {t.common.appStore.availableNow}
    </a>
  )
}
