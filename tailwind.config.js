// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    fontFamily: {
      display: ["source sans", "avenir", "gotham", "ubuntu"],
      body: ["source sans", "avenir", "gotham", "ubuntu"],
      avenir: ["avenir"],
      ubuntu: ["ubuntu"]
    },
    prefix: "oc-",
    extend: {
      spacing: {
        "oc-10": "10px"
      },
      height: {
        "half-screen": "50vh"
      },
      colors: {
        white: "#FFFFFF",
        "dark-blue": {
          primary: "#081E31",
          100: "#96ADDD",
          200: "#5A75AB",
          300: "#445984",
          400: "#283756",
          500: "#283756",
          600: "#283757"
        },
        orange: {
          primary: "#F79313",
          100: "#FFE0BC",
          200: "#F5C388",
          300: "#F9AA4F",
          400: "#F7931E"
        },
        gray: {
          primary: "464B54",
          100: "#F0F0F0",
          200: "#D6D6D6"
        },
        "light-green": {
          primary: "#F1F2D3",
          100: "#FCFDED",
          200: "#D7D9B4"
        },
        "dark-green": "#B2B396",
        "trans-gray": "rgba(10, 34, 55, 0.5)",
        "circle-gray": "#E7ECF8",
        brown: "#440101",
        "white-smoke": "#F4F4F4"
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
      },
      lineHeight: {
        text: "22px"
      },
      container: {
        padding: "5rem",
        center: true
      }
    }
  },
  variants: {},
  plugins: []
};
