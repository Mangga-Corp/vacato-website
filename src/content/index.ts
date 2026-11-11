import type { Locale } from '../i18n/locales'
import { en } from './en'
import { id } from './id'
import type { Content } from './types'

// Adding a locale to LOCALES makes this Record fail to compile until it is added here.
export const content: Record<Locale, Content> = { en, id }
