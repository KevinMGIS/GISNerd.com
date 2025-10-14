import { useEffect, lazy, Suspense } from 'react'
import BlogVisual from './BlogVisual'
import { blogPosts, postsIndex } from './posts'

interface Props {
  slug: string | null
  onClose: () => void
}

export default function BlogModal({ slug, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!slug) return null
  const meta = blogPosts.find((p) => p.slug === slug)
  const loader = postsIndex[slug]
  const LazyPost = loader ? lazy(loader) : null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 flex items-start justify-center p-4 md:p-8 overflow-auto">
  <div className="w-full max-w-3xl rounded-xl border border-white/10 bg-surface/95 shadow-2xl" role="dialog" aria-modal="true">
          {/* Animated header */}
          <div className="h-24 md:h-28 overflow-hidden border-b border-white/10">
            <BlogVisual />
          </div>
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-bold">{meta?.title ?? 'Post'}</h2>
                <div className="text-xs text-white/50 mt-1">
                  {meta?.date ? new Date(meta.date).toLocaleDateString() : ''}
                  {meta?.readTime ? ` • ${meta.readTime}` : ''}
                </div>
              </div>
              <button onClick={onClose} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-sm">Close</button>
            </div>
            {LazyPost ? (
              <Suspense fallback={<div className="text-white/70">Loading…</div>}>
                <div className="prose prose-lg prose-invert max-w-none prose-p:my-4 prose-headings:mt-8 prose-headings:mb-3 prose-ul:my-4 prose-ol:my-4 prose-li:my-1">
                  <LazyPost />
                </div>
              </Suspense>
            ) : (
              <div className="text-white/70">Post not found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
