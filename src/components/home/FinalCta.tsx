import { useLocale } from '../../i18n/useLocale'
import { AppStoreCta } from '../ui/AppStoreCta'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function FinalCta() {
  const { t } = useLocale()
  const { finalCta } = t.home

  return (
    <Section background="subtle">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-h2">{finalCta.heading}</h2>
        <p className="mt-4 text-body-lg text-text-muted">{finalCta.body}</p>
        <div className="mt-8">
          <AppStoreCta />
        </div>
      </Reveal>
    </Section>
  )
}
