"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

type Star = {
  id: number
  top: number
  left: number
  size: number
  twinkle: boolean
}

export default function StarBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [stars, setStars] = useState<Star[]>([])

  // Garante que só renderiza no cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Gera estrelas apenas no dark mode (APÓS mounted)
  useEffect(() => {
    if (!mounted || theme !== "dark") {
      setStars([])
      return
    }

    const generatedStars: Star[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      twinkle: Math.random() < 0.5,
    }))

    setStars(generatedStars)
  }, [theme, mounted])

  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-colors duration-700 -z-10"
      style={{
        backgroundColor: theme === "dark" ? "#000" : "var(--bg)",
      }}
    >
      {theme === "dark" &&
        stars.map((star) => (
          <span
            key={star.id}
            className={`absolute rounded-full bg-white ${
              star.twinkle ? "twinkle-soft" : ""
            }`}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.7,
            }}
          />
        ))}
    </div>
  )
}
