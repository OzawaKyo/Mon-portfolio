import CursorFollower from "../components/CursorFollower"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import ExperienceSection from "../components/ExperienceSection"
import LoadingPage from "../components/LoadingPage"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import { ConstellationBackground, FloatingShapes, TechShapes } from "../components/BackgroundElements"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <main className="home-page">
      <ConstellationBackground />
      <FloatingShapes />
      <TechShapes />
      <CursorFollower />

      <Navbar /> 
      <div className="container">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection /> 
      </div>
      <Footer />
    </main>
  )
}
