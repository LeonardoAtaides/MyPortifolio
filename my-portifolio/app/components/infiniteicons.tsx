"use client";

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
  return (
    <div className="relative w-full overflow-hidden py-8 mt-12 pb-20">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      {/* Container com dupla animação para eliminar o pulo */}
      <div className="flex">
        {/* Primeira faixa */}
        <div className="flex animate-scroll-1 gap-16 px-4">
          {[...icons, ...icons, ...icons, ...icons].map((Icon, index) => (
            <div key={`a-${index}`} className="flex-shrink-0">
              <Icon size={36} color="white" />
            </div>
          ))}
        </div>
        
        {/* Segunda faixa (offset) */}
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