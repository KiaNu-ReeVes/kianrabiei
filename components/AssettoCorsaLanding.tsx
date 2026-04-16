'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export function AssettoCorsaLanding() {
  const { dir, t } = useLanguage()
  const { setTheme } = useTheme()
  const sectionRef = useScrollReveal()

  useEffect(() => {
    setTheme('assetto')
  }, [setTheme])

  return (
    <section
      ref={sectionRef}
      id="assetto"
      className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#0a0a0a]"
      style={{
        '--accent-color': '#e63946',
      } as React.CSSProperties}
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/backgrounds/assetto-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.75)] to-[rgba(10,10,10,0.85)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(230,57,70,0.1)] via-transparent to-[rgba(230,57,70,0.1)] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder with gradient */}
          <div 
            className="relative h-96 rounded-2xl overflow-hidden border border-[rgba(230,57,70,0.3)] shadow-2xl order-last md:order-first"
            style={{
              background: 'linear-gradient(135deg, rgba(230,57,70,0.2) 0%, rgba(230,57,70,0.05) 100%)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <img 
              src="/backgrounds/assetto-bg.jpg" 
              alt="Assetto Corsa Racing" 
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.8)] via-transparent to-transparent flex items-end justify-center p-6">
              <div className="text-center">
                <p className="text-[#e63946] font-bold text-xl">Racing Simulation</p>
                <p className="text-[#ff6b6b] text-sm mt-2">Professional Mods & Content</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-[rgba(230,57,70,0.15)] border border-[rgba(230,57,70,0.3)] text-[#e63946] text-xs font-bold uppercase tracking-wider">
                Sim Racing
              </div>
              <h2 className="text-6xl md:text-7xl font-bold text-[#e63946] text-balance">
                Assetto Corsa
              </h2>
              <p className="text-xl text-[#ff6b6b] font-light">
                {dir === 'rtl' ? 'شبیه‌سازی مسابقات حرفه‌ای' : 'Professional Racing Simulation'}
              </p>
            </div>

            <div className="space-y-6 text-lg">
              <p className="text-[#d0d0d0] leading-relaxed">
                {dir === 'rtl'
                  ? 'متخصص در ایجاد محتوای سفارشی و mod های حرفه‌ای برای Assetto Corsa با کیفیت بالا.'
                  : 'Expert in creating professional custom content and high-quality mods for Assetto Corsa.'}
              </p>
              <ul className={`space-y-3 ${dir === 'rtl' ? 'text-right' : ''}`}>
                {[
                  { icon: '🏁', text: dir === 'rtl' ? 'ماشین‌ها و مسیرهای سفارشی' : 'Custom Cars & Track Mods' },
                  { icon: '🎨', text: dir === 'rtl' ? 'بافت‌های پیشرفته و حرفه‌ای' : 'Advanced Professional Texturing' },
                  { icon: '⚙️', text: dir === 'rtl' ? 'تنظیم فیزیک دقیق' : 'Precise Physics Tuning' },
                  { icon: '🏆', text: dir === 'rtl' ? 'شبیه‌سازی واقع‌گرا' : 'Realistic Simulation' },
                ].map((item, i) => (
                  <li key={i} className="text-[#b0b0b0] flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <button className="glass rounded-full px-8 py-4 font-medium hover:bg-[rgba(230,57,70,0.2)] transition-all text-[#e63946] border-[rgba(230,57,70,0.4)] hover:border-[rgba(230,57,70,0.8)] inline-flex items-center gap-2 text-lg">
              {dir === 'rtl' ? 'مشاهده نمونه‌ها' : 'View Gallery'}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Custom Mods', desc: 'Unique and tailored content for your needs', icon: '🚗' },
            { title: 'High Quality', desc: 'Professional high-fidelity 3D models', icon: '✨' },
            { title: 'Performance', desc: 'Optimized for smooth gameplay experience', icon: '⚡' },
          ].map((feature, i) => (
            <div 
              key={i} 
              className="group p-6 rounded-xl border border-[rgba(230,57,70,0.2)] transition-all hover:border-[rgba(230,57,70,0.5)] hover:bg-[rgba(230,57,70,0.05)]"
              style={{
                background: 'rgba(230,57,70,0.02)',
              }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#e63946] mb-2">{feature.title}</h3>
              <p className="text-[#999999] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
