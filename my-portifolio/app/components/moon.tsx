"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

export default function Moon() {
  const [offsetY, setOffsetY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)
  const moonRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  // Configurações
  const INITIAL_TOP = 96 
  const PARALLAX_SPEED = 0.25

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let rafId: number
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        rafId = requestAnimationFrame(() => {
          const scrollY = window.scrollY
          
          const projectsSection = document.getElementById("projects")
          
          if (!projectsSection) {
            ticking = false
            return
          }
          
          const projectsRect = projectsSection.getBoundingClientRect()
          const projectsTop = projectsRect.top + scrollY
          
          const maxScrollDistance = projectsTop - INITIAL_TOP
          
          let calculatedOffset = scrollY * PARALLAX_SPEED

          if (calculatedOffset >= maxScrollDistance) {
            calculatedOffset = maxScrollDistance
          }
          
          if (calculatedOffset < 0) {
            calculatedOffset = 0
          }
          
          const hasReachedProjects = scrollY >= projectsTop - window.innerHeight * 0.1
          
          setOffsetY(calculatedOffset)
          setIsVisible(!hasReachedProjects) 
          
          ticking = false
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    setTimeout(handleScroll, 100)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!mounted) return null
  if (!isVisible) return null

  return (
    <div className="fixed top-24 inset-x-0 z-10 pointer-events-none">
      <div className="flex justify-center items-start w-full h-0">
        <div
          ref={moonRef}
          className="transition-transform duration-100"
          style={{
            transform: `translateY(${offsetY}px)`,
          }}
        >
          {/* MOON — DARK */}
          {theme === "dark" && (
            <div className="relative w-8 h-8 rounded-full bg-[#ddd9d9]
              shadow-[0_0_70px_rgba(255,255,255,0.3)] overflow-hidden">
              <span className="absolute top-1 left-1 w-2 h-2 rounded-full bg-black/10" />
              <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-black/8" />
              <span className="absolute top-3 right-2 w-1 h-1 rounded-full bg-black/12" />
            </div>
          )}

          {/* SUN — LIGHT */}
          {theme === "light" && (
            <div className="relative w-8 h-8 rounded-full bg-yellow-400
              shadow-[0_0_60px_rgba(255,200,0,0.8)]">
            </div>
          )}
        </div>
      </div>
    </div>
  )
}