"use client";
import Intro from "../components/intro";
import { useState } from "react";

export default function Home() {
   const [showIntro, setShowIntro] = useState(true);
   const handleIntroFinish = () => setShowIntro(false);

  return (
    
    <main className="bg-black h-full w-full">
          {showIntro && (
        <div className="fixed inset-0 w-full h-full z-50">
          <Intro onFinish={handleIntroFinish} />
        </div>)}

        
      
    </main>
  );
}
