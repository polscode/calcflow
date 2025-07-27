/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './app/**/*.{js,tsx,ts,jsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#171717',
          light: '#6555af',
          dark: '#212121'
        },
        secundary: {
          DEFAULT: '#bfb7e0',
          light: '#867bb8',
          dark: '#888'
        },
        "btn": 'btn'
      }
    },
  },
  plugins: [],
} 