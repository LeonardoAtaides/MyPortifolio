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
} from "react-icons/si";
import { VscodePlain } from "devicons-react";
import { Database} from "lucide-react";

export default function InfiniteIcons() {
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
  ];

  return (
    <div className="relative w-full overflow-hidden  py-6 mt-14">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...icons, ...icons].map((Icon, index) => (
          <span
            key={index}
            className="mx-6 inline-flex items-center justify-center text-white hover:text-white transition"
          >
            <Icon size={42} color="white" />
          </span>
        ))}
      </div>
    </div>
  );
}
