// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    fontFamily: {
      primary: ["Work Sans", "sans-serif"],
      secondary: ["Cousine", "sans-serif"]
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        orange: {
          100: "#FCF6ED",
          200: "#FBEDDA",
          300: "#F6D9B6",
          400: "#F4C894",
          500: "#F9AA4F",
          600: "#D97D13",
          700: "#AF630C",
          800: "#804809"
        },
        blue: {
          100: "#E1EBF4",
          200: "#A9C3D9",
          300: "#6388A8",
          400: "#4C6F8E",
          500: "#43637F",
          600: "#33516B",
          700: "#25435D",
          800: "#16334C"
        },
        jonquil: {
          100: "#96ADDD",
          200: "#5A75AB",
          300: "#445984",
          400: "#283756",
          500: "#283756",
          600: "#283757"
        },
        yellow: {
          100: "#96ADDD",
          200: "#5A75AB",
          300: "#445984",
          400: "#283756",
          500: "#283756",
          600: "#283757"
        }
      },
      fontSize: {
        base: "1.4rem",
        "2xl": "1.6rem",
        h1: "6.8rem",
        h2: "4.5rem",
        h3: "4.1rem",
        h4: "3rem",
        h5: "2.7rem",
        h6: "2rem",
        "paragraph-1": "2rem",
        "paragraph-2": "1.8rem",
        body: "1.6rem",
        "small-text": "1.4rem",
        captions: "1.2rem"
      }
    }
  },
  variants: {},
  plugins: []
};
