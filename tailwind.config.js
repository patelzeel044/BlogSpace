/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#800000', 
      },
      fontSize: {
        '6xl': '4.75rem',
      },
    },
    colors: {
      'text': '#130105',
      'background': '#FFFFFF',
      'primary': '#6F7778',
      'secondary': '#bdcafa',
      'accent': '#6F7778',
      'red': '#e7234a',
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Poppins',
      body: 'Poppins',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  },
  plugins: [],
}
