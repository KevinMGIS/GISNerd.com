import type { PropsWithChildren } from 'react'

export default function BlogPost({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-topo">
      <main className="mx-auto max-w-3xl px-6 py-16 prose prose-lg prose-invert prose-p:my-4 prose-headings:mt-8 prose-headings:mb-3 prose-ul:my-4 prose-ol:my-4 prose-li:my-1">
        {children}
      </main>
    </div>
  )
}
