"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  })
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("lesparissportifsfrance-cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("lesparissportifsfrance-cookie-consent", JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("lesparissportifsfrance-cookie-consent", JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("lesparissportifsfrance-cookie-consent", JSON.stringify(consent))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">Gestion des Cookies</h2>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-slate-700 text-sm leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur <strong>LesParisSpotifsFrance</strong>.
              Certains cookies sont nécessaires au fonctionnement du site, tandis que d'autres nous aident à comprendre
              comment vous utilisez notre site et à vous proposer du contenu pertinent.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-800 text-sm">
                <strong>Site éducatif :</strong> Notre site fournit uniquement des informations éducatives sur les paris
                sportifs. Nous ne proposons aucun service de jeu.
              </p>
            </div>
          </div>

          {showDetails && (
            <div className="space-y-4 mb-6 border-t pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-semibold text-slate-800">Cookies nécessaires</h3>
                    <p className="text-sm text-slate-600">Essentiels au fonctionnement du site</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-semibold text-slate-800">Cookies analytiques</h3>
                    <p className="text-sm text-slate-600">Nous aident à comprendre l'utilisation du site</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-semibold text-slate-800">Cookies marketing</h3>
                    <p className="text-sm text-slate-600">Pour afficher des publicités pertinentes</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-semibold text-slate-800">Cookies fonctionnels</h3>
                    <p className="text-sm text-slate-600">Améliorent les fonctionnalités du site</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Accepter tout
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors font-medium"
            >
              {showDetails ? "Masquer les détails" : "Personnaliser"}
            </button>
            {showDetails && (
              <>
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Accepter la sélection
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors font-medium"
                >
                  Refuser tout
                </button>
              </>
            )}
          </div>

          <div className="mt-4 pt-4 border-t text-center">
            <p className="text-xs text-slate-500">
              Pour plus d'informations, consultez notre{" "}
              <a href="/politique-cookies" className="text-blue-600 hover:underline">
                politique des cookies
              </a>{" "}
              et notre{" "}
              <a href="/politique-confidentialite" className="text-blue-600 hover:underline">
                politique de confidentialité
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
