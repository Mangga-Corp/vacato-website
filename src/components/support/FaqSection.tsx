import { CircleHelp } from 'lucide-react'
import { useLocale } from '../../i18n/useLocale'
import { Accordion } from '../ui/Accordion'
import { Section } from '../ui/Section'

export function FaqSection() {
  const { t } = useLocale()
  const { faq } = t.support

  return (
    <Section aria-labelledby="faq-heading">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-accent-subtle text-accent">
          <CircleHelp aria-hidden="true" strokeWidth={1.5} className="size-6" />
        </div>
        <h2 id="faq-heading" className="text-h2">
          {faq.heading}
        </h2>
        <p className="mt-4 text-body-lg text-text-muted">{faq.intro}</p>
      </div>
      <div className="mt-12">
        <Accordion items={faq.items} />
      </div>
    </Section>
  )
}
