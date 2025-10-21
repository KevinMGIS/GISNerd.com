import { useEffect, lazy, Suspense, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import BlogVisual from './BlogVisual'
import { blogPosts, postsIndex } from './posts'
import { formatDate } from '../utils/formatDate'
import { track } from '../utils/analytics'
import SEO from '../components/SEO'

interface Props {
  slug: string | null
  onClose: () => void
}

export default function BlogModal({ slug, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Track open/close
  useEffect(() => {
    if (slug) track({ type: 'blog_modal_open', slug })
    else track({ type: 'blog_modal_close' })
  }, [slug])

  // Focus trap
  useEffect(() => {
    if (!slug || !modalRef.current) return

    const modal = modalRef.current
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus()
          e.preventDefault()
        }
      }
    }

    modal.addEventListener('keydown', trapFocus)
    firstElement?.focus()

    return () => modal.removeEventListener('keydown', trapFocus)
  }, [slug])

  const meta = blogPosts.find((p) => p.slug === slug)
  const loader = slug ? postsIndex[slug] : null
  const LazyPost = loader ? lazy(loader) : null

  return (
    <AnimatePresence>
      {slug && (
        <div className="fixed inset-0 z-50">
          <SEO
            title={`${meta?.title ?? 'Blog Post'} | GIS Nerd - Kevin Mazur`}
            description={meta?.excerpt ?? 'Read more on the GIS Nerd blog'}
            canonical={`https://gisnerd.com/blog/${slug}`}
            type="article"
            publishedTime={meta?.date}
            author="Kevin Mazur"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="absolute inset-0 flex items-start justify-center p-4 md:p-8 overflow-auto">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full max-w-3xl rounded-xl border border-white/10 bg-surface/95 shadow-2xl"
              role="dialog"
              aria-modal="true"
            >
              {/* Animated header */}
              <div className="relative h-24 md:h-28 overflow-hidden border-b border-white/10">
                <BlogVisual />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-md bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/30 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 md:p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">{meta?.title ?? 'Post'}</h2>
                  <div className="text-xs text-white/50 mt-1">
                    {meta?.date ? formatDate(meta.date) : ''}
                    {meta?.readTime ? ` • ${meta.readTime}` : ''}
                  </div>
                </div>
                {LazyPost ? (
                  <Suspense fallback={<div className="text-white/70">Loading…</div>}>
                    <div className="prose prose-base sm:prose-lg prose-invert max-w-none prose-p:my-4 prose-p:leading-relaxed prose-headings:mt-8 prose-headings:mb-3 prose-ul:my-4 prose-ol:my-4 prose-li:my-1">
                      <LazyPost />
                    </div>
                  </Suspense>
                ) : (
                  <div className="text-white/70">Post not found.</div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
