// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Creates the `font-heading` and `font-body` utility classes
        heading: ["var(--font-instrument-sans)", "sans-serif"],
        body: ["var(--font-source-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
