import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'
import BlogCard from '../blog/BlogCard'
import BlogModal from '../blog/BlogModal'
import { client } from '../lib/sanity'
import type { SanityBlogPost } from '../lib/sanity'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function BlogListPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const [posts, setPosts] = useState<SanityBlogPost[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch all blog posts from Sanity
  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
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

  return (
    <div className="min-h-screen bg-topo bg-topo-animated">
      <SEO
        title="Blog | GIS Nerd"
        description="Explore articles about GIS, mapping, spatial analysis, and software development."
        canonical="https://gisnerd.com/blog"
      />
      
      <header className="sticky top-0 z-10 backdrop-blur border-b border-white/5 bg-background/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <Link to="/" className="flex items-center gap-3 font-semibold tracking-wide text-text">
            <img src="/GISNerd_LOGO.png" alt="GIS Nerd" className="h-8 w-8 object-contain" />
            <span>GIS Nerd</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Posts</h1>
            <p className="text-white/70 text-lg">
              Notes from the intersection of maps and code
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12 text-white/60">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 text-white/60">No posts found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p, i) => (
                <motion.div
                  key={p._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: i * 0.05,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  <div onClick={() => setOpenSlug(p.slug.current)} className="cursor-pointer h-full">
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
          )}
        </motion.div>
      </main>

      <BlogModal slug={openSlug} onClose={() => setOpenSlug(null)} />
      <Footer />
    </div>
  )
}
