/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        shpinscher: ["SHPinscher-Regular"],
        jogansoft: ["JoganSoft-rgwKy"]
      }
    },
  },
  plugins: [],
}

