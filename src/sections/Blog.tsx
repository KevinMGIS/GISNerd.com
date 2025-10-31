import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../blog/BlogCard'
import BlogModal from '../blog/BlogModal'
import { client } from '../lib/sanity'
import type { SanityBlogPost } from '../lib/sanity'

export default function Blog() {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const [posts, setPosts] = useState<SanityBlogPost[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch 3 most recent blog posts from Sanity
  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          readTime
        }`
        const data = await client.fetch<SanityBlogPost[]>(query)
        setPosts(data)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section id="blog" className="pt-4 pb-24 snap-section">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Blog</h2>
        </div>
        <div className="text-center py-12 text-white/60">Loading posts...</div>
      </section>
    )
  }

  return (
    <section id="blog" className="pt-4 pb-24 snap-section">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Recent Posts</h2>
        <Link to="/blog" className="text-sm text-primary hover:text-primary/80 transition-colors">
          View All →
        </Link>
      </div>
      
      {/* Vertical stack of 3 most recent posts */}
      <div className="flex flex-col gap-6 max-w-4xl">
        {posts.map((p, i) => (
          <motion.div
            key={p._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              delay: i * 0.1,
              type: 'spring',
              stiffness: 100,
              damping: 15
            }}
          >
            <div onClick={() => setOpenSlug(p.slug.current)} className="cursor-pointer">
              <BlogCard 
                title={p.title} 
                excerpt={p.excerpt} 
                date={p.publishedAt} 
                readTime={p.readTime}
                postId={p._id}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <BlogModal slug={openSlug} onClose={() => setOpenSlug(null)} />
    </section>
  )
}
