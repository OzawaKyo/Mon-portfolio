"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import "./BackgroundElements.css"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
}

interface Line {
  x1: number
  y1: number
  x2: number
  y2: number
  width: number
}

export const ConstellationBackground = () => {
  const constellationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!constellationRef.current) return

    const container = constellationRef.current
    const width = container.offsetWidth
    const height = container.offsetHeight

    // Créer les étoiles
    const starCount = Math.floor((width * height) / 15000) // Nombre d'étoiles proportionnel à la taille
    const stars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
      })
    }

    // Créer les lignes entre les étoiles proches
    const lines: Line[] = []
    const maxDistance = Math.min(width, height) / 5

    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x
        const dy = stars[i].y - stars[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          lines.push({
            x1: stars[i].x,
            y1: stars[i].y,
            x2: stars[j].x,
            y2: stars[j].y,
            width: 1 - distance / maxDistance,
          })
        }
      }
    }

    // Nettoyer le conteneur
    container.innerHTML = ""

    // Ajouter les étoiles
    stars.forEach((star) => {
      const starElement = document.createElement("div")
      starElement.className = "star"
      starElement.style.width = `${star.size}px`
      starElement.style.height = `${star.size}px`
      starElement.style.left = `${star.x}px`
      starElement.style.top = `${star.y}px`
      starElement.style.opacity = star.opacity.toString()
      container.appendChild(starElement)
    })

    // Ajouter les lignes
    lines.forEach((line) => {
      const lineElement = document.createElement("div")
      lineElement.className = "line"

      const dx = line.x2 - line.x1
      const dy = line.y2 - line.y1
      const length = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx)

      lineElement.style.width = `${length}px`
      lineElement.style.height = `${line.width}px`
      lineElement.style.left = `${line.x1}px`
      lineElement.style.top = `${line.y1}px`
      lineElement.style.transform = `rotate(${angle}rad)`
      lineElement.style.opacity = (line.width * 0.5).toString()

      container.appendChild(lineElement)
    })
  }, [])

  return <div ref={constellationRef} className="constellation" />
}

export const FloatingShapes = () => {
  return (
    <div className="floating-shapes">
      <motion.div
        className="floating-shape shape-blue"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="floating-shape shape-orange"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 25,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="floating-shape shape-purple"
        animate={{
          x: [0, 15, 0],
          y: [0, -20, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 18,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="floating-shape shape-cyan"
        animate={{
          x: [0, -25, 0],
          y: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 22,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export const TechShapes = () => {
  return (
    <div className="tech-shapes">
      {/* Formes tech */}
      <motion.div
        className="tech-shape tech-shape-1"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" },
          scale: { repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="tech-shape tech-shape-2"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { repeat: Number.POSITIVE_INFINITY, duration: 25, ease: "linear" },
          scale: { repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="tech-shape tech-shape-3"
        animate={{
          rotate: 360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { repeat: Number.POSITIVE_INFINITY, duration: 30, ease: "linear" },
          scale: { repeat: Number.POSITIVE_INFINITY, duration: 12, ease: "easeInOut" },
        }}
      />

      {/* Pixels */}
      <motion.div
        className="tech-pixel pixel-1"
        animate={{
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: "easeInOut",
          delay: 0,
        }}
      />

      <motion.div
        className="tech-pixel pixel-2"
        animate={{
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 4,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="tech-pixel pixel-3"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="tech-pixel pixel-4"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 4.5,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  )
}
