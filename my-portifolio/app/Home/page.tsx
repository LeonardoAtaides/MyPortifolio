"use client";
import Intro from "../components/intro";
import StarBackground from "../components/starbackground";
import Titulo from "../components/titles";
import Lua from "../components/lua";
import { useState } from "react";
import { Globe, Sun } from "lucide-react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const handleIntroFinish = () => setShowIntro(false);

  return (
    <main className="min-h-screen w-full bg-black text-white z-10">
    <StarBackground />
      {showIntro && (
        <div className="fixed inset-0 z-50">
          <Intro onFinish={handleIntroFinish} />
        </div>
      )}

      {/* NAVBAR */}
      <header className="w-full flex justify-center pt-6">
        <div className="w-full max-w-7xl flex items-center justify-evenly gap-10 px-8" >
          
          {/* Logo */}
          <a href="#">
          <img
            src="/assets/Logo_a.png"
            alt="Logo"
            className="w-[54px] h-[41px]"
          />            
          </a>

          {/* Menu central */}
          <nav className="flex items-center gap-12 bg-[#0F0F0F] px-10 py-3  font-semibold text-sm tracking-wide rounded-full">
            <a href="#" className="hover:opacity-80 transition">
              SOBRE MIM
            </a>
            <a href="#" className="hover:opacity-80 transition">
              PROJETOS
            </a>
            <a href="#" className="hover:opacity-80 transition">
              CONTATO
            </a>
          </nav>

          {/* Ações */}
          <div className="flex items-center gap-10">
            <Sun className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
            <Globe className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
          </div>
        </div>

      </header>

      < Lua />

      {/* Apresentação */}
      <div className=" relative z-10 flex flex-col justify-center font-bold text-center mt-40">
        <h1 className="text-3xl text-center">Olá, me chamo Leonardo Ataídes</h1>
        <div className="flex justify-center mt-5 text-xl">
            <p className="text-justify w-210">
                Sou Desenvolvedor Front-End e Design, crio sites e landing pages que unem beleza, usabilidade e performance, transformo ideias em experiências digitais reais, destacando o que sua empresa ou marca tem de melhor para oferecer.
            </p>
        </div>
            
       <div className="flex justify-center gap-15 mt-10 items-center">
          <a href="/cv-leonardo-ataides.pdf" download className="bg-[#0F0F0F] px-6 py-3 rounded-full transition duration-300 ease-out hover:scale-105 active:scale-95">
              BAIXAR CV
          </a>
          <a href="https://wa.me/5561993992964" className="bg-[#0F0F0F] px-6 py-3 rounded-full transition duration-300 ease-out hover:scale-105 active:scale-95">
              FALE COMIGO
          </a>                    
        </div>

      </div>

      {/* Projetos */}
      <Titulo  tipo={0}/>
      <div className="relative z-20 mt-10">
      <img src="/assets/CometaSuperior.svg" alt="" className="w-full h-full" />
      <div className="bg-[#0F0F0F] w-full h-auto">
        
      </div>
      <img src="/assets/CometaInferior.svg" alt="" className="w-full h-full" />
      </div>

      <Titulo  tipo={1}/>







       
    </main>
  );
}
