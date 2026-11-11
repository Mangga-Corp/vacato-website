export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium text-center whitespace-nowrap transition-colors duration-150 ease-soft disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-accent-fg hover:bg-accent-hover disabled:hover:bg-accent',
  secondary: 'border border-border bg-bg text-text hover:bg-bg-subtle disabled:hover:bg-bg',
}

const sizes: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-small',
  lg: 'h-12 px-6 text-body',
}

export function buttonStyles(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className = '',
): string {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(' ')
}
