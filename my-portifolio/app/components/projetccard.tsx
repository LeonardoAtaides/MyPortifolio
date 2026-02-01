"use client"

import { useState } from "react"
import { useLanguage } from "@/app/context/language"
import { translations } from "@/lib/translations"

interface ProjectCardProps {
  image: string
  title: string
  description: string
  backBg?: string
  shadowColor?: string
  link?: string
  technologies?: string[]
}

export function ProjectCard({
  image,
  title,
  description,
  backBg = "#0B1E33",
  shadowColor = "rgba(255,255,255,0.15)",
  link,
  technologies = [],
}: ProjectCardProps) {
  const { language } = useLanguage()
  const t = translations[language]
  const [face, setFace] = useState<0 | 1>(0)

  return (
    <div className="w-full max-w-sm">
      {/* ===== TÍTULO ===== */}
      <div className="mb-2">
        <h2 className="uppercase text-xl font-semibold text-white">
          {face === 0 ? title : t.card.title}
        </h2>
      </div>

      {/* ===== CARD ===== */}
      <div
        className="relative overflow-hidden rounded-xl bg-[#0F0F0F]"
        style={{ boxShadow: `0 0 6px ${shadowColor}` }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${face * 100}%)` }}
        >
          {/* -- CAPA CARD --*/}
          <div className="min-w-full h-[420px]">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full transition duration-300 ease-out hover:scale-105 active:scale-95 cursor-pointer"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </a>
            ) : (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* -- DESCRIÇÃO CARD --*/}
          <div
            className="min-w-full h-[420px] p-5 text-white/90 flex flex-col justify-between"
            style={{ backgroundColor: backBg }}
          >
            {/* Descrição */}
            <p className="text-base leading-relaxed text-justify">
              {description}
            </p>

            {/* Tecnologias */}
            {technologies.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t.card.subtitle}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1 text-xs font-semibold uppercase
                        rounded-full
                        bg-white/15 text-white
                        backdrop-blur-sm
                        border border-white/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== INDICADORES ===== */}
      <div className="flex justify-center gap-2 mt-3">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setFace(i as 0 | 1)}
            className={`h-[10px] w-4 rounded-full transition-all ${
              face === i ? "bg-white w-10" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
