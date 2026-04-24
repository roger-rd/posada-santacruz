/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f0', 100: '#dceddc', 200: '#bbdcbb', 300: '#8ec38e',
          400: '#5da45d', 500: '#3a8a3a', 600: '#2d6e2d', 700: '#255825',
          800: '#1f461f', 900: '#1a3a1a', 950: '#0d1f0d',
        },
        sand: {
          50: '#fdf8f0', 100: '#faeeda', 200: '#f4dab4', 300: '#ecc083',
          400: '#e4a050', 500: '#dd8530', 600: '#cf6d22', 700: '#ac551e',
        },
        cream: '#faf6ef',
        espresso: '#2c1810',
        gold: '#c9a84c',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        kenBurns: { '0%': { transform: 'scale(1) translateX(0)' }, '100%': { transform: 'scale(1.1) translateX(-2%)' } },
        slideIn: { '0%': { opacity: '0', transform: 'translateX(20px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
      },
    },
  },
  plugins: [],
}
