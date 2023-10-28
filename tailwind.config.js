/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        pBlack: "#1B1B1B",
        sBlack: "#2C2C2C",
      },
    },
  },
  plugins: [],
};
