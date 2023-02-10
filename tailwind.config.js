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
        'inter': ['Inter', 'Inter'],
      },
      fontSize: {
        h1: ['22px', '24px'],
        h2: ['19px', '22px'],
        h3: ['16px', '20px'],
        p: ['13px', '18px'],
        caption: ['11px', '16px'],
        caption2: ['9px', '16px'],
      },
      textColor: {
        "social-facebook": "#35518D",
        "social-twitter": "#1DA1F2;",
        "social-google": "#4284F4;",
        "social-dribble": "#EA4C89",
        "social-github":  "#1B1F23",
      }
    },
  },
  plugins: [],
}