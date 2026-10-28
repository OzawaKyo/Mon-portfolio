import { useEffect, useState } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import "./CursorFollower.css"

export default function CursorFollower() {
  const prefersReducedMotion = useReducedMotion()
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [visible, setVisible] = useState(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Le point suit la souris quasiment sans délai
  const dotX = useSpring(rawX, { damping: 40, stiffness: 900, mass: 0.2 })
  const dotY = useSpring(rawY, { damping: 40, stiffness: 900, mass: 0.2 })

  // L'anneau traîne légèrement derrière, effet "magnétique" discret
  const ringX = useSpring(rawX, { damping: 28, stiffness: 220, mass: 0.6 })
  const ringY = useSpring(rawY, { damping: 28, stiffness: 220, mass: 0.6 })

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)

      setVisible((prev) => (prev ? prev : true))

      const target = e.target as HTMLElement
      const interactive = target.closest<HTMLElement>("a, button, .clickable, [data-cursor]")

      setHovered(Boolean(interactive))
      setCursorText(interactive?.dataset.cursor ?? "")
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseLeave = () => setVisible(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [rawX, rawY, prefersReducedMotion])

  if (prefersReducedMotion || !visible) return null

  const ringSize = cursorText ? 90 : hovered ? 54 : 32

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: hovered ? 0 : 1, scale: clicked ? 0.6 : 1 }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          scale: clicked ? 0.85 : 1,
          backgroundColor: hovered ? "rgba(255, 255, 255, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <motion.span
            className="cursor-ring-text"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  )
}
