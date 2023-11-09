const plugin = require('tailwindcss/plugin');
const { scrollbarPlugin } = require('./scrollbar');

const tailwindiCustomPlugin = [
  plugin(({ addUtilities }) => {
    const newFlex = {
      '.flex-center': {
        display: 'flex',
        // justify-content
        '-webkit-box-pack': 'center',
        '-ms-flex-pack': 'center',
        '-webkit-justify-content': 'center',
        'justify-content': 'center',
        // align-items
        '-webkit-box-align': 'center',
        '-ms-flex-align': 'center',
        '-webkit-align-items': 'center',
        'align-items': 'center',
      },
      '.i-center': {
        '-webkit-box-align': 'center',
        '-ms-flex-align': 'center',
        '-webkit-align-items': 'center',
        'align-items': 'center',
      },
      '.j-center': {
        '-webkit-box-pack': 'center',
        '-ms-flex-pack': 'center',
        '-webkit-justify-content': 'center',
        'justify-content': 'center',
      },
    };
    addUtilities(newFlex);
  }),

  plugin(({ addUtilities }) => {
    const newShadow = {
      '.shadow-normal': {
        'box-shadow': '0 0 3px 0 rgba(0,0,0,0.3)',
        '-webkit-box-shadow': '0 0 3px 0 rgba(0,0,0,0.3)',
      },
      '.shadow-normal-darker': {
        'box-shadow': '0 0 4px 0 rgba(0,0,0,0.6)',
        '-webkit-box-shadow': '0 0 4px 0 rgba(0,0,0,0.6)',
      },
    };

    addUtilities(newShadow);
  }),
  plugin(({ addUtilities }) => {
    /**
     * https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari
     */
    const newHiddenOverflow = {
      '.hidden-overflow-with-radius': {
        '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
      },
    };

    addUtilities(newHiddenOverflow);
  }),
  scrollbarPlugin,
];

module.exports = { tailwindiCustomPlugin };
