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
        fadeInSmallToBig: 'fadeInSmallToBig .3s ease-out forwards',
        boing: 'slideTop 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
      },
      keyframes: {
        fadeInHorizontalFromRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0px)' },
        },
        fadeInVerticalFromBottom: {
          '0%': { opacity: '0', transform: 'translateY(40px)' }, 
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        fadeInSmallToBig: {
          '0%': { opacity: '0', scale: '0.95' }, 
          '100%': { opacity: '1', scale: '1' },
        },
        slideTop: {
          '0%': { transform: 'translateY(10)' }, 
          '100%': { transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
