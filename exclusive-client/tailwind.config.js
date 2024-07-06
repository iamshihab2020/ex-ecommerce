/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DB4444",
        primaryHover: "#E07575",
        greenBg: "#00FF66",
        textMain: "#FAFAFA",
      },
    },
  },
  plugins: [],
});
