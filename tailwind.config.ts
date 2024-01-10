import type { Config } from "tailwindcss";
import themeConfiguration from "./src/lib/theme-config";

const {
  styling: {
    customColors,
    wrapperWidth,
    customFontSize,
    customSpacing,
    customBorderRadius,
  },
} = themeConfiguration;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...customColors,
      },
      fontSize: {
        ...customFontSize,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Inter", "serif"],
      },
      spacing: {
        ...customSpacing,
      },
      maxWidth: {
        ...wrapperWidth,
      },
      borderRadius: {
        ...customBorderRadius,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addVariant }: any) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
export default config;
