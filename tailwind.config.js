const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '99': '87.2%',
      },
      zIndex: {
       '25': 25,
       '50': 50,
       '75': 75,
       '100': 100,
        'auto': 'auto',
      },
      colors: {
        darkViolet:'hsl(257, 27%, 26%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
