import { Container } from '../components/layout/Container'
import { LocalizedLink } from '../components/ui/LocalizedLink'
import { buttonStyles } from '../components/ui/buttonStyles'
import { PageMeta } from '../components/ui/PageMeta'
import { useLocale } from '../i18n/useLocale'

export function NotFoundPage() {
  const { t } = useLocale()
  const { notFound } = t.common

  return (
    <>
      <PageMeta page="notFound" />
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
        <h1 className="text-h1">{notFound.title}</h1>
        <p className="mt-4 max-w-xl text-body-lg text-text-muted">{notFound.body}</p>
        <LocalizedLink to="/" className={buttonStyles('primary', 'lg', 'mt-8')}>
          {notFound.cta}
        </LocalizedLink>
      </Container>
    </>
  )
}
