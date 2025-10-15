import type { Project } from '../types'
import { Link } from 'react-router-dom'
import AnalysisGrid from './AnalysisGrid'

export default function ProjectCard({ id, title, subtitle, description, image, techStack }: Project) {
  return (
    <article className="rounded-xl overflow-hidden border border-white/5 bg-surface/70 transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,107,53,0.2)] hover:border-primary/20">
      <div className="aspect-[3/2] bg-black/30 overflow-hidden">
        {image ? (
          <img src={image} alt="" className="w-full h-full object-cover opacity-90" loading="lazy" />
        ) : (
          <AnalysisGrid />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl">{title}</h3>
        {subtitle && <p className="mt-1 text-white/60 text-sm">{subtitle}</p>}
        <p className="mt-2 text-white/80">{description}</p>
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
