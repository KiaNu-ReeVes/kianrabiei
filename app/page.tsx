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
        <main className="bg-[#000000] text-[#ffffff]">
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
          <footer className="bg-[rgba(26,26,26,0.5)] py-8 text-center text-[#999999] border-t border-[rgba(34,206,186,0.2)]">
            <p>© 2024 Kian Rabiei. All rights reserved.</p>
          </footer>
        </main>
      </ThemeProvider>
    </LanguageProvider>
  )
}
