'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const { t, dir } = useLanguage()

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#000000]"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(34,206,186,0.1)] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-6 animate-fade-in-up">
          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold">
            <span className="neon-glow text-[#ffffff]">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#999999]">
            {t('hero.subtitle')}
          </p>

          {/* Tech Stack Pills */}
          <div className={`flex flex-wrap justify-center gap-3 pt-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {['Node.js', 'React', 'React Native', 'Arduino', 'FiveM', 'Lua', 'HTML/CSS'].map((tech) => (
              <div
                key={tech}
                className="glass rounded-full px-4 py-2 text-sm font-medium hover:bg-[rgba(34,206,186,0.2)] transition-all text-[#ffffff]"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => {
                const element = document.getElementById('projects')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="glass rounded-full px-8 py-3 font-medium hover:bg-[rgba(34,206,186,0.2)] transition-all inline-flex items-center gap-2 animate-glow text-[#ffffff]"
            >
              {dir === 'rtl' ? 'دیدن پروژه‌ها' : 'View My Work'}
              <ArrowDown size={20} className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#22ceba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
