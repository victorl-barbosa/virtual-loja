/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'ssm': '3750px',
        '2ssm': '425px',
        '3ssm': '560px',
      },
    },
  },
  plugins: [],
}

