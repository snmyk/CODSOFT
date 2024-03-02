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
      },
      fontFamily: {
        roboto: 'Roboto',
        codyStar: 'Codystar',
        anta: 'Anta'
      },
    },
  },
  plugins: [],
}

