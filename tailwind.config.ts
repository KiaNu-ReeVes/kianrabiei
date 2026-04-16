import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
