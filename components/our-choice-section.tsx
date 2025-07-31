import { Star, ExternalLink } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"
import Link from "next/link"

export function OurChoiceSection() {
  // Récupérer le premier site des données mock (meilleur classement)
  const ourChoice = bettingSites[0]

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            <span className="french-blue">Notre</span> <span className="french-red">Recommandation</span>
          </h2>
          <p className="text-slate-600">La plateforme qui se distingue par son excellence</p>
        </div>

        {/* Card with French design matching rating list */}
        <Link
          href={ourChoice.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block group"
          aria-label={`Visiter le site officiel de ${ourChoice.name} (nouvelle fenêtre)`}
        >
          <div className="relative rounded-xl p-6 transition-all duration-300 shadow-xl border-2 bg-gradient-to-br from-blue-100 via-white to-red-100 border-yellow-400 shadow-2xl shadow-yellow-400/30 max-w-4xl mx-auto group-hover:scale-[1.02]">
            {/* Badge - positioned at top right */}
            <div className="absolute -top-3 -right-3 z-20">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-2 border-white shadow-xl px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transform rotate-3 hover:rotate-0 transition-transform">
                NOTRE CHOIX
              </div>
            </div>

            {/* French decorative elements */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              {/* French stars for decoration */}
              <div className="absolute top-4 left-4 w-6 h-6 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-red-600">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="absolute top-1/2 right-8 w-4 h-4 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              {/* Decorative circles */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-200/20 to-blue-300/15"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-red-200/20 to-red-300/15"></div>
            </div>

            <div className="relative z-10">
              {/* Desktop and Tablet Layout */}
              <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 pt-2">
                {/* Rank number */}
                <div className="w-14 h-14 font-bold rounded-full flex items-center justify-center text-2xl flex-shrink-0 border-4 shadow-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-white">
                  1
                </div>

                {/* Logo */}
                <div className="flex-shrink-0 p-3 rounded-xl border-2 bg-white shadow-md border-slate-300">
                  <img
                    src={ourChoice.logo || "/placeholder.svg"}
                    alt={`Logo ${ourChoice.name} - Site licencié ANJ`}
                    className="w-[140px] h-[86px] lg:w-[160px] lg:h-[96px] object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Bonus */}
                <div className="flex-1 text-center">
                  <div className="font-bold mb-1 text-xl text-orange-700">BONUS INFORMATIONS</div>
                  <p className="font-semibold leading-tight text-2xl text-orange-800">{ourChoice.bonus}</p>
                </div>

                {/* Rating */}
                <div className="text-center flex-shrink-0">
                  <div className="text-xl lg:text-2xl font-bold mb-1 text-orange-700">
                    {ourChoice.rating.toFixed(1)}
                    <span className="text-sm text-slate-500">/10</span>
                  </div>
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 stroke-[1.5px] ${
                          i < ourChoice.stars ? "text-yellow-500 fill-yellow-500" : "text-transparent stroke-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-slate-500 text-xs">
                    <span>({ourChoice.reviews} avis)</span>
                  </div>
                </div>

                {/* Button */}
                <div className="flex-shrink-0">
                  <span className="font-bold px-6 py-3 text-base border-2 flex items-center gap-2 shadow-lg transition-all hover:scale-105 bg-red-600 hover:bg-red-700 text-white font-bold border-orange-500">
                    VISITER SITE
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden pt-2">
                {/* Top row: Logo left, Bonus right */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 p-2 rounded-lg border-2 bg-white border-slate-300">
                    <img
                      src={ourChoice.logo || "/placeholder.svg"}
                      alt={`Logo ${ourChoice.name} - Site licencié ANJ`}
                      className="w-[120px] h-[72px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 text-center pl-4">
                    <div className="font-bold text-sm mb-1 text-orange-700">BONUS INFO</div>
                    <p className="font-semibold leading-tight text-lg text-orange-800">{ourChoice.bonus}</p>
                  </div>
                </div>

                {/* Rating - in one row */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-orange-700">
                      {ourChoice.rating.toFixed(1)}
                      <span className="text-sm text-slate-500">/10</span>
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 stroke-[1.5px] ${
                            i < ourChoice.stars
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-transparent stroke-slate-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm">
                    <span>({ourChoice.reviews} avis)</span>
                  </div>
                </div>

                {/* Button */}
                <span className="font-bold w-full py-3 border-2 flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105 bg-red-600 hover:bg-red-700 text-white font-bold border-orange-500">
                  VISITER SITE
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-4 pt-4 border-t border-slate-300 text-center">
              <p className="text-slate-700 text-xs leading-relaxed font-medium">
                <strong>18+ | Jeu responsable | Site licencié ANJ</strong> - Les paris peuvent être dangereux. Aide : 09
                74 75 13 13 - Ne pariez que ce que vous pouvez perdre
              </p>
            </div>
          </div>
        </Link>

        {/* Simple advantages */}
        <div className="mt-6 bg-slate-50 rounded-lg p-4">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-bold text-slate-800 text-sm mb-1">Sécurité</div>
              <div className="text-slate-600 text-xs">Licence ANJ vérifiée</div>
            </div>
            <div>
              <div className="font-bold text-slate-800 text-sm mb-1">Cotes</div>
              <div className="text-slate-600 text-xs">Très compétitives</div>
            </div>
            <div>
              <div className="font-bold text-slate-800 text-sm mb-1">Support</div>
              <div className="text-slate-600 text-xs">Service client français</div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-center">
          <p className="text-red-700 text-sm font-semibold">
            18+ • Jeu responsable • Les paris peuvent créer une dépendance
          </p>
        </div>
      </div>
    </section>
  )
}
