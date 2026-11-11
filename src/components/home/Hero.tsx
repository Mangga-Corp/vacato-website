import { site } from '../../config/site'
import { useLocale } from '../../i18n/useLocale'
import { screenshotSources } from '../../lib/screenshotSources'
import { Container } from '../layout/Container'
import { AppStoreCta } from '../ui/AppStoreCta'
import { PhoneFrame } from '../ui/PhoneFrame'

export function Hero() {
  const { locale, t } = useLocale()
  const { hero } = t.home

  return (
    <section className="bg-wash bg-bg py-16 md:py-28">
      <Container className="grid items-center gap-14 md:grid-cols-2 md:gap-12">
        <div>
          <h1 className="text-display">{hero.headline}</h1>
          <p className="mt-6 max-w-xl text-body-lg text-text-muted">{hero.subheadline}</p>
          <div className="mt-10">
            <AppStoreCta />
          </div>
        </div>
        <PhoneFrame
          priority
          alt={hero.screenshotAlt}
          sources={screenshotSources(locale, site.screenshots.hero.light)}
          darkSources={screenshotSources(locale, site.screenshots.hero.dark)}
        />
      </Container>
    </section>
  )
}
