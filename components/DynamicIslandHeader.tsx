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
          isScrolled ? 'py-2' : 'py-4'
        } bg-[#000000]`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold neon-glow text-[#22ceba]">
            KR
          </div>

          {/* Dynamic Island - Navigation */}
          <nav className="hidden md:flex glass rounded-full px-8 py-3 gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center gap-2 text-[#ffffff] hover:text-[#22ceba] transition-colors neon-glow-hover"
                title={t(item.key)}
              >
                <span className="text-lg">{item.icon}</span>
              </button>
            ))}
          </nav>

          {/* Right side - Language Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
              className="glass rounded-full px-4 py-2 transition-all hover:bg-[rgba(34,206,186,0.2)] text-sm font-medium text-[#ffffff]"
            >
              {language === 'en' ? 'فارسی' : 'English'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass rounded-full p-2 text-[#ffffff]"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass mt-2 mx-4 rounded-lg p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-4 py-2 hover:bg-[rgba(34,206,186,0.2)] rounded-lg transition-colors flex items-center gap-2 text-[#ffffff]"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{t(item.key)}</span>
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  )
}
