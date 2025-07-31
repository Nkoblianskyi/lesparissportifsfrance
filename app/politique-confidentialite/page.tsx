

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 bg-slate-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-slate-800">Politique de Confidentialité</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-slate-600 text-sm mb-6">
              <strong>Dernière révision :</strong> 28 janvier 2025
            </p>

            <div className="text-slate-700 space-y-6">
              <p>
                LesParisSpotifsFrance.com accorde une importance primordiale à la protection de vos données
                personnelles. Cette politique détaille nos pratiques concernant la collecte, l'utilisation et la
                protection de vos informations lors de votre navigation sur notre plateforme comparative.
              </p>
            </div>
          </div>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">1. Nature des Données Collectées</h2>
            <div className="text-slate-700 space-y-4">
              <h3 className="text-lg font-semibold">Informations Techniques Automatiques</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Identifiant de connexion (adresse IP) et géolocalisation approximative</li>
                <li>Caractéristiques techniques de votre équipement (navigateur, OS, résolution)</li>
                <li>Parcours de navigation et durée des sessions sur notre site</li>
                <li>Source de trafic et pages consultées</li>
                <li>Données de performance et d'interaction avec notre contenu</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Informations Communiquées Volontairement</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Coordonnées transmises via nos formulaires de contact</li>
                <li>Préférences personnalisées d'affichage et de navigation</li>
                <li>Retours d'expérience et suggestions d'amélioration</li>
                <li>Abonnements à nos communications informatives</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">2. Finalités du Traitement</h2>
            <div className="text-slate-700 space-y-3">
              <p>Vos données personnelles sont exploitées dans les objectifs suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Optimisation continue de l'ergonomie et des fonctionnalités de notre guide</li>
                <li>Analyse statistique du comportement des visiteurs pour améliorer nos services</li>
                <li>Personnalisation de l'expérience utilisateur selon vos centres d'intérêt</li>
                <li>Maintien de la sécurité de notre plateforme et détection d'activités suspectes</li>
                <li>Respect de nos obligations légales et réglementaires</li>
                <li>Traitement de vos demandes d'information et de support technique</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">3. Transmission à des Tiers</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Nous nous engageons fermement à ne jamais commercialiser vos données personnelles. Le partage
                d'informations se limite aux cas suivants :
              </p>

              <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Prestataires Techniques Essentiels</h4>
                  <p className="text-sm">
                    Services d'hébergement web, outils d'analyse d'audience, réseaux de diffusion de contenu (CDN)
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Partenaires Commerciaux Sélectionnés</h4>
                  <p className="text-sm">
                    Plateformes de paris sportifs licenciées ANJ (transmission uniquement lors de redirections
                    volontaires)
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Autorités Compétentes</h4>
                  <p className="text-sm">
                    Organismes officiels dans le cadre d'obligations légales ou de procédures judiciaires
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">4. Droits des Utilisateurs (RGPD)</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                En application du Règlement Général sur la Protection des Données, vous bénéficiez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Droit d'information :</strong> Obtenir des détails sur les traitements de vos données
                </li>
                <li>
                  <strong>Droit de rectification :</strong> Faire corriger des informations erronées ou incomplètes
                </li>
                <li>
                  <strong>Droit à l'effacement :</strong> Demander la suppression de vos données sous certaines
                  conditions
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré et lisible
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> Refuser certains traitements de vos données personnelles
                </li>
                <li>
                  <strong>Droit de limitation :</strong> Restreindre temporairement l'utilisation de vos données
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">5. Mesures de Sécurité</h2>
            <div className="text-slate-700 space-y-3">
              <p>Nous déployons des dispositifs techniques et organisationnels robustes pour sécuriser vos données :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chiffrement SSL/TLS pour toutes les communications entre votre navigateur et nos serveurs</li>
                <li>Contrôle d'accès strict aux données personnelles par notre équipe</li>
                <li>Sauvegardes automatisées et chiffrées de nos bases de données</li>
                <li>Surveillance continue de nos systèmes contre les tentatives d'intrusion</li>
                <li>Formation régulière de notre personnel aux bonnes pratiques de sécurité</li>
                <li>Audits de sécurité périodiques par des experts indépendants</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">6. Durées de Conservation</h2>
            <div className="text-slate-700 space-y-3">
              <p>Nous appliquons des durées de conservation proportionnées aux finalités de traitement :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Données de navigation :</strong> Conservation maximale de 25 mois
                </li>
                <li>
                  <strong>Cookies et traceurs :</strong> Durées variables selon leur nature (détaillées dans notre
                  politique cookies)
                </li>
                <li>
                  <strong>Informations de contact :</strong> Suppression automatique après 3 ans d'inactivité
                </li>
                <li>
                  <strong>Archives légales :</strong> Conservation selon les durées imposées par la réglementation
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">7. Transferts Internationaux</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Certains de nos sous-traitants techniques peuvent être établis en dehors de l'Union Européenne. Dans
                cette hypothèse, nous nous assurons que des garanties appropriées sont mises en place : clauses
                contractuelles types approuvées par la Commission européenne, certifications de conformité, ou décisions
                d'adéquation.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">8. Protection des Mineurs</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Notre plateforme s'adresse exclusivement à un public majeur (18 ans et plus). Nous ne collectons
                délibérément aucune donnée personnelle auprès de personnes mineures. Si vous êtes parent ou tuteur légal
                et suspectez qu'un mineur nous a transmis des informations personnelles, nous vous invitons à nous
                contacter immédiatement pour procéder à leur suppression.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">9. Évolutions de cette Politique</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Cette politique de confidentialité peut être amenée à évoluer pour refléter les changements dans nos
                pratiques ou pour se conformer à de nouvelles exigences légales. Les modifications substantielles feront
                l'objet d'une notification visible sur notre site internet. La date de dernière révision est
                systématiquement mise à jour en en-tête de ce document.
              </p>
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Nous Contacter</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits sur vos
                données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Adresse électronique : privacy@lesparissportifsfrance.com</li>
                <li>Courrier postal : LesParisSpotifsFrance - Responsable Protection des Données</li>
              </ul>
              <p className="text-sm mt-4">
                <strong>Délégué à la Protection des Données :</strong> Contactable à l'adresse
                dpo@lesparissportifsfrance.com
              </p>
            </div>
          </section>

          <div className="text-center mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-sm">
              <strong>Rappel Jeu Responsable :</strong> Les paris sportifs sont strictement réservés aux personnes
              majeures et peuvent entraîner une dépendance. Pratiquez avec modération.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
