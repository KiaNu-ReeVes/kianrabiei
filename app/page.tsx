'use client'

import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { DynamicIslandHeader } from '@/components/DynamicIslandHeader'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { FiveMLanding } from '@/components/FiveMLanding'
import { AssettoCorsaLanding } from '@/components/AssettoCorsaLanding'
import { BeamNGLanding } from '@/components/BeamNGLanding'
import { ContactSection } from '@/components/ContactSection'

export default function Home() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <main className="bg-[#0a0a0a] text-[#ffffff]">
          <DynamicIslandHeader />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <FiveMLanding />
          <AssettoCorsaLanding />
          <BeamNGLanding />
          <ContactSection />

          {/* Footer */}
          <footer className="bg-[rgba(10,10,10,0.8)] py-12 text-center text-[#999999] border-t border-[rgba(34,206,186,0.15)]">
            <div className="max-w-6xl mx-auto px-4">
              <p className="text-sm leading-relaxed">© 2024 Kian Rabiei. All rights reserved. | Full Stack Developer</p>
            </div>
          </footer>
        </main>
      </ThemeProvider>
    </LanguageProvider>
  )
}
