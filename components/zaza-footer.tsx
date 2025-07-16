"use client"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Heart } from "lucide-react"

interface ZazaFooterProps {
  currentPage?: string
}

export default function ZazaFooter({ currentPage }: ZazaFooterProps) {
  const ecosystemLinks = [
    { name: "Zaza Teach", href: "/zaza-teach", key: "teach" },
    { name: "Zaza Promptly", href: "/zaza-promptly", key: "promptly" },
    { name: "Zaza Inbox", href: "/zaza-inbox", key: "inbox" },
    { name: "Zaza Visuals", href: "/zaza-visuals", key: "visuals" },
    { name: "Zaza ClarityDeck", href: "/zaza-claritydeck", key: "claritydeck" },
    { name: "Zaza Schwoop", href: "/zaza-schwoop", key: "schwoop" },
  ]

  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
  ]

  const trustFeatures = [
    {
      name: "GDPR Compliant",
      icon: Shield,
      iconColor: "text-purple-400",
      checkmark: "✅",
    },
    {
      name: "FERPA Safe",
      icon: Lock,
      iconColor: "text-pink-400",
      checkmark: "🔒",
    },
    {
      name: "Built by Educators",
      icon: Heart,
      iconColor: "text-purple-400",
      checkmark: "💜",
    },
  ]

  const socialLinks = [
    {
      name: "TikTok",
      href: "https://tiktok.com/@zazatech",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/zaza-technologies",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/zazatech",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Zaza Branding Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/z-logo.png" alt="Zaza Technologies Logo" className="w-8 h-8" />
              <h3 className="text-xl font-bold text-white">Zaza Technologies</h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Empowering teachers through emotionally intelligent AI.
            </p>
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 rounded-lg px-6 py-2.5 font-medium transition-all duration-200 hover:shadow-lg"
              asChild
            >
              <a href="/products">Explore Zaza</a>
            </Button>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Security Column */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Trust & Security</h4>
            <ul className="space-y-3">
              {trustFeatures.map((feature) => (
                <li key={feature.name} className="flex items-center space-x-3">
                  <span className="text-lg">{feature.checkmark}</span>
                  <span className="text-slate-300">{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Zaza Ecosystem Column */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Zaza Ecosystem</h4>
            <ul className="space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-200 hover:underline ${
                      currentPage === link.key ? "text-purple-300 font-medium" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-slate-400">
              © 2025 Zaza Technologies UG (haftungsbeschränkt). All rights reserved.
            </div>
            <div className="text-sm text-slate-400 text-center lg:text-right">
              Made with 💙 by teachers, for learners. · Trusted by educators worldwide.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
