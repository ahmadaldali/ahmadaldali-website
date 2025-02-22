import { boxShadows } from "./src/libs/ui";
import breakpoints from "./src/libs/breakpoint";
import { colors } from "./src/libs/color";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "3xs": `${breakpoints["3xs"]}px`,
      "2xs": `${breakpoints["2xs"]}px`,
      "xs": `${breakpoints["xs"]}px`,
      "sm": `${breakpoints["sm"]}px`,
      "md": `${breakpoints["md"]}px`,
      "lg": `${breakpoints["lg"]}px`,
      "xl": `${breakpoints["xl"]}px`,
      "2xl": `${breakpoints["2xl"]}px`,
      "3xl": `${breakpoints["3xl"]}px`,
      "4xl": `${breakpoints["4xl"]}px`,
      "5xl": `${breakpoints["5xl"]}px`,
    },
    boxShadow: {
      ...boxShadows
  },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...colors,
      },
    },
  },
  safelist: [
    {
        pattern: /(bg|text|border)-(alpha|gray|parch|red|orange|yellow|green|teal|azure|blue|violet|purple|magenta)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16)/
    }
  ],
  plugins: [],
} satisfies Config;
