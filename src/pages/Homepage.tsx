import Navbar from "../components/Navbar"
// import HeroSection from "../components/HeroSection"
// import AboutSection from "../components/AboutSection"
// import SkillsSection from "../components/SkillsSection"
// import ProjectsSection from "../components/ProjectsSection"
// import ExperienceSection from "../components/ExperienceSection"
// import ContactSection from "../components/ContactSection"
// import Footer from "../components/Footer"
import { ConstellationBackground, FloatingShapes, TechShapes } from "../components/BackgroundElements"
// import ChaosCursor from "../components/ChaosCursor"

export default function HomePage() {
  return (
    <main className="home-page">
      <ConstellationBackground />
      <FloatingShapes />
      <TechShapes />
      {/* <ChaosCursor /> */}
     
      <Navbar /> 
      <div className="container">
        {/* <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection /> */}
      </div>
      {/* <Footer /> */}
    </main>
  )
}
