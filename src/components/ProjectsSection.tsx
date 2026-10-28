import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "./Icon"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import { projects, type Project } from "../data/projects"
import "./ProjectsSection.css"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">
            Mes projets <Icon name="sparkles" size={32} className="sparkles-icon" />
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">Découvrez quelques-uns des projets sur lesquels j&apos;ai travaillé.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProjectId === project.id}
              onHoverStart={() => setHoveredProjectId(project.id)}
              onHoverEnd={() => setHoveredProjectId(null)}
              onOpenDetails={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}

export default ProjectsSection
