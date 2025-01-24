/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        text: "#261102",
        background: "#fef7f3",
        primary: "#f05813",
        secondary: "#c6f785",
        accent: "#56f348",
        zimbirti: "#fdeee8",

        "dark-text": "#e9e4ef",
        "dark-background": "#0c0811",
        "dark-primary": "#bb9fdb",
        "dark-secondary": "#4e247d",
        "dark-accent": "#9455da",
        "dark-zimbirti": "#14101b",
      },
    },
  },
  darkMode: "selector",
  plugins: [require("@tailwindcss/typography")],
};
