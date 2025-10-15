import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Map, ArrowLeft, Home } from 'lucide-react'
import ContourLines from './ContourLines'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-topo bg-topo-animated flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        {/* Animated visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[2/1] rounded-xl bg-surface/60 border border-white/5 overflow-hidden mb-8"
        >
          <div className="absolute inset-0 opacity-40">
            <ContourLines lines={9} accentEvery={3} speed={20} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Map className="w-20 h-20 text-primary/30" strokeWidth={1.5} />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={{
              boxShadow:
                'inset 0 0 0 1px rgba(255,255,255,0.05)',
              background:
                'linear-gradient(135deg, rgba(255,107,53,0.15), transparent 30%, transparent 70%, rgba(255,107,53,0.10))',
              mixBlendMode: 'screen',
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Location Not Found</h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Looks like you've wandered off the map. This page doesn't exist, or the coordinates are incorrect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-black font-medium hover:bg-primary/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/20 hover:border-white/30 hover:bg-white/5 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
