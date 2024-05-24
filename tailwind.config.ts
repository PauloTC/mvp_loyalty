import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "dl-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "960px", // Cambia el valor aquí
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
        "my-gray": "#F7F7F7",
        "neutrals-dark": "#6c6c6c",
        "brand-primary-medium": "#EC3A0E",
        "brand-highlight-medium": "#0064D1",
        "link-blue": "#0064D1",
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
      padding: {
        "4.5": "1.125rem",
      },
      margin: {
        "7.5": "1.875rem",
        "25": "6.25rem",
        "18": "4.5rem",
      },
      height: {
        26: "6.5rem",
        30: "7.5rem",
        39: "9.75rem",
        76.5: "19.125rem",
      },
      width: {
        66: "16.5rem",
        93: "23.25rem",
        100: "25rem",
        120: "30rem",
        135: "33.75rem",
      },
    },
    fontFamily: {
      alicorpSans: ["AlicorpSans"],
    },
  },
  plugins: [],
};
export default config;
