import { Container } from '../components/layout/Container'
import { PolicySection } from '../components/privacy/PolicySection'
import { PrivacyHighlights } from '../components/privacy/PrivacyHighlights'
import { PrivacyToc } from '../components/privacy/PrivacyToc'
import { PageMeta } from '../components/ui/PageMeta'
import { site } from '../config/site'
import { useLocale } from '../i18n/useLocale'
import { formatDate } from '../lib/formatDate'

const ID_PREFIX = 'privacy-section'

export function PrivacyPage() {
  const { locale, t } = useLocale()
  const { privacy } = t
  const lastIndex = privacy.sections.length - 1

  return (
    <>
      <PageMeta page="privacy" />
      <section className="bg-bg-subtle py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-h1">{privacy.title}</h1>
            <p className="mt-4 text-body-lg text-text-muted">{privacy.intro}</p>
            <p className="mt-6 inline-flex rounded-full border border-border bg-bg px-4 py-1.5 text-caption text-text-muted">
              {privacy.lastUpdatedLabel}:&nbsp;
              <time dateTime={site.privacyLastUpdated}>
                {formatDate(site.privacyLastUpdated, locale)}
              </time>
            </p>
          </div>
          <div className="mt-12">
            <PrivacyHighlights />
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[14rem_1fr] lg:gap-16">
        <div className="hidden lg:block">
          <PrivacyToc idPrefix={ID_PREFIX} />
        </div>
        <div className="max-w-3xl space-y-5">
          {privacy.sections.map((section, index) => (
            <PolicySection key={section.title} section={section} id={`${ID_PREFIX}-${index}`}>
              {index === lastIndex && site.supportEmail ? (
                <p className="mt-4 text-body">
                  <a
                    href={`mailto:${site.supportEmail}`}
                    className="rounded-sm font-medium text-accent underline underline-offset-4 hover:text-accent-hover"
                  >
                    {site.supportEmail}
                  </a>
                </p>
              ) : null}
            </PolicySection>
          ))}
        </div>
      </Container>
    </>
  )
}
