import type { IconName } from "../components/Icon"

export interface ContactInfo {
  icon: IconName
  title: string
  value: string
  link: string
  emoji: string
}

export const contactInfo: ContactInfo[] = [
  {
    icon: "mail",
    title: "Email",
    value: "simoamarcha@icloud.com",
    link: "mailto:simoamarcha@icloud.com",
    emoji: "📧",
  },
  {
    icon: "linkedin",
    title: "LinkedIn",
    value: "mohamed-amarcha",
    link: "https://www.linkedin.com/in/mohamed-amarcha",
    emoji: "🔗",
  },
  {
    icon: "github",
    title: "GitHub",
    value: "OzawaKyo",
    link: "https://github.com/OzawaKyo",
    emoji: "🐙",
  },
]
