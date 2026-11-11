import { PAGE_PATHS, site, type PageKey } from '../../config/site'
import { LOCALES, LOCALE_META, DEFAULT_LOCALE } from '../../i18n/locales'
import { useLocale } from '../../i18n/useLocale'
import { absoluteUrl } from '../../lib/absoluteUrl'
import { localizedPath } from '../../lib/localizedPath'

interface PageMetaProps {
  page: PageKey | 'notFound'
}

/** Title, description, canonical, hreflang and Open Graph, via React 19 native metadata tags. */
export function PageMeta({ page }: PageMetaProps) {
  const { locale, t } = useLocale()
  const { title, description } = t.meta[page]
  const indexable = page !== 'notFound'

  const canonicalPath = indexable ? localizedPath(PAGE_PATHS[page], locale) : null
  const canonical = canonicalPath ? absoluteUrl(canonicalPath) : null
  const image = absoluteUrl(site.images.ogImage)

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {indexable ? null : <meta name="robots" content="noindex" />}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {indexable
        ? LOCALES.map((code) => (
            <link
              key={code}
              rel="alternate"
              hrefLang={LOCALE_META[code].htmlLang}
              href={absoluteUrl(localizedPath(PAGE_PATHS[page], code))}
            />
          ))
        : null}
      {indexable ? (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={absoluteUrl(localizedPath(PAGE_PATHS[page], DEFAULT_LOCALE))}
        />
      ) : null}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={t.meta.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={LOCALE_META[locale].ogLocale} />
      {LOCALES.filter((code) => code !== locale).map((code) => (
        <meta key={code} property="og:locale:alternate" content={LOCALE_META[code].ogLocale} />
      ))}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {site.appleAppId ? (
        <meta name="apple-itunes-app" content={`app-id=${site.appleAppId}`} />
      ) : null}
    </>
  )
}
