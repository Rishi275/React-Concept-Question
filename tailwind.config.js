/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'custom-range': { 'min': '300px', 'max': '640px' },
        'custom-range2': { 'min': '150px', 'max': '300px' },
      },
    },
  },
  plugins: [],
}

