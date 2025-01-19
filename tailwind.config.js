/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInHorizontalFromRight: 'fadeInHorizontalFromRight .3s ease-out forwards',
        fadeInVerticalFromBottom: 'fadeInVerticalFromBottom .2s ease-out forwards',
      },
      keyframes: {
        fadeInHorizontalFromRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0px)' },
        },
        fadeInVerticalFromBottom: {
          '0%': { opacity: '0', transform: 'translateY(40px)' }, // Cambié el valor inicial a positivo
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};
