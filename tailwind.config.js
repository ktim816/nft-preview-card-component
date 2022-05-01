const {fontFamily} = require('tailwindcss/defaultTheme');
const colorStyles = require('./color-styles');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: colorStyles,
    extend: {
      fontFamily: {
        sans: ['Outfit', ...fontFamily.sans],
      },
      fontSize: {
        sm: ['0.9375rem', '1.1875rem'],
        base: ['1rem', '1.25rem'],
        lg: ['1.125rem', '1.625rem'],
        xl: ['1.375rem', '1.75rem'],
      },
      borderRadius: {
        '2xl': '15px',
      },
      maxWidth: {
        auto: 'auto',
      },
      minWidth: {
        auto: 'auto',
      },
      spacing: {
        4.5: '1.1rem',
      },
    },
  },
  plugins: [],
};
