/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT'
import defaultTheme from 'tailwindcss/defaultTheme';


export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
        outfit: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
})
