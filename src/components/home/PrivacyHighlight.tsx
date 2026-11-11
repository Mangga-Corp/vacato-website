import { ArrowRight, Check } from 'lucide-react'
import { PAGE_PATHS } from '../../config/site'
import { useLocale } from '../../i18n/useLocale'
import { LocalizedLink } from '../ui/LocalizedLink'
import { buttonStyles } from '../ui/buttonStyles'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function PrivacyHighlight() {
  const { t } = useLocale()
  const { privacy } = t.home

  return (
    <Section background="default">
      <Reveal className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading eyebrow={privacy.eyebrow} title={privacy.heading} intro={privacy.body} />
          <LocalizedLink
            to={PAGE_PATHS.privacy}
            className={buttonStyles('secondary', 'md', 'group mt-8 gap-2')}
          >
            {privacy.link}
            <ArrowRight
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </LocalizedLink>
        </div>
        <ul className="divide-y divide-border rounded-lg border border-border">
          {privacy.points.map((point) => (
            <li key={point} className="flex items-start gap-3 p-5 text-body text-text">
              <Check
                aria-hidden="true"
                strokeWidth={1.5}
                className="mt-1 size-5 shrink-0 text-accent"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
