// src/components/sections/Projects.tsx - Clean Projects Showcase
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Face Recognition Attendance System",
      description: "Real-time attendance system with 95% accuracy using Python, OpenCV, and machine learning algorithms for automatic face detection and timestamp logging.",
      technologies: ["Python", "OpenCV", "dlib", "SQLite", "JavaScript", "HTML5", "CSS3"],
      features: [
        "95% face recognition accuracy",
        "Real-time detection and logging", 
        "Responsive web interface",
        "Automatic timestamp management"
      ],
      github: "https://github.com/Najim4633/face-recognition-attendance",
      live: "#",
      date: "April 2025",
      category: "AI/ML",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "eAuction Platform",
      description: "Full-featured web-based auction system with real-time bidding logic, user authentication, automated timers, and complete auction lifecycle management.",
      technologies: ["Django", "Python", "SQLite", "Bootstrap", "JavaScript", "HTML5"],
      features: [
        "Real-time bidding system",
        "User authentication & authorization",
        "Auction lifecycle management", 
        "Automated bidding timers"
      ],
      github: "https://github.com/Najim4633/eauction-platform",
      live: "#",
      date: "September 2024",
      category: "Web Development",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Online Job Portal",
      description: "Complete job portal solution with role-based access control, secure authentication, job posting/tracking, and comprehensive application management workflows.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "HTML5", "CSS3"],
      features: [
        "Secure user authentication",
        "Role-based access control",
        "Job posting & tracking system",
        "RESTful API architecture"
      ],
      github: "https://github.com/Najim4633/job-portal",
      live: "#",
      date: "February 2024", 
      category: "Backend Development",
      gradient: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <section id="projects" className="py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving approach through real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  
                  {/* Project Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                      <span>•</span>
                      <Tag className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-gray-300 text-sm font-medium hover:bg-gray-600/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-lg font-medium transition-all duration-300 hover:bg-gray-800/50"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className={`relative bg-gradient-to-br ${project.gradient} rounded-xl p-8 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                        <Tag className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-lg">{project.title}</h4>
                      <p className="text-white/80 text-sm">{project.category}</p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="absolute top-1/2 left-4 w-1 h-1 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Want to see more of my work?
          </h3>
          <p className="text-gray-400 text-lg">
            Check out my GitHub for additional projects and contributions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/Najim4633"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-full font-semibold hover:bg-gray-800/50 transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
