/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
      },
      borderColor: {
        primary: 'var(--primary-color)',
      },
      textColor: {
        primary: 'var(--primary-color)',
      }
    },
  },
  plugins: [],
}
