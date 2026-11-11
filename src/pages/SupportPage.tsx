import { Container } from '../components/layout/Container'
import { ContactCard } from '../components/support/ContactCard'
import { FaqSection } from '../components/support/FaqSection'
import { MailtoActions } from '../components/support/MailtoActions'
import { Requirements } from '../components/support/Requirements'
import { Troubleshooting } from '../components/support/Troubleshooting'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useLocale } from '../i18n/useLocale'

export function SupportPage() {
  const { t } = useLocale()

  return (
    <>
      <PageMeta page="support" />
      <section className="bg-bg-subtle py-16 md:py-24">
        <Container>
          <SectionHeading as="h1" title={t.support.title} intro={t.support.intro} />
          <div className="mt-12 space-y-5">
            <ContactCard />
            <MailtoActions />
          </div>
        </Container>
      </section>
      <FaqSection />
      <Troubleshooting />
      <Requirements />
    </>
  )
}
