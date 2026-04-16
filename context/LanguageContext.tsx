'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'fa'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'Building amazing experiences with code',
    'about.title': 'About Me',
    'about.description': 'I\'m a passionate developer with expertise in Node.js, React, React Native, and creative solutions.',
    'skills.title': 'Skills & Technologies',
    'projects.title': 'Projects',
    'fivem.title': 'FiveM Development',
    'fivem.description': 'Custom servers and scripts for FiveM',
    'assetto.title': 'Assetto Corsa',
    'assetto.description': 'Racing simulations and custom content',
    'beamng.title': 'BeamNG',
    'beamng.description': 'Vehicle simulation and physics',
    'contact.title': 'Get In Touch',
    'contact.email': 'Email',
    'contact.message': 'Send Message',
  },
  fa: {
    'nav.about': 'درباره من',
    'nav.projects': 'پروژه‌ها',
    'nav.skills': 'مهارت‌ها',
    'nav.contact': 'تماس',
    'hero.title': 'توسعه‌دهنده Full Stack',
    'hero.subtitle': 'ساخت تجربیات فوق‌العاده با کد',
    'about.title': 'درباره من',
    'about.description': 'من یک توسعه‌دهنده علاقه‌مند با تخصص در Node.js، React، React Native و راهکارهای خلاقانه هستم.',
    'skills.title': 'مهارت‌ها و فناوری‌ها',
    'projects.title': 'پروژه‌ها',
    'fivem.title': 'توسعه FiveM',
    'fivem.description': 'سرورهای سفارشی و اسکریپت‌ها برای FiveM',
    'assetto.title': 'Assetto Corsa',
    'assetto.description': 'شبیه‌سازی‌های مسابقه و محتوای سفارشی',
    'beamng.title': 'BeamNG',
    'beamng.description': 'شبیه‌سازی خودروها و فیزیک',
    'contact.title': 'تماس بگیرید',
    'contact.email': 'ایمیل',
    'contact.message': 'ارسال پیام',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved) {
      setLanguageState(saved)
    } else {
      const browserLang = navigator.language.startsWith('fa') ? 'fa' : 'en'
      setLanguageState(browserLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value = translations[language] as any
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: language === 'fa' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
