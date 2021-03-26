const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '20': '5rem'
      }
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      white: colors.white,
      indigo: colors.indigo,
    }
  },
  variants: {
    extend: {},
  },
}