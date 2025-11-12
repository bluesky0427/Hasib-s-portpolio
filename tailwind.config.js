/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d9f2ff",
          200: "#b8e7ff",
          300: "#86d7ff",
          400: "#4fc0ff",
          500: "#1aa6ff",
          600: "#0689e6",
          700: "#066fb8",
          800: "#0a5c94",
          900: "#0e4c79",
          950: "#072e4a"
        }
      }
    }
  },
  darkMode: "class",
  plugins: []
};




