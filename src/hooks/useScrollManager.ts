import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { stripLocale } from '../lib/localizedPath'

/**
 * Scroll to top on route change (but keep position when only the language changes),
 * and scroll to #hash targets.
 */
export function useScrollManager(): void {
  const { pathname, hash } = useLocation()
  const previousPath = useRef<string | null>(null)

  useEffect(() => {
    const { path } = stripLocale(pathname)
    const previous = previousPath.current
    previousPath.current = path

    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
      return
    }
    if (previous !== null && previous !== path) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])
}
