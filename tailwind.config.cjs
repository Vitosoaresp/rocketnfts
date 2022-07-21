/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bodyBackground: '#0e0e0e',
        colorLogo: '#ff5b50',
        cardColor: '#252525',
        textColor: '#fff',
        subtitleColor: '#5a5757',
        blackText: '#000',
        colorInput: '#0D0D0D',
      },
      fontFamily: {
        montserrat: 'Montserrat, sans-serif',
      },
      backgroundImage: {
        bgImage: 'url("../assets/background.png")',
      },
    },
  },
  plugins: [],
};
