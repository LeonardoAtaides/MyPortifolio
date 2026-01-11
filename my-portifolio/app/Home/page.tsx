"use client";
import Intro from "../components/intro";
import StarBackground from "../components/starbackground";
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
        <div className="w-full max-w-7xl flex items-center justify-between px-8">
          
          {/* Logo */}
          <img
            src="/assets/Logo_a.png"
            alt="Logo"
            className="w-[54px] h-[41px]"
          />

          {/* Menu central */}
          <nav className="flex items-center gap-12 bg-[#0F0F0F] px-10 py-3 rounded-full font-semibold text-sm tracking-wide">
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
          <div className="flex items-center gap-6">
            <Sun className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />
            <Globe className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />

          </div>

        </div>
      </header>
    </main>
  );
}
