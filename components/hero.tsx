"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [show18Modal, setShow18Modal] = useState(false)
  const [showRulesModal, setShowRulesModal] = useState(false)

  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <section className="w-full french-flag-bg h-[300px] flex items-center">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight">
              <span className="text-slate-800">MEILLEURS SITES</span>
              <br />
              <span className="text-slate-800">DE PARIS SPORTIFS</span>
              <br />
              <span className="text-slate-800">FRANCE 2025</span>
            </h1>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 md:p-4 max-w-4xl mx-auto shadow-lg">
              <div className="text-slate-600 mb-2 text-xs md:text-sm">Dernière mise à jour : {formattedDate}</div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3 md:mb-4">
                Découvrez notre sélection experte des meilleurs sites de paris sportifs licenciés ANJ en France.
                Comparaison détaillée des bonus, cotes, sécurité et services.
              </p>

              <div className="flex items-center justify-center gap-4 md:gap-6 text-xs md:text-sm">
                <div className="flex items-center space-x-2">
                  <img src="/flag.png" alt="France" className="w-6 h-4 md:w-8 md:h-6" />
                  <span className="text-slate-800 font-semibold">LICENCIÉ ANJ</span>
                </div>

                <button
                  onClick={() => setShow18Modal(true)}
                  className="text-red-600 font-bold hover:text-red-700 cursor-pointer"
                >
                  18+
                </button>

                <button
                  onClick={() => setShowRulesModal(true)}
                  className="text-slate-800 font-semibold hover:text-slate-900 cursor-pointer"
                >
                  RÈGLES
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal 18+ */}
      <Dialog open={show18Modal} onOpenChange={setShow18Modal}>
        <DialogContent className="max-w-md mx-4 bg-white text-black">
          <DialogHeader>
            <DialogTitle className="text-center text-red-600 text-lg md:text-xl font-bold">
              18+ Réservé aux Adultes
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-black text-sm md:text-base">
            <p>
              <strong>Limite d'âge :</strong> Vous devez avoir au moins 18 ans pour accéder aux informations sur les
              sites de paris sportifs licenciés en France.
            </p>

            <p>
              <strong>Jeu responsable :</strong> Les paris sportifs doivent être considérés comme un divertissement,
              jamais comme un moyen de gagner de l'argent. Ne pariez que les montants que vous pouvez vous permettre de
              perdre.
            </p>

            <p>
              <strong>Fixez des limites :</strong> Utilisez les outils proposés par les sites de paris pour définir des
              limites de dépôt, de perte et de temps de jeu.
            </p>

            <div className="p-4 rounded-lg border border-gray-200">
              <p className="font-semibold mb-2">Besoin d'aide ?</p>
              <p className="text-sm">Contactez ces organisations spécialisées :</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>Joueurs Info Service - 09 74 75 13 13</li>
                <li>www.joueurs-info-service.fr - Conseil gratuit et confidentiel</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => setShow18Modal(false)} className="w-full bg-gray-600 hover:bg-gray-700 text-white">
            Compris
          </Button>
        </DialogContent>
      </Dialog>

      {/* Modal Règles */}
      <Dialog open={showRulesModal} onOpenChange={setShowRulesModal}>
        <DialogContent className="max-w-2xl mx-4 max-h-[80vh] overflow-y-auto bg-white text-black">
          <DialogHeader>
            <DialogTitle className="text-center text-slate-800 text-lg md:text-xl font-bold">
              Règles et Conditions d'Utilisation
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-black text-sm md:text-base">
            <div>
              <h3 className="font-bold mb-2">Conditions Générales</h3>
              <p className="text-sm">
                Tous les sites de paris sportifs recommandés sur ParisSportifsLesFrance sont licenciés par l'ANJ
                (Autorité Nationale des Jeux) et respectent strictement la réglementation française en vigueur.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Conditions des Bonus</h3>
              <ul className="text-sm space-y-1">
                <li>Tous les bonus de bienvenue présentés ont des exigences de mise entre 1x et 10x</li>
                <li>Les bonus doivent être utilisés dans les délais impartis par chaque opérateur</li>
                <li>Consultez toujours les conditions complètes sur le site de l'opérateur</li>
                <li>Les conditions peuvent varier selon les promotions et les périodes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Retrait et Vérification</h3>
              <ul className="text-sm space-y-1">
                <li>Tous les gains sont versés après vérification d'identité réussie</li>
                <li>Les délais de retrait varient généralement entre 1 et 5 jours ouvrables</li>
                <li>Des documents d'identité peuvent être requis lors du premier retrait</li>
                <li>Chaque opérateur applique ses propres procédures de vérification</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Service Client</h3>
              <ul className="text-sm space-y-1">
                <li>Contactez directement le support du site pour les problèmes techniques</li>
                <li>Service client en français disponible sur tous les sites recommandés</li>
                <li>Support généralement disponible via chat en direct, email ou téléphone</li>
                <li>Les horaires de disponibilité varient selon les opérateurs</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold mb-2">Ressources Jeu Responsable</h3>
              <p className="text-sm mb-2">Si vous rencontrez des difficultés avec votre pratique du jeu :</p>
              <ul className="text-sm space-y-1">
                <li>Joueurs Info Service - Ligne d'écoute et chat en ligne</li>
                <li>www.joueurs-info-service.fr - Accompagnement professionnel gratuit</li>
                <li>ANJ.fr - Information officielle et réglementation</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => setShowRulesModal(false)} className="w-full bg-gray-800 hover:bg-gray-900 text-white">
            Accepter et Fermer
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
