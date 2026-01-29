"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ProjectCard } from "./projetccard"

const projects = [
  {
    image: "/assets/Project-NH.png",
    title: "Landing Page",
    description:
      "Esta landing page foi desenvolvida para uma vidraçaria com o objetivo de apresentar sua história, serviços e canais de contato de forma clara e estratégica. O projeto contou com um design moderno e interativo, focado na usabilidade e na melhor experiência do usuário, facilitando a navegação e o acesso às informações.",
    backBg: "#182C48",
    shadowColor: "rgba(24,44,72,0.8)",
    link: "https://www.vidracarianovohorizonte.com.br/home.html",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "FIGMA"],
  },
  {
    image: "/assets/Project-MP.png",
    title: "Landing Page",
    description:
      "Esta landing page foi desenvolvida para uma empresa de fibra óptica, com o objetivo de apresentar seus serviços de forma clara e estratégica. O projeto conta com um design moderno e clean, focado em conversão, pensado para prender a atenção do visitante, estimular o interesse e conduzir o cliente à tomada de decisão de forma intuitiva e eficiente.",
    backBg: "#000",
    shadowColor: "rgba(0,0,0,0.6)",
    link: "https://mptelecom.com.br",
    technologies: ["REACT", "TAILWIND", "JAVASCRIPT", "FIGMA"],
  },
  {
    image: "/assets/Project-Malvader.png",
    title: "Projeto Acadêmico",
    description:
      "Este projeto acadêmico foi feito por mim e mais 3 colegas de classe, onde desenvolvemos um sistema bancário completo, de forma bem simples mas com um ótimo visual e focado na usabilidade, tendo acesso multinível — um projeto totalmente completo.",
    backBg: "#034163",
    shadowColor: "rgba(3,65,99,0.8)",
    link: "https://www.linkedin.com/posts/leonardo-ataides-a87a04273_mais-um-projeto-conclu%C3%ADdo-com-sucesso-activity-7401412714566246401-4cii",
    technologies: ["NEXT.JS", "TAILWIND", "TYPESCRIPT", "FIGMA", "MYSQL"],
  },
  {
    image: "/assets/Project-UI.png",
    title: "UI / UX",
    description:
      "Utilizo o Figma como minha principal ferramenta atualmente para desenvolver projetos de design e protótipos, garantindo que toda a estrutura esteja pronta antes da codificação.",
    backBg: "#000",
    shadowColor: "rgba(0,0,0,0.6)",
    link: "https://www.figma.com/design/cYWeMd4vXrL2lPPn4JSdtj/GERAL-UX-E-UI",
    technologies: ["FIGMA", "PS TOUCH"],
  },
]

export default function ProjectsCarousel() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 🚨 evita hydration error
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
        className="w-full absolute "
        alt="Barra verde"
      />
      )}


      {/* CONTAINER SCROLL */}
      <div className="px-4" style={{ backgroundColor: bgColor }}>
        <div
          className="flex justify-center gap-14 overflow-x-auto py-6 snap-x snap-mandatory scrollbar-hide"
          style={{ backgroundColor: bgColor }}
        >
          {projects.map((project, index) => (
            <div key={index} className="snap-start">
              <ProjectCard {...project} />
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
