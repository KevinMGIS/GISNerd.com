import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-white/70">Project not found.</p>
        <Link to="/" className="text-primary underline">Go back</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-topo bg-topo-animated">
      <header className="sticky top-0 z-10 backdrop-blur border-b border-white/5 bg-background/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 font-semibold tracking-wide text-text">
            <img src="/GISNerd_LOGO.png" alt="GIS Nerd" className="h-8 w-8 object-contain" />
            <span>GIS Nerd</span>
          </Link>
          <nav className="flex gap-6 text-sm">
            <a href="/">Home</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          {project.subtitle && <p className="text-white/60 mt-1">{project.subtitle}</p>}
        </div>

        {(project.screenshots?.[0] || project.image) ? (
          <div className="mb-8 mx-auto max-w-3xl">
            <div className="aspect-[16/10] overflow-hidden rounded-lg border border-white/5 bg-black/30">
              <img
                src={project.screenshots?.[0] ?? project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ) : null}

        {project.details ? (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-3 text-white/70 max-w-prose">{project.details}</p>
          </div>
        ) : null}

        {project.goals?.length ? (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Goals</h2>
            <ul className="mt-2 list-disc list-inside text-white/70 space-y-1 max-w-prose">
              {project.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.features?.length ? (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="mt-2 list-disc list-inside text-white/70 space-y-1 max-w-prose">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.techDetails && Object.keys(project.techDetails).length ? (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Technical Stack</h2>
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
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Impact</h2>
            <p className="mt-2 text-white/70 max-w-prose">{project.impact}</p>
          </div>
        ) : null}

        {project.techStack?.length ? (
          <div className="mt-8">
            <h3 className="text-sm uppercase tracking-wider text-white/50">Built with</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-white/70 text-xs border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </main>

      <footer className="border-t border-white/5 py-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} GIS Nerd</footer>
    </div>
  )
}
