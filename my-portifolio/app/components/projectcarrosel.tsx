"use client"

import { ProjectCard } from "./projetccard"

const projects = [
  {
    image: "/assets/Project-NH.png",
    title: "Landing Page",
    description:
      "Landing page institucional com foco em conversão e identidade visual.",
  },
  {
    image: "/assets/Project-MP.png",
    title: "Landing Page",
    description:
      "Site corporativo para provedor de internet com layout escuro.",
  },
  {
    image: "/assets/Project-Malvader.png",
    title: "Projeto Acadêmico",
    description:
      "Sistema bancário acadêmico com foco em UX e interfaces modernas.",
  },
{
    image: "/assets/Project-UI.png",
    title: "UI / UX",
    description:
      "Estudos de interface e experiência do usuário.",
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
