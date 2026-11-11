import { site } from '../config/site'

export function absoluteUrl(path: string): string {
  return `${site.siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}
