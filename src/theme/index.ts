import BaseColors from "theme/colors";
import BaseFonts from "theme/fonts";
export const defaultTheme = {
  colors: {
    ...BaseColors,
    input: {
      normal: "#e3e3e3",
    },
  },
  fonts: {
    ...BaseFonts,
  },
  transition: {
    normal: "all .1s ease-in-out",
  },
  fontSizes: {
    ms: 10,
    xs: 12,
    sm: 14,
    base: 16,
    mm: 18,
    md: 19,
    lg: 21,
    xl: 24,
    xl2: 27,
    "2xl": 30,
    "3xl": 36,
    "4xl": 42,
    "5xl": 48,
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    bolder: 800,
  },
};
