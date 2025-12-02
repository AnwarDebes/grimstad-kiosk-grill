"use client"

import { useEffect, useState } from "react"

interface Ember {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export function FireAnimation() {
  const [embers, setEmbers] = useState<Ember[]>([])

  useEffect(() => {
    const newEmbers: Ember[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
      size: 2 + Math.random() * 4,
    }))
    setEmbers(newEmbers)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main fire glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]">
        {/* Base glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-ember-red/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-60 h-32 bg-flame-orange/40 rounded-full blur-2xl animate-glow-pulse" />

        {/* Flame layers */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="animate-flicker origin-bottom"
              style={{
                width: `${20 + Math.random() * 30}px`,
                height: `${60 + Math.random() * 80}px`,
                background: `radial-gradient(ellipse at bottom, 
                  var(--warm-yellow) 0%, 
                  var(--flame-orange) 30%, 
                  var(--ember-red) 60%, 
                  transparent 80%)`,
                borderRadius: "50% 50% 20% 20%",
                animationDelay: `${i * 0.1}s`,
                filter: "blur(1px)",
                mixBlendMode: "screen",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating embers */}
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="absolute animate-ember rounded-full"
          style={{
            left: `${ember.left}%`,
            bottom: "20%",
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            background: "var(--warm-yellow)",
            boxShadow: "0 0 6px var(--flame-orange), 0 0 12px var(--ember-red)",
            animationDelay: `${ember.delay}s`,
            animationDuration: `${ember.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
