/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    daisyui:[
      {
        doctorThem:{
          "primary":"#19D3AE",
          secondary:'#19D3AE'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
