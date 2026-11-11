import { useEffect } from 'react'
import { useLocale } from '../../i18n/useLocale'
import { LocalizedLink } from '../ui/LocalizedLink'
import { Container } from './Container'
import type { NavItem } from './navItems'

interface MobileMenuProps {
  id: string
  items: readonly NavItem[]
  onClose: () => void
}

export function MobileMenu({ id, items, onClose }: MobileMenuProps) {
  const { t } = useLocale()

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div id={id} className="menu-panel border-t border-border bg-bg md:hidden">
      <Container className="py-3">
        <nav aria-label={t.common.nav.ariaLabel}>
          <ul className="flex flex-col">
            {items.map((item, index) => (
              <li
                key={item.to}
                className="menu-item border-b border-border last:border-b-0"
                style={{ animationDelay: `${80 + index * 70}ms` }}
              >
                <LocalizedLink
                  to={item.to}
                  onClick={onClose}
                  aria-current={item.current ? 'page' : undefined}
                  className={`flex min-h-14 items-center text-body-lg font-medium ${
                    item.current ? 'text-accent' : 'text-text'
                  }`}
                >
                  {item.label}
                </LocalizedLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  )
}
