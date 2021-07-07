module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {

      'brand': {
        '50': '#fbf4f7',
        '100': '#f9f1f4',
        '200': '#f2dee6',
        '300': '#e4becd',
        '400': '#d79db4',
        '500': '#c57293',
        '600': '#b54a75',
        '700': '#8d3a5b',
        '800': '#742f4b',
        '900': '#692b44',
      },
      'brand-accent': {
        '50': '#f5f8f2',
        '100': '#f0f4eb',
        '200': '#dbe6d1',
        '300': '#bcd1a9',
        '400': '#98b87a',
        '500': '#749852',
        '600': '#5d7b42',
        '700': '#475d32',
        '800': '#3d502b',
        '900': '#384927',
      },
      'primary': {
        '50': '#fff5f5',
        '100': '#ffebeb',
        '200': '#ffdbdb',
        '300': '#ffb8b8',
        '400': '#ff8a8a',
        '500': '#ff4747',
        '600': '#e60000',
        '700': '#b30000',
        '800': '#8f0000',
        '900': '#850000',
      },
      'secondary': {
        '50': '#f2fae5',
        '100': '#eaf7d4',
        '200': '#d0eea0',
        '300': '#9fdd3c',
        '400': '#83bf22',
        '500': '#6b9c1c',
        '600': '#567e16',
        '700': '#446412',
        '800': '#38520f',
        '900': '#324a0d',
      },
      'info': {
        '50': '#fff5f5',
        '100': '#ffebeb',
        '200': '#ffdbdb',
        '300': '#ffb8b8',
        '400': '#ff8a8a',
        '500': '#ff4747',
        '600': '#e60000',
        '700': '#b30000',
        '800': '#8f0000',
        '900': '#850000',
      },
      'warning': {
        '50': '#fafac7',
        '100': '#f6f69d',
        '200': '#eaea1a',
        '300': '#d2d214',
        '400': '#b1b110',
        '500': '#91910d',
        '600': '#75750b',
        '700': '#595908',
        '800': '#4b4b07',
        '900': '#414106',
      },
      'error': {
        '50': '#f5f8fa',
        '100': '#eef3f6',
        '200': '#dbe5eb',
        '300': '#b9cdda',
        '400': '#95b3c6',
        '500': '#6792ad',
        '600': '#4b738b',
        '700': '#3d5d71',
        '800': '#324c5d',
        '900': '#2e4756',
      },
      'success': {
        '50': '#f8f6f8',
        '100': '#f4f1f3',
        '200': '#e9e2e8',
        '300': '#d3c5d0',
        '400': '#baa6b7',
        '500': '#a0839b',
        '600': '#85667f',
        '700': '#654e61',
        '800': '#544050',
        '900': '#4e3c4b',
      },
      'container': {
        '50': '#fff5fb',
        '100': '#feebf6',
        '200': '#fed7ee',
        '300': '#fdb0dd',
        '400': '#fb83c9',
        '500': '#f93eab',
        '600': '#da0782',
        '700': '#a80564',
        '800': '#8b0453',
        '900': '#81044d',
      },
      'card': {
        '50': '#f7f9f6',
        '100': '#eff3ed',
        '200': '#dee7da',
        '300': '#beceb6',
        '400': '#9db691',
        '500': '#759664',
        '600': '#5d7750',
        '700': '#475c3d',
        '800': '#3b4d33',
        '900': '#37462f',
      },

    },
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
    extend: {},
  },
  plugins: [],
}