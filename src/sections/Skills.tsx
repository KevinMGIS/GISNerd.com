import { motion } from 'framer-motion'
import { Map, Code2, Monitor, Share2 } from 'lucide-react'

const items = [
  {
    title: 'Geospatial Intelligence',
    desc: 'Transforming complex spatial data into actionable insights using GIS and spatial analysis tools.',
    icon: Map,
  },
  {
    title: 'Code-Driven Automation',
    desc: 'Building custom Python and JavaScript tools to streamline GIS workflows and eliminate repetitive tasks.',
    icon: Code2,
  },
  {
    title: 'Modern Web Development',
    desc: 'Designing fast, data-driven applications with React, TypeScript, and cloud-based infrastructure.',
    icon: Monitor,
  },
  {
    title: 'Systems Design & Integration',
    desc: 'Creating cohesive digital ecosystems that connect data, users, and processes across the organization.',
    icon: Share2,
  },
]

export default function Skills() {
  return (
  <section id="skills" className="pt-12 pb-24 snap-section">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 rounded-xl bg-surface/70 border border-white/5 card-hover"
          >
            <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 text-primary shadow-[0_0_24px_rgba(255,107,53,0.15)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_32px_rgba(255,107,53,0.25)]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <it.icon className="w-7 h-7 relative z-10" strokeWidth={2} />
            </div>
            
            <h3 className="mt-4 font-semibold text-xl">{it.title}</h3>
            <p className="mt-3 text-white/80">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
