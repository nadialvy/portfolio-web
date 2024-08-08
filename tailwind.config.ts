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
        skills: 'url("/images/skills/bg.png")',
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
          200: "#D9D9D9",
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
