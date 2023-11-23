// craco.config.js
module.exports = {
    base: '/proyecto-5-client/',
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }