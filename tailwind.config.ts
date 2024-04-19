import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "dl-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "7rem",
      },
    },
    extend: {
      colors: {
        "my-white": "#FCFCFC",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "1.5xl": ["1.75rem", { lineHeight: "2.5rem" }],
        "2.5xl": ["2rem", { lineHeight: "2.5rem" }],
        "3.5xl": ["2rem", { lineHeight: "2.5rem" }],
        "4.5xl": ["2.5rem", { lineHeight: "3rem" }],
      },
    },
  },
  plugins: [],
};
export default config;
