import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { OurChoiceSection } from "@/components/our-choice-section"
import { InfoSections } from "@/components/info-sections"
import { AgeVerificationModal } from "@/components/age-verification-modal"

export default function HomePage() {
  return (
    <div className="space-y-2.5">
      <Hero />
      <RatingSection />
      <InfoSections />
      <OurChoiceSection />
      <AgeVerificationModal />
    </div>
  )
}
