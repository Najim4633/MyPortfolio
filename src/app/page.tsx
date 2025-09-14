// src/app/page.tsx - Clean Page Layout
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      
      {/* Navigation */}
      <Navigation />
      
      {/* All Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Najim Tamboli. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
