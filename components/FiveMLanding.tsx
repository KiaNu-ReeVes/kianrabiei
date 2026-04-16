'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export function FiveMLanding() {
  const { dir, t } = useLanguage()
  const { setTheme } = useTheme()
  const sectionRef = useScrollReveal()

  useEffect(() => {
    setTheme('fivem')
  }, [setTheme])

  return (
    <section
      ref={sectionRef}
      id="fivem"
      className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#0a0a0a]"
      style={{
        '--accent-color': '#ff9000',
      } as React.CSSProperties}
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/backgrounds/fivem-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.7)] to-[rgba(10,10,10,0.85)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,144,0,0.15)] via-transparent to-[rgba(255,144,0,0.1)] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-[rgba(255,144,0,0.15)] border border-[rgba(255,144,0,0.3)] text-[#ff9000] text-xs font-bold uppercase tracking-wider">
                Gaming Development
              </div>
              <h2 className="text-6xl md:text-7xl font-bold text-[#ff9000] text-balance">
                FiveM
              </h2>
              <p className="text-xl text-[#ffa500] font-light">
                {dir === 'rtl' ? 'توسعه سرور پیشرفته و حرفه‌ای' : 'Advanced Professional Server Development'}
              </p>
            </div>

            <div className="space-y-6 text-lg">
              <p className="text-[#d0d0d0] leading-relaxed">
                {dir === 'rtl'
                  ? 'متخصص در ایجاد سرورهای FiveM پیشرفته با تمامی فیچرهای مورد نیاز برای یک سرور حرفه‌ای و پایدار.'
                  : 'Expert in creating advanced FiveM servers with comprehensive features for professional and stable operations.'}
              </p>
              <ul className={`space-y-3 ${dir === 'rtl' ? 'text-right' : ''}`}>
                {[
                  { icon: '⚙️', text: dir === 'rtl' ? 'اسکریپت‌های سفارشی و فریم‌ورک' : 'Custom Scripts & Framework' },
                  { icon: '🏙️', text: dir === 'rtl' ? 'توسعه نقشه و محیط' : 'Advanced Map Development' },
                  { icon: '💰', text: dir === 'rtl' ? 'سیستم‌های اقتصادی پیچیده' : 'Complex Economy Systems' },
                  { icon: '🔐', text: dir === 'rtl' ? 'امنیت و ضد‌تقلب' : 'Security & Anti-Cheat' },
                ].map((item, i) => (
                  <li key={i} className="text-[#b0b0b0] flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <button className="glass rounded-full px-8 py-4 font-medium hover:bg-[rgba(255,144,0,0.2)] transition-all text-[#ff9000] border-[rgba(255,144,0,0.4)] hover:border-[rgba(255,144,0,0.8)] inline-flex items-center gap-2 text-lg">
              {dir === 'rtl' ? 'درخواست مشاوره' : 'Get Consultation'}
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Image placeholder with gradient */}
          <div 
            className="relative h-96 rounded-2xl overflow-hidden border border-[rgba(255,144,0,0.3)] shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,144,0,0.2) 0%, rgba(255,144,0,0.05) 100%)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <img 
              src="/backgrounds/fivem-bg.jpg" 
              alt="FiveM Server" 
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.8)] via-transparent to-transparent flex items-end justify-center p-6">
              <div className="text-center">
                <p className="text-[#ff9000] font-bold text-xl">FiveM Roleplay</p>
                <p className="text-[#ffa500] text-sm mt-2">Professional & Customized</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Custom Scripts', desc: 'Fully tailored to your server needs and vision', icon: '💻' },
            { title: 'Performance First', desc: 'Optimized for stability and player experience', icon: '⚡' },
            { title: 'Expert Support', desc: 'Continuous support and feature development', icon: '🎯' },
          ].map((feature, i) => (
            <div 
              key={i} 
              className="group p-6 rounded-xl border border-[rgba(255,144,0,0.2)] transition-all hover:border-[rgba(255,144,0,0.5)] hover:bg-[rgba(255,144,0,0.05)]"
              style={{
                background: 'rgba(255,144,0,0.02)',
              }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#ff9000] mb-2">{feature.title}</h3>
              <p className="text-[#999999] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
