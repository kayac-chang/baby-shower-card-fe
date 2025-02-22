const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      brown: {
        50: "#FBF2EB",
        100: "#E9DCD2",
        200: "#DEC59F",
        400: "#7f5520",
        500: "#714300",
        600: "#F6F0E5",
        cis: "#714300",
      },
      green: colors.green,
      blue: {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        cis: "#005c82",
      },
      red: {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#7f1d1d",
        cis: "#c63618",
      },
      orange: { cis: "#f37720" },
      black: {
        10: "#000",
        "1/10": "rgba(0,0,0,0.1)",
        "2/10": "rgba(0,0,0,0.2)",
        "3/10": "rgba(0,0,0,0.3)",
        "4/10": "rgba(0,0,0,0.4)",
        "5/10": "rgba(0,0,0,0.5)",
        "6/10": "rgba(0,0,0,0.6)",
        "7/10": "rgba(0,0,0,0.7)",
        "8/10": "rgba(0,0,0,0.8)",
        "9/10": "rgba(0,0,0,0.9)",
      },
    },
    extend: {
      color: {},
      lineHeight: {
        16: "4rem",
      },
      width: { phone: "414px" },
      minWidth: {
        0: "0rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        128: "32rem",
        160: "40rem",
        228: "57rem",
      },
      maxWidth: {
        0: "0rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        128: "32rem",
        160: "40rem",
        228: "57rem",
        "20p": "20%",
        "40p": "40%",
        "60p": "60%",
        "80p": "80%",
      },
      height: {
        128: "32rem",
        160: "40rem",
        228: "57rem",
        "10v": "10vh",
        "20v": "20vh",
        "40v": "40vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        phone: "896px",
      },
      minHeight: { "20v": "20vh", "40v": "40vh", "60v": "60vh", "80v": "80vh" },
      maxHeight: { "20v": "20vh", "40v": "40vh", "60v": "60vh", "80v": "80vh" },
      margin: { "-20": "-5rem" },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [
    // require("@whiterussianstudio/tailwind-easing")
  ],
};
