"use client"
import { useEffect, useState } from "react"
import Titulo from "../components/titles";
import { useLanguage } from "@/app/context/language"
import { translations } from "@/lib/translations"
import {
  SiPython,
  SiGithub,
  SiGit,
  SiFigma,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiJavascript

} from "react-icons/si"
import { Database} from "lucide-react";
import { useTheme } from "next-themes"

export default function AboutMe() {
  const { theme} = useTheme()
  const [mounted, setMounted] = useState(false)
  const { language} = useLanguage()
  const t = translations[language]
  const photoSrc =
  theme === "dark"
    ? "/assets/My-Photo.png"
    : "/assets/My-Photo2.png"


  useEffect(() => {
    setMounted(true)
  }, [])
  const [on, setOn] = useState<0 | 1>(0)

  const Icons = [
  { name: "PYTHON", icon: SiPython },
  { name: "JAVASCRIPT", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5},
  { name: "CSS", icon: SiCss3 }, 
  { name: "MYSQL", icon: Database },
  { name: "GITHUB", icon: SiGithub },
  { name: "GIT", icon: SiGit },
  { name: "FIGMA", icon: SiFigma },
  { name: "REACT", icon: SiReact },
  { name: "NEXT.JS", icon: SiNextdotjs },

  ]

   if (!mounted) return null

  return (
    <section className="w-full flex flex-col">
      {/* ===== TÍTULO DINÂMICO ===== */}
       {on === 0 ? <Titulo tipo={1} /> : <Titulo tipo={2} />} 

    
      {/* ===== CONTEÚDO ===== */}
      <div className="relative overflow-hidden mt-16 sm:mt-26 md:mt-20">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${on * 100}%)` }}
        >
          {/* ===== FACE 1 — SOBRE MIM ===== */}
          <div className="min-w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20">

             <img
                src={photoSrc}
                alt="Foto"
                className="w-[313px] sm:w-[341px] h-auto rounded-xl transition-opacity duration-300"
              />

              <div className="w-full lg:w-[1005px] text-justify">
                <p className=" text-[17px] sm:text-lg md:text-xl mx-8 lg:mx-0 ">
                  {t.aboutme.myhistory1}
                  <br />
                  <br />
                  {t.aboutme.myhistory2}
                </p>
              </div>
            </div>
          </div>

          {/* ===== FACE 2 — CERTIFICAÇÕES ===== */}
          <div className="min-w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20">
                <div className="w-[313px] sm:w-[341px] h-[300px] sm:h-[327px]
                md:w[600px] rounded-xl flex justify-center items-center xl:mr-24" style={{
                backgroundColor: theme === "dark" ? "#0F0F0F" : "var(--bg-secundary)",
                }}>
              <img
                src="assets/gown.png"
                alt="Certificações"
                className="w-40 sm:w-50 md:w-52 lg:w-60 h-auto "
              />
            </div>


              <div className="w-full xl:w-[905px]">
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 gap-4 sm:gap-6 md:gap-4 justify-items-center mx-8 xl:mx-0 ">
                  {Icons.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="
                        w-[100px] h-[77px]
                        sm:h-[100px]
                        md:w-[120px] md:h-[120px]
                        xl:w-[150px] xl:h-[150px]
                        rounded-xl
                        bg-[#0F0F0F]
                        text-white
                        flex flex-col items-center justify-center
                        gap-3
                        transition duration-300 ease-out
                        hover:scale-105 active:scale-95
                      "
                      title={name}
                      style={{
                      backgroundColor: theme === "dark" ? "#0F0F0F" : "var(--bg-secundary)",
                      }}>
                    
                      <Icon size={40} className="size-[35px] md:size-[40px] lg:size-[60px]" />
                      <h2 className="text-xs md:text-sm lg:text-base">{name}</h2>
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
            className={`h-[14px] sm:h-[10px] w-4 rounded-full transition-all ${
              on === i ? "bg-white w-14 sm:w-20" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
