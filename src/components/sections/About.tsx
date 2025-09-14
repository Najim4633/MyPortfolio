// src/components/sections/About.tsx - Clean About Section
import { Code, Coffee, Lightbulb, Target } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer focused on creating efficient backend solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate MCA student with expertise in <span className="text-blue-400">Java</span>, <span className="text-green-400">Spring Boot</span>, and full-stack development. I specialize in building scalable backend systems and have hands-on experience with real-world projects.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently seeking opportunities as a <span className="text-purple-400">Java Developer</span> or <span className="text-purple-400">Backend Developer</span> to contribute to innovative tech solutions and continue learning in a practical environment.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">What Drives Me</h3>
              <p className="text-gray-300 leading-relaxed">
                I love solving complex problems and turning ideas into functional applications. My approach combines technical expertise with creative problem-solving to deliver solutions that make a real impact.
              </p>
            </div>

            {/* Current Focus */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Currently Focused On</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Advanced Spring Boot development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  System design and architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Building scalable REST APIs
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Values & Interests */}
          <div className="space-y-8">
            
            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-colors">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">Writing maintainable and efficient solutions</p>
              </div>
              
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-colors">
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">Always exploring new technologies and methods</p>
              </div>
              
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-colors">
                <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Problem Solving</h4>
                <p className="text-gray-400 text-sm">Finding elegant solutions to complex challenges</p>
              </div>
              
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-colors">
                <Coffee className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Continuous Learning</h4>
                <p className="text-gray-400 text-sm">Always growing and improving my skills</p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800/20 border border-gray-700/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-white">Master of Computer Application</h5>
                  <p className="text-gray-400 text-sm">MES's Institute, Pune • 2023-2025</p>
                  <p className="text-gray-500 text-sm">Focus: Advanced Java, Spring Boot, System Design</p>
                </div>
                <div>
                  <h5 className="font-medium text-white">Bachelor of Computer Application</h5>
                  <p className="text-gray-400 text-sm">K. J. Somaiya College • 2020-2023</p>
                  <p className="text-gray-500 text-sm">Foundation: Programming, Database Systems, Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
