import { useEffect, useRef, useState, type PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

interface Props extends PropsWithChildren {
  id?: string
  className?: string
}

export default function Section({ id, className, children }: Props) {
  const ref = useRef<HTMLElement>(null!)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setVisible(true)
      })
    }, { rootMargin: '-20% 0px -20% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
  <section id={id} ref={ref} className={className}>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    </section>
  )
}
