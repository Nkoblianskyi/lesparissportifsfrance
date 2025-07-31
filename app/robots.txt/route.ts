import { NextResponse } from "next/server"

export async function GET() {
  const robotsTxt = `# Robots.txt pour Les10MeilleursFrance.com
# Site éducatif et informatif sur les paris sportifs
# Conformité Google et respect des standards web

User-agent: *
Allow: /
Allow: /a-propos
Allow: /politique-confidentialite
Allow: /politique-cookies

# Crawl delay pour éviter la surcharge
Crawl-delay: 1

# Bots spécifiques
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Sécurité - Bloquer l'accès aux fichiers sensibles
Disallow: /api/
Disallow: /.env*
Disallow: /config/
Disallow: /logs/
Disallow: /admin/
Disallow: /private/
Disallow: /tmp/
Disallow: /cache/
Disallow: /*.log
Disallow: /*.sql
Disallow: /*.bak

# Bloquer les bots malveillants connus
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Sitemap
Sitemap: https://les10meilleursfrance.com/sitemap.xml

# Informations légales
# Ce site est un guide éducatif et informatif
# Contenu conforme aux réglementations françaises
# Sites référencés licenciés ANJ uniquement
# Jeu responsable - 18+ uniquement`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
      "X-Content-Type-Options": "nosniff",
    },
  })
}
