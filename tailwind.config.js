/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        'text': '#261102',
        'background': '#fef7f3',
        'primary': '#f05813',
        'secondary': '#c6f785',
        'accent': '#56f348',
        'zimbirti': '#fdeee8'
       },       
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

