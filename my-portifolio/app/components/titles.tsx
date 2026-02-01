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
    <h1 className={`text-4xl mt-10 pl-60 absolute uppercase ${cor}`}>
      {texto}
    </h1>
  )
}
