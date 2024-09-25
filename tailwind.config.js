/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      fontSize: {
        sm: "12.8px",
        md: "16px",
        lg: "20px",
        xl: "25px",
        doubleXl: "39.6px",
        threeXl:"48.83px",
      },
      fontWeight: {
        sm: "300",
        md: "400",
        lg: "500",
        xl: "600",
        doubleXl:"700",
      },
      colors: {
        orange: " #FF5300",
        lightBlack: "#373737",
        lightOrange: "#FFF7F4",
        grey:"#7B7B7B",
      }
    },
  },
  plugins: [],
}

