/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
      'brand_color': '#E52525',
      'secend_color':'#333333'
    },
  },
    container: {
      center: true,
      padding: '50px',
    },
  },
  plugins: [],
  fontFamily: {
    'inter' : ["index", "sans-serif"],
    'pt'    : ["PT Serif", "serif"]
  }
}