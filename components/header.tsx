"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, Flame } from "lucide-react"

const navLinks = [
  { label: "Hjem", href: "#" },
  { label: "Meny", href: "#meny" },
  { label: "Om Oss", href: "#om-oss" },
  { label: "Finn Oss", href: "#finn-oss" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border py-3" : "bg-transparent py-5",
      )}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-flame-orange flex items-center justify-center">
            <Flame className="w-6 h-6 text-charcoal-black" />
          </div>
          <span className="font-serif font-bold text-lg text-foreground hidden sm:block">
            Grimstad <span className="text-flame-orange">Grill</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-flame-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-flame-orange hover:bg-ember-red text-charcoal-black font-semibold cursor-default"
            onClick={(e) => e.preventDefault()}
          >
            Bestill Nå
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Lukk meny" : "Åpne meny"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-foreground hover:text-flame-orange transition-colors border-b border-border last:border-0"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-4 bg-flame-orange hover:bg-ember-red text-charcoal-black font-semibold cursor-default"
              onClick={(e) => e.preventDefault()}
            >
              Bestill Nå
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
