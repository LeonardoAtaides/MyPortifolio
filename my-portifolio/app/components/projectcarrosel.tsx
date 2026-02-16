"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"
import { ProjectCard } from "./projetccard"
import { useLanguage } from "@/app/context/language"
import { translations } from "@/lib/translations"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
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
    link: "https://www.linkedin.com/posts/leonardo-ataides-a87a04273_mais-um-projeto-conclu%C3%ADdo-com-sucesso-activity-7401412714566246401-4cii?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELkCQcBJOV3ixqi502AeZ8ycw_tXu8yov8",
    technologies: ["NEXT.JS", "TAILWIND", "TYPESCRIPT", "FIGMA", "MYSQL", "NODE.JS"],
  }, 
  {
    image: "/assets/Project-UI.png",
    backBg: "#000",
    shadowColor: "rgba(0,0,0,0.6)",
    link: "https://www.figma.com/design/cYWeMd4vXrL2lPPn4JSdtj/GERAL-UX-E-UI?m=auto&t=cQ7b7bqqziC2fWXp-6",
    technologies: ["FIGMA", "PS TOUCH"],
  },   
  {
    image: "/assets/Project-NH.png",
    backBg: "#182C48",
    shadowColor: "rgba(24,44,72,0.8)",
    link: "https://www.vidracarianovohorizonte.com.br/home.html",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "FIGMA"],
  },
]

export default function ProjectsCarousel() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const carouselRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const bgColor = theme === "dark" ? "#0F0F0F" : "var(--earth)"

  const scrollNext = () => {
    if (!carouselRef.current) return

    const container = carouselRef.current
    const scrollAmount = container.clientWidth

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  const scrollPrev = () => {
    if (!carouselRef.current) return

    const container = carouselRef.current
    const scrollAmount = container.clientWidth

    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    })
  }


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
          ref={carouselRef}
          className="
          flex
          2xl:grid
          2xl:grid-cols-4
          overflow-x-auto
          2xl:overflow-visible
          snap-x snap-mandatory
          2xl:snap-none
          scroll-smooth
          gap-4
          md:gap-14
          lg:gap-0
          xl:gap-0
          2xl:gap-0
          py-6
          scrollbar-hide
          justify-start
          xl:justify-between
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
              md:w-[720px]
              lg:w-1/2
              xl:w-1/2
              2xl:w-auto
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

      {/* BOTÕES DE NAVEGAÇÃO */}
      <div className="relative bottom-16 left-[70%] z-50 flex gap-3 2xl:hidden">
        <button
          onClick={scrollPrev}
          className="
            w-10 h-10
            rounded-full
            bg-[#1b1b1b]
            text-white
            flex items-center justify-center
            transition
          "
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={scrollNext}
          className="
            w-10 h-10
            rounded-full
           bg-[#1b1b1b]
            text-white
            flex items-center justify-center    
            transition
          "
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}
