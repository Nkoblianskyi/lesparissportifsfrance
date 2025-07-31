"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield } from "lucide-react"

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
      {/* Modal de vérification d'âge - КОМПАКТНА */}
      <Dialog open={isOpen} onOpenChange={() => {}} modal>
        <DialogContent className="max-w-sm mx-4 bg-white text-slate-800 border-0 shadow-2xl rounded-xl p-0 overflow-hidden">
          <style jsx>{`
            :global([data-radix-dialog-content] button[aria-label="Close"]) {
              display: none !important;
            }
          `}</style>

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-white to-red-600 p-4 text-center">
            <DialogTitle className="text-slate-800 text-lg font-bold flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Vérification d'Âge
            </DialogTitle>
          </div>

          {/* Contenu */}
          <div className="p-4 space-y-4">
            {/* Avertissement */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-red-800 text-sm mb-1">ATTENTION</h3>
                  <p className="text-red-700 text-xs">Site réservé aux 18+ conformément à la loi française.</p>
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="bg-slate-50 rounded p-3">
              <h4 className="font-bold text-slate-800 text-sm mb-2">Vous devez :</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Avoir 18+ ans</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Jouer responsable</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span>Comprendre risques</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span>Respecter la loi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Aide */}
            <div className="bg-blue-50 rounded p-3">
              <h4 className="font-bold text-blue-800 text-sm mb-2">Aide :</h4>
              <div className="text-xs text-slate-700">
                <p className="font-medium">Joueurs Info Service</p>
                <p className="text-blue-600 font-mono">09 74 75 13 13</p>
              </div>
            </div>

            {/* Rappel */}
            <div className="bg-amber-50 border border-amber-200 rounded p-2">
              <p className="text-amber-800 text-xs text-center">
                <strong>Important :</strong> Les paris doivent rester un divertissement.
              </p>
            </div>

            {/* Question et boutons */}
            <div className="text-center space-y-3 pt-2">
              <p className="font-bold text-sm text-slate-800">Avez-vous 18 ans ou plus ?</p>
              <div className="flex gap-2">
                <Button
                  onClick={handleConfirmAge}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg text-xs flex-1"
                >
                  ✓ OUI, 18+
                </Button>
                <Button
                  onClick={handleRejectAge}
                  variant="outline"
                  className="border-red-500 text-red-600 hover:bg-red-50 font-bold px-4 py-2 rounded-lg text-xs flex-1 bg-transparent"
                >
                  ✗ NON
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de restriction - КОМПАКТНА */}
      <Dialog open={showRestrictionWarning} onOpenChange={() => {}} modal>
        <DialogContent className="max-w-xs mx-4 bg-red-600 text-white border-0 shadow-2xl rounded-xl p-0">
          <style jsx>{`
            :global([data-radix-dialog-content] button[aria-label="Close"]) {
              display: none !important;
            }
          `}</style>

          <div className="p-4 text-center space-y-4">
            <DialogTitle className="text-white text-lg font-bold flex items-center justify-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-300" />
              ACCÈS REFUSÉ
            </DialogTitle>

            <div className="bg-red-700 rounded p-3">
              <h3 className="font-bold text-sm mb-1 text-yellow-300">INTERDIT AUX MINEURS</h3>
              <p className="text-red-100 text-xs">Site réservé aux 18+ selon la loi française.</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-xs text-red-100">Redirection vers :</p>
              <div className="bg-white/10 rounded p-2">
                <p className="text-yellow-300 font-bold text-sm">Joueurs Info Service</p>
                <p className="text-red-100 text-xs">Service d'aide</p>
              </div>
            </div>

            <Button
              onClick={handleCloseRestriction}
              className="bg-white text-red-600 hover:bg-red-50 font-bold w-full py-2 rounded-lg text-sm"
            >
              COMPRIS - QUITTER
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
