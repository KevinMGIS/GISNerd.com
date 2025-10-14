import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ContourLines from '../components/ContourLines'
import Particles from '../components/Particles'

export default function Hero() {
  const ref = useRef<HTMLElement>(null!)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
  <section id="hero" ref={ref} className="relative overflow-hidden min-h-[55vh] md:min-h-[58vh] flex items-start snap-section pt-0">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <Particles density={50} />
      </div>
  <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center w-full pb-0 md:pb-0 relative">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-0 text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Spatial Intelligence, Powered by <span className="text-primary">Code</span>
          </motion.h1>
          <p className="mt-6 text-lg text-white/70 max-w-prose">
            Hey, I’m Kevin — the GIS Nerd. I build tools that connect geography, data, and design to turn complex information into insight.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ y }}
          className="relative aspect-[5/4] rounded-xl bg-surface/60 border border-white/5 overflow-hidden"
        >
          <div className="absolute inset-0">
            <ContourLines lines={11} accentEvery={3} speed={26} />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={{
              boxShadow:
                'inset 0 0 0 1px rgba(255,255,255,0.05), 0 0 80px rgba(255,107,53,0.08), 0 0 0 1px rgba(255,107,53,0.05)',
              background:
                'linear-gradient(135deg, rgba(255,107,53,0.18), transparent 30%, transparent 70%, rgba(255,107,53,0.12))',
              mixBlendMode: 'screen',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
