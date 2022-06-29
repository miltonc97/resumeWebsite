/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      minHeight: {
           'custom': '96',
           }
      },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem'
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require('flowbite/plugin')],
}
