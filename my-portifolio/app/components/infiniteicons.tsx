"use client";

import { useEffect, useState } from "react"
import {
  SiPython,
  SiFigma,
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiGithub,
  SiReact,
  SiGit,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { VscodePlain } from "devicons-react";
import { Database } from "lucide-react";
import { useTheme } from "next-themes"

const icons = [
  SiPython,
  SiFigma,
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiGithub,
  SiReact,
  SiGit,
  SiTailwindcss,
  Database,
  VscodePlain,
  SiJavascript,
  SiTypescript,
];

export default function InfiniteIcons() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
  setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <div className="relative w-full overflow-hidden py-8 mt-12 pb-20">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"style={{background: `linear-gradient(to right, ${ theme === "dark" ? "#000" : "var(--bg)"}, transparent)`}}/>

      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"style={{background: `linear-gradient(to left, ${theme === "dark" ? "#000" : "var(--bg)"}, transparent)`}}/>
      
      <div className="flex">
        <div className="flex animate-scroll-1 gap-16 px-4">
          {[...icons, ...icons, ...icons, ...icons].map((Icon, index) => (
            <div key={`a-${index}`} className="flex-shrink-0">
              <Icon size={36} color="white" />
            </div>
          ))}
        </div>

        <div className="flex animate-scroll-2 gap-16 px-4">
          {[...icons, ...icons, ...icons, ...icons].map((Icon, index) => (
            <div key={`b-${index}`} className="flex-shrink-0">
              <Icon size={36} color="white" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-1 {
          animation: scroll 200s linear infinite;
          width: max-content;
        }
        
        .animate-scroll-2 {
          animation: scroll 200s linear infinite;
          width: max-content;
          animation-delay: -50s; /* Começa no meio da animação */
        }
        
      `}</style>
    </div>
  );
}