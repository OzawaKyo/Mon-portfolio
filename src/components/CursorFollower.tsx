import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import "./CursorFollower.css"

const TRAIL_COUNT = 5

export default function CursorFollower() {
  const prefersReducedMotion = useReducedMotion()
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mainX = useSpring(rawX, { damping: 25, stiffness: 300, mass: 0.5 })
  const mainY = useSpring(rawY, { damping: 25, stiffness: 300, mass: 0.5 })
  const blurX = useSpring(rawX, { damping: 50, stiffness: 200 })
  const blurY = useSpring(rawY, { damping: 50, stiffness: 200 })

  const trailsRef = useRef<HTMLDivElement[]>([])
  const trailPositions = useRef(Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 })))
  const mousePos = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | undefined>(undefined)

  // Créer les éléments de traînée une seule fois (manipulation DOM directe pour éviter les re-renders)
  useEffect(() => {
    if (prefersReducedMotion) return

    trailsRef.current = Array.from({ length: TRAIL_COUNT }, (_, i) => {
      const div = document.createElement("div")
      div.className = "custom-cursor-trail"
      div.style.opacity = `${1 - i * 0.15}`
      div.style.transform = `scale(${1 - i * 0.1})`
      document.body.appendChild(div)
      return div
    })

    const animateTrails = () => {
      let prevX = mousePos.current.x
      let prevY = mousePos.current.y

      trailPositions.current.forEach((pos, i) => {
        pos.x += (prevX - pos.x) * 0.3
        pos.y += (prevY - pos.y) * 0.3
        const trail = trailsRef.current[i]
        if (trail) {
          trail.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${1 - i * 0.1})`
        }
        prevX = pos.x
        prevY = pos.y
      })

      rafId.current = requestAnimationFrame(animateTrails)
    }
    rafId.current = requestAnimationFrame(animateTrails)

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      trailsRef.current.forEach((div) => {
        if (div && document.body.contains(div)) {
          document.body.removeChild(div)
        }
      })
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      rawX.set(e.clientX)
      rawY.set(e.clientY)

      setVisible((prev) => (prev ? prev : true))

      const target = e.target as HTMLElement
      const isClickable = Boolean(
        target.tagName.toLowerCase() === "a" ||
          target.tagName.toLowerCase() === "button" ||
          target.closest("a") ||
          target.closest("button") ||
          target.classList.contains("clickable") ||
          target.closest(".clickable")
      )

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
  }, [rawX, rawY, prefersReducedMotion])

  if (prefersReducedMotion || !visible) return null

  const size = hovered ? 60 : 40

  return (
    <>
      <motion.div
        className={`custom-cursor-main ${clicked ? "custom-cursor-clicked" : ""}`}
        style={{
          x: mainX,
          y: mainY,
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          backgroundColor: "rgba(254, 202, 202, 0.2)",
          mixBlendMode: hovered ? "normal" : "difference",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <motion.div
          className="custom-cursor-ring"
          animate={{
            scale: clicked ? 0.8 : 1,
            opacity: clicked ? 0.5 : 1,
            rotate: [0, 360],
          }}
          transition={{
            rotate: { repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" },
            scale: { type: "spring", damping: 10, stiffness: 200 },
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

      <motion.div
        className="custom-cursor-blur"
        style={{
          x: blurX,
          y: blurY,
          marginLeft: -100,
          marginTop: -100,
          scale: clicked ? 1.2 : 1,
        }}
      />
    </>
  )
}
