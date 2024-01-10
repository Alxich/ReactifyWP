const customColors = {
  white: "#FFFFFF",
  black: "#1A1A1A",
  gray: "#667085",
  highlight: "#7e5bef",
  accent: "#7F56D9",
  vitalred: "#ff7849",
};

const customFontSize = {
  small: "0.625rem", // Font-size for text/placeholder/etc : 10px
  base: "0.75rem", // Font-size for text/placeholder/etc : 12px
  medium: "0.875rem", // Font-size for text/placeholder/etc : 14px
  normal: "1rem", // Font-size for text/placeholder/etc : 16px
  large: "1.125rem", // Font-size for text/placeholder/etc : 18px
  xl: "1.25rem", // Font-size for text/placeholder/etc : 20px
  "2xl": "1.5rem", // Font-size for text/placeholder/etc : 24px
  "3xl": "2rem", // Font-size for text/placeholder/etc : 32px
  "4xl": "2.25rem", // Font-size for text/placeholder/etc : 36px
  "5xl": "2.5rem", // Font-size for text/placeholder/etc : 40px
  "6xl": "3rem", // Font-size for text/placeholder/etc : 48px
  "7xl": "3.75rem", // Font-size for text/placeholder/etc : 60px
  "8xl": "5.25rem", // Font-size for text/placeholder/etc : 84px
  "9xl": "8rem", // Font-size for text/placeholder/etc : 128px
  "10xl": "16.563rem", // Font-size for text/placeholder/etc : 265px
};

const wrapperWidth = {
  "wrapper-sm-sz": "60rem", // small size for wrapper (960px)
  "wrapper-md-sz": "76rem", // medium size for wrapper (1216px)
  "wrapper-lg-sz": "86.25rem", // large size for wrapper (1380px)
  "wrapper-xl-sz": "90rem", // extra large size for wrapper (1440px)
  "wrapper-page-sz": "120rem", // page size for wrapper and body (1920px
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
  },
};

export default themeConfiguration;
