/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        background: '#2A2A2A',
        surface: '#333333',
        text: '#E5E7EB',
        accent: '#FF6B35',
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(255,107,53,0.35), 0 0 30px rgba(255,107,53,0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

