/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
