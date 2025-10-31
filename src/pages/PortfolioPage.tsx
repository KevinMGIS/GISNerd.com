import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Portfolio from '../sections/Portfolio'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-topo bg-topo-animated">
      <SEO
        title="Portfolio | GIS Nerd"
        description="Explore my GIS and development projects, from mapping tools to data analysis applications."
        canonical="https://gisnerd.com/portfolio"
      />
      
      <header className="sticky top-0 z-10 backdrop-blur border-b border-white/5 bg-background/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <Link to="/" className="flex items-center gap-3 font-semibold tracking-wide text-text">
            <img src="/GISNerd_LOGO.png" alt="GIS Nerd" className="h-8 w-8 object-contain" />
            <span>GIS Nerd</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Portfolio />
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
