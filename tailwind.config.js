/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: {
          50:  '#FDEDE3',
          100: '#F9C9A8',
          200: '#F4A46A',
          300: '#E07A3A',
        },
        cream: '#FFF8F2',
        brand: {
          dark:  '#3A2010',
          mid:   '#7A4520',
          text:  '#5A3015',
          muted: '#C49070',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}