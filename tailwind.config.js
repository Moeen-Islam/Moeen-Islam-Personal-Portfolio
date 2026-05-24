/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
      boxShadow: { glow: "0 0 40px rgba(56,189,248,.25)" },
      animation: { blob: "blob 8s infinite" },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-50px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(.9)" },
          "100%": { transform: "translate(0,0) scale(1)" }
        }
      }
    }
  },
  plugins: []
};
