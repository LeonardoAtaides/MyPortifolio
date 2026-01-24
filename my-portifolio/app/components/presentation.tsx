"use client"


export default function Presentation() {
  return (
    <div className=" relative z-10 flex flex-col justify-center font-bold text-center mt-40 pb-20">
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
  )
}
