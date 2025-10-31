export const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'skills', label: 'Skills' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = typeof SECTIONS[number]['id']
