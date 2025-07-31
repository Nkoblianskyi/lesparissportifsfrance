import { Header } from "@/components/header"

export default function AProposPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">À Propos de ParisSportifsLesFrance</h1>

        <div className="max-w-4xl mx-auto space-y-8 bg-slate-900/90 backdrop-blur-sm rounded-lg p-8">
          <div className="text-center mb-8">
            <p className="text-yellow-400 text-lg">Votre guide comparatif de confiance depuis 2024</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Notre Mission</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>
                ParisSportifsLesFrance est un guide comparatif indépendant spécialisé dans l'évaluation des meilleurs
                sites de paris sportifs licenciés ANJ en France. Notre mission est de fournir aux parieurs français des
                informations objectives, transparentes et régulièrement mises à jour pour les aider à faire des choix
                éclairés et responsables.
              </p>
              <p>
                Nous ne sommes pas un opérateur de jeux d'argent et ne proposons aucun service de paris. Notre rôle se
                limite exclusivement à l'information comparative et à la promotion du jeu responsable sur les
                plateformes légales disponibles sur le marché français.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Nos Critères d'Évaluation</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                <h4 className="text-red-300 font-bold mb-3">Critère Obligatoire N°1 : Licence ANJ</h4>
                <p className="text-sm">
                  <strong>Aucun site ne peut figurer dans notre comparatif sans une licence valide de l'ANJ</strong>
                  (Autorité Nationale des Jeux). Nous vérifions systématiquement le statut de chaque licence et excluons
                  immédiatement tout opérateur non autorisé en France.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold mb-3">Processus d'Évaluation en 5 Étapes :</h4>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h5 className="text-green-400 font-bold mb-2">1. Vérification Légale et Sécurité</h5>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Contrôle du numéro de licence ANJ sur le site officiel</li>
                    <li>• Vérification de la validité et de la date d'expiration</li>
                    <li>• Contrôle des éventuelles sanctions ou avertissements</li>
                    <li>• Test du cryptage SSL et sécurité des données</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h5 className="text-blue-400 font-bold mb-2">2. Analyse des Bonus et Promotions</h5>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Analyse détaillée des conditions générales</li>
                    <li>• Calcul de la valeur réelle des offres</li>
                    <li>• Vérification de l'équité des exigences de mise</li>
                    <li>• Contrôle de la transparence des promotions</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h5 className="text-yellow-400 font-bold mb-2">3. Évaluation des Cotes et Marchés</h5>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Comparaison des cotes sur événements majeurs</li>
                    <li>• Évaluation de la variété des marchés disponibles</li>
                    <li>• Test de la rapidité de mise à jour des cotes</li>
                    <li>• Analyse de la couverture des sports français</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h5 className="text-purple-400 font-bold mb-2">4. Test de l'Expérience Utilisateur</h5>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Test de l'interface web et mobile</li>
                    <li>• Évaluation de la qualité du service client</li>
                    <li>• Vérification des délais de paiement</li>
                    <li>• Test des fonctionnalités de jeu responsable</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h5 className="text-orange-400 font-bold mb-2">5. Contrôle du Jeu Responsable</h5>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Disponibilité des outils de limitation</li>
                    <li>• Facilité d'accès aux mesures d'auto-exclusion</li>
                    <li>• Qualité des informations sur les risques</li>
                    <li>• Partenariats avec des organismes d'aide</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Notre Système de Notation</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                Chaque site de paris reçoit une note globale de 1 à 10, calculée selon une pondération précise pour
                établir notre classement comparatif :
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-3">Pondération des Critères</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Sécurité & Licence</span>
                      <span className="text-green-400 font-bold">30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bonus & Promotions</span>
                      <span className="text-blue-400 font-bold">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cotes & Marchés</span>
                      <span className="text-yellow-400 font-bold">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ergonomie</span>
                      <span className="text-purple-400 font-bold">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service Client</span>
                      <span className="text-orange-400 font-bold">10%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-3">Échelle de Notation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">★★★★★</span>
                      <span>Excellent (9.0-10.0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">★★★★☆</span>
                      <span>Très Bon (7.0-8.9)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">★★★☆☆</span>
                      <span>Bon (5.0-6.9)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400">★★☆☆☆</span>
                      <span>Moyen (3.0-4.9)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">★☆☆☆☆</span>
                      <span>Insuffisant (1.0-2.9)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Fréquence des Mises à Jour</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-3">Suivi Continu</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    • <strong>Quotidien :</strong> Vérification des bonus et promotions
                  </li>
                  <li>
                    • <strong>Hebdomadaire :</strong> Contrôle des cotes sur événements majeurs
                  </li>
                  <li>
                    • <strong>Mensuel :</strong> Révision complète du classement
                  </li>
                  <li>
                    • <strong>Trimestriel :</strong> Audit complet de sécurité et conformité
                  </li>
                </ul>
              </div>

              <p>
                Notre équipe surveille en permanence l'évolution du marché français des paris sportifs. Tout changement
                significatif (nouveau bonus, modification des conditions, problème de sécurité) est immédiatement pris
                en compte dans nos évaluations et peut modifier notre classement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Indépendance et Transparence</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                <h4 className="text-green-300 font-bold mb-3">Notre Engagement d'Indépendance</h4>
                <ul className="text-sm space-y-2">
                  <li>• Nos évaluations ne sont influencées par aucun partenariat commercial</li>
                  <li>• Nous testons tous les sites selon les mêmes critères objectifs</li>
                  <li>• Aucun opérateur ne peut acheter une meilleure position dans notre classement</li>
                  <li>• Nous publions aussi bien les points forts que les faiblesses de chaque site</li>
                </ul>
              </div>

              <p>
                Notre modèle économique repose sur des partenariats transparents avec certains opérateurs, mais ces
                relations n'affectent jamais nos évaluations. Un site partenaire peut recevoir une note faible s'il ne
                répond pas à nos standards de qualité.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Engagement Jeu Responsable</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                <h4 className="text-red-300 font-bold mb-3">Notre Responsabilité</h4>
                <p className="text-sm">
                  En tant que guide comparatif de sites de paris, nous avons la responsabilité de promouvoir le jeu
                  responsable. Nous évaluons systématiquement les outils de protection proposés par chaque opérateur et
                  privilégions ceux qui offrent les meilleures mesures de prévention dans notre classement.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold">Critères Jeu Responsable Évalués :</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Disponibilité des limites de dépôt, de perte et de temps</li>
                  <li>• Facilité d'accès aux outils d'auto-exclusion</li>
                  <li>• Qualité des informations sur les risques du jeu</li>
                  <li>• Partenariats avec des organismes d'aide spécialisés</li>
                  <li>• Formation du personnel sur la détection des comportements à risque</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg mt-4">
                <p className="text-sm text-center font-semibold">
                  <strong>Rappel Important :</strong> Les paris sportifs doivent rester un divertissement. Si vous
                  ressentez une perte de contrôle, n'hésitez pas à contacter Joueurs Info Service au 09 74 75 13 13.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center mt-8 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
            <p className="text-blue-300 text-sm">
              ParisSportifsLesFrance s'engage à maintenir les plus hauts standards d'évaluation pour garantir la
              sécurité et la satisfaction des parieurs français. Notre travail contribue à un environnement de jeu plus
              sûr et plus transparent.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
