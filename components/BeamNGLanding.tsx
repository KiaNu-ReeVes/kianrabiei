'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useEffect } from 'react'

export function BeamNGLanding() {
  const { dir } = useLanguage()
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('beamng')
  }, [setTheme])

  return (
    <section
      id="beamng"
      className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#000000]"
      style={{
        '--accent-color': '#00ff88',
      } as React.CSSProperties}
    >
      {/* Green neon background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,255,136,0.1)] via-transparent to-[rgba(0,255,136,0.1)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${dir === 'rtl' ? 'grid-flow-dense' : ''}`}>
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-[#00ff88]">
                BeamNG
              </h2>
              <p className="text-2xl text-[#00e680]">
                {dir === 'rtl' ? 'شبیه‌سازی فیزیکی پیشرفته' : 'Advanced Physics Simulation'}
              </p>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[#cccccc]">
                {dir === 'rtl'
                  ? 'تخصص در توسعه ماژول‌های سفارشی و شبیه‌سازی‌های فیزیکی برای BeamNG:'
                  : 'Specialized in developing custom modules and physics simulations for BeamNG:'}
              </p>
              <ul className={`space-y-2 ${dir === 'rtl' ? 'text-right' : ''}`}>
                {[
                  '🚗 Vehicle Modding',
                  '⚡ Physics Engineering',
                  '🔬 Realistic Simulation',
                  '🎯 Custom Maps',
                ].map((item, i) => (
                  <li key={i} className="text-[#999999]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="glass rounded-full px-8 py-3 font-medium hover:bg-[rgba(0,255,136,0.2)] transition-all text-[#00ff88] border-[rgba(0,255,136,0.4)] hover:border-[rgba(0,255,136,0.8)]">
              {dir === 'rtl' ? 'اطلاعات مربوط' : 'Get In Touch'}
            </button>
          </div>

          {/* Visual showcase */}
          <div className="glass-card border-[rgba(0,255,136,0.3)] hover:border-[rgba(0,255,136,0.6)] h-80 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">🚙</div>
              <p className="text-[#00e680] font-medium">
                {dir === 'rtl' ? 'شبیه‌سازی خودرو' : 'Vehicle Simulation'}
              </p>
              <p className="text-[rgba(0,255,136,0.6)] text-sm">
                {dir === 'rtl' ? 'فیزیک واقعی' : 'Realistic Physics'}
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Custom Vehicles', desc: 'Unique designs' },
            { title: 'Physics', desc: 'Realistic behavior' },
            { title: 'Innovation', desc: 'Cutting-edge tech' },
          ].map((feature, i) => (
            <div key={i} className="glass-card border-[rgba(0,255,136,0.3)] text-center">
              <h3 className="text-lg font-bold text-[#00ff88] mb-2">{feature.title}</h3>
              <p className="text-[rgba(0,255,136,0.6)] text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
