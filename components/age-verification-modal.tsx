"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Clock, Phone } from "lucide-react"

export function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showRestrictionWarning, setShowRestrictionWarning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const ageVerified = localStorage.getItem("ageVerified")
      if (!ageVerified || ageVerified !== "true") {
        setIsOpen(true)
      }
    }, 50)

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
        <DialogContent className="max-w-[95vw] sm:max-w-lg mx-auto bg-white text-slate-800 border-0 shadow-2xl rounded-2xl overflow-hidden max-h-[95vh] flex flex-col">
          <style jsx>{`
            :global([data-radix-dialog-content] button[aria-label="Close"]) {
              display: none !important;
            }
          `}</style>

          {/* Header avec gradient français - fixe */}
          <div className="bg-gradient-to-r from-blue-600 via-white to-red-600 p-4 sm:p-6 -m-6 mb-0 flex-shrink-0">
            <DialogHeader>
              <DialogTitle className="text-center text-slate-800 text-lg sm:text-xl font-bold flex items-center justify-center gap-2 sm:gap-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <span className="text-sm sm:text-xl">Vérification d'Âge</span>
              </DialogTitle>
            </DialogHeader>
          </div>

          {/* Contenu scrollable */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <div className="space-y-4 sm:space-y-6 pt-4">
              {/* Avertissement principal */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-800 mb-1 sm:mb-2 text-sm sm:text-base">
                      ATTENTION - Site Réglementé
                    </h3>
                    <p className="text-red-700 text-xs sm:text-sm leading-relaxed">
                      Site réservé aux 18+ conformément à la législation française sur les paris sportifs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conditions d'accès */}
              <div className="bg-slate-50 rounded-xl p-3 sm:p-5">
                <h3 className="font-bold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  Conditions d'Accès
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span>Être âgé de 18 ans minimum</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span>Comprendre les risques</span>
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span>Jouer responsable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span>Respecter la loi</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ressources d'aide - version compacte */}
              <div className="bg-blue-50 rounded-xl p-3 sm:p-5">
                <h4 className="font-bold text-blue-800 mb-2 sm:mb-4 text-sm sm:text-base">Aide et Prévention</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="bg-white rounded-lg p-2 sm:p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      <p className="font-semibold text-blue-800">France</p>
                    </div>
                    <div className="space-y-0.5 text-slate-700">
                      <p className="font-medium text-xs sm:text-sm">Joueurs Info Service</p>
                      <p className="text-blue-600 font-mono text-xs sm:text-sm">09 74 75 13 13</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-2 sm:p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-slate-400 rounded-full"></div>
                      <p className="font-semibold text-blue-800">International</p>
                    </div>
                    <div className="space-y-0.5 text-slate-700">
                      <p className="text-xs sm:text-sm">GamCare • GAMSTOP</p>
                      <p className="text-xs sm:text-sm">BeGambleAware</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rappel important - version compacte */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-amber-800 text-xs sm:text-sm text-center">
                  <strong>Important :</strong> Les paris doivent rester un divertissement.
                </p>
              </div>
            </div>
          </div>

          {/* Boutons de confirmation - fixes en bas */}
          <div className="flex-shrink-0 px-6 pb-6 pt-2 border-t border-slate-200">
            <div className="text-center space-y-3 sm:space-y-4">
              <p className="font-bold text-sm sm:text-lg text-slate-800">Avez-vous 18 ans ou plus ?</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                <Button
                  onClick={handleConfirmAge}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-4 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 text-xs sm:text-sm"
                >
                  ✓ OUI, 18+ ANS
                </Button>
                <Button
                  onClick={handleRejectAge}
                  variant="outline"
                  className="border-2 border-red-500 text-red-600 hover:bg-red-50 font-bold px-4 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-200 bg-transparent text-xs sm:text-sm"
                >
                  ✗ NON, MOINS DE 18
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal d'avertissement de restriction */}
      <Dialog open={showRestrictionWarning} onOpenChange={() => {}} modal>
        <DialogContent className="max-w-[95vw] sm:max-w-md mx-auto bg-gradient-to-br from-red-600 to-red-700 text-white border-0 shadow-2xl rounded-2xl max-h-[95vh] flex flex-col">
          <style jsx>{`
            :global([data-radix-dialog-content] button[aria-label="Close"]) {
              display: none !important;
            }
          `}</style>

          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-center text-white text-lg sm:text-xl font-bold flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4">
              <AlertTriangle className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-300" />
              ACCÈS REFUSÉ
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4 sm:space-y-6 text-center">
              <div className="bg-red-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-yellow-300">INTERDIT AUX MINEURS</h3>
                <p className="text-red-100 leading-relaxed text-sm sm:text-base">
                  Accès réservé aux 18+ conformément à la loi française.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <p className="font-semibold text-red-100 text-sm sm:text-base">Redirection vers :</p>
                <div className="bg-white/10 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                  <p className="text-yellow-300 font-bold text-base sm:text-lg">Joueurs Info Service</p>
                  <p className="text-red-100 text-xs sm:text-sm">Service d'aide et de prévention</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 pt-4">
            <Button
              onClick={handleCloseRestriction}
              className="bg-white text-red-600 hover:bg-red-50 font-bold w-full py-3 sm:py-4 rounded-xl text-sm sm:text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              COMPRIS - QUITTER
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
