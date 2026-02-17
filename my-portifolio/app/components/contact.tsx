"use client"

import {
  SiInstagram,
  SiWhatsapp,
  SiLinkedin,
  SiGmail,
} from "react-icons/si"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useLanguage } from "@/app/context/language"
import { translations } from "@/lib/translations"

const socialLinks = [
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/_.ataides._/",
  },
  {
    icon: SiWhatsapp,
    href: "https://wa.me/5561998449959",
  },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/leonardo-ataides-a87a04273/",
  },
  {
    icon: SiGmail,
    href: "mailto:leonardoataidesjesus@gmail.com",
  },
]

export default function Contact() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <footer className="relative z-20 mt-12">
      {/* Cometa */}
      <img
        src={
          theme === "dark"
            ? "/assets/CometaSuperior.svg"
            : "/assets/CometaSuperiorVerde.svg"
        }
        className="w-full"
        alt="Cometa"
      />

      {/* Barra verde apenas no light */}
      {theme === "light" && (
        <img
          src="/assets/BarraVerde.svg"
          className="absolute w-full max-w-none"
          alt="Barra verde"
        />
      )}

      {/* CONTAINER */}
      <div
        className="flex justify-center"
        style={{
          backgroundColor: theme === "dark" ? "#0F0F0F" : "var(--earth)",
        }}
      >
        <div className="w-full flex flex-col items-center text-center">
          {/* Texto */}
          <h2 className="text-[17px] sm:text-lg md:text-lg lg:text-[22px] xl:text-[26px] 2xl:text-3xl max-w-[90%] sm:max-w-[880px] text-justify m-8 sm:mx-8 sm:my-2 xl:m-5">
            {t.contact.description}
          </h2>

          {/* Ícones */}
          <div className="flex justify-center gap-8 sm:gap-20 my-5 sm:my-8 md:my-10 lg:my-12 xl:my-10 2xl:my-12">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  className="
                    w-12 h-12
                    sm:w-[60px] sm:h-[60px]
                    md:w-[64px] md:h-[64px]
                    xl:w-[65px] xl:h-[65px]
                    2xl:w-[70px] 2xl:h-[70px]
                    transition duration-300 ease-out
                    hover:scale-110
                  "
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-base text-center p-4">
            {t.contact.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
