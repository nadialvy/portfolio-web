import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        playfairdisplay: ['var(--font-playfairdisplay)'],
      },
      colors: {
        whiteivory: {
          500: "#FDFDFD"
        },
        blackstone: {
          500: "#242424"
        },
        rosepink: {
          300: "#E9D3E7"
        }
      }
    },
  },
  plugins: [],
};
export default config;
