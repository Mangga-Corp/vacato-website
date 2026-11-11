// Non-text configuration. Fill the empty values once you have them.
export const site = {
  name: 'Vacato',
  developer: 'Vacato',
  /** Support email. Leave empty until ready: the UI shows a "coming soon" state. */
  supportEmail: '',
  /** App Store URL. Leave empty to show "Coming soon". */
  appStoreUrl: '',
  /** Apple App ID (digits only). When set, adds the Smart App Banner meta tag. */
  appleAppId: '',
  /** Production origin, no trailing slash. */
  siteUrl: 'https://vacato.vercel.app',
  appVersion: '1.3',
  minIosVersion: '26.0',
  /** ISO date (YYYY-MM-DD) of the last privacy policy revision. */
  privacyLastUpdated: '2026-11-11',
  themeColors: { light: '#FFFFFF', dark: '#0C0A09' },
  images: {
    appIcon: '/images/app-icon.png',
    ogImage: '/images/og-image.png',
  },
  /** File name looked up in /images/screenshots/{locale}/ (falls back to /en/). */
  screenshots: {
    hero: { light: 'hero.png', dark: 'hero-dark.png' },
  },
} as const

export type PageKey = 'home' | 'support' | 'privacy'

export const PAGE_PATHS: Record<PageKey, string> = {
  home: '/',
  support: '/support',
  privacy: '/privacy',
}

/** Anchor id of the Features section on the home page. */
export const FEATURES_ID = 'features'
