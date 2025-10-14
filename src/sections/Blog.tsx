import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import BlogCard from '../blog/BlogCard'
import { blogPosts } from '../blog/posts'
import BlogModal from '../blog/BlogModal'

export default function Blog() {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const sorted = [...blogPosts].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  )
  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollerRef.current
    if (!el) return
    const cardWidth = el.querySelector('article')?.clientWidth || 300
    el.scrollBy({ left: dir === 'left' ? -cardWidth - 24 : cardWidth + 24, behavior: 'smooth' })
  }
  return (
  <section id="blog" className="pt-12 pb-24 snap-section">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Blog</h2>
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
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy('left')}
            className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/60 hover:text-white hover:bg-white/5"
          >←</button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy('right')}
            className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/60 hover:text-white hover:bg-white/5"
          >→</button>
        </div>
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 custom-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {sorted.slice(0, 6).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.08 }}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[33.333%]"
            >
              <div onClick={() => setOpenSlug(p.slug)} className="cursor-pointer">
                <BlogCard title={p.title} excerpt={p.excerpt} date={p.date} readTime={p.readTime} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BlogModal slug={openSlug} onClose={() => setOpenSlug(null)} />
    </section>
  )
}
