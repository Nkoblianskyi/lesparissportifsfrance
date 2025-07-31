import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full french-flag-bg shadow-lg relative z-50">
      <div className="w-full px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={40}
              height={40}
              className="group-hover:scale-105 transition-transform"
            />
            <h1 className="text-xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors">
              LesParisSpotifsFrance
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/20"
            >
              Accueil
            </Link>
            <Link
              href="/a-propos"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/20"
            >
              À Propos
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/20"
            >
              Confidentialité
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
