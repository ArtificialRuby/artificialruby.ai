/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,md}",
    "./_layouts/**/*.{html,md}",
    "./_posts/**/*.{html,md}",
    "./*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        'base-content': '#363F48',
        'highlight': '#D26F68'
      },
      fontFamily: {
        'caudex': ['Caudex', 'serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

