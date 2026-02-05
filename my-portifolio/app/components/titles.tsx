"use client"

import { useLanguage } from "@/app/context/language"
import { translations } from "@/lib/translations"

export interface TituloProps {
  tipo: 0 | 1 | 2 | 3
}

export default function Titulo({ tipo }: TituloProps) {
  const { language } = useLanguage()
  const t = translations[language]

  const texto = t.titles[tipo]

  if (!texto)
    return <h2 className="text-gray-500">Título não encontrado</h2>

  const cor = tipo === 1 || tipo === 2 ? "text-white" : "text-[#fff]"

  return (
    <h1 className={`text-2xl sm:text-4xl mt-5 sm:mt-4 md:mt-5 lg:mt-10  pl-8 sm:pl-20 md:pl-24 lg:pl-60 absolute uppercase ${cor}`}>
      {texto}
    </h1>
  )
}
