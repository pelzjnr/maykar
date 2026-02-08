/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#ff0000',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-space)', 'monospace'],
      },
    },
  },
  plugins: [],
}
