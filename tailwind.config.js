/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
