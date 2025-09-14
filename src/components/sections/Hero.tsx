// src/components/sections/Hero.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { personalData } from '@/data/personal'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
              {personalData.name}
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300 font-light">
            {personalData.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {personalData.tagline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
            <Link href="#projects">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8 py-3 rounded-full">
            <Link href={personalData.resume} target="_blank">
              <Download className="mr-2 w-5 h-5" />
              Resume
            </Link>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 pt-8">
          <Link href={personalData.social.github} target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          <Link href={personalData.social.linkedin} target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
