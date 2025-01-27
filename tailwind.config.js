/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage:{
          main:"url('./assets/bg.jpg')"
        },
        colors: {
          
        },
    },
    },
    colors: {
        'custom-green': 'rgba(171, 239, 95, 0.5)',
      },
    plugins: [],
  }