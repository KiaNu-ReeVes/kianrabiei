'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useEffect } from 'react'

export function AssettoCorsaLanding() {
  const { dir } = useLanguage()
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('assetto')
  }, [setTheme])

  return (
    <section
      id="assetto"
      className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#000000]"
      style={{
        '--accent-color': '#ff3d3d',
      } as React.CSSProperties}
    >
      {/* Red neon background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,61,61,0.1)] via-transparent to-[rgba(255,61,61,0.1)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${dir === 'rtl' ? 'grid-flow-dense' : ''}`}>
          {/* Visual showcase */}
          <div className="glass-card border-[rgba(255,61,61,0.3)] hover:border-[rgba(255,61,61,0.6)] h-80 flex items-center justify-center order-last md:order-first">
            <div className="text-center space-y-4">
              <div className="text-6xl">🏎️</div>
              <p className="text-[#ff7575] font-medium">
                {dir === 'rtl' ? 'مسابقات سریع' : 'High-Performance Racing'}
              </p>
              <p className="text-[rgba(255,117,117,0.6)] text-sm">
                {dir === 'rtl' ? 'محتوای حرفه‌ای' : 'Professional Content'}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-[#ff6b6b]">
                Assetto Corsa
              </h2>
              <p className="text-2xl text-[#ff7575]">
                {dir === 'rtl' ? 'شبیه‌سازی مسابقات' : 'Racing Simulation'}
              </p>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[#cccccc]">
                {dir === 'rtl'
                  ? 'خبره در ایجاد کار سفارشی و محتوای حرفه‌ای برای Assetto Corsa:'
                  : 'Expert in creating custom content and professional mods for Assetto Corsa:'}
              </p>
              <ul className={`space-y-2 ${dir === 'rtl' ? 'text-right' : ''}`}>
                {[
                  '🏁 Car & Track Mods',
                  '🎨 Advanced Texturing',
                  '⚙️ Physics Tuning',
                  '🌍 Realistic Simulation',
                ].map((item, i) => (
                  <li key={i} className="text-[#999999]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="glass rounded-full px-8 py-3 font-medium hover:bg-[rgba(255,61,61,0.2)] transition-all text-[#ff7575] border-[rgba(255,61,61,0.4)] hover:border-[rgba(255,61,61,0.8)]">
              {dir === 'rtl' ? 'مشاهده نمونه‌ها' : 'View Gallery'}
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Custom Mods', desc: 'Unique content' },
            { title: 'Quality', desc: 'High-fidelity models' },
            { title: 'Performance', desc: 'Optimized for speed' },
          ].map((feature, i) => (
            <div key={i} className="glass-card border-[rgba(255,61,61,0.3)] text-center">
              <h3 className="text-lg font-bold text-[#ff6b6b] mb-2">{feature.title}</h3>
              <p className="text-[rgba(255,117,117,0.6)] text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
