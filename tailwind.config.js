module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      lg: '992px'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
