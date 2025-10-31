/**
 * Migration Script: TSX Blog Posts → Sanity CMS (Using CLI Auth)
 * 
 * This script uses Sanity CLI authentication to migrate your blog posts.
 * Run with: npx sanity exec scripts/migrate-with-cli.ts --with-user-token
 */

import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Get token from CLI (passed via --with-user-token flag)
const token = process.env.SANITY_AUTH_TOKEN

const client = createClient({
  projectId: 'yoep6909',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: token,
})

// Blog posts data (inlined to avoid import issues)
const blogPosts = [
  {
    slug: 'layoff-to-liftoff',
    title: 'From Layoff to Liftoff',
    date: '2024-07-15',
    excerpt: 'My journey from being laid off from two positions to building my way back with code and GIS...',
    tags: ['career', 'personal'],
    featured: true,
    readTime: '5 min',
  },
  {
    slug: 'hey-its-me',
    title: "Hey! It's me, the GIS Nerd.",
    date: '2025-03-27',
    excerpt: 'A brief intro and how I found my way back to GIS - re-energized and ready for what\'s next.',
    tags: ['intro', 'personal'],
    readTime: '3 min',
  },
  {
    slug: 'gis-unmapped',
    title: "GIS Unmapped: Why GIS Isn't Just About Maps",
    date: '2024-08-10',
    excerpt: "GIS is more than maps - it's data, analysis, and insight. Here's why that matters.",
    tags: ['gis', 'opinion'],
    readTime: '6 min',
  },
  {
    slug: 'built-just-to-build',
    title: 'Built Just to Build: The Power of Personal Projects',
    date: '2024-09-01',
    excerpt: 'Shipping small wins compounds. Why building for the sake of building matters in your career.',
    tags: ['career', 'projects'],
    readTime: '4 min',
  },
  {
    slug: 'trips',
    title: 'Trips: Building Something Worth the Journey',
    date: '2025-10-14',
    excerpt: 'A small travel planning + memory app rekindled why building for yourself matters - and shaped this site rebuild.',
    tags: ['projects', 'personal'],
    readTime: '4 min',
  },
  {
    slug: 'why-i-built-the-grid',
    title: 'Why I Built The Grid and What It Taught Me About System Design',
    date: '2025-10-14',
    excerpt: 'Turning scattered tools into a modular intranet taught me how systems grow best - small, connected, and purposeful.',
    tags: ['systems', 'projects'],
    readTime: '6 min',
  },
  {
    slug: 'building-siteiq',
    title: 'Building SiteIQ: A Parcel Scoring Tool That Actually Gets Used',
    date: '2025-10-23',
    excerpt: 'How I automated parcel evaluation from hours to minutes with Python and GIS, creating a tool that became part of our standard workflow.',
    tags: ['gis', 'projects', 'automation'],
    readTime: '4 min',
  },
]

// Helper to read TSX file content
function readPostContent(slug: string): string | null {
  try {
    // Convert slug to PascalCase filename
    const filename = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
    
    const filePath = path.join(__dirname, '../src/blog/posts', `${filename}.tsx`)
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    console.error(`Could not read file for slug: ${slug}`)
    return null
  }
}

// Helper to extract JSX content and convert to Portable Text
function extractAndConvertContent(tsxContent: string): Array<{
  _type: string
  style: string
  children: Array<{ _type: string; text: string; marks: string[] }>
}> {
  const blocks: Array<{
    _type: string
    style: string
    children: Array<{ _type: string; text: string; marks: string[] }>
  }> = []
  
  // Remove imports and function wrapper
  const content = tsxContent
    .replace(/import.*from.*\n/g, '')
    .replace(/export default function.*\{/g, '')
    .replace(/return \(/g, '')
    .replace(/<BlogPost>/g, '')
    .replace(/<\/BlogPost>/g, '')
    .replace(/^\s*\)/g, '')
    .replace(/^\s*\}/g, '')
    .trim()

  // Split content by tags to maintain order
  const lines = content.split(/(<h1>.*?<\/h1>|<h2>.*?<\/h2>|<h3>.*?<\/h3>|<p>.*?<\/p>)/s)
  
  for (const line of lines) {
    if (!line.trim()) continue
    
    // Check for h1
    const h1Match = line.match(/<h1>(.*?)<\/h1>/s)
    if (h1Match) {
      blocks.push({
        _type: 'block',
        style: 'h1',
        children: [{ _type: 'span', text: h1Match[1].trim(), marks: [] }],
      })
      continue
    }
    
    // Check for h2
    const h2Match = line.match(/<h2>(.*?)<\/h2>/s)
    if (h2Match) {
      blocks.push({
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: h2Match[1].trim(), marks: [] }],
      })
      continue
    }
    
    // Check for h3
    const h3Match = line.match(/<h3>(.*?)<\/h3>/s)
    if (h3Match) {
      blocks.push({
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: h3Match[1].trim(), marks: [] }],
      })
      continue
    }
    
    // Check for paragraph
    const pMatch = line.match(/<p>(.*?)<\/p>/s)
    if (pMatch) {
      blocks.push({
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: pMatch[1].trim(), marks: [] }],
      })
    }
  }
  
  return blocks.length > 0 ? blocks : [
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Content migration pending', marks: [] }],
    },
  ]
}

async function migratePosts() {
  console.log('🚀 Starting blog post migration with CLI authentication...\n')
  console.log(`Using token: ${token ? '✓ Found' : '✗ Missing'}\n`)

  if (!token) {
    console.error('❌ No auth token found. Make sure to run with --with-user-token flag\n')
    return
  }

  for (const post of blogPosts) {
    console.log(`📝 Migrating: ${post.title}`)

    try {
      // Read and parse the TSX file content
      const tsxContent = readPostContent(post.slug)
      const portableTextContent = tsxContent 
        ? extractAndConvertContent(tsxContent)
        : [{
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'Content migration pending', marks: [] }],
          }]

      // Create the document in Sanity
      const sanityPost = {
        _type: 'post',
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug,
        },
        excerpt: post.excerpt,
        publishedAt: new Date(post.date).toISOString(),
        tags: post.tags || [],
        featured: post.featured || false,
        readTime: post.readTime,
        content: portableTextContent,
      }

      const result = await client.create(sanityPost)
      console.log(`✅ Created: ${result._id}`)
    } catch (error) {
      if (error && typeof error === 'object' && 'statusCode' in error) {
        if (error.statusCode === 409) {
          console.log(`⚠️  Already exists: ${post.slug}`)
        } else {
          console.error(`❌ Error migrating ${post.slug}:`, error)
        }
      } else {
        console.error(`❌ Error migrating ${post.slug}:`, error)
      }
    }
  }

  console.log('\n✨ Migration complete!')
  console.log('\n📌 Next steps:')
  console.log('1. Visit http://localhost:5173/admin to view your migrated posts')
  console.log('2. Review and edit any posts that need formatting adjustments')
  console.log('3. Your blog posts are now managed in Sanity CMS!\n')
}

// Export the function for Sanity CLI to execute
export default migratePosts

// Also run it directly if executed as a script
migratePosts().catch((error) => {
  console.error('Migration failed:', error)
  process.exit(1)
})
