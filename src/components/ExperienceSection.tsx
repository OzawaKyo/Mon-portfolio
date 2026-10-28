import { motion } from "framer-motion"
import Icon from "./Icon"
import { experiences } from "../data/experiences"
import "./ExperienceSection.css"

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Mon parcours</h2>
          <div className="section-divider"></div>
          <p className="section-description">Mon parcours professionnel et académique.</p>
        </motion.div>

        <div className="timeline-container">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => {
            // Le professionnel reste toujours à gauche, le scolaire toujours à droite
            const isReversed = exp.type === "education"

            const card = (
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="experience-card"
              >
                <div className="card-header">
                  <h3 className="experience-title">
                    <Icon
                      name={exp.type === "education" ? "book" : "briefcase"}
                      className={`experience-icon experience-icon-${exp.color}`}
                    />
                    {exp.title}
                    <span className="experience-emoji" aria-hidden="true">
                      {exp.emoji}
                    </span>
                  </h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <div className="card-content">
                  <div className="experience-period">
                    <span>{exp.period}</span>
                    <Icon name="calendar" size={16} className="period-icon" />
                  </div>
                  <div className="experience-location">
                    <span>{exp.location}</span>
                    <Icon name="map-pin" size={16} className="location-icon" />
                  </div>
                </div>
              </motion.div>
            )

            const details = (
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="experience-details"
              >
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className={`experience-skill experience-skill-${exp.color}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="timeline-item"
              >
                <div className="timeline-content">
                  <div className="timeline-left">{isReversed ? details : card}</div>

                  {/* Timeline dot */}
                  <div className="timeline-dot" aria-hidden="true">
                    <div className="timeline-dot-content" />
                  </div>

                  <div className="timeline-right">{isReversed ? card : details}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
