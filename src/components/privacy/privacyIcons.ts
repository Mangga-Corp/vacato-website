import {
  Clock,
  KeyRound,
  Mail,
  RefreshCw,
  Scale,
  ShieldCheck,
  Smartphone,
  Target,
  Trash2,
  User,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import type { PrivacyIconName } from '../../content/types'

export const PRIVACY_ICONS: Record<PrivacyIconName, LucideIcon> = {
  'shield-check': ShieldCheck,
  user: User,
  'key-round': KeyRound,
  target: Target,
  smartphone: Smartphone,
  users: UsersRound,
  clock: Clock,
  trash: Trash2,
  scale: Scale,
  refresh: RefreshCw,
  mail: Mail,
}
