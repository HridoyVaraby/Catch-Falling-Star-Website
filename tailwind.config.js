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
        'cosmic-void': '#0a0e1b',
        'deep-space': '#151933',
        'stellar-blue': '#1e3a8a',
        'nebula-purple': '#6366f1',
        'aurora-pink': '#ec4899',
        'star-yellow': '#fbbf24',
        'cosmic-cyan': '#06b6d4',
        'plasma-orange': '#f97316',
        'galaxy-pink': '#f472b6',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'cursive'],
        'body': ['Space Mono', 'monospace'],
        'accent': ['Orbitron', 'sans-serif']
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
        'gradient-stellar': 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #06b6d4 0%, #f472b6 100%)',
        'gradient-void': 'linear-gradient(180deg, #0a0e1b 0%, #151933 100%)',
      },
      boxShadow: {
        'cosmic': '0 0 50px rgba(99, 102, 241, 0.3)',
        'stellar': '0 0 50px rgba(251, 191, 36, 0.3)',
        'nebula': '0 0 80px rgba(236, 72, 153, 0.4)',
        'glow': '0 0 20px rgba(251, 191, 36, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        twinkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(0.8)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)' },
          '50%': { boxShadow: '0 0 40px rgba(251, 191, 36, 0.9)' }
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateX(30px) translateY(-30px) rotate(120deg)' },
          '66%': { transform: 'translateX(-20px) translateY(20px) rotate(240deg)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      }
    },
  },
  plugins: [],
}

