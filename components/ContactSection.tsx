'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function ContactSection() {
  const { t, dir } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(34,206,186,0.05)] to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 w-full relative z-10">
        <div className="space-y-12">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-glow text-[#ffffff]">{t('contact.title')}</span>
            </h2>
            <p className="text-lg text-[#999999]">
              {dir === 'rtl'
                ? 'آماده کمک به شما برای پروژه بعدی هستم'
                : "I'm ready to help you with your next project"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
              <div>
                <label className="block text-sm font-medium mb-2 text-[#ffffff]">
                  {dir === 'rtl' ? 'نام' : 'Name'}
                </label>
                <input
                  type="text"
                  placeholder={dir === 'rtl' ? 'نام خود را وارد کنید' : 'Your name'}
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(34,206,186,0.05)] border border-[rgba(34,206,186,0.2)] focus:border-[rgba(34,206,186,0.5)] focus:bg-[rgba(34,206,186,0.1)] focus:outline-none transition-all text-[#ffffff] placeholder-[#666666]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#ffffff]">
                  {dir === 'rtl' ? 'ایمیل' : 'Email'}
                </label>
                <input
                  type="email"
                  placeholder={dir === 'rtl' ? 'ایمیل خود را وارد کنید' : 'your@email.com'}
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(34,206,186,0.05)] border border-[rgba(34,206,186,0.2)] focus:border-[rgba(34,206,186,0.5)] focus:bg-[rgba(34,206,186,0.1)] focus:outline-none transition-all text-[#ffffff] placeholder-[#666666]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#ffffff]">
                  {dir === 'rtl' ? 'پیام' : 'Message'}
                </label>
                <textarea
                  placeholder={dir === 'rtl' ? 'پیام خود را بنویسید' : 'Your message'}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(34,206,186,0.05)] border border-[rgba(34,206,186,0.2)] focus:border-[rgba(34,206,186,0.5)] focus:bg-[rgba(34,206,186,0.1)] focus:outline-none transition-all resize-none text-[#ffffff] placeholder-[#666666]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg font-medium bg-[rgba(34,206,186,0.1)] hover:bg-[rgba(34,206,186,0.2)] border border-[rgba(34,206,186,0.3)] hover:border-[rgba(34,206,186,0.6)] transition-all text-[#22ceba] text-lg shadow-lg hover:shadow-xl"
              >
                {dir === 'rtl' ? 'ارسال پیام' : 'Send Message'}
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#ffffff]">
                  {dir === 'rtl' ? 'روش‌های تماس' : 'Get In Touch'}
                </h3>
                <p className="text-[#999999]">
                  {dir === 'rtl'
                    ? 'می‌توانید از طریق روش‌های زیر با من تماس بگیرید'
                    : 'You can reach me through these channels'}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 animate-fade-in-up">
                {[
                  { icon: Mail, label: 'Email', value: 'info@kianrabiei.ir', href: 'mailto:info@kianrabiei.ir' },
                  { icon: Github, label: 'GitHub', value: '@kianrabiei', href: '#' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'Kian Rabiei', href: '#' },
                  { icon: Twitter, label: 'Twitter', value: '@kianrabiei', href: '#' },
                ].map((contact, i) => {
                  const Icon = contact.icon
                  return (
                    <a
                      key={i}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-xl border border-[rgba(34,206,186,0.2)] bg-[rgba(34,206,186,0.02)] hover:border-[rgba(34,206,186,0.5)] hover:bg-[rgba(34,206,186,0.08)] transition-all group text-[#ffffff]"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <Icon className="text-[#22ceba] group-hover:scale-110 transition-transform flex-shrink-0" size={24} />
                      <div>
                        <p className="font-medium text-sm">{contact.label}</p>
                        <p className="text-xs text-[#999999]">{contact.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
