"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { MenuItem } from "@/lib/menu-data"

interface MenuCardProps {
  item: MenuItem
}

function FireLoader() {
  return (
    <div className="fire-loader">
      <div className="fire-container">
        <div className="fire-spark"></div>
        <div className="fire-spark"></div>
        <div className="fire-spark"></div>
        <div className="fire-spark"></div>
        <div className="fire-spark"></div>
        <div className="fire-flame"></div>
        <div className="fire-base"></div>
        <div className="loading-text">Laster...</div>
      </div>
    </div>
  )
}

export function MenuCard({ item }: MenuCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const hasImage = item.image && item.image.length > 0

  return (
    <div className="group">
      <div className="card-3d-inner bg-card rounded-xl overflow-hidden border border-border hover:border-flame-orange/50 transition-all duration-300">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-charcoal-black to-deep-charcoal">
          <div className="absolute inset-0 grill-bg opacity-40" />

          {!imageLoaded && (
            <div className="absolute inset-0 z-20">
              <FireLoader />
            </div>
          )}

          {hasImage && !imageError ? (
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className={`object-cover z-10 transition-all duration-500 group-hover:scale-110 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : imageError ? (
            <div className="w-full h-full flex items-center justify-center">
              <FireLoader />
            </div>
          ) : null}
          {item.popular && (
            <Badge className="absolute top-2 right-2 bg-flame-orange text-charcoal-black font-semibold z-20">
              Populær
            </Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-card-foreground mb-1">{item.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
          <div className="flex items-center">
            <span className="font-mono text-lg font-bold text-flame-orange">fra {item.price} NOK</span>
          </div>
        </div>
      </div>
    </div>
  )
}
