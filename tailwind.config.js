module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('../assets/images/hero.jpg')",
        'body': "url('../assets/images/body.jpg')",
        'apart': "url('../assets/images/apart.jpg')",
        'last': "url('../assets/images/last.jpg')"
      }),
      colors: {
        red: '#C70F0F',
        severe: '#E67D7F',
        medium: '#F1BEBE',
        low: '#E2E2E2',
        dark: '#121212'
      },
      fontFamily: {
        'aileron': 'Aileron'
      },
      animation: {
        'bounce-slow': 'bounce 2s ease infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
