const { tailwindiCustomPlugin } = require('./tailwindiCustomPlugin');

const blue = {
  '5bbaff': '#5bbaff',
  '3084c0': '#3084c0',
  cfe2ef: '#cfe2ef',
};

const green = {
  '66d1ab': '#66d1ab',
  '4ea585': '#4ea585',
  cfe7de: '#cfe7de',
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: green['66d1ab'],
          hover: green['4ea585'],
          disabled: green.cfe7de,
        },
        blue,
        green,
      },
    },
  },
  plugins: [
    ...tailwindiCustomPlugin, //
  ],
};
