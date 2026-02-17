"use client";
import Intro from "./components/intro";
import StarBackground from "./components/starbackground";
import Titulo from "./components/titles";
import Moon from "./components/moon";

import ProjectsCarousel from "./components/projectcarrosel";
import { useState } from "react";
import AboutMe from "./components/abooutme";
import InfiniteIcons from "./components/infiniteicons";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Presentation from "./components/presentation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const handleIntroFinish = () => setShowIntro(false);

  return (
    <main className="min-h-screen w-full  text-white z-10">
    <StarBackground />
      {showIntro && (
        <div className="fixed inset-0 z-50">
          <Intro onFinish={handleIntroFinish} />
        </div>
      )}
  
    <Navbar />
    
    < Moon />

    <Presentation />

    {/* Projects*/}
    <Titulo  tipo={0}/>
    <section id="projects" className="scroll-mt-32 sm:scroll-mt-26"> 
      <ProjectsCarousel />
    </section>

    {/* About me */}
    <section id="aboutme" className="scroll-mt-14 sm:scroll-mt-20">
      < AboutMe />
      < InfiniteIcons />
    </section>

    {/* Contact*/}
    <Titulo  tipo={3}/>
    <section id="contact" className="scroll-mt-20">
      <Contact />
    </section>
      
    </main>
  );
}
