"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ProjectCard } from "./projetccard"
import { useLanguage } from "@/app/context/language"
import { translations } from "@/lib/translations"

const projects = [
{
    image: "/assets/Project-NH.png",
    backBg: "#182C48",
    shadowColor: "rgba(24,44,72,0.8)",
    link: "https://www.vidracarianovohorizonte.com.br/home.html",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "FIGMA"],
  },
  {
    image: "/assets/Project-MP.png",
    backBg: "#000",
    shadowColor: "rgba(0,0,0,0.6)",
    link: "https://mptelecom.com.br",
    technologies: ["REACT", "TAILWIND", "JAVASCRIPT", "FIGMA"],
  },
  {
    image: "/assets/Project-Malvader.png",
    backBg: "#034163",
    shadowColor: "rgba(3,65,99,0.8)",
    link: "...",
    technologies: ["NEXT.JS", "TAILWIND", "TYPESCRIPT", "FIGMA", "MYSQL", "NODE.JS"],
  },
  {
    image: "/assets/Project-UI.png",
    backBg: "#000",
    shadowColor: "rgba(0,0,0,0.6)",
    link: "...",
    technologies: ["FIGMA", "PS TOUCH"],
  },
]

export default function ProjectsCarousel() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const bgColor = theme === "dark" ? "#0F0F0F" : "var(--earth)"

  return (
    <div className="relative z-20 mt-12 pb-20">
      {/* COMETA SUPERIOR */}
      <img
        src={
          theme === "dark"
            ? "/assets/CometaSuperior.svg"
            : "/assets/CometaSuperiorVerde.svg"
        }
        className="w-full"
        alt="Cometa superior"
      />

      {theme === "light" && (
        <img
          src="/assets/BarraVerde.svg"
          className="w-full absolute"
          alt="Barra verde"
        />
      )}

      {/* CONTAINER DO CARROSSEL */}
      <div className="px-2" style={{ backgroundColor: bgColor }}>
        <div
          className="
            flex
            overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth
            gap-6
            sm:gap-14
            py-6
            scrollbar-hide
            justify-start
            sm:justify-center
          "
          style={{ backgroundColor: bgColor }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                snap-center
                flex-shrink-0
                w-full
                sm:w-auto
                flex
                justify-center
              "
            >
              <ProjectCard
                {...project}
                title={t.projects[index].title}
                description={t.projects[index].description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* COMETA INFERIOR */}
      <img
        src={
          theme === "dark"
            ? "/assets/CometaInferior.svg"
            : "/assets/CometaInferiorMarrom.svg"
        }
        className="w-full"
        alt="Cometa inferior"
      />
    </div>
  )
}