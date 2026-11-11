import type { BugReportTemplate, FeatureRequestTemplate } from '../lib/mailto'
import type { Locale } from '../i18n/locales'

export interface PageMetaContent {
  title: string
  description: string
}

export interface MetaContent {
  siteName: string
  home: PageMetaContent
  support: PageMetaContent
  privacy: PageMetaContent
  notFound: PageMetaContent
}

export interface CommonContent {
  skipToContent: string
  appIconAlt: string
  nav: {
    ariaLabel: string
    homeAriaLabel: string
    features: string
    support: string
    privacy: string
  }
  header: {
    openMenu: string
    closeMenu: string
    mobileMenuLabel: string
  }
  language: {
    label: string
    options: Record<Locale, { short: string; name: string; ariaLabel: string }>
  }
  theme: {
    switchToDark: string
    switchToLight: string
  }
  appStore: {
    comingSoon: string
    badgeAlt: string
  }
  phone: {
    placeholderLabel: string
  }
  footer: {
    navAriaLabel: string
    tagline: string
    contact: string
    rights: string
  }
  notFound: {
    title: string
    body: string
    cta: string
  }
}

export type FeatureIconName =
  'images' | 'navigation' | 'circle-check' | 'armchair' | 'sliders' | 'wand'

export interface FeatureItem {
  icon: FeatureIconName
  title: string
  description: string
}

export interface StepItem {
  title: string
  description: string
}

export interface HomeContent {
  hero: {
    headline: string
    subheadline: string
    screenshotAlt: string
  }
  features: {
    eyebrow: string
    heading: string
    intro: string
    items: readonly FeatureItem[]
  }
  how: {
    eyebrow: string
    heading: string
    steps: readonly [StepItem, StepItem, StepItem]
  }
  privacy: {
    eyebrow: string
    heading: string
    body: string
    points: readonly string[]
    link: string
  }
  finalCta: {
    heading: string
    body: string
  }
}

export interface FaqItem {
  question: string
  answer: string
}

export interface TroubleshootingItem {
  problem: string
  solution: string
}

export type RequirementIconName =
  'smartphone' | 'tablet-smartphone' | 'camera' | 'images' | 'map-pin' | 'wifi' | 'languages'

export interface SupportContent {
  title: string
  intro: string
  contact: {
    heading: string
    emailLabel: string
    emailPending: string
    responseTime: string
  }
  actions: {
    pendingNote: string
    bug: { title: string; description: string; button: string }
    feature: { title: string; description: string; button: string }
  }
  mailto: {
    bug: BugReportTemplate
    feature: FeatureRequestTemplate
  }
  faq: {
    heading: string
    intro: string
    items: readonly FaqItem[]
  }
  troubleshooting: {
    heading: string
    intro: string
    generalHeading: string
    generalSteps: readonly string[]
    specificHeading: string
    specificItems: readonly TroubleshootingItem[]
  }
  requirements: {
    heading: string
    items: readonly { icon: RequirementIconName; label: string; value: string }[]
  }
  version: {
    label: string
  }
}

export type PrivacyIconName =
  | 'shield-check'
  | 'user'
  | 'key-round'
  | 'target'
  | 'smartphone'
  | 'users'
  | 'clock'
  | 'trash'
  | 'scale'
  | 'refresh'
  | 'mail'

export interface PrivacyHighlight {
  icon: PrivacyIconName
  title: string
  description: string
}

export interface PrivacySection {
  icon: PrivacyIconName
  title: string
  paragraphs: readonly string[]
  list?: readonly string[]
}

export interface PrivacyContent {
  title: string
  intro: string
  tocLabel: string
  highlights: readonly PrivacyHighlight[]
  lastUpdatedLabel: string
  sections: readonly PrivacySection[]
}

export interface Content {
  common: CommonContent
  home: HomeContent
  support: SupportContent
  privacy: PrivacyContent
  meta: MetaContent
}
