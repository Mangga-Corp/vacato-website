import { FeatureGrid } from '../components/home/FeatureGrid'
import { FinalCta } from '../components/home/FinalCta'
import { Hero } from '../components/home/Hero'
import { HowItWorks } from '../components/home/HowItWorks'
import { PrivacyHighlight } from '../components/home/PrivacyHighlight'
import { PageMeta } from '../components/ui/PageMeta'

export function HomePage() {
  return (
    <>
      <PageMeta page="home" />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <PrivacyHighlight />
      <FinalCta />
    </>
  )
}
