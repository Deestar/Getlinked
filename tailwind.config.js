/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        se: "330px",
        se_lg: "390px",
        desk: "530px",
        row: "850px",
      },
      height: {
        fill: "-webkit-fill-available",
      },
      colors: {
        main: "#150E28",
        getlink: "#D434FE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mont: ["var(--font-mont)"],
        montsm: ["var(--font-montsm)"],
        clash: ["var(--font-clash)"],
        inter: ["var(--font-inter)"],
        unica: ["var(--font-unica)"],
      },
    },
  },
  plugins: [],
};
