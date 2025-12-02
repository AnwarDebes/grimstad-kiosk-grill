import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { AboutSection } from "@/components/about-section"
import { ReviewsSection } from "@/components/reviews-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MenuSection />
      <section id="om-oss">
        <AboutSection />
      </section>
      <ReviewsSection />
      <section id="finn-oss">
        <LocationSection />
      </section>
      <Footer />
      <MobileNav />
    </main>
  )
}
