import type { Content } from '../types'
import { common } from './common'
import { home } from './home'
import { meta } from './meta'
import { privacy } from './privacy'
import { support } from './support'

export const id = { common, home, support, privacy, meta } satisfies Content
