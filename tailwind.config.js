import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        customPolygon: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.clip-customPolygon': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        }
      })
    }),
  ],
}

