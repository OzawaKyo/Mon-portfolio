import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Icon from "./Icon"
import { socialLinks } from "../data/social"
import "./HeroSection.css"
import profilePic from "../assets/2.webp"

const HeroSection = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  const spring = { damping: 50 }
  const shape1X = useSpring(useTransform(mouseX, (x) => x * 0.02), spring)
  const shape1Y = useSpring(useTransform(mouseY, (y) => y * 0.02), spring)
  const shape2X = useSpring(useTransform(mouseX, (x) => x * -0.01), spring)
  const shape2Y = useSpring(useTransform(mouseY, (y) => y * -0.01), spring)
  const shape3X = useSpring(useTransform(mouseX, (x) => x * 0.015), spring)
  const shape3Y = useSpring(useTransform(mouseY, (y) => y * 0.015), spring)

  return (
    <section id="hero" className="hero-section">
      {/* Animated background shapes */}
      <div className="background-shapes">
        <motion.div className="shape shape-1" style={{ x: shape1X, y: shape1Y }} />
        <motion.div className="shape shape-2" style={{ x: shape2X, y: shape2Y }} />
        <motion.div className="shape shape-3" style={{ x: shape3X, y: shape3Y }} />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero-badge-container">
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="badge-content">
                  <Icon name="sparkles" size={16} className="badge-icon" />
                  Étudiant en Informatique
                </span>
              </motion.div>
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Salut, je suis Mohamed! 👋
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Coder avec passion & un peu de chaos 🚀
              </motion.p>
              <motion.p
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Étudiant en L3 Informatique à l&apos;Université Grenoble Alpes, passionné par le développement web et
                les nouvelles technologies. 💻
              </motion.p>
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <a href="#projects" className="primary-button">
                  Voir mes projets
                </a>
                <a href="#contact" className="outline-button">
                  Me contacter
                </a>
              </motion.div>
            </div>
            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.name}
                  className="social-link"
                >
                  <Icon name={social.icon} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-avatar"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="avatar-container animate-float">
              <div className="avatar-glow"></div>
              <div className="avatar-image">
                <img
                  src={profilePic}
                  alt="Mohamed Amarcha"
                  className="avatar-img"
                  width={450}
                  height={450}
                />
              </div>

              {/* Éléments décoratifs autour de l'avatar */}
              <motion.div
                className="avatar-decoration decoration-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
                aria-hidden="true"
              >
                💻
              </motion.div>

              <motion.div
                className="avatar-decoration decoration-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                aria-hidden="true"
              >
                🎮
              </motion.div>

              <motion.div
                className="avatar-decoration decoration-3"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut", delay: 1 }}
                aria-hidden="true"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="scroll-text">Découvrir plus</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="scroll-icon-container"
          >
            <Icon name="chevron-down" size={24} className="scroll-icon" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
