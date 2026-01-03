/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'urban-black': '#0a0a0a',
        'urban-gray': '#1a1a1a',
        'urban-light': '#f5f5f5',
      },
      fontFamily: {
        'urban': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}