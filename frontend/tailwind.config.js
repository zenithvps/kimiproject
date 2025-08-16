/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grok-dark': '#0f0f0f',
        'grok-darker': '#000000',
        'grok-gray': '#1a1a1a',
        'grok-light-gray': '#2a2a2a',
        'grok-text': '#ffffff',
        'grok-text-secondary': '#a0a0a0',
        'grok-accent': '#1da1f2',
      },
      animation: {
        'typing': 'typing 1.4s infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        typing: {
          '0%, 60%, 100%': { opacity: '1' },
          '30%': { opacity: '0.3' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}