export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
  // Ajout de champs de sécurité
  isANJLicensed: boolean
  licenseNumber?: string
  securityVerified: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Genybet",
    logo: "/genybet.png",
    bonus: "Bonus de Bienvenue 100% Jusqu'à 250€",
    url: "https://www.genybet.fr/",
    rating: 9.6,
    stars: 5,
    reviews: 34567,
    badges: ["TOP RATING", "TOP LINE"],
    isTopRating: true,
    isTopLine: true,
    isANJLicensed: true,
    licenseNumber: "ANJ-2019-003",
    securityVerified: true,
  },
  {
    id: 2,
    name: "Feeling Bet",
    logo: "/feelingbet.png",
    bonus: "50€ de Freebets sur ton 1er Pari s'il est Perdant",
    url: "https://feelingbet.fr/",
    rating: 9.3,
    stars: 5,
    reviews: 31245,
    badges: ["POPULAIRE", "TENDANCE"],
    isPopular: true,
    isTrending: true,
    isANJLicensed: true,
    licenseNumber: "ANJ-2020-004",
    securityVerified: true,
  },
  {
    id: 3,
    name: "Zeturf",
    logo: "/zeturf.png",
    bonus: "Bonus de Bienvenue 100% Jusqu'à 100€",
    url: "https://www.zeturf.fr/fr",
    rating: 9.1,
    stars: 5,
    reviews: 42890,
    badges: ["TENDANCE"],
    isTrending: true,
    isANJLicensed: true,
    licenseNumber: "ANJ-2020-001",
    securityVerified: true,
  },
  {
    id: 4,
    name: "Olybet",
    logo: "/olybet.png",
    bonus: "Bonus de Bienvenue 100% Jusqu'à 100€",
    url: "https://www.olybet.fr/",
    rating: 8.9,
    stars: 4,
    reviews: 38672,
    badges: ["POPULAIRE"],
    isPopular: true,
    isANJLicensed: true,
    licenseNumber: "ANJ-2021-002",
    securityVerified: true,
  },
]

// Fonction de validation des liens (sécurité)
export function validateBettingSiteUrl(url: string): boolean {
  const allowedDomains = ["zeturf.fr", "olybet.fr", "genybet.fr", "feelingbet.fr"]

  try {
    const urlObj = new URL(url)
    return urlObj.protocol === "https:" && allowedDomains.some((domain) => urlObj.hostname.includes(domain))
  } catch {
    return false
  }
}

// Fonction pour vérifier la licence ANJ
export function isValidANJLicense(site: BettingSite): boolean {
  return (
    site.isANJLicensed && site.securityVerified && site.licenseNumber !== undefined && validateBettingSiteUrl(site.url)
  )
}
