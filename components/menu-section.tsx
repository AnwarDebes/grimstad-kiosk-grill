"use client"

import { useState, useRef, useEffect } from "react"
import { menuData } from "@/lib/menu-data"
import { MenuCard } from "./menu-card"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "lucide-react"

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id)
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set([menuData[0].id]))
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId)
    setExpandedCategories((prev) => {
      const newSet = new Set(prev)
      newSet.add(categoryId)
      return newSet
    })
    categoryRefs.current[categoryId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id.replace("category-", ""))
          }
        })
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" },
    )

    Object.values(categoryRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="meny" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            Vår <span className="text-flame-orange">Meny</span>
          </h2>
          <p className="text-muted-foreground">Fersk mat laget med kjærlighet</p>
        </div>

        {/* Category navigation - sticky */}
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm py-4 mb-8 -mx-4 px-4 border-b border-border">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all font-medium text-sm",
                  activeCategory === category.id
                    ? "bg-flame-orange text-charcoal-black"
                    : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground",
                )}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu categories */}
        <div className="space-y-6">
          {menuData.map((category) => {
            const isExpanded = expandedCategories.has(category.id)

            return (
              <div
                key={category.id}
                id={`category-${category.id}`}
                ref={(el) => {
                  categoryRefs.current[category.id] = el
                }}
                className="scroll-mt-24"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center gap-3 mb-4 group cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="font-serif text-2xl font-bold text-foreground">{category.name}</h3>
                  <span className="text-sm text-muted-foreground">({category.items.length} varer)</span>
                  <div className="flex-1 h-px bg-border" />
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                {isExpanded && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    {category.items.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
