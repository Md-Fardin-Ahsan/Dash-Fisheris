/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }


  module.exports = {
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(100px)', filter: 'blur(33px)' },
            '100%': { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
          },
        },
        animation: {
          'fade-in': 'fadeIn 1s ease-in-out forwards',
        },
      },
    },
    plugins: [],
  };