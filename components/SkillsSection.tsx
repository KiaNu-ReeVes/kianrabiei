'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

const skillsData = {
  'Backend': ['Node.js', 'Express.js', 'REST APIs', 'Database Design'],
  'Frontend': ['React', 'React Native', 'Tailwind CSS', 'TypeScript'],
  'Gaming': ['FiveM', 'Lua', 'Assetto Corsa', 'BeamNG'],
  'Embedded': ['Arduino', 'IoT', 'Smart Systems', 'Hardware Integration'],
}

export function SkillsSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(34,206,186,0.03)] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-glow text-[#ffffff]">{t('skills.title')}</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${dir === 'rtl' ? 'direction-rtl' : ''}`}>
            {Object.entries(skillsData).map((category) => (
              <div key={category[0]} className="space-y-4 animate-fade-in-up">
                <h3 className="text-xl font-bold text-[#22ceba]">{category[0]}</h3>
                <div className="space-y-2">
                  {category[1].map((skill) => (
                    <div
                      key={skill}
                      className="glass-card text-center hover:bg-[rgba(34,206,186,0.2)] transition-all text-[#ffffff]"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Bar */}
          <div className="mt-12 space-y-6">
            <h3 className="text-2xl font-bold text-[#ffffff]">Proficiency Level</h3>
            {[
              { skill: 'Node.js / JavaScript', level: 95 },
              { skill: 'React / React Native', level: 90 },
              { skill: 'Full Stack Development', level: 92 },
              { skill: 'System Design', level: 85 },
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-[#ffffff]">{item.skill}</span>
                  <span className="text-[#22ceba]">{item.level}%</span>
                </div>
                <div className="glass rounded-full h-2">
                  <div
                    className="bg-[#22ceba] h-full rounded-full transition-all"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
