import { site } from '../../config/site'
import { useImageFallback } from '../../hooks/useImageFallback'
import { useLocale } from '../../i18n/useLocale'
import { useTheme } from '../../theme/useTheme'

interface PhoneFrameProps {
  /** Candidate screenshot URLs (first that loads wins). */
  sources: readonly string[]
  /** Optional dark-theme candidates. Falls back to `sources`. */
  darkSources?: readonly string[]
  alt: string
  priority?: boolean
}

const WIDTH = 1206
const HEIGHT = 2622

export function PhoneFrame({ sources, darkSources, alt, priority = false }: PhoneFrameProps) {
  const { resolvedTheme } = useTheme()
  const { t } = useLocale()
  const active =
    resolvedTheme === 'dark' && darkSources?.length ? [...darkSources, ...sources] : sources
  const { src, onError } = useImageFallback(active)

  return (
    <div className="mx-auto w-[240px] rounded-phone border border-border bg-bg-subtle p-2 shadow-md sm:w-[280px] md:w-[300px]">
      <div
        className="overflow-hidden rounded-[calc(var(--radius-phone)-8px)] bg-bg"
        style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            width={WIDTH}
            height={HEIGHT}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            onError={onError}
            className="size-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={t.common.phone.placeholderLabel}
            className="flex size-full items-center justify-center bg-bg-subtle"
          >
            <img
              src={site.images.appIcon}
              alt=""
              width={64}
              height={64}
              className="size-16 rounded-lg opacity-80"
            />
          </div>
        )}
      </div>
    </div>
  )
}
