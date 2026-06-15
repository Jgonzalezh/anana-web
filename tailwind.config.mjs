/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        negro: '#080c17',
        dorado: '#C9A84C',
        'dorado-claro': '#E5C96A',
        marino: '#1B3A6B',
        'marino-claro': '#244d8f',
        'fondo-card': '#0f1628',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
