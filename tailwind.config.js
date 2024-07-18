/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Extend your theme if needed
    },
  },
  variants: {
    extend: {
      // Extend variants if needed
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For WebKit */
          '-webkit-overflow-scrolling': 'touch',
          '::-webkit-scrollbar': {
            display: 'none',
          },
          /* For Internet Explorer, Edge */
          '-ms-overflow-style': 'none',
          /* For Firefox */
          'scrollbar-width': 'none',
        },
      });
    },
  ],
};
