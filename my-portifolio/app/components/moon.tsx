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
  const INITIAL_TOP = 96 // top-24 = 6rem = 96px
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
          
          // Obter elementos das seções
          const projectsSection = document.getElementById("projects")
          
          if (!projectsSection) {
            ticking = false
            return
          }
          
          // Calcular posição da seção de projetos
          const projectsRect = projectsSection.getBoundingClientRect()
          const projectsTop = projectsRect.top + scrollY
          
          // 1. Calcula quanto o Moon pode descer
          //    Ele deve parar exatamente no topo da seção de projetos
          const maxScrollDistance = projectsTop - INITIAL_TOP
          
          // 2. Calcula o offset atual baseado no scroll
          let calculatedOffset = scrollY * PARALLAX_SPEED
          
          // 3. Limita o offset: quando chegar no topo dos projetos, para!
          if (calculatedOffset >= maxScrollDistance) {
            calculatedOffset = maxScrollDistance
          }
          
          // 4. Não permite offset negativo (acima do topo inicial)
          if (calculatedOffset < 0) {
            calculatedOffset = 0
          }
          
          // 5. Verifica se já chegou na seção de projetos
          //    Quando o scrollY atingir o topo dos projetos, esconde o Moon
          const hasReachedProjects = scrollY >= projectsTop - window.innerHeight * 0.1
          
          setOffsetY(calculatedOffset)
          setIsVisible(!hasReachedProjects) // Esconde quando chegar nos projetos
          
          ticking = false
        })
      }
    }

    // Adiciona event listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    
    // Calcula posição inicial
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
    <div
      ref={moonRef}
      className="fixed top-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-transform duration-100"
      style={{
        transform: `translate(-50%, ${offsetY}px)`,
      }}
    >
      {/* LUA — DARK */}
      {theme === "dark" && (
        <div className="relative w-8 h-8 rounded-full bg-[#ddd9d9]
          shadow-[0_0_70px_rgba(255,255,255,0.3)] overflow-hidden">
          <span className="absolute top-1 left-1 w-2 h-2 rounded-full bg-black/10" />
          <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-black/8" />
          <span className="absolute top-3 right-2 w-1 h-1 rounded-full bg-black/12" />
        </div>
      )}

      {/* SOL — LIGHT */}
      {theme === "light" && (
        <div className="relative w-8 h-8 rounded-full bg-yellow-400
          shadow-[0_0_60px_rgba(255,200,0,0.8)]">
        </div>
      )}
    </div>
  )
}