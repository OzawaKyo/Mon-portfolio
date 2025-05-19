"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import "./SkillsSection.css"

const SkillsSection = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

    useEffect(() => {
        // Force refresh des barres de compétences
        const refreshSkills = () => {
            const skillBars = document.querySelectorAll(".skill-bar")
            skillBars.forEach((bar) => {
                const width = bar.getAttribute("data-width")
                if (width) {
                    ; (bar as HTMLElement).style.width = width
                }
            })
        }

        if (isInView) {
            setTimeout(refreshSkills, 300)
        }
    }, [isInView])

    const skillCategories = [
        {
            name: "Langages",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="category-icon"
                >
                    <path
                        d="M16 18L22 12L16 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            emoji: "👨‍💻",
            skills: [
                { name: "C", level: 80, color: "gray" },
                { name: "Java", level: 70, color: "red" },
                { name: "JavaScript", level: 65, color: "yellow" },
                { name: "TypeScript", level: 65, color: "blue-light" },
                { name: "Python", level: 55, color: "blue" },
            ],
        },
        {
            name: "Frontend",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="category-icon"
                >
                    <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            emoji: "🎨",
            skills: [
                { name: "React", level: 70, color: "blue-light" },
                { name: "Angular", level: 60, color: "red" },
                { name: "vite", level: 70, color: "teal" },
                { name: "Next.js", level: 40, color: "blue" },
                { name: "HTML/CSS", level: 80, color: "orange" },
            ],
        },
        {
            name: "Backend",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="category-icon"
                >
                    <rect
                        x="2"
                        y="2"
                        width="20"
                        height="8"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="2"
                        y="14"
                        width="20"
                        height="8"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M6 6H6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 18H6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            emoji: "⚙️",
            skills: [
                { name: "Spring Boot", level: 70, color: "green" },
                { name: "Express.js", level: 60, color: "gray-dark" },
                { name: "Django", level: 50, color: "green-dark" },
            ],
        },
        {
            name: "Bases de données",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="category-icon"
                >
                    <ellipse
                        cx="12"
                        cy="5"
                        rx="9"
                        ry="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21 12C21 13.657 16.971 15 12 15C7.029 15 3 13.657 3 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 5V19C3 20.657 7.029 22 12 22C16.971 22 21 20.657 21 19V5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            emoji: "🗄️",
            skills: [
                { name: "PostgreSQL", level: 75, color: "blue-dark" },
                { name: "MySQL", level: 75, color: "blue" },
                { name: "Firebase", level: 85, color: "yellow-dark" },
            ],
        },
        {
            name: "Outils",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="category-icon"
                >
                    <path
                        d="M12 9H12.01M12 13H12.01M12 17H12.01M12 5H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M4 8H4.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12H4.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 16H4.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 8H20.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 12H20.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 16H20.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            emoji: "🛠️",
            skills: [
                { name: "Git", level: 90, color: "orange-dark" },
                { name: "Agile/Scrum", level: 70, color: "purple" },
                { name: "Docker", level: 30, color: "blue" },
            ],
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

    return (
        <section id="skills" ref={sectionRef} className="skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">Mes compétences</h2>
                    <div className="section-divider"></div>
                    <p className="section-description">
                        Un aperçu des technologies et outils que j&apos;utilise dans mes projets.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="skills-grid"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div key={index} variants={item} className="skill-card">
                            <div className="skill-card-content">
                                <div className="skill-header">
                                    <div className="skill-icon-container">
                                        {category.icon}
                                        <motion.span
                                            className="skill-emoji"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: index * 0.3 }}
                                        >
                                            {category.emoji}
                                        </motion.span>
                                    </div>
                                    <h3 className="skill-category">{category.name}</h3>
                                </div>
                                <div className="skill-list">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="skill-item">
                                            <div className="skill-info">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-level">{skill.level}%</span>
                                            </div>
                                            <div className="skill-bar-container">
                                                <motion.div
                                                    className={`skill-bar skill-bar-${skill.color}`}
                                                    data-width={`${skill.level}%`}
                                                    style={{ width: isInView ? `${skill.level}%` : "0%" }}
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: isInView ? `${skill.level}%` : "0%" }}
                                                    transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                                                ></motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default SkillsSection
