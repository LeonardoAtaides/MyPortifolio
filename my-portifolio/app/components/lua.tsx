"use client"

import { useEffect, useState } from "react"

export default function LuaParallax() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY)
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      className="fixed top-24 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
      style={{
        transform: `translate(-50%, ${offsetY * 0.25}px)`,
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
