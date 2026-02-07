"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/app/context/language"
import { translations } from "@/lib/translations"

export default function Presentation() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { language} = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const buttonBg =
    theme === "dark" ? "#0F0F0F" : "var(--bg-secundary)"

  return (
    <div className="relative z-10 flex flex-col justify-center font-bold text-center mt-40 pb-20">
      <h1 className="text-2xl sm:text-3xl text-center">
        {t.presentation.title}
      </h1>

      <div className="flex justify-center mt-5 m-8 sm:mt-5 lg:m-0 lg:mt-5 text-xl">
        <p className="text-justify text-[17px] sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl w-210">
          {t.presentation.description}
        </p>
      </div>

      <div className="flex justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-15 sm:mt-10 md:mt-5 items-center">
        <a
          href="/cv-leonardo-ataides.pdf"
          download
          className="w-38 sm:w-40 py-3 rounded-full transition duration-300 ease-out hover:scale-105 active:scale-95 uppercase"
          style={{ backgroundColor: buttonBg }}
        >
         {t.presentation.buttonone}
        </a>

        <a
          href="https://wa.me/5561993992964"
          className="w-38 sm:w-40 py-3 rounded-full transition duration-300 ease-out hover:scale-105 active:scale-95 uppercase"
          style={{ backgroundColor: buttonBg }}
        >
          {t.presentation.buttontwo}
        </a>
      </div>
    </div>
  )
}
