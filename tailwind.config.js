/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    container: {
      center: true,
      padding: "40px",
    },
    extend: {
      inset: {
        "calc-100%-5": "calc(100% / 5)",
      },
      screens: {
        sm: "410px",
      },
    },
  },
  plugins: [],
};
