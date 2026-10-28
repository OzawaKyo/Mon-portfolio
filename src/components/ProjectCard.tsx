import { motion } from "framer-motion"
import Icon from "./Icon"
import type { Project } from "../data/projects"

interface ProjectCardProps {
  project: Project
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
  onOpenDetails: () => void
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function ProjectCard({ project, isHovered, onHoverStart, onHoverEnd, onOpenDetails }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="project-card"
    >
      <div className="project-image-container" data-cursor="Voir">
        <div className="project-image-overlay"></div>
        <motion.div
          className="project-emoji"
          animate={isHovered ? { y: [0, -10, 0], rotate: [0, 10, -10, 0] } : { y: 0, rotate: 0 }}
          transition={{ duration: 1, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
          aria-hidden="true"
        >
          {project.emoji}
        </motion.div>
        <motion.img
          src={project.image}
          alt={project.title}
          className="project-image"
          width={400}
          height={250}
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <motion.span key={tag} className="project-tag" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="project-actions">
          <button onClick={onOpenDetails} className="project-details-button">
            Détails
          </button>
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir le code de ${project.title} sur GitHub`}
                className="project-link"
              >
                <Icon name="github" size={16} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ouvrir ${project.title}`}
                className="project-link"
              >
                <Icon name="external-link" size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
