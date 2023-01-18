/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#535fc1",
        "dark-primary": "#353e7c",
        "light-primary": "#707cd4",
        "secondary": "#d06a9a"
      }
    },
  },
  plugins: [],
}