import type { Config } from "tailwindcss";
import themeConfiguration from "./src/lib/theme-config";

const {
  styling: {
    customColors,
    wrapperWidth,
    customWidth,
    customHeight,
    customBorderWidth,
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
    darkMode: "class",
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
      borderWidth: {
        DEFAULT: "1px",
        ...customBorderWidth,
      },
      spacing: {
        ...customSpacing,
      },
      maxWidth: {
        ...wrapperWidth,
      },
      height: {
        ...customHeight,
      },
      width: {
        ...customWidth,
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
    function ({ addUtilities }: any) {
      const writtingMethod = {
        ".writing-h-tb": {
          "writing-mode": "horizontal-tb",
          "-webkit-writing-mode": "horizontal-tb",
          "-ms-writing-mode": "horizontal-tb",
        },
        ".writing-v-rl": {
          "writing-mode": "vertical-rl",
          "-webkit-writing-mode": "vertical-rl",
          "-ms-writing-mode": "vertical-rl",
        },
        ".writing-v-lr": {
          "writing-mode": "vertical-lr",
          "-webkit-writing-mode": "vertical-lr",
          "-ms-writing-mode": "vertical-lr",
        },
        ".writing-sd-rl": {
          "writing-mode": "sideways-rl",
          "-webkit-writing-mode": "sideways-rl",
          "-ms-writing-mode": "sideways-rl",
        },
        ".writing-sd-lr": {
          "writing-mode": "sideways-lr",
          "-webkit-writing-mode": "sideways-lr",
          "-ms-writing-mode": "sideways-lr",
        },
        ".writing-inherit": {
          "writing-mode": "inherit",
          "-webkit-writing-mode": "inherit",
          "-ms-writing-mode": "inherit",
        },
        ".writing-initial": {
          "writing-mode": "initial",
          "-webkit-writing-mode": "initial",
          "-ms-writing-mode": "initial",
        },
        ".writing-revert": {
          "writing-mode": "revert",
          "-webkit-writing-mode": "revert",
          "-ms-writing-mode": "revert",
        },
        ".writing-revert-layer": {
          "writing-mode": "revert-layer",
          "-webkit-writing-mode": "revert-layer",
          "-ms-writing-mode": "revert-layer",
        },
        ".writing-unset": {
          "writing-mode": "unset",
          "-webkit-writing-mode": "unset",
          "-ms-writing-mode": "unset",
        },
      };

      addUtilities(writtingMethod, ["responsive", "hover"]);
    },
  ],
};
export default config;
