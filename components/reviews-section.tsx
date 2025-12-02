"use client"

import { useState, useEffect } from "react"
import { reviews } from "@/lib/menu-data"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ThumbsUp } from "lucide-react"

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + reviews.length) % reviews.length

    // Center card (active)
    if (diff === 0) {
      return {
        transform: "translateX(-50%) scale(1)",
        zIndex: 30,
        opacity: 1,
      }
    }
    // Right card (next)
    else if (diff === 1) {
      return {
        transform: "translateX(20%) scale(0.85)",
        zIndex: 20,
        opacity: 0.6,
      }
    }
    // Far right card
    else if (diff === 2) {
      return {
        transform: "translateX(90%) scale(0.7)",
        zIndex: 15,
        opacity: 0.3,
      }
    }
    // Left card (previous)
    else if (diff === reviews.length - 1) {
      return {
        transform: "translateX(-120%) scale(0.85)",
        zIndex: 20,
        opacity: 0.6,
      }
    }
    // Far left card
    else if (diff === reviews.length - 2) {
      return {
        transform: "translateX(-190%) scale(0.7)",
        zIndex: 15,
        opacity: 0.3,
      }
    }
    // Hidden cards
    return {
      transform: "translateX(-50%) scale(0.5)",
      zIndex: 5,
      opacity: 0,
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            Hva kundene <span className="text-flame-orange">sier</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-warm-yellow">
                  ★
                </span>
              ))}
            </div>
            <span>5.0 av 5 basert på 80 anmeldelser</span>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[350px]">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[85%] max-w-md bg-card border-border shadow-xl cursor-pointer transition-all duration-700 ease-in-out"
              style={getCardStyle(index)}
              onClick={() => setActiveIndex(index)}
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="w-8 h-8 text-flame-orange/40 mb-4 mx-auto" />

                {/* Review Text */}
                <p className="text-base md:text-lg text-card-foreground text-center mb-4 min-h-[50px] line-clamp-3">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Liked Dishes */}
                {review.likedDishes && review.likedDishes.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground text-center mb-2">
                      <ThumbsUp className="w-4 h-4 inline mr-1" />
                      Likte {review.likedDishes.length} rett{review.likedDishes.length > 1 ? "er" : ""}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {review.likedDishes.slice(0, 2).map((dish, i) => (
                        <span key={i} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Customer Info */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-base ${i < review.rating ? "text-warm-yellow" : "text-muted"}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex
                  ? "bg-flame-orange w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
                }`}
              aria-label={`Gå til anmeldelse ${index + 1}`}
            />
          ))}
        </div>

        {/* Hjelpsom indicator */}
        <div className="flex justify-center mt-4">
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" /> Hjelpsom
          </span>
        </div>
      </div>
    </section>
  )
}
