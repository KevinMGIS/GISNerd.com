import { Routes, Route, Link, useParams } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import NavProgress from './components/NavProgress'
import { postsIndex } from './blog/posts'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import ProjectDetail from './sections/ProjectDetail'
import ScrollToTop from './components/ScrollToTop'

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
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

  <main className="mx-auto max-w-6xl px-6 snap-container">
        <Hero />

        <Skills />

        <Portfolio />

        <Blog />

        <Contact />
      </main>

      <footer className="border-t border-white/5 py-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} GIS Nerd</footer>
    </div>
  )
}

function BlogDetail() {
  const { slug } = useParams()
  if (!slug) return null
  const loader = postsIndex[slug]
  const Lazy = loader ? (awaitableComponent(loader)) : null
  if (!Lazy) return <div className="p-10">Post not found.</div>
  return <Lazy />
}

function awaitableComponent(loader: () => Promise<{ default: React.ComponentType }>) {
  const LazyComp = lazy(loader)
  return function Wrapped() {
    return (
      <Suspense fallback={<div className="p-10">Loading…</div>}>
        <LazyComp />
      </Suspense>
    )
  }
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}
