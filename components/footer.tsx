import { Flame } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-charcoal-black border-t border-border py-12 px-4 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-flame-orange flex items-center justify-center">
              <Flame className="w-6 h-6 text-charcoal-black" />
            </div>
            <span className="font-serif font-bold text-lg text-foreground">
              Grimstad <span className="text-flame-orange">Kiosk & Grill</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#meny" className="hover:text-flame-orange transition-colors">
              Meny
            </a>
            <a href="#om-oss" className="hover:text-flame-orange transition-colors">
              Om Oss
            </a>
            <a href="#finn-oss" className="hover:text-flame-orange transition-colors">
              Finn Oss
            </a>
            <a
              href="https://www.facebook.com/Grimstadkiosk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-flame-orange transition-colors"
            >
              Facebook
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© 2025 Grimstad Kiosk & Grill</p>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>Storgata 27A, 4876 Grimstad • Org.nr: 960 08 848 MVA</p>
        </div>
      </div>
    </footer>
  )
}
