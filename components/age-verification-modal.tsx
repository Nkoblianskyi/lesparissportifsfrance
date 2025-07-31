"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield } from "lucide-react"

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
        <DialogContent className="max-w-md mx-2 bg-white text-black border-2 border-red-500">
          <style jsx>{`
            :global([data-radix-dialog-content] button[aria-label="Close"]) {
              display: none !important;
            }
          `}</style>
          <DialogHeader>
            <DialogTitle className="text-center text-red-600 text-lg font-bold flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              Vérification d'Âge
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3 text-black text-sm">
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <h3 className="font-bold text-red-800 mb-1 text-sm">AVERTISSEMENT</h3>
              <p className="text-red-700 font-semibold text-xs">
                Site réservé aux 18 ans et plus. Contenu sur les paris sportifs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-800 text-sm">Vous devez :</h3>
              <ul className="space-y-1 text-xs">
                <li>Avoir 18 ans révolus</li>
                <li>Comprendre les risques financiers</li>
                <li>Jouer de manière responsable</li>
              </ul>
            </div>

            <div className="bg-slate-100 rounded-lg p-2">
              <h4 className="font-bold text-slate-800 mb-2 text-xs">Ressources d'Aide</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="font-semibold mb-1">France :</p>
                  <p>Joueurs Info Service</p>
                  <p>09 74 75 13 13</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">International :</p>
                  <p>GamCare, GAMSTOP</p>
                  <p>GambleAware</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2">
              <p className="text-yellow-700 text-xs">
                <strong>Rappel :</strong> Les paris doivent rester un divertissement.
              </p>
            </div>

            <div className="text-center space-y-3">
              <p className="font-bold text-sm text-slate-800">Avez-vous 18 ans ou plus ?</p>
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={handleConfirmAge}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 text-xs"
                >
                  OUI, 18+ ANS
                </Button>
                <Button
                  onClick={handleRejectAge}
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 font-bold px-4 py-2 text-xs bg-transparent"
                >
                  NON, MOINS DE 18
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal d'avertissement de restriction */}
      <Dialog open={showRestrictionWarning} onOpenChange={() => {}} modal>
        <DialogContent className="max-w-xs mx-2 bg-red-600 text-white border-2 border-red-800">
          <style jsx>{`
            :global([data-radix-dialog-content] button[aria-label="Close"]) {
              display: none !important;
            }
          `}</style>
          <DialogHeader>
            <DialogTitle className="text-center text-white text-base font-bold flex items-center justify-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              ACCÈS INTERDIT
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3 text-center text-sm">
            <div className="bg-red-700 rounded-lg p-3">
              <h3 className="font-bold text-sm mb-1">INTERDIT AUX MINEURS</h3>
              <p className="text-xs">Site réservé aux 18+ conformément à la loi française.</p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-xs">Redirection vers :</p>
              <p className="text-yellow-200 font-bold text-sm">Joueurs Info Service</p>
            </div>

            <Button
              onClick={handleCloseRestriction}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold w-full py-2 text-xs"
            >
              COMPRIS - QUITTER
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
