import type { IconName } from "../components/Icon"

export interface SocialLink {
  name: string
  icon: IconName
  href: string
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: "github", href: "https://github.com/OzawaKyo" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/mohamed-amarcha" },
  { name: "Email", icon: "mail", href: "mailto:simoamarcha@icloud.com" },
]
