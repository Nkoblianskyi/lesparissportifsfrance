import { NextResponse } from "next/server"

export async function GET() {
  const securityTxt = `# Security.txt pour Les10MeilleursFrance.com
# Politique de sécurité et signalement de vulnérabilités

Contact: security@les10meilleursfrance.com
Contact: https://les10meilleursfrance.com/contact-security
Expires: 2025-12-31T23:59:59.000Z
Encryption: https://les10meilleursfrance.com/pgp-key.txt
Preferred-Languages: fr, en
Canonical: https://les10meilleursfrance.com/.well-known/security.txt
Policy: https://les10meilleursfrance.com/security-policy
Acknowledgments: https://les10meilleursfrance.com/security-acknowledgments

# Politique de Divulgation Responsable
# Nous encourageons le signalement responsable des vulnérabilités
# Délai de réponse: 48 heures maximum
# Correction: 7 jours pour les vulnérabilités critiques

# Scope de sécurité
# - Site principal: les10meilleursfrance.com
# - Sous-domaines autorisés uniquement
# - Pas de test sur les sites partenaires

# Hors scope
# - Attaques par déni de service (DoS/DDoS)
# - Ingénierie sociale
# - Tests physiques

# Conformité
# - RGPD compliant
# - Réglementations françaises respectées
# - Standards de sécurité web appliqués
# - Monitoring continu des menaces

# Contact d'urgence sécurité
# Email: urgent-security@les10meilleursfrance.com
# Réponse garantie sous 24h pour les vulnérabilités critiques`

  return new NextResponse(securityTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
      "X-Content-Type-Options": "nosniff",
    },
  })
}
