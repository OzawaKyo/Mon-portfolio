import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Icon from "./Icon"
import type { Project } from "../data/projects"

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
        return
      }

      if (e.key !== "Tab" || !modalRef.current) return

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div
      className="project-modal-overlay"
      role="button"
      tabIndex={-1}
      aria-label="Fermer la fenêtre"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClose()
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events -- stops the overlay's close-on-click from bubbling, not an interactive control itself */}
      <div
        ref={modalRef}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 className="modal-title" id="project-modal-title">
            {project.title}
            <motion.span
              className="modal-emoji"
              animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              aria-hidden="true"
            >
              {project.emoji}
            </motion.span>
          </h2>
          <p className="modal-subtitle">{project.description}</p>
        </div>
        <div className="modal-content">
          <div className="modal-image-container">
            <img src={project.image} alt={project.title} className="modal-image" width={600} height={375} />
          </div>
          <div className="modal-details">
            <div className="modal-section">
              <h3 className="modal-section-title">Description</h3>
              <p className="modal-section-content">{project.longDescription}</p>
            </div>
            <div className="modal-section">
              <h3 className="modal-section-title">Technologies</h3>
              <div className="modal-tags">
                {project.tags.map((tag) => (
                  <motion.span key={tag} className="modal-tag" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-github-button">
                <Icon name="github" size={16} className="modal-button-icon" />
                GitHub
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link-button">
                <Icon name="external-link" size={16} className="modal-button-icon" />
                Voir le projet
              </a>
            )}
          </div>
        </div>
        <button ref={closeButtonRef} className="modal-close-button" onClick={onClose} aria-label="Fermer la fenêtre">
          <Icon name="close" size={24} />
        </button>
      </div>
    </div>
  )
}
