/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060b1a',
          900: '#0b1229',
          800: '#0f1b3d'
        },
        accent: {
          400: '#5bb7ff',
          300: '#84ccff'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(91,183,255,0.22), 0 10px 24px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
}
