import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./app/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": {max: "1745px"},
        xl: {max: "1745px"},
        lg: {max: "979px"},
        md: {max: "767px"},
        sm: {max: "610px"},
        xs: {max: "550px"},
      },
      colors: {
        background: "#1E1E1E",
        text: "#FFFFFF",
        buttonColor: "#053865",
      },
      height: {},
      borderRadius: {
        button: "1rem",
      },
      spacing: {},
      padding: {
        buttonX: "3.1rem",
        buttonY: "1rem",
        headerY: "3rem",
        footerY: "5.6rem",
      },
      gap: {
        main: "5.1rem",
      },
      fontSize: {
        main: "3.2rem",
        fotter: "2rem",
        button: "1.6rem",
      },
    },
  },
  plugins: [],
};
export default config;
