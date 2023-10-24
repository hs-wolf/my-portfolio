/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D0D0D',
          light: '#3A3A3A',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#EBEDF2',
          light: '#FFFFFF',
          dark: '#BABBBF',
        },
        accent: {
          DEFAULT: '#22C55E',
          light: '#36ED7C',
          dark: '#0E9D4A',
        },
        danger: {
          DEFAULT: '#EF233C',
          light: '#FE6D73',
          dark: '#D90429',
        },
        external: {
          DEFAULT: '#60A5FA',
          light: '#74B9E8',
          dark: '#4C87DC',
        },
      },
    },
  },
  plugins: [],
}

