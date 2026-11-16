/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#050e20',
          800: '#0a1a33',
          700: '#10284a',
          600: '#183a66',
        },
        gold: {
          100: '#fbf1d6',
          200: '#f3e0b0',
          300: '#e9d19a',
          400: '#d9b872',
          500: '#c9a355',
          600: '#a8843e',
        },
        ice: {
          100: '#e6f7ff',
          300: '#a8e2fa',
          400: '#7fd3f2',
          500: '#4fbde6',
          600: '#2b96c4',
        },
        'warm-white': '#fff8ec',
      },
      fontFamily: {
        calligraphy: ['"Ma Shan Zheng"', '"Noto Serif SC"', 'serif'],
        serif: ['"Noto Serif SC"', 'serif'],
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 1px rgba(233,209,154,0.35), 0 0 24px rgba(233,209,154,0.18)' },
          '50%': { boxShadow: '0 0 0 1px rgba(233,209,154,0.65), 0 0 40px rgba(233,209,154,0.38)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
