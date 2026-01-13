"use client"

import { useState } from "react"

interface ProjectCardProps {
  image: string
  title: string
  description: string
  backBg?: string
  shadowColor?: string
}

export function ProjectCard({
  image,
  title,
  description,
  backBg = "#0B1E33",
  shadowColor = "rgba(255,255,255,0.15)",
}: ProjectCardProps) {
  const [face, setFace] = useState<0 | 1>(0)

  return (
    <div className="w-full max-w-sm">
      {/* ===== TITULO EM CIMA (DINÂMICO) ===== */}
      <div className="mb-2 text-center">
        <h2 className=" uppercase text-start text-xl font-semibold text-white transition-all duration-300">
          {face === 0 ? title : "Informações"}
        </h2>
      </div>

      {/* ===== CARD ===== */}
      <div
        className="relative overflow-hidden rounded-xl bg-[#0F0F0F]"
        style={{ boxShadow: `0 0 6px ${shadowColor}` }}
      >
        {/* SLIDE */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${face * 100}%)` }}
        >
          {/* ================= FACE 1 ================= */}
          <div className="min-w-full h-[420px] ">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* ================= FACE 2 ================= */}
          <div
            className="min-w-full h-[420px] p-5 text-white/90"
            style={{ backgroundColor: backBg }}
          >
            <p className="text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* ===== INDICADORES ===== */}
      <div className="flex justify-center gap-2 mt-3">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setFace(i as 0 | 1)}
            className={`h-2 w-3 rounded-full transition-all ${
              face === i ? "bg-white w-10" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
