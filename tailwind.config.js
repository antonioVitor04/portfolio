/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'preto-espaco': '#0b0f1a',
        'azul-escuro': '#071731',
        'azul-cosmo': '#60a5fa'
      },
      backgroundImage: {
        estrelas: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)"
      },
      keyframes: {
        'estrelas-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '200px 200px' }
        },
        'bounce-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'estrelas-move': 'estrelas-move 20s linear infinite',
        'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards'
      }
    }
  },
  plugins: []
}
