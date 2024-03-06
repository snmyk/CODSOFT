/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitterblue: '#1DA1F2',
        gold: '#ffd900fa',
        whatsappgreen: '#128C7E',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-sarif'],
        codyStar: ['Codystar', 'sans-sarif'],
        anta: ['Anta', 'sans-sarif'],
      },
    },
  },
  plugins: [],
}

