/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        void: '#060811',
        'void-2': '#0C1120',
        'void-3': '#111827',
        plasma: '#2563EB',
        'plasma-light': '#60A5FA',
        'plasma-dim': '#1E3A8A',
        ion: '#06B6D4',
        'ion-light': '#67E8F9',
        pulse: '#10B981',
        'pulse-light': '#6EE7B7',
        warn: '#F59E0B',
        ghost: 'rgba(255,255,255,0.05)',
        'ghost-2': 'rgba(255,255,255,0.08)',
        'ghost-3': 'rgba(255,255,255,0.12)',
        muted: 'rgba(255,255,255,0.45)',
      },
      backgroundImage: {
        'grid-plasma': `linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)`,
        'radial-void': 'radial-gradient(ellipse at center, #0C1120 0%, #060811 70%)',
        'plasma-glow': 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.25) 0%, transparent 60%)',
        'ion-glow': 'radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.2) 0%, transparent 60%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        flicker: 'flicker 3s step-end infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '33%': { opacity: 0.85 },
          '66%': { opacity: 0.95 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        kenji: {
          primary: '#2563EB',
          secondary: '#06B6D4',
          accent: '#10B981',
          neutral: '#111827',
          'base-100': '#060811',
          'base-200': '#0C1120',
          'base-300': '#111827',
          info: '#67E8F9',
          success: '#6EE7B7',
          warning: '#F59E0B',
          error: '#F87171',
        },
      },
    ],
  },
}
