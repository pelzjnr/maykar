/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#ff4d00',
          50: '#fff7f0',
          100: '#ffe8d6',
          200: '#ffd0ad',
          300: '#ffb074',
          400: '#ff8842',
          500: '#ff4d00',
          600: '#e63c00',
          700: '#bf2e00',
          800: '#992400',
          900: '#7a1d00',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-space)', 'monospace'],
      },
    },
  },
  plugins: [],
}
