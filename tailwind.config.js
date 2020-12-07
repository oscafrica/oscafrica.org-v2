// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  purge: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx", "public/**/*.html"],
  theme: {
    fontFamily: {
      primary: ["Work Sans", "sans-serif"],
      secondary: ["Cousine", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#F9AA4F",
        secondary: "#0A2237",
        white: "#FFFFFF",
        black: "#464B54",
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
          100: "#FFFFF9",
          200: "#FAFBF0",
          300: "#F7F8E8",
          400: "#F6F7DF",
          500: "#EAEBC6",
          600: "#DFE0BA",
          700: "#CDCEA7",
          800: "#B6B493"
        },
        yellow: {
          100: "#FAF5E6",
          200: "#F5E2AB",
          300: "#F5DE98",
          400: "#F5D36F",
          500: "#BB8F0E",
          600: "#9E730C",
          700: "#6B4A08",
          800: "#462E05"
        },
        neutral: {
          100: "#F1F5FB",
          200: "#E3E9F2",
          300: "#D6DDE6",
          400: "#C3C9D4",
          500: "#79818F",
          600: "#565E6B",
          700: "#3C444F",
          800: "#1E252E"
        }
      },
      fontSize: {
        base: "1.4rem",
        h1: "6.8rem",
        h2: "4.5rem",
        h3: "4.1rem",
        h4: "3rem",
        h5: "2.7rem",
        h6: "2rem",
        "paragraph-1": "2rem",
        "paragraph-2": "1.8rem",
        body: "1.6rem",
        captions: "1.2rem"
      },
      borderRadius: {
        primary: "10px"
      }
    }
  },
  variants: {},
  plugins: []
};
