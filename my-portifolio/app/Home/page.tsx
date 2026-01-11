"use client";
import Intro from "../components/intro";
import { useState } from "react";
import { Globe, Moon, Sun  } from "lucide-react";

export default function Home() {
   const [showIntro, setShowIntro] = useState(true);
   const handleIntroFinish = () => setShowIntro(false);

  return (
    
    <main className="bg-black h-full w-full">
          {showIntro && (
        <div className="fixed inset-0 w-full h-full z-50">
          <Intro onFinish={handleIntroFinish} />
        </div>)}

    <div className="flex justify-evenly pt-5 items-center gap-100">
        <img
            src="/assets/Logo_a.png"
            alt="Logo"
            className="w-[54px] h-[41px]"
          />

          <div className="flex justify-between bg-[#0F0F0F] text-white font-bold rounded-4xl p-3 px-8 gap-20 items-center">
            <a href=""> SOBRE MIM</a>
            <a href=""> PROJETOS</a>
            <a href="">CONTATO</a>
          </div>

        <div className="flex justify-center gap-10 items-center">
            <Globe className="w-6 h-6" />
            <Sun className="w-6 h-6" />
        </div>
           
    </div>
      
    </main>
  );
}
