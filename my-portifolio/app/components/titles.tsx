"use client"

import { useLanguage } from "@/app/context/language"
import { translations } from "@/lib/translations"
import { useEffect, useRef, useState } from "react"

export interface TituloProps {
  tipo: 0 | 1 | 2 | 3
}

export default function Titulo({ tipo }: TituloProps) {
  const { language } = useLanguage()
  const t = translations[language]

  const texto = t.titles[tipo]
  const ref = useRef<HTMLHeadingElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const startObserver = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )

      if (ref.current) observer.observe(ref.current)

      return () => observer.disconnect()
    }

    const timeout = setTimeout(() => {
      startObserver()
    }, 3500)

    return () => clearTimeout(timeout)
  }, [])

  if (!texto)
    return <h2 className="text-gray-500">Título não encontrado</h2>

  const cor = tipo === 1 || tipo === 2 ? "text-white" : "text-[#fff]"

  return (
    <h1
      ref={ref}
      className={`
        text-2xl sm:text-4xl
        mt-5 sm:mt-4 md:mt-5 lg:mt-8 xl:mt-10
        pl-8 sm:pl-20 md:pl-24 lg:pl-36 xl:pl-54 2xl:pl-60
        absolute uppercase
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${cor}
      `}
    >
      {texto}
    </h1>
  )
}
