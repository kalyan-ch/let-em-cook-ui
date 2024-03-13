/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray" : "#31363F",
        "custom-black": "#222831",
        "custom-blue": "#76ABAE",
        "light-grey": "#EEEEEE",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

