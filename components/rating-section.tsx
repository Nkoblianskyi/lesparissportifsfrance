import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"

export function RatingSection() {
  return (
    <section
      className="w-full py-12 relative"
      style={{
        backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay для покращення читабельності */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-blue-50/80 to-red-50/85 backdrop-blur-sm"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="space-y-6">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
