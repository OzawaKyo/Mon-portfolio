export interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  skills: string[]
  color: string
  emoji: string
}

export const experiences: Experience[] = [
  {
    id: 2,
    title: "Développeur Fullstack (Alternance)",
    company: "Sirap",
    location: "Romans-sur-Isère, France",
    period: "Septembre 2025 - Aujourd'hui",
    description:
      "Alternance en développement fullstack dans le cadre du cursus MAALSI au CESI Lyon. Conception et développement de fonctionnalités web, maintenance et évolution des applications internes de l'entreprise.",
    skills: ["Angular", "NestJS", "PostgreSQL", "TypeScript", "Git"],
    color: "blue",
    emoji: "💼",
  },
  {
    id: 1,
    title: "Développeur Fullstack",
    company: "Orange Telecom",
    location: "Casablanca, Maroc",
    period: "Mai 2023 - Août 2023",
    description:
      "Stage de développement fullstack utilisant Spring Boot et Angular. Conception et développement d'une application web pour la gestion interne des ressources. Mise en place d'une API RESTful et intégration avec des services existants.",
    skills: ["Spring Boot", "Angular", "PostgreSQL", "Git", "Agile"],
    color: "orange",
    emoji: "📡",
  },
]
