import { Mail } from 'lucide-react'
import { site } from '../../config/site'
import { useLocale } from '../../i18n/useLocale'

export function ContactCard() {
  const { t } = useLocale()
  const { contact } = t.support

  return (
    <div className="rounded-xl border border-border bg-bg p-6 shadow-sm md:p-8">
      <div className="flex items-start gap-4">
        <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-accent-subtle text-accent">
          <Mail aria-hidden="true" strokeWidth={1.5} className="size-5" />
        </div>
        <div className="min-w-0">
          <h2 className="text-h3">{contact.heading}</h2>
          {site.supportEmail ? (
            <p className="mt-2 text-body-lg">
              <span className="sr-only">{contact.emailLabel}: </span>
              <a
                href={`mailto:${site.supportEmail}`}
                className="break-all rounded-sm font-medium text-accent underline underline-offset-4 hover:text-accent-hover"
              >
                {site.supportEmail}
              </a>
            </p>
          ) : (
            <p className="mt-2 text-body-lg text-text-muted">{contact.emailPending}</p>
          )}
          <p className="mt-2 text-small text-text-muted">{contact.responseTime}</p>
        </div>
      </div>
    </div>
  )
}
