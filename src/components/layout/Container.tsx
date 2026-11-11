import type { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Reading width (680px) for long-form text */
  narrow?: boolean
}

export function Container({ narrow = false, className = '', ...rest }: ContainerProps) {
  const width = narrow ? 'max-w-reading' : 'max-w-site'
  return <div {...rest} className={`mx-auto w-full px-5 sm:px-8 ${width} ${className}`} />
}
