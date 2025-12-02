import Image from "next/image"
import { Flame, Clock, MapPin, Heart, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Flame,
    title: "Grillet til perfeksjon",
    description: "Alt kjøttet vårt er grillet over åpen flamme for maksimal smak.",
  },
  {
    icon: Heart,
    title: "Laget med kjærlighet",
    description: "Ferske ingredienser og oppskrifter som har gått i generasjoner.",
  },
  {
    icon: Clock,
    title: "Rask levering",
    description: "Fra grillen til deg på under 30 minutter via Foodora.",
  },
  {
    icon: MapPin,
    title: "Lokal favoritt",
    description: "Stolt over å servere Grimstad i over 10 år.",
  },
]

export function AboutSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Om <span className="text-flame-orange">Oss</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Grimstad Kiosk & Grill har vært et samlingspunkt for mat-elskere siden 2014. Vi brenner for å servere den
            beste kebaben, burgerene og grillmaten i Sørlandet.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden border border-border">
            <Image
              src="/images/screenshot-202025-12-01-20170926.png"
              alt="Grimstad Kiosk & Grill restaurant storefront"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <Button asChild className="bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold">
              <a
                href="https://www.facebook.com/Grimstadkiosk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Facebook className="w-5 h-5" />
                Følg oss på Facebook
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Grimstad Kiosk & Grill</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-flame-orange/30 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-flame-orange/10 text-flame-orange mb-4 group-hover:bg-flame-orange group-hover:text-charcoal-black transition-colors">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
