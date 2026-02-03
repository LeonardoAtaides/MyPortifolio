"use client"

import { useState, useEffect } from "react"
import { Sun, Globe, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/app/context/language"
import { translations } from "@/lib/translations"

export default function Navbar() {
  const [openLang, setOpenLang] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Fechar menu quando clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-colors duration-300" style={{
            backgroundColor: theme === "dark" ? "#000" : "var(--bg)",
          }}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-2" >
        {/* Logo - Esquerda */}
        <a href="#" className="z-50">
          <img
            src="/assets/Logo_a.png"
            alt="Logo"
            className="w-[54px] h-[41px]"
          />
        </a>

        {/* Menu Mobile - Botão Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          {/* Idioma - Mobile */}
          <div className="relative">
            <Globe
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition relative z-10"
              onClick={() => setOpenLang((prev) => !prev)}
            />

            {/* Menu flutuante */}
            <div
              className={`
                absolute top-full -right-[35px] mt-2
                flex items-center gap-2
                rounded-full
                py-2 px-4
                transition-all duration-300 ease-out
                shadow-lg
                ${
                  openLang
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-3 pointer-events-none"
                }
              `}
              style={{
                backgroundColor:
                  theme === "dark" ? "#0F0F0F" : "var(--bg-secundary)",
              }}
            >
              <span
                onClick={() => {
                  setLanguage("pt")
                  setOpenLang(false)
                }}
                className={`font-bold text-sm cursor-pointer transition leading-none ${
                  language === "pt" ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              >
                PT
              </span>

              <span className="leading-none">|</span>

              <span
                onClick={() => {
                  setLanguage("en")
                  setOpenLang(false)
                }}
                className={`font-bold text-sm cursor-pointer transition leading-none ${
                  language === "en" ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              >
                EN
              </span>
            </div>
          </div>

          {/* Toggle Theme - Mobile */}
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

          {/* Botão Hamburguer */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer hover:opacity-80 transition z-50"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Desktop - Central */}
        <nav className="hidden md:flex items-center gap-12 px-10 py-3 font-semibold text-sm tracking-wide rounded-full transition-colors duration-300"
          
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

        {/* Ações Desktop */}
        <div className="hidden md:flex items-center gap-6">
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

      {/* Menu Mobile Dropdown */}
      <div
        className={`
          md:hidden fixed top-0 left-0 right-0 h-screen 
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
        style={{ 
          paddingTop: "5rem",
          zIndex: 40,
           backgroundColor: theme === "dark" ? "#000" : "var(--bg-secundary)",
        }}
      >
        <nav className="flex flex-col items-center gap-8 py-10 px-4 font-semibold text-lg tracking-wide">
          <a 
            href="#projects"
            className="hover:opacity-80 transition uppercase w-full text-center py-3"
            onClick={handleLinkClick}
          >
            {t.navbar.projects}
          </a>
          <a 
             href="#aboutme" 
            className="hover:opacity-80 transition uppercase w-full text-center py-3"
            onClick={handleLinkClick}
          >
            {t.navbar.about}
          </a>
          <a 
            href="#contact" 
            className="hover:opacity-80 transition uppercase w-full text-center py-3"
            onClick={handleLinkClick}
          >
            {t.navbar.contact}
          </a>
        </nav>
      </div>
    </header>
  )
}