/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        trello: {
          primary: '#5AAC44',
          secondary: '#0052cc',
          terciary: '#0065ff'
        },
        success: colors.green
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
