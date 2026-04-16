'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
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

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-[#000000]">
      <div className="max-w-6xl mx-auto px-4 w-full">
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
                className="glass-card group hover:border-[rgba(34,206,186,0.5)] transition-all cursor-pointer text-[#ffffff]"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{project.icon}</span>
                  <ExternalLink size={20} className="text-[#22ceba] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#999999] mb-4">{project.description}</p>

                <div className={`flex flex-wrap gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="glass rounded-full px-3 py-1 text-xs text-[#22ceba]">
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
