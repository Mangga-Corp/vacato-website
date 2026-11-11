import type { ReactNode } from 'react'

interface SectionHeadingProps {
  as?: 'h1' | 'h2'
  eyebrow?: string
  title: string
  intro?: ReactNode
  align?: 'start' | 'center'
}

export function SectionHeading({
  as: Tag = 'h2',
  eyebrow,
  title,
  intro,
  align = 'start',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? <p className="mb-3 text-caption text-accent">{eyebrow}</p> : null}
      <Tag className={Tag === 'h1' ? 'text-h1' : 'text-h2'}>{title}</Tag>
      {intro ? <p className="mt-4 text-body-lg text-text-muted">{intro}</p> : null}
    </div>
  )
}
