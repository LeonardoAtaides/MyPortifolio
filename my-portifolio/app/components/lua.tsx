"use client"

import { useEffect, useState, useRef } from "react"

export default function LuaParallax() {
  const [offsetY, setOffsetY] = useState(0)
  const [isBelowMeteor, setIsBelowMeteor] = useState(false)
  const moonRef = useRef<HTMLDivElement>(null)
  
  // Configurações ajustáveis
  const MAX_SCROLL_DISTANCE = 300 // Máximo que a lua pode descer (pixels)
  const METEOR_THRESHOLD = 400 // Ponto onde começa o meteoro (pixels do scroll)
  const PARALLAX_SPEED = 0.25 // Velocidade do parallax (25% do scroll)
  const INITIAL_TOP = 96 // top-24 = 96px

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY
        
        // Verifica se passou do meteoro
        if (scrollY > METEOR_THRESHOLD) {
          setIsBelowMeteor(true)
        } else {
          setIsBelowMeteor(false)
        }
        
        // Calcula o movimento limitado
        let calculatedOffset = scrollY * PARALLAX_SPEED
        
        // Limita o movimento máximo
        if (calculatedOffset > MAX_SCROLL_DISTANCE) {
          calculatedOffset = MAX_SCROLL_DISTANCE
        }
        
        setOffsetY(calculatedOffset)
      })
    }

    window.addEventListener("scroll", handleScroll)
    
    // Chama uma vez para iniciar
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={moonRef}
      className={`fixed top-24 left-1/2 -translate-x-1/2 z-0 pointer-events-none transition-all duration-300
        ${isBelowMeteor ? 'opacity-80 z-[-1]' : 'opacity-100'}`}
      style={{
        transform: `translate(-50%, ${offsetY}px)`,
      }}
    >
      {/* Lua */}
      <div className="relative w-8 h-8 rounded-full bg-[#eeecec]
        shadow-[0_0_70px_rgba(255,255,255,0.6)] overflow-hidden">

        {/* Manchas / crateras */}
        <span className="absolute top-1 left-1 w-2 h-2 rounded-full bg-black/10" />
        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-black/8" />
        <span className="absolute top-3 right-2 w-1 h-1 rounded-full bg-black/12" />
      </div>
    </div>
  )
}