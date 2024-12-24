/** @type {import('tailwindcss').Config} */

const pxToRem = require("tailwindcss-preset-px-to-rem");

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["Pretendard-Regular", "sans-serif"],
        bold: ["Pretendard-Bold", "sans-serif"],
        semibold: ["Pretendard-SemiBold", "sans-serif"],
        extrabold: ["Pretendard-Extrabold", "sans-serif"],
      },
      colors: {
        tunemate: {
          DEFAULT: "var(--tunemate, #563AE2)",
          dark: "#323246",
        },
        black: "#0E0F13",
        red: "#FF3D46",
        customGray: {
          900: "#0E0F13",
          850: "#1C1C1F",
          800: "#262629",
          700: "#353538",
          650: "#5D5D5E",
          600: "#5E5E60",
          500: "#A9A9A9",
          450: "#ADADAF",
          430: "#C6C6C6",
          400: "#D9D9DA",
          300: "#E4E4E4",
        },
      },
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
    animation: { "fade-in": "fadeIn 3s ease-in-out" },
  },
  presets: [pxToRem],
  plugins: [],
};
