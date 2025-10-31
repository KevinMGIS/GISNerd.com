import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity client configuration
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'yoep6909',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // Set to false if you need the freshest data
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  token: import.meta.env.VITE_SANITY_TOKEN, // Read-only token for fetching content
})

// Image URL builder helper
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Type definitions for blog posts
export interface SanityBlogPost {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: PortableTextBlock[] // Portable Text content
  publishedAt: string
  tags?: string[]
  featured?: boolean
  readTime?: string
  featuredImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
}

export interface PortableTextBlock {
  _type: string
  [key: string]: unknown
}

export interface BlogPostMeta {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  tags: string[]
  featured: boolean
  readTime?: string
  featuredImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
}

// Query functions
export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  const posts = await client.fetch<SanityBlogPost[]>(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      tags,
      featured,
      readTime,
      featuredImage {
        asset->,
        alt
      }
    }
  `)

  return posts.map(post => ({
    _id: post._id,
    title: post.title,
    slug: post.slug.current,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    tags: post.tags || [],
    featured: post.featured || false,
    readTime: post.readTime,
    featuredImage: post.featuredImage,
  }))
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  const post = await client.fetch<SanityBlogPost | null>(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      tags,
      featured,
      readTime,
      featuredImage {
        asset->,
        alt
      }
    }
  `,
    { slug }
  )

  return post
}

export async function getFeaturedPosts(limit: number = 3): Promise<BlogPostMeta[]> {
  const posts = await client.fetch<SanityBlogPost[]>(
    `
    *[_type == "post" && featured == true] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      tags,
      featured,
      readTime,
      featuredImage {
        asset->,
        alt
      }
    }
  `,
    { limit: limit - 1 }
  )

  return posts.map(post => ({
    _id: post._id,
    title: post.title,
    slug: post.slug.current,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    tags: post.tags || [],
    featured: post.featured || false,
    readTime: post.readTime,
    featuredImage: post.featuredImage,
  }))
}
