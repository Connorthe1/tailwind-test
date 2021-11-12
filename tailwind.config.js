module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '30': '30%',
      '40': '40%'
    },
    fontFamily:{
      'mainFont': ['Epilogue','ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '5rem',
      '3.5xl': '2rem'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'secondary': '#161622',
      'main': '#030305'
    }),
    extend: {
      backgroundImage: {
        'topology1': "url('./assets/images/bg-topology1.svg')",
        'topology2': "url('./assets/images/bg-topology2.svg')",
        'topology3': "url('./assets/images/bg-topology3.svg')",
        'topology4': "url('./assets/images/bg-topology4.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
