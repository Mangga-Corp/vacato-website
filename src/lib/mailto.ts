export interface MailtoParts {
  to: string
  subject: string
  body: string
}

export function buildMailto({ to, subject, body }: MailtoParts): string {
  const recipient = encodeURIComponent(to).replace(/%40/g, '@')
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export interface BugReportTemplate {
  subject: string
  intro: string
  appVersionLabel: string
  deviceLabel: string
  osLabel: string
  descriptionLabel: string
  stepsLabel: string
}

export interface FeatureRequestTemplate {
  subject: string
  intro: string
  appVersionLabel: string
  ideaLabel: string
  reasonLabel: string
}

const NL = '\r\n'

export function buildBugReportMailto(
  to: string,
  template: BugReportTemplate,
  appVersion: string,
): string {
  const body = [
    template.intro,
    '',
    `${template.appVersionLabel}: ${appVersion}`,
    `${template.deviceLabel}: `,
    `${template.osLabel}: `,
    '',
    `${template.descriptionLabel}:`,
    '',
    '',
    `${template.stepsLabel}:`,
    '1. ',
    '2. ',
    '3. ',
  ].join(NL)
  return buildMailto({ to, subject: template.subject, body })
}

export function buildFeatureRequestMailto(
  to: string,
  template: FeatureRequestTemplate,
  appVersion: string,
): string {
  const body = [
    template.intro,
    '',
    `${template.appVersionLabel}: ${appVersion}`,
    '',
    `${template.ideaLabel}:`,
    '',
    '',
    `${template.reasonLabel}:`,
    '',
  ].join(NL)
  return buildMailto({ to, subject: template.subject, body })
}
