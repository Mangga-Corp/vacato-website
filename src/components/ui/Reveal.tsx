import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

interface RevealProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

/** Fade + 8px translate when entering the viewport. Disabled for reduced motion in CSS. */
export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
