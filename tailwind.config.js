/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      gridTemplateColumns: {
        "70-30": "70% 28%",
      },
      scale: {
        101: "1.01",
      },
    },
  },
  plugins: [],
};
