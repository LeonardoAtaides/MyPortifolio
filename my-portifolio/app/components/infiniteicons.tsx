"use client";

import { useEffect, useRef } from "react";
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
  SiTypescript
} from "react-icons/si";
import { VscodePlain } from "devicons-react";
import { Database } from "lucide-react";

export default function InfiniteIcons() {
  const trackRef = useRef<HTMLDivElement>(null);
  let x = 0;

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.4;

    const animate = () => {
      x -= speed;
      if (Math.abs(x) >= track.scrollWidth / 2) {
        x = 0;
      }
      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full overflow-hidden py-6 mt-14">
      <div ref={trackRef} className="flex whitespace-nowrap">
        {[...icons, ...icons, ...icons ].map((Icon, index) => (
          <span
            key={index}
            className="mx-6 inline-flex items-center justify-center text-white"
          >
            <Icon size={30} color="white" />
          </span>
        ))}
      </div>
    </div>
  );
}
