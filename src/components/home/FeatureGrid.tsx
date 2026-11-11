import { FEATURES_ID } from '../../config/site'
import { useLocale } from '../../i18n/useLocale'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { FeatureCard } from './FeatureCard'

export function FeatureGrid() {
  const { t } = useLocale()
  const { features } = t.home

  return (
    <Section id={FEATURES_ID} background="default" aria-labelledby={`${FEATURES_ID}-heading`}>
      <Reveal>
        <div id={`${FEATURES_ID}-heading`}>
          <SectionHeading
            eyebrow={features.eyebrow}
            title={features.heading}
            intro={features.intro}
          />
        </div>
      </Reveal>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((item, index) => (
          <li key={item.title}>
            <Reveal className="h-full" delayMs={(index % 3) * 60}>
              <FeatureCard {...item} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
