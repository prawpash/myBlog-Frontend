/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        myGreen: '#A5E962'
      },
      fontFamily: {
        shpinscher: ["SHPinscher-Regular"],
        jogansoft: ["JoganSoft-rgwKy"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

