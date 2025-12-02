import { MapPin, Clock, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-gray/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            Finn <span className="text-flame-orange">Oss</span>
          </h2>
          <p className="text-muted-foreground">Besøk oss i hjertet av Grimstad</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative h-80 lg:h-auto rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2108.8!2d8.5934!3d58.3405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4647b5c5c5c5c5c5%3A0x0!2sStorgata%2027A%2C%204876%20Grimstad%2C%20Norge!5e0!3m2!1sno!2sno!4v1701444000000!5m2!1sno!2sno"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Grimstad Kiosk & Grill lokasjon"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Storgata+27A+4876+Grimstad+Norge"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm text-flame-orange hover:bg-background transition-colors border border-border"
            >
              Vis større kart
            </a>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Address - Updated to 27A */}
            <div className="flex gap-4 p-5 rounded-xl bg-card border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-flame-orange/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-flame-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                <p className="text-muted-foreground">Storgata 27A</p>
                <p className="text-muted-foreground">4876 Grimstad, Norge</p>
              </div>
            </div>

            {/* Hours - Updated opening hours */}
            <div className="flex gap-4 p-5 rounded-xl bg-card border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-flame-orange/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-flame-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Åpningstider</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Alle dager: kl. 10:00 - 23:59</p>
                  <p>Fredag og lørdag: kl. 10:00 - 02:30</p>
                  <p className="text-flame-orange">Nattåpent fredag og lørdag</p>
                </div>
              </div>
            </div>

            {/* Contact - Updated phone and email */}
            <div className="flex gap-4 p-5 rounded-xl bg-card border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-flame-orange/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-flame-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Kontakt</h3>
                <p className="text-muted-foreground">+47 96 00 88 48</p>
                <p className="text-muted-foreground text-sm">grimstadkiosk@gmail.com</p>
              </div>
            </div>

            <Button size="lg" className="w-full bg-[#0084FF] hover:bg-[#0073E6] text-white font-semibold" asChild>
              <a href="https://www.facebook.com/Grimstadkiosk/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Kontakt oss på Messenger
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
