import { Routes, Route, Link } from 'react-router-dom'
import NavProgress from './components/NavProgress'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import ProjectDetail from './sections/ProjectDetail'
import ScrollToTop from './components/ScrollToTop'
import StudioPage from './pages/StudioPage'
import BlogPostPage from './pages/BlogPostPage'
import BlogListPage from './pages/BlogListPage'
import PortfolioPage from './pages/PortfolioPage'

function Home() {
  return (
  <div className="min-h-screen bg-topo bg-topo-animated">
      <NavProgress />
      <header className="sticky top-0 z-10 backdrop-blur border-b border-white/5 bg-background/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 font-semibold tracking-wide text-text">
            <img src="/GISNerd_LOGO.png" alt="GIS Nerd" className="h-8 w-8 object-contain" />
            <span>GIS Nerd</span>
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link to="/blog" className="transition-colors hover:text-primary">Blog</Link>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <Link to="/portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </nav>
        </div>
      </header>

  <main className="mx-auto max-w-6xl px-6 snap-container">
        <Hero />

        <Blog />

        <Skills />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<StudioPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
