import {
  Camera,
  Images,
  Languages,
  MapPin,
  Smartphone,
  Tag,
  TabletSmartphone,
  Wifi,
  type LucideIcon,
} from 'lucide-react'
import type { RequirementIconName } from '../../content/types'
import { site } from '../../config/site'
import { useLocale } from '../../i18n/useLocale'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const ICONS: Record<RequirementIconName, LucideIcon> = {
  smartphone: Smartphone,
  'tablet-smartphone': TabletSmartphone,
  camera: Camera,
  images: Images,
  'map-pin': MapPin,
  wifi: Wifi,
  languages: Languages,
}

export function Requirements() {
  const { t } = useLocale()
  const { requirements, version } = t.support

  const tiles: { key: string; Icon: LucideIcon; label: string; value: string }[] = [
    ...requirements.items.map((item) => ({
      key: item.label,
      Icon: ICONS[item.icon],
      label: item.label,
      value: item.value,
    })),
    { key: 'version', Icon: Tag, label: version.label, value: site.appVersion },
  ]

  return (
    <Section aria-labelledby="requirements-heading">
      <div id="requirements-heading">
        <SectionHeading title={requirements.heading} />
      </div>
      <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map(({ key, Icon, label, value }) => (
          <div key={key} className="rounded-lg border border-border bg-bg-subtle p-6">
            <Icon aria-hidden="true" strokeWidth={1.5} className="size-6 text-accent" />
            <dt className="mt-4 text-caption text-text-subtle">{label}</dt>
            <dd className="mt-1 text-body font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
