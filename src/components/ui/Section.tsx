import type { HTMLAttributes, ReactNode } from 'react'
import { Container } from '../layout/Container'

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  background?: 'default' | 'subtle'
  children: ReactNode
}

export function Section({
  background = 'default',
  className = '',
  children,
  ...rest
}: SectionProps) {
  const bg = background === 'subtle' ? 'bg-bg-subtle' : 'bg-bg'
  return (
    <section {...rest} className={`${bg} py-16 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}
