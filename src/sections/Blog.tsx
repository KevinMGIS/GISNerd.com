import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import BlogCard from '../blog/BlogCard'
import BlogModal from '../blog/BlogModal'
import { client } from '../lib/sanity'
import type { SanityBlogPost } from '../lib/sanity'

export default function Blog() {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [posts, setPosts] = useState<SanityBlogPost[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch blog posts from Sanity
  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc)[0...6] {
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

  const updateScrollState = () => {
    const el = scrollerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState)
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [posts])

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollerRef.current
    if (!el) return
    const cardWidth = el.querySelector('article')?.clientWidth || 300
    el.scrollBy({ left: dir === 'left' ? -cardWidth - 24 : cardWidth + 24, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <section id="blog" className="pt-12 pb-24 snap-section">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Blog</h2>
        </div>
        <div className="text-center py-12 text-white/60">Loading posts...</div>
      </section>
    )
  }

  return (
  <section id="blog" className="pt-12 pb-24 snap-section">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Latest Posts</h2>
        <div className="hidden md:flex items-center gap-2 text-sm text-white/60 select-none">
          <span>Scroll</span>
          <span aria-hidden>→</span>
        </div>
      </div>
      {/* Horizontal scroll row showing 3 per view, up to 6 posts */}
      <div className="relative">
        {/* gradient edge fades for overflow hint */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />

        <div className="hidden md:flex absolute -top-14 right-0 gap-2">
          <motion.button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy('left')}
            disabled={!canScrollLeft}
            animate={{ opacity: canScrollLeft ? 1 : 0.3 }}
            className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/60 hover:text-white hover:bg-white/5 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >←</motion.button>
          <motion.button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy('right')}
            disabled={!canScrollRight}
            animate={{ opacity: canScrollRight ? 1 : 0.3 }}
            className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/60 hover:text-white hover:bg-white/5 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >→</motion.button>
        </div>
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 custom-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {posts.map((p, i) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                delay: i * 0.08,
                type: 'spring',
                stiffness: 100,
                damping: 15
              }}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[33.333%]"
            >
              <div onClick={() => setOpenSlug(p.slug.current)} className="cursor-pointer">
                <BlogCard 
                  title={p.title} 
                  excerpt={p.excerpt} 
                  date={p.publishedAt} 
                  readTime={p.readTime} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BlogModal slug={openSlug} onClose={() => setOpenSlug(null)} />
    </section>
  )
}
