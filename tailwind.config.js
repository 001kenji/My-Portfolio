/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homeCover' : "url('./public/bgimage.jpg')"
      },
      screens: {
        xs: '321px',
      },
      animation: {
        'bounce-slow': 'bounce 12s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode : 'class',
}