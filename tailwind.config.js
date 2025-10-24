/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding': {
          'cream': '#fbeab8',
          'sage': '#63b172', 
          'lime': '#b6cc4d',
          'forest': '#06483f',
          'rose': '#b74c77',
          'gold': '#ae832c'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'script': ['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [],
}
