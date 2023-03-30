/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375",
        sm: "412px",
        md: "684px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
