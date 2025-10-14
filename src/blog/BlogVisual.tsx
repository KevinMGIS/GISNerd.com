import { motion } from 'framer-motion'

export default function BlogVisual() {
  return (
    <div className="relative w-full h-full bg-black/30">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 56" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bvStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
          <linearGradient id="bvAccent" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,107,53,0.5)" />
            <stop offset="100%" stopColor="rgba(255,107,53,0.1)" />
          </linearGradient>
        </defs>
        {/* Topographic lines with slight horizontal drift */}
        <motion.g animate={{ x: [0, 2, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}>
          {Array.from({ length: 7 }).map((_, i) => {
            const y = 10 + i * 6
            const isAccent = i % 3 === 0
            return (
              <motion.path
                key={i}
                d={`M-10,${y} C10,${y - 4} 30,${y + 4} 50,${y} 70,${y - 4} 90,${y + 4} 110,${y}`}
                stroke={isAccent ? 'url(#bvAccent)' : 'url(#bvStroke)'}
                strokeWidth={isAccent ? 0.6 : 0.4}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: i * 0.1 }}
                opacity={isAccent ? 0.3 : 0.8}
              />
            )
          })}
        </motion.g>
      </svg>
      {/* Soft orange edge glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-b"
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,53,0.10), transparent 35%, transparent 65%, rgba(255,107,53,0.06))',
          mixBlendMode: 'screen'
        }}
      />
    </div>
  )
}
