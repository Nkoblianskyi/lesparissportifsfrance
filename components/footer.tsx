import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-800 w-full">
      {/* Main footer section */}
      <div className="w-full px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <h2 className="text-2xl font-bold text-white">LesParisSpotifsFrance</h2>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Guide comparatif indépendant des meilleurs sites de paris sportifs licenciés ANJ en France
            </p>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Navigation */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/a-propos" className="text-slate-300 hover:text-white transition-colors">
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link href="/politique-confidentialite" className="text-slate-300 hover:text-white transition-colors">
                    Politique de Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/politique-cookies" className="text-slate-300 hover:text-white transition-colors">
                    Gestion des Cookies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Responsible gaming */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Jeu Responsable</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">Ligne d'Aide</p>
                  <p className="text-2xl font-bold text-white">09 74 75 13 13</p>
                  <p className="text-slate-400 text-sm">Gratuit - 7j/7 de 8h à 2h</p>
                </div>
                <div>
                  <a
                    href="https://www.joueurs-info-service.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white"
                  >
                    joueurs-info-service.fr
                  </a>
                </div>
              </div>
            </div>

            {/* Age restriction */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Avertissement</h3>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-4">
                  <span className="text-white font-bold text-xl">18+</span>
                </div>
                <p className="text-white font-semibold mb-2">INTERDIT AUX MINEURS</p>
                <p className="text-slate-300 text-sm">Accès réservé aux personnes majeures</p>
              </div>
            </div>
          </div>

          {/* Security features */}
          <div className="border-t border-slate-700 pt-8 mb-8">
            <h4 className="text-lg font-bold text-white mb-6 text-center">Sécurité & Conformité</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="text-slate-300">
                <p className="font-semibold text-white mb-1">Licences ANJ</p>
                <p className="text-sm">Sites vérifiés</p>
              </div>
              <div className="text-slate-300">
                <p className="font-semibold text-white mb-1">SSL Sécurisé</p>
                <p className="text-sm">Données protégées</p>
              </div>
              <div className="text-slate-300">
                <p className="font-semibold text-white mb-1">RGPD</p>
                <p className="text-sm">Conformité totale</p>
              </div>
              <div className="text-slate-300">
                <p className="font-semibold text-white mb-1">Indépendant</p>
                <p className="text-sm">Analyses objectives</p>
              </div>
              <div className="text-slate-300">
                <p className="font-semibold text-white mb-1">Actualisé</p>
                <p className="text-sm">Mise à jour mensuelle</p>
              </div>
            </div>
          </div>

          {/* Regulatory organizations */}
          <div className="border-t border-slate-700 pt-8 mb-8">
            <h4 className="text-lg font-bold text-white mb-6 text-center">Organismes de Régulation</h4>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { href: "https://anj.fr", src: "/logo-anj.svg", alt: "ANJ" },
                {
                  href: "https://www.joueurs-info-service.fr",
                  src: "/jouers-info-service.png",
                  alt: "Joueurs Info Service",
                },
                { href: "https://www.gambleaware.org", src: "/gamble.webp", alt: "GambleAware" },
                { href: "https://www.gamcare.org.uk", src: "/gamecare.svg", alt: "GamCare" },
                { href: "https://www.sos-joueurs.org", src: "/logo-sos-joueurs.svg", alt: "SOS Joueurs" },
                { src: "/icn-ssl.svg", alt: "SSL" },
              ].map((org, index) => (
                <div key={index} className=" rounded p-2 hover:bg-gray-100 transition-colors">
                  {org.href ? (
                    <Link href={org.href} target="_blank" rel="noopener noreferrer">
                      <img src={org.src || "/placeholder.svg"} alt={org.alt} className="h-8 w-auto object-contain" />
                    </Link>
                  ) : (
                    <img src={org.src || "/placeholder.svg"} alt={org.alt} className="h-8 w-auto object-contain" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final warning */}
          <div className="border-t border-slate-700 pt-8">
            <div className="text-center">
              <h4 className="text-lg font-bold text-white mb-4">Avertissement Important</h4>
              <p className="text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                Les paris sportifs comportent des risques financiers et peuvent créer une dépendance. Ne pariez que ce
                que vous pouvez vous permettre de perdre. Fixez-vous des limites de temps et d'argent. Si vous ressentez
                une perte de contrôle, contactez immédiatement les services d'aide spécialisés.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="text-slate-400">
                  <p className="font-semibold text-white mb-1">Risques</p>
                  <p>Pertes financières, addiction possible</p>
                </div>
                <div className="text-slate-400">
                  <p className="font-semibold text-white mb-1">Âge minimum</p>
                  <p>Strictement interdit aux moins de 18 ans</p>
                </div>
                <div className="text-slate-400">
                  <p className="font-semibold text-white mb-1">Aide</p>
                  <p>Support gratuit et confidentiel disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 bg-slate-900 w-full">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2025 LesParisSpotifsFrance.com - Tous droits réservés</p>
            <p className="mt-2 md:mt-0">Guide comparatif indépendant - Jeu responsable 18+</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
