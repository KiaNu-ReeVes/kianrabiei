'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export function AboutSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-[#000000]">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${dir === 'rtl' ? 'grid-flow-dense' : ''}`}>
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="neon-glow text-[#ffffff]">{t('about.title')}</span>
            </h2>

            <p className="text-lg text-[#999999] leading-relaxed">
              {t('about.description')}
            </p>

            <div className="space-y-4 pt-4">
              <p className="text-[#cccccc]">
                {dir === 'rtl'
                  ? 'متخصص در ایجاد سیستم‌های پیچیده و حل مسائل چالش‌برانگیز با استفاده از فناوری‌های جدید.'
                  : 'I specialize in building complex systems and solving challenging problems using modern technologies.'}
              </p>
              <p className="text-[#cccccc]">
                {dir === 'rtl'
                  ? 'علاوه بر توسعه وب، خبره در اتومیشن سیستم‌ها با Arduino، توسعه بازی‌های کاسالون، و محتوای سفارشی هستم.'
                  : 'Beyond web development, I\'m experienced in systems automation with Arduino, game development, and custom content creation.'}
              </p>
            </div>
          </div>

          {/* Stats or Visual */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '5+', label: dir === 'rtl' ? 'سال تجربه' : 'Years Experience' },
              { number: '50+', label: dir === 'rtl' ? 'پروژه' : 'Projects' },
              { number: '10+', label: dir === 'rtl' ? 'مهارت' : 'Skills' },
              { number: '100%', label: dir === 'rtl' ? 'تعهد' : 'Dedication' },
            ].map((stat, i) => (
              <div key={i} className="glass-card text-center">
                <div className="text-3xl font-bold text-[#22ceba] mb-2">{stat.number}</div>
                <div className="text-sm text-[#999999]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
