/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './dist/**/*.{html,js}',
    './*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#0a1128',
        'star-yellow': '#ffd700',
        'cosmic-purple': '#6a0dad'
      },
      fontFamily: {
        'game': ['Orbitron', 'sans-serif'],
        'body': ['Roboto', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        }
      }
    },
  },
  plugins: [],
}

