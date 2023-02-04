/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#E5E5E5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
