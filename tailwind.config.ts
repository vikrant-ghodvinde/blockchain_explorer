import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "primary-gradient": "linear-gradient(45deg, #02d98e, #11ffbd)",
        "primary-gradient-reversed": "linear-gradient(45deg, #11ffbd, #02d98e)",
      },
      colors: {
        primary: "#02d98e",
        secondary: "#11ffbd",
        dark: "#1c1c1c",
        light: "#f8f9fa",
      },
      boxShadow: {
        "nav-s": "5px 0 10px rgba(155, 155, 155, 0.2)",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        awesome: ["'Font Awesome 6 Free'"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwind-scrollbar"),
  ],
};
export default config;
