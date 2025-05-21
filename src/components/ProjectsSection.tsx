import { useState } from "react"
import { motion } from "framer-motion"
import "./ProjectsSection.css"
import books from "../assets/books.png"
import quarto from "../assets/quarto.png"
import coding from "../assets/coding.jpg"
import shell from "../assets/shell.png"

interface Project {
    id: number
    title: string
    description: string
    longDescription: string
    image: string
    tags: string[]
    link?: string
    github?: string
    emoji?: string
}

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    const projects: Project[] = [
        {
            id: 1,
            title: "Jeu de plateau Quarto",
            description: "Un clone du jeu Quarto développé en Java avec une IA",
            longDescription:
                "Conception et développement d’une version numérique du jeu de plateau Quarto – réalisé en équipe de 6 personnes, fidèle aux règles du jeu original. Modélisation complète de la logique du jeu (gestion du plateau, tour par tour, conditions de victoire). Création d’une interface utilisateur intuitive, assurant une prise en main rapide et une expérience agréable. Développement d’un algorithme d’ia avec plusieurs niveaux de difficulté, capable d’adapter ses choix stratégiques en fonction du niveau sélectionné. Mise en place d’un système de gestion des erreurs et d’un affichage pas-à-pas de l’exécution.",
            image: quarto,
            tags: ["Java", "Swing", "Programmation orientée objet", "Algorithmes", "MVC"],
            github: "https://github.com/OzawaKyo",
            emoji: "🎮",
        },
        {
            id: 2,
            title: "Gestionnaire de bibliothèque",
            description: "Une application web de gestion de bibliothèque avec React et Django",
            longDescription:
                "Développement d’une application web de bibliothèque en ligne – réalisé en équipe de 3 personnes. Application web permettant la gestion et la consultation d’un catalogue de livres en ligne. Conception de l’architecture client-serveur et définition des besoins fonctionnels. Implémentation du frontend avec React pour une interface dynamique et responsive. Développement du backend avec Django (Python) pour la gestion des utilisateurs, des ouvrages et des emprunts. Intégration de Firebase pour l’authentification et le stockage de données complémentaires.",

            image: books,
            tags: ["React", "Django", "Firebase", "Git"],

            github: "https://github.com/OzawaKyo",
            emoji: "📚",
        },
        {
            id: 3,
            title: "Simulateur de processeur ARMv5",
            description: "Un simulateur de processeur ARMv5 développé en C",
            longDescription:
                "Réalisation d’un simulateur ARMv5 en langage C – réalisé en équipe de 6 personnes. Étude approfondie de la documentation technique du processeur ARMv5 (jeu d’instructions, architecture, fonctionnement). Développement d’un simulateur capable d’exécuter des instructions assembleur ARMv5. Analyse du jeu d’instructions ARM et conception d’un interpréteur bas niveau. Implémentation en langage C de la gestion des registres, de la mémoire et du décodage d’instructions. Mise en place d’un système de gestion des erreurs et d’un affichage pas-à-pas de l’exécution. Organisation du projet avec Git, répartition des tâches et intégration progressive des modules. Tests de validation à l’aide de cas d’usage et de programmes ARM réels.",

            image: coding,
            tags: ["C", "Architecture", "Assembleur", "Simulation", "GCC", "Makefile"],
            github: "https://github.com/OzawaKyo",
            emoji: "⚙️",
        },
        {
            id: 4,
            title: "Mini Shell Unix",
            description: "Un mini shell Unix avec gestion des processus en C",
            longDescription:
                "Réalisation d’un mini-shell Unix – réalisé en équipe de 2 personnes. Conception et développement d’un mini-shell Unix permettant d’exécuter des processus en premier et arrière-plan. Gestion des jobs avec commandes intégrées et implémentation des signaux pour gérer l’interruption et la suspension des processus. Utilisation de setpgid pour gérer les groupes de processus et waitpid pour ramasser les processus zombies. Test Unitaire et Intégration continue avec GitLab.",
            image: shell,
            tags: ["C", "Unix", "Processus", "Shell", "SIGCHLD", "WAITPID"],
            github: "https://github.com/OzawaKyo",
            emoji: "💻",
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    const closeModal = () => {
        setSelectedProject(null)
    }

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
                        Mes projets{" "}
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sparkles-icon"
                        >
                            <path
                                d="M12 3V5M19.071 4.929L17.657 6.343M21 12H19M19.071 19.071L17.657 17.657M12 21V19M4.929 19.071L6.343 17.657M3 12H5M4.929 4.929L6.343 6.343"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                        </svg>
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
                        <motion.div
                            key={project.id}
                            variants={item}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className="project-card"
                        >
                            <div className="project-image-container">
                                <div className="project-image-overlay"></div>
                                <motion.div
                                    className="project-emoji"
                                    animate={
                                        hoveredProject === project.id ? { y: [0, -10, 0], rotate: [0, 10, -10, 0] } : { y: 0, rotate: 0 }
                                    }
                                    transition={{ duration: 1, repeat: hoveredProject === project.id ? Number.POSITIVE_INFINITY : 0 }}
                                >
                                    {project.emoji}
                                </motion.div>
                                <motion.img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="project-image"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <motion.span
                                            key={index}
                                            className="project-tag"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="project-actions">
                                    <button onClick={() => setSelectedProject(project)} className="project-details-button">
                                        Détails
                                    </button>
                                    <div className="project-links">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="GitHub"
                                                className="project-link"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15 22V18C15.1391 16.7473 14.7799 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27 6.52 3.92 7.75 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M9 18C4.49 20 4 16 2 16"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="External Link"
                                                className="project-link"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M15 3H21V9"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M10 14L21 3"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="project-modal-overlay" onClick={closeModal}>
                    <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className="modal-title">
                                {selectedProject.title}
                                <motion.span
                                    className="modal-emoji"
                                    animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                                >
                                    {selectedProject.emoji}
                                </motion.span>
                            </h2>
                            <p className="modal-subtitle">{selectedProject.description}</p>
                        </div>
                        <div className="modal-content">
                            <div className="modal-image-container">
                                <img
                                    src={selectedProject.image || "/placeholder.svg"}
                                    alt={selectedProject.title}
                                    className="modal-image"
                                />
                            </div>
                            <div className="modal-details">
                                <div className="modal-section">
                                    <h3 className="modal-section-title">Description</h3>
                                    <p className="modal-section-content">{selectedProject.longDescription}</p>
                                </div>
                                <div className="modal-section">
                                    <h3 className="modal-section-title">Technologies</h3>
                                    <div className="modal-tags">
                                        {selectedProject.tags.map((tag, index) => (
                                            <motion.span
                                                key={index}
                                                className="modal-tag"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-actions">
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="modal-github-button"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="modal-button-icon"
                                        >
                                            <path
                                                d="M15 22V18C15.1391 16.7473 14.7799 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27 6.52 3.92 7.75 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9 18C4.49 20 4 16 2 16"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        GitHub
                                    </a>
                                )}
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="modal-link-button"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="modal-button-icon"
                                        >
                                            <path
                                                d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15 3H21V9"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10 14L21 3"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Voir le projet
                                    </a>
                                )}
                            </div>
                        </div>
                        <button className="modal-close-button" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}


export default ProjectsSection
