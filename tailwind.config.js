/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['PoppinsRegular', 'PoppinsRegular'],
        'bodoni': ['Bodoni', 'Bodoni'],
        'garamond': ['Garamond', 'Garamond'],
        'helvetica': ['Helvetica', 'Helvetica'],
        'verdana': ['Verdana', 'Verdana'],
      }
    },
  },
  plugins: [],
}