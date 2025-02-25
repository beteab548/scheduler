/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "custom-px": "600px",
        "img-height":"200px"
      },
    },
  },
  plugins: [],
};
