"use client"

import { useState } from "react"
import Titulo from "../components/titles";
import {
  SiPython,
  SiHtml5,
  SiMysql,
  SiGithub,
  SiGit,
  SiFigma,
} from "react-icons/si"

export default function AboutMe() {
  const [on, setOn] = useState<0 | 1>(0)

  const Icons = [
  { name: "Python", icon: SiPython },
  { name: "HTML", icon: SiHtml5 },
  { name: "MySQL", icon: SiMysql },
  { name: "GitHub", icon: SiGithub },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  ]

  return (
    <section className="w-full flex flex-col">
      {/* ===== TÍTULO DINÂMICO ===== */}
       {on === 0 ? <Titulo tipo={1} /> : <Titulo tipo={2} />} 

    
      {/* ===== CONTEÚDO ===== */}
      <div className="relative overflow-hidden mt-26">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${on * 100}%)` }}
        >
          {/* ===== FACE 1 — SOBRE MIM ===== */}
          <div className="min-w-full">
            <div className="flex justify-center gap-20 items-center">
              <img
                src="assets/My_Photo.png"
                alt="Foto pessoal"
                className="w-[341px] h-auto rounded-xl"
              />

              <div className="w-[1005px] text-justify text-white/90">
                <p>
                  Atualmente, sou estudante do curso de Ciências da Computação no
                  CEUB, tenho 20 anos e sou apaixonado por transformar ideias em
                  soluções úteis que gerem valor e impacto real. Me dedico e
                  sempre busco evoluir por meio do estudo e da prática diária.
                  <br />
                  <br />
                  Por meio de projetos freelancers já são mais de 4
                  desenvolvidos, sozinho e em colaboração sigo em constante
                  busca por novos aprendizados com o objetivo de me tornar um
                  desenvolvedor Full Stack, ampliando minha visão técnica e
                  minha capacidade de entregar soluções completas.
                </p>
              </div>
            </div>
          </div>

          {/* ===== FACE 2 — CERTIFICAÇÕES ===== */}
          <div className="min-w-full">
            <div className="flex justify-center gap-30 items-center">
                <div className="w-[341px] h-[327px] rounded-xl bg-[#0F0F0F] flex justify-center items-center">
              <img
                src="assets/gown.png"
                alt="Certificações"
                className="w-60 h-auto"
              />
            </div>


              <div className="w-[520px]">
                <div className="grid grid-cols-3 gap-4">
                {Icons.map(({ name, icon: Icon }) => (
                    <div
                    key={name}
                    className="
                    w-[148px] h-[153px] p-2 rounded-xl flex justify-center items-center bg-[#0F0F0F]  text-white  transition duration-300 ease-out hover:scale-105 active:scale-105"
                    title={name}
                    >
                    <Icon size={60} />
                    </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== INDICADORES ===== */}
      <div className="flex justify-center gap-2 mt-10">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setOn(i as 0 | 1)}
            className={`h-[10px] w-4 rounded-full transition-all ${
              on === i ? "bg-white w-20" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
