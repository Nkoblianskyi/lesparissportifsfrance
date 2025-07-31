
export default function PolitiqueCookiesPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 bg-slate-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-slate-800">Politique des Cookies</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-slate-600 text-sm mb-6">
              <strong>Dernière révision :</strong> 28 janvier 2025
            </p>

            <div className="text-slate-700 space-y-6">
              <p>
                Ce document présente la manière dont LesParisSpotifsFrance.com utilise les cookies et technologies
                apparentées pour optimiser votre expérience de navigation sur notre guide comparatif et vous proposer
                des services personnalisés.
              </p>
            </div>
          </div>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">1. Définition et Fonctionnement des Cookies</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Un cookie constitue un petit fichier de données textuelles déposé sur votre terminal (ordinateur,
                tablette, smartphone) lors de la consultation d'un site internet. Ces fichiers permettent au site de
                reconnaître votre navigateur et de mémoriser certaines informations concernant votre visite.
              </p>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Classification des Cookies</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Cookies temporaires :</strong> Automatiquement supprimés à la fermeture de votre navigateur
                  </li>
                  <li>
                    <strong>Cookies permanents :</strong> Conservés sur votre appareil jusqu'à leur date d'expiration
                  </li>
                  <li>
                    <strong>Cookies propriétaires :</strong> Directement émis par notre domaine
                  </li>
                  <li>
                    <strong>Cookies tiers :</strong> Déposés par des services externes intégrés à notre site
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">2. Inventaire des Cookies Utilisés</h2>
            <div className="text-slate-700 space-y-6">
              <div className="border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-green-600 mb-3">Cookies Techniques Indispensables</h3>
                <p className="text-sm mb-3">
                  Ces cookies sont essentiels au bon fonctionnement de notre plateforme et ne peuvent être désactivés.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="text-left p-2">Identifiant</th>
                        <th className="text-left p-2">Fonction</th>
                        <th className="text-left p-2">Durée de vie</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2 font-mono">cookieConsent</td>
                        <td className="p-2">Sauvegarde de vos choix concernant les cookies</td>
                        <td className="p-2">12 mois</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2 font-mono">sessionToken</td>
                        <td className="p-2">Maintien de votre session de navigation active</td>
                        <td className="p-2">Session uniquement</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2 font-mono">securityCheck</td>
                        <td className="p-2">Protection contre les attaques automatisées</td>
                        <td className="p-2">24 heures</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-blue-600 mb-3">Cookies d'Analyse d'Audience</h3>
                <p className="text-sm mb-3">
                  Ces traceurs nous permettent de comprendre l'utilisation de notre site et d'améliorer nos services.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="text-left p-2">Service</th>
                        <th className="text-left p-2">Objectif</th>
                        <th className="text-left p-2">Conservation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">Google Analytics 4</td>
                        <td className="p-2">Mesure d'audience et analyse comportementale</td>
                        <td className="p-2">26 mois</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Hotjar</td>
                        <td className="p-2">Enregistrement des parcours utilisateurs</td>
                        <td className="p-2">12 mois</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Microsoft Clarity</td>
                        <td className="p-2">Analyse des interactions et cartes de chaleur</td>
                        <td className="p-2">13 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-orange-600 mb-3">Cookies de Personnalisation</h3>
                <p className="text-sm mb-3">
                  Ces cookies mémorisent vos préférences pour adapter l'affichage à vos besoins.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-orange-50">
                      <tr>
                        <th className="text-left p-2">Nom</th>
                        <th className="text-left p-2">Utilité</th>
                        <th className="text-left p-2">Expiration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2 font-mono">displayPrefs</td>
                        <td className="p-2">Mémorisation de vos préférences d'affichage</td>
                        <td className="p-2">6 mois</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2 font-mono">themeChoice</td>
                        <td className="p-2">Sauvegarde du thème visuel sélectionné</td>
                        <td className="p-2">12 mois</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2 font-mono">regionSettings</td>
                        <td className="p-2">Adaptation du contenu selon votre région</td>
                        <td className="p-2">6 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-purple-600 mb-3">Cookies Publicitaires</h3>
                <p className="text-sm mb-3">
                  Ces traceurs permettent l'affichage de publicités adaptées à vos centres d'intérêt.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-purple-50">
                      <tr>
                        <th className="text-left p-2">Plateforme</th>
                        <th className="text-left p-2">Finalité</th>
                        <th className="text-left p-2">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">Google Ads</td>
                        <td className="p-2">Diffusion de publicités ciblées et mesure de performance</td>
                        <td className="p-2">24 mois</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Facebook Pixel</td>
                        <td className="p-2">Suivi des conversions et optimisation publicitaire</td>
                        <td className="p-2">90 jours</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">LinkedIn Insight</td>
                        <td className="p-2">Analyse de l'efficacité des campagnes professionnelles</td>
                        <td className="p-2">180 jours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">3. Contrôle de Vos Préférences</h2>
            <div className="text-slate-700 space-y-4">
              <h3 className="text-lg font-semibold">Interface de Gestion Intégrée</h3>
              <p>
                Lors de votre première visite, un bandeau d'information vous propose de paramétrer vos préférences
                concernant les différentes catégories de cookies. Vous pouvez à tout moment modifier ces choix en
                utilisant le lien "Paramétrer les cookies" disponible en pied de page.
              </p>

              <h3 className="text-lg font-semibold">Configuration via Votre Navigateur</h3>
              <p>
                Vous avez également la possibilité de contrôler les cookies directement depuis les paramètres de votre
                navigateur internet :
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Google Chrome</h4>
                  <p className="text-sm">Menu → Paramètres → Confidentialité et sécurité → Cookies et autres données</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mozilla Firefox</h4>
                  <p className="text-sm">Menu → Paramètres → Vie privée et sécurité → Cookies et données de sites</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Safari</h4>
                  <p className="text-sm">Safari → Préférences → Confidentialité → Gérer les données de sites web</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Microsoft Edge</h4>
                  <p className="text-sm">Menu → Paramètres → Cookies et autorisations de site → Gérer et supprimer</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">4. Impact du Refus des Cookies</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Le refus de certaines catégories de cookies peut affecter votre expérience de navigation sur notre
                plateforme :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Cookies d'analyse :</strong> Limitation de notre capacité à améliorer le site selon les usages
                  constatés
                </li>
                <li>
                  <strong>Cookies de personnalisation :</strong> Perte de la mémorisation de vos préférences d'affichage
                </li>
                <li>
                  <strong>Cookies publicitaires :</strong> Affichage de publicités moins pertinentes par rapport à vos
                  centres d'intérêt
                </li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Important :</strong> Les cookies techniques indispensables ne peuvent être désactivés car ils
                  garantissent le fonctionnement de base de notre site internet.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">5. Cookies des Sites Partenaires</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Lorsque vous cliquez sur les liens menant vers nos sites partenaires (plateformes de paris sportifs
                licenciées), ces derniers peuvent déposer leurs propres cookies sur votre terminal. Ces cookies
                échappent à notre contrôle et sont régis par les politiques de confidentialité respectives de chaque
                partenaire.
              </p>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Principaux Partenaires Référencés</h4>
                <ul className="text-sm space-y-1">
                  <li>• Zeturf - Consultez leur politique de gestion des cookies</li>
                  <li>• Olybet - Référez-vous à leur charte de confidentialité</li>
                  <li>• Genybet - Prenez connaissance de leurs conditions d'utilisation</li>
                  <li>• Feeling Bet - Consultez leur politique de protection des données</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">6. Sécurisation des Cookies</h2>
            <div className="text-slate-700 space-y-3">
              <p>Nous appliquons des mesures de sécurité strictes concernant l'utilisation des cookies :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chiffrement systématique des échanges via le protocole HTTPS</li>
                <li>Attribution des flags "Secure" et "HttpOnly" aux cookies sensibles</li>
                <li>Limitation de la durée de vie de tous les cookies déposés</li>
                <li>Interdiction de stockage d'informations confidentielles dans les cookies</li>
                <li>Contrôles réguliers de conformité avec les standards de sécurité</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">7. Évolutions de cette Politique</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Cette politique relative aux cookies peut être modifiée à tout moment pour s'adapter aux évolutions
                technologiques, réglementaires ou de nos pratiques. Les changements significatifs feront l'objet d'une
                information préalable via une notification visible sur notre site internet.
              </p>
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Nous Contacter</h2>
            <div className="text-slate-700 space-y-3">
              <p>Pour toute question concernant notre utilisation des cookies ou pour exercer vos droits :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Adresse électronique : cookies@LesParisSpotifsFrance.com</li>
                <li>Objet du message : "Demande relative aux cookies"</li>
              </ul>
            </div>
          </section>

          <div className="text-center mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">
              <strong>Avertissement Jeu Responsable :</strong> Les paris sportifs sont exclusivement réservés aux
              personnes majeures. Pratiquez avec modération. Aide disponible au 09 74 75 13 13.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
