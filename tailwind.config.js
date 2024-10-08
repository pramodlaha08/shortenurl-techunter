/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#845ec2',
      'background': '#ff9671',
      'dark': '#4b4453'
    },
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}