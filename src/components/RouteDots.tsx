import { motion } from 'framer-motion'

interface Props {
  size?: number
  color?: string
}

// A simple route visualization: orange dots connected by animated paths
export default function RouteDots({ size = 320, color = '#FF6B35' }: Props) {
  const w = size
  const h = size
  const points = [
    { x: 40, y: h * 0.2 },
    { x: w * 0.35, y: h * 0.1 },
    { x: w * 0.6, y: h * 0.3 },
    { x: w * 0.75, y: h * 0.55 },
    { x: w * 0.55, y: h * 0.8 },
    { x: w * 0.25, y: h * 0.65 },
  ]

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Route visualization">
      <defs>
        <motion.linearGradient id="routeGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.6} />
          <stop offset="100%" stopColor={color} stopOpacity={0.2} />
        </motion.linearGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d={pathD}
        fill="none"
        stroke="url(#routeGlow)"
        strokeWidth={3}
        strokeLinecap="round"
        filter="url(#softGlow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      />

      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={6}
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.15, type: 'spring', stiffness: 140, damping: 12 }}
        />
      ))}

      {/* subtle pulse on active-ish points */}
      {points.map((p, i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx={p.x}
          cy={p.y}
          r={10}
          fill={color}
          opacity={0.12}
          animate={{ r: [10, 14, 10], opacity: [0.12, 0.06, 0.12] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </svg>
  )
}
