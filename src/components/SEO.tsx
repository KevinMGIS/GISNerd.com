import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://gisnerd.com/GISNerd_LOGO.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Kevin Mazur'
}: SEOProps) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    if (description) {
      updateMeta('description', description)
      updateMeta('og:description', description, true)
      updateMeta('twitter:description', description)
    }

    if (title) {
      updateMeta('og:title', title, true)
      updateMeta('twitter:title', title)
    }

    if (canonical) {
      updateMeta('og:url', canonical, true)
      updateMeta('twitter:url', canonical)
      
      // Update canonical link
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }

    if (ogImage) {
      updateMeta('og:image', ogImage, true)
      updateMeta('twitter:image', ogImage)
    }

    updateMeta('og:type', type, true)

    if (type === 'article' && publishedTime) {
      updateMeta('article:published_time', publishedTime, true)
    }

    if (type === 'article' && modifiedTime) {
      updateMeta('article:modified_time', modifiedTime, true)
    }

    if (type === 'article' && author) {
      updateMeta('article:author', author, true)
    }
  }, [title, description, canonical, ogImage, type, publishedTime, modifiedTime, author])

  return null
}
