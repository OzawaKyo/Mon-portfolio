import type { ReactNode } from "react"
import type { IconName } from "../components/Icon"

export interface AboutCard {
  icon: IconName
  title: string
  description: ReactNode
  emoji: string
}

export const aboutCards: AboutCard[] = [
  {
    icon: "book",
    title: "Formation",
    description: "2ème année MAALSI au CESI Lyon, en alternance chez Sirap en tant que développeur fullstack.",
    emoji: "🎓",
  },
  {
    icon: "map-pin",
    title: "Localisation",
    description: "Lyon (études) & Romans-sur-Isère (alternance), France",
    emoji: "📍",
  },
  {
    icon: "globe",
    title: "Langues",
    description: "Français (natif), Arabe (natif), Anglais (C1)",
    emoji: "🌍",
  },
  {
    icon: "heart",
    title: "Intérêts",
    description: "Web Design, UI/UX, Volleyball",
    emoji: "❤️",
  },
]
