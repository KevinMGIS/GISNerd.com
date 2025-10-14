import type { Project } from '../types'
import { Link } from 'react-router-dom'
import AnalysisGrid from './AnalysisGrid'

export default function ProjectCard({ id, title, subtitle, description, image, techStack }: Project) {
  return (
    <article className="rounded-xl overflow-hidden border border-white/5 bg-surface/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,107,53,0.15)]">
      <div className="aspect-[3/2] bg-black/30 overflow-hidden">
        {image ? (
          <img src={image} alt="" className="w-full h-full object-cover opacity-90" />
        ) : (
          <AnalysisGrid />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl">{title}</h3>
        {subtitle && <p className="mt-1 text-white/60 text-sm">{subtitle}</p>}
        <p className="mt-2 text-white/70">{description}</p>
        {techStack?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-white/60 text-xs border border-white/10">
                {t}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-6">
          <Link
            to={`/projects/${id}`}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </article>
  )
}
