import { useEffect, useRef } from 'react'

interface Props {
  density?: number
  color?: string
}

export default function Particles({ density = 40, color = 'rgba(255,107,53,0.25)' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    type P = { x: number; y: number; vx: number; vy: number; r: number }
    const particles: P[] = Array.from({ length: density }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: 1 + Math.random() * 1.5,
    }))

    const step = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = color
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(rafRef.current!)
      window.removeEventListener('resize', onResize)
    }
  }, [density, color])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
