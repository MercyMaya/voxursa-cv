/**
 * Tailwind configuration.
 * We enable dark mode via class strategy so we can toggle it in JS.
 */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#8b5cf6' // This purple is our primary accent – tweak anytime
      }
    }
  },
  plugins: []
}
