import type { BlogPostMeta } from '../types'
import type { ComponentType } from 'react'

// Post components are code-split for performance when routing to /blog/:slug
export const postsIndex: Record<string, () => Promise<{ default: ComponentType }>> = {
  'layoff-to-liftoff': () => import('./posts/LayoffToLiftoff.tsx'),
  'gis-unmapped': () => import('./posts/GISUnmapped.tsx'),
  'built-just-to-build': () => import('./posts/BuiltJustToBuild.tsx'),
  'hey-its-me': () => import('./posts/HeyItsMe.tsx'),
  'trips': () => import('./posts/Trips.tsx'),
}

export const blogPosts: (BlogPostMeta & { component: string })[] = [
  {
    slug: 'layoff-to-liftoff',
    title: 'From Layoff to Liftoff',
    date: '2024-07-15',
    excerpt:
      'My journey from being laid off from two positions to building my way back with code and GIS...',
    tags: ['career', 'personal'],
    featured: true,
    readTime: '5 min',
    component: 'layoff-to-liftoff',
  },
  {
    slug: 'hey-its-me',
    title: "Hey! It's me, the GIS Nerd.",
    date: '2025-03-27',
    excerpt:
      'A brief intro and how I found my way back to GIS—re-energized and ready for what’s next.',
    tags: ['intro', 'personal'],
    readTime: '3 min',
    component: 'hey-its-me',
  },
  {
    slug: 'gis-unmapped',
    title: "GIS Unmapped: Why GIS Isn't Just About Maps",
    date: '2024-08-10',
    excerpt:
      "GIS is more than maps—it's data, analysis, and insight. Here's why that matters.",
    tags: ['gis', 'opinion'],
    readTime: '6 min',
    component: 'gis-unmapped',
  },
  {
    slug: 'built-just-to-build',
    title: 'Built Just to Build: The Power of Personal Projects',
    date: '2024-09-01',
    excerpt:
      'Shipping small wins compounds. Why building for the sake of building matters in your career.',
    tags: ['career', 'projects'],
    readTime: '4 min',
    component: 'built-just-to-build',
  },
  {
    slug: 'trips',
    title: 'Trips: Building Something Worth the Journey',
    date: '2025-10-14',
    excerpt:
      'A small travel planning + memory app rekindled why building for yourself matters—and shaped this site rebuild.',
    tags: ['projects', 'personal'],
    readTime: '4 min',
    component: 'trips',
  },
]
