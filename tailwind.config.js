module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          200: "#B2F5EA",
          500: "#38B2AC",
          600: "#319795",
          700: "#2C7A7B",
          800: "#285E61",
          900: "#234E52",
        },
        orange: {
          300: "#FBD38D",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
