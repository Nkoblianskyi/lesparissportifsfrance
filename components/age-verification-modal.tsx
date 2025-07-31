"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Clock } from "lucide-react"

export function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showRestrictionWarning, setShowRestrictionWarning] = useState(false)

  useEffect(() => {
    // Невелика затримка для завантаження сторінки
    const timer = setTimeout(() => {
      const ageVerified = localStorage.getItem("ageVerified")
      if (!ageVerified || ageVerified !== "true") {
        setIsOpen(true)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleConfirmAge = () => {
    localStorage.setItem("ageVerified", "true")
    setIsOpen(false)
  }

  const handleRejectAge = () => {
    setIsOpen(false)
    setShowRestrictionWarning(true)
  }

  const handleCloseRestriction = () => {
    setShowRestrictionWarning(false)
    window.location.href = "https://www.joueurs-info-service.fr"
  }

  return (
    <>
      {/* Modal de vérification d'âge */}
      <Dialog open={isOpen} onOpenChange={() => {}} modal>
        <DialogContent className="max-w-lg mx-4 bg-white text-slate-800 border-0 shadow-2xl rounded-2xl overflow-hidden">
          <style jsx>{`
            :global([data-radix-dialog-content] button[aria-label="Close"]) {
              display: none !important;
            }
          `}</style>

          {/* Header avec gradient français */}
          <div className="bg-gradient-to-r from-blue-600 via-white to-red-600 p-6 -m-6 mb-6">
            <DialogHeader>
              <DialogTitle className="text-center text-slate-800 text-xl font-bold flex items-center justify-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                Vérification d'Âge Obligatoire
              </DialogTitle>
            </DialogHeader>
          </div>

          <div className="space-y-6 px-2">
            {/* Avertissement principal */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">ATTENTION - Site Réglementé</h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Ce site contient des informations sur les paris sportifs et est strictement réservé aux personnes
                    majeures (18 ans et plus) conformément à la législation française.
                  </p>
                </div>
              </div>
            </div>

            {/* Conditions d'accès */}
            <div className="bg-slate-50 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Conditions d'Accès
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Être âgé de 18 ans minimum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Comprendre les risques financiers</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Jouer de manière responsable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Respecter la réglementation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ressources d'aide */}
            <div className="bg-blue-50 rounded-xl p-5">
              <h4 className="font-bold text-blue-800 mb-4">Ressources d'Aide et de Prévention</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-blue-800 mb-2">🇫🇷 France</p>
                  <div className="space-y-1 text-slate-700">
                    <p className="font-medium">Joueurs Info Service</p>
                    <p className="text-blue-600 font-mono">09 74 75 13 13</p>
                    <p className="text-xs">Service gratuit et confidentiel</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-blue-800 mb-2">🌍 International</p>
                  <div className="space-y-1 text-slate-700">
                    <p>GamCare • GAMSTOP</p>
                    <p>GambleAware • BeGambleAware</p>
                    <p className="text-xs">Organisations de prévention</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rappel important */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 text-sm text-center">
                <strong>Rappel Important :</strong> Les paris sportifs doivent rester un divertissement. Ne pariez
                jamais plus que ce que vous pouvez vous permettre de perdre.
              </p>
            </div>

            {/* Boutons de confirmation */}
            <div className="text-center space-y-4 pt-2">
              <p className="font-bold text-lg text-slate-800">Confirmez-vous avoir 18 ans ou plus ?</p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleConfirmAge}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  ✓ OUI, J'AI 18 ANS OU PLUS
                </Button>
                <Button
                  onClick={handleRejectAge}
                  variant="outline"
                  className="border-2 border-red-500 text-red-600 hover:bg-red-50 font-bold px-8 py-3 rounded-xl transition-all duration-200 bg-transparent"
                >
                  ✗ NON, MOINS DE 18 ANS
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal d'avertissement de restriction */}
      <Dialog open={showRestrictionWarning} onOpenChange={() => {}} modal>
        <DialogContent className="max-w-md mx-4 bg-gradient-to-br from-red-600 to-red-700 text-white border-0 shadow-2xl rounded-2xl">
          <style jsx>{`
            :global([data-radix-dialog-content] button[aria-label="Close"]) {
              display: none !important;
            }
          `}</style>

          <DialogHeader>
            <DialogTitle className="text-center text-white text-xl font-bold flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-7 h-7 text-yellow-300" />
              ACCÈS REFUSÉ
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-center">
            <div className="bg-red-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-3 text-yellow-300">SITE INTERDIT AUX MINEURS</h3>
              <p className="text-red-100 leading-relaxed">
                L'accès à ce site est strictement réservé aux personnes majeures conformément à la législation française
                sur les jeux et paris en ligne.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-red-100">Vous allez être redirigé vers :</p>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-yellow-300 font-bold text-lg">Joueurs Info Service</p>
                <p className="text-red-100 text-sm">Service d'aide et de prévention</p>
              </div>
            </div>

            <Button
              onClick={handleCloseRestriction}
              className="bg-white text-red-600 hover:bg-red-50 font-bold w-full py-4 rounded-xl text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              J'AI COMPRIS - QUITTER LE SITE
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
