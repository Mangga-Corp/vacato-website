import { useLocale } from '../../i18n/useLocale'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function HowItWorks() {
  const { t } = useLocale()
  const { how } = t.home

  return (
    <Section background="subtle">
      <Reveal>
        <SectionHeading eyebrow={how.eyebrow} title={how.heading} />
      </Reveal>
      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
        {how.steps.map((step, index) => (
          <li key={step.title}>
            <Reveal delayMs={index * 60}>
              <p aria-hidden="true" className="text-h1 text-text-subtle">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 text-h3">{step.title}</h3>
              <p className="mt-2 text-small text-text-muted">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
