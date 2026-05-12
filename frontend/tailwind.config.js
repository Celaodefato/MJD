/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep':    '#1a1a1a',   // fundo escuro principal
        'surface': '#262626',   // cards, painéis
        'panel':   '#333333',   // detalhes, hovers
        'primary':   '#d68a48', // laranja/cobre
        'primary-dark': '#b06d34',
        'secondary': '#d68a48',
        'secondary-light': '#e8dcca',
        // Acentos
        'accent-amber':  '#d68a48',
        'accent-red':    '#dc2626',
        'accent-purple': '#7c3aed',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-amber': '0 0 20px rgba(214,138,72,0.4)',
        'glow-blue':  '0 0 20px rgba(214,138,72,0.4)',
        'card':       '0 8px 32px rgba(0,0,0,0.25)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'gradient-stage': 'linear-gradient(135deg, #1a1a1a 0%, #333333 50%, #1a1a1a 100%)',
        'gradient-hero':  'linear-gradient(180deg, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.85) 60%, #1a1a1a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
