import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Portfolio() {
  return (
  <section id="portfolio" className="pt-12 pb-24 snap-section">
      <h2 className="text-3xl font-bold mb-10">Portfolio</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: i * 0.1 }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
