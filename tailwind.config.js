/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
      },
      screens: {
        "3xl": "1920px",
      },
      colors: {
        primary_lighterShade: {
          50: "#FCF3E3",
          100: "#F2E9DA",
          150: "#E5DDCE",
          200: "#D9D1C4",
          300: "#CCC5B8",
          400: "#BFB9AD",
          500: "#B2ACA1",
        },
        primary_darkerShade: {
          600: "#595348",
          700: "#4A453C",
          750: "#3D3932",
          800: "#2F2C26",
          850: "#1F1D19",
          900: "#12110F",
        },
        // Note that pure black and white shades from Tailwind are available and will be used. Here is a note here for reference.
      },
    },
  },
  plugins: [],
};
