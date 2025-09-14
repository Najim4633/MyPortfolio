// src/components/sections/Hero.tsx - Separate Hero Component
import Link from 'next/link'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          Available for Opportunities
        </div>

        {/* Main Introduction */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            <span className="block text-white">Najim</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tamboli
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
            Java Developer & Backend Engineer
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building robust backend solutions with Java, Spring Boot, and modern technologies. 
            Passionate about creating scalable systems and solving complex problems.
          </p>
        </div>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {['Java', 'Spring Boot', 'Python', 'MySQL', 'React', 'Git'].map((tech, index) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 text-sm font-medium hover:bg-gray-700/50 transition-colors"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
          <Link 
            href="#projects"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View My Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/Najim_Tamboli.pdf"
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-full font-semibold hover:bg-gray-800/50 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Link>
        </div>

        {/* Contact & Social */}
        <div className="space-y-6 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href="mailto:najimtamboli671@gmail.com" className="hover:text-blue-400 transition-colors">
                najimtamboli671@gmail.com
              </a>
            </div>
            <div className="text-gray-500">•</div>
            <div>Pune, Maharashtra</div>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/Najim4633" 
              target="_blank"
              className="p-4 bg-gray-800/30 hover:bg-gray-700 rounded-xl text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/najim-tamboli" 
              target="_blank"
              className="p-4 bg-gray-800/30 hover:bg-gray-700 rounded-xl text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:najimtamboli671@gmail.com"
              className="p-4 bg-gray-800/30 hover:bg-gray-700 rounded-xl text-gray-400 hover:text-emerald-400 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
