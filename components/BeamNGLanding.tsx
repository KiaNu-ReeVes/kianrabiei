'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export function BeamNGLanding() {
  const { dir, t } = useLanguage()
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('beamng')
  }, [setTheme])

  return (
    <section
      id="beamng"
      className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#0a0a0a]"
      style={{
        '--accent-color': '#00d26a',
      } as React.CSSProperties}
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/backgrounds/beamng-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.7)] to-[rgba(10,10,10,0.85)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,210,106,0.1)] via-transparent to-[rgba(0,210,106,0.1)] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-[rgba(0,210,106,0.15)] border border-[rgba(0,210,106,0.3)] text-[#00d26a] text-xs font-bold uppercase tracking-wider">
                Physics Engineering
              </div>
              <h2 className="text-6xl md:text-7xl font-bold text-[#00d26a] text-balance">
                BeamNG
              </h2>
              <p className="text-xl text-[#00e680] font-light">
                {dir === 'rtl' ? 'شبیه‌سازی فیزیکی و مهندسی خودرو' : 'Advanced Physics Engineering & Simulation'}
              </p>
            </div>

            <div className="space-y-6 text-lg">
              <p className="text-[#d0d0d0] leading-relaxed">
                {dir === 'rtl'
                  ? 'متخصص در توسعه ماژول‌های سفارشی و شبیه‌سازی‌های فیزیکی پیشرفته برای BeamNG.'
                  : 'Specialized in developing advanced custom modules and physics simulations for BeamNG.'}
              </p>
              <ul className={`space-y-3 ${dir === 'rtl' ? 'text-right' : ''}`}>
                {[
                  { icon: '🚗', text: dir === 'rtl' ? 'توسعه ماشین‌های سفارشی' : 'Custom Vehicle Modding' },
                  { icon: '⚡', text: dir === 'rtl' ? 'مهندسی فیزیک پیشرفته' : 'Advanced Physics Engineering' },
                  { icon: '🔬', text: dir === 'rtl' ? 'شبیه‌سازی واقع‌گرا' : 'Realistic Simulation' },
                  { icon: '🎯', text: dir === 'rtl' ? 'نقشه‌های سفارشی' : 'Custom Maps & Scenarios' },
                ].map((item, i) => (
                  <li key={i} className="text-[#b0b0b0] flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <button className="glass rounded-full px-8 py-4 font-medium hover:bg-[rgba(0,210,106,0.2)] transition-all text-[#00d26a] border-[rgba(0,210,106,0.4)] hover:border-[rgba(0,210,106,0.8)] inline-flex items-center gap-2 text-lg">
              {dir === 'rtl' ? 'تماس بگیرید' : 'Get In Touch'}
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Image placeholder with gradient */}
          <div 
            className="relative h-96 rounded-2xl overflow-hidden border border-[rgba(0,210,106,0.3)] shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0,210,106,0.2) 0%, rgba(0,210,106,0.05) 100%)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <img 
              src="/backgrounds/beamng-bg.jpg" 
              alt="BeamNG Physics" 
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.8)] via-transparent to-transparent flex items-end justify-center p-6">
              <div className="text-center">
                <p className="text-[#00d26a] font-bold text-xl">Physics Simulation</p>
                <p className="text-[#00e680] text-sm mt-2">Realistic & Advanced</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Custom Vehicles', desc: 'Unique designs with realistic physics', icon: '🚙' },
            { title: 'Physics First', desc: 'Realistic vehicle behavior and dynamics', icon: '⚙️' },
            { title: 'Innovation', desc: 'Cutting-edge simulation technology', icon: '🔬' },
          ].map((feature, i) => (
            <div 
              key={i} 
              className="group p-6 rounded-xl border border-[rgba(0,210,106,0.2)] transition-all hover:border-[rgba(0,210,106,0.5)] hover:bg-[rgba(0,210,106,0.05)]"
              style={{
                background: 'rgba(0,210,106,0.02)',
              }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#00d26a] mb-2">{feature.title}</h3>
              <p className="text-[#999999] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
