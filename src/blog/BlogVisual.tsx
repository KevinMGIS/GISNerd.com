import { motion } from 'framer-motion'

export default function BlogVisual() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary/8 via-black/40 to-black/30">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 56" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bvStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.20)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          </linearGradient>
          <linearGradient id="bvAccent" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,107,53,0.8)" />
            <stop offset="100%" stopColor="rgba(255,107,53,0.3)" />
          </linearGradient>
        </defs>
        {/* Topographic lines with continuous breathing animation */}
        <motion.g 
          animate={{ 
            x: [0, 4, 0, -2, 0],
            y: [0, -1, 0, 1, 0]
          }} 
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        >
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
                opacity={isAccent ? 0.9 : 0.6}
              />
            )
          })}
        </motion.g>
      </svg>
      {/* Enhanced orange glow with pulsing animation */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-b"
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,53,0.25), transparent 35%, transparent 65%, rgba(255,107,53,0.15))',
          mixBlendMode: 'screen'
        }}
      />
    </div>
  )
}
