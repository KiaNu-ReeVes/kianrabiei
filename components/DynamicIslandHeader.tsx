'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Menu, X, Home, FileText, Zap, Mail } from 'lucide-react'

const navItems = [
  { id: 'about', key: 'nav.about', icon: Home },
  { id: 'projects', key: 'nav.projects', icon: FileText },
  { id: 'skills', key: 'nav.skills', icon: Zap },
  { id: 'contact', key: 'nav.contact', icon: Mail },
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
      {/* Desktop Header - Transparent background */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-4">
        <nav 
          className={`transition-all duration-300 flex items-center gap-1 rounded-full backdrop-blur-lg ${
            isScrolled ? 'px-3 py-2' : 'px-4 py-3'
          }`}
          style={{
            background: 'rgba(34, 206, 186, 0.08)',
            border: '1px solid rgba(34, 206, 186, 0.25)',
            boxShadow: isScrolled ? '0 8px 32px rgba(34, 206, 186, 0.1)' : '0 4px 24px rgba(34, 206, 186, 0.08)',
          }}
        >
          {/* Logo - Hidden on mobile */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(34,206,186,0.15)] transition-all text-[#22ceba] font-bold text-lg"
            title="Home"
          >
            KR
          </button>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-[rgba(34,206,186,0.15)]" />

          {/* Navigation Items */}
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center justify-center w-10 h-10 rounded-full text-[#ffffff] hover:text-[#22ceba] hover:bg-[rgba(34,206,186,0.15)] transition-all"
                title={t(item.key)}
              >
                <Icon size={isScrolled ? 18 : 20} className="transition-all" />
              </button>
            )
          })}

          {/* Divider */}
          <div className="w-px h-6 bg-[rgba(34,206,186,0.15)]" />

          {/* Language Toggle & Menu */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#ffffff] hover:text-[#22ceba] hover:bg-[rgba(34,206,186,0.15)] transition-all text-sm font-medium"
            title={language === 'en' ? 'فارسی' : 'English'}
          >
            {language === 'en' ? '🇮🇷' : '🇺🇸'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[#ffffff] hover:text-[#22ceba] hover:bg-[rgba(34,206,186,0.15)] transition-all"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="absolute top-full mt-3 left-4 right-4 rounded-2xl p-4 space-y-2 backdrop-blur-lg border border-[rgba(34,206,186,0.2)] md:hidden"
            style={{
              background: 'rgba(34, 206, 186, 0.08)',
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-4 py-3 hover:bg-[rgba(34,206,186,0.15)] rounded-lg transition-colors flex items-center gap-3 text-[#ffffff] font-medium"
                >
                  <Icon size={20} />
                  <span>{t(item.key)}</span>
                </button>
              )
            })}
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'fa' : 'en')
                setIsMenuOpen(false)
              }}
              className="w-full text-left px-4 py-3 hover:bg-[rgba(34,206,186,0.15)] rounded-lg transition-colors flex items-center gap-3 text-[#ffffff] font-medium border-t border-[rgba(34,206,186,0.1)] mt-2 pt-2"
            >
              <span className="text-lg">{language === 'en' ? '🇮🇷' : '🇺🇸'}</span>
              <span>{language === 'en' ? 'فارسی' : 'English'}</span>
            </button>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  )
}
