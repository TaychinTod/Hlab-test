/** @type {import('tailwindcss').Config} */
import colors from './src/configs/colors'

module.exports = {
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        md: '2rem',
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors,
    },
  },
  plugins: [],
}
