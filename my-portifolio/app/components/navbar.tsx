"use client"

import { useState } from "react"
import { Sun, Globe } from "lucide-react"

export default function Navbar() {
  const [openLang, setOpenLang] = useState(false)

  return (
    <header className="w-full flex justify-center pt-6">
      <div className="w-full max-w-7xl flex items-center justify-evenly gap-10 px-8">

        {/* Logo */}
        <a href="#">
          <img
            src="/assets/Logo_a.png"
            alt="Logo"
            className="w-[54px] h-[41px]"
          />
        </a>

        {/* Menu central */}
        <nav className="flex items-center gap-12 bg-[#0F0F0F] px-10 py-3 font-semibold text-sm tracking-wide rounded-full">
          <a href="#aboutme" className="hover:opacity-80 transition">
            SOBRE MIM
          </a>
          <a href="#projects" className="hover:opacity-80 transition">
            PROJETOS
          </a>
          <a href="#contact" className="hover:opacity-80 transition">
            CONTATO
          </a>
        </nav>

{/* Ações */}
<div className="relative flex items-center gap-6">
  <Sun className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />

  {/* Idioma */}
  <div className="relative">
    {/* Globe */}
    <Globe
      className="w-6 h-6 cursor-pointer hover:opacity-80 transition relative z-10"
      onClick={() => setOpenLang((prev) => !prev)}
    />

    {/* Menu flutuante */}
    <div
      className={`
    absolute top-1/2 -translate-y-1/2
    flex items-center gap-2
    bg-[#0F0F0F] rounded-full
    h-6 px-3 -py-1
    transition-all duration-300 ease-out
    ${openLang
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-3 pointer-events-none"}
  `}
    >
      {/* Espaço do Globe */}
      <div className=" -ml-3 w-6 h-6" />

      {/* Idiomas */}
        <span className="font-bold text-sm cursor-pointer hover:opacity-80 transition leading-none">
        PT
        </span>
        <span className="leading-none">|</span>
        <span className="font-bold text-sm cursor-pointer hover:opacity-80 transition leading-none">
        ENG
        </span>
    </div>
  </div>
</div>





      </div>
    </header>
  )
}
