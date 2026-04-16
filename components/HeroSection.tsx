'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const { t, dir } = useLanguage()
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setIsVisible(rect.bottom > window.innerHeight / 2)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] pt-20"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(34,206,186,0.15)] via-transparent to-transparent pointer-events-none" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[rgba(34,206,186,0.1)] rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[rgba(34,206,186,0.05)] rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-balance">
            <span className="neon-glow text-[#ffffff]">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#b0b0b0] max-w-3xl mx-auto text-balance">
            {t('hero.subtitle')}
          </p>

          {/* Tech Stack Pills */}
          <div className={`flex flex-wrap justify-center gap-3 pt-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {['Node.js', 'React', 'React Native', 'Arduino', 'FiveM', 'Lua', 'HTML/CSS'].map((tech, i) => (
              <div
                key={tech}
                className="glass rounded-full px-4 py-2 text-sm font-medium hover:bg-[rgba(34,206,186,0.15)] transition-all text-[#ffffff] border border-[rgba(34,206,186,0.2)]"
                style={{ animationDelay: `${i * 0.1}s` }}
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
              className="glass rounded-full px-8 py-4 font-medium hover:bg-[rgba(34,206,186,0.15)] transition-all inline-flex items-center gap-2 text-[#ffffff] text-lg border border-[rgba(34,206,186,0.3)] hover:border-[rgba(34,206,186,0.6)] shadow-lg hover:shadow-xl"
            >
              {dir === 'rtl' ? 'دیدن پروژه‌ها' : 'View My Work'}
              <ArrowDown size={24} className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Fixed at bottom */}
      {isVisible && (
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
          onClick={() => {
            const element = document.getElementById('about')
            element?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-[#22ceba] font-medium uppercase tracking-wide">Scroll</p>
            <svg className="w-6 h-6 text-[#22ceba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}
    </section>
  )
}
