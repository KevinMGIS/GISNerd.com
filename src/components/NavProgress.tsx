import { useEffect, useState } from 'react'

const sections = ['hero', 'skills', 'portfolio', 'blog', 'contact'] as const

export function NavProgress() {
  const [active, setActive] = useState<string>('hero')

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const onClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
      {sections.map((id, i) => (
        <button
          key={id}
          aria-label={`Go to ${id}`}
          onClick={() => onClick(id)}
          className={`relative w-3 h-3 rounded-full border transition-transform ${
            active === id ? 'bg-primary border-primary scale-125 shadow-[0_0_12px_rgba(255,107,53,0.6)]' : 'border-white/30 hover:scale-110'
          }`}
        >
          {i < sections.length - 1 && (
            <span className="absolute left-1/2 -translate-x-1/2 top-3 block w-px h-8 bg-white/20" />
          )}
        </button>
      ))}
    </div>
  )
}

export default NavProgress