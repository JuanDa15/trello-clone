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
        container: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1350px',
          '2xl': '1536px'
        },
        success: colors.green
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
