"use client"

import { ProjectCard } from "./projetccard"

const projects = [
  {
    image: "/assets/Project-NH.png",
    title: "Landing Page",
    description:
      "Landing page institucional com foco em conversão e identidade visual.",
    backBg: "#182C48",
    shadowColor: "rgba(24,44,72,0.8)",
    link: "https://www.vidracarianovohorizonte.com.br/home.html"
  },
  {
    image: "/assets/Project-MP.png",
    title: "Landing Page",
    description:
      "Site corporativo para provedor de internet com layout escuro.",
    backBg: "#000",
    shadowColor: "rgba(0,0,0,0.6)",
    link: "https://mptelecom.com.br"
  },
  {
    image: "/assets/Project-Malvader.png",
    title: "Projeto Acadêmico",
    description:
      "Sistema bancário acadêmico com foco em UX e interfaces modernas.",
    backBg: "#034163",
    shadowColor: "rgba(3,65,99,0.8)",    
    link: "https://www.linkedin.com/posts/leonardo-ataides-a87a04273_mais-um-projeto-conclu%C3%ADdo-com-sucesso-activity-7401412714566246401-4cii?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELkCQcBJOV3ixqi502AeZ8ycw_tXu8yov8"  
  },

{
    image: "/assets/Project-UI.png",
    title: "UI / UX",
    description:
      "Estudos de interface e experiência do usuário.",
    backBg: "#000",
    shadowColor: "rgba(0,0,0,0.6)",
    link: "https://www.figma.com/design/cYWeMd4vXrL2lPPn4JSdtj/GERAL-UX-E-UI?m=auto&t=bJ7S1YAyo2qfFLi9-1"
  },
]

export default function ProjectsCarousel() {
  return (
    <div className="relative z-20 mt-12">
      <img src="/assets/CometaSuperior.svg" className="w-full" />

      {/* CONTAINER SCROLL */}
      <div className="bg-[#0F0F0F] px-4  ">
        <div className="flex justify-center gap-14 overflow-x-auto py-6 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, index) => (
            <div key={index} className="snap-start">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <img src="/assets/CometaInferior.svg" className="w-full" />
    </div>
  )
}
