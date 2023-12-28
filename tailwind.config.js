/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "src/screens/**/*.{js,jsx,ts,tsx}"],
    theme: {
       colors:{
          lightGreen: {
             100:"#C0FFB0",
          200:"#5FB363"},
          darkGreen: {100:"#3C8900",
          200:"#00803B"},
          strokeGreen:"#10C823",
       },
       fontFamily:{
         'robotoItalic':['RobotoCondensed-Regular','robotoItalic']
       },
  extend: {},
},
plugins: [],
}
