"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

export default function Moon() {
  const [offsetY, setOffsetY] = useState(0)
  const [isBelowMeteor, setIsBelowMeteor] = useState(false)
  const [mounted, setMounted] = useState(false)
  const moonRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  // Configurações
  const MAX_SCROLL_DISTANCE = 300
  const METEOR_THRESHOLD = 400
  const PARALLAX_SPEED = 0.25
  const INITIAL_TOP = 96

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY

        setIsBelowMeteor(scrollY > METEOR_THRESHOLD)

        let calculatedOffset = scrollY * PARALLAX_SPEED
        if (calculatedOffset > MAX_SCROLL_DISTANCE) {
          calculatedOffset = MAX_SCROLL_DISTANCE
        }

        setOffsetY(calculatedOffset)
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      ref={moonRef}
      className={`fixed top-24 left-1/2 -translate-x-1/2 z-0 pointer-events-none transition-all duration-300
        ${isBelowMeteor ? "opacity-80 z-[-1]" : "opacity-100"}`}
      style={{
        transform: `translate(-50%, ${offsetY}px)`,
      }}
    >
      {/* 🌙 LUA — DARK */}
      {theme === "dark" && (
        <div className="relative w-8 h-8 rounded-full bg-[#ddd9d9]
          shadow-[0_0_70px_rgba(255,255,255,0.6)] overflow-hidden">

          <span className="absolute top-1 left-1 w-2 h-2 rounded-full bg-black/10" />
          <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-black/8" />
          <span className="absolute top-3 right-2 w-1 h-1 rounded-full bg-black/12" />
        </div>
      )}

      {/* ☀️ SOL — LIGHT */}
      {theme === "light" && (
        <div className="relative w-8 h-8 rounded-full bg-yellow-400
          shadow-[0_0_60px_rgba(255,200,0,0.8)]">
        </div>
      )}
    </div>
  )
}
