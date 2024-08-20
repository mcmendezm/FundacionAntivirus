/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        muted: '#f8f9f9',
        card: '#f5f7f7',
        'card-foreground': 'black',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

