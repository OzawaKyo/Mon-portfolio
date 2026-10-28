import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Icon from "./Icon"
import { skillCategories } from "../data/skills"
import "./SkillsSection.css"

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

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
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={item} className="skill-card">
              <div className="skill-card-content">
                <div className="skill-header">
                  <div className="skill-icon-container">
                    <Icon name={category.icon} className="category-icon" />
                    <span className="skill-emoji" aria-hidden="true">
                      {category.emoji}
                    </span>
                  </div>
                  <h3 className="skill-category">{category.name}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div
                        className="skill-bar-container"
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <motion.div
                          className={`skill-bar skill-bar-${skill.color}`}
                          initial={{ width: "0%" }}
                          animate={{ width: isInView ? `${skill.level}%` : "0%" }}
                          transition={{ duration: 1, delay: 0.2 }}
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
