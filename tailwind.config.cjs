/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'] 
      },
      color:{
        'client-blue': '#01193d',
      },     
    }, 
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
