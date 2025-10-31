/**
 * Migration Script: TSX Blog Posts → Sanity CMS
 * 
 * This script reads your existing blog post TSX files and creates them in Sanity.
 * Run with: npx tsx scripts/migrate-blog-posts.ts
 */

import 'dotenv/config'
import { createClient } from '@sanity/client'
import { blogPosts } from '../src/blog/posts'
import * as fs from 'fs'
import * as path from 'path'

const client = createClient({
  projectId: 'yoep6909',
  dataset: 'production',
  useCdn: false, // Don't use CDN for mutations
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_WRITETOKEN || process.env.VITE_SANITY_TOKEN, // Try all token env vars
})

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
  } catch (error) {
    console.error(`Could not read file for slug: ${slug}`)
    return null
  }
}

// Helper to extract JSX content and convert to Portable Text
function extractAndConvertContent(tsxContent: string): any[] {
  const blocks: any[] = []
  
  // Remove imports and function wrapper
  let content = tsxContent
    .replace(/import.*from.*\n/g, '')
    .replace(/export default function.*\{/g, '')
    .replace(/return \(/g, '')
    .replace(/<BlogPost>/g, '')
    .replace(/<\/BlogPost>/g, '')
    .replace(/^\s*\)/g, '')
    .replace(/^\s*\}/g, '')
    .trim()

  // Match JSX elements
  const h1Regex = /<h1>(.*?)<\/h1>/gs
  const h2Regex = /<h2>(.*?)<\/h2>/gs
  const h3Regex = /<h3>(.*?)<\/h3>/gs
  const pRegex = /<p>(.*?)<\/p>/gs
  
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
  console.log('🚀 Starting blog post migration...\n')
  console.log(`Using token: ${client.config().token ? '✓ Found' : '✗ Missing'}\n`)

  if (!client.config().token) {
    console.error('❌ SANITY_TOKEN not found in environment variables')
    console.error('Please set VITE_SANITY_TOKEN in your .env file\n')
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

// Run the migration
migratePosts()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Migration failed:', error)
    process.exit(1)
  })
