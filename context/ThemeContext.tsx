'use client'

import React, { createContext, useContext, useState } from 'react'

export type ThemeType = 'default' | 'fivem' | 'assetto' | 'beamng'

interface ThemeContextType {
  currentTheme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const themeConfig = {
  default: {
    primary: '#22ceba',
    accent: '#22ceba',
    secondary: '#1a1a1a',
  },
  fivem: {
    primary: '#22ceba',
    accent: '#a855f7', // Purple
    secondary: '#1a1a1a',
  },
  assetto: {
    primary: '#22ceba',
    accent: '#ff3d3d', // Red
    secondary: '#1a1a1a',
  },
  beamng: {
    primary: '#22ceba',
    accent: '#00ff88', // Green
    secondary: '#1a1a1a',
  },
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setTheme] = useState<ThemeType>('default')

  const applyTheme = (theme: ThemeType) => {
    const config = themeConfig[theme]
    document.documentElement.style.setProperty('--accent-color', config.accent)
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: applyTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
