/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Gold Palette
        gold: {
          50: '#fffbea',
          100: '#fff3c7',
          200: '#ffe491',
          300: '#ffd04d',
          400: '#ffb91a', // Primary Accent Gold
          500: '#f59e0b', // Rich Gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
    },
  },
  plugins: [],
}