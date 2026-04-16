'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useEffect } from 'react'

export function FiveMLanding() {
  const { dir } = useLanguage()
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('fivem')
  }, [setTheme])

  return (
    <section
      id="fivem"
      className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#000000]"
      style={{
        '--accent-color': '#a855f7',
      } as React.CSSProperties}
    >
      {/* Purple neon background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(168,85,247,0.1)] via-transparent to-[rgba(168,85,247,0.1)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${dir === 'rtl' ? 'grid-flow-dense' : ''}`}>
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-[#a855f7]">
                FiveM
              </h2>
              <p className="text-2xl text-[#d8b4fe]">
                {dir === 'rtl' ? 'توسعه سرور پیشرفته' : 'Advanced Server Development'}
              </p>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[#cccccc]">
                {dir === 'rtl'
                  ? 'من سرورهای فایو‌ام حرفه‌ای می‌سازم با تمام فیچرهای مورد نیاز:'
                  : 'I create professional FiveM servers with all necessary features:'}
              </p>
              <ul className={`space-y-2 ${dir === 'rtl' ? 'text-right' : ''}`}>
                {[
                  '🎯 Custom Scripts & Framework',
                  '🏙️ Map Development',
                  '💰 Economy System',
                  '🔐 Anti-Cheat & Security',
                ].map((item, i) => (
                  <li key={i} className="text-[#999999]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="glass rounded-full px-8 py-3 font-medium hover:bg-[rgba(168,85,247,0.2)] transition-all text-[#a855f7] border-[rgba(168,85,247,0.4)] hover:border-[rgba(168,85,247,0.8)]">
              {dir === 'rtl' ? 'اطلاعات بیشتر' : 'Learn More'}
            </button>
          </div>

          {/* Visual showcase */}
          <div className="glass-card border-[rgba(168,85,247,0.3)] hover:border-[rgba(168,85,247,0.6)] h-80 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">🎮</div>
              <p className="text-[#d8b4fe] font-medium">
                {dir === 'rtl' ? 'سرورهای FiveM' : 'FiveM Servers'}
              </p>
              <p className="text-[rgba(216,180,254,0.6)] text-sm">
                {dir === 'rtl' ? 'سفارشی‌سازی شده و آماده' : 'Customized & Ready'}
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Custom Scripts', desc: 'Tailored to your needs' },
            { title: 'Performance', desc: 'Optimized for stability' },
            { title: '24/7 Support', desc: 'Always available' },
          ].map((feature, i) => (
            <div key={i} className="glass-card border-[rgba(168,85,247,0.3)] text-center">
              <h3 className="text-lg font-bold text-[#a855f7] mb-2">{feature.title}</h3>
              <p className="text-[rgba(216,180,254,0.6)] text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
