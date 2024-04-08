const customColors = {
  white: "rgba(var(--color-white), <alpha-value>)",
  black: "rgba(var(--color-black), <alpha-value>)",
  gray: "rgba(var(--color-gray), <alpha-value>)",
  highlight: "rgba(var(--color-highlight), <alpha-value>)",
  "highlight-definition":
    "rgba(var(--color-highlight-definition), <alpha-value>)",
  "light-border": "rgba(var(--color-light-border), <alpha-value>)",
  accent: "rgba(var(--color-accent), <alpha-value>)",
  vitalred: "rgba(var(--color-vitalred), <alpha-value>)",
};

const customFontSize = {
  small: "var(--font-size-small)", // Font-size for text/placeholder/etc : 10px
  base: "var(--font-size-base)", // Font-size for text/placeholder/etc : 12px
  medium: "var(--font-size-medium)", // Font-size for text/placeholder/etc : 14px
  normal: "var(--font-size-normal)", // Font-size for text/placeholder/etc : 16px
  large: "var(--font-size-large)", // Font-size for text/placeholder/etc : 18px
  xl: "var(--font-size-xl)", // Font-size for text/placeholder/etc : 20px
  "2xl": "var(--font-size-2xl)", // Font-size for text/placeholder/etc : 24px
  "3xl": "var(--font-size-3xl)", // Font-size for text/placeholder/etc : 32px
  "4xl": "var(--font-size-4xl)", // Font-size for text/placeholder/etc : 36px
  "5xl": "var(--font-size-5xl)", // Font-size for text/placeholder/etc : 40px
  "6xl": "var(--font-size-6xl)", // Font-size for text/placeholder/etc : 48px
  "7xl": "var(--font-size-7xl)", // Font-size for text/placeholder/etc : 60px
  "8xl": "var(--font-size-8xl)", // Font-size for text/placeholder/etc : 84px
  "9xl": "var(--font-size-9xl)", // Font-size for text/placeholder/etc : 128px
  "10xl": "var(--font-size-10xl)", // Font-size for text/placeholder/etc : 265px
};

const wrapperWidth = {
  "wrapper-xs-sz": "60rem", // extra small size for wrapper (960px)
  "wrapper-sm-sz": "76rem", // small size for wrapper (1216px)
  "wrapper-md-sz": "80rem", // medium size for wrapper (1280px)
  "wrapper-lg-sz": "86.25rem", // large size for wrapper (1380px)
  "wrapper-xl-sz": "90rem", // extra large size for wrapper (1440px)
  "wrapper-page-sz": "120rem", // page size for wrapper and body (1920px)
};

const customScreens = {
  phone: { max: "320px" }, // For phone
  "phone-portrait": { max: "360px" }, // For portrait mode on the phone
  tablet: { max: "640px" }, // for a tablet
  "tablet-portrait": { max: "815px" }, // For portrait mode on a tablet
  "small-laptop": { max: "900px" }, // for a small laptop
  laptop: { max: "1024px" }, // for a laptop
  desktop: { max: "1280px" }, // for the desktop
  "large-desktop": { max: "1400px" }, // for a large desktop
  "extra-large-desktop": { max: "1920px" }, // for a very large desktop
};

const customWidth = () => {
  const localValues: Record<string, string> = {};

  for (let i = 1; i <= 99; i++) {
    const key = `${i}/100`;
    localValues[key] = `${i}%`;
  }

  return localValues;
};

const customBorderWidth = () => {
  const localValues: Record<string, string> = {};

  for (let i = 1; i <= 99; i++) {
    const key = `${i}`;
    localValues[key] = `${i}px`;
  }

  return localValues;
};

const customHeight = () => {
  const localValues: Record<string, string> = {};

  for (let i = 1; i <= 99; i++) {
    const key = `ctm-${i}`;
    localValues[key] = `${i}rem`;
  }

  return localValues;
};

const customSpacing = {
  xxxs: "0.125rem", // Extra Extra Extra Small - 0.125rem (2px)
  xxs: "0.25rem", // Extra Extra Small - 0.25rem (4px)
  xs: "0.5rem", // Extra Small - 0.5rem (8px)
  sm: "0.75rem", // Small - 0.75rem (12px)
  md: "1rem", // Medium - 1rem (16px)
  lg: "1.25rem", // Large - 1.25rem (20px)
  xl: "1.5rem", // Extra Large - 1.5rem (24px)
  "2xl": "1.75rem", // Double Extra Large - 1.75rem (28px)
  "2.5xl": "1.875rem", // 2.5x Double Extra Large - 1.875rem (30px)
  "3xl": "2rem", // Triple Extra Large - 2rem (32px)
  "3.5xl": "2.125rem", // 3.5x Triple Extra Large - 2.125rem (34px)
  "4xl": "2.25rem", // Quadruple Extra Large - 2.25rem (36px)
  "4.5xl": "2.375rem", // 4.5x Quadruple Extra Large - 2.375rem (38px)
  "5xl": "2.5rem", // Quintuple Extra Large - 2.5rem (40px)
  "5.5xl": "2.625rem", // 5.5x Extra Large - 2.625rem (42px)
  "6xl": "2.75rem", // Sixfold Extra Large - 2.75rem (44px)
  "6.5xl": "2.875rem", // 6.5x Extra Large - 2.875rem (46px)
  "7xl": "3rem", // Sevenfold Extra Large - 3rem (48px)
  "7.5xl": "3.125rem", // 7.5x Extra Large - 3.125rem (50px)
  "8xl": "3.25rem", // Eightfold Extra Large - 3.25rem (52px)
  "8.5xl": "3.375rem", // 8.5x Extra Large - 3.375rem (54px)
  "9xl": "3.625rem", // Ninefold Extra Large - 3.625rem (58px)
  "9.5xl": "4.063rem", // Ninefold Extra Large - 4.063rem (65px)
  "10xl": "5.313rem", // Tenfold Extra Large - 5.313rem (85px)
  "11xl": "6rem", // Elevenfold Extra Large - 6rem (96px)
};

const paddingClasses = {
  xxs: "px-xxs",
  xs: "px-xs",
  sm: "px-sm",
  md: "px-md",
  lg: "px-lg",
  xl: "px-xl",
  "2xl": "px-2xl",
  "3xl": "px-3xl",
  "4xl": "px-4xl",
  "5xl": "px-5xl",
  "6xl": "px-6xl",
  "7xl": "px-7xl",
  "8xl": "px-8xl",
  "9xl": "px-9xl",
};

const customBorderRadius = {
  default: "0.25rem", // Total default value for a rounding radius (4px)
  sm: "0.125rem", // For smaller items such as small buttons (2px)
  md: "0.375rem", // For medium items such as text blocks or containers (6px)
  lg: "0.5rem", // For large areas such as cards or containers (8px)
  xl: "1rem", // For very large items that require noticeable scraps (16px)
};

const themeConfiguration = {
  styling: {
    customSpacing,
    wrapperWidth,
    customColors,
    customFontSize,
    customBorderRadius,
  },
  codeVariables: {
    paddingClasses,
    customScreens,
    customWidth: customWidth(),
    customHeight: customHeight(),
    customBorderWidth: customBorderWidth(),
  },
};

export default themeConfiguration;
