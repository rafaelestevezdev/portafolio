// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Activado por clase .dark
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-dark": "var(--background-dark, #0a0a0a)", // Color negro personalizado
      },
    },
  },
  plugins: [],
};
