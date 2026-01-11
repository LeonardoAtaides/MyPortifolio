"use client"
import { useEffect, useState } from "react"
import type React from "react"

interface IntroProps {
  onFinish: () => void
}

// Versão Desktop
const IntroDesktop: React.FC<IntroProps> = ({ onFinish }) => {
  const [phase, setPhase] = useState<number>(0)
  const [fadeOut, setFadeOut] = useState<boolean>(false)
  const [typedText, setTypedText] = useState<string>("")
  const fullText = "Ataídes Dev"

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500) // Tags appear
    const t2 = setTimeout(() => setPhase(2), 1500) // Tags split
    const t3 = setTimeout(() => setPhase(3), 2500) // Text appears

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  useEffect(() => {
    if (phase >= 3) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setTimeout(() => setFadeOut(true), 800)
          setTimeout(() => onFinish(), 1500)
        }
      }, 100)

      return () => clearInterval(typingInterval)
    }
  }, [phase, onFinish])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Left tag element: < */}
        <div
          className={`absolute text-6xl font-bold text-white transition-all duration-900 ease-in-out ${
            phase >= 1 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(calc(-50% - 25px - ${phase >= 2 ? "190px" : "0px"}), -50%)`,
          }}
        >
          &lt;
        </div>

        {/* Right tag element: /> */}
        <div
          className={`absolute text-6xl font-bold text-white transition-all duration-900 ease-in-out ${
            phase >= 1 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(calc(-50% + 25px + ${phase >= 2 ? "190px" : "0px"}), -50%)`,
          }}
        >
          /&gt;
        </div>

        <div
          className={`absolute transition-opacity duration-100 ${phase >= 3 ? "opacity-100" : "opacity-0"}`}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="text-5xl font-bold tracking-wide uppercase text-white">
            {typedText}
          </h1>
        </div>
      </div>
    </div>
  )
}

// Versão Mobile
const IntroMobile: React.FC<IntroProps> = ({ onFinish }) => {
  const [phase, setPhase] = useState<number>(0)
  const [fadeOut, setFadeOut] = useState<boolean>(false)
  const [typedText, setTypedText] = useState<string>("")
  const fullText = "Ataídes Dev"

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500)
    const t2 = setTimeout(() => setPhase(2), 1500)
    const t3 = setTimeout(() => setPhase(3), 2500)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  useEffect(() => {
    if (phase >= 3) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setTimeout(() => setFadeOut(true), 800)
          setTimeout(() => onFinish(), 1500)
        }
      }, 100)

      return () => clearInterval(typingInterval)
    }
  }, [phase, onFinish])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Left tag element: < */}
        <div
          className={`absolute text-4xl font-bold text-white transition-all duration-1000 ease-in-out ${
            phase >= 1 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(calc(-50% - 17px - ${phase >= 2 ? "95px" : "0px"}), -50%)`,
          }}
        >
          &lt;
        </div>

        {/* Right tag element: /> */}
        <div
          className={`absolute text-4xl font-bold text-white transition-all duration-1000 ease-in-out ${
            phase >= 1 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(calc(-50% + 17px + ${phase >= 2 ? "95px" : "0px"}), -50%)`,
          }}
        >
          /&gt;
        </div>

        <div
          className={`absolute transition-opacity duration-500 ${phase >= 3 ? "opacity-100" : "opacity-0"}`}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="text-2xl font-bold tracking-wide uppercase text-white">
            {typedText}
          </h1>
        </div>
      </div>
    </div>
  )
}

const Intro: React.FC<IntroProps> = ({ onFinish }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile ? <IntroMobile onFinish={onFinish} /> : <IntroDesktop onFinish={onFinish} />
}

export default Intro
