/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'black': '#212121',
      'white-light': '#f5f5f5',
      'blue': '#2C5EBF',
      'pink': '#BF2C7B',
    },
    extend: {},
  },
  plugins: [],
};
