import type { CommonContent } from '../types'

export const common = {
  skipToContent: 'Skip to content',
  appIconAlt: 'Vacato app icon',
  nav: {
    ariaLabel: 'Main navigation',
    homeAriaLabel: 'Vacato, go to home page',
    features: 'Features',
    support: 'Support',
    privacy: 'Privacy',
  },
  header: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobileMenuLabel: 'Menu',
  },
  language: {
    label: 'Language',
    options: {
      en: { short: 'EN', name: 'English', ariaLabel: 'Switch to English' },
      id: { short: 'ID', name: 'Bahasa Indonesia', ariaLabel: 'Switch to Bahasa Indonesia' },
    },
  },
  theme: {
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
  },
  appStore: {
    comingSoon: 'Coming soon to the App Store',
    badgeAlt: 'Download Vacato on the App Store',
  },
  phone: {
    placeholderLabel: 'Vacato app screenshot',
  },
  footer: {
    navAriaLabel: 'Footer navigation',
    tagline: 'A camera guide that helps anyone take your photo your way.',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
  notFound: {
    title: 'This page doesn’t exist',
    body: 'The link may be broken, or the page may have moved.',
    cta: 'Back to home',
  },
} satisfies CommonContent
