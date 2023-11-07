/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Great: "'Fredericka the Great', serif",
        courgate: "'Courgette', cursive",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
