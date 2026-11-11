import { Bug, Lightbulb } from 'lucide-react'
import { site } from '../../config/site'
import { useLocale } from '../../i18n/useLocale'
import { buildBugReportMailto, buildFeatureRequestMailto } from '../../lib/mailto'
import { Button } from '../ui/Button'

export function MailtoActions() {
  const { t } = useLocale()
  const { actions, mailto } = t.support
  const hasEmail = Boolean(site.supportEmail)

  const cards = [
    {
      key: 'bug',
      Icon: Bug,
      copy: actions.bug,
      href: buildBugReportMailto(site.supportEmail, mailto.bug, site.appVersion),
    },
    {
      key: 'feature',
      Icon: Lightbulb,
      copy: actions.feature,
      href: buildFeatureRequestMailto(site.supportEmail, mailto.feature, site.appVersion),
    },
  ] as const

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {cards.map(({ key, Icon, copy, href }) => (
        <div
          key={key}
          className="flex flex-col rounded-lg border border-border bg-bg p-6 shadow-sm"
        >
          <Icon aria-hidden="true" strokeWidth={1.5} className="size-6 text-accent" />
          <h3 className="mt-4 text-h3">{copy.title}</h3>
          <p className="mt-2 flex-1 text-small text-text-muted">{copy.description}</p>
          <div className="mt-6">
            {hasEmail ? (
              <Button href={href} variant="secondary">
                {copy.button}
              </Button>
            ) : (
              <>
                <Button variant="secondary" disabled aria-describedby={`${key}-pending`}>
                  {copy.button}
                </Button>
                <p id={`${key}-pending`} className="mt-2 text-caption text-text-subtle">
                  {actions.pendingNote}
                </p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
