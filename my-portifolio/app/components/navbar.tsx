"use client"

import { useState, useEffect } from "react"
import { Sun, Globe, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/app/context/language"
import { translations } from "@/lib/translations"

export default function Navbar() {
  const [openLang, setOpenLang] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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
        <nav
          className="flex items-center gap-12 px-10 py-3 font-semibold text-sm tracking-wide rounded-full transition-colors duration-300"
          style={{
            backgroundColor: theme === "dark" ? "#0F0F0F" : "var(--bg-secundary)",
          }}
        >
          <a href="#aboutme" className="hover:opacity-80 transition uppercase">
            {t.navbar.about}
          </a>
          <a href="#projects" className="hover:opacity-80 transition uppercase">
            {t.navbar.projects}
          </a>
          <a href="#contact" className="hover:opacity-80 transition uppercase">
            {t.navbar.contact}
          </a>
        </nav>

        {/* Ações */}
        <div className="relative flex items-center gap-6">

          {/* Toggle Theme */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer hover:opacity-80 transition"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>

          {/* Idioma */}
          <div className="relative">
            <Globe
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition relative z-10"
              onClick={() => setOpenLang((prev) => !prev)}
            />

            {/* Menu flutuante */}
            <div
              className={`
                absolute top-1/2 -translate-y-1/2
                flex items-center gap-2
                rounded-full
                h-6 px-3
                transition-all duration-300 ease-out
                ${
                  openLang
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-3 pointer-events-none"
                }
              `}
              style={{
                backgroundColor:
                  theme === "dark" ? "#0F0F0F" : "var(--bg-secundary)",
              }}
            >
              <div className="-ml-3 w-6 h-6" />

              <span
                onClick={() => setLanguage("pt")}
                className={`font-bold text-sm cursor-pointer transition leading-none ${
                  language === "pt" ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              >
                PT
              </span>

              <span className="leading-none">|</span>

              <span
                onClick={() => setLanguage("en")}
                className={`font-bold text-sm cursor-pointer transition leading-none ${
                  language === "en" ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              >
                EN
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
