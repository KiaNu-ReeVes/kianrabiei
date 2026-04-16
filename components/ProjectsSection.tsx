'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ExternalLink } from 'lucide-react'

const projectsData = [
  {
    title: 'Smart Home System',
    description: 'IoT automation system for home control using Arduino',
    tags: ['Arduino', 'IoT', 'Smart Home'],
    icon: '🏠',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack web application with Node.js and React',
    tags: ['Node.js', 'React', 'MongoDB'],
    icon: '🛒',
  },
  {
    title: 'Mobile App Suite',
    description: 'Cross-platform mobile applications with React Native',
    tags: ['React Native', 'Firebase', 'Mobile'],
    icon: '📱',
  },
  {
    title: 'Game Server Manager',
    description: 'Custom FiveM server with advanced scripting',
    tags: ['FiveM', 'Lua', 'Gaming'],
    icon: '🎮',
  },
]

export function ProjectsSection() {
  const { t, dir } = useLanguage()
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen flex items-center py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(34,206,186,0.05)] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-glow text-[#ffffff]">{t('projects.title')}</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl border border-[rgba(34,206,186,0.2)] bg-[rgba(34,206,186,0.02)] hover:border-[rgba(34,206,186,0.5)] hover:bg-[rgba(34,206,186,0.08)] transition-all duration-300 cursor-pointer text-[#ffffff] animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                  <ExternalLink size={20} className="text-[#22ceba] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[#22ceba] transition-colors">{project.title}</h3>
                <p className="text-[#b0b0b0] mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className={`flex flex-wrap gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-[#22ceba] border border-[rgba(34,206,186,0.3)] rounded-full hover:bg-[rgba(34,206,186,0.1)] transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
