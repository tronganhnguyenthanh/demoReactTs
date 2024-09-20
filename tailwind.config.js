const flowbite = require("flowbite-react/tailwind")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
   "./src/**/*.{js,ts,jsx,tsx}",
   flowbite.content()
  ],
  theme:{
   extend:{}
  },
  plugins:[flowbite.plugin()],
}

