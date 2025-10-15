import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 bg-surface/30 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} GIS Nerd. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
