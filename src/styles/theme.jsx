export const theme = Object.freeze({
  colors: {
    accent: "#FAD34F",
    white: "#ffffff",
    BG: "#E5E5E5",
    footerBg: "#D8D8D8",
    dark: "#3E3E3E",
    inputDark: "#2D2D2D",
    grey: "#D8D8D8",
    border: "#DCDCDC",
    links: "#696969",
    blue: "#1e1ee6",
  },
  fontSizes: {
    medium: "18px",
    large: "40px",
  },
  spacing: (value) => `${4 * value}px`,
  shadows: {
    small: "0 5px 7px -1px rgba(51, 51, 51, 0.23)",
    regular: "0px 4px 10px 4px #9e9e9e",
    medium: "0 9px 47px 11px rgba(51, 51, 51, 0.18);",
  },
  animation: {
    cubicBezier: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
  },
});
