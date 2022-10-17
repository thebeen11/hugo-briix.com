/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {
      colors:{
      'blue-bg': '#EAF6FB',
       'primary': '#0C3F54',
       'secondary': '#1F9ED3',
       'neutral': '#333333',
       'title': '#262626',
       'blue-secondary': '#99D2EB'
      },
      padding: {
        "md-screen": "100px",
        "md-content": "160px",
        "sm-screen": "20px",
      },
    },
  },
  plugins: [],
}