import { TriangleAlert } from 'lucide-react'
import { useLocale } from '../../i18n/useLocale'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Troubleshooting() {
  const { t } = useLocale()
  const { troubleshooting } = t.support

  return (
    <Section background="subtle" aria-labelledby="troubleshooting-heading">
      <div id="troubleshooting-heading">
        <SectionHeading title={troubleshooting.heading} intro={troubleshooting.intro} />
      </div>

      <h3 className="mt-12 text-h3">{troubleshooting.generalHeading}</h3>
      <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {troubleshooting.generalSteps.map((step, index) => (
          <li key={step} className="rounded-lg border border-border bg-bg p-5 shadow-sm">
            <p aria-hidden="true" className="text-h2 text-accent">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p className="mt-3 text-small text-text-muted">{step}</p>
          </li>
        ))}
      </ol>

      <h3 className="mt-14 text-h3">{troubleshooting.specificHeading}</h3>
      <ul className="mt-5 grid gap-4 md:grid-cols-2">
        {troubleshooting.specificItems.map((item) => (
          <li
            key={item.problem}
            className="flex gap-4 rounded-lg border border-border bg-bg p-6 shadow-sm"
          >
            <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-accent-subtle text-accent">
              <TriangleAlert aria-hidden="true" strokeWidth={1.5} className="size-5" />
            </div>
            <div>
              <h4 className="text-body font-medium">{item.problem}</h4>
              <p className="mt-1 text-small text-text-muted">{item.solution}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
