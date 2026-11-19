import { useEffect, useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { site } from '../../config/site'
import { useLocale } from '../../i18n/useLocale'

export function ContactCard() {
  const { t } = useLocale()
  const { contact } = t.support
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(id)
  }, [copied])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.supportEmail)
      setCopied(true)
    } catch {
      // Clipboard unavailable: the mailto link still works.
    }
  }

  return (
    <div className="rounded-xl border border-border bg-bg p-6 shadow-sm md:p-8">
      <div className="flex items-start gap-4">
        <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-accent-subtle text-accent">
          <Mail aria-hidden="true" strokeWidth={1.5} className="size-5" />
        </div>
        <div className="min-w-0">
          <h2 className="text-h3">{contact.heading}</h2>
          {site.supportEmail ? (
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
              <a
                href={`mailto:${site.supportEmail}`}
                className="break-all rounded-sm text-body-lg font-semibold text-text transition-colors hover:text-accent"
              >
                <span className="sr-only">{contact.emailLabel}: </span>
                {site.supportEmail}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-caption font-medium text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {copied ? (
                  <Check aria-hidden="true" strokeWidth={2} className="size-3.5" />
                ) : (
                  <Copy aria-hidden="true" strokeWidth={2} className="size-3.5" />
                )}
                <span aria-live="polite">{copied ? contact.copied : contact.copyEmail}</span>
              </button>
            </div>
          ) : (
            <p className="mt-2 text-body-lg text-text-muted">{contact.emailPending}</p>
          )}
          <p className="mt-2 text-small text-text-muted">{contact.responseTime}</p>
        </div>
      </div>
    </div>
  )
}
