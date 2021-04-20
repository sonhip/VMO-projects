module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          beauty: "#AC3939",
        },
        black: {
          DEFAULT: "black",
          base: "#4D4D4D",
          operator: "#666666",
        },
        blue: {
          equal: "#004466",
        },
        purple: {
          navbar: "#140039",
          body: "#3F264D",
          sub: "#201459",
          todo: "#372669",
        },
        orange: {
          primary: "#FF7200",
        },
      },
      outline: {
        grey: "0.5px solid #999",
      },
    },
  },
  variants: {
    extend: {
      outline: ["hover", "active"],
      backgroundColor: ["active"],
      scale: ["active", "group-hover", "hover"],
    },
  },
  plugins: [],
};
