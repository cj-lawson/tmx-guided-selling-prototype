/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tmx-green": "#21AA4D",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
