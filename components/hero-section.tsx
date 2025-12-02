"use client"

import { Button } from "@/components/ui/button"
import { FireAnimation } from "./fire-animation"
import { ChevronDown, ExternalLink } from "lucide-react"

export function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById("meny")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-charcoal-black via-charcoal-black to-slate-gray">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Fire animation */}
      <FireAnimation />

      {/* Oven illustration */}
      <div className="relative z-10 mb-8">
        <div className="relative w-64 h-48 md:w-80 md:h-60">
          {/* Oven dome */}
          <div className="absolute inset-x-4 top-0 h-32 md:h-40 bg-gradient-to-b from-stone-700 to-stone-800 rounded-t-full border-4 border-stone-600" />

          {/* Oven opening */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-20 md:w-40 md:h-24 bg-gradient-to-t from-ember-red/80 via-flame-orange/60 to-warm-yellow/40 rounded-t-3xl border-4 border-stone-600 border-b-0 animate-glow-pulse" />

          {/* Inner glow */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-24 h-16 md:w-32 md:h-20 bg-flame-orange/50 rounded-t-2xl blur-md" />

          {/* Pizza inside */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-16 h-4 md:w-20 md:h-5 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 rounded-full shadow-lg animate-float" />

          {/* Oven base */}
          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-stone-900 to-stone-800 rounded-lg border-2 border-stone-600" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-ice-white text-balance">
          <span className="text-flame-orange">Grimstad</span> <span className="block md:inline">Kiosk & Grill</span>
        </h1>

        <p className="text-lg md:text-xl text-smoke-gray mb-2">Smaken av ekte grill</p>

        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-md mx-auto text-pretty">
          Alt du trenger for at helgekosen eller en blåmandag skal bli fullkommen
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToMenu}
            className="bg-flame-orange hover:bg-ember-red text-charcoal-black font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--flame-orange)]"
          >
            Se Menyen
          </Button>

          <a
            href="https://www.foodora.no/restaurant/uyu1/grimstad-kiosk-and-grill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-smoke-gray/50 text-ice-white hover:bg-ice-white/10 px-8 py-6 text-lg rounded-full bg-transparent group"
            >
              Bestill fra foodora
              <ExternalLink className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </a>
        </div>

        {/* Rating badge - Updated to 80 anmeldelser */}
        <div className="mt-8 inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < 4 ? "text-warm-yellow" : "text-smoke-gray"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">4.6/5 • 80 anmeldelser</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-smoke-gray hover:text-flame-orange transition-colors animate-bounce"
        aria-label="Scroll til meny"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
