export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  details?: string
  screenshots?: string[]
  goals?: string[]
  features?: string[]
  techDetails?: Record<string, string>
  impact?: string
  techStack: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  featured?: boolean
  image?: string
  readTime?: string
}
