export function InfoSections() {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* Section principale d'évaluation */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-4">Notre Méthodologie d'Évaluation Complète</h3>
            <p className="text-slate-200 text-center max-w-4xl mx-auto text-lg leading-relaxed">
              ParisSportifsLesFrance s'appuie sur une méthodologie rigoureuse et transparente développée par nos experts
              pour analyser et comparer objectivement chaque plateforme de paris sportifs disponible sur le marché
              français. Notre processus d'évaluation garantit une analyse impartiale et détaillée de tous les aspects
              critiques qui influencent l'expérience utilisateur et la sécurité des parieurs.
            </p>
          </div>

          <div className="p-8">
            <div className="text-center mb-12">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-6">
                Chaque site de notre comparatif fait l'objet d'une analyse approfondie selon cinq axes principaux,
                pondérés en fonction de leur importance pour la sécurité et la satisfaction des utilisateurs. Cette
                approche systématique nous permet de fournir des recommandations fiables et actualisées, basées sur des
                critères objectifs et mesurables plutôt que sur des impressions subjectives.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Notre équipe d'analystes effectue des tests réguliers sur chaque plateforme, vérifie la conformité
                réglementaire en temps réel, et surveille l'évolution des offres commerciales pour maintenir la
                pertinence de nos évaluations. Cette vigilance constante garantit que nos recommandations reflètent
                fidèlement la réalité du marché à tout moment.
              </p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-slate-600 bg-white rounded-r-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold text-slate-800 mb-4">Conformité Réglementaire et Sécurité</h4>
                <div className="text-slate-700 space-y-3 leading-relaxed">
                  <p>
                    La vérification de la licence ANJ constitue notre premier critère d'évaluation. Nous contrôlons
                    systématiquement la validité de chaque autorisation, vérifions l'absence de sanctions ou
                    d'avertissements, et nous assurons que l'opérateur respecte scrupuleusement la réglementation
                    française.
                  </p>
                  <p>
                    Notre analyse technique inclut l'évaluation des protocoles de sécurité, la vérification du
                    chiffrement SSL, l'examen des mesures de protection des données personnelles, et le contrôle de la
                    conformité RGPD. Nous testons également les procédures de vérification d'identité et les systèmes de
                    prévention de la fraude.
                  </p>
                  <p>
                    La transparence financière fait également l'objet d'une attention particulière : nous vérifions la
                    ségrégation des fonds des joueurs, les garanties bancaires, et la clarté des conditions générales
                    concernant les dépôts et retraits.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-slate-600 bg-white rounded-r-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold text-slate-800 mb-4">Analyse des Offres Promotionnelles</h4>
                <div className="text-slate-700 space-y-3 leading-relaxed">
                  <p>
                    L'évaluation des bonus dépasse la simple lecture des montants annoncés. Nous décortiquons
                    minutieusement les conditions générales, calculons la valeur réelle des offres en tenant compte des
                    exigences de mise, et analysons la faisabilité pratique de débloquer les bonus.
                  </p>
                  <p>
                    Notre analyse porte sur la diversité des promotions proposées, leur renouvellement, la clarté des
                    conditions d'attribution, et la facilité de compréhension pour l'utilisateur moyen. Nous évaluons
                    également l'équité des termes et conditions, en identifiant les clauses potentiellement défavorables
                    aux joueurs.
                  </p>
                  <p>
                    Les programmes de fidélité, cashback, et autres avantages récurrents sont également pris en compte
                    dans notre évaluation globale. Nous mesurons la valeur à long terme de ces programmes pour
                    déterminer leur attractivité réelle au-delà de l'offre de bienvenue.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-slate-600 bg-white rounded-r-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold text-slate-800 mb-4">Compétitivité des Cotes et Marchés</h4>
                <div className="text-slate-700 space-y-3 leading-relaxed">
                  <p>
                    Notre surveillance quotidienne des cotes porte sur un échantillon représentatif d'événements
                    sportifs majeurs. Nous comparons systématiquement les cotes proposées par chaque opérateur sur les
                    marchés les plus populaires pour mesurer leur compétitivité relative.
                  </p>
                  <p>
                    L'analyse de la profondeur des marchés constitue un aspect crucial de notre évaluation. Nous
                    examinons la variété des sports couverts, le nombre de marchés disponibles par événement, et la
                    rapidité de mise à jour des cotes en fonction de l'évolution des rencontres.
                  </p>
                  <p>
                    La marge opérateur est calculée précisément pour chaque bookmaker, permettant d'identifier les
                    plateformes offrant le meilleur rapport qualité-prix aux parieurs. Nous analysons également les
                    limites de mise et les politiques de restriction de comptes pour évaluer l'accessibilité réelle des
                    meilleures cotes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-8 border border-slate-200 mb-8">
              <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Processus d'Évaluation en Cinq Étapes
              </h4>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-2">Audit Réglementaire et Sécuritaire</h5>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Vérification approfondie de la licence ANJ, contrôle du statut réglementaire, analyse des mesures
                      de sécurité technique, évaluation de la protection des données, et examen de la conformité RGPD.
                      Cette étape inclut également la vérification des certifications de sécurité, l'analyse des
                      protocoles de chiffrement, et l'évaluation des partenariats avec les organismes de régulation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-2">Analyse Commerciale Détaillée</h5>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Décryptage complet des offres promotionnelles, calcul de la valeur réelle des bonus, analyse des
                      conditions de mise et de retrait, évaluation de la transparence des termes et conditions. Nous
                      testons également les procédures d'activation des bonus et mesurons la facilité de compréhension
                      des offres pour l'utilisateur moyen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-2">Évaluation Technique des Cotes</h5>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Surveillance continue des cotes sur un panel d'événements représentatifs, calcul des marges
                      opérateur, analyse de la compétitivité relative, évaluation de la profondeur des marchés et de la
                      rapidité de mise à jour. Cette analyse inclut également l'examen des limites de mise et des
                      politiques de gestion des comptes gagnants.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-2">Test d'Expérience Utilisateur</h5>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Évaluation complète de l'interface utilisateur sur desktop et mobile, test des fonctionnalités de
                      navigation, analyse de la rapidité de chargement, évaluation de l'intuitivité du processus de
                      pari. Nous testons également les procédures d'inscription, de dépôt, et de retrait pour mesurer la
                      fluidité de l'expérience globale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-2">Contrôle du Service Client et Support</h5>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Test des différents canaux de support client, évaluation des temps de réponse, analyse de la
                      qualité des réponses fournies, vérification de la disponibilité du support en français. Nous
                      évaluons également la documentation d'aide disponible, la clarté des FAQ, et la facilité de
                      résolution des problèmes courants.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 text-white rounded-xl p-8">
              <h4 className="text-xl font-bold mb-6 text-center">Notre Système de Notation Pondérée</h4>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h5 className="font-bold mb-4">Répartition des Critères d'Évaluation</h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Sécurité et Conformité Réglementaire</span>
                      <span className="font-bold text-slate-300">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Attractivité et Transparence des Offres</span>
                      <span className="font-bold text-slate-300">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Compétitivité des Cotes et Marchés</span>
                      <span className="font-bold text-slate-300">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Qualité de l'Expérience Utilisateur</span>
                      <span className="font-bold text-slate-300">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Efficacité du Service Client</span>
                      <span className="font-bold text-slate-300">5%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold mb-4">Échelle de Notation Détaillée</h5>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">Excellent</span>
                        <span className="text-slate-300">9.0 - 10.0</span>
                      </div>
                      <p className="text-xs text-slate-400">Plateforme exemplaire sur tous les critères</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">Très Bon</span>
                        <span className="text-slate-300">7.5 - 8.9</span>
                      </div>
                      <p className="text-xs text-slate-400">Très bonne qualité avec quelques améliorations possibles</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">Bon</span>
                        <span className="text-slate-300">6.0 - 7.4</span>
                      </div>
                      <p className="text-xs text-slate-400">Qualité satisfaisante mais perfectible</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">Moyen</span>
                        <span className="text-slate-300">4.0 - 5.9</span>
                      </div>
                      <p className="text-xs text-slate-400">Qualité acceptable avec des lacunes notables</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">Insuffisant</span>
                        <span className="text-slate-300">1.0 - 3.9</span>
                      </div>
                      <p className="text-xs text-slate-400">Qualité insuffisante, non recommandé</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-slate-300 leading-relaxed">
                  Cette pondération reflète l'importance relative de chaque critère pour la sécurité et la satisfaction
                  des utilisateurs. La sécurité et la conformité réglementaire représentent plus du tiers de la note
                  finale, soulignant notre engagement prioritaire envers la protection des parieurs français.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-600 text-white rounded-xl p-6 text-center">
              <p className="text-lg font-medium leading-relaxed">
                Notre méthodologie d'évaluation est régulièrement mise à jour pour s'adapter aux évolutions du marché et
                de la réglementation. Chaque site fait l'objet d'une réévaluation mensuelle complète, garantissant la
                pertinence et l'actualité de nos recommandations. Cette approche rigoureuse et transparente nous permet
                de maintenir notre position de référence dans l'analyse comparative des sites de paris sportifs en
                France.
              </p>
            </div>
          </div>
        </div>

        {/* Section Jeu Responsable */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-slate-700 p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-4">Engagement pour le Jeu Responsable</h3>
            <p className="text-slate-200 text-center text-lg leading-relaxed max-w-4xl mx-auto">
              La promotion du jeu responsable constitue une priorité absolue dans notre mission d'information et de
              comparaison. Nous considérons que notre responsabilité dépasse la simple analyse technique des plateformes
              pour inclure la sensibilisation aux risques et la promotion de pratiques saines dans l'univers des paris
              sportifs.
            </p>
          </div>

          <div className="p-8">
            <div className="bg-slate-100 border-l-4 border-slate-600 rounded-r-lg p-6 mb-8">
              <h4 className="text-slate-800 font-bold text-xl mb-4">Avertissement Fondamental sur les Risques</h4>
              <div className="text-slate-700 space-y-4 leading-relaxed">
                <p>
                  Les paris sportifs, bien qu'ils puissent constituer un divertissement légitime pour les adultes,
                  comportent des risques financiers et psychologiques significatifs qui ne doivent jamais être
                  sous-estimés. La nature même du pari implique la possibilité de pertes financières, et aucune
                  stratégie ne peut garantir des gains réguliers ou éliminer le risque de perte.
                </p>
                <p>
                  Il est essentiel de comprendre que les opérateurs de paris sportifs sont des entreprises commerciales
                  dont le modèle économique repose sur l'avantage mathématique intégré dans leurs cotes. À long terme,
                  la majorité des parieurs subissent des pertes nettes, ce qui souligne l'importance de considérer les
                  paris comme un coût de divertissement plutôt que comme un moyen de générer des revenus.
                </p>
                <p>
                  Les risques dépassent le simple aspect financier et peuvent inclure le développement de comportements
                  compulsifs, l'impact sur les relations familiales et sociales, ainsi que des conséquences sur la santé
                  mentale. La reconnaissance précoce de ces signaux d'alarme est cruciale pour prévenir l'escalade vers
                  des problèmes plus graves.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="text-slate-800 font-bold text-lg mb-4">Principes d'une Pratique Responsable</h4>
                <div className="text-sm text-slate-700 space-y-4 leading-relaxed">
                  <div>
                    <h5 className="font-semibold mb-2">Établissement d'un Budget Strict</h5>
                    <p>
                      Définissez à l'avance un montant que vous pouvez vous permettre de perdre sans impact sur votre
                      situation financière ou votre qualité de vie. Ce budget doit être considéré comme une dépense de
                      loisir, au même titre qu'une sortie au cinéma ou au restaurant, et ne doit jamais être dépassé
                      sous aucun prétexte.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Gestion Rigoureuse du Temps</h5>
                    <p>
                      Fixez des limites temporelles claires pour vos sessions de paris et respectez-les scrupuleusement.
                      L'utilisation d'alarmes ou de rappels peut vous aider à maintenir le contrôle. Évitez de parier de
                      manière impulsive ou sous l'influence d'émotions fortes, qu'elles soient positives ou négatives.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Maintien de la Perspective</h5>
                    <p>
                      Gardez toujours à l'esprit que les paris sportifs doivent rester un divertissement occasionnel et
                      non une activité centrale de votre vie. Maintenez un équilibre sain avec d'autres loisirs et
                      activités sociales, et ne laissez jamais les paris interférer avec vos obligations
                      professionnelles, familiales ou personnelles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="text-slate-800 font-bold text-lg mb-4">Signaux d'Alerte à Surveiller</h4>
                <div className="text-sm text-slate-700 space-y-4 leading-relaxed">
                  <div>
                    <h5 className="font-semibold mb-2">Indicateurs Comportementaux</h5>
                    <p>
                      Soyez attentif aux changements dans vos habitudes de pari : augmentation progressive des mises,
                      fréquence accrue des sessions, tentatives de récupération des pertes par des paris plus
                      importants, ou préoccupation constante concernant les résultats sportifs. Ces comportements
                      peuvent signaler le développement d'une dépendance.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Impact Social et Familial</h5>
                    <p>
                      Prêtez attention aux réactions de votre entourage concernant vos habitudes de pari. La
                      dissimulation de vos activités de paris, les mensonges concernant les montants engagés, ou les
                      conflits familiaux liés aux paris constituent des signaux d'alarme sérieux qui nécessitent une
                      prise de conscience immédiate.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Conséquences Financières</h5>
                    <p>
                      Surveillez l'impact de vos paris sur votre situation financière globale. Si vous commencez à
                      emprunter de l'argent pour parier, à négliger des factures importantes, ou à puiser dans vos
                      économies destinées à d'autres projets, il est impératif de chercher de l'aide professionnelle
                      immédiatement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-600 rounded-xl p-8 text-white mb-8">
              <h4 className="text-xl font-bold mb-6 text-center">Ressources d'Aide et d'Accompagnement</h4>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <h5 className="font-bold text-lg mb-3">Joueurs Info Service</h5>
                  <p className="text-2xl font-bold mb-2">09 74 75 13 13</p>
                  <p className="text-slate-300 text-sm mb-3">Appel gratuit depuis la France</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Service d'écoute, d'information et d'orientation disponible 7 jours sur 7, de 8h à 2h du matin.
                    Équipe de professionnels spécialisés dans l'accompagnement des joueurs et de leurs proches.
                  </p>
                </div>

                <div className="text-center">
                  <h5 className="font-bold text-lg mb-3">Plateforme en Ligne</h5>
                  <p className="text-xl font-bold mb-2">joueurs-info-service.fr</p>
                  <p className="text-slate-300 text-sm mb-3">Accessible 24h/24</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Site web complet proposant des outils d'auto-évaluation, des conseils pratiques, des témoignages, et
                    la possibilité d'échanger avec des conseillers via chat ou formulaire de contact sécurisé.
                  </p>
                </div>

                <div className="text-center">
                  <h5 className="font-bold text-lg mb-3">SOS Joueurs</h5>
                  <p className="text-xl font-bold mb-2">Association d'Aide</p>
                  <p className="text-slate-300 text-sm mb-3">Accompagnement personnalisé</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Association reconnue d'utilité publique proposant des groupes de parole, un accompagnement
                    individuel, et un soutien aux familles. Présence dans plusieurs régions françaises avec des antennes
                    locales.
                  </p>
                </div>
              </div>

              <div className="text-center border-t border-slate-500 pt-6">
                <p className="text-slate-300 leading-relaxed">
                  Ces services sont gratuits, confidentiels, et sans jugement. N'hésitez pas à les contacter dès les
                  premiers signes de préoccupation, que ce soit pour vous-même ou pour un proche. La demande d'aide
                  précoce facilite grandement la résolution des difficultés et prévient l'aggravation des problèmes.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 text-white rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-4">Rappel Réglementaire Important</h4>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Les paris sportifs sont strictement interdits aux personnes mineures. Cette interdiction vise à
                  protéger les jeunes des risques associés aux jeux d'argent pendant une période cruciale de leur
                  développement psychologique et de leur apprentissage de la gestion financière.
                </p>
                <p>
                  Tous les opérateurs licenciés ANJ sont tenus de mettre en place des procédures strictes de
                  vérification d'âge et d'identité. Ces contrôles, bien qu'ils puissent parfois sembler contraignants,
                  constituent une protection essentielle pour l'ensemble des utilisateurs et garantissent l'intégrité du
                  système de jeu régulé français.
                </p>
                <p className="font-semibold">
                  Rappelez-vous : les paris sportifs peuvent créer une dépendance. Jouez avec modération et n'hésitez
                  jamais à demander de l'aide en cas de besoin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
