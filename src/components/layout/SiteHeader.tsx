import { Menu, X } from 'lucide-react'
import { useId, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FEATURES_ID, PAGE_PATHS, site } from '../../config/site'
import { useScrolled } from '../../hooks/useScrolled'
import { useLocale } from '../../i18n/useLocale'
import { stripLocale } from '../../lib/localizedPath'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { LocalizedLink } from '../ui/LocalizedLink'
import { ThemeSwitcher } from '../ui/ThemeSwitcher'
import { Container } from './Container'
import { MobileMenu } from './MobileMenu'
import type { NavItem } from './navItems'

export function SiteHeader() {
  const { t } = useLocale()
  const { pathname } = useLocation()
  const scrolled = useScrolled()
  // The menu is "open at" a path, so it closes automatically on navigation.
  const [openAt, setOpenAt] = useState<string | null>(null)
  const menuOpen = openAt === pathname
  const menuId = useId()
  const { path } = stripLocale(pathname)

  const items: NavItem[] = [
    { to: `${PAGE_PATHS.home}#${FEATURES_ID}`, label: t.common.nav.features, current: false },
    {
      to: PAGE_PATHS.support,
      label: t.common.nav.support,
      current: path === PAGE_PATHS.support,
    },
    {
      to: PAGE_PATHS.privacy,
      label: t.common.nav.privacy,
      current: path === PAGE_PATHS.privacy,
    },
  ]

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-bg ${scrolled || menuOpen ? 'border-border' : 'border-transparent'}`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <LocalizedLink
          to="/"
          aria-label={t.common.nav.homeAriaLabel}
          className="flex items-center gap-3 rounded-sm text-h3"
        >
          <img
            src={site.images.appIcon}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-[8px]"
          />
          <span>{site.name}</span>
        </LocalizedLink>

        <nav aria-label={t.common.nav.ariaLabel} className="hidden md:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li key={item.to}>
                <LocalizedLink
                  to={item.to}
                  aria-current={item.current ? 'page' : undefined}
                  className={`rounded-sm text-small font-medium transition-colors duration-150 hover:text-text ${
                    item.current ? 'text-text' : 'text-text-muted'
                  }`}
                >
                  {item.label}
                </LocalizedLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? t.common.header.closeMenu : t.common.header.openMenu}
            onClick={() => setOpenAt(menuOpen ? null : pathname)}
            className="inline-flex size-10 items-center justify-center rounded-full text-text hover:bg-bg-subtle md:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" strokeWidth={1.5} className="size-6" />
            ) : (
              <Menu aria-hidden="true" strokeWidth={1.5} className="size-6" />
            )}
          </button>
        </div>
      </Container>

      {menuOpen ? <MobileMenu id={menuId} items={items} onClose={() => setOpenAt(null)} /> : null}
    </header>
  )
}
