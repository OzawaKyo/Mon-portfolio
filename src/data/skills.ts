import type { IconName } from "../components/Icon"

export interface Skill {
  name: string
  level: number
  color: string
}

export interface SkillCategory {
  name: string
  icon: IconName
  emoji: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Langages",
    icon: "code",
    emoji: "👨‍💻",
    skills: [
      { name: "TypeScript", level: 80, color: "blue-light" },
      { name: "JavaScript", level: 75, color: "yellow" },
      { name: "C", level: 80, color: "gray" },
      { name: "Java", level: 65, color: "red" },
      { name: "Python", level: 55, color: "blue" },
    ],
  },
  {
    name: "Frontend",
    icon: "layout-grid",
    emoji: "🎨",
    skills: [
      { name: "Angular", level: 92, color: "red" },
      { name: "React", level: 70, color: "blue-light" },
      { name: "HTML/CSS", level: 80, color: "orange" },
      { name: "vite", level: 70, color: "teal" },
      { name: "Next.js", level: 40, color: "blue" },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    emoji: "⚙️",
    skills: [
      { name: "NestJS", level: 75, color: "red" },
      { name: "Spring Boot", level: 70, color: "green" },
      { name: "Django", level: 50, color: "green-dark" },
    ],
  },
  {
    name: "Bases de données",
    icon: "database",
    emoji: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 85, color: "blue-dark" },
      { name: "MySQL", level: 75, color: "blue" },
      { name: "Firebase", level: 75, color: "yellow-dark" },
    ],
  },
  {
    name: "Outils",
    icon: "tool",
    emoji: "🛠️",
    skills: [
      { name: "Git", level: 90, color: "orange-dark" },
      { name: "Agile/Scrum", level: 70, color: "purple" },
      { name: "Docker", level: 30, color: "blue" },
    ],
  },
]
