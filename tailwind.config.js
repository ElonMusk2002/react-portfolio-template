module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Be Vietnam Pro', 'system-ui', 'sans']
    },
    extend: {
      colors: {
        white: '#fff',
        lightText: '#76797d'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
