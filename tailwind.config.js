module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { "900_01": "#1b2834", "900_0c": "#1b28340c" },
        gray: { 200: "#e6e7eb", 400: "#c0bfc0", 500: "#949494", 600: "#777c84" },
        white: { A700: "#ffffff", A700_cc: "#ffffffcc" },
        blue_700: "#286fe5",
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
