import {
  Armchair,
  CircleCheck,
  Images,
  Navigation,
  SlidersHorizontal,
  Wand2,
  type LucideIcon,
} from 'lucide-react'
import type { FeatureIconName, FeatureItem } from '../../content/types'

const ICONS: Record<FeatureIconName, LucideIcon> = {
  images: Images,
  navigation: Navigation,
  'circle-check': CircleCheck,
  armchair: Armchair,
  sliders: SlidersHorizontal,
  wand: Wand2,
}

export function FeatureCard({ icon, title, description }: FeatureItem) {
  const Icon = ICONS[icon]
  return (
    <article className="h-full rounded-lg border border-border bg-bg-subtle p-6 md:p-8">
      <div className="mb-5 inline-flex size-11 items-center justify-center rounded-md bg-accent-subtle text-accent">
        <Icon aria-hidden="true" strokeWidth={1.5} className="size-5" />
      </div>
      <h3 className="text-h3">{title}</h3>
      <p className="mt-2 text-small text-text-muted">{description}</p>
    </article>
  )
}
