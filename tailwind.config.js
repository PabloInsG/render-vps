/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        },
        fadeOut: {
          '0%': { opacity: '1'},
          '100%': { opacity: '0'}
        }
      },
      animation:  {
        fadeIn: 'fadeIn 1.5s  ease-in',
        fadeIn2: 'fadeIn 2.5s  ease-in',
        fadeIn3: 'fadeIn 3.5s  ease-in',
        fadeIn4: 'fadeIn 4.5s  ease-in',
      }
    },
  },
  plugins: [],
}
