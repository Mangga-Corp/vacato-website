import { forwardRef } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { useLocale } from '../../i18n/useLocale'
import { localizedPath } from '../../lib/localizedPath'

type LocalizedLinkProps = Omit<LinkProps, 'to'> & {
  /** Locale-less path, optionally with a hash. e.g. "/support" or "/#features" */
  to: string
}

/** Link that prepends the active locale prefix. */
export const LocalizedLink = forwardRef<HTMLAnchorElement, LocalizedLinkProps>(
  function LocalizedLink({ to, ...rest }, ref) {
    const { locale } = useLocale()
    const hashIndex = to.indexOf('#')
    const path = hashIndex === -1 ? to : to.slice(0, hashIndex)
    const hash = hashIndex === -1 ? '' : to.slice(hashIndex)
    return <Link ref={ref} to={{ pathname: localizedPath(path || '/', locale), hash }} {...rest} />
  },
)
