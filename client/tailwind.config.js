/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shapirit: ["shapirit"],
        shapirit_bold: ["shapirit_bold"],
        shapirit_medium: ["shapirit_medium"],
      },
    },
  },
  plugins: [],
}

