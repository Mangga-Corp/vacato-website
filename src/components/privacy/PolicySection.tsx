import { Check } from 'lucide-react'
import type { ReactNode } from 'react'
import type { PrivacySection } from '../../content/types'
import { PRIVACY_ICONS } from './privacyIcons'

interface PolicySectionProps {
  section: PrivacySection
  id: string
  children?: ReactNode
}

export function PolicySection({ section, id, children }: PolicySectionProps) {
  const Icon = PRIVACY_ICONS[section.icon]
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="rounded-lg border border-border bg-bg p-6 shadow-sm md:p-8"
    >
      <div className="flex items-center gap-4">
        <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-accent-subtle text-accent">
          <Icon aria-hidden="true" strokeWidth={1.5} className="size-5" />
        </div>
        <h2 id={`${id}-title`} className="text-h3">
          {section.title}
        </h2>
      </div>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-body text-text-muted">
          {paragraph}
        </p>
      ))}
      {section.list ? (
        <ul className="mt-4 space-y-3">
          {section.list.map((item) => (
            <li key={item} className="flex items-start gap-3 text-body text-text-muted">
              <Check
                aria-hidden="true"
                strokeWidth={1.5}
                className="mt-1 size-5 shrink-0 text-accent"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {children}
    </section>
  )
}
