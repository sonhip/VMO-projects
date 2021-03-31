module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          beauty: '#AC3939',
        },
        black: {
          DEFAULT: 'black',
          base: '#4D4D4D',
          operator: '#666666'
        },
        blue: {
          equal: '#004466'
        }
      },
      outline: {
        grey: '0.5px solid #999',
      }
    },
  },
  variants: {
    extend: {
      outline:  ['hover']
    },
  },
  plugins: [],
}
