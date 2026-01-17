"use client"

import { useState } from "react"

interface ProjectCardProps {
  image: string
  title: string
  description: string
  backBg?: string
  shadowColor?: string
  link?: string
}

export function ProjectCard({
  image,
  title,
  description,
  backBg = "#0B1E33",
  shadowColor = "rgba(255,255,255,0.15)",
  link,
}: ProjectCardProps) {
  const [face, setFace] = useState<0 | 1>(0)

  return (
    <div className="w-full max-w-sm">
      {/*TITULO*/}
      <div className="mb-2">
        <h2 className="uppercase text-xl font-semibold text-white">
          {face === 0 ? title : "Informações"}
        </h2>
      </div>

      {/*CARD*/}
      <div
        className="relative overflow-hidden rounded-xl bg-[#0F0F0F]"
        style={{ boxShadow: `0 0 6px ${shadowColor}` }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${face * 100}%)` }}
        >
          {/*CAPA DO CARD*/}
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

          {/*DESCRIÇÃO*/}
          <div
            className="min-w-full h-[420px] p-5 text-white/90 cursor-default select-text"
            style={{ backgroundColor: backBg }}
          >
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/*PASSADORES*/}
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
