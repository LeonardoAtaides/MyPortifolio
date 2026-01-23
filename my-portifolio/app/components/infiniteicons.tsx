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
    <div className="relative w-full overflow-hidden py-8 my-8">
      {/* Gradiente nas bordas para esconder transição */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      {/* Contêiner principal com animação */}
      <div className="flex animate-infinite-scroll gap-16 px-4">
        {/* Primeira cópia */}
        {icons.map((Icon, index) => (
          <div 
            key={`first-${index}`}
            className="flex-shrink-0 transition-all duration-500 h hover:text-blue-400"
          >
            <Icon size={36} color="white" />
          </div>
        ))}
        
        {/* Copy Two */}
        {icons.map((Icon, index) => (
          <div 
            key={`second-${index}`}
            className="flex-shrink-0 transition-all duration-500 h hover:text-green-400"
          >
            <Icon size={36} color="white" />
          </div>
        ))}
        
        {/* Copy Theree*/}
        {icons.map((Icon, index) => (
          <div 
            key={`third-${index}`}
            className="flex-shrink-0 transition-all duration-500 h hover:text-purple-400"
          >
            <Icon size={36} color="white" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 40s linear infinite;
        }
        
        
        /* Para navegadores que suportam */
        @supports (animation-timeline: scroll()) {
          .animate-infinite-scroll {
            animation-timeline: auto;
          }
        }
      `}</style>
    </div>
  );
}