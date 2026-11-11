export interface NavItem {
  /** Locale-less path (may include a hash) */
  to: string
  label: string
  current: boolean
}
