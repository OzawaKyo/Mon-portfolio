"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import "./CursorFollower.css"

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")

  const trailsRef = useRef<HTMLDivElement[]>([])
  const trailCount = 5

  // Initialiser les références pour les traînées
  useEffect(() => {
    trailsRef.current = Array(trailCount)
      .fill(null)
      .map((_, i) => {
        const div = document.createElement("div")
        div.className = "custom-cursor-trail"
        div.style.opacity = `${1 - i * 0.15}`
        div.style.transform = `scale(${1 - i * 0.1})`
        document.body.appendChild(div)
        return div
      })

    return () => {
      trailsRef.current.forEach((div) => {
        if (div && document.body.contains(div)) {
          document.body.removeChild(div)
        }
      })
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Mettre à jour la position principale
      setPosition({ x: e.clientX, y: e.clientY })

      // Rendre le curseur visible après le premier mouvement
      if (!visible) setVisible(true)

      // Mettre à jour les positions des traînées avec un délai
      trailsRef.current.forEach((trail, i) => {
        if (trail) {
          setTimeout(() => {
            if (trail) {
              trail.style.left = `${e.clientX}px`
              trail.style.top = `${e.clientY}px`
            }
          }, i * 40) // Délai progressif pour chaque traînée
        }
      })

      // Détecter si on survole un élément cliquable
      const target = e.target as HTMLElement
      const isClickable = Boolean(
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable") ||
        target.closest(".clickable")
      )

      setCursorVariant(isClickable ? "hover" : "default")
      setHovered(isClickable)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [visible])

  // Variants pour les animations du curseur
  const variants = {
    default: {
      height: 40,
      width: 40,
      x: position.x - 20,
      y: position.y - 20,
      backgroundColor: "rgba(254, 202, 202, 0.2)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      height: 60,
      width: 60,
      x: position.x - 30,
      y: position.y - 30,
      backgroundColor: "rgba(254, 202, 202, 0.2)",
      mixBlendMode: "normal" as const,
    },
  }

  if (!visible) return null

  return (
    <>
      <motion.div
        className={`custom-cursor-main ${clicked ? "custom-cursor-clicked" : ""}`}
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        <motion.div
          className="custom-cursor-ring"
          animate={{
            scale: clicked ? 0.8 : 1,
            opacity: clicked ? 0.5 : 1,
            rotate: [0, 360],
          }}
          transition={{
            rotate: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "linear",
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 200,
            },
          }}
        />

        {hovered && (
          <motion.div className="custom-cursor-dot" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} />
        )}

        <motion.div
          className="custom-cursor-particles"
          animate={{ rotate: 360 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "linear" }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="custom-cursor-particle"
              style={{
                transform: `rotate(${i * 60}deg) translateX(${hovered ? 25 : 15}px)`,
              }}
              animate={{
                opacity: [0.7, 0.3, 0.7],
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Effet de flou qui suit le curseur */}
      <motion.div
        className="custom-cursor-blur"
        animate={{
          x: position.x - 100,
          y: position.y - 100,
          scale: clicked ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 200,
        }}
      />
    </>
  )
}
