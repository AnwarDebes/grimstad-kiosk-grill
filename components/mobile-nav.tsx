"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Home, UtensilsCrossed, MapPin, Flame, Info } from "lucide-react"

const navItems = [
  { id: "home", label: "Hjem", icon: Home, href: "#" },
  { id: "meny", label: "Meny", icon: UtensilsCrossed, href: "#meny" },
  {
    id: "order",
    label: "",
    icon: Flame,
    href: "#",
    isCenter: true,
  },
  { id: "finn-oss", label: "Finn Oss", icon: MapPin, href: "#finn-oss" },
  { id: "om-oss", label: "Om Oss", icon: Info, href: "#om-oss" },
]

export function MobileNav() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeItem, setActiveItem] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 100) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleClick = (item: (typeof navItems)[0]) => {
    if (item.isCenter) return
    setActiveItem(item.id)
  }

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="bg-card/95 backdrop-blur-lg border-t border-border">
        <div className="flex items-center justify-around px-2 py-2 safe-area-inset-bottom">
          {navItems.map((item) => {
            const Icon = item.icon

            if (item.isCenter) {
              return (
                <div
                  key={item.id}
                  className="relative -mt-6 flex flex-col items-center cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="w-14 h-14 rounded-full bg-flame-orange text-charcoal-black flex items-center justify-center shadow-lg shadow-flame-orange/30 animate-glow-pulse">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
              )
            }

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleClick(item)}
                className={cn(
                  "flex flex-col items-center py-2 px-3 rounded-lg transition-colors",
                  activeItem === item.id ? "text-flame-orange" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] mt-1">{item.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
