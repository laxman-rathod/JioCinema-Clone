/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "serif"],
    },
    colors: {
      // app dark bg
      darkBg: "#0d0e10",

      // page not found text colors
      lightGray: "rgb(158 159 159)",

      // rgba
      goldenC: "rgb(192 162 98)",

      // footer bg
      footerBG1: "#17181a",
      footerBg2: "#202123",

      // header
      searchText: "#918781",
      lightish: "#2e2f31", // header border

      transparent: "transparent",

      // colors
      current: "currentColor",
      pink: "#d9008d",
      white: "#ffffff",
      white2: "#fff",
      black: "#000000",
      gray100: "#808080",
      gray: "#b5b6b6", // text
      gray2: "#252728", // bg

      gray3: "rgba(57, 59, 60, 1.03)",
      gainsboro: "#d1cccc",
      suggestionsBg: "rgb(57 57 58)",
      suggClick: "rgb(255 255 255 / 50%)",
      heroChhanelC: "#17181a",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bubbleGum: "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {},
  },
  plugins: [],
};
