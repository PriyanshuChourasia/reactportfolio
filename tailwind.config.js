/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#021859',
        'secondary':'#034AA6',
        'tertiary':'#034C8C',
        'tealGreen':'#025959',
        'coffeeBrown':'#593A2E'
      },
      boxShadow:{
        'centerShadow':'rgb(137 137 137 / 70%) 0px 0px 13px 5px'
      }
    },
  },
  plugins: [],
}