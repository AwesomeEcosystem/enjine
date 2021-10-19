// const { Theme } = require('@enjine/themes');

module.exports = {
  jit: true,
  purge: [
    './content/**/*.md',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
   ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {},
  },
  variants: {
    backgroundColor: [
      "dark",
      // "dark-hover",
      // "dark-group-hover",
      // "dark-even",
      // "dark-odd"
    ],
    // borderColor: ["dark", "dark-focus", "dark-focus-within"],
    // textColor: ["dark", "dark-hover", "dark-active"]
  },
  plugins: [],
}
