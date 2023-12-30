/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        primary: {
          brightBlue: 'hsl(220, 98%, 61%)',
          checkBlue: "hsl(192, 100%, 67%) ",
          checkPurple: "hsl(280, 87%, 65%)"
        },
        dark: {
          veryDarkBlue: 'hsl(235, 21%, 11%)',
          veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
          lightGrayishBlue: 'hsl(234, 39%, 85%)',
          lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
          darkGrayishBlue: 'hsl(234, 11%, 52%)',
          veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
          veryDarkGrayishBlueHover: 'hsl(237, 14%, 26%)',
        },
        light: {
          veryLightGray: 'hsl(0, 0%, 98%)',
          veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
          lightGrayishBlueHover: 'hsl(236, 9%, 61%)',
          darkGrayishBlue: 'hsl(235, 19%, 35%)',
          veryDarkGrayishBlue: 'hsl(234, 39%, 85%)',
          veryDarkGrayishBlueHover: 'hsl(236, 33%, 92%)',
        }
      }
    },
  },
  plugins: [],
}