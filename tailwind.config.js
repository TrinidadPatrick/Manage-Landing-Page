/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: 'p76px',
      xl: '1440px'
    },
    keyframes: {
      'openMenu' : {
        '0%' : {transform: 'scaleY(0)'},
        // '20%' : {transform: 'scaleY(0.1)'},
        // '40%' : {transform: 'scaleY(0.2)'},
        // '60%' : {transform: 'scaleY(0.4)'},
        // '80%' : {transform: 'scaleY(0.6)'},
        '100%' : {transform: 'scaleY(1)'},
      }
    }
    ,
    animation: {
      'openMenu' : 'openMenu 0.3s ease-in-out forwards',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 38%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleRed: 'hsl(113, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',

      }
    },
  },
  plugins: [],
}

