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
        link: "#213F7D",
        pink: "#DF18FF",
        blue: " #5718FF",
        orange: "#F55F44",
        red: "#FF3366",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
