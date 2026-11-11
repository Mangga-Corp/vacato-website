import type { Content } from '../types'
import { common } from './common'
import { home } from './home'
import { meta } from './meta'
import { privacy } from './privacy'
import { support } from './support'

export const en = { common, home, support, privacy, meta } satisfies Content
