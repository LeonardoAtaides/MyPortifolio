"use client"

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
    <div className="relative w-full overflow-hidden py-6 mt-14">
      <div className="flex animate-marquee">
        {[...icons, ...icons, ...icons, ...icons].map((Icon, index) => (
          <span
            key={index}
            className="mx-6 inline-flex items-center justify-center text-white"
          >
            <Icon size={30} />
          </span>
        ))}
      </div>
    </div>
  );
}
