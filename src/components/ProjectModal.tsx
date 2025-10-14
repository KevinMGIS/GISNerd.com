import { useEffect } from 'react'
import type { Project } from '../types'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 flex items-start md:items-center justify-center p-4 md:p-8 overflow-auto">
        <div className="w-full max-w-4xl rounded-xl border border-white/10 bg-surface/95 shadow-2xl" role="dialog" aria-modal="true">
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                {project.subtitle && <p className="text-white/60 mt-1">{project.subtitle}</p>}
              </div>
              <button onClick={onClose} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-sm">Close</button>
            </div>

            {/* Screenshot intentionally omitted to provide more space for explanation */}

            {project.details ? (
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Overview</h3>
                <p className="mt-2 text-white/70">{project.details}</p>
              </div>
            ) : null}

            {project.goals?.length ? (
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Goals</h3>
                <ul className="mt-2 list-disc list-inside text-white/70 space-y-1">
                  {project.goals.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.features?.length ? (
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Key Features</h3>
                <ul className="mt-2 list-disc list-inside text-white/70 space-y-1">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.techDetails && Object.keys(project.techDetails).length ? (
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Technical Stack</h3>
                <div className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-white/70">
                  {Object.entries(project.techDetails).map(([k, v]) => (
                    <div key={k}>
                      <span className="text-white/80">{k}:</span> {v}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {project.impact ? (
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Impact</h3>
                <p className="mt-2 text-white/70">{project.impact}</p>
              </div>
            ) : null}

            {project.techStack?.length ? (
              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-white/50">Built with</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-white/70 text-xs border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
