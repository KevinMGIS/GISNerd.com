import { Download } from 'lucide-react'

export default function Contact() {
  return (
  <section id="contact" className="pt-12 pb-24 snap-section">
      <h2 className="text-3xl font-bold mb-6">Let's Chat</h2>
      <p className="text-white/80 max-w-prose">Get in touch to discuss GIS projects, collaborations, or opportunities.</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a 
          href="/Kevin_Mazur_GIS_Resume.pdf" 
          download="Kevin_Mazur_GIS_Resume.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200"
        >
          <Download size={20} />
          Download Resume
        </a>
  <a href="mailto:kevin@gisnerd.com" className="px-4 py-2 rounded-md border border-primary/40 text-primary hover:border-primary/60 hover:bg-primary/5 transition-colors">Email</a>
        <a href="https://www.linkedin.com/in/kevin-mazur-6942131/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-white/20 hover:border-white/30 hover:bg-white/5 transition-colors">LinkedIn</a>
      </div>
    </section>
  )
}
