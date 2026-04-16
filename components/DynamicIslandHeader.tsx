'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'about', key: 'nav.about', icon: '👤' },
  { id: 'projects', key: 'nav.projects', icon: '💼' },
  { id: 'skills', key: 'nav.skills', icon: '⚙️' },
  { id: 'contact', key: 'nav.contact', icon: '📧' },
]

export function DynamicIslandHeader() {
  const { language, setLanguage, t, dir } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 backdrop-blur-lg' : 'py-6'
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(10, 10, 10, 0.8)'
            : 'rgba(10, 10, 10, 0.4)',
          borderBottom: isScrolled 
            ? '1px solid rgba(34, 206, 186, 0.1)' 
            : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold neon-glow text-[#22ceba] hover:scale-110 transition-transform"
          >
            KR
          </button>

          {/* Dynamic Island - Navigation */}
          <nav 
            className="hidden md:flex gap-1 rounded-full px-2 py-2 backdrop-blur-lg"
            style={{
              background: 'rgba(34, 206, 186, 0.05)',
              border: '1px solid rgba(34, 206, 186, 0.2)',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[#ffffff] hover:text-[#22ceba] hover:bg-[rgba(34,206,186,0.1)] transition-all neon-glow-hover font-medium text-sm"
                title={t(item.key)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden lg:inline">{t(item.key)}</span>
              </button>
            ))}
          </nav>

          {/* Right side - Language Toggle & Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
              className="hidden sm:flex glass rounded-full px-4 py-2 transition-all hover:bg-[rgba(34,206,186,0.15)] text-sm font-medium text-[#ffffff] border border-[rgba(34,206,186,0.2)]"
            >
              {language === 'en' ? 'فارسی' : 'English'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass rounded-full p-2 text-[#ffffff] border border-[rgba(34,206,186,0.2)]"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden mt-4 mx-4 rounded-2xl p-4 space-y-2 backdrop-blur-lg border border-[rgba(34,206,186,0.2)]"
            style={{
              background: 'rgba(34, 206, 186, 0.05)',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-4 py-3 hover:bg-[rgba(34,206,186,0.15)] rounded-lg transition-colors flex items-center gap-3 text-[#ffffff] font-medium"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{t(item.key)}</span>
              </button>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'fa' : 'en')
                setIsMenuOpen(false)
              }}
              className="w-full text-left px-4 py-3 hover:bg-[rgba(34,206,186,0.15)] rounded-lg transition-colors flex items-center gap-3 text-[#ffffff] font-medium border-t border-[rgba(34,206,186,0.1)] mt-2 pt-2"
            >
              <span className="text-lg">🌐</span>
              <span>{language === 'en' ? 'فارسی' : 'English'}</span>
            </button>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-24" />
    </>
  )
}
