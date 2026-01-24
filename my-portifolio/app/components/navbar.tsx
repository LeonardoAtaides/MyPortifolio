"use client"

import { Sun, Globe } from "lucide-react"

export default function Navbar() {
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
        <div className="flex items-center gap-10">
          <Sun className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
          <Globe className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
        </div>

      </div>
    </header>
  )
}
