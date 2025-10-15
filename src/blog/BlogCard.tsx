import BlogVisual from './BlogVisual'
import { formatDate } from '../utils/formatDate'

interface Props {
  title: string
  excerpt: string
  date: string
  readTime?: string
}

export default function BlogCard({ title, excerpt, date, readTime }: Props) {
  return (
    <article className="rounded-xl overflow-hidden border border-white/5 bg-surface/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,107,53,0.15)]">
      <div className="aspect-video">
        <BlogVisual />
      </div>
      <div className="p-6">
  <div className="text-xs text-white/50">{formatDate(date)} • {readTime ?? '—'}</div>
        <h3 className="mt-2 font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-white/80 text-sm">{excerpt}</p>
        <span className="mt-4 inline-block text-primary">Read more →</span>
      </div>
    </article>
  )
}
