import { PAGE_PATHS, site } from '../../config/site'
import { useLocale } from '../../i18n/useLocale'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { LocalizedLink } from '../ui/LocalizedLink'
import { Container } from './Container'

export function SiteFooter() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg py-12">
      <Container className="flex flex-col items-start gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="text-h3">{site.name}</p>
          <p className="mt-2 text-small text-text-muted">{t.common.footer.tagline}</p>
        </div>

        <nav aria-label={t.common.footer.navAriaLabel}>
          <ul className="flex flex-col gap-3 text-small">
            <li>
              <LocalizedLink
                to={PAGE_PATHS.support}
                className="rounded-sm text-text-muted hover:text-text"
              >
                {t.common.nav.support}
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink
                to={PAGE_PATHS.privacy}
                className="rounded-sm text-text-muted hover:text-text"
              >
                {t.common.nav.privacy}
              </LocalizedLink>
            </li>
            {site.supportEmail ? (
              <li>
                <a
                  href={`mailto:${site.supportEmail}`}
                  aria-label={`${t.common.footer.contact}: ${site.supportEmail}`}
                  className="rounded-sm text-text-muted hover:text-text"
                >
                  {site.supportEmail}
                </a>
              </li>
            ) : null}
          </ul>
        </nav>

        <LanguageSwitcher />
      </Container>
      <Container className="mt-10">
        <p className="text-caption text-text-subtle">
          © {year} {site.developer}. {t.common.footer.rights}
        </p>
      </Container>
    </footer>
  )
}
