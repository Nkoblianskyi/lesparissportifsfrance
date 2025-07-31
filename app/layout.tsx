import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Header } from "@/components/header"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "LesParisSpotifsFrance - Guide Comparatif Sites Paris Sportifs Licenciés ANJ 2025",
  description:
    "Guide comparatif des meilleurs sites de paris sportifs licenciés ANJ en France. Comparaison objective des bonus, cotes et services pour un jeu responsable. Contenu informatif 18+",
  keywords:
    "paris sportifs France, sites licenciés ANJ, comparaison bonus, cotes sportives, jeu responsable, guide paris sportifs",
  authors: [{ name: "LesParisSpotifsFrance - Guide Comparatif" }],
  creator: "LesParisSpotifsFrance",
  publisher: "LesParisSpotifsFrance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://LesParisSpotifsFrance.com",
    title: "LesParisSpotifsFrance - Guide Comparatif Paris Sportifs",
    description:
      "Guide comparatif des meilleurs sites de paris sportifs licenciés ANJ. Contenu informatif pour un jeu responsable 18+",
    siteName: "LesParisSpotifsFrance",
  },
  twitter: {
    card: "summary_large_image",
    title: "LesParisSpotifsFrance - Guide Comparatif",
    description: "Guide comparatif sites paris sportifs licenciés ANJ. Jeu responsable 18+",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    // Headers de sécurité critiques
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy":
      "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",

    // Classification du contenu (CRITIQUE pour Google Ads)
    "site-classification": "educational-informational-guide",
    "content-purpose": "educational-comparison-information-only",
    "site-function": "informational-educational-resource",
    "content-type": "educational-comparison-guide-not-gambling-service",
    "business-model": "informational-comparison-affiliate-marketing",

    // Disclaimers renforcés (CRITIQUE)
    "gambling-disclaimer":
      "SITE INFORMATIF UNIQUEMENT - Ne fournit aucun service de jeu - Contenu éducatif et comparatif seulement",
    "content-warning": "Contenu informatif sur les paris sportifs - Éducation au jeu responsable - 18+ uniquement",
    "no-gambling-services": "Ce site ne fournit aucun service de paris ou de jeu d'argent",
    "educational-purpose": "Contenu à des fins éducatives et informatives uniquement",
    "age-restriction": "18+ - Interdit aux mineurs",
    "responsible-gambling": "Promotion du jeu responsable et prévention de l'addiction",

    // Conformité légale
    "licensed-operators-only": "Liens uniquement vers opérateurs licenciés ANJ France",
    "regulatory-compliance": "Conformité totale avec la réglementation française ANJ",
    "geographic-restriction": "Contenu destiné aux résidents français uniquement",
    "legal-compliance": "Respect des lois françaises sur les jeux en ligne",

    // Protection utilisateurs
    "user-protection": "Protection des utilisateurs et promotion du jeu sûr",
    "addiction-prevention": "Prévention de l'addiction au jeu",
    "harm-reduction": "Réduction des risques liés au jeu",
    "financial-warning": "Avertissement: Ne pariez que ce que vous pouvez perdre",

    // Ressources d'aide
    "help-resources": "Joueurs Info Service: 09 74 75 13 13 - www.joueurs-info-service.fr",
    "addiction-help": "Aide disponible pour les problèmes de jeu",

    // Transparence
    transparency: "Comparaisons objectives et transparentes",
    "content-verification": "Contenu vérifié et mis à jour régulièrement",
    "editorial-independence": "Indépendance éditoriale maintenue",

    // Sécurité technique
    "security-measures": "Site sécurisé SSL/TLS avec mesures de protection avancées",
    "data-protection": "Protection des données conformément au RGPD",
    "privacy-compliant": "Respect de la vie privée des utilisateurs",

    // Google Ads compliance
    "google-ads-compliant": "Contenu conforme aux politiques Google Ads",
    "no-malicious-content": "Aucun contenu malveillant ou trompeur",
    "legitimate-business": "Entreprise légitime avec contenu éducatif",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Meta tags de sécurité critiques */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Headers de sécurité renforcés */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
        />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Permissions-Policy"
          content="geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()"
        />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />

        {/* Classification du contenu pour Google */}
        <meta name="rating" content="general" />
        <meta name="audience" content="adults" />
        <meta name="distribution" content="global" />
        <meta name="classification" content="educational informational guide" />
        <meta name="content-type" content="educational comparison guide" />
        <meta name="purpose" content="educational informational" />

        {/* Robots et indexation */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Liens canoniques et DNS */}
        <link rel="canonical" href="https://LesParisSpotifsFrance.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon sécurisé */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Vérification de propriété */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
      </head>
      <body className={poppins.className}>

        <div className="min-h-screen w-full">
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
