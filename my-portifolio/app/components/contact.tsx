"use client"
import{
  SiInstagram,
  SiWhatsapp,
  SiLinkedin,
  SiGmail,
} from "react-icons/si";
import { useTheme } from "next-themes"

const socialLinks = [
    {
        icon:  SiInstagram,
        href: "https://www.instagram.com/_.ataides._/"
    },
    {
    icon:  SiWhatsapp,
    href: "https://wa.me/5561998449959"
    },

    {
    icon:  SiLinkedin,
    href: "https://www.linkedin.com/in/leonardo-ataides-a87a04273/"
    },

     {
    icon:  SiGmail,
    href: "mailto:leonardoataidesjesus@gmail.com"
    }
]

export default function Contact() {
  const { theme } = useTheme()
  return (
    <footer className="relative z-20 mt-12">
     <img src={ theme === "dark" ? "/assets/CometaSuperior.svg" : "/assets/CometaSuperiorVerde.svg"} className="w-full" />

      {/* CONTAINER SCROLL */}
      <div className="flex justify-center " style={{
        backgroundColor: theme === "dark" ? "#0F0F0F" : "var(--earth)",
      }}>
        <div className="flex flex-col justify-center text-centet">
        <h2 className="text-3xl w-220 text-justify m-6">E aí, despertou interesse no meu trabalho? Entre em contato comigo através das minhas redes sociais. Será um prazer conversar e transformar ideias em projetos!
        </h2>

        <div className="flex justify-center gap-20 my-12">
        {socialLinks.map(({ icon: Icon, href }, index) => (
            <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            >
            <Icon size={70} className="transition duration-300 ease-out
                        hover:scale-110 " />
            </a>
        ))}
        </div>

         <p className="text-center p-4">© 2026 – Ataídes Dev – Todos os direitos reservados</p> 
        </div>

        
      </div>
      

    </footer>
  )
}
