/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-yonder": "#607196",
        "tickle-me-pink": "#FF7B9C",
        "maximum-yellow": "#FFC759",
      },
      backgroundImage: {
        "form-img": "url('/public/form-background.png')",
      },
    },
  },
  plugins: [],
};
