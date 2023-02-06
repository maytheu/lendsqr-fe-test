/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39CDCC",
        bg: "#E5E5E5",
        container: "#545F7D",
        "input-text": "#545F7D",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
