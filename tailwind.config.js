module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    typography: (theme) => ({}),
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
