export default function Contact() {
  return (
  <section id="contact" className="pt-12 pb-24 snap-section">
      <h2 className="text-3xl font-bold mb-6">Let's Chat</h2>
      <p className="text-white/80 max-w-prose">Get in touch to discuss GIS projects, collaborations, or opportunities.</p>
      <div className="mt-6 flex gap-4">
  <a href="mailto:kevin@gisnerd.com" className="px-4 py-2 rounded-md bg-primary text-black font-medium">Email</a>
        <a href="https://www.linkedin.com/in/kevin-mazur-6942131/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-white/20 hover:border-white/30 hover:bg-white/5 transition-colors">LinkedIn</a>
      </div>
    </section>
  )
}
