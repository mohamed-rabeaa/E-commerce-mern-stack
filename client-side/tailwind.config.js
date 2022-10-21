/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gainsboro' : 'rgba(220, 220, 220, 0.89)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
