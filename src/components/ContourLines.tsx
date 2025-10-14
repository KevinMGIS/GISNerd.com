import { motion } from 'framer-motion'
import React from 'react'

interface Props {
  lines?: number
  accentEvery?: number
  speed?: number
}

// Responsive full-bleed contour lines. Uses a 1000x600 viewBox scaled to the container.
export default function ContourLines({ lines = 9, accentEvery = 3, speed = 20 }: Props) {
  const width = 1000
  const height = 600

  const makePath = (yBase: number, amp: number, freq: number, phase: number) => {
    const step = 40
    let d = `M 0 ${yBase}`
    for (let x = step; x <= width; x += step) {
      const y = yBase + Math.sin((x / width) * Math.PI * 2 * freq + phase) * amp
      d += ` L ${x} ${y}`
    }
    return d
  }

  const elements: React.ReactElement[] = []
  for (let i = 0; i < lines; i++) {
    const t = i / (lines - 1)
    const y = 80 + t * (height - 160)
    const amp = 8 + Math.sin(i * 0.7) * 6 + (i % 2 === 0 ? 3 : 0)
    const freq = 2 + (i % 3)
    const phase = i * 0.8
    const d = makePath(y, amp, freq, phase)

    const isAccent = accentEvery > 0 && i % accentEvery === 0
    const stroke = isAccent ? 'rgba(255,107,53,0.25)' : 'rgba(255,255,255,0.08)'
    const dash = isAccent ? '8 14' : '6 18'
    const duration = isAccent ? speed * 0.9 : speed

    elements.push(
      <motion.path
        key={i}
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={isAccent ? 2 : 1}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        style={{ filter: isAccent ? 'drop-shadow(0 0 10px rgba(255,107,53,0.15))' : undefined }}
        strokeDasharray={dash}
        initial={{ pathLength: 0, strokeDashoffset: 0 }}
        animate={{ pathLength: 1, strokeDashoffset: [0, -40] }}
        transition={{
          pathLength: { duration: 1.8, ease: 'easeOut' },
          strokeDashoffset: { duration, ease: 'linear', repeat: Infinity },
          delay: i * 0.05,
        }}
      />
    )
  }

  return (
    <svg
      className="w-full h-full"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      role="img"
      aria-label="Animated contour lines"
    >
      <motion.g
        animate={{ y: [-6, 6, -6], x: [0, -4, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      >
        {elements}
      </motion.g>
    </svg>
  )
}
