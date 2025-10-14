import { motion } from 'framer-motion'

export default function AnalysisGrid() {
  const cells = Array.from({ length: 72 })
  return (
    <div className="relative h-full w-full bg-black/30">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Topo-like subtle lines */}
        <defs>
          <linearGradient id="agStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
          <linearGradient id="agAccent" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,107,53,0.6)" />
            <stop offset="100%" stopColor="rgba(255,107,53,0.08)" />
          </linearGradient>
        </defs>
        <path d="M0,20 C20,10 40,30 60,20 80,10 100,30 120,20" stroke="url(#agStroke)" strokeWidth="0.4" fill="none" />
        <path d="M-20,50 C0,40 20,60 40,50 60,40 80,60 100,50" stroke="url(#agStroke)" strokeWidth="0.4" fill="none" />
        <path d="M0,80 C25,70 45,90 65,80 85,70 105,90 125,80" stroke="url(#agStroke)" strokeWidth="0.4" fill="none" />
        {/* Subtle orange accent lines */}
        <path d="M-10,35 C10,25 30,45 50,35 70,25 90,45 110,35" stroke="url(#agAccent)" strokeWidth="0.5" fill="none" opacity="0.25" />
        <path d="M-10,65 C10,55 30,75 50,65 70,55 90,75 110,65" stroke="url(#agAccent)" strokeWidth="0.5" fill="none" opacity="0.22" />
      </svg>
      {/* Grid of animated analysis cells */}
      <div className="absolute inset-0 grid grid-cols-9 gap-[1px] p-2">
        {cells.map((_, i) => {
          const col = i % 9
          const row = Math.floor(i / 9)
          const isBand = Math.abs(col - row) <= 1 // diagonal emphasis
          const baseOpacity = isBand ? [0.6, 1, 0.6] : [0.35, 0.7, 0.35]
          const bg = isBand ? 'rgba(255,107,53,0.10)' : 'rgba(255,255,255,0.05)'
          const border = isBand ? 'rgba(255,107,53,0.25)' : 'rgba(255,255,255,0.05)'
          const shadow = isBand ? '0 0 12px rgba(255,107,53,0.15)' : undefined
          return (
            <motion.div
              key={i}
              className="border"
              style={{ backgroundColor: bg, borderColor: border, boxShadow: shadow }}
              initial={{ opacity: 0.45 }}
              animate={{ opacity: baseOpacity }}
              transition={{ duration: 2.5, delay: (i % 9) * 0.06, repeat: Infinity }}
            />
          )
        })}
      </div>
      {/* Accent overlay */}
      <div
        className="absolute inset-0 rounded-md"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 60px rgba(255,107,53,0.12)'
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,53,0.10), transparent 35%, transparent 65%, rgba(255,107,53,0.06))',
          mixBlendMode: 'screen'
        }}
      />
    </div>
  )
}
